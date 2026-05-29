import { MessageCircle, Phone, Video, ArrowRight } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_MESSAGES, PHONE_NUMBER } from '../constants';

const useCases = [
  { title: 'Eventos y Ferias', description: 'Potenciá la presencia de tu marca en ferias, convenciones y lanzamientos con productos promocionales que dejan huella.',
    whatsappKey: 'eventos' as const, icon: '🎪' },
  { title: 'Campañas Internas', description: 'Motivá a tu equipo con indumentaria, kits de bienvenida y artículos personalizados que refuercen la cultura de tu empresa.',
    whatsappKey: 'campanias' as const, icon: '👥' },
  { title: 'Regalos Empresariales', description: 'Sorprendé a tus clientes y partners con regalos corporativos de calidad que reflejen el profesionalismo de tu marca.',
    whatsappKey: 'regalos' as const, icon: '🎁' },
];

export default function UseCasesSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#799b3d] text-sm font-medium uppercase tracking-wider mb-3">Soluciones</p>
          <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            Para cada momento de tu empresa
          </h2>
          <p className="text-black/60 text-lg leading-relaxed">
            OnlyCH potencia una amplia gama de soluciones para empresas, campañas y eventos que buscan merchandising de calidad con identidad propia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[320px] hover:shadow-lg transition-shadow duration-300">
              <div>
                <span className="text-4xl mb-4 block">{uc.icon}</span>
                <h3 className="text-black text-2xl font-medium leading-snug mb-3"
                  style={{ letterSpacing: '-0.02em' }}>{uc.title}</h3>
                <p className="text-black/60 text-base leading-relaxed">{uc.description}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES[uc.whatsappKey])}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#799b3d] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#6a8a34] transition-colors duration-200">
                  <MessageCircle className="w-4 h-4" /> Consultar
                </a>
                <a href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 bg-black/5 text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black/10 transition-colors duration-200">
                  <Phone className="w-4 h-4" /> Llamar
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.videollamada)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-black font-medium hover:text-[#799b3d] transition-colors duration-200 text-lg">
            <span className="w-10 h-10 rounded-full bg-[#799b3d] flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </span>
            Agendá una videollamada con nuestro equipo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
