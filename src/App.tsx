import { MessageCircle, Clock, MapPin, Dumbbell } from 'lucide-react';

function App() {
  const whatsappNumber = '5491112345678';
  const whatsappMessage = encodeURIComponent('Hola! Me gustaría consultar sobre los planes de Estudio Fitness');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <img
            src="/553575470_18014144180788369_4726206880901932308_n.jpg"
            alt="Estudio Fitness Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain"
          />
        </div>
      </header>

      <section
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/wmremove-transformed.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeIn pt-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Entrená con nosotros
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 drop-shadow">
            Planes flexibles · Horarios amplios
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="/sobrenosotros.webp"
                alt="Entrenamiento en Estudio Fitness"
                className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-2xl shadow-black/60"
              />
            </div>
            {/* Text */}
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

      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nuestros Planes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PlanCard title="Plan Mensual" />
            <PlanCard title="Plan Semanal" featured />
            <PlanCard title="Pase Diario" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="w-12 h-12 text-[#5DD9D2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Horarios de clases</h2>
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/60">
            <img
              src="/horarios.png"
              alt="Horarios de clases Estudio Fitness"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

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
          <div className="bg-gray-800 rounded-2xl h-64 md:h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Mapa interactivo</p>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="py-8 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Estudio Fitness. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

interface PlanCardProps {
  title: string;
  featured?: boolean;
}

function PlanCard({ title, featured = false }: PlanCardProps) {
  return (
    <div className={`bg-gray-800 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
      featured ? 'ring-2 ring-[#5DD9D2] shadow-lg shadow-[#5DD9D2]/20' : ''
    }`}>
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">{title}</h3>
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

export default App;
