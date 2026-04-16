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

// [subcarpeta o '' para raíz, archivo original, calidad]
const images = [
  // Imágenes generales
  ['',             'entrenamiento-estacion.jpeg',                            82],
  ['',             '553575470_18014144180788369_4726206880901932308_n.jpg', 85],
  ['',             'horarios.png',                                          90],

  // Fotos de profesores → public/profesores/
  // ['profesores',   'lucas-fernandez.jpg',    85],
  // ['profesores',   'valentina-gomez.jpg',    85],
  // ['profesores',   'matias-torres.jpg',      85],
  // ['profesores',   'camila-rios.jpg',        85],
  // ['profesores',   'nicolas-palma.jpg',      85],
  // ['profesores',   'sofia-medina.jpg',       85],

  // Imágenes de actividades → public/actividades/
  // ['actividades',  'funcional.jpg',          85],
  // ['actividades',  'crossfit.jpg',           85],
  // ['actividades',  'yoga.jpg',               85],
  // ['actividades',  'zumba.jpg',              85],
  // ['actividades',  'musculacion.jpg',        85],
  // ['actividades',  'boxeo.jpg',              85],
  // ['actividades',  'pilates.jpg',            85],
  // ['actividades',  'stretching.jpg',         85],
];

for (const [subfolder, file, quality] of images) {
  const dir    = subfolder ? join(publicDir, subfolder) : publicDir;
  const input  = join(dir, file);
  const output = join(dir, file.replace(/\.(jpe?g|png)$/i, '.webp'));

  if (!existsSync(input)) {
    console.warn(`⚠️  Archivo no encontrado, omitido: ${subfolder ? subfolder + '/' : ''}${file}`);
    continue;
  }

  try {
    const info = await sharp(input).webp({ quality }).toFile(output);
    console.log(`✅ ${file}  →  ${output.replace(/\\/g, '/').split('public/')[1]}  (${(info.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`❌ Error convirtiendo ${file}:`, err.message);
  }
}

console.log('\n¡Listo! Recordá que las rutas en el código deben coincidir:');
console.log('  • public/profesores/nombre.webp   →  src/data/profesores.ts  (campo foto)');
console.log('  • public/actividades/nombre.webp  →  src/data/actividades.ts (campo imagen)');
