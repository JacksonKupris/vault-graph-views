// Turning and zooming, one copy for every scene: drag turns, the wheel or a two-finger pinch zooms, and a press that
// didn't move is a click. The scene says where it opens (yaw, pitch, dist) and how far the zoom goes (min, max).
// minPitch (default 0.3 rad, about 17 degrees) keeps the camera above the scene: dragged edge-on, a layered scene collapses to a line.
// A scene that is a model to turn in the hand (the Cas9 model) sets it to -1.4.
// A flat scene (a map laid on the ground) sets pan: a drag slides it, a two-finger pinch still zooms, and maxPitch 1.5 lets it
// look straight down; tilt() lifts the same scene into 3D and back, so every flat view has a 3D view too.
//   onChange()      the view moved: draw again
//   onClick(x, y)   client coordinates of a press that wasn't a drag
//   onHover(x, y)   a mouse moving with no button down
export function makeOrbit(stage, { yaw = 0.6, pitch = 0.3, dist = 48, min = 15, max = 110, minPitch = 0.3, maxPitch = 1.4, pan = false, onChange, onClick, onHover }) {
  const cv = stage.canvas, s = { yaw, pitch, dist, x: 0, z: 0 }, down = new Map();
  const flatPitch = pitch, TILTED = 0.75;
  let moved = false, start = null, gap = 0;
  cv.style.touchAction = "none";
  const clamp = d => Math.max(min, Math.min(max, d)), level = p => Math.max(minPitch, Math.min(maxPitch, p)), reach = v => Math.max(-0.7, Math.min(0.7, v));
  // a drag of the finger slides the scene with it: the point looked at moves the other way across the ground, as a share of the distance
  const slide = (dx, dy) => {
    const k = (2 * Math.tan(25 * Math.PI / 180)) / (cv.clientHeight || 300);
    s.x = reach(s.x - (Math.cos(s.yaw) * dx + Math.sin(s.yaw) * dy) * k);
    s.z = reach(s.z + (Math.sin(s.yaw) * dx - Math.cos(s.yaw) * dy) * k);
  };
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
      if (pan) slide(dx, dy);
      else { s.yaw -= dx * 0.008; s.pitch = level(s.pitch + dy * 0.008); }
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
    get x() { return s.x; }, get z() { return s.z; },
    set(next) { Object.assign(s, next); s.dist = clamp(s.dist); s.pitch = level(s.pitch); s.x = reach(s.x); s.z = reach(s.z); onChange(); },
    // flat (looking down, as opened) or tilted into 3D; the scene decides what a tilt lifts (a column for a count, a hill for a heat)
    get tilted() { return s.pitch < flatPitch - 0.2; },
    tilt(on = !(s.pitch < flatPitch - 0.2)) { s.pitch = level(on ? TILTED : flatPitch); onChange(); return on; },
    apply() { stage.orbit(s.yaw, s.pitch, s.dist, s); },
    dispose() { for (const [name, fn] of Object.entries(on)) cv.removeEventListener(name, fn); },
  };
}
