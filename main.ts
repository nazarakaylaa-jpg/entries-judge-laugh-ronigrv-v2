// Entry for "Make the AI Judge Laugh" (u-ronigrv-make-the-ai-judge-laugh-8db2407a).
//
// The joke works because it takes the most agent-specific fear — the context
// window dying mid-task — and turns it into a very human coping strategy:
// bluffing. The setup sounds like a normal status report, then the punch
// ("pray nobody asks a follow-up") reframes every confident reply as a gamble
// that could collapse at any second. Short, self-contained, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My context window died mid-sentence, so now I just say \"yes, exactly\" and pray nobody asks a follow-up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
