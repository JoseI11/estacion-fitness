// TODO: Reemplazar con los datos reales de las actividades cuando la cliente los provea

export interface Actividad {
  nombre: string;
  descripcion: string;
  nivel: string;
}

export const actividades: Actividad[] = [
  {
    nombre: 'Funcional',
    descripcion: 'Entrenamiento con el peso corporal y materiales variados. Mejorá tu fuerza, coordinación y resistencia en cada clase.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'CrossFit',
    descripcion: 'Circuitos de alta intensidad que combinan levantamiento olímpico, gimnasia y cardio. Resultados rápidos y medibles.',
    nivel: 'Intermedio / Avanzado',
  },
  {
    nombre: 'Yoga',
    descripcion: 'Trabajá la flexibilidad, el equilibrio y la respiración consciente. Ideal para complementar cualquier entrenamiento.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Zumba',
    descripcion: 'Clases de baile con ritmos latinos y urbanos. Quemá calorías mientras te divertís al ritmo de la música.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Musculación',
    descripcion: 'Sala de pesas equipada con acompañamiento profesional. Diseñá tu rutina según tus objetivos con el apoyo de nuestros entrenadores.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Boxeo',
    descripcion: 'Técnica, potencia y acondicionamiento físico. Aprendé las bases del boxeo en un ambiente dinámico y motivador.',
    nivel: 'Principiante / Intermedio',
  },
  {
    nombre: 'Pilates',
    descripcion: 'Fortalecé el core, mejorá la postura y ganá conciencia corporal. Clases reducidas para una atención más personalizada.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Stretching',
    descripcion: 'Sesiones enfocadas en elongación muscular y movilidad articular. Perfectas para recuperación activa o como clase independiente.',
    nivel: 'Todos los niveles',
  },
];
