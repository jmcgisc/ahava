export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
                ✉️ Contáctanos
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Hablemos sobre tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  proyecto
                </span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Compártenos tu visión. Nuestro equipo te brindará una respuesta personalizada 
                y estrategias concretas para hacerla realidad.
              </p>
            </div>

            {/* Información de contacto adicional */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Correo Electrónico</p>
                  <p className="text-white/70">rh@ahavacorporativo.com.mx</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <p className="text-white/70">+52 (55) 56 74 25 36</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🕒</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Horario de Atención</p>
                  <p className="text-white/70">Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Redes sociales o información adicional */}
            <div className="pt-4">
              <p className="text-white/70 text-sm">
                ¿Prefieres una reunión virtual? Agenda una videollamada con nuestro equipo especializado.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-semibold text-sm">Nombre completo *</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-semibold text-sm">Correo electrónico *</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-white font-semibold text-sm">Empresa</label>
                <input 
                  type="text" 
                  placeholder="Nombre de tu empresa" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white font-semibold text-sm">Servicio de interés</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all">
                  <option value="" className="text-gray-800">Selecciona un servicio</option>
                  <option value="reclutamiento" className="text-gray-800">Reclutamiento y Selección</option>
                  <option value="comercial" className="text-gray-800">Representación Comercial</option>
                  <option value="nomina" className="text-gray-800">Nómina & Benefits</option>
                  <option value="marketing" className="text-gray-800">Marketing Digital</option>
                  <option value="legal" className="text-gray-800">Asesoría Legal</option>
                  <option value="estrategia" className="text-gray-800">Estrategia de Negocio</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-white font-semibold text-sm">Mensaje *</label>
                <textarea 
                  placeholder="Cuéntanos sobre tu proyecto, objetivos o consulta específica..." 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group"
              >
                Enviar Mensaje
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-white/60 text-xs text-center">
                * Campos obligatorios. Nos pondremos en contacto contigo en un máximo de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}