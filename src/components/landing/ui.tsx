import type { ReactNode, SVGProps } from "react";

// Shared building blocks for the landing page sections.

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-3 text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

// The orange is the call to action; text on it is always ink.
export const buttonPrimary = `${buttonBase} bg-accent text-ink hover:bg-ink hover:text-paper focus-visible:outline-ink`;
export const buttonSecondary = `${buttonBase} border-2 border-ink text-ink hover:bg-ink hover:text-paper focus-visible:outline-ink`;
// For the ink and orange bands.
export const buttonLight = `${buttonBase} bg-paper text-ink hover:bg-surface focus-visible:outline-paper`;

// Small muted label with a running number, part of the identity motif.
export function SectionLabel({ index, children, dark = false }: { index: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-baseline gap-3 text-sm font-semibold ${dark ? "text-paper/65" : "text-muted"}`}>
      <span className={dark ? "text-paper" : "text-ink"}>{index}</span>
      {children}
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  lead,
  action,
  dark = false,
  compact = false,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  lead?: ReactNode;
  action?: ReactNode;
  dark?: boolean;
  // A smaller headline for narrow columns, where the expanded type would overflow.
  compact?: boolean;
}) {
  return (
    <div className="reveal flex flex-col gap-6">
      <SectionLabel index={index} dark={dark}>
        {eyebrow}
      </SectionLabel>
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h2
          id={titleId}
          className={`max-w-4xl text-balance text-4xl leading-[0.98] sm:text-5xl ${compact ? "" : "lg:text-7xl"} ${dark ? "text-paper" : "text-ink"}`}
        >
          {title}
        </h2>
        {action}
      </div>
      {lead && (
        <p className={`max-w-2xl text-pretty text-lg leading-relaxed ${dark ? "text-paper/65" : "text-muted"}`}>{lead}</p>
      )}
    </div>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

const iconDefaults = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...iconDefaults} className="h-4 w-4" {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...iconDefaults} strokeWidth={2.2} className="h-4 w-4" {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Cross(props: IconProps) {
  return (
    <svg {...iconDefaults} strokeWidth={2} className="h-4 w-4" {...props}>
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...iconDefaults} strokeWidth={2} className="h-5 w-5" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
