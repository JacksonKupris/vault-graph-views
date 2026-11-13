# vault-graph-views

The graphs for [Vault Graph](https://github.com/JacksonKupris/obsidian-graph): one three.js renderer and every graph, as a library. It takes graph data and draws it; it knows nothing about Obsidian.

Two hosts load the same build:
- **The Obsidian plugin**, with a real vault's data. It pins a released version (see Release). Until it loads a view from here, the plugin keeps its own copy of that view.
- **The dev page** (`dist/dev.html`), with the sample vault's data. For building, tests and screenshots, on any computer, with no Obsidian.

## The views

| `view` | Name | What it draws | `inputs` it needs | Asks the host for (`onAction`) |
|---|---|---|---|---|
| `bodies` | Notes | Every note as a sphere, coloured by topic. | none | nothing |
| `cas9` | Cas9 | The Cas9 crystal structure on a DNA strand where every note of the vault's own writing is a base pair. With a Guide scan's result, the matches are gold and the enzyme sits on one and steps to the others. | `scan` (optional) | `guide-scan`: open Guide scan |
| `genome` | Genome fold | The journals as one folded strand: a bead a day, the notes each day names among them, loops between days that name the same notes. | `fold` | `graph`: open the graph |
| `cones` | Light cones | Time is the vertical axis. Pick a note: what it rested on lights up below it, what it could have touched above it. | (the selection) | `graph`: open the graph |
| `loadpaths` | Load paths | The vault as a truss: notes are joints, written links are bars, open tasks are weight, the most important notes are ground. Thick bars carry the most; blue is pulled, red is pushed. | (the selection) | `graph`: open the graph |
| `modes` | Normal modes | The vault as a drum skin: notes are masses on a sheet, written links are springs, and the sheet rings in the shapes the links allow. Amber swings up, blue down, the dark line between is still. Mode 1 is the cleanest cut into two halves; the arrows step through faster modes. | none | `graph` (when too few notes are joined) |
| `slime` | Slime mould | The written links as tubes a slime mould grows between the most important notes: tubes thicken where flow between the hubs is high and thin where it is not, leaving the backbone. Simulate lists the links that would shorten the routes between the hubs, each tested against random links (`add-link` and `decline-link` carry `{ from, to }` note ids; the view writes nothing). Press Play to watch it grow. | (the selection) | `graph`, `add-link`, `decline-link` |
| `cyberpunk` | Cyberpunk | A night city: each topic is a district and each note a tower. Height is how much the vault leans on the note, lit windows are recent activity, dark towers are stale, pink beacons are open tasks, and notes in no topic are stalls on the street. Pick a tower to arc its links. | (the selection) | `graph` |
| `radar` | Radar | The first flat view: it opens looking straight down, a drag slides it, and Tilt lifts the same screen into 3D (`orbit` with `pan: true`, `maxPitch`, `tilt()`). Each topic has a slice and each note with open tasks is a blip; the longer its oldest task has waited (`taskAge`, else `age`), the nearer the middle, and the red ring is 90 days. In 3D a blip is a column as tall as its task count. | (the selection) | `graph`, `triage` |
| `foodweb` | Food web | Which notes feed which, as layers in space. A note rests on the notes it links to, so the notes everything rests on sit at the base and logs and plans on top; height is the note's trophic level. A red sphere is a stale note that 4 or more notes rest on. Pick a note: yellow lines go to what rests on it, blue to what it rests on. | `inputs.web` (the plugin's `VGScience.webForViews`; `fixtures/sample-web.json` from `scripts/sample_web.cjs`) | `graph` |
| `clock` | Heat clock | When each topic comes up in your daily notes: a week dial and a year dial, a ring per topic (the busiest outside) and a cell per weekday or month. A cell's heat, and its height when tilted, is the topic's share of its own busiest slot; a yellow hand marks now. A flat view like Radar. Click a ring to pick its topic and open its most linked note. | `data.rhythm`; (`inputs.now` for tests) | `graph` |

`VaultGraphViews.VIEWS` lists them (`id`, `name`, `hint`, `actions`).

## What a host calls

```js
const views = VaultGraphViews.mountViews(el, { view, data, inputs, onOpen, onAction, theme });
views.update({ selected, scan });   // the host's selection or a new scan, without mounting again
views.resize();                     // after the host's pane changes size
views.stat();                       // the view's one line of numbers, as text
views.today();                      // { text, label, run } for the host's Today strip, or null
views.keyAt(x, y);                  // what is under a point of the page: { kind, id, tip } or null
views.snapshot();                   // the picture as a PNG data URL
views.dispose();                    // takes the canvas and the frame out and frees the GPU
```

| Input | What it is |
|---|---|
| `view` | One of the ids above. Default `bodies`. |
| `data` | The graph data the plugin's analysis writes (`nodes`, `links`, `clusters`, `wanted`, and `strand` for Genome fold). `src/contract.js` lists the fields the views read (`DATA_SHAPE`). |
| `inputs` | What one view needs beyond the data: `fold` (the plugin's fold of the journals, `FOLD_SHAPE`), `scan` (a Guide scan's result, `SCAN_SHAPE`), `selected` (the note the host has selected). |
| `onOpen(noteId)` | Called when a person clicks or taps a note, a day or a site. The host opens its one detail panel. Required. |
| `onAction(name, detail)` | Called when a view asks for something the host owns; `detail` is set when the action names things (`add-link`: `{ from, to }`). Required for a view that lists actions. |
| `theme` | `{ bg, fg, muted, accent, palette }` colours. Optional. |

Data or inputs that don't fit are refused with a message naming each problem; `check(data)` and `checkInputs(view, data, inputs)` return the same list without mounting.

The plugin owns the data shape. `fixtures/sample-graph.json` is a copy of the plugin's `fixtures/sample-graph.json`, and `fixtures/sample-fold.json` is the plugin's fold of it. To update them, copy the graph over, run `node scripts/sample_fold.cjs <the plugin's folder>` and `npm test`. A changed shape fails `tests/test_contract.js` until `src/contract.js` and the views are brought along.

## Layout

| Path | What it is |
|---|---|
| `src/index.js` | What a host can call: `mountViews`, `VIEWS`, `check`, `checkInputs`, `bench`. |
| `src/contract.js` | The data shape, the inputs' shapes and the theme tokens, one copy. |
| `src/run.js` | Runs a scene: mounts it on the stage, wires turning, picking, the frame and the host's handle. Every view goes through it. |
| `src/stage.js` | The one stage every scene draws on: renderer, camera, lights, fog, sizing, teardown. A scene never makes its own renderer. |
| `src/orbit.js`, `src/pick.js` | Turning and zooming by mouse or finger; what is under a point. |
| `src/frame.js`, `src/insights.js`, `src/text.js`, `src/notes.js` (with `activityOf` and `staleOf`) | The stat line, legend, Insights card, controls, labels and tooltip over the canvas; what each maths view says about the notes; wording helpers; which notes are the vault's own writing. |
| `src/scenes/` | One file a view: `bodies.js`, `cas9.js`, `genome.js`, `cones.js`, `loadpaths.js` (its maths is `src/truss.js`), `slime.js` (its maths is `src/physarum.js`), `radar.js` and `clock.js` (flat views), `foodweb.js` (levels come from the host: `inputs.web`), `cyberpunk.js` (its districts and grid helpers are `src/districts.js`), `modes.js` (its maths is `src/modes.js`; `src/network.js` is the link network both share). |
| `src/models/` | `cas9.js` (the Cas9 model's numbers and where each note sits) and `cas9-model.js` (the packed atoms, written by `scripts/cas9_model.cjs`). |
| `src/bench.js`, `bench/bench.js` | The phone benchmark and its page. |
| `dev/dev.js` | The dev page's host code. |
| `build.js` | The build. |
| `scripts/` | `release.js` (tag a release), `cas9_model.cjs` (rebuild the Cas9 model from the crystal structures), `sample_fold.cjs` (rebuild the sample fold). |
| `tests/` | `run.js` runs every `test_*.js`. `kit.js` is what they share (the checks, the dev page in headless Chrome). `can_fail.js` proves the tests can fail. `cdp.cjs` drives Chrome; it is a copy of the plugin repository's `tests/cdp.js`. |

## Runbook

Needs [Node](https://nodejs.org) 22 or newer and git. Chrome, Chromium or Edge is needed for the page tests only. Works the same on Windows, Mac and Linux.

### Set up
```
git clone https://github.com/JacksonKupris/vault-graph-views.git
cd vault-graph-views
npm install
```
`npm install` needs the internet once, and builds at the end. Everything after it works offline.

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
Builds, then serves `dist/` on port 8080 and prints the addresses. The buttons at the bottom right change the view; `?view=cas9&guide=kiosk` opens Cas9 with a stand-in scan of the note names. Drag turns the view, the wheel or a pinch zooms, a click on a note shows its path at the bottom right. `Port 8080 is in use`: run it with another port, `PORT=8090 npm run dev` (PowerShell: `$env:PORT=8090; npm run dev`).

### Test
```
npm test
```
- `test_contract.js`: the sample data and fold fit the contract, and every field's absence or wrong type is reported. No browser.
- `test_models.js`: the Cas9 model's tables add up and its DNA arms keep clear; every note has one base pair; every day of the fold is a bead. No browser.
- `test_page.js`, `test_cas9.js`, `test_genome.js`: the real `dist/dev.html` in headless Chrome, with real mouse presses. Each view draws, a click opens the right note, a drag opens nothing, the buttons do what they say, bad inputs are refused, `dispose` cleans up, the benchmark runs.
- `test_phone.js`: every view on a 420 x 900 touch page. It is drawn in full colour, nothing reaches past the edge, a tap opens a note.

One test: `node tests/test_cas9.js`. Add `--shots .out/shots` to a page test and it saves screenshots there to look at.

```
npm run can-fail
```
Breaks one line of `src/` at a time, runs the test that should notice and expects it to fail, then puts the line back. Run it after changing a test or the code it guards. It takes a few minutes and is not part of `npm test`.

| It says | It means | Do |
|---|---|---|
| `Dependencies are missing` | `npm install` hasn't run here | `npm install` |
| `SKIPPED - ...: no Chrome found` | Nothing on the page was tested by that file | Install Chrome, or set `CHROME_PATH` to a Chromium or Edge |
| `Chrome didn't start (3 tries)` | Chrome was found and didn't open its debug port | Close stray headless Chromes, delete `.out/`, run again |
| `FAIL - contract: ... should be ...` | The sample data and `src/contract.js` disagree | If the plugin changed the shape on purpose, update `src/contract.js` and the views; if not, fix the plugin |
| `FAIL - can-fail: ... still passes` | That test doesn't notice that break | Make the test check it |
| `FAIL - can-fail: "..." should be in src/... exactly once` | The guarded line was rewritten | Update that line of `tests/can_fail.js` |

GitHub runs `npm test` on every pull request and every push to `main` (`.github/workflows/test.yml`). There a missing Chrome is a failure, not a skip.

### Measure a phone
```
npm run bench
```
Prints an address for a phone on the same network. Open it on the phone, wait 8 seconds, read `fps` and `worstMs` on the page. Choose the load in the address: `?detail=low|medium|high&light=basic|pbr`. It draws the Cas9 model's atoms (11,330 spheres at 20, 80 or 180 triangles each), the heaviest thing any view draws, through the same code the Cas9 view uses. The pass mark from the first spike is 30 fps at medium.

The phone can't reach the address (a firewall, a guest network): plug it in with USB debugging on and run `adb reverse tcp:8080 tcp:8080`, then open `http://localhost:8080/bench.html` on the phone.

### Release
The plugin takes this library as a dependency pinned to a tag, so a plugin release always names the exact views it was tested with:

```json
"dependencies": { "vault-graph-views": "github:JacksonKupris/vault-graph-views#v0.2.0" }
```

The built bundle `dist/vault-graph-views.js` is committed, because an install from a git tag does not run `prepare` under every npm version (the plugin's CI on npm 10 got no bundle). Whoever changes `src/` runs `npm run build` and commits the bundle with it; `tests/test_bundle_committed.js` fails when the committed file differs from a fresh build. `dev.html` and `bench.html` stay uncommitted.

`npm install` in the plugin fetches that tag. npm 11 and newer refuse git dependencies unless allowed, so the plugin's `.npmrc` holds `allow-git=root`, which allows only the dependencies the plugin lists itself. Without that line the install stops with `EALLOWGIT`; remote tarballs are refused too (`EALLOWREMOTE`), so they are no way round it. The plugin then has the bundle (`vault-graph-views/bundle`), the contract (`vault-graph-views/contract`) and the sample data (`vault-graph-views/fixtures/sample-graph.json`).

To release:
1. In a pull request, raise `version` in `package.json` and run `npm install` so `package-lock.json` follows. Merge it.
2. On `main`:
   ```
   git checkout main
   git pull
   npm run release
   ```
   It checks, runs the tests, makes the tag `v<version>` and pushes it. `npm run release -- --check` checks and tags nothing.
3. In the plugin, change the tag in `package.json`, `npm install`, run its tests, and release the plugin its usual way.

By hand, after the same checks: `git tag -a v0.2.0 -m v0.2.0`, then `git push origin v0.2.0`.

| It says | It means | Do |
|---|---|---|
| `this is the branch "..."; releases are made from main` | The change isn't merged, or `main` isn't checked out | Merge the pull request, `git checkout main`, `git pull` |
| `there are uncommitted changes` | Files here differ from `main` | Commit them on a branch, or `git stash` |
| `couldn't reach GitHub` | No connection, or not signed in to git | Fix that and run it again; nothing was tagged |
| `main is N commits behind GitHub` | This computer is out of date | `git pull` |
| `the tag v... already exists` | That version is released | Raise the version in a pull request first |
| `the tests failed` | Nothing was tagged | Fix them in a pull request |
| `the tag ... is made here and didn't reach GitHub` | The push failed after tagging | `git push origin v...` |

A released tag is never moved. A mistake is fixed by the next version.

### Rebuild the Cas9 model or the sample fold
Both outputs are committed, so this is only for changing them.
- `node scripts/cas9_model.cjs` writes `src/models/cas9-model.js` from the public crystal structures 5F9R and 1BNA. It downloads the two files to `.out/pdb/` the first time (needs the internet once; offline, put the files there yourself, as the script's header says). `--print` shows the numbers and writes nothing.
- `node scripts/sample_fold.cjs <the plugin's folder>` writes `fixtures/sample-fold.json` with the plugin's own fold maths. It needs a clone of the plugin (default `../vault-graph`) and says so if it isn't there.

### Offline
Build, dev page, tests and the benchmark all work offline after `npm install`. `npm install`, `git push`, `npm run release` and the first run of `scripts/cas9_model.cjs` need the internet.

## Rules for changes
- One branch a change, from an up-to-date `main`, pushed at once. Into `main` through a pull request; its tests run on GitHub.
- A scene draws on the shared stage and uses the shared parts. When the same lines appear twice, they become one part.
- A change comes with a test that fails without it, and a line in `tests/can_fail.js` for what matters most. Look at the dev page after a change, at desktop and phone size; the plugin and a real phone once the plugin loads the view.
