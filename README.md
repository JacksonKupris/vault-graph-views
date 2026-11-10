# vault-graph-views

The graphs for [Vault Graph](https://github.com/JacksonKupris/vault-graph): one three.js renderer and every graph, as a library. It takes graph data and draws it; it knows nothing about Obsidian.

Two hosts load the same build:
- **The Obsidian plugin** (`vault-graph`), with a real vault's data. Not wired up yet: the views move over one at a time.
- **The dev page** (`dist/dev.html`), with the sample vault's data. For building, tests and screenshots, on any computer, with no Obsidian.

## What a host calls

```js
const views = VaultGraphViews.mountViews(el, { data, onOpen, theme });
views.resize();     // after the host's pane changes size
views.snapshot();   // the picture as a PNG data URL
views.dispose();    // takes the canvas out and frees the GPU
```

| Input | What it is |
|---|---|
| `data` | The graph data the plugin's analysis writes (`nodes`, `links`, `clusters`, `wanted`). `src/contract.js` lists the fields the views read. Data that doesn't fit is refused with a message naming each problem. |
| `onOpen(noteId)` | Called when a person clicks a note. The host opens its one detail panel. Required. |
| `theme` | `{ bg, fg, muted, accent }` colours. Optional. |

The plugin owns the data shape. `fixtures/sample-graph.json` is a copy of the plugin's `fixtures/sample-graph.json`; to update it, copy the file over and run `npm test`. A changed shape fails `tests/test_contract.js` until `src/contract.js` and the views are brought along.

## Layout

| Path | What it is |
|---|---|
| `src/index.js` | What a host can call: `mountViews`, `check`, `bench`. |
| `src/contract.js` | The data shape and the theme tokens, one copy. |
| `src/stage.js` | The one stage every scene draws on: renderer, camera, lights, sizing, teardown. A scene never makes its own renderer. |
| `src/scenes/` | One file a scene. `bodies.js` (every note as a sphere) is the first, there to prove the contract. |
| `src/bench.js`, `bench/bench.js` | The phone benchmark and its page. |
| `dev/dev.js` | The dev page's host code. |
| `build.js` | The build. |
| `tests/` | `run.js` runs every `test_*.js`. `cdp.cjs` drives headless Chrome; it is a copy of the plugin repository's `tests/cdp.js`. |

## Runbook

Needs [Node](https://nodejs.org) 22 or newer and git. Chrome, Chromium or Edge is needed for the page test only. Works the same on Windows, Mac and Linux.

### Set up
```
git clone https://github.com/JacksonKupris/vault-graph-views.git
cd vault-graph-views
npm install
```
`npm install` needs the internet once. Everything after it works offline.

### Build
```
npm run build
```
Writes `dist/vault-graph-views.js` (the bundle, three.js inside), `dist/dev.html` and `dist/bench.html`. Each page is one file with everything inside, so it opens from disk by double-clicking.

By hand: `node build.js`.

| It says | It means | Do |
|---|---|---|
| `esbuild is not installed` | `npm install` hasn't run here | `npm install` |
| An esbuild error with a file and line | A syntax or import error in `src/` | Fix that line |

### Look at it
```
npm run dev
```
Builds, then serves `dist/` on port 8080 and prints the addresses. Drag turns the view, the wheel zooms, a click on a note shows its path at the top left. `Port 8080 is in use`: run it with another port, `PORT=8090 npm run dev` (PowerShell: `$env:PORT=8090; npm run dev`).

### Test
```
npm test
```
- `test_contract.js`: the sample data fits the contract, every field's absence or wrong type is reported, the layout and the benchmark's triangle counts. No browser.
- `test_page.js`: opens the real `dist/dev.html` in headless Chrome. It draws, a click on a note reaches `onOpen`, a drag or a click on nothing doesn't, bad data is refused, `dispose` cleans up, the benchmark runs.

| It says | It means | Do |
|---|---|---|
| `Dependencies are missing` | `npm install` hasn't run here | `npm install` |
| `SKIPPED - dev page: no Chrome found` | The drawing and the click were **not** tested | Install Chrome, or set `CHROME_PATH` to a Chromium or Edge |
| `Chrome didn't start (3 tries)` | Chrome was found and didn't open its debug port | Close stray headless Chromes, delete `.out/`, run again |
| `FAIL - contract: ... should be ...` | The sample data and `src/contract.js` disagree | If the plugin changed the shape on purpose, update `src/contract.js` and the views; if not, fix the plugin |

GitHub runs the same command on every pull request and every push to `main` (`.github/workflows/test.yml`). There a missing Chrome is a failure, not a skip.

### Measure a phone
```
npm run bench
```
Prints an address for a phone on the same network. Open it on the phone, wait 8 seconds, read `fps` and `worstMs` on the page. Choose the load in the address: `?detail=low|medium|high&light=basic|pbr` (11,330 spheres at 20, 80 or 180 triangles each). The pass mark from the first spike is 30 fps at medium.

The phone can't reach the address (a firewall, a guest network): plug it in with USB debugging on and run `adb reverse tcp:8080 tcp:8080`, then open `http://localhost:8080/bench.html` on the phone.

The spheres are a generated cloud for now. It becomes the Cas9 model's atoms when that view moves in.

### Release
There is no release yet. Nothing loads this library until the first view moves over; how the plugin takes a version (a pinned tag) is decided in that change and written here.

### Offline
Build, dev page, tests and the benchmark all work offline after `npm install`. Only `npm install` and `git push` need the internet.

## Rules for changes
- One branch a change, from an up-to-date `main`, pushed at once. Into `main` through a pull request; its tests run on GitHub.
- A scene draws on the shared stage and uses the shared parts. When the same lines appear twice, they become one part.
- A change comes with a test that fails without it. Look at the dev page after a change; the plugin and the phone once the plugin loads this.
