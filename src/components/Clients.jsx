import { useState, useEffect } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const clients = [
    {
      name: "El Porton",
      logo: "/images/logos/porton.png",
      sector: "Food & Beverage"
    },
    {
      name: "Play Station",
      logo: "/images/logos/playstation.svg",
      sector: "Tecnología"
    },
    {
      name: "Gatorade",
      logo: "/images/logos/Gatorade.png",
      sector: "Deportes"
    },
    {
      name: "Tropicana",
      logo: "/images/logos/Tropicana.png",
      sector: "Bebidas"
    },
    {
      name: "Amazon",
      logo: "/images/logos/logo-amazon.svg",
      sector: "Tecnología"
    },
    {
      name: "Vips",
      logo: "/images/logos/vips.svg",
      sector: "Alimentos"
    },
    {
      name: "Charro Negro",
      logo: "/images/logos/charro-negro.png",
      sector: "Bebidas"
    },
    {
      name: "TDS Logistics",
      logo: "/images/logos/tds-logistics.png",
      sector: "Logística"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="clientes" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header con efecto */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Portfolio de Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Clientes que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Confían en Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 50 empresas líderes han elegido nuestros servicios para impulsar su crecimiento
          </p>
        </div>

        {/* Grid con efectos escalonados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`p-4 w-full transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="group relative bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-32 flex items-center justify-center overflow-hidden">
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-32 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10"
                />

                {/* Tooltip en hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold text-center">{client.name}</p>
                  <p className="text-white/70 text-xs text-center">{client.sector}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats con efecto fade-in */}
        {/* <div className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">50+</div>
              <div className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors">Clientes</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">18+</div>
              <div className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors">Años</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">12+</div>
              <div className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors">Industrias</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">98%</div>
              <div className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors">Satisfacción</div>
            </div>
          </div>
        </div> */}

        {/* Footer con efecto sutil */}
        {/* <div className={`mt-12 text-center transition-all duration-700 delay-1200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-500 text-lg">
            <span className="text-blue-600 font-semibold">+18 años</span> construyendo relaciones de confianza duraderas
          </p>
        </div> */}
      </div>
    </section>
  );
}