import { NavLink } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../config/site';

const navLinks = [
  { to: '/',           label: 'Inicio' },
  { to: '/actividades', label: 'Actividades' },
  { to: '/profesores',  label: 'Profesores' },
  { to: '/horarios',    label: 'Horarios' },
  { to: '/precios',     label: 'Precios' },
];

const whatsappUrl = buildWhatsAppUrl();

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      {/* Cuerpo principal */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + descripción */}
        <div className="flex flex-col gap-4">
          <img
            src="/logo_estacion.webp"
            alt="Estación Fitness"
            className="h-16 object-contain self-start mix-blend-screen"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed">
            Tu espacio para entrenar, superarte y conectar con tu mejor versión. Rafaela, Santa Fe.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navegación</h3>
          <ul className="space-y-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-sm transition-colors duration-200 hover:text-[#5DD9D2] ${isActive ? 'text-[#5DD9D2]' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-[#5DD9D2] shrink-0" />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#5DD9D2] transition-colors duration-200">
                Escribinos por WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#5DD9D2] shrink-0" />
              <span>{`${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region}`}</span>
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex gap-3 mt-8">
            {/* Instagram */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-800 hover:bg-[#5DD9D2] text-gray-400 hover:text-black p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.987 15.668 24 15.259 24 12c0-3.259-.013-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={siteConfig.tikTokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-gray-800 hover:bg-[#5DD9D2] text-gray-400 hover:text-black p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior de copyright */}
      <div className="border-t border-gray-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Estación Fitness. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{' '}
            <span className="text-[#5DD9D2] font-medium">José Imhoff</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
