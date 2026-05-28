import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo-onlych.png"
            alt="OnlyCH Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Center: Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-gray-700 hover:text-[#799b3d] font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA button (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491147730094?text=Hola%2C%20me%20interesa%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-[#799b3d] text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-[#6a8a34] transition-colors duration-200"
          >
            Solicitar Presupuesto
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-gray-700 hover:bg-white transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full mt-2 mx-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-[#799b3d] hover:bg-[#799b3d]/5 font-medium px-4 py-3 rounded-xl transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5491147730094?text=Hola%2C%20me%20interesa%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-[#799b3d] text-white text-center font-medium px-4 py-3 rounded-xl hover:bg-[#6a8a34] transition-colors duration-200 mt-2"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
