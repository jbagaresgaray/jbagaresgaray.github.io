import { Plus, SectionHeading } from "./ui";

export const faqs = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Web apps, mobile apps and the APIs behind them: MVPs for new products, rebuilds of apps that have outgrown their first version, and new features for products already in the stores. If you’re not sure it’s a fit, ask. I’ll tell you honestly.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "On the frontend, React, Next.js and Angular. For mobile, React Native, Flutter, Ionic, or fully native iOS and Android. On the back end, Node.js with Express or NestJS, with MySQL, MongoDB or Firebase. I’ll recommend what fits your product and team, not just what I like best.",
  },
  {
    question: "Can you build from our designs?",
    answer:
      "Yes. Turning a designer’s mockups into responsive, working screens is a big part of what I do, and I’ll flag missing states like loading, errors and empty screens early. If there’s no designer on the project, I can design a clean, practical interface myself.",
  },
  {
    question: "Can you join my existing team or codebase?",
    answer:
      "Yes. I’ve worked inside in-house teams at companies like AirAsia, Perx and Wander. I’m comfortable picking up an existing codebase, following your conventions and shipping alongside your developers.",
  },
  {
    question: "Do you handle App Store and Google Play releases?",
    answer:
      "Yes. I’ve shipped apps for Purpl, Wander, FutureMe, Dish Dash Dine and TaskSpur, so I can take care of builds, signing, store listings and review submissions for you.",
  },
  {
    question: "How do we work across time zones?",
    answer:
      "I’m based in Manila (UTC+8), which overlaps with business hours in Australia, afternoons in New Zealand, mornings in Europe and evenings in the US. Most updates happen in writing, with calls when they’re useful.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I can stay on for bug fixes, performance work and new features, or hand everything over with documentation so your team can take it from there.",
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions clients usually ask."
          titleId="faq-title"
          lead={
            <>
              Something else on your mind?{" "}
              <a href="#contact" className="link text-ink">
                Ask me directly
              </a>
              .
            </>
          }
        />

        <div className="flex flex-col divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-medium transition-colors hover:text-brand-start [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-brand-start transition duration-300 group-open:rotate-45 group-open:border-transparent group-open:bg-linear-to-br group-open:from-brand-start group-open:to-brand-end group-open:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 pr-12 text-pretty text-[15px] leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
