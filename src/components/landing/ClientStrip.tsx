// Companies from the work history I've built products for.
const clients = ["AirAsia", "Perx", "Wander", "FutureMe", "Purpl", "Dish Dash Dine", "Narnoo"];

export default function ClientStrip() {
  return (
    <section aria-label="Clients" className="border-y border-line bg-surface">
      <div className="shell flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 font-display text-xs font-medium uppercase tracking-[0.2em] text-brand-ink">Products built for teams at</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10">
          {clients.map((client) => (
            <li key={client} className="font-display text-lg font-semibold tracking-tight text-ink/40 transition-colors hover:text-brand-start sm:text-xl">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
