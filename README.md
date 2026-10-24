# eq-ds

The hosted stylesheet for EverQuote's Internal Tools Design System.

```html
<link rel="stylesheet" href="https://sarahbrad.github.io/eq-ds/v1/eq-ds.css">
<body class="eq-app">…</body>
```

- `/v1/` always serves the latest 1.x release. Fixes and new classes arrive on reload.
- `/1.0.0/` is fixed to one release, for tools that need to stay put.
- `eq-ds-chart.js` (same folders) themes Chart.js 4 with the system's tokens.

Built from the design system's token source; don't edit these files by hand. Releases follow semantic versioning: patch for fixes, minor for new classes, major for renames or removals. See CHANGELOG.md.

This repo will move to an EverQuote GitHub organisation; the URL will change then.
