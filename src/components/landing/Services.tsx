import { ArrowRight, Check, SectionHeading, buttonPrimary } from "./ui";

const services = [
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
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Web, mobile and back end. One developer."
            titleId="services-title"
            lead="Hire me for one layer or the whole stack. Projects that need a web app, a mobile app and the API behind them are where I save clients the most time."
          />
          <a href="#contact" className={`${buttonPrimary} shrink-0 self-start lg:self-auto`}>
            Get a project estimate <ArrowRight />
          </a>
        </div>

        <ol className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col gap-6 rounded-xl border border-line bg-paper p-7 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_50px_-24px_rgba(68,88,220,0.45)]"
            >
              <div className="flex items-center justify-between">
                <span className="gradient-text font-display text-3xl font-bold">{service.number}</span>
                <span className="h-1 w-10 rounded-full bg-line transition-colors group-hover:bg-brand-end" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold uppercase tracking-[0.02em]">{service.title}</h3>
                <p className="text-[15px] text-muted">{service.promise}</p>
              </div>
              <ul className="flex flex-col gap-3 border-t border-line pt-6">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-start" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto rounded-lg bg-surface px-4 py-3 text-sm">
                <span className="font-semibold">Ideal for:</span> <span className="text-muted">{service.idealFor}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
