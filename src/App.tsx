import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Actividades from './pages/Actividades';
import Profesores from './pages/Profesores';
import ProfesorDetalle from './pages/ProfesorDetalle';
import Horarios from './pages/Horarios';
import Precios from './pages/Precios';

const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent('Hola! Me gustaria consultar sobre los planes de Estación Fitness')}`;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/profesores" element={<Profesores />} />
        <Route path="/profesores/:slug" element={<ProfesorDetalle />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>

      {/* Boton flotante de WhatsApp — visible en todas las paginas */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Footer global */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
