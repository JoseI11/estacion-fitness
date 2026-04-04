import { useEffect } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScheduleTable from '../components/ScheduleTable';

export default function Horarios() {
  useEffect(() => {
    document.title = 'Horarios de Clases | Estación Fitness';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Clock className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Horarios de clases</h1>
          <p className="text-xl text-gray-400">
            Encontrá el turno que mejor se adapte a tu rutina.
          </p>
        </div>

        <ScheduleTable />
      </div>
    </div>
  );
}
