const steps = [
  {
    title: "Discovery",
    body: "We talk through your goals, your users and your deadline, so the plan fits the business, not just the brief.",
    outcome: "A clear scope and estimate",
  },
  {
    title: "Design & copy",
    body: "Wireframes first, then polished screens with real words, not lorem ipsum. You try a clickable prototype before any code is written.",
    outcome: "A prototype you can test",
  },
  {
    title: "Build",
    body: "I develop in small, reviewable steps, so you see working progress every week instead of waiting for a big reveal.",
    outcome: "Working software, early",
  },
  {
    title: "Launch & improve",
    body: "Store releases, analytics and a look at how real people use it. Then we refine what converts.",
    outcome: "A live product that keeps getting better",
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section">
      <div className="container">
        <div className="head">
          <h2 id="process-title">A simple process, built around your launch.</h2>
          <p className="lead">No black boxes. You always know what’s happening, what’s next and what it costs.</p>
        </div>

        {/* A work order on cotton: each stage, what happens in it and what you hold after. */}
        <div className="order stock">
          <div className="order__row order__labels" aria-hidden="true">
            <span>Stage</span>
            <span>Name</span>
            <span>What happens</span>
            <span>You get</span>
          </div>
          <ol>
            {steps.map((step, i) => (
              <li key={step.title} className="order__row">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.body}</p>
                <p>
                  <span className="order__inline">You get: </span>
                  {step.outcome}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
