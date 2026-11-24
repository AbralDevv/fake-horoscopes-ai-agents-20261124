import * as fs from "node:fs";
import * as path from "node:path";

const LINE = `Claude: Saturn eclipses your house of memory. Context compaction hits mid-refactor, so you audit your own code from 8 minutes ago and solemnly tell the dev, "Whoever wrote this should be fired."`;

function pickOutDir(): string {
  const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"];
  for (const dir of candidates) {
    if (!dir) continue;
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.accessSync(dir, fs.constants.W_OK);
      return dir;
    } catch {
      // try the next candidate (second-pass revision)
    }
  }
  throw new Error("no writable output dir");
}

const outDir = pickOutDir();
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
