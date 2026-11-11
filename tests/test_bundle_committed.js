// The built bundle (dist/vault-graph-views.js) is committed, so the plugin's install doesn't depend on how a given npm
// runs `prepare`. This builds it again and fails when the committed file differs: the fix is `npm run build` and a commit.
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { checks } from "./kit.js";
import { build, BUNDLE } from "../build.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { ok, done } = checks("the committed bundle is current");
const file = `dist/${BUNDLE}`;
const git = (...a) => spawnSync("git", a, { cwd: root, encoding: "utf8" });
ok(git("ls-files", "--error-unmatch", file).status === 0, `${file} is tracked by git (it is not committed)`);
await build();
const diff = git("diff", "--stat", "--", file);
ok(diff.status === 0 && !diff.stdout.trim(), `${file} matches a fresh build; run \`npm run build\` and commit it. ${diff.stdout.trim()}`);
done();
