// The one stage every scene and the benchmark draw on: renderer, camera, lights, sizing and teardown.
// A scene adds its meshes to stage.scene and never makes its own renderer.
import { WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, Color, Fog } from "three";

export function makeStage(el, t, { fog = true } = {}) {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2));
  renderer.setClearColor(new Color(t.bg));
  el.appendChild(renderer.domElement);
  const scene = new Scene();
  if (fog) scene.fog = new Fog(new Color(t.bg), 40, 120);
  const camera = new PerspectiveCamera(50, 1, 0.1, 400);
  scene.add(new AmbientLight(0xffffff, 0.6));
  const sun = new DirectionalLight(0xffffff, 2.2);
  sun.position.set(20, 30, 25);
  scene.add(sun);
  function resize() {
    const w = el.clientWidth || 300, h = el.clientHeight || 300;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  return {
    renderer, scene, camera, resize, canvas: renderer.domElement,
    orbit(yaw, pitch, dist) {
      camera.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, Math.sin(pitch) * dist, Math.cos(yaw) * Math.cos(pitch) * dist);
      camera.lookAt(0, 0, 0);
    },
    render() { renderer.render(scene, camera); },
    // the picture as a PNG data URL: drawn and read in one step, since WebGL clears its buffer after a frame is shown
    snapshot() { renderer.render(scene, camera); return renderer.domElement.toDataURL("image/png"); },
    dispose() {
      scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
