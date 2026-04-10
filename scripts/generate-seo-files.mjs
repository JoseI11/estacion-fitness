import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const fallbackSiteUrl = 'https://www.tudominio.com';
const envFiles = ['.env', '.env.local', '.env.production', '.env.production.local'];

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

for (const envFile of envFiles) {
  loadEnvFile(path.join(rootDir, envFile));
}

const siteUrl = (process.env.VITE_SITE_URL || fallbackSiteUrl).replace(/\/+$/, '');

const routes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/actividades', changefreq: 'monthly', priority: '0.8' },
  { path: '/horarios', changefreq: 'weekly', priority: '0.9' },
  { path: '/precios', changefreq: 'weekly', priority: '0.9' },
  { path: '/profesores', changefreq: 'monthly', priority: '0.8' },
  { path: '/profesores/soledad-cristald', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/fani-petean', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/flavia-morello', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/carlos-villaruel', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/emanuel-anrique', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/yanina-lopez', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/alejandro-vaira', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/barbara-martinez', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/camila-juarez', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/marcela-marin', changefreq: 'monthly', priority: '0.6' },
  { path: '/profesores/camila-almeira', changefreq: 'monthly', priority: '0.6' },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${routePath}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
