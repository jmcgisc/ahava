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
        {/* Contenedor principal con efecto de elevación */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 shadow-xl' : 'opacity-0 translate-y-8 shadow-none'
        }`}>
          <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
            
            {/* Columna de contenido */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="space-y-8">
                
                {/* Badge */}
                <div className={`transition-all duration-700 ease-out delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200/60 shadow-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Valor Diferenciador
                  </span>
                </div>
                
                {/* Título y descripción */}
                <div className="space-y-6">
                  <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-800 ease-out delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    ¿Listo para experimentar un servicio de{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 relative">
                      AHAVA
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10 blur-sm"></span>
                    </span>
                    ?
                  </h2>
                  
                  <p className={`text-lg text-gray-600 leading-relaxed max-w-lg transition-all duration-800 ease-out delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    En <strong className="text-blue-600 font-semibold">AHAVA</strong> ponemos la excelencia humana en el centro de cada proyecto. 
                    Combinamos expertise técnico con compromiso genuino, valores sólidos y 
                    atención completamente personalizada.
                  </p>
                </div>

                {/* Estadísticas */}
                <div className={`grid grid-cols-3 gap-6 pt-4 transition-all duration-1000 ease-out delay-800 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  {[
                    { number: "18+", label: "Años de Experiencia" },
                    { number: "98%", label: "Satisfacción Cliente" },
                    { number: "500+", label: "Proyectos Exitosos" }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className={`text-center p-3 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 transition-all duration-500 ease-out hover:scale-105 hover:shadow-md ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${800 + index * 150}ms` : '0ms'
                      }}
                    >
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-600 font-medium leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Botón CTA */}
                <div className={`pt-6 transition-all duration-1000 ease-out delay-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <a
                    href="#contacto"
                    className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 overflow-hidden"
                  >
                    {/* Efecto de brillo al hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    
                    {/* Texto e ícono */}
                    <span className="relative z-10">Contactar a un Especialista</span>
                    <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Columna de imagen */}
            <div className="relative h-80 lg:h-full min-h-[400px]">
              {/* Fondo de gradiente sutil */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl m-4 transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Imagen principal */}
              <img
                src="/images/asesores.jpg"
                alt="Especialistas AHAVA - Servicio personalizado"
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-1000 ease-out delay-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
              
              {/* Elementos flotantes */}
              <div 
                className={`absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 transition-all duration-500 ease-out hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Atención Personalizada</span>
                </div>
              </div>
              
              <div 
                className={`absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 transition-all duration-500 ease-out hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500 text-lg">❤️</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Compromiso Real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}