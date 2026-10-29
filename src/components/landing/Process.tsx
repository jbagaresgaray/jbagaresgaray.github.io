import { SectionHeading } from "./ui";

const steps = [
  {
    title: "Discovery",
    body: "We talk through your goals, your users and your deadline, so the plan fits the business, not just the brief.",
    outcome: "A clear scope and estimate",
  },
  {
    title: "Design & copy",
    body: "Wireframes first, then polished screens with real words, not lorem ipsum. You try a clickable prototype before any code is written.",
    outcome: "A prototype you can test",
  },
  {
    title: "Build",
    body: "I develop in small, reviewable steps, so you see working progress every week instead of waiting for a big reveal.",
    outcome: "Working software, early",
  },
  {
    title: "Launch & improve",
    body: "Store releases, analytics and a look at how real people use it. Then we refine what converts.",
    outcome: "A live product that keeps getting better",
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-ink py-20 text-paper sm:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="How it works"
          title="A simple process, built around your launch."
          titleId="process-title"
          lead="No black boxes. You always know what’s happening, what’s next and what it costs."
          dark
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-start font-display text-base font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold uppercase tracking-[0.02em]">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-paper/70">{step.body}</p>
              <p className="mt-auto border-t border-paper/15 pt-4 text-sm">
                <span className="text-paper/50">You get: </span>
                {step.outcome}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
