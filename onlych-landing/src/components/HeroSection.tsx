import { ArrowRight, Phone } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_MESSAGES, PHONE_NUMBER } from '../constants';

const heroLogos = [
  '/clients/client-01.png', '/clients/client-02.png', '/clients/client-03.png',
  '/clients/client-04.png', '/clients/client-05.png', '/clients/client-06.png',
  '/clients/client-07.png', '/clients/client-08.png', '/clients/client-09.png',
  '/clients/client-10.png', '/clients/client-11.png', '/clients/client-12.png',
];

export default function HeroSection() {
  return (
    <div className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 'calc(100vh - 96px)' }}>
        {/* Background video */}
        <video autoPlay muted loop playsInline preload="none" poster="/merchandising-hero.png"
          className="absolute inset-0 w-full h-full object-cover" src="/videos/hero.mp4" />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-28 md:pt-36">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#799b3d] text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#799b3d] rounded-full animate-pulse" />
            +20 años vistiendo marcas
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: '-0.04em' }}>
            Tu logo en productos que tu cliente usa todos los días
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Productos promocionales personalizados con tu marca. Presupuesto en 24hs, entrega a tiempo. Más de 2.000 artículos para empresas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#799b3d] text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[#6a8a34] transition-colors duration-200">
              Presupuesto en 24hs
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-[#799b3d]" />
              </span>
            </a>
            <a href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-black text-base font-medium px-6 py-3 rounded-full hover:bg-white transition-colors duration-200">
              <Phone className="w-4 h-4" />
              Llamar
            </a>
          </div>

          {/* Client Logo Marquee */}
          <div className="mt-16 md:mt-24 w-full max-w-lg overflow-hidden">
            <div className="marquee-track items-center">
              {[...heroLogos, ...heroLogos].map((src, i) => (
                <img key={i} src={src} alt={`Cliente ${(i % heroLogos.length) + 1}`}
                  className="mx-5 shrink-0 h-8 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
                  draggable={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
