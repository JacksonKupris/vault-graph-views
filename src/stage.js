// The one stage every scene and the benchmark draw on: renderer, camera, lights, sizing and teardown.
// A scene adds its meshes to stage.scene and never makes its own renderer.
//   fog    [near, far] in stage units, or false
//   light  "fixed" (a sun over the scene) or "camera" (over the viewer's left shoulder however the model is turned,
//          as a model held in the hand is lit)
import { WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, Color, Fog, Box3, Matrix4, Vector3, Mesh, SphereGeometry, MeshBasicMaterial, BackSide, Float32BufferAttribute, Points, BufferGeometry, PointsMaterial } from "three";

export function makeStage(el, t, { fog = [40, 120], light = "fixed", ambient = 0.6 } = {}) {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2));
  renderer.setClearColor(new Color(t.bg));
  el.appendChild(renderer.domElement);
  const scene = new Scene();
  if (fog) scene.fog = new Fog(new Color(t.bg), fog[0], fog[1]);
  const camera = new PerspectiveCamera(50, 1, 0.1, 400);
  scene.add(new AmbientLight(0xffffff, ambient));
  const sun = new DirectionalLight(0xffffff, 2.2);
  if (light === "camera") { sun.position.set(-0.5, 0.9, 0.45); camera.add(sun); camera.add(sun.target); sun.target.position.set(0, 0, -1); scene.add(camera); }
  else { sun.position.set(20, 30, 25); scene.add(sun); }
  function resize() {
    const w = el.clientWidth || 300, h = el.clientHeight || 300;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  // Where the scene really is: its centre and a radius that holds the bulk of what is drawn, so a layout of any scale (a few
  // units or a few thousand) is framed the same way. The centre is the middle of each axis's 2nd to 98th percentile range and the radius reaches the 98th
  // percentile of their distance from it, so a few far outliers (one stray note) do not shrink the rest to a speck.
  // fit(homeDist) is called when the scene is built or changes; orbit() then looks at the centre and stands back in
  // proportion to the radius. changed() says whether what the scene holds is not what fit() last measured.
  const centre = new Vector3(), tmp = new Vector3(), box = new Box3(), at = new Vector3(), mat = new Matrix4(), corner = new Vector3(); let fitK = 1, seen = "";
  // a backdrop (the sky, the ground under a city: userData.backdrop) is not what the scene holds: it is never framed or measured
  const holds = () => { let n = 0; scene.traverse(o => { if ((o.isMesh || o.isLine || o.isPoints) && !o.userData.backdrop) n += 1 + (o.isInstancedMesh ? o.count : 0) + (o.geometry && o.geometry.attributes.position ? o.geometry.attributes.position.count : 0); }); return n; };
  const mid = v => { v.sort((p, q) => p - q); const n = v.length; return (v[Math.floor(n * 0.02)] + v[Math.min(n - 1, Math.floor(n * 0.98))]) / 2; };
  function fit(homeDist) {
    scene.updateMatrixWorld(true);   // a scaled or turned parent (the Cas9 model) must be in place before it is measured
    const pts = [];
    scene.traverse(o => {
      if (!(o.isMesh || o.isLine || o.isPoints) || o.userData.backdrop) return;
      if (o.isInstancedMesh) for (let i = 0; i < o.count; i++) { o.getMatrixAt(i, mat); pts.push(at.setFromMatrixPosition(mat).applyMatrix4(o.matrixWorld).clone()); }
      else { box.makeEmpty().expandByObject(o); if (!box.isEmpty()) for (let k = 0; k < 8; k++) pts.push(corner.set(k & 1 ? box.max.x : box.min.x, k & 2 ? box.max.y : box.min.y, k & 4 ? box.max.z : box.min.z).clone()); }
    });
    seen = holds();
    const good = pts.filter(p => Number.isFinite(p.x + p.y + p.z));
    if (!good.length) { centre.set(0, 0, 0); fitK = 1; return; }
    centre.set(mid(good.map(p => p.x)), mid(good.map(p => p.y)), mid(good.map(p => p.z)));
    const d = good.map(p => p.distanceTo(centre)).sort((p, q) => p - q), r = d[Math.min(d.length - 1, Math.floor(d.length * 0.98))] * 1.05;
    if (!(r > 0)) { fitK = 1; return; }
    fitK = Math.max(0.3, Math.min(30, (2.4 * r) / homeDist));   // 2.4 radii back fits a sphere in a 50 degree view
  }
  let dome = null;
  return {
    renderer, scene, camera, resize, canvas: renderer.domElement, fit, changed: () => holds() !== seen, centre,
    // on a page taller than it is wide (a phone) the camera stands further back, so a scene fits the width too;
    // the fog stands back with it, or the scene would fade into it
    orbit(yaw, pitch, far, pan) {
      const back = fitK / Math.min(1, camera.aspect * 1.15), dist = far * back;
      const at = pan ? (tmp.set(centre.x + pan.x * dist, centre.y, centre.z + pan.z * dist), tmp) : centre;   // a flat scene slid across the ground
      if (fog) { scene.fog.near = fog[0] * back; scene.fog.far = fog[1] * back; }
      camera.position.set(at.x + Math.sin(yaw) * Math.cos(pitch) * dist, at.y + Math.sin(pitch) * dist, at.z + Math.cos(yaw) * Math.cos(pitch) * dist);
      camera.lookAt(at);
      if (dome) dome.position.copy(camera.position);
      camera.updateMatrixWorld();   // so a pick or a label placed before the next frame uses this view
    },
    // a sky around the viewer: `haze` at the horizon and below (the fog takes it, so the ground fades into the sky), rising to
    // `top` overhead; stars, when asked for, are that many points in the upper sky. It travels with the camera.
    sky({ top, haze, stars = 0, starColor = "#ffffff" }) {
      if (dome) { scene.remove(dome); dome.traverse(o => { if (o.geometry) { o.geometry.dispose(); o.material.dispose(); } }); }
      const R = 300, geo = new SphereGeometry(R, 24, 16), p = geo.getAttribute("position"), col = [], a = new Color(haze), b = new Color(top), c = new Color();
      for (let i = 0; i < p.count; i++) { const u = Math.max(0, Math.min(1, p.getY(i) / R / 0.5)); c.copy(a).lerp(b, u * u * (3 - 2 * u)); col.push(c.r, c.g, c.b); }
      geo.setAttribute("color", new Float32BufferAttribute(col, 3));
      dome = new Mesh(geo, new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthTest: false, depthWrite: false }));
      dome.renderOrder = -10; dome.frustumCulled = false; dome.userData.backdrop = true;
      if (stars > 0) {
        const pts = [];
        for (let i = 0; i < stars; i++) { const yaw = ((i * 2654435761) % 6283) / 1000, up = 0.12 + (((i * 40503) % 1000) / 1000) * 0.85, flat = Math.sqrt(1 - up * up); pts.push(Math.cos(yaw) * flat * R * 0.98, up * R * 0.98, Math.sin(yaw) * flat * R * 0.98); }
        const s = new Points(new BufferGeometry().setAttribute("position", new Float32BufferAttribute(pts, 3)), new PointsMaterial({ color: starColor, size: 1.6, sizeAttenuation: false, fog: false, depthTest: false, depthWrite: false, transparent: true, opacity: 0.8 }));
        s.renderOrder = -9; s.frustumCulled = false; s.userData.backdrop = true; dome.add(s);
      }
      scene.add(dome); dome.position.copy(camera.position);
      renderer.setClearColor(a); if (fog) scene.fog.color.copy(a);
    },
    render() { renderer.render(scene, camera); },
    // the picture as a PNG data URL: drawn and read in one step, since WebGL clears its buffer after a frame is shown
    snapshot() { renderer.render(scene, camera); return renderer.domElement.toDataURL("image/png"); },
    dispose() {
      scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); if (o.isInstancedMesh) o.dispose(); });
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
