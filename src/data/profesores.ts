// TODO: Reemplazar con los datos reales de los profesores cuando la cliente los provea

export interface Profesor {
  slug: string;
  nombre: string;
  especialidad: string;
  enlace_instagram: string;
  foto: string;
  fotoPosition?: string;
}

export const profesores: Profesor [] = [
  {
    slug: 'soledad-cristald',
    nombre: 'Soledad Cristald',
    especialidad: 'Profesora en tecnicas de gimnasia',
    enlace_instagram:'https://www.instagram.com/sole_cristald/',
    foto: '/profesores/profe-soledad.webp',
    fotoPosition: 'top',
  },
  {
    slug: 'fani-petean',
    nombre: 'Fani María Petean',
    especialidad: 'Profesora de yoga',
    enlace_instagram:'https://www.instagram.com/fani_022/',
    foto: '/profesores/profe-fani.webp',
  },
  {
    slug: 'flavia-morello',
    nombre: 'Flavia Marcela Morello',
    especialidad: 'Coach nivel 1 de Cross/preparadora física',
    enlace_instagram:'https://www.instagram.com/morelloflavia/',
    foto: '/profesores/profe-flavia.webp',
  },
  {
    slug: 'carlos-villaruel',
    nombre: 'Carlos Villaruel',
    especialidad: 'Profesor de jumping',
    enlace_instagram:'https://www.instagram.com/jumpersfitrafaela/',
    foto: '/profesores/profe-carlos.webp',
  },
  {
    slug: 'emanuel-anrique',
    nombre: 'Emanuel Anrique',
    especialidad: 'Tecnico en entrenamiento deportivo',
    enlace_instagram:'https://www.instagram.com/ema_anrique_training/',
    foto: '/profesores/profe-emanuel.webp',
  },
  {
    slug: 'yanina-lopez',
    nombre: 'Yanina Lopez',
    especialidad: 'Instructora de baile',
    enlace_instagram:'https://www.instagram.com/yanilopez88/',
    foto: '/profesores/profe-yani.webp',
  },
  {
    slug: 'alejandro-vaira',
    nombre: 'Alejandro Vaira',
    especialidad: 'Personal trainer de fuerza',
    enlace_instagram:'https://www.instagram.com/aleevaira07/',
    foto: '/profesores/profe-alejandro.webp',
  },
  {
    slug: 'barbara-martinez',
    nombre: 'Bárbara Martinez',
    especialidad: 'Preparadora física',
    enlace_instagram:'https://www.instagram.com/barbymartinez15/',
    foto: '/profesores/profe-barbara.webp',
  },
  {
    slug: 'camila-juarez',
    nombre: 'Camila Juarez',
    especialidad: 'Licenciada en ciencias del entrenamiento',
    enlace_instagram:'https://www.instagram.com/camii.juarez/',
    foto: '/profesores/profe-camila.webp',
  },
  {
    slug: 'marcela-marin',
    nombre: 'Marcela Marin',
    especialidad: 'Profesora de educación física',
    enlace_instagram:'https://www.instagram.com/marcemarin.ok/',
    foto: '/profesores/profe-marcela.webp',
  },
  {
    slug: 'camila-almeira',
    nombre: 'Camila Almeira',
    especialidad: 'Instructora de pilates y personal trainer',
    enlace_instagram:'https://www.instagram.com/cami__alm/',
    foto: '/profesores/profe-camila-almeira.webp',
  },
];
