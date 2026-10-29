import { CONTACT_EMAIL } from "@/lib/contact";
import ContactForm from "./ContactForm";
import { ArrowUpRight } from "./ui";

const nextSteps = [
  "I read your message myself and reply personally.",
  "We book a short call to talk through goals, scope and timing.",
  "You get a clear plan and estimate. No obligation.",
];

// The orange band: every piece of text on it is full ink, the only pairing that passes.
export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-accent py-20 text-ink sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="reveal flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-6">
            <p className="flex items-baseline gap-3 text-sm font-bold">
              <span>07</span>
              Start a project
            </p>
            <h2 id="contact-title" className="text-balance text-4xl leading-[0.98] sm:text-6xl">
              Have a project in mind? Let&apos;s make it happen.
            </h2>
            <p className="text-pretty text-lg leading-relaxed">
              Whether it&apos;s a new product, a redesign or a page that isn&apos;t converting, tell me about it.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold">What happens next</h3>
            <ol className="flex flex-col gap-4">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4 text-base leading-snug">
                  <span className="w-6 shrink-0 text-xl font-extrabold [font-stretch:125%]">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t-2 border-ink pt-8 text-base">
            <p>Prefer email?</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link inline-flex min-h-11 w-fit items-center text-xl font-bold">
              {CONTACT_EMAIL}
            </a>
            <a
              href="https://www.linkedin.com/in/jbagaresgaray/"
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex min-h-11 w-fit items-center gap-1.5 font-semibold"
            >
              Or connect on LinkedIn <ArrowUpRight />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="reveal lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
