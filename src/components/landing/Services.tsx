import { Check, SectionHeading, buttonPrimary } from "./ui";

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

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          index="02"
          eyebrow="Services"
          title="Web, mobile and back end. One developer."
          titleId="services-title"
          lead="Hire me for one layer or the whole stack. Projects that need a web app, a mobile app and the API behind them are where I save clients the most time."
          action={
            <a href="#contact" className={`${buttonPrimary} shrink-0 self-start lg:self-auto`}>
              Get a project estimate
            </a>
          }
        />

        {/* Rows of equal weight, led by huge numerals: the services are parallel offers, not a ranking. */}
        <ol className="reveal flex flex-col">
          {services.map((service) => (
            <li key={service.title} className="grid gap-6 border-t-2 border-ink py-10 lg:grid-cols-12 lg:gap-8">
              <span className="text-6xl leading-none font-extrabold tracking-[-0.04em] [font-stretch:125%] lg:col-span-3 lg:text-8xl">
                {service.number}
              </span>
              <div className="flex flex-col gap-2 lg:col-span-4">
                <h3 className="text-2xl font-extrabold tracking-[-0.02em] [font-stretch:125%]">{service.title}</h3>
                <p className="text-base text-muted">{service.promise}</p>
                <p className="mt-3 text-sm">
                  <span className="font-bold">Ideal for:</span> <span className="text-muted">{service.idealFor}</span>
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 lg:col-span-5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-snug">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
