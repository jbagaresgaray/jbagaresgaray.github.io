# Design direction (experiment: bold studio)

This branch tries a "bold studio" direction, the third option offered to the owner on 2026-10-29. The details below were supplied by the agent, not the owner. Agent-picked style tends toward default AI taste, so treat it as a draft to react to; master keeps the Satner-inspired direction.

Reading this as: a freelance developer's portfolio for startup founders and product teams, with the confidence of a design-studio site: oversized type, asymmetric layouts, one loud colour.

Dial: ENERGY 3 / RHYTHM 3 / MOTION 2

## Palette

Tokens live in `src/app/globals.css`.

| Token | Hex | Use | Why |
|---|---|---|---|
| `paper` | #f7f6f2 | Page background | An off-white that keeps the orange from vibrating |
| `surface` | #ecebe5 | Alternate sections, form fields | One step deeper than paper |
| `ink` | #0d0d0d | Text, buttons on light, the dark bands | Near-black for poster contrast |
| `muted` | #57564f | Secondary text | 6.2:1 or better on both light backgrounds |
| `line` | #d9d7cf | Borders and dividers | Quiet structure |
| `accent` | #ff5b14 | The headline marker, primary buttons, the contact band | One saturated colour that is not the blue-violet default |
| `success`, `error` | #1f8a4c, #b42318 | Availability dot and form states only | State colours, not decoration |

Accent rules: the orange is never used as text on the light backgrounds (2.9:1 fails); text on orange is always full `ink` (6.3:1).

## Type

- Archivo for everything. Headings use its expanded width (font-stretch 125%) at weight 800, so oversized headlines read like a poster; body text uses the normal width.
- Sentence case throughout, no uppercase labels or wide tracking. Small section labels are muted text with a running number.

## Identity motif

Oversized expanded headlines with one phrase set on an orange marker, and big running numbers ("01", "02") on section labels and steps.

## Surfaces

- Radius stays small (4px) on controls; cards are square-cornered with a 2px ink border or flat fills. No pills.
- No glow and no decorative shadows; only app screenshots keep a soft shadow over their banners.

## Layout and rhythm (RHYTHM 3)

Asymmetric, mixed compositions on a 12-column grid: a full-width headline over a 6/5 split in the hero, a dark strip of client names, a 5/7 comparison with the argued-for block widest, service rows led by huge numerals, a 7/5 app grid, a dark process band, an offset About, a FAQ with a sticky heading column, and an orange contact band.

## Motion (MOTION 2)

Each section's heading and main block rise into place as they scroll into view, so attention lands on the new section. It is pure CSS (scroll-driven animations): content is fully visible where the browser doesn't support it, nothing loops, and it is off under `prefers-reduced-motion`. Hover and state transitions otherwise.
