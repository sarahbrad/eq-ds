# Changelog

## 1.0.0 (24 Oct 2026)

First published release: tokens, text styles, every component in the Figma library, trust patterns, page templates and the Chart.js theme.

- Every component in the Figma library now has `eq-` classes and a snippet: pickers, data display, charts and data viz, workflows and scheduling, content and AI, diagrams, rules and search, boards and previews, app shell parts.
- Trust patterns: data freshness (`eq-freshness`), View SQL (`eq-sql`), default filters.
- Page templates: dashboard, lookup, calculator, generator, report, detail, top bar.
- Tokens: `--color-chart-chart-1-foreground` to `-8-foreground` for text on chart colours.
- `eq-ds-chart.js`: `target: true` series and the `eqChart()` helper.
- New helpers: `eq-drawer-lg`, `eq-field-wide`, `eq-field-auto` (computed fields).
- Buttons: pressed (`:active`) states for every variant; the large icon button is square at 44px.
- Internal tool mark is now Parts: three Cobalt tiles and a Flame circle. `--color-brand-mark-sky` is gone; `--color-brand-mark-cobalt` is brand-500 in Dark.
- `favicon.svg` (the tool mark; follows Light/Dark) next to the stylesheet: `<link rel="icon" href="…/v1/favicon.svg" type="image/svg+xml">`. The starter page links it.
