// The dev page: what a host does, in the least code. /dev.html?view=bodies|cas9|genome|cones&guide=text
// window.__DATA is the sample graph and window.__FOLD the sample fold (build.js puts both in the page).
// For the tests: window.__views (the mounted view), __opened, __actions, __error, and __mount(view, inputs, data) to mount again.
(() => {
  const V = VaultGraphViews, host = document.getElementById("host"), q = new URLSearchParams(location.search);
  const bar = document.createElement("div");
  bar.style.cssText = "position:absolute;right:8px;bottom:96px;z-index:2;display:flex;flex-direction:column;gap:6px;align-items:flex-end;font:13px system-ui";
  document.body.appendChild(bar);
  const said = document.createElement("span");
  said.id = "said";
  window.__actions = [];
  // a stand-in for the plugin's Guide scan: the notes whose name has the guide (exact), or its first word (a look-alike)
  const scanFor = guide => {
    if (!guide) return undefined;
    const g = guide.toLowerCase(), first = g.split(/\s+/)[0], notes = [];
    for (const n of window.__DATA.nodes) { const name = n.name.toLowerCase(); if (name.includes(g)) notes.push({ path: n.id, hits: 1 }); else if (first.length > 2 && name.includes(first.slice(0, 3))) notes.push({ path: n.id, hits: 0 }); }
    return { guide, where: "in note names", notes };
  };
  window.__scanFor = scanFor;
  window.__mount = (view, inputs, data) => {
    if (window.__views) window.__views.dispose();
    window.__views = null; window.__opened = null; window.__error = null; window.__actions.length = 0;
    try {
      window.__views = V.mountViews(host, {
        view, data: data || window.__DATA,
        inputs: inputs || (view === "genome" ? { fold: window.__FOLD } : view === "cas9" ? { scan: scanFor(q.get("guide")) } : {}),
        onOpen(id) { window.__opened = id; said.textContent = "Open: " + id; },
        onAction(name) { window.__actions.push(name); said.textContent = "Action: " + name; },
      });
    } catch (e) {
      window.__error = e.message;
      said.textContent = "Failed: " + e.message;
    }
    return window.__views;
  };
  for (const v of V.VIEWS) {
    const b = document.createElement("button");
    b.textContent = v.name; b.title = v.hint;
    b.onclick = () => { history.replaceState(null, "", "?view=" + v.id + (q.get("guide") ? "&guide=" + encodeURIComponent(q.get("guide")) : "")); window.__mount(v.id); };
    bar.appendChild(b);
  }
  bar.appendChild(said);
  addEventListener("resize", () => window.__views && window.__views.resize());
  window.__mount(q.get("view") || "bodies");
})();
