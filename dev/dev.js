// The dev page: what a host does, in the least code. /dev.html?view=bodies|cas9|genome|cones|loadpaths|modes|slime&guide=text
// window.__DATA is the sample graph and window.__FOLD the sample fold, window.__WEB the sample Food web (build.js puts them in the page).
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
    pick.value = view; window.__views = null; window.__opened = null; window.__error = null; window.__actions.length = 0;
    try {
      window.__views = V.mountViews(host, {
        view, data: data || window.__DATA,
        inputs: inputs || (view === "genome" ? { fold: window.__FOLD } : view === "foodweb" ? { web: window.__WEB } : view === "cas9" ? { scan: scanFor(q.get("guide")) } : {}),
        onOpen(id) { window.__opened = id; said.textContent = "Open: " + id; },
        onAction(name, detail) { window.__actions.push(name); window.__actionDetail = detail || null; said.textContent = "Action: " + name; },
      });
    } catch (e) {
      window.__error = e.message;
      said.textContent = "Failed: " + e.message;
    }
    return window.__views;
  };
  // one picker, not a button per view: a column of buttons grew over the view's own buttons as views were added
  const pick = document.createElement("select"), first = q.get("view") || "bodies";
  pick.title = "The view shown";
  for (const v of V.VIEWS) { const o = document.createElement("option"); o.value = v.id; o.textContent = v.name; o.title = v.hint; pick.appendChild(o); }
  pick.value = first;
  pick.onchange = () => { history.replaceState(null, "", "?view=" + pick.value + (q.get("guide") ? "&guide=" + encodeURIComponent(q.get("guide")) : "")); window.__mount(pick.value); };
  bar.appendChild(said); bar.appendChild(pick);
  addEventListener("resize", () => window.__views && window.__views.resize());
  window.__mount(first);
})();
