import { ArrowUpRight, SectionLabel, buttonSecondary } from "./ui";

const facts = [
  { label: "Based in", value: "Manila, Philippines (UTC+8)" },
  { label: "Building since", value: "2014" },
  { label: "Clients in", value: "NZ, Australia, Singapore, Malaysia, Qatar, UK, France, US and the Philippines" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <div className="reveal flex flex-col gap-6">
          <SectionLabel index="05">About</SectionLabel>
          <h2 id="about-title" className="max-w-5xl text-balance text-4xl leading-[0.98] sm:text-5xl lg:text-7xl">
            Hi, I&apos;m Philip. I sit where design, code and words meet.
          </h2>
        </div>

        {/* Offset: facts in a narrow column, the story pushed to the right. */}
        <div className="reveal grid gap-12 lg:grid-cols-12 lg:gap-8">
          <dl className="flex flex-col divide-y divide-line border-y-2 border-ink lg:col-span-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 py-4">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="text-base font-bold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted lg:col-span-7 lg:col-start-6">
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
            <p className="text-xl font-semibold text-ink">
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
      </div>
    </section>
  );
}
