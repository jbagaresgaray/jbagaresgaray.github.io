# Contact form

The form in [`src/components/Contact.tsx`](../src/components/Contact.tsx) posts to the API route [`src/app/api/contact/route.ts`](../src/app/api/contact/route.ts). That route runs as a Vercel function and emails each submission to both `philipgaray2@gmail.com` and `dev.philipcesar@gmail.com`, following Resend's [Send emails with Next.js](https://resend.com/docs/send-with-nextjs) guide:

- The [`resend`](https://www.npmjs.com/package/resend) SDK sends the email with `resend.emails.send()`.
- The email body is the React component [`src/components/EmailTemplate.tsx`](../src/components/EmailTemplate.tsx), passed as `react`. A plain-text version goes alongside it. `@react-email/render` is installed because the SDK needs it to render the `react` template.
- Both packages are pinned to exact versions in `package.json`, like `next` and `react`.

## What it does

- **Validates** name, email, phone (optional), subject and message on both the client and the server, using the same rules from [`src/lib/contact.ts`](../src/lib/contact.ts).
- **Sends one email** to both recipients with the subject **`New Contact Form Submission: {Subject}`**. Reply-To is set to the visitor, so you can just hit Reply.
- **Drops spam silently:** a filled honeypot field, or a form submitted less than 3 seconds after the page loaded, gets a fake success and no email.
- **Rate-limits** each IP address to 5 emails per 10 minutes. The counter lives in memory, so it's per server instance. For a hard limit across all instances, add a rate-limit rule for `/api/contact` in **Vercel → Firewall**.
- **Never fakes success:** if sending fails, the visitor sees an error with your email address.

| Response | Status | Meaning |
|---|---|---|
| `{ "ok": true }` | 200 | Sent, or quietly dropped as spam |
| `{ "ok": false, "error": "bad_request" }` | 400 | Body wasn't JSON |
| `{ "ok": false, "error": "validation", "fields": {…} }` | 400 | A field failed validation |
| `{ "ok": false, "error": "rate_limited" }` | 429 | Too many messages from this IP |
| `{ "ok": false, "error": "server" }` | 500 / 502 | Key missing, or Resend rejected the email or couldn't be reached |
| `{ "ok": false, "error": "quota" }` | 503 | Resend's sending limit was hit |

## Set up Resend

### Test mode (before you verify a domain)

Without a verified domain, Resend only lets you send from `onboarding@resend.dev`, and only to the address your Resend account is registered with (`dev.philipcesar@gmail.com`). Any other recipient makes it reject the whole email with a `403 validation_error`.

So while `CONTACT_FROM_EMAIL` is empty, or set to a `@resend.dev` address, the route sends **only to `dev.philipcesar@gmail.com`** and logs a reminder. To get copies at `philipgaray2@gmail.com` in the meantime, set up a Gmail filter on dev.philipcesar@gmail.com that forwards messages with the subject "New Contact Form Submission" to it.

### Go live: send to both addresses

1. Open <https://resend.com/domains> and click **Add domain**. Enter a domain you own; Resend recommends a subdomain such as `mail.yourdomain.com`, which keeps this email's reputation separate from your main domain's.
2. Add the DNS records Resend lists (SPF and DKIM, plus the optional DMARC record) wherever your domain's DNS is managed. If the domain is on Vercel, that's **Vercel → Domains → your domain → DNS Records**.
3. Click **Verify DNS Records** in Resend and wait until the domain shows **Verified**. That's often minutes, but DNS changes can take longer to spread.
4. In Vercel, set `CONTACT_FROM_EMAIL` to an address on that domain, such as `Portfolio Contact Form <contact@mail.yourdomain.com>`, then **redeploy**. Emails will now go to both recipients automatically.

For the API key, create one at <https://resend.com/api-keys> with **Sending access**. Once your domain is verified, you can limit the key to that domain.

## Set up Vercel

In **Project → Settings → Environment Variables**, add the following for Production, Preview and Development:

| Name | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | your Resend key | Tick **Sensitive**. Server-only: never prefix it with `NEXT_PUBLIC_`. |
| `CONTACT_FROM_EMAIL` | `Portfolio Contact Form <contact@yourdomain.com>` | An address on your verified domain. The mailbox doesn't need to exist. |

Or with the Vercel CLI:

```bash
vercel env add RESEND_API_KEY
```

```bash
vercel env add CONTACT_FROM_EMAIL
```

Environment variables only apply to new deployments, so **redeploy after adding or changing them**.

## Local development

```bash
vercel env pull .env.local
```

Or copy `.env.example` to `.env.local` and fill it in, then run `npm run dev`. `.gitignore` excludes every `.env*` file except `.env.example`, so the key can't be committed by accident.

## Troubleshooting

Function logs are under **Vercel → Project → Logs** (filter by `/api/contact`). Resend's reason for a rejection is logged there; the key never is.

- **`403 validation_error`, "You can only send testing emails to your own email address (…)":** you're in test mode, and the address in the brackets doesn't match `RESEND_ACCOUNT_EMAIL` in `route.ts`, for example because you switched Resend accounts. Update the constant to match.
- **`403`, "The … domain is not verified":** `CONTACT_FROM_EMAIL` uses a domain that isn't verified in Resend yet. Finish step 3 of *Go live*, or clear the variable to go back to test mode.
- **`Missing API key. Pass it to the constructor`:** `RESEND_API_KEY` isn't set for that environment (Production, Preview or Development), or you haven't redeployed since adding it.
- **`401` / `invalid_api_key`:** the key is wrong or has been revoked.
- **Resend shows the email as delivered, but it never arrived:** check spam. Resend's own log is at <https://resend.com/emails>.
