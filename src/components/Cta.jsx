import { useState, useEffect, useRef } from "react";

export default function Cta() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div
          className={`
            bg-white rounded-3xl shadow-2xl overflow-hidden 
            transition-all duration-1000 ease-out 
            ${isVisible ? "opacity-100 translate-y-0 shadow-xl" : "opacity-0 translate-y-8 shadow-none"}
          `}
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-8 lg:gap-10">

            {/* Columna de contenido */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="space-y-8">

                {/* Badge */}
                <div
                  className={`
                    transition-all duration-700 ease-out delay-200 
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
                  `}
                >
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200/60 shadow-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Valor Diferenciador
                  </span>
                </div>

                {/* Título */}
                <div className="space-y-6">
                  <h2
                    className={`
                      text-4xl md:text-5xl font-bold text-gray-900 leading-tight 
                      transition-all duration-800 ease-out delay-400 
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                  >
                    Ventajas{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 relative">
                      AHAVA
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10 blur-sm"></span>
                    </span>
                  </h2>

                  {/* ICONOS / BENEFICIOS */}
                  <div
                    className={`
                      grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10
                      sm:[&>*:nth-child(5)]:col-span-2
                      sm:[&>*:nth-child(5)]:justify-self-center
                      transition-all duration-1000 ease-out delay-600 
                      ${isVisible ? "opacity-100" : "opacity-0"}
                    `}
                  >
                    {[
                      {
                        icon: "/images/iconos/mexico.png",
                        title: "Mayor Cobertura",
                        subtitle: "Todo México + Colombia + USA.",
                      },
                      {
                        icon: "/images/iconos/atras-en-el-tiempo.png",
                        title: "Tiempo de Respuesta",
                        subtitle: "Inmediata, 2 a 5 días hábiles.",
                      },
                      {
                        icon: "/images/iconos/pulgar-arriba.png",
                        title: "Resultados Reales",
                        subtitle: "¡Ganamos al Éxito!",
                      },
                      {
                        icon: "/images/iconos/analitica.png",
                        title: "Reportes a la Medida",
                        subtitle: "Creamos el reporte que tu empresa requiere.",
                      },
                      {
                        icon: "/images/iconos/trabajo-en-equipo.png",
                        title: "Mayor infraestructura",
                        subtitle: "Promotoría, Campañas BTL & Reclutamiento masivo.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-500"
                        style={{
                          transitionDelay: isVisible
                            ? `${700 + index * 150}ms`
                            : "0ms",
                        }}
                      >
                        <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-blue-600/20 overflow-hidden mb-4 bg-white">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-20 h-20 object-contain"
                          />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-600 mt-2">
                          {item.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className={`
                    pt-6 transition-all duration-1000 ease-out delay-1000 
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                >
                  <a
                    href="#contacto"
                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    <span className="relative z-10">Contactar a un Especialista</span>
                    <svg
                      className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Columna de imagen */}

            <div className="relative h-64 lg:h-[360px] min-h-[800px] max-h-[400px] ">
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl m-4 
                  transition-all duration-1000 ease-out delay-300 
                  ${isVisible ? "opacity-100" : "opacity-0"}
                `}
              />

              <img
                src="/images/asesores.jpg"
                alt="Especialistas AHAVA - Servicio personalizado"
                className={`
                  absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg 
                  transition-all duration-1000 ease-out delay-300 
                  ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                `}
              />

              <div
                className={`
                  absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 
                  transition-all duration-500 ease-out hover:scale-105 cursor-pointer 
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                `}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Atención Personalizada
                  </span>
                </div>
              </div>

              <div
                className={`
                  absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 
                  transition-all duration-500 ease-out hover:scale-105 cursor-pointer 
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
                style={{ transitionDelay: "700ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-lg">❤️</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Compromiso Real
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
