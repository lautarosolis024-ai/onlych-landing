import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, PHONE_DISPLAY_FULL, EMAIL, ADDRESS, INSTAGRAM_URL, LINKEDIN_URL, GOOGLE_MAPS_URL, WHATSAPP_BASE, WHATSAPP_MESSAGES } from '../constants';

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#2B2644] text-white">
      <div className="max-w-[88rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img src="/logo-onlych.png" alt="OnlyCH Logo" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Distribuidor oficial de merchandising y productos publicitarios. Más de 20 años vistiendo las marcas más reconocidas de la Argentina.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-3">
              {[{ label: 'Productos', href: '#productos' }, { label: 'Nosotros', href: '#nosotros' },
                { label: 'Clientes', href: '#clientes' }, { label: 'Contacto', href: '#contacto' }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-[#799b3d] text-sm transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li><a href={`tel:${PHONE_NUMBER}`} className="flex items-start gap-3 text-white/60 hover:text-[#799b3d] text-sm transition-colors duration-200">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /><span>{PHONE_DISPLAY_FULL}</span></a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-white/60 hover:text-[#799b3d] text-sm transition-colors duration-200">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /><span>{EMAIL}</span></a></li>
              <li><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-[#799b3d] text-sm transition-colors duration-200">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>{ADDRESS}</span></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">Seguinos</h4>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#799b3d] transition-colors duration-200" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#799b3d] transition-colors duration-200" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#799b3d] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#6a8a34] transition-colors duration-200">
                <MessageCircle className="w-4 h-4" /> Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} OnlyCH. Todos los derechos reservados.</p>
          <p className="text-white/40 text-xs">Merchandising & Productos Publicitarios — Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
