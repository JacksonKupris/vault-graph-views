// Where a point of the scene is on the canvas, and what is under a point of the canvas. Shared by every scene:
// clicks, hover, labels and the tests all go through these two.
import { Vector3 } from "three";

const v = new Vector3();
// p [x, y, z] in stage units -> { x, y } in CSS pixels from the canvas's top left, depth (how far in front of the
// camera) and px (pixels a stage unit covers there). null when it is behind the camera.
export function project(stage, p) {
  const cam = stage.camera, w = stage.canvas.clientWidth, h = stage.canvas.clientHeight;
  v.set(p[0], p[1], p[2]).applyMatrix4(cam.matrixWorldInverse);
  const depth = -v.z;
  if (depth <= cam.near) return null;
  const f = h / (2 * Math.tan((cam.fov * Math.PI) / 360));
  return { x: w / 2 + (v.x * f) / depth, y: h / 2 - (v.y * f) / depth, depth, px: f / depth };
}

// items: [{ at: [x, y, z], r: radius in stage units, key }]. The key of the item under (x, y): the nearest to the
// camera of those the point is inside; when it is inside none, the closest within `slack` pixels (a finger is not a
// pointer). null when nothing is there.
export function nearest(stage, items, x, y, slack = 8) {
  let hit = null, hitDepth = Infinity, close = null, closeBy = Infinity;
  for (const it of items) {
    const p = project(stage, it.at);
    if (!p) continue;
    const d = Math.hypot(p.x - x, p.y - y), r = it.r * p.px;
    if (d <= r) { if (p.depth < hitDepth) { hitDepth = p.depth; hit = it.key; } }
    else if (d - r <= slack && d - r < closeBy) { closeBy = d - r; close = it.key; }
  }
  return hit || close;
}
