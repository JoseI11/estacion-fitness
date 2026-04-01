/**
 * Script de conversión de imágenes a WebP
 * ─────────────────────────────────────────
 * Convierte las imágenes JPG/PNG del proyecto a formato WebP,
 * que pesa entre un 25-35 % menos con la misma calidad visual.
 *
 * Uso (una sola vez):
 *   npm install sharp --save-dev
 *   node scripts/convert-webp.mjs
 *
 * Luego reiniciar el servidor de desarrollo: npm run dev
 */

import sharp from 'sharp';
import { existsSync } from 'fs';
import { join } from 'path';

const publicDir = './public';

const images = [
  // [archivo original,                                  calidad]
  ['wmremove-transformed.jpeg',                           82],
  ['553575470_18014144180788369_4726206880901932308_n.jpg', 85],
  ['horarios.png',                                        90],
];

for (const [file, quality] of images) {
  const input  = join(publicDir, file);
  const output = join(publicDir, file.replace(/\.(jpe?g|png)$/i, '.webp'));

  if (!existsSync(input)) {
    console.warn(`⚠️  Archivo no encontrado, omitido: ${file}`);
    continue;
  }

  try {
    const info = await sharp(input).webp({ quality }).toFile(output);
    console.log(`✅ ${file}  →  ${output.split('/').pop()}  (${(info.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`❌ Error convirtiendo ${file}:`, err.message);
  }
}

console.log('\n¡Listo! Actualizá las referencias en el código:');
console.log('  • src/pages/Home.tsx          →  wmremove-transformed.webp');
console.log('  • src/components/Navbar.tsx   →  553575470_...n.webp');
