export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo-onlych.png"
            alt="OnlyCH Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {['Productos', 'Nosotros', 'Clientes', 'Contacto', 'News'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-base text-gray-700 hover:text-[#799b3d] font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA button */}
        <a
          href="#"
          className="bg-[#799b3d] text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-[#6a8a34] transition-colors duration-200"
        >
          Solicitar Presupuesto
        </a>
      </div>
    </nav>
  );
}
