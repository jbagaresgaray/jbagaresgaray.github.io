# Design direction (experiment: editorial)

This branch tries an "editorial and calm" direction, chosen by the owner on 2026-10-29. The details below were supplied by the agent, not the owner. Agent-picked style tends toward default AI taste, so treat it as a draft to react to; master keeps the Satner-inspired direction.

Reading this as: a freelance developer's portfolio for startup founders and product teams, set like a well-made printed CV: type-led, warm and quiet.

Dial: ENERGY 1 / RHYTHM 2 / MOTION 1

## Palette

Tokens live in `src/app/globals.css`. One warm neutral family plus one accent.

| Token | Hex | Use | Why |
|---|---|---|---|
| `paper` | #faf7f2 | Page background | Warm off-white reads as paper, not screen |
| `surface` | #f2ede4 | Alternate sections, form fields | A step deeper than paper, still warm |
| `ink` | #1f1d1a | Text, rules, buttons, the contact band | Warm near-black to match the paper |
| `muted` | #5c574f | Secondary text | Warm grey, 6.1:1 or better on both backgrounds |
| `line` | #e0d8cb | Light dividers inside sections | Quiet rules where ink would be too loud |
| `accent` | #a8461f | Italic accent words, the "Working with me" rule, link hover | Terracotta: one warm accent that is not the blue-violet default |
| `accent-soft` | #f5e6dc | Highlight behind short notes | Tint of the accent for the one highlighted note per card |
| `accent-light` | #e7a07f | Accent text on the ink band | Keeps the accent readable on dark (7.8:1) |
| `success`, `error` | #1f8a4c, #b42318 | Availability dot and form states only | State colours, not decoration |

## Type

- Headings: Newsreader, a serif designed for long-form reading on screens, which suits a printed-CV feel. Sentence case, normal tracking, medium weight.
- Body and UI: Source Sans 3, a humanist sans that stays legible at small sizes and stays out of the serif's way.
- No uppercase labels and no wide tracking.

## Identity motif

Each section opens with a full-width ink hairline and a small italic serif label, like the section heads of a printed CV. Headlines carry one italic word in the accent colour.

## Surfaces

- Rules instead of cards: comparisons, services and process steps sit in columns divided by hairlines.
- App cards keep a frame, because their banners carry each app's own brand colour.
- Radius stays small: 4px on buttons and fields, 8px on app cards and the portrait. No pills.
- No glow and no decorative shadows; only app screenshots keep a soft shadow over their banners.

## Layout and rhythm (RHYTHM 2)

Paper sections throughout, alternating with `surface`, broken by one ink band for Contact (and the footer). Split layouts (hero, About, FAQ, Contact) interrupt the ruled column grids.

## Motion (MOTION 1)

Hover and state transitions only, plus smooth scrolling to anchors. Nothing loops, and all of it stops under `prefers-reduced-motion`.
