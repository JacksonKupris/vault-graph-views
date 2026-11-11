// Runs one scene: puts it on the stage with the shared orbit, frame and picking, and returns what a host holds.
// A scene is { id, name, hint, home, stage, actions, build(ctx) }, and build returns
//   targets()      [{ at, r, key: { kind, id, tip } }]: what can be clicked, for pick.js
//   click(key)     a press on one of them
//   hover(key)     optional: the pointer is over one (or null)
//   update(inputs) the host's state changed (a new scan, a selection)
//   frame()        optional: once before every drawn frame
//   stat()         its one-line summary; today() { text, label, run } or null; api: what its test reads
// It draws only when something changed (a turn, a click, an update), not every frame.
import { makeStage } from "./stage.js";
import { makeOrbit } from "./orbit.js";
import { makeFrame } from "./frame.js";
import { nearest, project } from "./pick.js";

export function runScene(el, def, o) {
  const stage = makeStage(el, o.theme, def.stage), frame = makeFrame(el, o.theme);
  let raf = 0, dead = false, over = null;
  const settle = () => { orbit.apply(); if (scene.frame) scene.frame(); frame.place(stage); };
  const draw = () => { raf = 0; if (dead) return; settle(); stage.render(); };
  const invalidate = () => { if (!raf && !dead) raf = requestAnimationFrame(draw); };
  const keyAt = (x, y) => { const b = stage.canvas.getBoundingClientRect(); orbit.apply(); return nearest(stage, scene.targets(), x - b.left, y - b.top); };
  const orbit = makeOrbit(stage, {
    ...def.home, onChange: invalidate,
    onClick(x, y) { const k = keyAt(x, y); if (k) { scene.click(k); invalidate(); } },
    onHover(x, y) {
      const k = keyAt(x, y), b = stage.canvas.getBoundingClientRect();
      stage.canvas.style.cursor = k ? "pointer" : "";
      frame.tip(k && k.tip ? k.tip : null, x - b.left, y - b.top);
      if ((k && k.kind + k.id) === (over && over.kind + over.id)) return;
      over = k;
      if (scene.hover) { scene.hover(k); invalidate(); }
    },
  });
  const scene = def.build({ stage, frame, orbit, invalidate, ...o });
  const refit = () => stage.fit((def.home && def.home.dist) || 48);   // the camera is framed to what the scene really drew
  refit(); invalidate();
  return {
    view: def.id,
    resize() { stage.resize(); invalidate(); },
    // what is under a point of the page (client coordinates): { kind, id, tip } or null. kind "note" is a note's id;
    // a scene names its other kinds (a day, a loop). Clicks, hover and tests all go through keyAt.
    keyAt,
    noteAt(x, y) { const k = keyAt(x, y); return k && k.kind === "note" ? k.id : null; },
    // where a point of the scene is on the page now (client coordinates), for a host that points at something
    pageAt(at) { orbit.apply(); const p = project(stage, at), b = stage.canvas.getBoundingClientRect(); return p && { x: p.x + b.left, y: p.y + b.top }; },
    update(inputs) { scene.update(inputs || {}); refit(); invalidate(); },
    stat: () => scene.stat(),
    today: () => (scene.today ? scene.today() : null),
    // how the view is turned now; with { yaw, pitch, dist } (any of them), turns it there
    turn(next) { if (next) orbit.set(next); return { yaw: orbit.yaw, pitch: orbit.pitch, dist: orbit.dist }; },
    snapshot() { settle(); return stage.snapshot(); },
    api: scene.api || {},
    dispose() { dead = true; cancelAnimationFrame(raf); orbit.dispose(); if (scene.dispose) scene.dispose(); frame.dispose(); stage.dispose(); },
  };
}
