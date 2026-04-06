import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, UserCircle2 } from 'lucide-react';
import { profesores } from '../data/profesores';

export default function ProfesorDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const profe = profesores.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = profe
      ? `${profe.nombre} | Estación Fitness`
      : 'Profesor no encontrado | Estación Fitness';
  }, [profe]);

  if (!profe) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-2xl text-gray-400">Profesor no encontrado.</p>
        <Link
          to="/profesores"
          className="inline-flex items-center gap-2 text-[#5DD9D2] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al equipo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/profesores"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al equipo
        </Link>

        <div className="flex flex-col items-center text-center gap-8">
          {/* Foto circular */}
          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-[#5DD9D2]">
            {profe.foto ? (
              <img
                src={profe.foto}
                alt={profe.nombre}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <UserCircle2 className="w-28 h-28 text-gray-600" />
              </div>
            )}
          </div>

          {/* Nombre */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{profe.nombre}</h1>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#5DD9D2] bg-[#5DD9D2]/10 px-4 py-1.5 rounded-full">
              {profe.especialidad}
            </span>
          </div>

          {/* Bio */}
          {profe.bio && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              {profe.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
