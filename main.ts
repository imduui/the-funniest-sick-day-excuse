// The Funniest Sick-Day Excuse — make.fun entry
// Writes a single one-line sick-day excuse to /output/entry.txt.
// The line must be 1-200 characters, UTF-8, not only whitespace.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The excuse: waking up sounding like the CEO is a fresh twist on a
// half-believable voice change, and "legal says I have to stay home"
// lands the laugh just before the last word, with "my real voice
// comes back" as the button. It reads like a real message typed to
// a boss, not a joke built for a contest.
const ENTRY =
  "Can't come in — I woke up sounding exactly like our CEO, so legal says I have to stay home until my real voice comes back.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (!text.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote /output/entry.txt (${text.length} chars)`);
