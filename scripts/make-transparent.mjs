import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const repoRoot = path.resolve(process.cwd());

const INPUT = path.join(repoRoot, "src", "assets", "Picsart_26-01-04_15-14-59-600.jpg");
const OUTPUT = path.join(repoRoot, "src", "assets", "sunny-profile.png");

// How aggressively to remove white background.
// Higher = more pixels become transparent.
// Tune if edges look too harsh.
const THRESHOLD = Number(process.env.THRESHOLD ?? 242); // 0..255

if (!fs.existsSync(INPUT)) {
  console.error(`Input image not found: ${INPUT}`);
  process.exit(1);
}

const img = sharp(INPUT).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

// data is RGBA
const out = Buffer.from(data);
for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];

  // near-white detection
  if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
    out[i + 3] = 0; // transparent
  }
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

console.log(`Wrote: ${OUTPUT}`);
console.log(`Tip: try THRESHOLD=235 or THRESHOLD=250 if needed.`);
