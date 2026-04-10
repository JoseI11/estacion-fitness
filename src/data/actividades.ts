// TODO: Reemplazar con los datos reales de las actividades cuando la cliente los provea

export interface Actividad {
  nombre: string;
  descripcion: string;
  nivel: string;
  imagen: string;
}

export const actividades: Actividad[] = [
  {
    nombre: 'Funcional',
    descripcion: 'Entrenamiento con el peso corporal y materiales variados. Mejorá tu fuerza, coordinación y resistencia en cada clase.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/funcional.webp',
  },
  {
    nombre: 'Cross',
    descripcion: 'Circuitos de alta intensidad que combinan levantamiento olímpico, gimnasia y cardio. Resultados rápidos y medibles.',
    nivel: 'Intermedio / Avanzado',
    imagen: '/actividades/cross.webp',
  },
  {
    nombre: 'Yoga',
    descripcion: 'Trabajá la flexibilidad, el equilibrio y la respiración consciente. Ideal para complementar cualquier entrenamiento.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/yoga.webp',
  },
  {
    nombre: 'Baile Fit',
    descripcion: 'Clases de baile con ritmos latinos y urbanos. Quemá calorías mientras te divertís al ritmo de la música.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/baile-fit.webp',
  },
  {
    nombre: 'Jumping',
    descripcion: 'Saltá al ritmo de la música sobre mini trampolines. Una clase divertida, de bajo impacto y alto rendimiento cardiovascular.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/jumping.webp',
  },
  {
    nombre: 'Personalizado',
    descripcion: 'Entrenamiento adaptado a tus objetivos específicos con seguimiento individual. La opción ideal para resultados concretos.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/personalizado.webp',
  },
  {
    nombre: 'Circuito Fuerza',
    descripcion: 'Entrenamiento con el peso corporal y materiales variados. Mejorá tu fuerza, coordinación y resistencia en cada clase.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/circuito-fuerza.webp',
  },
  {
    nombre: 'Funcional Kids',
    descripcion: 'Entrenamiento para niños que combina juegos, ejercicios de coordinación y actividades divertidas. Fomentá el amor por el movimiento desde temprana edad.',
    nivel: 'Niños',
    imagen: '/actividades/funcional-kids.webp',
  },
  {
    nombre: 'Funcional hombres',
    descripcion: 'Entrenamiento funcional diseñado específicamente para hombres, enfocado en desarrollar fuerza, resistencia y movilidad. Ideal para quienes buscan un entrenamiento completo y efectivo.',
    nivel: 'Todos los niveles',
    imagen: '/actividades/funcional-hombres.webp',
  }

];
