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
      <div className="shell flex flex-col gap-10 pt-10 pb-16 sm:pt-14 lg:gap-14 lg:pt-20 lg:pb-24">
        <p className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
          Taking on new projects
        </p>

        {/* A full-width, poster-sized headline; the one phrase on the orange marker. */}
        <h1 id="hero-title" className="max-w-6xl text-balance text-[2.75rem] leading-[0.95] sm:text-7xl lg:text-[7.5rem]">
          Web and mobile apps that launch fast and <span className="marker">scale with you.</span>
        </h1>

        {/* An asymmetric 6/5 split under the headline */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-7 lg:col-span-6">
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
              <p className="text-sm font-semibold text-muted">Tech I build with</p>
              <dl className="flex flex-col divide-y divide-line border-y-2 border-ink" aria-label="Tech stack">
                {stack.map((group) => (
                  <div key={group.category} className="grid gap-1 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                    <dt className="text-sm font-bold text-ink">{group.category}</dt>
                    <dd className="text-sm leading-relaxed text-muted">{group.skills.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <dl className="mt-2 grid w-full grid-cols-3 gap-4 sm:max-w-xl">
              {proofPoints.map((point) => (
                <div key={point.value} className="flex flex-col-reverse justify-end gap-1">
                  <dt className="text-sm leading-snug text-muted">{point.label}</dt>
                  <dd className="w-fit text-5xl font-extrabold tracking-[-0.03em] [font-stretch:125%] sm:text-6xl">{point.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait, offset into the right-hand columns */}
          <div className="mx-auto flex w-full max-w-md flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/philip-portrait.jpg"
              alt="Philip Cesar Garay, smiling with arms crossed"
              width={880}
              height={1100}
              fetchPriority="high"
              className="aspect-[4/5] w-full bg-surface object-cover grayscale contrast-[1.1]"
            />
            <ul className="flex flex-col divide-y divide-line border-y-2 border-ink" aria-label="Disciplines">
              {disciplines.map((discipline) => (
                <li key={discipline} className="py-2.5 text-base font-bold">
                  {discipline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
