import { buttonPrimary, buttonSecondary } from "./ui";
import { liveApps } from "./Work";

const proofPoints = [
  { value: "12+", label: "years shipping web & mobile apps" },
  // Counted from the work section, so the two never disagree.
  { value: String(liveApps.length), label: "apps live on the App Store & Google Play" },
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
    <section id="top" aria-labelledby="hero-title">
      <div className="shell grid items-start gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-7">
          <p className="inline-flex items-center gap-2.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            Taking on new projects
          </p>

          <h1
            id="hero-title"
            className="text-balance text-[2.6rem] font-medium leading-[1.05] tracking-[-0.015em] sm:text-6xl lg:text-[4.25rem]"
          >
            Web and mobile apps that launch fast and <em className="text-accent">scale with you.</em>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            I&apos;m Philip, a frontend, mobile and full-stack developer with 12+ years of experience. I help
            startups and product teams ship polished web and mobile apps, and the APIs behind them, from the
            first commit to App Store launch.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#contact" className={buttonPrimary}>
              Start your project
            </a>
            <a href="#work" className={buttonSecondary}>
              See selected work
            </a>
          </div>
          <p className="-mt-3 text-sm text-muted">No pitch deck needed. A few lines about your idea is enough.</p>

          <div className="flex w-full flex-col gap-3 sm:max-w-xl">
            <p className="font-display text-lg italic">Tech I build with</p>
            <dl className="flex flex-col divide-y divide-line border-y border-line" aria-label="Tech stack">
              {stack.map((group) => (
                <div key={group.category} className="grid gap-1 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-ink">{group.category}</dt>
                  <dd className="text-sm leading-relaxed text-muted">{group.skills.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>

          <dl className="mt-2 grid w-full grid-cols-3 gap-4 border-t border-line pt-6 sm:max-w-xl">
            {proofPoints.map((point) => (
              <div key={point.value} className="flex flex-col-reverse justify-end gap-1">
                <dt className="text-sm leading-snug text-muted">{point.label}</dt>
                <dd className="w-fit font-display text-4xl font-medium text-ink sm:text-5xl">{point.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait, with the disciplines set as its caption */}
        <figure className="mx-auto flex w-full max-w-md flex-col gap-4 lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/philip-portrait.jpg"
            alt="Philip Cesar Garay, smiling with arms crossed"
            width={880}
            height={1100}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-md bg-surface object-cover grayscale contrast-[1.05]"
          />
          <figcaption>
            <ul className="flex flex-col divide-y divide-line border-y border-line" aria-label="Disciplines">
              {disciplines.map((discipline) => (
                <li key={discipline} className="py-2.5 font-display text-lg italic">
                  {discipline}
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
