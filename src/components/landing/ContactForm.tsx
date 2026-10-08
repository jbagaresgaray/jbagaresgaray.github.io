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
import { ArrowRight, Check } from "./ui";

const emptyValues: ContactValues = { name: "", email: "", phone: "", subject: "", message: "" };
const fieldOrder: ContactField[] = ["name", "email", "phone", "subject", "message"];

const fieldClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand-start focus:bg-white focus:shadow-[0_0_0_3px_rgba(68,88,220,0.12)] aria-[invalid=true]:border-error";
const labelClass = "font-display text-sm font-medium text-ink";

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

function FieldError({ field, error }: { field: ContactField; error?: string }) {
  if (!error) return null;
  return (
    <p id={`contact-${field}-error`} className="text-[13px] text-error">
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
        className="flex min-h-[28rem] flex-col items-start justify-center gap-5 rounded-xl bg-white p-7 text-ink outline-none sm:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-linear-to-br from-brand-start to-brand-end text-white shadow-[0_10px_30px_rgba(118,85,225,0.35)]">
          <Check className="h-6 w-6" />
        </span>
        <p className="font-display text-2xl font-semibold">Thank you, your message has been sent.</p>
        <p className="text-[15px] text-muted">I&apos;ll reply to the email address you gave me.</p>
        <button type="button" onClick={resetForm} className="link text-sm font-medium">
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
      className="relative flex flex-col gap-5 rounded-xl bg-white p-6 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className={labelClass}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            required
            maxLength={MAX_LENGTH.name}
            className={fieldClass}
            placeholder="Jane Smith"
          />
          <FieldError field="name" error={errors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={labelClass}>
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            maxLength={MAX_LENGTH.email}
            className={fieldClass}
            placeholder="jane@company.com"
          />
          <FieldError field="email" error={errors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className={labelClass}>
            Phone Number <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={MAX_LENGTH.phone}
            className={fieldClass}
            placeholder="+1 555 010 0100"
          />
          <FieldError field="phone" error={errors.phone} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className={labelClass}>
            What do you need? <span aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              {...fieldProps("subject")}
              required
              className={`${fieldClass} appearance-none pr-10 ${values.subject ? "" : "text-ink/35"}`}
            >
              <option value="" disabled>
                Select a subject
              </option>
              {CONTACT_SUBJECTS.map((subject) => (
                <option key={subject} value={subject} className="text-ink">
                  {subject}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <FieldError field="subject" error={errors.subject} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={labelClass}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          {...fieldProps("message")}
          rows={5}
          required
          maxLength={MAX_LENGTH.message}
          className={`${fieldClass} resize-y`}
          placeholder="What are you building, who is it for, and when do you need it?"
        />
        <FieldError field="message" error={errors.message} />
      </div>

      {/* Honeypot: invisible to people, tempting to bots. Must stay empty. */}
      <div aria-hidden="true" className="absolute top-auto -left-[10000px] h-px w-px overflow-hidden">
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
        <p role="alert" className="rounded-md border border-error/30 bg-error/5 px-4 py-3 text-sm text-ink">
          {errorMessage(submitError)}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-brand-start to-brand-end px-6 py-4 font-display text-sm font-medium uppercase tracking-[0.06em] text-white shadow-[0_10px_30px_rgba(118,85,225,0.3)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-start disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        {status !== "sending" && <ArrowRight />}
      </button>
      <p className="text-center text-[13px] text-muted">
        Fields marked * are required. Your details are only used to reply to you.
      </p>
    </form>
  );
}
