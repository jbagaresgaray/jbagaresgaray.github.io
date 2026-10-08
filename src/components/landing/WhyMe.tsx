import { ArrowRight, Check, Cross, SectionHeading, buttonLight } from "./ui";

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

        <div className="grid gap-4 lg:grid-cols-3">
          {alternatives.map((option) => (
            <div key={option.title} className="flex flex-col gap-5 rounded-xl border border-line bg-surface p-7">
              <h3 className="text-lg font-semibold uppercase tracking-[0.02em]">{option.title}</h3>
              <ul className="flex flex-col gap-3.5">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-snug text-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/[0.06] text-ink/50">
                      <Cross className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-5 rounded-xl bg-linear-to-br from-brand-start to-brand-end p-7 text-white shadow-[0_24px_50px_-20px_rgba(118,85,225,0.6)]">
            <h3 className="text-lg font-semibold uppercase tracking-[0.02em]">Working with me</h3>
            <ul className="flex flex-col gap-3.5">
              {withMe.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] leading-snug text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-ink">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`${buttonLight} mt-auto self-start`}>
              Start a project <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
