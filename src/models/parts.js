// Parts the built models share (the Station, the Reactor, the Atom): a rod laid between two points, and one mesh of many copies.
import { InstancedMesh, Matrix4, Vector3, Quaternion, Color, Points, BufferGeometry, Float32BufferAttribute, PointsMaterial, AdditiveBlending, CanvasTexture } from "three";

const UP = new Vector3(0, 1, 0), a = new Vector3(), d = new Vector3(), mid = new Vector3(), s = new Vector3(), q = new Quaternion(), col = new Color();
// m becomes the matrix that lays a unit cylinder (height 1 along y, radius 1) from p to t ([x, y, z] each) at radius r
export function span(m, p, t, r) {
  a.set(p[0], p[1], p[2]); d.set(t[0], t[1], t[2]).sub(a);
  const len = d.length() || 1e-6;
  mid.copy(a).addScaledVector(d, 0.5); q.setFromUnitVectors(UP, d.multiplyScalar(1 / len));
  return m.compose(mid, q, s.set(r, len, r));
}
// One mesh of items.length copies of a geometry: each(item, i, m) sets the copy's matrix m and returns its colour (or nothing).
export function copies(geometry, material, items, each) {
  const mesh = new InstancedMesh(geometry, material, Math.max(1, items.length)), m = new Matrix4();
  mesh.count = items.length; mesh.frustumCulled = false;
  items.forEach((it, i) => { m.identity(); const c = each(it, i, m); mesh.setMatrixAt(i, m); if (c != null) mesh.setColorAt(i, col.set(c)); });
  return mesh;
}
// n points of light that move: at(i, t) gives point i's [x, y, z] at time t (seconds); tick(t) moves them. They glow (the stage's bloom
// takes them), are never clicked and are not measured when the view is framed (userData.backdrop).
// a soft round dot, drawn once and shared: points are squares without it
let dot = null;
function softDot() {
  if (dot || typeof document === "undefined") return dot;
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(0.35, "rgba(255,255,255,0.55)"); r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return (dot = new CanvasTexture(c));
}

export function sparks(n, at, { size = 3.4, color = "#ffffff", opacity = 0.95 } = {}) {
  const geo = new BufferGeometry().setAttribute("position", new Float32BufferAttribute(new Float32Array(Math.max(1, n) * 3), 3));
  const object = new Points(geo, new PointsMaterial({ color, size: size * 2, map: softDot(), sizeAttenuation: false, transparent: true, opacity, blending: AdditiveBlending, depthWrite: false }));
  object.frustumCulled = false; object.userData.backdrop = true;
  const tick = t => { const p = geo.getAttribute("position"); for (let i = 0; i < n; i++) { const v = at(i, t); p.setXYZ(i, v[0], v[1], v[2]); } p.needsUpdate = true; };
  tick(0);
  return { object, tick };
}
// take a built model off the scene and free everything it holds, before the next one is built
export function scrap(scene, model) {
  scene.remove(model);
  model.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); if (o.isInstancedMesh) o.dispose(); });
}
// colour c mixed toward colour b by f (0 to 1), as a hex string
export const mix = (c, b, f) => "#" + new Color(c).lerp(new Color(b), f).getHexString();
