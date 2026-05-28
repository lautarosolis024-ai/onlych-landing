import { ArrowRight } from 'lucide-react';

// Use a subset of key client logos for the hero marquee
const heroLogos = [
  '/clients/client-01.png',
  '/clients/client-02.png',
  '/clients/client-03.png',
  '/clients/client-04.png',
  '/clients/client-05.png',
  '/clients/client-06.png',
  '/clients/client-07.png',
  '/clients/client-08.png',
  '/clients/client-09.png',
  '/clients/client-10.png',
  '/clients/client-11.png',
  '/clients/client-12.png',
];

export default function HeroSection() {
  return (
    <div className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: 'calc(100vh - 96px)' }}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Tu Marca,<br />Tu Identidad
          </h1>
          <p
            className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            Productos promocionales con tu logo, listos para impulsar tu marca. Más de 20 años vistiendo empresas.
          </p>
          <a
            href="https://wa.me/5491147730094?text=Hola%2C%20me%20interesa%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#799b3d] text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[#6a8a34] transition-colors duration-200"
          >
            Contactanos
            <span className="bg-white rounded-full p-2">
              <ArrowRight className="w-5 h-5 text-[#799b3d]" />
            </span>
          </a>

          {/* Client Logo Marquee */}
          <div className="mt-24 w-full max-w-lg overflow-hidden">
            <div className="marquee-track items-center">
              {[...heroLogos, ...heroLogos].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Cliente ${(i % heroLogos.length) + 1}`}
                  className="mx-5 shrink-0 h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
