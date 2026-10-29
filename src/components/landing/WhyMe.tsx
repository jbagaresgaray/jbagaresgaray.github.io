import { Check, Cross, SectionHeading, buttonPrimary } from "./ui";

const alternatives = [
  {
    title: "Hiring an agency",
    points: [
      "Weeks of discovery before anything ships",
      "Account-management overhead in every invoice",
      "You rarely talk to the people doing the work",
    ],
  },
  {
    title: "Juggling freelancers",
    points: [
      "Three people, three schedules, three invoices",
      "Gaps between the design, the code and the words",
      "You end up as the project manager",
    ],
  },
];

const withMe = [
  "One senior partner from first sketch to launch",
  "Design, code and copy that fit together",
  "A direct line to the person doing the work",
  "Fewer handoffs, so you launch sooner",
];

export default function WhyMe() {
  return (
    <section aria-labelledby="why-title" className="py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why work with me"
          title="Most launches stall in the handoffs."
          titleId="why-title"
          lead="A designer hands off to a developer, who waits on a copywriter, while you chase all three. Every handoff costs time, money and a little of the original idea."
        />

        {/* Ruled columns instead of cards; the accent rule marks the option being argued for. */}
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {alternatives.map((option) => (
            <div key={option.title} className="flex flex-col gap-5 border-t border-line pt-6">
              <h3 className="text-2xl font-medium">{option.title}</h3>
              <ul className="flex flex-col gap-3.5">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-snug text-muted">
                    <Cross className="mt-1 h-3.5 w-3.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-5 border-t-2 border-accent pt-6">
            <h3 className="text-2xl font-medium">Working with me</h3>
            <ul className="flex flex-col gap-3.5">
              {withMe.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base leading-snug text-ink">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`${buttonPrimary} mt-auto self-start`}>
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
