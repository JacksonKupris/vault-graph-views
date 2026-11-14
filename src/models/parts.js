// Parts the built models share (the Station, the Reactor, the Atom): a rod laid between two points, and one mesh of many copies.
import { InstancedMesh, Matrix4, Vector3, Quaternion, Color } from "three";

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
// take a built model off the scene and free everything it holds, before the next one is built
export function scrap(scene, model) {
  scene.remove(model);
  model.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); if (o.isInstancedMesh) o.dispose(); });
}
// colour c mixed toward colour b by f (0 to 1), as a hex string
export const mix = (c, b, f) => "#" + new Color(c).lerp(new Color(b), f).getHexString();
