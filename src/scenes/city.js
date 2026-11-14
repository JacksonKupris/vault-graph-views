// City: the vault as a town in daylight colours, the view the plugin had until 2026-11-01. It is the same city as Cyberpunk
// (cyberpunk.js builds both: one layout, one scene); this file is only its look. Each topic is a district and each note a
// building in its topic's colour. Height is how much the vault leans on the note, warm lit windows how recently it was edited,
// a grey building is stale, a yellow crane stands on a note written this week, a red beacon is an open task, the low pale hall
// with a flag at a district's front is the topic's map, and notes in no topic are stalls on the street. Cars drive the streets
// between districts, more where the topic is busy.
//   data, inputs, onOpen, onAction: as cyberpunk.js · data.nodes[].born ("2026-11-10") puts the crane on a new note
import { Color } from "three";
import { cityScene } from "./cyberpunk.js";
import { plural } from "../text.js";

const BEACON = "#ef4444", STALL = "#a8a29e", GREY = "#5e626d";
const mix = (a, b, f) => new Color(a).lerp(new Color(b), f);

export const city = cityScene({
  id: "city", name: "City", hint: "Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",
  stage: { fog: [55, 170], ambient: 0.6 }, tower: "building", hall: true, cranes: true,
  // the colour of the sky's glow at an hour of the day (night, dawn, day, dusk), and of the open ground
  sky: h => (h < 5 || h >= 21 ? "#4f5fc4" : h < 8 ? "#f9a8d4" : h < 17 ? "#7dd3fc" : "#fb923c"), ground: "#6b8f71",
  // the sheet is multiplied by the building's colour: a pale wall takes the topic's colour, a pane stays dark, a lit window warm
  sheet: { wall: "#d9dbe3", pane: "#3d4352", lit: ["#ffd977", "#ffe9a8", "#ffc94d"] }, beacon: BEACON, beaconName: "red", stall: STALL, arc: "#ffd977",
  wall: (c, level) => (level === 0 ? mix(c, GREY, 0.72) : mix(c, "#ffffff", 0.18)),
  // cars drive the two streets along each district, headlights one way and tail lights the other
  lane: (u, v, i, cell) => ({ y: 0.1, z: (i % 2 ? 1 : -1) * (cell / 2 - 0.3), c: i % 2 ? "#fef08a" : "#f87171" }),
  stat: s => `${plural(s.towers, "building")} · ${s.fresh} new this week · tallest: ${s.tallest}`,
  plain: "Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",
  about: "Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",
  legend: [{ color: "#ffd977", text: "height = relied on, windows = recent" }, { color: GREY, text: "grey = stale" }, { color: "#facc15", text: "crane = new this week" }, { color: BEACON, text: "beacon = open task" }, { color: "#e5e7eb", text: "hall = the topic's map" }],
});
