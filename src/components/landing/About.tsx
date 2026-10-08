import { ArrowUpRight, Eyebrow, buttonSecondary } from "./ui";

const facts = [
  { label: "Based in", value: "Manila, Philippines (UTC+8)" },
  { label: "Building since", value: "2014" },
  { label: "Clients in", value: "NZ, Australia, Singapore, Malaysia, Qatar, UK, France, US and the Philippines" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <Eyebrow>About</Eyebrow>
          <h2 id="about-title" className="text-balance text-3xl font-bold uppercase leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
            Hi, I&apos;m Philip. I sit where design, code and words meet.
          </h2>
          <dl className="mt-4 flex flex-col divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="text-[15px] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted">
          <p>
            For more than 12 years I&apos;ve helped startups and established companies turn ideas into apps for iOS,
            Android, web and desktop, from a #1 mindfulness app in New Zealand to products for AirAsia, Wander and
            FutureMe.
          </p>
          <p>
            Along the way I learned that great products don&apos;t fail on technology. They fail in the gaps: a
            design that ignores real-world edge cases, code that loses what made the design good, copy written
            last and in a hurry.
          </p>
          <p className="text-ink">
            So I close those gaps myself. I design the experience, build it properly and write the words that
            explain it, so you get one consistent product and one person who is accountable for it.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://www.linkedin.com/in/jbagaresgaray/" target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              Connect on LinkedIn <ArrowUpRight />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href="https://github.com/jbagaresgaray" target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              View GitHub <ArrowUpRight />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
