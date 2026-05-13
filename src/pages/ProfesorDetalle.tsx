import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, UserCircle2 } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
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
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-[#5DD9D2]">
            {profe.foto ? (
              <img
                src={profe.foto}
                alt={profe.nombre}
                className="w-full h-full object-cover"
                style={profe.fotoPosition ? { objectPosition: profe.fotoPosition } : undefined}
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <UserCircle2 className="w-28 h-28 text-gray-600" />
              </div>
            )}
          </div>

          {/* Nombre */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bold">{profe.nombre}</h1>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#5DD9D2] bg-[#5DD9D2]/10 px-4 py-1.5 rounded-full">
              {profe.especialidad}
            </span>

            {profe.enlace_instagram && (
              <a
                href={profe.enlace_instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-gray-300 hover:text-[#5DD9D2] transition-colors duration-200"
              >
                <InstagramIcon className="w-5 h-5 md:w-7 md:h-7" />
                <span className="text-sm md:text-base font-medium">Instagram</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
