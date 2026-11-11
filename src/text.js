// Words the scenes share: counts, clipped names, dates.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
export const clip = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
// "2026-10-03" -> "Oct 3"
export const dayLabel = d => { const [, m, day] = d.split("-"); return `${MONTHS[+m - 1]} ${+day}`; };
export const daysApart = (a, b) => Math.round(Math.abs(Date.parse(b) - Date.parse(a)) / 86400000);
