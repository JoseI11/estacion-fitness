// TODO: Reemplazar con los datos reales de los profesores cuando la cliente los provea

export interface Profesor {
  slug: string;
  nombre: string;
  especialidad: string;
  bio: string;
  foto: string;
  fotoPosition?: string;
}

export const profesores: Profesor [] = [
  {
    slug: 'soledad-cristaldo',
    nombre: 'Soledad Cristaldo',
    especialidad: 'Profesora en tecnicas de gimnasia',
    bio: '',
    foto: '/profesores/profe-soledad.webp',
    fotoPosition: 'top',
  },
  {
    slug: 'fani-petean',
    nombre: 'Fani María Petean',
    especialidad: 'Profesora de yoga',
    bio: '',
    foto: '/profesores/profe-fani.webp',
  },
  {
    slug: 'flavia-morello',
    nombre: 'Flavia Marcela Morello',
    especialidad: 'Coach nivel 1 de Cross/preparadora física',
    bio: '',
    foto: '/profesores/profe-flavia.webp',
  },
  {
    slug: 'carlos-villaruel',
    nombre: 'Carlos Alberto Villaruel',
    especialidad: 'Profesor de jumping',
    bio: '',
    foto: '/profesores/profe-carlos.webp',
  },
  {
    slug: 'emanuel-anriquez',
    nombre: 'Emanuel Anriquez',
    especialidad: 'Tecnico en entrenamiento deportivo',
    bio: '',
    foto: '/profesores/profe-emanuel.webp',
  },
  {
    slug: 'yanina-lopez',
    nombre: 'Yanina Lopez',
    especialidad: 'Instructora de baile',
    bio: '',
    foto: '/profesores/profe-yani.webp',
  },
  {
    slug: 'alejandro-vaira',
    nombre: 'Alejandro Vaira',
    especialidad: 'Personal trainer de fuerza',
    bio: '',
    foto: '/profesores/profe-alejandro.webp',
  },
  {
    slug: 'barbara-martinez',
    nombre: 'Bárbara Martinez',
    especialidad: 'Preparadora física',
    bio: '',
    foto: '/profesores/profe-barbara.webp',
  },
  {
    slug: 'camila-juarez',
    nombre: 'Camila Juarez',
    especialidad: 'Licenciada en ciencias del entrenamiento',
    bio: '',
    foto: '/profesores/profe-camila.webp',
  },
  {
    slug: 'marcela-marin',
    nombre: 'Marcela Marin',
    especialidad: 'Profesora de educación física',
    bio: '',
    foto: '/profesores/profe-marcela.webp',
  },
  {
    slug: 'camila-almeira',
    nombre: 'Camila Almeira',
    especialidad: 'Instructora de pilates y personal trainer',
    bio: '',
    foto: '/profesores/profe-camila-almeira.webp',
  },
];
