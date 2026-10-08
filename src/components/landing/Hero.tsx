import { ArrowRight, buttonPrimary, buttonSecondary } from "./ui";

const proofPoints = [
  { value: "12+", label: "years shipping web & mobile apps" },
  { value: "5", label: "apps live on the App Store & Google Play" },
  { value: "9", label: "countries of clients, from NZ to France" },
];

const disciplines = ["Frontend development", "Mobile apps · iOS & Android", "Full-stack development"];

// Mirrors the skills table on the résumé, in the same order.
export const stack = [
  { category: "Languages", skills: ["TypeScript", "JavaScript", "HTML5", "CSS", "Sass/SCSS"] },
  {
    category: "Mobile",
    skills: [
      "React Native",
      "Flutter",
      "Ionic (Angular, React, Vue)",
      "Capacitor",
      "Cordova",
      "Native iOS & Android",
      "App Store & Google Play releases",
    ],
  },
  {
    category: "Web frontend",
    skills: ["React", "Angular", "AngularJS", "Vue", "Angular Material", "Material UI", "Bootstrap", "Nx monorepos"],
  },
  {
    category: "State & data",
    skills: ["Redux Toolkit", "Redux Thunk", "NgRx", "GraphQL", "Apollo Client", "REST APIs"],
  },
  { category: "Backend", skills: ["Node.js", "Express", "NestJS", "MySQL/MariaDB", "MongoDB", "Firebase"] },
  { category: "Desktop", skills: ["Electron", "OpenFin"] },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Faded giant word behind the hero, as on Satner. */}
      <p
        className="pointer-events-none absolute top-10 -left-4 font-display text-[22vw] leading-none font-bold whitespace-nowrap text-brand-start/[0.045] uppercase select-none lg:top-16 lg:text-[15rem]"
        aria-hidden="true"
      >
        Developer
      </p>
      <div className="shell relative grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-7">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pr-4 pl-2.5 text-sm font-medium shadow-[0_6px_20px_-8px_rgba(68,88,220,0.25)]">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            Taking on new projects
          </p>

          <h1
            id="hero-title"
            className="text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.01em] sm:text-6xl lg:text-[4.25rem]"
          >
            Web and mobile apps that launch fast and <span className="gradient-text">scale with you.</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            I&apos;m Philip, a frontend, mobile and full-stack developer with 12+ years of experience. I help
            startups and product teams ship polished web and mobile apps, and the APIs behind them, from the
            first commit to App Store launch.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#contact" className={buttonPrimary}>
              Start your project <ArrowRight />
            </a>
            <a href="#work" className={buttonSecondary}>
              See selected work
            </a>
          </div>
          <p className="-mt-3 text-sm text-muted">No pitch deck needed. A few lines about your idea is enough.</p>

          <div className="flex w-full flex-col gap-3 sm:max-w-xl">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-ink">Tech I build with</p>
            <dl className="flex flex-col divide-y divide-line border-y border-line" aria-label="Tech stack">
              {stack.map((group) => (
                <div key={group.category} className="grid gap-1 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                  <dt className="font-display text-[13px] font-medium text-ink">{group.category}</dt>
                  <dd className="text-[13px] leading-relaxed text-muted">{group.skills.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>

          <dl className="mt-2 grid w-full grid-cols-3 gap-4 border-t border-line pt-6 sm:max-w-xl">
            {proofPoints.map((point) => (
              <div key={point.value} className="flex flex-col-reverse justify-end gap-1">
                <dt className="text-[13px] leading-snug text-muted sm:text-sm">{point.label}</dt>
                <dd className="gradient-text w-fit font-display text-3xl font-bold sm:text-4xl">{point.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-linear-to-br from-brand-start to-brand-end opacity-90 sm:h-56 sm:w-56"
            aria-hidden="true"
          />
          <div className="dot-grid absolute -bottom-6 -left-6 h-28 w-36 opacity-40 sm:h-36 sm:w-44" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border-4 border-white bg-surface shadow-[0_30px_60px_-25px_rgba(68,88,220,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/philip-portrait.jpg"
              alt="Philip Cesar Garay, smiling with arms crossed"
              width={880}
              height={1100}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover grayscale contrast-[1.05]"
            />
          </div>

          <ul className="absolute top-6 -left-3 hidden flex-col gap-2 sm:flex sm:-left-8" aria-label="Disciplines">
            {disciplines.map((discipline) => (
              <li
                key={discipline}
                className="w-fit rounded-md bg-white px-3.5 py-2 font-display text-[12px] font-medium tracking-[0.04em] text-brand-ink uppercase shadow-[0_10px_30px_-8px_rgba(68,88,220,0.35)]"
              >
                {discipline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
