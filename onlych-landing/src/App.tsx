import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import BackedBySection from './components/BackedBySection';
import UseCasesSection from './components/UseCasesSection';

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
    </div>
  );
}

export default App;
