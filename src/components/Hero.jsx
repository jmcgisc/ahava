import { useState } from "react";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = () => {
    console.error("Error cargando el video");
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log("Video cargado correctamente");
    setVideoLoaded(true);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoError ? (
          // Fallback cuando el video falla
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-cyan-900 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg">Video no disponible</p>
              <p className="text-sm opacity-70 mt-2">Usando fondo de respaldo</p>
            </div>
          </div>
        ) : (
          // Video con más opciones de carga
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
            onCanPlayThrough={handleVideoLoad}
          >
            {/* Opción 1: Video local */}
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            
            {/* Opción 2: Video externo de respaldo */}
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-group-of-people-in-a-business-meeting-44537-large.mp4" 
              type="video/mp4" 
            />
            
            {/* Opción 3: Otro video externo */}
            <source 
              src="https://cdn.pixabay.com/video/2023/02/28/160456-805004017_large.mp4" 
              type="video/mp4" 
            />
            
            Tu navegador no soporta el elemento video.
          </video>
        )}
        
        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
      </div>

      {/* Resto del contenido igual */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-primary-foreground/90 font-medium">
              +18 años transformando negocios
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl text-gray-200 md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            ¿Deseas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Crear
            </span>{" "}
            o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Posicionar
            </span>{" "}
            tu Negocio?
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-300 md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Transformamos ideas en negocios exitosos con estrategia, diseño y pasión
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Conoce Nuestros Servicios
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            
            <button className="group relative bg-white/10 backdrop-blur-sm text-primary-foreground text-lg font-semibold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>▶</span>
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2"> 
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;