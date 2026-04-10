const fallbackSiteUrl = 'https://www.tudominio.com';
const fallbackPhone = '543764227809';
const fallbackFormUrl = 'https://forms.gle/Abkf7EsW5d45QVPy8';
const fallbackInstagramUrl = 'https://www.instagram.com/estacion_fitness_/';
const fallbackTikTokUrl = 'https://www.tiktok.com/@estacionfitnes22';

function normalizeSiteUrl(url?: string): string {
  return (url?.trim() || fallbackSiteUrl).replace(/\/+$/, '');
}

function normalizePhoneNumber(phone?: string): string {
  return (phone?.trim() || fallbackPhone).replace(/[^\d]/g, '');
}

export const siteConfig = {
  name: 'Estación Fitness',
  description:
    'Espacio cómodo para entrenar con acompañamiento profesional y horarios amplios. Planes flexibles en Rafaela.',
  siteUrl: normalizeSiteUrl(import.meta.env.VITE_SITE_URL),
  phoneNumber: normalizePhoneNumber(import.meta.env.VITE_PUBLIC_PHONE),
  googleFormUrl: import.meta.env.VITE_GOOGLE_FORM_URL?.trim() || fallbackFormUrl,
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL?.trim() || fallbackInstagramUrl,
  tikTokUrl: import.meta.env.VITE_TIKTOK_URL?.trim() || fallbackTikTokUrl,
  address: {
    street: 'Dante Alghieri 715',
    city: 'Rafaela',
    region: 'Santa Fe',
    country: 'AR',
  },
  ogImagePath: '/wmremove-transformed.jpeg',
};

export function buildWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.phoneNumber}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
