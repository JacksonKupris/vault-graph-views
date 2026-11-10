// The first body scene: every note as one instanced sphere, sized by its links, coloured by topic, on a golden-spiral
// shell. A click picks the sphere under the pointer and calls the host's onOpen(noteId).
// It proves the contract end to end (data in, canvas out, a click reaches the host); the real graphs move in from
// the plugin in later phases.
import { InstancedMesh, SphereGeometry, MeshStandardMaterial, Matrix4, Color, Raycaster, Vector2 } from "three";
import { makeStage } from "../stage.js";

// Where each note sits and how big it is. Pure, so tests can check it without a GPU.
export function layout(nodes, R = 18) {
  const n = nodes.length, golden = Math.PI * (3 - Math.sqrt(5));
  return nodes.map((node, i) => {
    const y = n > 1 ? 1 - (i / (n - 1)) * 2 : 0, r = Math.sqrt(1 - y * y), a = i * golden;
    return { x: Math.cos(a) * r * R, y: y * R, z: Math.sin(a) * r * R, size: 0.5 + Math.sqrt((node.inlinks || 0) + (node.outlinks || 0)) * 0.35 };
  });
}

export function bodyScene(el, data, onOpen, t) {
  const stage = makeStage(el, t);
  const nodes = data.nodes, spots = layout(nodes);
  const mesh = new InstancedMesh(new SphereGeometry(1, 20, 14), new MeshStandardMaterial({ roughness: 0.5 }), Math.max(nodes.length, 1));
  mesh.count = nodes.length;
  const m = new Matrix4(), col = new Color();
  spots.forEach((p, i) => {
    m.makeScale(p.size, p.size, p.size).setPosition(p.x, p.y, p.z);
    mesh.setMatrixAt(i, m);
    mesh.setColorAt(i, col.setHSL(((nodes[i].cluster || 0) * 0.137) % 1, 0.6, 0.55));
  });
  stage.scene.add(mesh);

  let yaw = 0.6, pitch = 0.3, dist = 48, dragged = false, down = null, raf = 0;
  const ray = new Raycaster(), ptr = new Vector2(), cv = stage.canvas;
  cv.style.touchAction = "none";
  // The note under a point of the canvas (client coordinates), or null. Clicks and tests both use it.
  function noteAt(clientX, clientY) {
    const b = cv.getBoundingClientRect();
    ptr.set(((clientX - b.left) / b.width) * 2 - 1, -((clientY - b.top) / b.height) * 2 + 1);
    stage.orbit(yaw, pitch, dist);
    stage.camera.updateMatrixWorld();
    ray.setFromCamera(ptr, stage.camera);
    const hit = ray.intersectObject(mesh)[0];
    return hit && hit.instanceId != null ? nodes[hit.instanceId].id : null;
  }
  function frame() {
    stage.orbit(yaw, pitch, dist);
    stage.render();
    raf = requestAnimationFrame(frame);
  }
  cv.addEventListener("pointerdown", e => { down = { x: e.clientX, y: e.clientY }; dragged = false; });
  cv.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) dragged = true;
    if (!dragged) return;
    yaw -= dx * 0.008;
    pitch = Math.max(-1.4, Math.min(1.4, pitch + dy * 0.008));
    down = { x: e.clientX, y: e.clientY };
  });
  cv.addEventListener("pointerup", e => {
    const wasDrag = dragged;
    down = null;
    if (wasDrag) return;
    const id = noteAt(e.clientX, e.clientY);
    if (id) onOpen(id);
  });
  cv.addEventListener("pointercancel", () => { down = null; });
  cv.addEventListener("wheel", e => { e.preventDefault(); dist = Math.max(15, Math.min(110, dist * (1 + Math.sign(e.deltaY) * 0.08))); }, { passive: false });
  frame();
  return {
    resize: stage.resize,
    noteAt,
    snapshot() { stage.orbit(yaw, pitch, dist); return stage.snapshot(); },
    dispose() { cancelAnimationFrame(raf); stage.dispose(); },
  };
}
