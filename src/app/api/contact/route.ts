import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import { validateContact, type ContactValues, type SubmitResult } from "@/lib/contact";

// Contact form endpoint: validates a submission and emails it with the Resend SDK
// (https://resend.com/docs/send-with-nextjs).
// Needs RESEND_API_KEY (and, once your domain is verified, CONTACT_FROM_EMAIL)
// in Vercel's environment variables. Setup: docs/contact-form.md.

const RECIPIENTS = ["philipgaray2@gmail.com", "dev.philipcesar@gmail.com"];
// Resend's shared test sender (used until CONTACT_FROM_EMAIL is set to an address on
// a verified domain) rejects any email addressed to someone other than the Resend
// account owner, so in that mode the email goes to the owner only.
const TEST_SENDER = "Portfolio Contact Form <onboarding@resend.dev>";
const RESEND_ACCOUNT_EMAIL = "dev.philipcesar@gmail.com";

// Throws "Missing API key" on the first request if RESEND_API_KEY isn't set.
const resend = new Resend(process.env.RESEND_API_KEY);

// Anti-spam. A real person takes longer than this to fill in the form.
const MIN_FILL_TIME_MS = 3000;
// Per-IP send limit. Kept in memory, so it's per server instance: enough to blunt
// a bot hammering the form. Use Vercel Firewall rate limiting for a hard cap.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentSends = new Map<string, number[]>();

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
    if (!body || typeof body !== "object") throw new Error("Body is not an object");
  } catch {
    return reply({ ok: false, error: "bad_request" }, 400);
  }

  // Report success to bots so they don't learn to dodge the traps.
  const honeypotFilled = typeof body.website === "string" && body.website.trim() !== "";
  if (honeypotFilled || !(Number(body.elapsed) >= MIN_FILL_TIME_MS)) {
    console.log("Dropped a submission caught by the spam checks.");
    return reply({ ok: true });
  }

  const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  const values: ContactValues = {
    name: text(body.name).replace(/\s+/g, " "),
    email: text(body.email),
    phone: text(body.phone),
    subject: text(body.subject),
    message: text(body.message),
  };
  const fields = validateContact(values);
  if (Object.keys(fields).length > 0) return reply({ ok: false, error: "validation", fields }, 400);

  if (!withinRateLimit(clientIp(request))) return reply({ ok: false, error: "rate_limited" }, 429);

  const submittedAt = `${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Manila",
  }).format(new Date())} (Manila time)`;

  const from = process.env.CONTACT_FROM_EMAIL || TEST_SENDER;
  const usingTestSender = /@resend\.dev>?$/.test(from.trim());
  if (usingTestSender) {
    console.warn(
      `Using Resend's test sender, so only ${RESEND_ACCOUNT_EMAIL} gets this email. ` +
        "Verify a domain and set CONTACT_FROM_EMAIL to reach every recipient (docs/contact-form.md).",
    );
  }

  try {
    const { error } = await resend.emails.send({
      from,
      to: usingTestSender ? [RESEND_ACCOUNT_EMAIL] : RECIPIENTS,
      replyTo: values.email,
      subject: `New Contact Form Submission: ${values.subject}`,
      react: EmailTemplate({ ...values, submittedAt }),
      text: plainTextVersion(values, submittedAt),
    });
    if (error) {
      // Resend explains rejections, such as an unverified domain or an invalid key.
      console.error(`Resend rejected the email (${error.statusCode ?? "no status"} ${error.name}): ${error.message}`);
      return error.statusCode === 429
        ? reply({ ok: false, error: "quota" }, 503)
        : reply({ ok: false, error: "server" }, 502);
    }
  } catch (err) {
    console.error("Could not send through Resend:", err);
    return reply({ ok: false, error: "server" }, 502);
  }

  return reply({ ok: true });
}

function reply(result: SubmitResult, status = 200) {
  return NextResponse.json(result, { status });
}

function clientIp(request: Request) {
  // Vercel sets x-forwarded-for itself, so the first entry is the real client.
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}

function withinRateLimit(ip: string) {
  const now = Date.now();
  const recent = (recentSends.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return false;
  recent.push(now);
  recentSends.set(ip, recent);
  // Forget idle visitors so a long-lived instance doesn't grow without bound.
  if (recentSends.size > 1000) {
    for (const [key, times] of recentSends) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) recentSends.delete(key);
    }
  }
  return true;
}

function plainTextVersion(values: ContactValues, submittedAt: string) {
  return [
    "You have received a new message from your website contact form.",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Subject: ${values.subject}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    values.message,
    "",
    `Reply to this email to respond to ${values.name}.`,
  ].join("\n");
}
