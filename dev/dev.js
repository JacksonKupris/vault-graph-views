// Standalone host: the sample vault's data (put in the page by the build), no Obsidian.
// A click shows the note where the plugin would open its detail panel.
(() => {
  const host = document.getElementById("host"), label = document.createElement("div");
  label.style.cssText = "position:absolute;left:12px;top:12px;z-index:1;pointer-events:none";
  document.body.appendChild(label);
  try {
    const data = window.__DATA;
    const v = VaultGraphViews.mountViews(host, { data, onOpen: id => { label.textContent = "Open: " + id; window.__opened = id; } });
    label.textContent = data.nodes.length + " notes";
    addEventListener("resize", v.resize);
    window.__views = v;
  } catch (e) {
    label.textContent = "Could not start: " + e.message;
    window.__error = e.message;
  }
})();
