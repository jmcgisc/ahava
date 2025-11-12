import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaUsers,
  FaChartLine,
  FaCalculator,
  FaPaintBrush,
  FaGavel,
  FaLightbulb,
} from "react-icons/fa";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    // ... (Tu array de servicios va aquí, no es necesario cambiarlo) ...
    // Ejemplo del primero:
    {
      title: "Reclutamiento y Selección de Personal",
      description: "Encontramos el talento ideal para cada puesto, garantizando resultados excepcionales.",
      details:
        "Nos especializamos en reclutamiento estratégico, evaluación psicométrica y procesos de onboarding. Ahorra tiempo y asegura personal de alto rendimiento.",
      image: "/images/reclutamiento.jpg",
      gradient: "from-blue-600 to-indigo-600",
      icon: FaUsers,
    },
    // ... (El resto de tus servicios) ...
    {
      title: "Representación Comercial & Desarrollo de Negocio",
      description: "Incrementa tus ventas y lleva tu marca a nuevos mercados con estrategias efectivas.",
      details:
        "Creamos y ejecutamos estrategias comerciales a la medida. Nuestro equipo impulsa el crecimiento de tu empresa y fortalece tus relaciones B2B.",
      image: "/images/ventas.jpg",
      gradient: "from-purple-600 to-pink-500",
      icon: FaChartLine, 
    },
    {
      title: "Nómina & Benefits",
      description: "Nos encargamos de la gestión integral de tu equipo, nómina y beneficios.",
      details:
        "Garantizamos precisión en cálculos, cumplimiento legal y gestión transparente. Con nuestro servicio, tu equipo siempre recibe a tiempo y sin errores.",
      image: "/images/nomina.jpg",
      gradient: "from-cyan-600 to-blue-500",
      icon: FaCalculator, 
    },
    {
      title: "Diseño de Marca & Marketing Digital",
      description: "Creamos experiencias visuales y estrategias digitales que posicionan tu marca.",
      details:
        "Desde identidad visual y desarrollo web hasta campañas digitales y social media. Potencia tu presencia en línea con diseño y estrategia.",
      image: "/images/branding.jpg",
      gradient: "from-orange-500 to-red-500",
      icon: FaPaintBrush, 
    },
    {
      title: "Asesoría & Defensa Legal para Empresas",
      description: "Protege a tu empresa con asesoría experta en derecho corporativo, fiscal y laboral.",
      details:
        "Contamos con abogados especializados en derecho empresarial, laboral y fiscal. Prevenimos riesgos y resolvemos conflictos con eficacia.",
      image: "/images/legal.jpg",
      gradient: "from-slate-800 to-slate-600",
      icon: FaGavel, 
    },
    {
      title: "Estrategia de Negocio",
      description: "Analizamos, planificamos y transformamos tu negocio para alcanzar el éxito sostenible.",
      details:
        "Diseñamos modelos de negocio, analizamos tu mercado y desarrollamos estrategias competitivas que impulsan el crecimiento sostenido.",
      image: "/images/estrategia.jpg",
      gradient: "from-emerald-500 to-teal-500",
      icon: FaLightbulb, 
    },
  ];

  return (
    // --- CAMBIO 1: Nuevo fondo base (gradiente más colorido y sutil) ---
    <section 
      id="servicios" 
      className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      
      {/* --- CAMBIO 2: Fondos "Aurora" más grandes y sin pulso --- */}
      <div 
        className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] 
                   bg-blue-200 rounded-full blur-3xl opacity-30" 
      />
      <div 
        className="absolute bottom-[-30%] left-[-20%] w-[900px] h-[900px] 
                   bg-purple-200 rounded-full blur-3xl opacity-30" 
      />
      <div 
        className="absolute top-[30%] left-[25%] w-[700px] h-[700px] 
                   bg-cyan-100 rounded-full blur-3xl opacity-20" 
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header (sin cambios) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* ... */}
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Potencia tu empresa con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              soluciones innovadoras
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada servicio está diseñado para generar impacto real, elevar tu marca
            y fortalecer tus resultados.
          </p>
        </motion.div>

        {/* Services Grid (sin cambios) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-3xl shadow-xl bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              {/* Imagen */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70 group-hover:opacity-0 transition-opacity duration-700`}
                />
              </div>

              {/* Contenido */}
              <div className="relative z-10 p-8">
                {/* Círculo del Ícono */}
                <div
                  className={`
                    mb-5 inline-block p-4 rounded-full
                    bg-gradient-to-r ${service.gradient} 
                    shadow-lg group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Línea inferior animada */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-700`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final (sin cambios) */}
        <div className="mt-32 text-center relative z-10">
          {/* ... */}
        </div>
      </div>

      {/* Popup Modal (sin cambios) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl z-10"
              >
                ✖️
              </button>
              
              {/* El contenido del modal */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedService.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{selectedService.details}</p>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}