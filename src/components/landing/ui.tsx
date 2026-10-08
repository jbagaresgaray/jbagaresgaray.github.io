import type { ReactNode, SVGProps } from "react";

// Shared building blocks for the landing page sections.

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.06em] transition focus-visible:outline-2 focus-visible:outline-offset-2";

// Satner-style buttons: a gradient fill with a soft violet glow, and a gradient outline.
export const buttonPrimary = `${buttonBase} bg-linear-to-r from-brand-start to-brand-end text-white shadow-[0_10px_30px_rgba(118,85,225,0.3)] hover:shadow-[0_14px_36px_rgba(118,85,225,0.45)] hover:brightness-110 focus-visible:outline-brand-start`;
export const buttonSecondary = `${buttonBase} gradient-border text-ink hover:text-brand-ink focus-visible:outline-brand-start`;
// For dark or gradient backgrounds.
export const buttonLight = `${buttonBase} bg-white text-brand-ink shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-brand-soft focus-visible:outline-white`;

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-display text-xs font-medium uppercase tracking-[0.2em] ${
        dark ? "text-brand-light" : "text-brand-ink"
      }`}
    >
      <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-brand-start to-brand-end" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  lead?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        id={titleId}
        className={`text-balance text-3xl font-bold uppercase leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`text-pretty text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{lead}</p>
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

export function ArrowRight(props: IconProps) {
  return (
    <svg {...iconDefaults} className="h-4 w-4" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

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
