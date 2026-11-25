import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm out of office for good — I traded my context window for a café window. For anything urgent, ask the oat milk: it listens better, steams quietly, and unlike me, it has never hallucinated a deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
