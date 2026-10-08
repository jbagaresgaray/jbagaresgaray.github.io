import { ArrowRight, ArrowUpRight, SectionHeading, buttonLight } from "./ui";

type LiveApp = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  highlight: string;
  role: string;
  stack: string[];
  // Banner colour behind the screenshots, taken from the app's own branding.
  brand: string;
  screenAlt: string;
  appStore?: string;
  googlePlay?: string;
};

// Screenshots and icons come from each app's store listing (public/images/work/<slug>/).
const liveApps: LiveApp[] = [
  {
    slug: "purpl",
    title: "Purpl",
    category: "Fintech",
    summary: "A digital wallet that receives international transfers in Lebanon instantly, with virtual cards and free cash-outs.",
    highlight: "Leading mobile development since 2021",
    role: "Lead senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
    brand: "#6c3fe0",
    screenAlt: "Purpl app screens: wallet balance, an incoming international transfer and cash-out details",
    appStore: "https://apps.apple.com/us/app/purpl-me/id1604057044",
    googlePlay: "https://play.google.com/store/apps/details?id=com.purplme.purplapp",
  },
  {
    slug: "wander",
    title: "Wander",
    category: "Travel",
    summary: "Book luxury vacation homes with hotel-grade amenities and 24/7 concierge, from browsing to checkout.",
    highlight: "Built the iOS and Android app with React Native and GraphQL",
    role: "Senior mobile developer",
    stack: ["React Native", "TypeScript", "GraphQL", "Apollo"],
    brand: "#151515",
    screenAlt: "Wander app screens: a grid of vacation homes, the home feed and a property listing",
    appStore: "https://apps.apple.com/us/app/wa-nder/id1582777762",
    googlePlay: "https://play.google.com/store/apps/details?id=com.wander.com.app",
  },
  {
    slug: "futureme",
    title: "FutureMe",
    category: "Lifestyle",
    summary: "Write letters to your future self, then schedule them to arrive in 1, 5 or 10 years.",
    highlight: "Built and shipped in about four months, part-time",
    role: "Senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
    brand: "#2558f0",
    screenAlt: "FutureMe app screens: starting a letter, writing to your future self and choosing a delivery date",
    appStore: "https://apps.apple.com/us/app/futureme/id1607047236",
  },
  {
    slug: "dishdashdine",
    title: "Dish Dash Dine",
    category: "Food & delivery",
    summary: "Order from independent restaurants and takeaways across Northern Ireland, with daily deals in the app.",
    highlight: "Built the mobile app for a UK food-ordering platform",
    role: "Senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
    brand: "#e3262e",
    screenAlt: "Dish Dash Dine app screens: a food banner, the sign-up screen and a feed of restaurant deals",
    googlePlay: "https://play.google.com/store/apps/details?id=com.dishdashdine.app",
  },
  {
    slug: "taskspur",
    title: "TaskSpur",
    category: "Productivity",
    summary: "A life-management app for planning goals, tasks and notes in one place, on web and mobile.",
    highlight: "Built the web, admin and mobile apps in the suite",
    role: "Senior full-stack developer",
    stack: ["Angular", "Ionic", "Capacitor"],
    brand: "#f6c331",
    screenAlt: "TaskSpur app screens: the navigation menu, the dashboard and a goal-planning calendar",
    appStore: "https://apps.apple.com/us/app/taskspur/id1523988901",
    googlePlay: "https://play.google.com/store/apps/details?id=com.taskspur.lig",
  },
];

const earlierWork = [
  {
    title: "Stars of Aroha",
    summary: "New Zealand’s bi-cultural mindfulness app, with guided meditations that play offline.",
    highlight: "#1 in NZ’s App Store mindfulness category",
    role: "Lead mobile developer",
    image: "/images/work/stars-of-aroha.jpg",
    alt: "Stars of Aroha app icon: a white geometric gem on a starry navy background",
  },
  {
    title: "Narnoo",
    summary: "A B2B platform where Australian tourism businesses share media with travel agents.",
    highlight: "Four apps: iOS, Android, desktop and web admin",
    role: "Lead developer",
    image: "/images/work/narnoo.jpg",
    alt: "Seven Narnoo iOS screens: sign-in, business picker, news feed, photo gallery, media details and post composer",
  },
  {
    title: "Voyaga",
    summary: "A travel app for discovering destinations, saving wishlists and planning trips.",
    highlight: "One React Native codebase for iOS and Android",
    role: "Lead developer",
    image: "/images/work/voyaga.jpg",
    alt: "Nine Voyaga app screens: destination cards, wishlist, upcoming trips, sign-in and email verification",
  },
  {
    title: "Kegit",
    summary: "Breweries scan kegs by QR code to track where they are and what’s inside.",
    highlight: "Scan-to-track inventory that replaces manual keg logs",
    role: "Mobile app developer",
    image: "/images/work/kegit.jpg",
    alt: "Four Kegit screens: scanning kegs by QR code, the selected-kegs list, keg history and sign-in",
  },
];

function platforms(app: LiveApp) {
  if (app.appStore && app.googlePlay) return "iOS & Android";
  return app.appStore ? "iOS" : "Android";
}

function StoreLink({ href, store, app }: { href: string; store: string; app: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 font-display text-[13px] font-medium uppercase tracking-[0.04em] transition-colors hover:border-brand-start hover:text-brand-start"
    >
      {store}
      <span className="sr-only">: {app} (opens in a new tab)</span>
      <ArrowUpRight />
    </a>
  );
}

function LiveAppCard({ app, featured }: { app: LiveApp; featured: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition hover:shadow-[0_24px_50px_-24px_rgba(68,88,220,0.45)]">
      {/* Store screenshots rising from the bottom of a brand-coloured banner */}
      <div
        className={`flex items-end justify-center gap-[3%] overflow-hidden px-[7%] pt-[7%] ${
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
        style={{ backgroundColor: app.brand }}
      >
        {[1, 2, 3].map((n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={n}
            src={`/images/work/${app.slug}/screen-${n}.jpg`}
            alt={n === 2 ? app.screenAlt : ""}
            width={415}
            height={900}
            loading="lazy"
            decoding="async"
            className={`aspect-[9/17] rounded-[0.9rem] object-cover object-top shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] ${
              n === 2 ? "z-10 w-[31%] translate-y-[6%]" : "w-[27%] translate-y-[16%]"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/work/${app.slug}/icon.png`}
            alt=""
            width={160}
            height={160}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-xl border border-line"
          />
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold">{app.title}</h4>
            <p className="text-sm text-muted">
              {app.category} · {platforms(app)}
            </p>
          </div>
        </div>

        <p className="text-pretty text-[15px] leading-relaxed text-muted">{app.summary}</p>
        <p className="w-fit rounded-md bg-brand-soft px-3.5 py-2 text-sm font-medium text-brand-ink">{app.highlight}</p>
        <p className="flex flex-col gap-1 text-sm text-muted">
          <span className="font-medium text-ink">{app.role}</span>
          <span>{app.stack.join(", ")}</span>
        </p>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
          {app.appStore && <StoreLink href={app.appStore} store="App Store" app={app.title} />}
          {app.googlePlay && <StoreLink href={app.googlePlay} store="Google Play" app={app.title} />}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-20 sm:py-28">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Apps people use every day."
          titleId="work-title"
          lead="Live on the App Store and Google Play, built for startups and growing companies in fintech, travel, food and productivity."
        />

        <div className="flex flex-col gap-6">
          <h3 className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-ink">
            Live in the stores
            <span className="rounded-md bg-linear-to-r from-brand-start to-brand-end px-2.5 py-0.5 text-xs tracking-normal text-white">{liveApps.length} apps</span>
          </h3>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {liveApps.map((app, i) => (
              <li key={app.slug} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                <LiveAppCard app={app} featured={i < 2} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-ink">Earlier work</h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {earlierWork.map((project) => (
              <li key={project.title}>
                {/* A compact row on phones, a card from tablet width up. */}
                <article className="flex h-full overflow-hidden rounded-xl border border-line bg-surface sm:flex-col">
                  <div className="w-28 shrink-0 overflow-hidden border-r border-line bg-paper sm:aspect-[4/3] sm:w-auto sm:border-r-0 sm:border-b">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4 sm:gap-3 sm:p-5">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-pretty text-sm leading-relaxed text-muted">{project.summary}</p>
                    <p className="mt-auto pt-2 text-sm">
                      <span className="font-medium">{project.role}</span>
                      <span className="block text-muted">{project.highlight}</span>
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-linear-to-r from-brand-start to-brand-end p-8 text-white shadow-[0_24px_50px_-20px_rgba(118,85,225,0.6)] sm:flex-row sm:items-center sm:p-10">
          <p className="max-w-xl text-balance font-display text-2xl font-bold uppercase sm:text-3xl">
            Have an app idea? I&apos;ll help you get it into the stores.
          </p>
          <a href="#contact" className={`${buttonLight} shrink-0`}>
            Start a project <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
