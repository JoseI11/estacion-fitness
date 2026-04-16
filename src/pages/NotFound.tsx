import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Página no encontrada - Estación Fitness';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <p className="text-7xl font-bold text-[#f97316] mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-gray-400 mb-8">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#f97316] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
