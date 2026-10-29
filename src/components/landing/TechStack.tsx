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

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading eyebrow="Tech I build with" title="The tools behind the apps." titleId="stack-title" />

        <dl className="reveal flex flex-col divide-y divide-line border-y border-line">
          {stack.map((group) => (
            <div key={group.category} className="grid gap-4 py-6 sm:gap-5 sm:py-8 lg:grid-cols-[14rem_1fr] lg:gap-10">
              <dt className="font-display text-xl font-bold uppercase sm:text-2xl">{group.category}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-5">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="inline-flex items-center gap-3 text-base font-medium sm:text-[17px]">
                      <span className="flex shrink-0 gap-1.5">
                        {skill.logos?.map((logo) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={logo}
                            src={`/images/stack/${logo}.svg`}
                            alt=""
                            width={36}
                            height={36}
                            loading="lazy"
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
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
