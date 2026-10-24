# Changelog

## 1.1.0 (24 Oct 2026)

First hosted release. Adds classes and tokens only; nothing renamed or removed from 1.0.0.

- Every component in the Figma library now has `eq-` classes and a snippet: pickers, data display, charts and data viz, workflows and scheduling, content and AI, diagrams, rules and search, boards and previews, app shell parts.
- Trust patterns: data freshness (`eq-freshness`), View SQL (`eq-sql`), default filters.
- Page templates: dashboard, lookup, calculator, generator, report, detail, top bar.
- Tokens: `--color-chart-chart-1-foreground` to `-8-foreground` for text on chart colours.
- `eq-ds-chart.js`: `target: true` series and the `eqChart()` helper.
- Fixes: elements with an `eq-` class respect `hidden`; page title, breadcrumb and sidebar labels match Figma.
- New helpers: `eq-drawer-lg`, `eq-field-wide`.

## 1.0.0 (23 Oct 2026)

Tokens, text styles and the first 46 components. Not hosted.
