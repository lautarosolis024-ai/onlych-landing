const clientLogos = Array.from({ length: 25 }, (_, i) => `/clients/client-${String(i + 1).padStart(2, '0')}.png`);

export default function BackedBySection() {
  return (
    <section id="clientes" className="bg-[#F5F5F5] px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        {/* Label */}
        <div className="mb-10">
          <p className="text-black/70 text-base leading-relaxed max-w-sm">
            Empresas que confían en nosotros. Más de 20 años vistiendo las marcas más reconocidas de la Argentina.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="backers-track">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Cliente ${i % clientLogos.length + 1}`}
                className="mx-8 shrink-0 h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
