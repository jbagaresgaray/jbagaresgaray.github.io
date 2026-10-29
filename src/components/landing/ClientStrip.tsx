// Companies from the work history I've built products for.
const clients = ["AirAsia", "Perx", "Wander", "Chozi", "Baby Journey", "FutureMe", "Purpl", "Dish Dash Dine", "Small Software", "Narnoo"];

export default function ClientStrip() {
  return (
    <section aria-label="Clients" className="border-b border-line bg-paper">
      <div className="shell flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-sm font-semibold text-muted">Products built for teams at</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10">
          {clients.map((client) => (
            <li key={client} className="text-lg font-bold tracking-[-0.01em] text-ink sm:text-xl">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
