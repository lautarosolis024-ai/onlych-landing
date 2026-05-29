import { MessageCircle, Phone, Video } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_MESSAGES, PHONE_NUMBER } from '../constants';

const categories = [
  { title: 'Indumentaria', description: 'Remeras, camisas, camperas, buzos y gorros con tu logo bordado o estampado.',
    image: '/products/catalog-indumentaria.png', whatsappKey: 'indumentaria' as const },
  { title: 'Artículos de Oficina', description: 'Agendas, biromes, blocks, calendarios y todo lo que tu equipo necesita con tu marca.',
    image: '/products/catalog-oficina.png', whatsappKey: 'oficina' as const },
  { title: 'Bolsos y Accesorios', description: 'Mochilas, bolsos, fundas para notebook y porta-documentos personalizados.',
    image: '/products/catalog-bolsos.png', whatsappKey: 'bolsos' as const },
  { title: 'Promocionales', description: 'Jarros térmicos, botellas, llaveros, imanes y productos con tu identidad.',
    image: '/products/catalog-promocionales.png', whatsappKey: 'promocionales' as const },
];

export default function ProductCatalog() {
  return (
    <section id="productos" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#799b3d] text-sm font-medium uppercase tracking-wider mb-3">Catálogo</p>
          <h2 className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            Productos con tu marca
          </h2>
          <p className="text-black/60 text-lg leading-relaxed">
            Explorá nuestras categorías y encontrá el producto ideal para tu empresa. Todos personalizables con tu logo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative rounded-2xl overflow-hidden min-h-[360px] flex flex-col justify-end">
              <img src={cat.image} alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-medium mb-2">{cat.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm">{cat.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES[cat.whatsappKey])}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1fb855] transition-colors duration-200">
                    <MessageCircle className="w-4 h-4" /> Consultar
                  </a>
                  <a href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Phone className="w-4 h-4" /> Llamar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#2B2644] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-medium mb-2">¿No encontrás lo que buscás?</h3>
            <p className="text-white/60 text-base">Tenemos más de 2.000 productos. Contactanos y te asesoramos.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-base font-medium px-7 py-3 rounded-full hover:bg-[#1fb855] transition-colors duration-200">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-white/10 text-white text-base font-medium px-7 py-3 rounded-full hover:bg-white/20 transition-colors duration-200">
              <Phone className="w-5 h-5" /> Llamar
            </a>
            <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.videollamada)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#799b3d] text-white text-base font-medium px-7 py-3 rounded-full hover:bg-[#6a8a34] transition-colors duration-200">
              <Video className="w-5 h-5" /> Videollamada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
