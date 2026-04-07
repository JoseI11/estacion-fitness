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
    especialidad: 'Funcional',
    bio: 'Licenciada en Educación Física con más de 8 años de experiencia. Especializada en entrenamiento funcional y de alta intensidad.',
    foto: '/profesores/profe-sole.webp',
    fotoPosition: 'top',
  },
  {
    slug: 'fani-petean',
    nombre: 'Fani María Petean',
    especialidad: 'Yoga',
    bio: 'Instructora certificada en yoga Hatha y Pilates suelo. Su objetivo es integrar el movimiento consciente en la rutina diaria.',
    foto: '/profesores/profe-fani.webp',
  },
  {
    slug: 'flavia-morello',
    nombre: 'Flavia Marcela Morello',
    especialidad: 'Cross',
    bio: 'Entrenadora personal con formación en nutrición deportiva. Acompaña a sus alumnos en el desarrollo de fuerza y composición corporal.',
    foto: '/profesores/profe-flavia.jpeg',
  },
  {
    slug: 'carlos-villaruel',
    nombre: 'Carlos Alberto Villaruel',
    especialidad: 'Jumping',
    bio: 'Bailarín y profesor de aeróbica con más de 6 años dando clases grupales. Sus clases son energía pura de principio a fin.',
    foto: '/profesores/profe-carlos.webp',
  },
  {
    slug: 'emanuel-anriquez',
    nombre: 'Emanuel Anriquez',
    especialidad: 'Personalizado',
    bio: 'Ex deportista federado con amplia trayectoria en artes marciales. Dicta clases para todos los niveles, desde principiantes hasta avanzados.',
    foto: '/profesores/profe-emanuel.webp',
  },
  {
    slug: 'yanina-lopez',
    nombre: 'Yanina Lopez',
    especialidad: 'Baile fit',
    bio: 'Especialista en flexibilidad y recuperación activa. Ayuda a los alumnos a prevenir lesiones y mejorar su rendimiento general.',
    foto: '/profesores/profe-yani.webp',
  },
  {
    slug: 'alejandro-vaira',
    nombre: 'Alejandro Vaira',
    especialidad: 'Fuerza',
    bio: '',
    foto: '/profesores/profe-alejandro.webp',
  },
  {
    slug: 'barbara-martinez',
    nombre: 'Bárbara Martinez',
    especialidad: 'Personalizado',
    bio: '',
    foto: '/profesores/profe-barbara.webp',
  },
  {
    slug: 'camila-juarez',
    nombre: 'Camila Juarez',
    especialidad: 'Fuerza',
    bio: '',
    foto: '/profesores/profe-camila.webp',
  },
  {
    slug: 'marcela-marin',
    nombre: 'Marcela Marin',
    especialidad: 'Educación física',
    bio: '',
    foto: '/profesores/profe-marcela.webp',
  },
];
