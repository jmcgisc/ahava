export default function Services() {
  const services = [
    {
      title: "Reclutamiento y Selección de Personal",
      description: "¡Obtén al MEJOR TALENTO listo para trabajar!",
      icon: "👥",
      features: ["Búsqueda especializada", "Evaluación de competencias", "Selección garantizada"]
    },
    {
      title: "Representación Comercial & Desarrollo de Negocio",
      description: "¡Deja de perder TIEMPO y RECURSOS e INCREMENTA las VENTAS de tu EMPRESA!",
      icon: "📈",
      features: ["Estrategias comerciales", "Expansión de mercado", "Optimización de ventas"]
    },
    {
      title: "Nómina & Benefits",
      description: "Gestión integral de capital humano y compensaciones",
      icon: "💰",
      features: ["Administración de nómina", "Seguridad social", "Beneficios y recompensas"]
    },
    {
      title: "Diseño de Marca & Marketing Digital",
      description: "Servicios de CREACIÓN, DISEÑO y DESARROLLO de MARCA",
      icon: "🎨",
      features: ["Diseño gráfico & packaging", "Web", "Estrategias de comunicación"]
    },
    {
      title: "Asesoría & Defensa Legal para Empresas",
      description: "Despacho especializado en derecho corporativo y empresarial",
      icon: "⚖️",
      features: ["Derecho laboral y fiscal", "Despacho aduanero", "Derecho civil y mercantil"]
    },
    {
      title: "Estrategia de Negocio",
      description: "Desarrollo y posicionamiento de negocios exitosos",
      icon: "🎯",
      features: ["Planificación estratégica", "Análisis de mercado", "Modelos de negocio"]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Resultados Reales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Servicios que garantizan el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Éxito de tu Negocio
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ofrecemos una amplia gama de <strong>servicios</strong> y enorme <strong>experiencia</strong> 
            para construir negocios exitosos y relevantes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>

        {/* NUEVA CTA */}
        <div className="mt-24 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 items-center">
            {/* Texto */}
            <div className="p-10 md:p-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                ¿Estas en busca de{" "}
                <span className="text-yellow-300">Trabajo</span>?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-md">
                Se el primero en enterarte de nuestras nuevas vacantes y oportunidades laborales.
              </p>
              <a
                href="#contacto"
                className="inline-block bg-yellow-300 text-blue-800 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-yellow-200 transition-all duration-300"
              >
                Contacta un asesor
              </a>
            </div>

            {/* Imagen decorativa */}
            <div className="relative h-72 md:h-full">
              <img
                src="/images/Oficina.jpeg"
                alt="Human Quality AHAVA"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
