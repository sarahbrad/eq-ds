/* Internal Tools DS · Chart.js theme (ships beside eq-ds.css)

     <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
     <script src="…/eq-ds/v1/eq-ds-chart.js"></script>
     eqChartTheme(Chart);                         // once, before creating charts
     new Chart(el, { type: 'line', data: { datasets: eqSeries([{ label: 'Quotes', data }]) } });

   Every value is read from the eq-ds.css tokens at call time, so Light and Dark
   follow the page. Call eqChartTheme(Chart) again and chart.update() after a theme switch. */
(function () {
  function tok(name) { return getComputedStyle(document.documentElement).getPropertyValue('--' + name).trim(); }
  function alpha(color, a) {
    var c = document.createElement('canvas').getContext('2d'); c.fillStyle = color; var hex = c.fillStyle;
    if (hex[0] !== '#') return color;
    var n = parseInt(hex.slice(1, 7), 16);
    return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')';
  }
  function series(i) { return tok('color-chart-chart-' + ((i % 8) + 1)); }

  window.eqChartTheme = function (Chart) {
    var d = Chart.defaults;
    d.font = { family: 'Mulish, ui-sans-serif, system-ui, sans-serif', size: 12, lineHeight: 1.5 };
    d.color = tok('color-surfaces-muted-foreground');
    d.borderColor = tok('color-borders-border');
    d.scale.grid.color = tok('color-borders-border');
    d.scale.border.color = tok('color-borders-border');
    d.scale.ticks.color = tok('color-surfaces-muted-foreground');
    d.plugins.legend.labels.color = tok('color-surfaces-secondary-foreground');
    d.plugins.legend.labels.boxWidth = 8;
    d.plugins.legend.labels.boxHeight = 8;
    d.plugins.tooltip.backgroundColor = tok('color-surfaces-inverse');
    d.plugins.tooltip.titleColor = tok('color-surfaces-inverse-foreground');
    d.plugins.tooltip.bodyColor = tok('color-surfaces-inverse-foreground');
    d.elements.line.borderWidth = 2;
    d.elements.point.radius = 4;
    d.elements.point.borderWidth = 2;
    d.elements.point.borderColor = tok('color-surfaces-card');
    d.elements.bar.borderRadius = parseFloat(tok('radius-chip')) || 4;
    d.elements.bar.borderSkipped = 'start';
  };

  /* Colours datasets in order of importance. Options per dataset:
     comparison: true → chart-5, dashed (previous period); area: true → 16% fill;
     target: true → a dashed muted line with no points (no annotation plugin needed).
     Comparison and target series don't use up a series colour. */
  window.eqSeries = function (datasets) {
    var n = 0;
    return datasets.map(function (ds) {
      var c = ds.target ? tok('color-surfaces-muted-foreground') : ds.comparison ? tok('color-chart-chart-5') : series(n++);
      var out = Object.assign({ borderColor: c, backgroundColor: ds.area ? alpha(c, 0.16) : c, pointBackgroundColor: c }, ds);
      if (ds.comparison || ds.target) out.borderDash = [6, 4];
      if (ds.area) out.fill = true;
      if (ds.target) Object.assign(out, { type: 'line', borderWidth: 1.5, pointRadius: 0, pointHoverRadius: 0, fill: false });
      return out;
    });
  };

  /* Target or threshold line for chartjs-plugin-annotation. */
  window.eqTargetLine = function (value, label) {
    return { type: 'line', yMin: value, yMax: value, borderColor: tok('color-surfaces-muted-foreground'), borderDash: [6, 4], borderWidth: 1.5,
             label: label ? { display: true, content: label, color: tok('color-surfaces-muted-foreground'), backgroundColor: 'transparent', position: 'end' } : undefined };
  };
})();

/* eqChart(card, cfg): draws a chart card's chart, HTML legend and Table view from one config, and redraws on a theme change.
   Same code as the Chart snippets; with this file linked, snippets can drop their inline copy. */
/* eq-ds chart theme (a copy of eq-ds-chart.js) and eqChart(): chart, legend and table from one config. Guarded, so pasting several charts defines it once. */
window.eqChart || (function () {
  function tok(n) { return getComputedStyle(document.documentElement).getPropertyValue("--" + n).trim(); }
  function alpha(c, a) { var x = document.createElement("canvas").getContext("2d"); x.fillStyle = c; var h = x.fillStyle; if (h[0] !== "#") return c; var n = parseInt(h.slice(1, 7), 16); return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a + ")"; }
  window.eqChartTheme = window.eqChartTheme || function (Chart) {
    var d = Chart.defaults;
    d.font = { family: "Mulish, ui-sans-serif, system-ui, sans-serif", size: 12, lineHeight: 1.5 };
    d.color = tok("color-surfaces-muted-foreground"); d.borderColor = tok("color-borders-border");
    d.scale.grid.color = tok("color-borders-border"); d.scale.border.color = tok("color-borders-border"); d.scale.ticks.color = tok("color-surfaces-muted-foreground");
    d.plugins.legend.labels.color = tok("color-surfaces-secondary-foreground"); d.plugins.legend.labels.boxWidth = 8; d.plugins.legend.labels.boxHeight = 8;
    d.plugins.tooltip.backgroundColor = tok("color-surfaces-inverse"); d.plugins.tooltip.titleColor = tok("color-surfaces-inverse-foreground"); d.plugins.tooltip.bodyColor = tok("color-surfaces-inverse-foreground");
    d.elements.line.borderWidth = 2; d.elements.point.radius = 4; d.elements.point.borderWidth = 2; d.elements.point.borderColor = tok("color-surfaces-card");
    d.elements.bar.borderRadius = parseFloat(tok("radius-chip")) || 4; d.elements.bar.borderSkipped = "start";
  };
  /* comparison: chart-5 dashed; area: 16% fill; target: a dashed muted line with no points. */
  window.eqSeries = function (datasets) {
    var n = 0;
    return datasets.map(function (ds) {
      var c = ds.target ? tok("color-surfaces-muted-foreground") : ds.comparison ? tok("color-chart-chart-5") : tok("color-chart-chart-" + (n++ % 8 + 1));
      var out = Object.assign({ borderColor: c, backgroundColor: ds.area ? alpha(c, 0.16) : c, pointBackgroundColor: c }, ds);
      if (ds.comparison || ds.target) out.borderDash = [6, 4];
      if (ds.area) out.fill = true;
      if (ds.target) Object.assign(out, { type: "line", borderWidth: 1.5, pointRadius: 0, pointHoverRadius: 0, fill: false });
      return out;
    });
  };
  window.eqChart = function (card, cfg) {
    if (card.eqChart) card.eqChart.destroy();
    card.eqCfg = cfg = cfg || card.eqCfg;
    var donut = cfg.type === "doughnut", horiz = cfg.horizontal, pct = cfg.percent, fmt = function (v) { return v == null ? "–" : v.toLocaleString() + (cfg.unit || ""); };
    var series = cfg.series.map(function (s) { return Object.assign({ area: cfg.type === "area" && !s.comparison && !s.target }, s); });
    if (pct) series = series.map(function (s) { return Object.assign({}, s, { data: s.data.map(function (v, i) {
      var t = cfg.series.reduce(function (a, x) { return a + (x.target ? 0 : x.data[i]); }, 0); return t ? Math.round(v / t * 1000) / 10 : 0; }) }); });
    eqChartTheme(Chart);
    var ds = donut ? [{ data: series[0].data, backgroundColor: cfg.labels.map(function (_, i) { return tok("color-chart-chart-" + (i % 8 + 1)); }), borderColor: tok("color-surfaces-card"), borderWidth: 2, borderRadius: 0 }]
      : eqSeries(series.map(function (s) { return Object.assign({ order: s.type === "line" || s.target ? 0 : 1, yAxisID: s.axis === "right" ? "y1" : undefined }, s); }));
    var v = horiz ? "x" : "y", k = horiz ? "y" : "x", scales = {}, stacked = !!(cfg.stacked || pct);
    if (!donut) {
      scales[k] = { stacked: stacked, grid: { display: false } };
      scales[v] = { stacked: stacked, beginAtZero: true, max: pct ? 100 : undefined, border: { display: false }, ticks: { maxTicksLimit: 5, callback: function (x) { return x.toLocaleString() + (pct ? "%" : cfg.unit || ""); } } };
      if (series.some(function (s) { return s.axis === "right"; })) scales.y1 = { position: "right", beginAtZero: true, grid: { display: false }, border: { display: false }, ticks: { maxTicksLimit: 5, callback: function (x) { return x.toLocaleString() + (cfg.rightUnit || ""); } } };
    }
    card.eqChart = new Chart(card.querySelector("canvas"), { type: donut ? "doughnut" : cfg.type === "area" ? "line" : cfg.type,
      data: { labels: cfg.labels, datasets: ds },
      options: Object.assign({ responsive: true, maintainAspectRatio: false, indexAxis: horiz ? "y" : "x", scales: scales,
        interaction: donut ? { mode: "nearest", intersect: true } : { mode: "index", intersect: false },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return " " + (c.dataset.label || c.label) + ": " + fmt(c.raw) + (pct ? "%" : ""); } } } } },
        donut ? { cutout: "72%" } : {}, cfg.options || {}) });
    var legend = card.querySelector(".eq-legend"), table = card.querySelector(".eq-chart-table");
    if (legend) {
      legend.textContent = "";
      var items = donut ? cfg.labels.map(function (l, i) { return { label: l, value: series[0].data[i], color: "var(--color-chart-chart-" + (i % 8 + 1) + ")" }; })
        : (function (n) { return series.map(function (s) { return { label: s.label, marker: s.target || s.comparison ? "dashed" : (s.type || cfg.type) === "line" ? "line" : "square",
            color: s.target ? "var(--color-surfaces-muted-foreground)" : s.comparison ? "var(--color-chart-chart-5)" : "var(--color-chart-chart-" + (n++ % 8 + 1) + ")" }; }); })(0);
      items.forEach(function (it, i) {
        var li = document.createElement("li"), b = document.createElement("button");
        b.type = "button"; b.className = "eq-legend-item"; b.setAttribute("aria-pressed", "true"); b.style.setProperty("--eq-series", it.color);
        if (it.marker && it.marker !== "square") b.dataset.marker = it.marker;
        b.textContent = it.label;
        if (donut) { var val = document.createElement("span"); val.className = "eq-legend-value"; val.textContent = fmt(it.value); b.append(" ", val); }
        b.onclick = function () { var on = b.getAttribute("aria-pressed") !== "true", c = card.eqChart;
          if (donut) c.toggleDataVisibility(i); else c.setDatasetVisibility(i, on); b.setAttribute("aria-pressed", on); c.update(); };
        li.appendChild(b); legend.appendChild(li);
      });
    }
    if (table) {
      var cols = donut ? [cfg.valueLabel || "Value"] : cfg.series.map(function (s) { return s.label; }), t = document.createElement("table"), tr = t.createTHead().insertRow(), body = t.createTBody();
      t.className = "eq-table eq-table-compact";
      [cfg.labelHeader || ""].concat(cols).forEach(function (c, j) { var th = document.createElement("th"); th.scope = "col"; th.textContent = c; if (j) th.className = "eq-num"; tr.appendChild(th); });
      cfg.labels.forEach(function (l, i) { var r = body.insertRow(); r.insertCell().textContent = l;
        (donut ? [cfg.series[0]] : cfg.series).forEach(function (s) { var td = r.insertCell(); td.className = "eq-num"; td.textContent = fmt(s.data[i]); }); });
      table.textContent = ""; table.appendChild(t);
    }
    if (!card.eqWired) {
      card.eqWired = true;
      card.addEventListener("change", function (e) { if (e.target.closest(".eq-segmented")) card.dataset.view = e.target.value; });
      new MutationObserver(function () { eqChart(card); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { eqChart(card); });
    }
    return card.eqChart;
  };
})();
