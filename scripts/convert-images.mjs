// One-off utility: optimise source photos into web-ready webp assets.
// Usage: node scripts/convert-images.mjs
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const RAW = ".rawimg";
const OUT = "public/images";

await mkdir(OUT, { recursive: true });
const files = await readdir(RAW);

for (const f of files) {
  const { name, ext } = path.parse(f);
  if (![".jpg", ".jpeg", ".png"].includes(ext.toLowerCase())) continue;
  const input = path.join(RAW, f);

  if (name === "logo") {
    await sharp(input)
      .resize({ width: 384, withoutEnlargement: true })
      .webp({ quality: 92 })
      .toFile("public/logo.webp");
    console.log("logo  -> public/logo.webp");
    continue;
  }

  const out = path.join(OUT, `${name}.webp`);
  const info = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(
    `${name.padEnd(22)} -> ${String(Math.round(info.size / 1024)).padStart(4)}KB  ${info.width}x${info.height}`,
  );
}
