import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProductCatalog from './components/ProductCatalog';
import TestimonialsSection from './components/TestimonialsSection';
import InfoSection from './components/InfoSection';
import BackedBySection from './components/BackedBySection';
import UseCasesSection from './components/UseCasesSection';
import Footer from './components/Footer';
import { MessageCircle, Phone, Video } from 'lucide-react';
import { WHATSAPP_BASE, WHATSAPP_MESSAGES, PHONE_NUMBER } from './constants';

function App() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      {/* Navbar + Hero — full screen */}
      <div className="h-screen flex flex-col overflow-hidden container mx-auto">
        <Navbar />
        <HeroSection />
      </div>

      {/* How it works — sets expectations right after hero */}
      <HowItWorksSection />

      {/* Product catalog — the main feature */}
      <ProductCatalog />

      {/* Social proof — builds trust after seeing products */}
      <TestimonialsSection />

      {/* About / Info */}
      <InfoSection />

      {/* Client logos — more trust signals */}
      <BackedBySection />

      {/* Use cases — expanded scenarios */}
      <UseCasesSection />

      {/* Footer */}
      <Footer />

      {/* Floating contact buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.presupuesto)}`}
          target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          aria-label="Contactar por WhatsApp">
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
        <a href={`tel:${PHONE_NUMBER}`}
          className="w-12 h-12 bg-[#2B2644] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 ml-1"
          aria-label="Llamar por teléfono">
          <Phone className="w-5 h-5 text-white" />
        </a>
        <a href={`${WHATSAPP_BASE}${encodeURIComponent(WHATSAPP_MESSAGES.videollamada)}`}
          target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 bg-[#799b3d] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 ml-1"
          aria-label="Agendar videollamada">
          <Video className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
}

export default App;
