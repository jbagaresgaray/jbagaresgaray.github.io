import type { CSSProperties } from "react";
import type { ContactValues } from "@/lib/contact";

// Notification email for contact form submissions, rendered by Resend in
// src/app/api/contact/route.ts. Email clients ignore stylesheets, so styles are inline.

type EmailTemplateProps = ContactValues & { submittedAt: string };

const labelCell: CSSProperties = { padding: "6px 16px 6px 0", color: "#666", verticalAlign: "top" };
const valueCell: CSSProperties = { padding: "6px 0" };

export default function EmailTemplate({ name, email, phone, subject, message, submittedAt }: EmailTemplateProps) {
  const details: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Subject", subject],
    ["Submitted", submittedAt],
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: 14, lineHeight: 1.5, color: "#111" }}>
      <p>You have received a new message from your website contact form.</p>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {details.map(([label, value]) => (
            <tr key={label}>
              <td style={labelCell}>{label}</td>
              <td style={valueCell}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "20px 0 6px", color: "#666" }}>Message</p>
      <div style={{ whiteSpace: "pre-wrap", padding: "12px 16px", background: "#f5f5f5", borderRadius: 6 }}>
        {message}
      </div>
      <p style={{ marginTop: 20, color: "#666" }}>Reply to this email to respond to {name}.</p>
    </div>
  );
}
