// One build. README.md has the runbook.
//   node build.js          dist/vault-graph-views.js (one browser bundle, three.js inside), dist/dev.html, dist/bench.html
//   node build.js serve    the same, then serve dist/ so a phone on the same network (or over adb reverse) can open it
// dev.html and bench.html are each one file with the bundle and the sample data inside, so they open from disk, offline.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import http from "node:http";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
export const DIST = path.join(ROOT, "dist");
export const BUNDLE = "vault-graph-views.js";
export const GLOBAL = "VaultGraphViews";
const read = f => fs.readFileSync(path.join(ROOT, f), "utf8");
// text that goes inside a <script>: a closing tag in it would end the script early
const inScript = s => s.replace(/<\/script/gi, "<\\/script").replace(/<!--/g, "<\\!--");

function page(title, bundle, script, data) {
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>
<style>html,body{margin:0;height:100%;overflow:hidden;background:#14161a;color:#ddd;font:14px system-ui}#host{position:absolute;inset:0}</style>
<div id="host"></div>
<script>${inScript(bundle)}</script>
${data ? `<script>window.__DATA = ${inScript(data.graph)}; window.__FOLD = ${inScript(data.fold)};</script>\n` : ""}<script>${inScript(script)}</script></html>`;
}

export async function build() {
  let esbuild;
  try { esbuild = await import("esbuild"); } catch (e) { throw new Error("esbuild is not installed: run `npm install` first"); }
  fs.mkdirSync(DIST, { recursive: true });
  await esbuild.build({
    entryPoints: [path.join(ROOT, "src/index.js")], outfile: path.join(DIST, BUNDLE), bundle: true, minify: true,
    format: "iife", globalName: GLOBAL, target: "es2022", legalComments: "none", logLevel: "warning",
  });
  const bundle = fs.readFileSync(path.join(DIST, BUNDLE), "utf8");
  // the sample graph is the plugin's fixture; the sample fold is the plugin's fold of it (scripts/sample_fold.cjs)
  const data = { graph: JSON.stringify(JSON.parse(read("fixtures/sample-graph.json"))), fold: JSON.stringify(JSON.parse(read("fixtures/sample-fold.json"))) };
  fs.writeFileSync(path.join(DIST, "dev.html"), page("Vault Graph Views", bundle, read("dev/dev.js"), data));
  fs.writeFileSync(path.join(DIST, "bench.html"), page("Vault Graph Views bench", bundle, read("bench/bench.js")));
  return { bytes: Buffer.byteLength(bundle), dev: path.join(DIST, "dev.html"), bench: path.join(DIST, "bench.html") };
}

function serve(port) {
  const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8" };
  const server = http.createServer((q, s) => {
    const name = path.basename(decodeURIComponent(q.url.split("?")[0])) || "dev.html";
    const f = path.join(DIST, name);
    if (!fs.existsSync(f) || !fs.statSync(f).isFile()) { s.writeHead(404).end("not found"); return; }
    s.writeHead(200, { "content-type": types[path.extname(f)] || "application/octet-stream" }).end(fs.readFileSync(f));
  });
  server.on("error", e => {
    console.error(e.code === "EADDRINUSE" ? `Port ${port} is in use. Pick another: PORT=8090 npm run dev` : e.message);
    process.exit(1);
  });
  server.listen(port, () => {
    const lan = Object.values(os.networkInterfaces()).flat().filter(a => a && a.family === "IPv4" && !a.internal).map(a => a.address);
    console.log(`Dev page   http://localhost:${port}/`);
    console.log(`Benchmark  http://localhost:${port}/bench.html?detail=medium&light=pbr`);
    for (const a of lan) console.log(`On a phone (same network)  http://${a}:${port}/bench.html?detail=medium&light=pbr`);
    console.log("Ctrl+C stops it.");
  });
}

async function main() {
  const mode = process.argv[2] || "build";
  if (!["build", "serve"].includes(mode)) throw new Error(`unknown mode "${mode}": use build or serve`);
  const r = await build();
  console.log(`dist/${BUNDLE}  ${(r.bytes / 1024).toFixed(0)} KB`);
  console.log(`dist/dev.html, dist/bench.html  (open from disk, or npm run dev)`);
  if (mode === "serve") serve(Number(process.env.PORT) || 8080);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(e => { console.error(e.message); process.exit(1); });
