export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Contenido */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                +18 Años de Experiencia
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Somos el resultado de la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  excelencia
                </span>
              </h2>
            </div>

            {/* Descripción principal */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-blue-600">AHAVA</strong> es el resultado de <strong>+18 años de experiencia</strong> de un equipo especialista en estrategia, desarrollo y posicionamiento de negocio.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprendemos la industria y el negocio de nuestros clientes, para luego construir negocios exitosos y relevantes que conquisten los corazones más exigentes.
              </p>
            </div>

            {/* Servicios destacados */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">👥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reclutamiento & Selección</h3>
                <p className="text-sm text-gray-600">Obten al mejor talento listo para trabajar</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Representación Comercial</h3>
                <p className="text-sm text-gray-600">Incrementa las ventas de tu empresa</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Descubre cómo podemos ayudarte
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Imagen/Logo */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Tarjeta con logo */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src="/ahava-logo.png" 
                    alt="AHAVA - Especialistas en estrategia de negocio" 
                    className="w-full h-full object-contain max-w-xs"
                  />
                </div>
                
                {/* Badge flotante */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Desde 2006
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-200/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">18+</div>
            <div className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Años de Experiencia</div>
          </div>
          <div className="group">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">200+</div>
            <div className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Clientes Satisfechos</div>
          </div>
          <div className="group">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">500+</div>
            <div className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Proyectos Entregados</div>
          </div>
          <div className="group">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">98%</div>
            <div className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Tasa de Éxito</div>
          </div>
        </div>
      </div>
    </section>
  );
}