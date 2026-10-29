# Design direction

The look is adapted from the Satner template. The owner kept it as the brand on 2026-10-29; this file records it so later changes follow the same rules.

Reading this as: a freelance developer's portfolio for startup founders and product teams, in a Satner-inspired indigo-violet style.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1

## Palette

Tokens live in `src/app/globals.css`.

| Token | Hex | Use |
|---|---|---|
| `paper` | #ffffff | Page background |
| `surface` | #f7f6fe | Lavender sections and form fields |
| `ink` | #1c1b33 | Text and the dark bands |
| `muted` | #64637a | Secondary text |
| `line` | #e6e4f3 | Borders and dividers |
| `brand-start` to `brand-end` | #4458dc to #854fee | The brand gradient |
| `brand-ink` | #4b37c4 | Accent text and small brand marks on light backgrounds |
| `brand-light` | #b9b0ff | Accent text on the dark bands |
| `success`, `error` | #1fae5b, #b42318 | Availability and form states only |

## The gradient is the accent

The gradient marks actions and one highlight per section: primary buttons, the header call to action, the monogram, the headline accent words, the "Working with me" card and the work-section call to action. Numbers, step badges, icons and section labels use solid `brand-ink` (or `brand-start` on the dark bands).

## Type

- Rubik for headings and UI labels; Roboto for running text.
- Section headings, buttons, nav and section labels are uppercase, labels with wide tracking. This bold display voice is part of the kept look.

## Identity motif

The giant faded word behind the hero, and the gradient disc framing the portrait.

## Elevation and glow

- Violet glow only on primary buttons, the one focus accent.
- A neutral shadow only where something sits on top of something else: the portrait, the discipline labels over it, the contact form on the dark band.
- Cards sit flat. Only things you can click react to hover.

## Layout and rhythm (RHYTHM 2)

Consistent, with a few breaks: two dark bands (Process, Contact) and split layouts (hero, About, FAQ, Contact) interrupt the light card grids. The three Services cards are equal on purpose: they are parallel offers, not a ranking.

## Motion (MOTION 1)

Hover and state transitions only, plus smooth scrolling to anchors. Nothing loops, and all of it stops under `prefers-reduced-motion`.

## Owner overrides (antislop R-37)

- Kept the blue-violet gradient as the brand colour (R-01), 2026-10-29.
- Kept uppercase display type with wide-tracked labels (R-06), 2026-10-29.
