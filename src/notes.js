// What the scenes ask about a note. These are the plugin's rules (src/view/00-core.js and 20-maps.js there), copied
// until the plugin's own views are gone; change one there and here together.

// a person, a map of content or a note that doesn't exist yet: not a note of the vault's own writing
export const special = n => !!(n.person || n.ghost || n.moc);

// How much a note matters, 0 to 1: links in, mentions, how much runs through it, recent activity.
export function importanceOf(nodes) {
  const own = nodes.filter(n => !special(n)), top = f => Math.max(1e-9, ...own.map(f));
  const max = { i: top(n => Math.log1p(n.inlinks || 0)), m: top(n => Math.log1p(n.mentions || 0)), b: top(n => n.bc || 0), r: top(n => Math.log1p(n.recent || 0)) };
  return n => (0.4 * Math.log1p(n.inlinks || 0)) / max.i + (0.3 * Math.log1p(n.mentions || 0)) / max.m + (0.2 * (n.bc || 0)) / max.b + (0.1 * Math.log1p(n.recent || 0)) / max.r;
}

// the same number for the same text, every run (FNV-1a)
export const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return h >>> 0; };

// How lively a note is, 0 to 1: edited within the last week, or edited often lately. `maxRecent` is the vault's busiest note's `recent`.
export const activityOf = nodes => {
  const maxRecent = Math.max(1, ...nodes.filter(n => !special(n)).map(n => n.recent || 0));
  return n => (special(n) ? 0 : Math.min(1, Math.exp(-(n.age || 0) / 7) + (0.6 * (n.recent || 0)) / maxRecent));
};

// Untouched for longer than the vault's own limit (data.quality.stale_days, 180 when the data doesn't say). A note named for a day
// (a log, a standup) is a record of that day, so it never goes stale. The plugin's rule (VGRules.isStale) is wider: it also reads the
// vault's record tags and folders, which the data doesn't carry.
export const staleOf = data => {
  const days = (data.quality && data.quality.stale_days) || 180;
  return n => !special(n) && !/\d{4}-\d{2}-\d{2}/.test(n.name || "") && (n.age || 0) > days;
};
