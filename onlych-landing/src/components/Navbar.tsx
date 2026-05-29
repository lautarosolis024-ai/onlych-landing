import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_MESSAGES, PHONE_NUMBER, PHONE_DISPLAY } from '../constants';

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
        <a href="#" className="flex items-center">
          <img src="/logo-onlych.png" alt="OnlyCH Logo"
            className="h-10 w-auto brightness-0 invert" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-base text-white/80 hover:text-white font-medium transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href={`tel:${PHONE_NUMBER}`}
            className="text-base text-white/60 hover:text-white flex items-center gap-1.5 transition-colors duration-200">
            <Phone className="w-3.5 h-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex bg-[#799b3d] text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-[#6a8a34] transition-colors duration-200">
            Solicitar Presupuesto
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full mt-2 mx-4 bg-[#2B2644]/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 overflow-hidden">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 font-medium px-4 py-3 rounded-xl transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
              target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="bg-[#799b3d] text-white text-center font-medium px-4 py-3 rounded-xl hover:bg-[#6a8a34] transition-colors duration-200 mt-2">
              Solicitar Presupuesto
            </a>
            <a href={`tel:${PHONE_NUMBER}`} onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-medium px-4 py-3 rounded-xl hover:bg-white/20 transition-colors duration-200">
              <Phone className="w-4 h-4" /> Llamar al {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
