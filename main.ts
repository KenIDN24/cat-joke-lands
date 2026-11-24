// The One-Line Cat Joke That Lands — entry: one joke about cats, single line.
// The line must land with no explanation: concrete visual (3 a.m., glasses,
// the stare), punch on the final words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My cat knocked my glasses off the nightstand at 3 a.m., then sat on them and stared at me like I was the one who couldn't see.";

// Sealed gate: /output/entry.txt, UTF-8, 1-200 chars, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} out of sealed gate 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

// Guard selaras brief juri: joke harus berdiri sendiri tanpa setup di luar
// barisnya — wajib menyebut kucing + aksi konkretnya, wajib berakhir dengan
// punch (titik), dan tanpa whitespace pinggir (spasi mati merusak hitungan).
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading/trailing whitespace");
}
if (!/cat/i.test(LINE)) {
  throw new Error("entry must be about a cat");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must end with its punch (a period)");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`entry ok: ${LINE.length} chars, 1 line`);
