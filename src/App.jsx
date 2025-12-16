import Header from "./components/Header";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Cta from "./components/Cta";

import {
  ChartBarIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const appConfig = {
  presentation: {
    title: "Amamos lo que hacemos",
    highlightedTitle: "hacemos",
    items: [
      {
        title: "Comprensión Estratégica",
        text: "Comprendemos la industria y el negocio de nuestros clientes, para luego construir negocios exitosos y relevantes que conquisten los corazones más exigentes.",
        icon: ChartBarIcon,
      },
      {
        title: "Casos de Éxito",
        text: "Cada servicio esta diseñado para generar impacto real, elevar tu marca y fortalecer tus resultados.",
        icon: BriefcaseIcon,
      },
      {
        title: "Resultados Comprobados",
        text: "Buscamos el equilibrio entre lo funcional y lo estético, logrando durante todo este tiempo el éxito de cada uno de nuestros clientes.",
        icon: CheckBadgeIcon,
      },
    ],
  },
  company: {
    name: "AHAVA",
    stats: {
      clients: "+200",
      projects: "+500",
      successRate: "98%",
      experience: "18+"
    }
  }
};

const miNumeroDeTelefono = '525656742536';
const mensajePredeterminado = '¡Hola! Estoy interesado en tus servicios.';
export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />

        <Presentation
          title={appConfig.presentation.title}
          highlightedTitle={appConfig.presentation.highlightedTitle}
          subtitle={appConfig.presentation.subtitle}
          items={appConfig.presentation.items}
        />

        <Services />

        <About />

        <Cta />

        <Clients />

        <Contact />

        <FloatingWhatsApp
          phoneNumber={miNumeroDeTelefono}
          message={mensajePredeterminado}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}