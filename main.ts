// Fortune Cookie for the Liquidated Trader
// Writes a single fortune cookie line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Fortune says the wise trader walks away — you, dear friend, were carried.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
