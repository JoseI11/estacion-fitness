import { useEffect } from 'react';
import { ArrowLeft, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profesores } from '../data/profesores';

export default function Profesores() {
  useEffect(() => {
    document.title = 'Nuestro Equipo | Estación Fitness';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nuestro equipo</h1>
        <p className="text-xl text-gray-400 mb-16">
          Conocé a los profesionales que te van a acompañar en cada entrenamiento.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {profesores.map((profe) => (
            <Link
              key={profe.slug}
              to={`/profesores/${profe.slug}`}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-gray-700 group-hover:ring-[#5DD9D2] transition-all duration-300">
                {profe.foto ? (
                  <img
                    src={profe.foto}
                    alt={profe.nombre}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    style={profe.fotoPosition ? { objectPosition: profe.fotoPosition } : undefined}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <UserCircle2 className="w-20 h-20 text-gray-600" />
                  </div>
                )}
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-center text-gray-200 group-hover:text-[#5DD9D2] transition-colors duration-300">
                {profe.nombre}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
