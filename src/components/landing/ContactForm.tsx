"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_SUBJECTS,
  MAX_LENGTH,
  submitContact,
  validateContact,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/contact";
import { Check, ChevronDown } from "./ui";

const emptyValues: ContactValues = { name: "", email: "", phone: "", subject: "", message: "" };
const fieldOrder: ContactField[] = ["name", "email", "phone", "subject", "message"];


function errorMessage(error: string) {
  if (error === "validation") return <>Please fix the highlighted fields and try again.</>;
  if (error === "rate_limited") {
    return <>You&apos;ve sent a few messages already. Please wait a few minutes before trying again.</>;
  }
  return (
    <>
      Sorry, it seems that my mail server is not responding. Please try again later, or email me directly at{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className="link font-medium">
        {CONTACT_EMAIL}
      </a>
      .
    </>
  );
}

// Always rendered, empty until there is an error, so its line is held and the fields below
// don't jump when one appears.
function FieldError({ field, error }: { field: ContactField; error?: string }) {
  return (
    <p id={`contact-${field}-error`} className="field-error">
      {error}
    </p>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = e.target.name as ContactField;
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    // Once a field has been flagged, clear the error as soon as it's fixed.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = e.target.name as ContactField;
    // Don't flag empty fields people are just tabbing past; submit catches those.
    if (e.target.value) setErrors((prev) => ({ ...prev, [field]: validateField(field, e.target.value) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((field) => found[field]);
    if (firstInvalid) {
      setStatus("idle");
      (formRef.current?.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    const result = await submitContact(values, {
      website: honeypot,
      elapsed: Date.now() - startedAt.current,
    });

    if (result.ok) {
      setValues(emptyValues);
      setHoneypot("");
      setStatus("sent");
      return;
    }
    if (result.fields) setErrors(result.fields);
    setSubmitError(result.error);
    setStatus("error");
  };

  const resetForm = () => {
    startedAt.current = Date.now();
    setErrors({});
    setStatus("idle");
  };

  const fieldProps = (field: ContactField) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  if (status === "sent") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="form-done"
      >
        <Check size={32} />
        <p className="form-done__title">Thank you, your message has been sent.</p>
        <p className="muted">I&apos;ll reply to the email address you gave me.</p>
        <button type="button" onClick={resetForm} className="btn btn--card">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="titleblock"
    >
        <div className="titleblock__cell">
          <label htmlFor="contact-name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            required
            maxLength={MAX_LENGTH.name}
            className="field"
            placeholder="Your name"
          />
          <FieldError field="name" error={errors.name} />
        </div>
        <div className="titleblock__cell">
          <label htmlFor="contact-email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            maxLength={MAX_LENGTH.email}
            className="field"
            placeholder="you@example.com"
          />
          <FieldError field="email" error={errors.email} />
        </div>
        <div className="titleblock__cell">
          <label htmlFor="contact-phone">
            Phone number <span className="muted">(optional)</span>
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={MAX_LENGTH.phone}
            className="field"
            placeholder="Include your country code"
          />
          <FieldError field="phone" error={errors.phone} />
        </div>
        <div className="titleblock__cell">
          <label htmlFor="contact-subject">
            What do you need? <span aria-hidden="true">*</span>
          </label>
          <div className="select">
            <select {...fieldProps("subject")} required className="field">
              <option value="" disabled>
                Select a subject
              </option>
              {CONTACT_SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
          <FieldError field="subject" error={errors.subject} />
        </div>

        <div className="titleblock__cell titleblock__cell--wide">
          <label htmlFor="contact-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          {...fieldProps("message")}
          rows={5}
          required
          maxLength={MAX_LENGTH.message}
          className="field"
          placeholder="What are you building, who is it for, and when do you need it?"
        />
        <FieldError field="message" error={errors.message} />
      </div>

      {/* Honeypot: invisible to people, tempting to bots. Must stay empty. */}
      <div aria-hidden="true" className="honeypot">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="form-alert">
          {errorMessage(submitError)}
        </p>
      )}

      <div className="titleblock__foot">
        <button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className="btn btn--ink"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="label">Fields marked * are required. Your details are only used to reply to you.</p>
      </div>
    </form>
  );
}
