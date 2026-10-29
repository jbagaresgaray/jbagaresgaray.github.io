// Companies from the work history I've built products for. The redesign lists them in About's
// facts; this strip is no longer rendered on the page.
export const clients = ["AirAsia", "Perx", "Wander", "Chozi", "Baby Journey", "FutureMe", "Purpl", "Dish Dash Dine", "Small Software", "Narnoo"];

export default function ClientStrip() {
  return (
    <section aria-label="Clients" className="band">
      <dl className="container spec">
        <div>
          <dt>Products built for teams at</dt>
          <dd>{clients.join(", ")}</dd>
        </div>
      </dl>
    </section>
  );
}
