import { Check } from "./ui";

export const services = [
  {
    number: "01",
    title: "Web Apps & Frontend",
    promise: "Fast, responsive web apps that are a pleasure to use.",
    deliverables: [
      "Web apps and dashboards in React, Next.js or Angular",
      "Pixel-accurate builds from your designs",
      "Reusable component libraries and design systems",
      "State and data with Redux, NgRx or GraphQL",
    ],
    idealFor: "SaaS products, dashboards and customer portals",
  },
  {
    number: "02",
    title: "Mobile Apps",
    promise: "iOS and Android apps that feel native on every device.",
    deliverables: [
      "Cross-platform apps in React Native, Flutter or Ionic",
      "Fully native iOS and Android when you need it",
      "Device features, offline support and push notifications",
      "App Store and Google Play releases",
    ],
    idealFor: "MVPs, consumer apps and rebuilds",
  },
  {
    number: "03",
    title: "Back End & APIs",
    promise: "The APIs and data behind your apps, built to scale.",
    deliverables: [
      "REST and GraphQL APIs in Node.js, Express or NestJS",
      "MySQL/MariaDB, MongoDB or Firebase data layers",
      "Authentication, admin panels and integrations",
      "Desktop apps with Electron",
    ],
    idealFor: "Products that need one developer across the whole stack",
  },
];

// Mirrors the skills table on the résumé, in the same order. Also read by the structured data.
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

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section">
      <div className="container">
        <div className="head">
          <h2 id="services-title">Web, mobile and back end. One developer.</h2>
          <p className="lead">
            Hire me for one layer or the whole stack. Projects that need a web app, a mobile app and the API behind
            them are where I save clients the most time.
          </p>
          <a href="#contact" className="btn btn--card head__action">
            Get a project estimate
          </a>
        </div>

        {/* Rows: the three services are parallel offers, read down the page one at a time. */}
        <ol className="offers">
          {services.map((service) => (
            <li key={service.title} className="grid offers__row">
              <span className="num offers__num">{service.number}</span>
              <div className="offers__name">
                <h3>{service.title}</h3>
                <p className="muted">{service.promise}</p>
              </div>
              <ul className="ticks">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="offers__fit">
                <span className="label">Ideal for</span>
                {service.idealFor}
              </p>
            </li>
          ))}
        </ol>

        {/* The stack as index cards, each tab offset like a card file. */}
        <div className="stack">
          <h3>Tech I build with</h3>
          <dl className="cards">
            {stack.map((group) => (
              <div key={group.category} className="cards__card stock">
                <dt className="cards__tab stock">{group.category}</dt>
                <dd>{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
