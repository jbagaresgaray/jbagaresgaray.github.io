// Contact form rules, shared by the form (src/components/landing/ContactForm.tsx) and the
// API route that sends the email (src/app/api/contact/route.ts).

export const CONTACT_EMAIL = "dev.philipcesar@gmail.com";

export const CONTACT_SUBJECTS = [
  "Mobile App Project",
  "Web App Project",
  "Job Opportunity",
  "Existing App Support",
  "Consulting / Code Review",
  "General Inquiry",
] as const;

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string; fields?: ContactErrors };

export const MAX_LENGTH = { name: 100, email: 254, phone: 30, message: 5000 };
const MIN_MESSAGE_LENGTH = 10;
const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/;
const PHONE_PATTERN = /^\+?[0-9 ().-]+$/;

export function validateField(field: ContactField, raw: string): string | undefined {
  const value = raw.trim();
  switch (field) {
    case "name":
      if (value.length < 2) return "Please enter your full name.";
      if (value.length > MAX_LENGTH.name) return "Name must be 100 characters or fewer.";
      return;
    case "email":
      if (!value) return "Please enter your email address.";
      if (value.length > MAX_LENGTH.email || !EMAIL_PATTERN.test(value)) {
        return "Please enter a valid email address, like name@example.com.";
      }
      return;
    case "phone": {
      if (!value) return;
      const digits = value.replace(/\D/g, "").length;
      if (value.length > MAX_LENGTH.phone || !PHONE_PATTERN.test(value) || digits < 7 || digits > 15) {
        return "Please enter a valid phone number, or leave it blank.";
      }
      return;
    }
    case "subject":
      if (!(CONTACT_SUBJECTS as readonly string[]).includes(value)) return "Please choose a subject.";
      return;
    case "message":
      if (!value) return "Please enter a message.";
      if (value.length < MIN_MESSAGE_LENGTH) {
        return "Please add a little more detail (at least 10 characters).";
      }
      if (value.length > MAX_LENGTH.message) return "Message must be 5,000 characters or fewer.";
      return;
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of Object.keys(values) as ContactField[]) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

export async function submitContact(
  values: ContactValues,
  spamChecks: { website: string; elapsed: number },
): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, ...spamChecks }),
      signal: AbortSignal.timeout(15000),
    });
    const data = (await response.json()) as SubmitResult;
    return data && typeof data.ok === "boolean" ? data : { ok: false, error: "server" };
  } catch {
    return { ok: false, error: "network" };
  }
}
