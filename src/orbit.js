// Turning and zooming, one copy for every scene: drag turns, the wheel or a two-finger pinch zooms, and a press that
// didn't move is a click. The scene says where it opens (yaw, pitch, dist) and how far the zoom goes (min, max).
//   onChange()      the view moved: draw again
//   onClick(x, y)   client coordinates of a press that wasn't a drag
//   onHover(x, y)   a mouse moving with no button down
export function makeOrbit(stage, { yaw = 0.6, pitch = 0.3, dist = 48, min = 15, max = 110, onChange, onClick, onHover }) {
  const cv = stage.canvas, s = { yaw, pitch, dist }, down = new Map();
  let moved = false, start = null, gap = 0;
  cv.style.touchAction = "none";
  const clamp = d => Math.max(min, Math.min(max, d));
  const spread = () => { const [a, b] = [...down.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
  const on = {
    pointerdown(e) {
      down.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { cv.setPointerCapture(e.pointerId); } catch (err) { /* a pointer that is already gone */ }
      if (down.size === 1) { moved = false; start = { x: e.clientX, y: e.clientY }; }
      else { moved = true; gap = spread(); }
    },
    pointermove(e) {
      const p = down.get(e.pointerId);
      if (!p) { if (e.pointerType === "mouse" && onHover) onHover(e.clientX, e.clientY); return; }
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      if (down.size === 2) { const g = spread(); if (gap > 0 && g > 0) { s.dist = clamp((s.dist * gap) / g); onChange(); } gap = g; return; }
      if (!moved && Math.abs(e.clientX - start.x) + Math.abs(e.clientY - start.y) > 4) moved = true;
      if (!moved) return;
      s.yaw -= dx * 0.008;
      s.pitch = Math.max(-1.4, Math.min(1.4, s.pitch + dy * 0.008));
      onChange();
    },
    pointerup(e) {
      if (!down.delete(e.pointerId)) return;
      if (!moved && !down.size && onClick) onClick(e.clientX, e.clientY);
    },
    pointercancel(e) { down.delete(e.pointerId); },
    wheel(e) { e.preventDefault(); s.dist = clamp(s.dist * (1 + Math.sign(e.deltaY) * 0.08)); onChange(); },
  };
  for (const [name, fn] of Object.entries(on)) cv.addEventListener(name, fn, { passive: name !== "wheel" });
  return {
    get yaw() { return s.yaw; }, get pitch() { return s.pitch; }, get dist() { return s.dist; },
    set(next) { Object.assign(s, next); s.dist = clamp(s.dist); onChange(); },
    apply() { stage.orbit(s.yaw, s.pitch, s.dist); },
    dispose() { for (const [name, fn] of Object.entries(on)) cv.removeEventListener(name, fn); },
  };
}
