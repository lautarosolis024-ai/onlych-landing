import { ArrowRight } from 'lucide-react';

export default function InfoSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1: Heading + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Conocé OnlyCH.
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Descubrí más
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </a>
          </div>
          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
              OnlyCH es el distribuidor oficial de merchandising y productos publicitarios que transforma tu marca en algo tangible, memorable y duradero.
            </p>
          </div>
        </div>

        {/* Row 2: Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 — Image card, spans 2 cols on lg */}
          <div
            className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Merchandising que representa
            </h3>
            <p className="text-black/70 text-base max-w-xs">
              Productos con tu logo que conectan con tu audiencia y fortalecen la presencia de tu marca en cada evento.
            </p>
          </div>

          {/* Card 2 — Dark */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3 className="text-white text-2xl font-medium leading-snug">
              Siempre a tiempo,<br />siempre a medida.
            </h3>
            <p className="text-white/60 text-base">
              Respuesta rápida y eficiente con una cadena de producción perfectamente coordinada para tus plazos.
            </p>
          </div>

          {/* Card 3 — Dark */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3 className="text-white text-2xl font-medium leading-snug">
              Totalmente<br />personalizado
            </h3>
            <p className="text-white/60 text-base">
              Desde camperas hasta termos, cada producto lleva tu identidad. Sin intermediarios, sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
