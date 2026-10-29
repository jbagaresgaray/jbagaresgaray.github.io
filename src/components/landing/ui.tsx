import type { ReactNode, SVGProps } from "react";

// Shared building blocks for the landing page sections.

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-3 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

// Ink buttons on paper; a paper button for the ink band.
export const buttonPrimary = `${buttonBase} bg-ink text-paper hover:bg-ink/85 focus-visible:outline-ink`;
export const buttonSecondary = `${buttonBase} border border-ink text-ink hover:bg-ink hover:text-paper focus-visible:outline-ink`;
export const buttonLight = `${buttonBase} bg-paper text-ink hover:bg-surface focus-visible:outline-paper`;

// The identity motif: a full-width hairline with a small italic serif label, like the
// section heads of a printed CV.
export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`border-t pt-3 font-display text-lg italic ${
        dark ? "border-paper/40 text-paper/80" : "border-ink text-ink"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  lead,
  action,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  titleId: string;
  lead?: ReactNode;
  action?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      {eyebrow && <SectionLabel dark={dark}>{eyebrow}</SectionLabel>}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="flex max-w-3xl flex-col gap-4">
          <h2
            id={titleId}
            className={`text-balance text-3xl font-medium leading-[1.15] tracking-[-0.01em] sm:text-4xl lg:text-[2.75rem] ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {lead && (
            <p className={`text-pretty text-lg leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}>{lead}</p>
          )}
        </div>
        {action}
      </div>
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
