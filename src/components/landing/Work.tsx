import { clients } from "./ClientStrip";

export type LiveApp = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  highlight: string;
  role: string;
  stack: string[];
  screenAlt: string;
  appStore?: string;
  googlePlay?: string;
};

// Screenshots and icons come from each app's store listing (public/images/work/<slug>/).
export const liveApps: LiveApp[] = [
  {
    slug: "purpl",
    title: "Purpl",
    category: "Fintech",
    summary: "A digital wallet that receives international transfers in Lebanon instantly, with virtual cards and free cash-outs.",
    highlight: "Leading mobile development since 2021",
    role: "Lead senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
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
    screenAlt: "Wander app screens: a grid of vacation homes, the home feed and a property listing",
    appStore: "https://apps.apple.com/us/app/wa-nder/id1582777762",
    googlePlay: "https://play.google.com/store/apps/details?id=com.wander.com.app",
  },
  {
    slug: "chozi",
    title: "Chozi",
    category: "Real estate",
    summary: "Buy, sell and rent property across Costa Rica: search homes on a map, post a Signal with what you need and connect with verified agents.",
    highlight: "Building Costa Rica’s all-in-one real estate app",
    role: "Lead senior mobile developer",
    stack: ["React Native", "TypeScript", "Expo", "Reanimated", "TanStack React Query", "Firebase"],
    screenAlt: "Chozi app screens: listing prices on a map, homes for sale and rent in Escazú, and a property’s details",
    appStore: "https://apps.apple.com/us/app/chozi/id6782366803",
    googlePlay: "https://play.google.com/store/apps/details?id=com.chozi.mobileapp",
  },
  {
    slug: "babyjourney",
    title: "Baby Journey",
    category: "Health & parenting",
    summary: "Follow your pregnancy week by week, then your child’s growth and milestones up to age five, with advice from midwives and doctors.",
    highlight: "Shipped features for the largest pregnancy app in the Nordics",
    role: "Senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
    screenAlt: "Baby Journey app screens: a daily mood log, the week-by-week pregnancy tracker and a child’s height chart",
    appStore: "https://apps.apple.com/dk/app/baby-journey-pregnancy-app/id1515225502",
    googlePlay: "https://play.google.com/store/apps/details?id=se.babyjourney&hl=en",
  },
  {
    slug: "futureme",
    title: "FutureMe",
    category: "Lifestyle",
    summary: "Write letters to your future self, then schedule them to arrive in 1, 5 or 10 years.",
    highlight: "Built and shipped in about four months, part-time",
    role: "Senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
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
    screenAlt: "Dish Dash Dine app screens: a food banner, the sign-up screen and a feed of restaurant deals",
    googlePlay: "https://play.google.com/store/apps/details?id=com.dishdashdine.app",
  },
  {
    slug: "smallsoftware",
    title: "Small Software",
    category: "Business",
    summary: "An employee app for franchise crews to check shifts, chat with their team, request time off and find company resources.",
    highlight: "Built the crew app for multi-unit franchise operators",
    role: "Senior mobile developer",
    stack: ["React Native", "TypeScript", "Redux Toolkit"],
    screenAlt: "Small Software app screens: a team chat, the weekly shift schedule and a time-off request",
    googlePlay: "https://play.google.com/store/apps/details?id=com.smallsoftware.s2&hl=en",
  },
  {
    slug: "taskspur",
    title: "TaskSpur",
    category: "Productivity",
    summary: "A life-management app for planning goals, tasks and notes in one place, on web and mobile.",
    highlight: "Built the web, admin and mobile apps in the suite",
    role: "Senior full-stack developer",
    stack: ["Angular", "Ionic", "Capacitor"],
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

// The clients the section does not already show below, as an app or an earlier project.
const otherClients = new Intl.ListFormat("en", { type: "conjunction" }).format(
  clients.filter(
    (name) => !liveApps.some((app) => app.title === name) && !earlierWork.some((project) => project.title === name),
  ),
);

export function platforms(app: LiveApp) {
  if (app.appStore && app.googlePlay) return "iOS & Android";
  return app.appStore ? "iOS" : "Android";
}

function StoreLink({ href, store, app }: { href: string; store: string; app: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {store}
      <span className="visually-hidden">: {app} (opens in a new tab)</span>
    </a>
  );
}

export function StoreLinks({ app }: { app: LiveApp }) {
  return (
    <span className="stores">
      {app.appStore && <StoreLink href={app.appStore} store="App Store" app={app.title} />}
      {app.googlePlay && <StoreLink href={app.googlePlay} store="Google Play" app={app.title} />}
    </span>
  );
}

// An app's three store screens, each printed on a cotton card.
function Prints({ app, className }: { app: LiveApp; className: string }) {
  return (
    <div className={className}>
      {[1, 2, 3].map((n) => (
        <figure key={n} className="print stock">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="print__screen"
            src={`/images/work/${app.slug}/screen-${n}.jpg`}
            alt={n === 2 ? app.screenAlt : ""}
            width={415}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

function Icon({ app }: { app: LiveApp }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/images/work/${app.slug}/icon.png`} alt="" width={160} height={160} loading="lazy" />;
}

// Everything a visitor needs beside an app's screens: what it is, where it runs, my part, and the way in.
function AppSpec({ app }: { app: LiveApp }) {
  return (
    <dl className="spec">
      <div>
        <dt>Category</dt>
        <dd>{app.category}</dd>
      </div>
      <div>
        <dt>Platforms</dt>
        <dd>{platforms(app)}</dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>{app.role}</dd>
      </div>
      <div>
        <dt>Stack</dt>
        <dd>{app.stack.join(", ")}</dd>
      </div>
      <div>
        <dt>Highlight</dt>
        <dd>{app.highlight}</dd>
      </div>
      <div>
        <dt>In the stores</dt>
        <dd>
          <StoreLinks app={app} />
        </dd>
      </div>
    </dl>
  );
}

export default function Work() {
  const [lead, ...rest] = liveApps;
  return (
    <section id="work" aria-labelledby="work-title" className="section section--long">
      <div className="container">
        <div className="head">
          <h2 id="work-title">Apps people use every day.</h2>
          <p className="lead">
            Live on the App Store and Google Play, built for startups and growing companies in fintech, travel, real
            estate, health, food and productivity.
          </p>
          <p className="label">Also built for teams at {otherClients}.</p>
        </div>

        {/* One app opened as a case: its screens laid on the desk beside its record sheet. */}
        <article className="case desk" aria-labelledby={`app-${lead.slug}`}>
          <Prints app={lead} className="case__prints" />
          <div className="case__sheet stock">
            <h3 id={`app-${lead.slug}`} className="app-name">
              <Icon app={lead} />
              {lead.title}
            </h3>
            <p>{lead.summary}</p>
            <AppSpec app={lead} />
          </div>
        </article>

        {/* The other seven, each on its own patch of desk: its screens printed big enough to read,
            its record sheet beneath. Two to a row; the last one takes the row alone. */}
        <ol className="desks">
          {rest.map((app) => (
            <li key={app.slug} className="desks__tile desk">
              <Prints app={app} className="desks__prints" />
              <div className="desks__sheet stock">
                <h3 className="app-name">
                  <Icon app={app} />
                  {app.title}
                </h3>
                <p className="muted">{app.summary}</p>
                <AppSpec app={app} />
              </div>
            </li>
          ))}
        </ol>

        <div className="earlier">
          <h3>Earlier work</h3>
          <ul className="file">
            {earlierWork.map((project) => (
              <li key={project.title} className="file__card stock">
                <figure className="file__pic">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.alt} width={1600} height={1200} loading="lazy" decoding="async" />
                </figure>
                <h4 className="app-name">{project.title}</h4>
                <p className="muted">{project.summary}</p>
                <p className="file__facts">
                  <span>{project.role}</span>
                  <span className="muted">{project.highlight}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="work__close">
          <p className="statement">Have an app idea? I&apos;ll help you get it into the stores.</p>
          <a href="#contact" className="btn btn--ink">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
