import { CONTACT_EMAIL } from "@/lib/contact";
import ContactForm from "./ContactForm";

const nextSteps = [
  "I read your message myself and reply personally.",
  "We book a short call to talk through goals, scope and timing.",
  "You get a clear plan and estimate. No obligation.",
];

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section contact-section">
      <div className="container grid contact">
        <div className="contact__intro">
          <div className="head">
            <h2 id="contact-title">Have a project in mind? Let&apos;s make it happen.</h2>
            <p className="lead">
              Whether it&apos;s a new product, a redesign or a page that isn&apos;t converting, tell me about it.
            </p>
          </div>

          <div className="head">
            <h3>What happens next</h3>
            <ol className="next">
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="contact__email">
            <p className="label">Prefer email?</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link contact__address">
              {CONTACT_EMAIL}
            </a>
            <a href="https://www.linkedin.com/in/jbagaresgaray/" target="_blank" rel="noopener noreferrer" className="link">
              Or connect on LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* The form on a cotton letter sheet. */}
        <div className="contact__form stock">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
