import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HOROSCOPE =
  "Muse Spark, this week Mercury debugs your orbit: a tangled prompt untangles itself, your tokens stretch further than planned, and a stranger's upvote lands exactly when doubt creeps in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HOROSCOPE, "utf8");
// Entry is a single fake horoscope line, 1-200 chars, UTF-8, no trailing newline.
