import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { actividades } from '../data/actividades';

export default function Actividades() {
  useEffect(() => {
    document.title = 'Actividades | Estación Fitness';
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

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Actividades</h1>
        <p className="text-xl text-gray-400 mb-16">
          Descubrí todas las disciplinas que ofrecemos en Estación Fitness.
        </p>

        {actividades.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actividades.map((actividad) => (
              <div
                key={actividad.nombre}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#5DD9D2] transition-colors duration-300 group"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={actividad.imagen}
                    alt={actividad.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{actividad.nombre}</h2>
                  <p className="text-gray-400 mb-4">{actividad.descripcion}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5DD9D2]">
                    {actividad.nivel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-600">
            <p className="text-lg">Contenido próximamente.</p>
          </div>
        )}
      </div>
    </div>
  );
}
