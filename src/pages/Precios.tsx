import { useEffect } from 'react';
import { ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePrices, type ClasePrecios } from '../hooks/usePrices';

const whatsappNumber = '543764227809';
const whatsappMessage = encodeURIComponent(
  'Hola! Me gustaría consultar sobre los precios de Estación Fitness',
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

/** Formatea un número crudo ("40000") como moneda argentina → "$40.000" */
function formatPrecio(raw: string): string {
  const num = parseInt(raw, 10);
  if (isNaN(num)) return raw;
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function etiquetaFila(cantidadDias: string, cantidadSemanas: string): string {
  if (cantidadDias) {
    return `${cantidadDias} ${cantidadDias === '1' ? 'día' : 'días'} por semana`;
  }
  if (cantidadSemanas) {
    return `${cantidadSemanas} ${cantidadSemanas === '1' ? 'semana' : 'semanas'}`;
  }
  return 'Por clase';
}

function ClaseCard({ clase, filas }: ClasePrecios) {
  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 hover:border-[#5DD9D2] transition-colors duration-300 overflow-hidden">
      <div className="bg-gray-800 px-6 py-5">
        <h2 className="text-2xl font-bold">{clase}</h2>
      </div>
      <div className="divide-y divide-gray-800">
        {filas.map((fila, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-800/50 transition-colors duration-150"
          >
            <span className="text-gray-300">
              {etiquetaFila(fila.cantidadDias, fila.cantidadSemanas)}
            </span>
            <span className="text-xl font-bold text-[#5DD9D2]">
              {formatPrecio(fila.precio)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Precios() {
  useEffect(() => {
    document.title = 'Precios | Estación Fitness';
  }, []);

  const { clases, loading, error } = usePrices();

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

        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <Tag className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Precios</h1>
          <p className="text-xl text-gray-400">
            Elegí la actividad y la frecuencia que mejor se adapte a tu ritmo.
          </p>
        </div>

        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                <div className="bg-gray-800 px-6 py-5">
                  <div className="h-7 w-32 bg-gray-700 rounded-full animate-pulse" />
                </div>
                <div className="divide-y divide-gray-800">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="flex items-center justify-between px-6 py-4">
                      <div className="h-4 w-28 bg-gray-700 rounded-full animate-pulse" />
                      <div className="h-5 w-20 bg-gray-700 rounded-full animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg mb-2">No se pudieron cargar los precios en este momento.</p>
            <p className="text-sm">
              Consultanos directamente por{' '}
              <a href={whatsappUrl} className="text-[#5DD9D2] hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </p>
          </div>
        )}

        {!loading && !error && clases.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clases.map((c) => (
              <ClaseCard key={c.clase} {...c} />
            ))}
          </div>
        )}

        {!loading && !error && clases.length === 0 && (
          <div className="text-center py-24 text-gray-600">
            <p className="text-lg">Precios próximamente.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">¿Tenés alguna consulta sobre los planes?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
