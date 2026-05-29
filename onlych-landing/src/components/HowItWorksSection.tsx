import { ClipboardList, MessageCircle, Truck } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_MESSAGES } from '../constants';

const steps = [
  { number: '01', icon: ClipboardList, title: 'Elegí tu producto',
    description: 'Explorá nuestras categorías o contanos qué necesitás. Te asesoramos para encontrar la mejor opción para tu marca y presupuesto.' },
  { number: '02', icon: MessageCircle, title: 'Envianos tu logo',
    description: 'Mandanos tu diseño por WhatsApp o mail. Nos encargamos de la adaptación, el boceto digital y la aprobación antes de producir.' },
  { number: '03', icon: Truck, title: 'Recibí tu pedido',
    description: 'Producción coordinada a tus plazos. Entrega en tiempo y forma con la calidad que tu marca merece. Seguimiento incluido.' },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#799b3d] text-sm font-medium uppercase tracking-wider mb-3">Cómo funciona</p>
          <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            De tu idea a tu producto en 3 pasos
          </h2>
          <p className="text-black/60 text-lg leading-relaxed">
            Sin vueltas ni intermediarios. Un proceso simple para que tu marca esté presente donde importa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%_-_24px)] w-[calc(100%_-_48px)] h-px bg-[#799b3d]/20" />
              )}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#2B2644] flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[#799b3d] text-5xl font-medium opacity-15">{step.number}</span>
                </div>
                <h3 className="text-black text-xl font-medium">{step.title}</h3>
                <p className="text-black/60 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#799b3d] text-white text-base font-medium px-8 py-3 rounded-full hover:bg-[#6a8a34] transition-colors duration-200">
            <MessageCircle className="w-5 h-5" />
            Empezá ahora por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
