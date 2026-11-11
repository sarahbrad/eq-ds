# Changelog

## 1.3.0 (11 Nov 2026)

Components and fixes found by rebuilding four real tools (EQD-4788, EQD-4789, EQD-4791).

**Fixed**
- A closed Modal (`<dialog class="eq-modal">`) no longer shows on the page or takes focus on load.
- The range Date picker (Calendar) stays open until the end date is picked; the month arrows no longer close it.
- `eq-form-row-3` works on its own; `eq-form-row eq-form-row-3` still works.

**Tables**
- Grouped table: collapsible groups up to two levels, totals on each group row, Expand all / Collapse all, keyboard and screen-reader support (`data-level`, `eqGroupedTable`).
- Table column bands: tinted header bands over sets of columns, such as "This week" and "Last week" (`colgroup.eq-band`, `eq-band-blue/-teal/-purple/-gray`).
- Editable cells: click or Enter to edit, Enter or leaving to save, Escape to cancel; saving, saved, error and "changed" states; an `eq-edit` event (`td[data-type="edit"]`, `eqEditCells`).
- Row tone: `eq-row-warning` and `eq-row-danger` mark a row that needs attention with a tint and a left edge, always next to a Status that says why.
- Bullet cell: `eq-cell-bullet` shows actual against target inside a table cell.
- `eq-status-wrap` (or a Status in `td.eq-wrap`) wraps long labels and keeps the dot on the first line.
- "—" is only for cells with no value by definition, explained once in a column note; never for loading or missing data.

**Data display**
- Tier colours: `eq-label-gold/-silver/-bronze`, `eq-status-gold/-silver/-bronze` and `eq-label-rank`, with tokens `color-tier-gold/-silver/-bronze` (plus `-subtle` and `-foreground`). The tier name is always shown.
- `eq-stat-unit`: a smaller, muted unit after a Stat value ("$1,240/mo", "312 leads").
- `eq-delta-neutral` for prices and other two-sided changes. Colour a change green or red only when its direction clearly means good or bad for the reader.
- Grouped 100% bar (`eq-bar-100-group`): rows of 100% bars with one legend, group headings, sub-rows and totals.
- Pacing (`eq-pacing`, `eqPacing()`): progress against "expected by now" with On track, At risk and Behind (plus Ahead of pace and Over budget), adjustable thresholds and an inline version for table cells.
- Record list (`eq-record-list`, `eqRecordList()`): a selectable list beside its detail; a keyboard listbox that fires `change`.
- Copy ID (`eq-copy-id`): an ID with a small Copy button that confirms "Copied" on screen and to screen readers.

**Controls and shell**
- Combobox, Date picker, Calendar, Multi-select, Number input and Period menu fire standard `change` events (and `input` where useful) with the value on the element and in `event.detail`. Each doc page has an Events section.
- Date picker and Calendar have a Clear action in a footer (`eq-calendar-footer`).
- Combobox options can show secondary text, trailing (`eq-option-meta`) or on a second line (`eq-option-description`); search matches it.
- Multi-select closes on Esc without applying and returns focus to its facet.
- Collapsible Card: `eq-card-toggle` folds `eq-card-body` away; the header stays visible.
- `eq-surface-light` keeps Light tokens (Luva Light in Luva mode) inside email and other outbound previews while the page is Dark.
- Disabled Sidebar nav item (`aria-disabled="true"` on `eq-nav-item`).
- `--space-masthead-height` (72px) and `--space-masthead-height-sm` (56px); the Masthead uses them.
- Toast action slot (`eq-toast-actions`) for Undo, and `eqToastTimer()`, which pauses on hover and focus. The Toast docs say when to use Undo and when to use a confirm Modal.

**For artifacts**
- New `eq-ds-inline.css`: the whole stylesheet (tokens, Light and Dark, Luva mode, text styles, components) ready to paste into one `<style>` in a Claude artifact. Published next to eq-ds.css and in the DS artifact.
- With `eq-app` on `<body>` (or `<html>`), the canvas behind the body is grey too, so short pages and overscroll don't show white.

## 1.2.1 (11 Nov 2026)

Lighter than 1.2.0.

- The page canvas is a very light grey: `--color-surfaces-background` is zinc-50 in Light (1.2.0: zinc-100). Cards, tables and the filter bar stay white.
- The sidebar stays zinc-100 (`--color-theme-sidebar`), now a step darker than the canvas. The active item is still raised in white.
- Table toolbars and footers (`eq-table-toolbar`, `eq-table-footer`) are white again. Only table header rows and the applied-filters row use `--color-theme-structure` (zinc-100), so a table reads as a white card with one light header band.
- Dark is unchanged.

## 1.2.0 (11 Nov 2026)

Clearer hierarchy: a grey canvas with white content, and real fills for structure.

- The page canvas is grey in Light: `--color-surfaces-background` is now zinc-100 (was zinc-50), and `.eq-app` and `.eq-shell` paint it (they were white). Cards, tables, the Stat strip and the filter bar stay white, so content lifts off the page. Dark is unchanged (zinc-950 canvas, zinc-900 cards). The masthead stays on the shell colour.
- The sidebar matches the canvas (`--color-theme-sidebar` zinc-100), with the active item still raised in white.
- New token `--color-theme-structure` (zinc-100 Light, zinc-800 Dark) for structure inside white containers: table header rows, table toolbars and footers, and the applied-filters row. `--color-surfaces-muted` is unchanged, so hovers, read-only inputs and code blocks look the same.
- The applied-filters row (`eq-active-filters`) now goes inside `eq-filter-bar`, where it becomes a grey band along the bottom of the white card. Outside a filter bar it looks as before. The FilterBar and DefaultFilters snippets are updated.
- Grey page sections (`eq-section-grey`) now match the canvas; on a grey page, use a card instead.

## 1.1.1 (11 Nov 2026)

Luva's full base palette.

- The Luva block now defines every Stitch colour as a base token (`--color-stitch-<ramp>-<step>`), not only the 21 steps Luva mode points at: midnight-purple 50–950, lavender 50–950, mauve, off-white, lime, teal, red, white and the Stitch alpha colours (41 in all). Nothing else changes; no semantic value moves.
- In the Claude DS artifact the Stitch colours sit straight after the EverQuote base ramps, and every base colour says it's the same in every view: Luva mode swaps the semantic tokens (such as `color-brand-primary`), not the ramps.

## 1.1.0 (9 Nov 2026)

Luva mode, for internal tools that only Luva teams use.

- `data-brand="luva"` on `<html>` switches the brand colours, the tool-mark colours and the font to Luva's. Everything else (surfaces, borders, status, spacing, radius, type sizes, components) is unchanged. Light and Dark both work, through the same `prefers-color-scheme` and `data-theme` rules.
- The values come from the Figma library's new Brand collection (modes EverQuote and Luva). The Luva mode aliases Stitch / Glovebox: midnight-purple and lavender, with lime-100 for the tool-mark circle in Dark. 21 colour tokens change: `brand-primary`, `-hover`, `-subtle`, `brand-link`, `-hover`, `borders-ring`, `brand-mark-cobalt`, `-orange`, `chart-1`, `label-blue`, `-foreground`, `data-scales-seq-1…7` and `-div-pos-1…3`, plus `shadow-focus-ring`.
- Font: `--font-sans` becomes Haffer XH (then Haffer), then Plus Jakarta Sans. Haffer XH comes first because it installs with every weight, while a `Haffer` family can be Light only. Haffer isn't on Google Fonts and is licensed, so it's used only where it's installed. Plus Jakarta Sans is the stand-in Luva already uses where Haffer isn't available (the Luva Google Slides master). eq-ds.css now also imports Plus Jakarta Sans from Google Fonts; browsers only download it on Luva pages.
- `favicon-luva.svg` sits next to `favicon.svg`.
- `eq-ds-chart.js` and the Chart snippets: the chart font now follows `--font-sans` (it was fixed to Mulish), and charts redraw when `data-brand` changes as well as `data-theme`.
- In the Claude DS artifact, Luva mode is part of `components/bundle.css` (no separate file), and its font import includes Plus Jakarta Sans.
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
