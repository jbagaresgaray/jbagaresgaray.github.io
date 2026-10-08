import { CONTACT_EMAIL } from "@/lib/contact";
import ContactForm from "./ContactForm";
import { ArrowUpRight, Eyebrow } from "./ui";

const nextSteps = [
  "I read your message myself and reply personally.",
  "We book a short call to talk through goals, scope and timing.",
  "You get a clear plan and estimate. No obligation.",
];

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28">
      {/* Soft brand glow in the corner of the dark band. */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-end/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow dark>Start a project</Eyebrow>
            <h2 id="contact-title" className="text-balance text-4xl font-bold uppercase leading-[1.08] sm:text-5xl">
              Have a project in mind? Let&apos;s make it <span className="gradient-text-light">happen.</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-paper/70">
              Whether it&apos;s a new product, a redesign or a page that isn&apos;t converting, tell me about it.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-light">What happens next</h3>
            <ol className="flex flex-col gap-4">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-[15px] leading-snug text-paper/85">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-brand-start to-brand-end font-display text-[13px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-paper/15 pt-8 text-[15px]">
            <p className="text-paper/60">Prefer email?</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link w-fit text-xl font-medium">
              {CONTACT_EMAIL}
            </a>
            <a
              href="https://www.linkedin.com/in/jbagaresgaray/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-paper/70 transition-colors hover:text-paper"
            >
              Or connect on LinkedIn <ArrowUpRight />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
