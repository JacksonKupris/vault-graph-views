// Phone check page: /bench.html?detail=low|medium|high&light=basic|pbr
// The result goes on the page and in window.__bench (window.__error when it fails).
(async () => {
  const q = new URLSearchParams(location.search);
  const out = document.createElement("pre");
  out.style.cssText = "position:absolute;left:8px;top:8px;margin:0;z-index:1;background:#000a;padding:6px";
  document.body.appendChild(out);
  out.textContent = "Measuring (8 s)";
  try {
    const r = await VaultGraphViews.bench({ host: document.getElementById("host"), detail: q.get("detail") || "medium", pbr: q.get("light") === "pbr" });
    window.__bench = r;
    out.textContent = JSON.stringify(r, null, 1);
  } catch (e) {
    window.__error = e.message;
    out.textContent = "Failed: " + e.message;
  }
})();
