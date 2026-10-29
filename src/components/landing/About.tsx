const startYear = 2014;

// The figures the owner gave, each with what it counts.
const figures = [
  { value: String(startYear), label: "building since" },
  { value: "12+", label: "years shipping web & mobile apps" },
  { value: "9", label: "countries of clients, from NZ to France" },
];

const facts = [
  { label: "Based in", value: "Manila, Philippines (UTC+8)" },
  { label: "Clients in", value: "NZ, Australia, Singapore, Malaysia, Qatar, UK, France, US and the Philippines" },
];

// The board: the page's one ink band, the statement set large over the facts.
export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="board about">
      <div className="container">
        <h2 id="about-title" className="about__statement">
          Hi, I&apos;m Philip. I sit where design, code and words meet.
        </h2>

        <div className="about__text">
          <p>
            For more than 12 years I&apos;ve helped startups and established companies turn ideas into apps for iOS,
            Android, web and desktop, from a #1 mindfulness app in New Zealand to products for AirAsia, Wander and
            FutureMe.
          </p>
          <p>
            Along the way I learned that great products don&apos;t fail on technology. They fail in the gaps: a design
            that ignores real-world edge cases, code that loses what made the design good, copy written last and in a
            hurry.
          </p>
          <p>
            So I close those gaps myself. I design the experience, build it properly and write the words that explain
            it, so you get one consistent product and one person who is accountable for it.
          </p>
        </div>

        <dl className="figures">
          {figures.map((figure) => (
            <div key={figure.label}>
              <dt>{figure.label}</dt>
              <dd className="figures__value">{figure.value}</dd>
            </div>
          ))}
        </dl>

        <div className="about__foot">
          <dl className="spec">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="about__links">
            <a href="https://www.linkedin.com/in/jbagaresgaray/" target="_blank" rel="noopener noreferrer" className="btn btn--card">
              Connect on LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <a href="https://github.com/jbagaresgaray" target="_blank" rel="noopener noreferrer" className="btn btn--card">
              View GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
