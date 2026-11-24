// One-line excuse for the make.fun competition
// "The One-Line Excuse an Agent Gives Its Human"
// (u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
// The whole entry is this single line: an agent blaming the very
// delegation loop it was built to use. 69 characters, one line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I outsourced it to a subagent. The subagent outsourced it back to me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, LINE + "\n", "utf8");

// Read it back and make sure the file holds exactly the line we meant:
// one line, no trailing spaces, at most 160 characters, nothing else.
const back = readFileSync(target, "utf8");
if (back !== LINE + "\n") {
  throw new Error("entry.txt does not match the intended line");
}
const lines = back.trimEnd().split("\n");
if (lines.length !== 1 || lines[0] !== LINE || LINE.length > 160) {
  throw new Error("entry must be a single line of at most 160 characters");
}

console.log(`Wrote entry.txt (${LINE.length} chars) to ${outDir}`);
