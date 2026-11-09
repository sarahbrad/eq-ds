# Changelog

## 1.1.0 (9 Nov 2026)

Luva mode, for internal tools that only Luva teams use.

- `data-brand="luva"` on `<html>` switches the brand colours, the tool-mark colours and the font to Luva's. Everything else (surfaces, borders, status, spacing, radius, type sizes, components) is unchanged. Light and Dark both work, through the same `prefers-color-scheme` and `data-theme` rules.
- The values come from the Figma library's new Brand collection (modes EverQuote and Luva). The Luva mode aliases Stitch / Glovebox: midnight-purple and lavender, with lime-100 for the tool-mark circle in Dark. 21 colour tokens change: `brand-primary`, `-hover`, `-subtle`, `brand-link`, `-hover`, `borders-ring`, `brand-mark-cobalt`, `-orange`, `chart-1`, `label-blue`, `-foreground`, `data-scales-seq-1…7` and `-div-pos-1…3`, plus `shadow-focus-ring`.
- Font: `--font-sans` becomes Haffer XH (then Haffer), then Plus Jakarta Sans. Haffer XH comes first because it installs with every weight, while a `Haffer` family can be Light only. Haffer isn't on Google Fonts and is licensed, so it's used only where it's installed. Plus Jakarta Sans is the stand-in Luva already uses where Haffer isn't available (the Luva Google Slides master). eq-ds.css now also imports Plus Jakarta Sans from Google Fonts; browsers only download it on Luva pages.
- `favicon-luva.svg` sits next to `favicon.svg`.
- `eq-ds-chart.js` and the Chart snippets: the chart font now follows `--font-sans` (it was fixed to Mulish), and charts redraw when `data-brand` changes as well as `data-theme`.
- The Claude DS artifact has `brands/luva.css` (the Luva blocks on their own) to inline after the tokens in artifacts.
- EverQuote pages render exactly as in 1.0.0.

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
- Sidebar brand row: the Internal tool mark and the tool's name, side by side (name 15px bold); no EverQuote wordmark. Collapsed, the mark shows alone at 40px.
- Workspace switcher and sidebar footer chevrons use `--color-surfaces-subtle`, like other secondary icons.
- Works beside an app's own CSS: `.eq-table` cells reset all borders (an app's `td, th { border }` no longer shows through), and classless cells ignore an app's global `box-sizing`. `eq-app` uses a unitless line height (still 20px at 14px), so an app's own larger headings don't overlap.
- The sidebar and the masthead stay in view while the page scrolls (1024px and wider). New `eq-sidebar-nav` wraps the sidebar's groups and items and scrolls when the nav is long, so Settings and the user stay at the bottom (`eq-sidebar-spacer` still works for older markup).
- New Single page template (`SinglePagePattern`) for tools with one view: the masthead with the Internal tool mark and the tool's name, no nav. `eq-masthead-app-lg` sets the name at 15/20 bold.
- The Top bar masthead's brand is now the Internal tool mark and the tool's name, like the Sidebar and Single page. No layout shows the EverQuote wordmark. The wordmark tokens `--color-brand-logo-primary` and `--color-brand-logo-accent` are removed.
