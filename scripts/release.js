// npm run release: tags main as v<version in package.json> and pushes the tag. The plugin pins that tag.
// It checks first, and stops saying what to do: on main, nothing uncommitted, level with GitHub, the tag is new,
// the tests pass. README.md (Release) has the same steps by hand.
//   node scripts/release.js           check, tag, push the tag
//   node scripts/release.js --check   check only; nothing is tagged or pushed
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");
const stop = (msg, next) => { console.error(`release: ${msg}\n  Next: ${next}`); process.exit(1); };
function git(...args) {
  const r = spawnSync("git", args, { cwd: ROOT, encoding: "utf8" });
  if (r.error) stop(`git didn't run (${r.error.message})`, "install git and run this again");
  return { ok: r.status === 0, out: (r.stdout || "").trim(), err: (r.stderr || "").trim() };
}

const version = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8")).version, tag = "v" + version;
if (!/^\d+\.\d+\.\d+$/.test(version)) stop(`package.json's version is "${version}"`, "make it three numbers, like 0.2.0");

const branch = git("rev-parse", "--abbrev-ref", "HEAD").out;
if (branch !== "main") stop(`this is the branch "${branch}"; releases are made from main`, "merge the pull request, then `git checkout main && git pull`");
const dirty = git("status", "--porcelain").out;
if (dirty) stop(`there are uncommitted changes:\n${dirty}`, "commit them on a branch and merge it, or put them aside (`git stash`)");
const fetched = git("fetch", "origin", "main", "--tags");
if (!fetched.ok) stop(`couldn't reach GitHub (${fetched.err.split("\n").pop()})`, "check the internet connection and run this again; nothing was tagged");
const [ahead, behind] = git("rev-list", "--left-right", "--count", "HEAD...origin/main").out.split(/\s+/).map(Number);
if (behind) stop(`main is ${behind} commits behind GitHub`, "`git pull`, then run this again");
if (ahead) stop(`main has ${ahead} commits GitHub doesn't`, "they should have gone through a pull request: move them to a branch and open one");
if (git("rev-parse", "-q", "--verify", "refs/tags/" + tag).ok) stop(`the tag ${tag} already exists`, "raise the version in package.json in a pull request, merge it, then run this again");

console.log(`Running the tests before tagging ${tag} ...`);
const t = spawnSync(process.execPath, [path.join(ROOT, "tests", "run.js")], { cwd: ROOT, stdio: "inherit" });
if (t.status !== 0) stop("the tests failed", "fix them in a pull request; nothing was tagged");

if (CHECK) { console.log(`Ready: ${tag} can be released from ${git("rev-parse", "--short", "HEAD").out}. Nothing was tagged (--check).`); process.exit(0); }
const made = git("tag", "-a", tag, "-m", tag);
if (!made.ok) stop(`couldn't make the tag (${made.err})`, "read the message above and run this again");
const pushed = git("push", "origin", tag);
if (!pushed.ok) stop(`the tag ${tag} is made here and didn't reach GitHub (${pushed.err.split("\n").pop()})`, `\`git push origin ${tag}\` when the connection is back`);
console.log(`Released ${tag}.\nIn the plugin's package.json: "vault-graph-views": "github:JacksonKupris/vault-graph-views#${tag}", then \`npm install\` there.`);
