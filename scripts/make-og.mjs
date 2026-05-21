// Generates the social share image. Usage: node scripts/make-og.mjs
import sharp from "sharp";

const W = 1200;
const H = 630;

const logo = await sharp("public/logo.webp")
  .resize(220, 220, { fit: "contain", background: "#fcfaf2" })
  .png()
  .toBuffer();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="#fcfaf2"/>
  <rect width="100%" height="16" fill="#134634"/>
  <rect y="${H - 16}" width="100%" height="16" fill="#d6a63a"/>
  <text x="600" y="395" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#134634">Baitul Quran Was Sunnah Madrasa</text>
  <text x="600" y="452" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="29" fill="#4a4138">Quran &amp; Sunnah-based Islamic Education &#183; Jatrabari, Dhaka</text>
  <text x="600" y="508" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#9e7019">Established 2021 &#183; baitulquranwassunnahmadrasa.com</text>
</svg>`;

const base = await sharp(Buffer.from(svg)).png().toBuffer();

await sharp(base)
  .composite([{ input: logo, top: 95, left: Math.round((W - 220) / 2) }])
  .png()
  .toFile("public/og.png");

console.log("OG image generated at public/og.png");
