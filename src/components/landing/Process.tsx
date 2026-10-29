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
    <section id="process" aria-labelledby="process-title" className="bg-surface py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="How it works"
          title="A simple process, built around your launch."
          titleId="process-title"
          lead="No black boxes. You always know what’s happening, what’s next and what it costs."
        />

        {/* A numbered sequence along one rule, so the order reads before the detail. */}
        <ol className="grid gap-10 border-t border-ink pt-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="text-5xl font-bold tracking-[-0.03em]">{i + 1}</span>
              <h3 className="text-xl font-bold tracking-[-0.01em]">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted">{step.body}</p>
              <p className="mt-auto border-t border-line pt-4 text-sm">
                <span className="text-muted">You get: </span>
                {step.outcome}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
