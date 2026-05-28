import { ArrowRight } from 'lucide-react';

export default function UseCasesSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-sm mb-2">OnlyCH en la Práctica</p>
          <h2
            className="text-5xl md:text-6xl font-medium leading-none mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Modos de uso
          </h2>
          <p className="text-black/60 text-base leading-relaxed max-w-sm">
            OnlyCH potencia una amplia gama de soluciones para empresas, campañas y eventos que buscan merchandising de calidad con identidad propia.
          </p>
        </div>

        {/* Right column — video card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[720px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
          />

          <div className="relative z-10 p-10 md:p-12">
            <h3
              className="text-4xl md:text-5xl font-medium leading-tight mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Eventos
            </h3>
            <p className="text-black/70 text-base max-w-md mb-8">
              Potenciá la presencia de tu marca en ferias, convenciones y lanzamientos con productos promocionales que dejan huella en cada asistente.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 group text-black font-medium hover:text-[#799b3d] transition-colors duration-200"
            >
              <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
              Conocé más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
