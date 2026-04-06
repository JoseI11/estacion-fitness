// TODO: Reemplazar con los datos reales de los profesores cuando la cliente los provea

export interface Profesor {
  slug: string;
  nombre: string;
  especialidad: string;
  bio: string;
  foto: string;
}

export const profesores: Profesor[] = [
  {
    slug: 'soledad-eberhart',
    nombre: 'Soledad Eberhart',
    especialidad: 'Funcional',
    bio: 'Licenciada en Educación Física con más de 8 años de experiencia. Especializada en entrenamiento funcional y de alta intensidad.',
    foto: '/profesores/soledad-eberhart.webp',
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
    foto: '/profesores/flavia-morello.webp',
  },
  {
    slug: 'carlos-villaruel',
    nombre: 'Carlos Alberto Villaruel',
    especialidad: 'Jumping',
    bio: 'Bailarín y profesor de aeróbica con más de 6 años dando clases grupales. Sus clases son energía pura de principio a fin.',
    foto: '/profesores/carlos-villaruel.webp',
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
    foto: '/profesores/yanina-lopez.webp',
  },
];
