import { useEffect } from 'react';
import { Clock, MapPin, Dumbbell, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePrices } from '../hooks/usePrices';
import { actividades } from '../data/actividades';

const whatsappNumber = '5491112345678';
const whatsappMessage = encodeURIComponent('Hola! Me gustaría consultar sobre los planes de Estación Fitness');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Home() {
  useEffect(() => {
    document.title = 'Estación Fitness - Entrená en Rafaela';
  }, []);

  const { plans, loading: pricesLoading } = usePrices();

  function getPriceForPlan(planTitle: string) {
    return plans.find((p) => p.title === planTitle)?.price;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/alumnos-entrenando.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeIn pt-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Estación Fitness, no solo somos un gym, representamos un cambio de vida.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 drop-shadow">
            Sumate a una comunidad que entrena con energía, constancia y actitud positiva. ¡Te esperamos para alcanzar tus objetivos juntos!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="https://forms.gle/Abkf7EsW5d45QVPy8"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirse
            </a>
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="/sobre-nosotros.webp"
                alt="Entrenamiento en Estación Fitness"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-2xl shadow-black/60"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
              <div className="flex justify-center md:justify-start mb-6">
                <Dumbbell className="w-10 h-10 text-[#5DD9D2]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre nosotros</h2>
              <div className="space-y-5 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  En Estación Fitness creemos que entrenar va mucho más allá de lo físico. Somos un espacio donde cada persona viene a superarse, a desconectar del día a día y a reconectar con su mejor versión.
                </p>
                <p>
                  Nos enfocamos en crear entrenamientos dinámicos, efectivos y adaptados a todos los niveles, combinando fuerza, resistencia y diversión. Porque sí, entrenar también puede disfrutarse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades preview */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <Zap className="w-10 h-10 text-[#5DD9D2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Actividades</h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Más de {actividades.length} disciplinas para que encuentres la que más te guste.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {actividades.slice(0, 4).map((actividad) => (
              <div
                key={actividad.nombre}
                className="bg-gray-800 rounded-2xl p-5 border border-gray-700 text-center"
              >
                <p className="font-semibold text-lg">{actividad.nombre}</p>
                <p className="text-sm text-[#5DD9D2] mt-1">{actividad.nivel}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/actividades"
              className="inline-block border-2 border-[#5DD9D2] text-[#5DD9D2] hover:bg-[#5DD9D2] hover:text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver todas las actividades
            </Link>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nuestros Planes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PlanCard title="Plan Mensual" price={getPriceForPlan('Plan Mensual')} loading={pricesLoading} />
            <PlanCard title="Plan Semanal" featured price={getPriceForPlan('Plan Semanal')} loading={pricesLoading} />
            <PlanCard title="Pase Diario" price={getPriceForPlan('Pase Diario')} loading={pricesLoading} />
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Horarios de clases</h2>
          <p className="text-xl text-gray-400 mb-10">
            Tenemos turnos mañana, tarde y noche para que puedas entrenar cuando mejor te quede.
          </p>
          <Link
            to="/horarios"
            className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver todos los horarios
          </Link>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <MapPin className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Ubicación</h2>
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-300 text-center">
              Dante Alghieri 715, Rafaela
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl h-64 md:h-96 shadow-xl shadow-black/50">
            <iframe
              title="Ubicación Estación Fitness"
              src="https://maps.google.com/maps?q=Dante+Alghieri+715,+Rafaela,+Santa+Fe,+Argentina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="inscripcion" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Empezá hoy</h2>
          <p className="text-xl text-gray-400 mb-12">
            Consultanos por WhatsApp o completá el formulario de inscripción y comenzá a entrenar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
            >
              Escribinos por WhatsApp
            </a>
            <a
              href="https://forms.gle/Abkf7EsW5d45QVPy8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
            >
              Inscribirse
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface PlanCardProps {
  title: string;
  featured?: boolean;
  price?: string;
  loading?: boolean;
}

function PlanCard({ title, featured = false, price, loading = false }: PlanCardProps) {
  return (
    <div className={`bg-gray-800 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
      featured ? 'ring-2 ring-[#5DD9D2] shadow-lg shadow-[#5DD9D2]/20' : ''
    }`}>
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">{title}</h3>

      {/* Precio dinámico desde Google Sheets */}
      <div className="text-center mb-6 min-h-[2.5rem] flex items-center justify-center">
        {loading ? (
          <div className="h-8 w-32 bg-gray-700 rounded-full animate-pulse" />
        ) : price ? (
          <span className="text-2xl font-bold text-[#5DD9D2]">{price}</span>
        ) : null}
      </div>
      <ul className="space-y-4 text-gray-300 mb-8">
        <li className="flex items-start">
          <span className="text-[#5DD9D2] mr-2">✓</span>
          <span>Acceso completo al gimnasio</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#5DD9D2] mr-2">✓</span>
          <span>Acompañamiento personalizado</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#5DD9D2] mr-2">✓</span>
          <span>Sin permanencia mínima</span>
        </li>
      </ul>
      <div className="text-center">
        <a
          href={`https://wa.me/5491112345678?text=${encodeURIComponent(`Hola! Me gustaría consultar sobre el ${title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block w-full py-3 rounded-full font-semibold transition-all duration-300 ${
            featured
              ? 'bg-[#5DD9D2] text-black hover:bg-[#4EC9C2]'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          Consultar
        </a>
      </div>
    </div>
  );
}
