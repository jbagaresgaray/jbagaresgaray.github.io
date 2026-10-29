# Design direction (experiment: app-forward)

This branch tries an "app-forward" direction, chosen by the owner on 2026-10-29. The details below were supplied by the agent, not the owner. Agent-picked style tends toward default AI taste, so treat it as a draft to react to; master keeps the Satner-inspired direction.

Reading this as: a freelance developer's portfolio for startup founders and product teams, where the shipped apps are the proof and the page stays out of their way.

Dial: ENERGY 2 / RHYTHM 3 / MOTION 1

## Palette

Tokens live in `src/app/globals.css`. The site's own chrome is black and white; colour comes from the apps.

| Token | Hex | Use | Why |
|---|---|---|---|
| `paper` | #ffffff | Page background | A neutral canvas so app colours read true |
| `surface` | #f4f4f5 | Alternate sections, form fields, highlight notes | A cool grey step that doesn't tint the screenshots |
| `ink` | #111111 | Text, buttons, the "Working with me" column, the contact band | Near-black for maximum contrast with paper |
| `muted` | #5f5f66 | Secondary text | Neutral grey, 5.7:1 or better on both backgrounds |
| `line` | #e4e4e7 | Borders and dividers | Quiet structure |
| `success`, `error` | #1f8a4c, #b42318 | Availability dot and form states only | State colours, not decoration |

The deliberate accent is borrowed: each app's own brand colour, used on its banner. Nothing else on the page is coloured.

## Type

- Public Sans for everything, a neutral interface face (built for the US Web Design System) that lets the screenshots be the loudest thing on the page. Weight carries the hierarchy: 700 for headings with slightly tight tracking, 400 and 600 for text.
- Sentence case throughout. Section labels are small muted text, never uppercase or wide-tracked.

## Identity motif

Real app icons: a row of all the live apps' icons sits under the hero, and each icon leads its app card.

## Surfaces

- Radius as hierarchy: 6px on buttons and fields, 16px on cards, app icons keep their own shape. No pills.
- No glow and no decorative shadows; only app screenshots keep a soft shadow over their banners.

## Layout and rhythm (RHYTHM 3)

The work comes straight after the hero. Every section uses a different composition: a split hero with the icon row, the app mosaic, a line of client names, services as table rows, a three-column comparison with the argued-for column inverted to black, a numbered process sequence, a split About, a two-column FAQ and a black contact band.

## Motion (MOTION 1)

Hover and state transitions only, plus smooth scrolling to anchors. Nothing loops, and all of it stops under `prefers-reduced-motion`.
