import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BackedBySection from './components/BackedBySection';
import UseCasesSection from './components/UseCasesSection';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      {/* Navbar + Hero — full screen */}
      <div className="h-screen flex flex-col overflow-hidden container mx-auto">
        <Navbar />
        <HeroSection />
      </div>

      <InfoSection />
      <BackedBySection />
      <UseCasesSection />

      {/* Contact anchor — invisible, for scroll-to */}
      <div id="contacto" />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5491147730094?text=Hola%2C%20me%20interesa%20solicitar%20un%20presupuesto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}

export default App;
