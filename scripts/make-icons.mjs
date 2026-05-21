// Generates PWA icons from the logo. Usage: node scripts/make-icons.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/logo.webp";
const OUT = "public/icons";
const cream = { r: 252, g: 250, b: 242, alpha: 1 };

await mkdir(OUT, { recursive: true });

for (const size of [192, 512]) {
  await sharp(SRC)
    .resize(size, size, { fit: "contain", background: cream })
    .png()
    .toFile(`${OUT}/icon-${size}.png`);
}

await sharp(SRC)
  .resize(180, 180, { fit: "contain", background: cream })
  .png()
  .toFile(`${OUT}/apple-touch-icon.png`);

// Maskable: logo within the safe zone on a full cream canvas.
const inner = await sharp(SRC)
  .resize(360, 360, { fit: "contain", background: cream })
  .png()
  .toBuffer();

await sharp({
  create: { width: 512, height: 512, channels: 4, background: cream },
})
  .composite([{ input: inner, gravity: "centre" }])
  .png()
  .toFile(`${OUT}/maskable-512.png`);

console.log("PWA icons generated in public/icons");
