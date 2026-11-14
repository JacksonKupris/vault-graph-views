// A view with too little to draw: it says what it needs and offers the graph. One copy for the views that need notes that link.
export function tooFew(frame, onAction, stat, lines) {
  frame.stat(stat);
  frame.controls({ at: "centre", lines, buttons: [{ label: "Open the graph", title: "Open the graph", run: () => onAction("graph") }] });
  return { targets: () => [], click() {}, update() {}, stat: () => stat, today: () => null, api: { empty: true } };
}
