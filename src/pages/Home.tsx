import { useEffect } from 'react';
import { Clock, MapPin, Dumbbell } from 'lucide-react';
import ScheduleTable from '../components/ScheduleTable';
import { usePrices } from '../hooks/usePrices';

const whatsappNumber = '5491112345678';
const whatsappMessage = encodeURIComponent('Hola! Me gustaría consultar sobre los planes de Estudio Fitness');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Home() {
  useEffect(() => {
    document.title = 'Estudio Fitness - Entrená en Rafaela';
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
          backgroundImage: "url('/wmremove-transformed.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeIn pt-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Entrená en Estudio Fitness en Rafaela
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 drop-shadow">
            Planes flexibles · Horarios amplios
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSdtpcfoRnSXF1GhxsTrElYOwa-xjndvJfL2YdNJioV8WH_Myg/viewform?usp=dialog"
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
                src="/sobrenosotros.webp"
                alt="Entrenamiento en Estudio Fitness"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-2xl shadow-black/60"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
              <div className="flex justify-center md:justify-start mb-6">
                <Dumbbell className="w-10 h-10 text-[#5DD9D2]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre nosotros</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                En Estudio Fitness ofrecemos un espacio cómodo para entrenar, con acompañamiento y horarios amplios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 px-6 bg-gray-900">
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
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Horarios de clases</h2>
          <ScheduleTable />
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <MapPin className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Ubicación</h2>
          <div className="bg-gray-900 rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-300 text-center">
              Dante Alghieri 715, Rafaela
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl h-64 md:h-96 shadow-xl shadow-black/50">
            <iframe
              title="Ubicación Estudio Fitness"
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

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Empezá hoy</h2>
          <p className="text-xl text-gray-400 mb-12">
            Unite a nuestra comunidad y alcanzá tus objetivos
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      {/* Inscripción */}
      <section id="inscripcion" className="py-32 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Inscripción</h2>
          <p className="text-xl text-gray-400 mb-12">
            Completá tu inscripción y comenzá a entrenar hoy mismo
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdtpcfoRnSXF1GhxsTrElYOwa-xjndvJfL2YdNJioV8WH_Myg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105"
          >
            Inscribirse
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Estudio Fitness. Todos los derechos reservados.</p>
        </div>
      </footer>
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
