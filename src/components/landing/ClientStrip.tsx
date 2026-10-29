// Companies from the work history I've built products for.
const clients = ["AirAsia", "Perx", "Wander", "Chozi", "Baby Journey", "FutureMe", "Purpl", "Dish Dash Dine", "Small Software", "Narnoo"];

export default function ClientStrip() {
  return (
    <section aria-label="Clients" className="bg-ink text-paper">
      <div className="shell flex flex-col gap-6 py-12 sm:py-16">
        <p className="text-sm font-semibold text-paper/65">Products built for teams at</p>
        <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-2 sm:gap-x-12">
          {clients.map((client) => (
            <li key={client} className="text-2xl font-extrabold tracking-[-0.02em] [font-stretch:125%] sm:text-4xl">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
