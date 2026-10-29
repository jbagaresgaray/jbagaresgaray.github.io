import { Check, Cross } from "./ui";

const alternatives = [
  {
    title: "Hiring an agency",
    points: [
      "Weeks of discovery before anything ships",
      "Account-management overhead in every invoice",
      "You rarely talk to the people doing the work",
    ],
  },
  {
    title: "Juggling freelancers",
    points: [
      "Three people, three schedules, three invoices",
      "Gaps between the design, the code and the words",
      "You end up as the project manager",
    ],
  },
];

const withMe = [
  "One senior partner from first sketch to launch",
  "Design, code and copy that fit together",
  "A direct line to the person doing the work",
  "Fewer handoffs, so you launch sooner",
];

export default function WhyMe() {
  return (
    <section aria-labelledby="why-title" className="section">
      <div className="container">
        <div className="head">
          <h2 id="why-title">Most launches stall in the handoffs.</h2>
          <p className="lead">
            A designer hands off to a developer, who waits on a copywriter, while you chase all three. Every handoff
            costs time, money and a little of the original idea.
          </p>
        </div>

        {/* Three ways to staff a launch as three cards; the argued-for one in board ink. */}
        <div className="trio">
          {alternatives.map((option) => (
            <div key={option.title} className="trio__card stock">
              <h3>{option.title}</h3>
              <ul className="ticks muted">
                {option.points.map((point) => (
                  <li key={point}>
                    <Cross />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="trio__card trio__card--me stock">
            <h3>Working with me</h3>
            <ul className="ticks">
              {withMe.map((point) => (
                <li key={point}>
                  <Check />
                  {point}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--ink">
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
