import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
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

        <h1 className="text-5xl md:text-6xl font-bold mb-4">Nuestro equipo</h1>
        <p className="text-xl text-gray-400 mb-16">
          Conocé a los profesionales que te van a acompañar en cada entrenamiento.
        </p>

        {profesores.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profesores.map((profe) => (
              <div
                key={profe.nombre}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#5DD9D2] transition-colors duration-300"
              >
                <img
                  src={profe.foto}
                  alt={profe.nombre}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-1">{profe.nombre}</h2>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#5DD9D2] block mb-3">
                    {profe.especialidad}
                  </span>
                  <p className="text-gray-400">{profe.bio}</p>
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
