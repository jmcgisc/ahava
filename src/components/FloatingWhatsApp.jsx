import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el ícono de Font Awesome

const FloatingWhatsApp = ({ phoneNumber, message }) => {
  
  // Codifica el mensaje para que sea seguro en una URL
  const encodedMessage = encodeURIComponent(message);
  
  // Esta es la URL estándar de "click to chat" de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      {/* Ajusta el tamaño del ícono cambiando w-8 (ancho) y h-8 (alto) 
        Las clases de Tailwind son w-8 = 2rem (32px) 
      */}
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;