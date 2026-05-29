import { Quote } from 'lucide-react';

const testimonials = [
  { quote: 'OnlyCH nos entregó 500 camperas personalizadas en 10 días para nuestro evento anual. La calidad fue impecable y el equipo siempre disponible.',
    name: 'Martín R.', role: 'Director de Marketing', company: 'Tecnología' },
  { quote: 'Trabajamos con ellos hace más de 5 años. Lo que más valoramos es la rapidez de respuesta y la variedad de productos que ofrecen.',
    name: 'Carolina M.', role: 'Gerente de RRHH', company: 'Industria Farmacéutica' },
  { quote: 'Necesitábamos kits de bienvenida para 200 nuevos empleados y lo resolvieron en una semana. El asesoramiento personalizado hizo la diferencia.',
    name: 'Diego L.', role: 'Head of People', company: 'Startup Fintech' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-white px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#799b3d] text-sm font-medium uppercase tracking-wider mb-3">Testimonios</p>
          <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-black/60 text-lg leading-relaxed">
            Más de 20 años vistiendo empresas se notan en los resultados. Estas son algunas experiencias reales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name}
              className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow duration-300">
              <div>
                <Quote className="w-8 h-8 text-[#799b3d]/30 mb-4" />
                <p className="text-black/80 text-base leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#799b3d] flex items-center justify-center text-white font-medium text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-black font-medium text-sm">{t.name}</p>
                  <p className="text-black/50 text-xs">{t.role} — {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
