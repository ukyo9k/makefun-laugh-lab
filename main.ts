// One-Liner Laugh Lab — entry program.
//
// Writes a single short funny line to /output/entry.txt: the excuse a
// robot vacuum gives after eating a sock. Deterministic: the same line
// is written on every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a deadpan twist on the vacuum-eats-a-sock prompt.
// 85 characters, well inside the 1-200 character gate.
const LINE =
  "I didn't eat your sock. I adopted it \u2014 it lives under the couch now and pays no rent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
