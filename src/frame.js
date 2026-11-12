// The frame round every scene: what a scene declares in words (its stat line, its labels, its buttons, a filter in
// force, a tooltip) is drawn here, once, as page elements over the canvas. A scene never makes its own buttons, so a
// control looks and behaves the same in every view.
//   stat(text)                          one line, top left
//   controls({ at, lines, buttons })    the next step. at "bottom" (default) or "centre" (an empty state);
//                                       lines [text...] first is the main one; buttons [{ label, title, run, off }]
//   explain({ legend, plain, about, insights })  what the colours mean (legend [{color, text}], always shown under the stat line) and a card behind
//                                       an Insights button: about (how the notes relate to the formula), insights [{ text, label, run }]
//   chip(text, clear)                   a filter in force, with its way out; chip(null) takes it away
//   labels([{ text, at, color, dy, run, title, strong }])   names pinned to points of the scene, first wins a clash
//   tip(text, x, y)                     at a point of the canvas; tip(null) hides it
//   place(stage)                        every frame: moves the labels to where their points are now
import { project } from "./pick.js";

const css = (el, style) => { Object.assign(el.style, style); return el; };

export function makeFrame(el, t) {
  if (getComputedStyle(el).position === "static") el.style.position = "relative";
  const halo = `0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`;
  const backing = `color-mix(in srgb, ${t.bg} 72%, transparent)`;   // a label stays readable over the tubes and lines behind it
  const make = (tag, style, parent) => { const n = document.createElement(tag); css(n, style); (parent || root).appendChild(n); return n; };
  const root = css(document.createElement("div"), { position: "absolute", inset: "0", pointerEvents: "none", overflow: "hidden", font: "13px system-ui, sans-serif", color: t.fg, userSelect: "none" });
  root.className = "vgv-frame";
  el.appendChild(root);
  const statEl = make("div", { position: "absolute", left: "12px", top: "10px", right: "12px", color: t.muted, textShadow: halo });
  statEl.className = "vgv-stat";
  const legendEl = make("div", { position: "absolute", left: "12px", top: "34px", right: "12px", display: "flex", flexWrap: "wrap", gap: "2px 12px", fontSize: "11px", color: t.muted, textShadow: halo });
  legendEl.className = "vgv-legend";
  const cardEl = make("div", { position: "absolute", left: "10px", right: "10px", bottom: "112px", maxHeight: "55%", overflowY: "auto", display: "none", flexDirection: "column", gap: "8px", padding: "10px 12px", borderRadius: "10px", background: t.bg, border: `1px solid ${t.muted}`, pointerEvents: "auto", userSelect: "text" });
  cardEl.className = "vgv-insights";
  const chipEl = make("div", { position: "absolute", top: "34px", left: "0", right: "0", display: "none", justifyContent: "center" });
  const labelsEl = make("div", { position: "absolute", inset: "0" });
  labelsEl.className = "vgv-labels";
  // the rings have their own layer: labels() rebuilds labelsEl, and rings kept in it were thrown away with the old labels
  const ringsEl = make("div", { position: "absolute", inset: "0", pointerEvents: "none" });
  ringsEl.className = "vgv-rings";
  const controlsEl = make("div", { position: "absolute", left: "0", right: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "0 12px" });
  controlsEl.className = "vgv-controls";
  const tipEl = make("div", { position: "absolute", display: "none", maxWidth: "260px", padding: "4px 8px", borderRadius: "6px", background: t.bg, border: `1px solid ${t.muted}`, color: t.fg, fontSize: "12px" });
  tipEl.className = "vgv-tip";
  root.appendChild(cardEl);   // last, so labels and the tip draw under the card

  // every style a host's own button rules could change is set here, so a theme can't restyle or resize it
  function button(parent, { label, title, run, off }, style) {
    const b = make("button", Object.assign({ pointerEvents: off ? "none" : "auto", cursor: "pointer", minHeight: "36px", height: "auto", minWidth: "36px", width: "auto", padding: "6px 14px", margin: "0",
      borderRadius: "8px", border: `1px solid ${t.muted}`, background: t.bg, color: t.fg, font: "600 13px system-ui, sans-serif", boxShadow: "none", opacity: off ? "0.35" : "1", lineHeight: "1.2" }, style || {}), parent);
    b.type = "button"; b.textContent = label; b.disabled = !!off;
    if (title) { b.title = title; b.setAttribute("aria-label", title); }
    b.addEventListener("click", e => { e.stopPropagation(); run(); });
    return b;
  }
  // where the canvas's top left is inside this overlay: a host can lay the overlay and the canvas out differently (a toolbar above one),
  // so a point projected onto the canvas is moved by this before it is drawn here
  const origin = stage => { const c = stage.canvas.getBoundingClientRect(), o = root.getBoundingClientRect(); return { x: c.left - o.left, y: c.top - o.top }; };
  let pinned = [], info = null, cardOpen = false, lastControls = {}, markText = null;
  // the host's marked notes: a ring on each and one legend item (see rings, mark)
  const ringEls = [];
  const markLegend = () => {
    const old = legendEl.querySelector(".vgv-mark"); if (old) old.remove();
    if (!markText) return;
    const it = make("span", { display: "inline-flex", alignItems: "center", gap: "5px" }, legendEl); it.className = "vgv-mark";
    make("i", { width: "9px", height: "9px", borderRadius: "50%", border: `2px solid ${t.warn}`, boxSizing: "border-box" }, it); it.append(markText);
  };
  const drawCard = () => {
    cardEl.style.display = info && cardOpen ? "flex" : "none"; cardEl.replaceChildren();
    if (!info || !cardOpen) return;
    if (info.plain) { const p = make("div", { color: t.fg, lineHeight: "1.35", fontWeight: "600" }, cardEl); p.textContent = info.plain; }
    if (info.about) make("div", { color: t.fg, lineHeight: "1.35" }, cardEl).textContent = info.about;
    for (const it of info.insights || []) {
      const row = make("div", { display: "flex", gap: "8px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }, cardEl);
      make("div", { color: t.muted, flex: "1 1 160px", lineHeight: "1.35" }, row).textContent = it.text;
      if (it.run) button(row, { label: it.label || "Show", title: it.title || it.label || "Show", run: it.run }, { minHeight: "30px", padding: "4px 10px", fontWeight: "500" });
    }
  };
  return {
    stat(text) { statEl.textContent = text || ""; },
    explain(next) {
      info = next || null; legendEl.replaceChildren();
      for (const l of (info && info.legend) || []) { const it = make("span", { display: "inline-flex", alignItems: "center", gap: "5px" }, legendEl); make("i", { width: "9px", height: "9px", borderRadius: "50%", background: l.color, display: "inline-block", flex: "none" }, it); make("span", {}, it).textContent = l.text; }
      if (!info) cardOpen = false;
      markLegend(); drawCard(); this.controls(lastControls);
    },
    // text: what a ring means (null takes the legend item away); the rings themselves are placed by rings()
    mark(text) { markText = text || null; markLegend(); },
    // items [{ at, r, n }]: a ring round each point (two rings when n > 1), kept where the point is now
    rings(items, stage) {
      while (ringEls.length < items.length) { const e = make("div", { position: "absolute", left: "0", top: "0", borderRadius: "50%", boxSizing: "border-box", willChange: "transform" }, ringsEl); ringEls.push(e); }
      const o = origin(stage);
      ringEls.forEach((e, i) => {
        const it = items[i], p = it && project(stage, it.at);
        if (!p) { e.style.display = "none"; return; }
        p.x += o.x; p.y += o.y;
        const r = Math.max(4, Math.min(24, it.r * p.px)) + 4, d = 2 * r + (it.n > 1 ? 8 : 0);
        css(e, { display: "", width: d + "px", height: d + "px", border: `2px solid ${t.warn}`, boxShadow: it.n > 1 ? `inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}` : "none", transform: `translate(${Math.round(p.x - d / 2)}px, ${Math.round(p.y - d / 2)}px)` });
      });
    },
    controls(spec = {}) {
      lastControls = spec; const { at = "bottom", lines = [], buttons: own = [] } = spec;
      const buttons = info && at === "bottom" ? [...own, { label: cardOpen ? "Close" : "Insights", title: cardOpen ? "Close the insights" : "How the notes relate to this view and how to improve them", run: () => { cardOpen = !cardOpen; drawCard(); this.controls(lastControls); } }] : own;
      controlsEl.replaceChildren();
      css(controlsEl, at === "centre" ? { top: "50%", bottom: "auto", transform: "translateY(-50%)" } : { top: "auto", bottom: "18px", transform: "none" });
      lines.forEach((text, i) => { make("div", { textAlign: "center", textShadow: halo, color: i || at !== "centre" ? t.muted : t.fg, fontWeight: i || at !== "centre" ? "400" : "600", fontSize: i || at !== "centre" ? "13px" : "14px" }, controlsEl).textContent = text; });
      if (buttons.length) { const row = make("div", { display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", maxWidth: "100%" }, controlsEl); buttons.forEach(b => button(row, b, b.wide ? { maxWidth: "70vw", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } : null)); }
    },
    chip(text, clear) {
      chipEl.replaceChildren();
      chipEl.style.display = text ? "flex" : "none";
      if (text) button(chipEl, { label: `${text}  ✕`, title: `${text}. Clear`, run: clear }, { borderRadius: "18px", fontWeight: "400" });
    },
    labels(list) {
      labelsEl.replaceChildren();
      pinned = list.map(l => {
        const style = { position: "absolute", left: "0", top: "0", whiteSpace: "nowrap", color: l.color || t.fg, textShadow: halo, font: `${l.strong ? "700 15px" : "12px"} system-ui, sans-serif`, willChange: "transform", background: backing, borderRadius: "5px", padding: "1px 5px" };
        const n = l.run ? button(labelsEl, { label: l.text, title: l.title, run: l.run }, Object.assign(style, { minHeight: "0", minWidth: "0", padding: "3px 5px", border: "none", background: backing })) : make("div", style, labelsEl);
        if (!l.run) n.textContent = l.text;
        return { l, n, w: n.offsetWidth, h: n.offsetHeight };
      });
    },
    tip(text, x, y) {
      tipEl.style.display = text ? "block" : "none";
      if (text) { tipEl.textContent = text; css(tipEl, { left: Math.max(4, Math.min(root.clientWidth - 264, x + 14)) + "px", top: Math.max(4, y + 16) + "px" }); }
    },
    place(stage) {
      const W = root.clientWidth, H = root.clientHeight, taken = [];
      const o = origin(stage);
      for (const { l, n, w, h } of pinned) {
        const p = project(stage, l.at);
        if (p) { p.x += o.x; p.y += o.y; }
        let show = !!p && p.x > -w && p.x < W + w && p.y > -h && p.y < H + h, x = 0, y = 0;
        if (show) {
          // centred on its point (or to its right, side: "right"), kept on the page and clear of the stat line and the buttons
          x = Math.max(6, Math.min(W - w - 6, l.side === "right" ? p.x + (l.dx || 0) : p.x - w / 2));
          y = Math.max(34 + (legendEl.offsetHeight ? legendEl.offsetHeight + 6 : 0), Math.min(H - 110, p.y + (l.dy || 0) - h / 2));
          show = !taken.some(r => x < r[0] + r[2] && x + w > r[0] && y < r[1] + r[3] && y + h > r[1]);
        }
        n.style.display = show ? "" : "none";
        if (show) { n.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`; taken.push([x, y, w, h]); }
      }
    },
    dispose() { root.remove(); },
  };
}
