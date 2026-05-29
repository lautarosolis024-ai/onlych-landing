import { ArrowRight } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="nosotros" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <p className="text-[#799b3d] text-sm font-medium uppercase tracking-wider mb-3">Nosotros</p>
            <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}>
              Conocé OnlyCH.
            </h2>
            <a href="#contacto"
              className="inline-flex items-center gap-3 bg-[#2B2644] text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[#1a1a30] transition-colors duration-200">
              Descubrí más
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-[#2B2644]" />
              </span>
            </a>
          </div>
          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
              OnlyCH es el distribuidor oficial de merchandising y productos publicitarios que transforma tu marca en algo tangible, memorable y duradero.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 rounded-2xl min-h-80 flex flex-col justify-between overflow-hidden relative group">
            <img src="/merchandising-hero.png" alt="Merchandising OnlyCH"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-7 flex flex-col justify-between h-full">
              <h3 className="text-white text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                Merchandising que representa
              </h3>
              <p className="text-white/80 text-base max-w-xs">
                Productos con tu logo que conectan con tu audiencia y fortalecen la presencia de tu marca en cada evento.
              </p>
            </div>
          </div>
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3 className="text-white text-2xl font-medium leading-snug">Siempre a tiempo,<br />siempre a medida.</h3>
            <p className="text-white/60 text-base">Respuesta rápida y eficiente con una cadena de producción perfectamente coordinada para tus plazos.</p>
          </div>
          <div className="bg-[#799b3d] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3 className="text-white text-2xl font-medium leading-snug">Totalmente<br />personalizado</h3>
            <p className="text-white/80 text-base">Desde camperas hasta termos, cada producto lleva tu identidad. Sin intermediarios, sin complicaciones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
