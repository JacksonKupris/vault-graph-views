#!/usr/bin/env bash
# Look at library views in the real Obsidian with your local edits (no release needed).
#   scripts/preview.sh <out-dir> "Reactor" "Atom"
# Needs ../vault-graph next to this repo, installed (npm install --allow-git=all), and Obsidian open on the vault.
# What it does: builds this library, copies the bundle over the plugin's installed copy, builds and installs the plugin, screenshots the views.
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"; plugin="$here/../vault-graph"; out="$1"; shift
[ -d "$plugin/node_modules/vault-graph-views/dist" ] || { echo "Next: run npm install --allow-git=all in $plugin"; exit 1; }
(cd "$here" && node build.js)
cp "$here/dist/vault-graph-views.js" "$plugin/node_modules/vault-graph-views/dist/vault-graph-views.js"
focus() { "${OBSIDIAN_CLI:-D:/Obsidian/Obsidian.com}" command id=jk-vault-graph:open >/dev/null 2>&1 || true; sleep 5; }
(cd "$plugin" && node scripts/deploy.js --no-tests --plugin && sleep 6 && focus && { node scripts/look.js --out "$out" "$@" >/dev/null 2>&1 || true; focus; sleep 2; node scripts/look.js --out "$out" "$@"; })
