import type { CSSProperties } from "react";
import { SectionHeading } from "./ui";

type Skill = { name: string; logos?: string[]; mark?: string };

// Mirrors the skills table on the résumé, in the same order. Logos are full-colour files in
// public/images/stack (see the README there). REST APIs and OpenFin have no logo, so they get
// a neutral tile with a short mark instead.
export const stack: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", logos: ["typescript"] },
      { name: "JavaScript", logos: ["javascript"] },
      { name: "HTML5", logos: ["html5"] },
      { name: "CSS", logos: ["css"] },
      { name: "Sass/SCSS", logos: ["sass"] },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", logos: ["react"] },
      { name: "Flutter", logos: ["flutter"] },
      { name: "Ionic (Angular, React, Vue)", logos: ["ionic"] },
      { name: "Capacitor", logos: ["capacitor"] },
      { name: "Cordova", logos: ["cordova"] },
      { name: "Native iOS & Android", logos: ["apple", "android"] },
      { name: "App Store & Google Play releases", logos: ["app-store", "google-play"] },
    ],
  },
  {
    category: "Web frontend",
    skills: [
      { name: "React", logos: ["react"] },
      { name: "Angular", logos: ["angular"] },
      { name: "AngularJS", logos: ["angularjs"] },
      { name: "Vue", logos: ["vue"] },
      { name: "Angular Material", logos: ["angular-material"] },
      { name: "Material UI", logos: ["material-ui"] },
      { name: "Bootstrap", logos: ["bootstrap"] },
      { name: "Nx monorepos", logos: ["nx"] },
    ],
  },
  {
    category: "State & data",
    skills: [
      { name: "Redux Toolkit", logos: ["redux"] },
      { name: "Redux Thunk", logos: ["redux"] },
      { name: "NgRx", logos: ["ngrx"] },
      { name: "GraphQL", logos: ["graphql"] },
      { name: "Apollo Client", logos: ["apollo"] },
      { name: "REST APIs", mark: "{ }" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", logos: ["nodejs"] },
      { name: "Express", logos: ["express"] },
      { name: "NestJS", logos: ["nestjs"] },
      { name: "MySQL/MariaDB", logos: ["mysql", "mariadb"] },
      { name: "MongoDB", logos: ["mongodb"] },
      { name: "Firebase", logos: ["firebase"] },
    ],
  },
  {
    category: "Desktop",
    skills: [
      { name: "Electron", logos: ["electron"] },
      { name: "OpenFin", mark: "OF" },
    ],
  },
];

// Each carousel lane repeats its tools until it holds at least this many, so even a short
// row (Desktop has two) fills the lane with no gap before it loops.
const minPerLane = 8;

// Carousel logos load up front at low priority: lazy loading waits until an image is visible,
// and the lane's clipped edges never count as visible, so logos would pop in as they slide on.
function SkillBadge({ skill, eager = false }: { skill: Skill; eager?: boolean }) {
  return (
    <>
      <span className="flex shrink-0 gap-1.5">
        {skill.logos?.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo}
            src={`/images/stack/${logo}.svg`}
            alt=""
            width={36}
            height={36}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "low" : undefined}
            decoding="async"
            className="h-8 w-8 sm:h-9 sm:w-9"
          />
        ))}
        {skill.mark && (
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface font-display text-xs font-semibold text-muted sm:h-9 sm:w-9"
          >
            {skill.mark}
          </span>
        )}
      </span>
      {skill.name}
    </>
  );
}

const badgeClass = "inline-flex items-center gap-3 whitespace-nowrap text-base font-medium sm:text-[17px]";

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" data-stack className="py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Tech I build with" title="The tools behind the apps." titleId="stack-title" />
          {/* Pauses every lane. A native checkbox, so it works without JavaScript; hidden under
              reduced motion, where the lanes are replaced by a static list. */}
          <label className="marquee-toggle hidden min-h-11 shrink-0 items-center gap-2 self-start rounded-md border border-line px-4 font-display text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-brand-ink has-checked:border-brand-ink has-checked:bg-brand-soft has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-start motion-safe:inline-flex sm:self-auto">
            <input type="checkbox" className="peer sr-only" />
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 peer-checked:hidden">
              <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="hidden h-3.5 w-3.5 peer-checked:block">
              <path d="M7 4.5v15l12-7.5z" />
            </svg>
            Pause motion
          </label>
        </div>

        <dl className="reveal flex flex-col divide-y divide-line border-y border-line">
          {stack.map((group, row) => {
            const lane = Array.from({ length: Math.ceil(minPerLane / group.skills.length) }, () => group.skills).flat();
            return (
              <div
                key={group.category}
                data-direction={row % 2 ? "reverse" : undefined}
                className="grid gap-4 py-6 sm:gap-5 sm:py-8 lg:grid-cols-[14rem_1fr] lg:items-center lg:gap-10"
              >
                <dt className="font-display text-xl font-bold uppercase sm:text-2xl">{group.category}</dt>
                <dd className="min-w-0">
                  {/* The real list: shown as is under reduced motion, read by screen readers otherwise. */}
                  <ul className="flex flex-wrap gap-x-6 gap-y-4 motion-safe:sr-only sm:gap-x-8 sm:gap-y-5">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className={badgeClass}>
                        <SkillBadge skill={skill} />
                      </li>
                    ))}
                  </ul>
                  {/* The carousel: the lane twice over, sliding one lane-width and looping. Items must not
                      shrink, or the lane squeezes them and eats the gap between tools. */}
                  <div
                    aria-hidden="true"
                    className="marquee hidden motion-safe:flex"
                    style={{ "--marquee-duration": `${lane.length * 4}s` } as CSSProperties}
                  >
                    <ul className="marquee-track shrink-0">
                      {[...lane, ...lane].map((skill, i) => (
                        <li key={i} className={`${badgeClass} shrink-0 pr-10 sm:pr-14`}>
                          <SkillBadge skill={skill} eager />
                        </li>
                      ))}
                    </ul>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
