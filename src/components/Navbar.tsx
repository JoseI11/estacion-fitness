import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/actividades', label: 'Actividades' },
  { to: '/profesores', label: 'Profesores' },
  { to: '/horarios', label: 'Horarios' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — sirve WebP si el navegador lo soporta, JPG como fallback */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <picture>
            <source srcSet="/553575470_18014144180788369_4726206880901932308_n.webp" type="image/webp" />
            <img
              src="/553575470_18014144180788369_4726206880901932308_n.jpg"
              alt="Estudio Fitness Logo"
              className="h-16 sm:h-20 object-contain"
            />
          </picture>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-[#5DD9D2]' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdtpcfoRnSXF1GhxsTrElYOwa-xjndvJfL2YdNJioV8WH_Myg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300"
          >
            Inscribirse
          </a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-[#5DD9D2]' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdtpcfoRnSXF1GhxsTrElYOwa-xjndvJfL2YdNJioV8WH_Myg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5DD9D2] hover:bg-[#4EC9C2] text-black font-semibold px-5 py-3 rounded-full text-sm transition-all duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            Inscribirse
          </a>
        </nav>
      )}
    </header>
  );
}
