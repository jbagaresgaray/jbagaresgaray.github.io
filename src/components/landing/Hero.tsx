import type { CSSProperties } from "react";
import { liveApps, type LiveApp } from "./Work";

// The desk: one lead print, then smaller prints laid around it with air between, each tilted a
// little as if set down by hand. The order fills a four-column grid: the lead takes the top-left
// two by two, the portrait the top-right corner.
const tilts = [-1.5, 2.5, -2, 3, -3, 2, -2.5, 1.5, -1];

const place = (i: number) => ({ "--r": `${tilts[i]}deg`, "--i": i }) as CSSProperties;

function AppPrint({ app, i, lead = false }: { app: LiveApp; i: number; lead?: boolean }) {
  return (
    <li style={place(i)} className={lead ? "hero__lead" : undefined}>
      {/* The name heads the card; the store screen is printed beneath it. */}
      <figure className="print stock">
        <figcaption>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/work/${app.slug}/icon.png`} alt="" width={160} height={160} />
          {app.title}
        </figcaption>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="print__screen"
          src={`/images/work/${app.slug}/screen-2.jpg`}
          alt={app.screenAlt}
          width={415}
          height={900}
          fetchPriority={lead ? "high" : undefined}
        />
        {/* The settled state pressed into the lead print's margin (Coral): the apps are live. */}
        {lead && (
          <span className="stamp" aria-hidden="true">
            Live
          </span>
        )}
      </figure>
    </li>
  );
}

// The Poster hero: the count of live apps set huge beside a felt desk of their printed screens.
export default function Hero() {
  const [lead, second, ...others] = liveApps;
  return (
    <section id="top" aria-labelledby="hero-title" className="hero desk">
      {/* The pressed-ink filter: ink that sits unevenly in the cotton. */}
      <svg className="press-filter" aria-hidden="true" focusable="false">
        <filter id="press">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="noise" />
          <feColorMatrix in="noise" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 2.4 -0.7" result="mask" />
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>
      </svg>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__figure">
            <span className="hero__count">{liveApps.length}</span>
            <span className="hero__unit">apps live on the App Store &amp; Google Play</span>
          </p>
          <h1 id="hero-title">Web and mobile apps that launch fast and scale with you.</h1>
          <p className="lead">I&apos;m Philip, a frontend, mobile and full-stack developer with 12+ years of experience.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--ink">
              Start a project
            </a>
            <a href="#work" className="btn btn--card">
              See selected work
            </a>
          </div>
        </div>

        <ul className="hero__prints">
          <AppPrint app={lead} i={0} lead />
          <AppPrint app={second} i={1} />
          <li style={place(2)}>
            <figure className="print stock">
              <figcaption>Philip Cesar Garay</figcaption>
              <div data-slot="portrait" data-alt="Philip Cesar Garay, smiling with arms crossed">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/philip-portrait.jpg"
                  alt="Philip Cesar Garay, smiling with arms crossed"
                  width={880}
                  height={1100}
                />
              </div>
            </figure>
          </li>
          {others.map((app, n) => (
            <AppPrint key={app.slug} app={app} i={n + 3} />
          ))}
        </ul>
      </div>
    </section>
  );
}
