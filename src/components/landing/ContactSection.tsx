import { CONTACT_EMAIL } from "@/lib/contact";
import ContactForm from "./ContactForm";
import { ArrowUpRight, SectionLabel } from "./ui";

const nextSteps = [
  "I read your message myself and reply personally.",
  "We book a short call to talk through goals, scope and timing.",
  "You get a clear plan and estimate. No obligation.",
];

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink py-20 text-paper sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionLabel dark>Start a project</SectionLabel>
            <h2 id="contact-title" className="text-balance text-4xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Have a project in mind? Let&apos;s make it happen.
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-paper/70">
              Whether it&apos;s a new product, a redesign or a page that isn&apos;t converting, tell me about it.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-paper/65">What happens next</h3>
            <ol className="flex flex-col gap-4">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4 text-base leading-snug text-paper/85">
                  <span className="w-4 shrink-0 text-lg font-bold text-paper">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-paper/15 pt-8 text-base">
            <p className="text-paper/60">Prefer email?</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link inline-flex min-h-11 w-fit items-center text-xl font-medium">
              {CONTACT_EMAIL}
            </a>
            <a
              href="https://www.linkedin.com/in/jbagaresgaray/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-fit items-center gap-1.5 text-paper/70 transition-colors hover:text-paper"
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
