import { useEffect, useState } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);

  const clients = [
    {
      name: "Alen",
      logo: "/images/clientes/alen.png",
      description: "Empresa mexicana líder en productos de limpieza y cuidado del hogar"
    },
    {
      name: "Atento",
      logo: "/images/clientes/atento.png",
      description: "Empresa líder global en consultoría y externalización de procesos de negocio (BPO) y gestión de la relación con clientes (CRM)"
    },
    {
      name: "Gatorade",
      logo: "/images/clientes/gatorade.jpg",
      description: "Bebida isotónica líder, científicamente formulada para deportistas,"
    },
    {
      name: "Justo",
      logo: "/images/clientes/justo.jpg",
      description: "Empresa mexicana 100% en línea"
    },
    {
      name: "Kavak",
      logo: "/images/clientes/kavak.jpeg",
      description: "Empresa mexicana de comercio electrónico de autos usados que revoluciona el mercado con un modelo digital"
    },
    {
      name: "SHP",
      logo: "/images/clientes/shp.jpg",
      description: "Fabricante y lider mundial de empaques para cosméticos"
    },
    {
      name: "Soriana",
      logo: "/images/clientes/soriana.png",
      description: "Importante empresa mexicana de retail"
    },
    {
      name: "Vips",
      logo: "/images/clientes/vips.png",
      description: "Icónica cadena mexicana de restaurantes tipo cafetería"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="clientes"
      aria-labelledby="clientes-titulo"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header minimalista */}
        <div className={`text-center mb-16 lg:mb-24 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h2
            id="clientes-titulo"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            <span className="block">Clientes que</span>
            <span className="text-blue-600">confían en nosotros</span>
          </h2>

          <div className="inline-block w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-8"></div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Colaboramos con organizaciones líderes para transformar su gestión
            de talento y potenciar su cultura organizacional.
          </p>
        </div>

        {/* Grid minimalista */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Tarjeta minimalista */}
              <div className="group relative h-[280px] bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:border-blue-200 hover:shadow-xl flex flex-col items-center justify-center p-8">

                {/* Logo */}
                <div className="relative flex items-center justify-center h-20 mb-8">
                  <img
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    loading="lazy"
                    className="h-16 object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>

                {/* Contenido */}
                <div className="text-center space-y-4">
                  <p className="text-xl font-bold text-gray-900">
                    {client.name}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadística minimalista */}
        <div className={`mt-20 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">+50</p>
            <p className="text-gray-600">
              empresas han transformado su gestión de talento con nosotros
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}