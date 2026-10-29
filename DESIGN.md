# Design direction (experiment: Hallmark redesign, Coral)

On this branch the page is a full Hallmark redesign, chosen by the owner on 2026-10-29: Hallmark's Coral theme in a soft and warm tone, every fact, link and form field of master kept. Master keeps the Satner look, and `experiment/hallmark-redesign` holds the Blueprint version. The stamp at the top of `src/app/globals.css` and `.hallmark/log.json` hold the run's decisions; this file is the short version for later changes.

Reading this as: a freelance developer's portfolio for startup founders and product teams hiring a developer, as fine stationery on a felt desk in daylight from the left, dial ENERGY 2 / RHYTHM 3 / MOTION 2.

## Material

Warm grey paper, a felt desk, cotton stationery lit from the left (a lit edge top and left, a shade edge and a cast falling right), General Sans throughout, Geist Mono only for figures in a column, letterpress card buttons. Coral ink is spent only on the one settled state ("Live", pressed into the hero's pile), link underlines and the focus ring. Tokens live in `src/app/tokens.css` (OKLCH); the paper textures are `src/app/cotton.svg` and `src/app/felt.svg`.

| Token | Use |
|---|---|
| `paper`, `paper-2`, `paper-3` | The page, the banner |
| `desk` | The hero and the Work section's apps: felt under a daylight radial |
| `cotton`, `print` | Paper objects (prints, cards, sheets, the form) and the type on them |
| `board`, `board-type` | The one ink band (About), the primary button, the ring round the "Working with me" card |
| `ink`, `ink-2`, `muted` | Text; muted is 5.3:1 or better on every paper |
| `rule`, `rule-2` | Hairlines between rows |
| `paid` | The pressed "Live" stamp only (large text, 4.3:1 on the desk) |
| `accent`, `accent-2`, `focus` | Link underlines and the focus ring |
| `error` | Form errors (5.9:1 on cotton) |

**Owner exception:** the apps' store screens and icons keep their own colours. They are the product, printed on the cotton cards; the portrait in its photo slot takes Coral's muted treatment.

## Type

- General Sans 600 for heads, sentence case, tracking -0.03em; 400 and 500 for text, labels and controls. Labels are a step smaller, sentence case, muted.
- The hero's figure (the count of live apps) and About's figures are General Sans 600 at display size; Geist Mono 400 only for the service and stage numbers, each in its own column.

## Surfaces

Paper objects are cotton with a lit edge and a cast falling right; nothing else casts. Radius 8px on stock and cards, 6px on fields. Sections stay plain paper; the desk appears only in the hero and under the apps in Work; the board once, in About.

## Layout (RHYTHM 3)

A Stat-Led shape on twelve columns inside one 1440px container, the banner over a retracting bar, a colophon footer. The hero is a Poster: the figure 8, the headline, one sentence and the actions low on the left, the eight apps' screens and the portrait as a pile of prints on the desk to the right. Then Services as rows with the stack as tabbed index cards, Purpl opened on the desk with its record sheet laid over the prints, the other seven apps each on a desk tile two to a row with its sheet over the prints' foot, earlier work as four index cards in a row, Why me as three cards (the argued-for one ringed in ink), Process as a work order on cotton, About on the board, the FAQ as rows and the contact form as a letter.

## Motion (MOTION 2)

- The hero's prints settle onto the desk once on load, staggered; the markup holds where they land, so with no animation support or under reduced motion they are simply there.
- The nav bar tucks away while reading down the page and returns on any scroll up or when a link in it takes focus.
- Buttons lift 1px on hover and press 1px on click; FAQ icons turn a quarter. Nothing loops.

## Owner overrides (antislop R-37)

- Full-colour app screens and icons on Coral's warm paper, 2026-10-29.
- General Sans loads from Fontshare's stylesheet (it is not on Google Fonts), so visitors' browsers fetch it from Fontshare, 2026-10-29.
