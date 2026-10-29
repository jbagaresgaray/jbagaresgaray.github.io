import type { SVGProps } from "react";

// Line icons for the landing page, drawn in the sheet's white line. Each is decorative:
// the text beside it carries the meaning.

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  viewBox: "0 0 24 24",
} as const;

export function Check({ size = 16, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" {...lineProps} strokeWidth={2} width={size} height={size} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Cross({ size = 16, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" {...lineProps} strokeWidth={2} width={size} height={size} {...props}>
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

export function Plus({ size = 16, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" {...lineProps} strokeWidth={2} width={size} height={size} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronDown({ size = 16, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" {...lineProps} strokeWidth={2} width={size} height={size} {...props}>
      <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function MenuIcon({ open, size = 20 }: { open: boolean; size?: number }) {
  return (
    <svg aria-hidden="true" {...lineProps} strokeWidth={1.8} width={size} height={size}>
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
    </svg>
  );
}
