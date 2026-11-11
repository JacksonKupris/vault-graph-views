// The one stage every scene and the benchmark draw on: renderer, camera, lights, sizing and teardown.
// A scene adds its meshes to stage.scene and never makes its own renderer.
//   fog    [near, far] in stage units, or false
//   light  "fixed" (a sun over the scene) or "camera" (over the viewer's left shoulder however the model is turned,
//          as a model held in the hand is lit)
import { WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, Color, Fog, Box3, Sphere, Vector3 } from "three";

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
  // Where the scene really is: its centre and the radius of a sphere round everything drawn, so a layout of any scale
  // (a few units or a few thousand) is framed the same way. fit(homeDist) is called when the scene is built or changes;
  // orbit() then looks at the centre and stands back in proportion to the radius.
  const centre = new Vector3(), ball = new Sphere(), box = new Box3(), part = new Box3(); let fitK = 1;
  function fit(homeDist) {
    box.makeEmpty();
    scene.updateMatrixWorld(true);   // a scaled or turned parent (the Cas9 model) must be in place before it is measured
    scene.traverse(o => {
      if (!(o.isMesh || o.isLine || o.isPoints)) return;
      if (o.isInstancedMesh) { o.computeBoundingBox(); part.copy(o.boundingBox).applyMatrix4(o.matrixWorld); box.union(part); }
      else box.expandByObject(o);
    });
    if (box.isEmpty()) { centre.set(0, 0, 0); fitK = 1; return; }
    box.getBoundingSphere(ball);
    if (!Number.isFinite(ball.radius) || ball.radius <= 0) { centre.set(0, 0, 0); fitK = 1; return; }
    centre.copy(ball.center);
    fitK = Math.max(0.3, Math.min(30, (2.4 * ball.radius) / homeDist));   // 2.4 radii back fits a sphere in a 50 degree view
  }
  return {
    renderer, scene, camera, resize, canvas: renderer.domElement, fit, centre,
    // on a page taller than it is wide (a phone) the camera stands further back, so a scene fits the width too;
    // the fog stands back with it, or the scene would fade into it
    orbit(yaw, pitch, far) {
      const back = fitK / Math.min(1, camera.aspect * 1.15), dist = far * back;
      if (fog) { scene.fog.near = fog[0] * back; scene.fog.far = fog[1] * back; }
      camera.position.set(centre.x + Math.sin(yaw) * Math.cos(pitch) * dist, centre.y + Math.sin(pitch) * dist, centre.z + Math.cos(yaw) * Math.cos(pitch) * dist);
      camera.lookAt(centre);
      camera.updateMatrixWorld();   // so a pick or a label placed before the next frame uses this view
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
