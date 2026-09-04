import React, { useState } from 'react';
import { X } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 right-6 z-[90] w-[60px] h-[60px] transform-gpu">
      {/* Botón de cerrar */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-0 left-0 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white text-gray-500 shadow-md border border-gray-200 hover:text-obsidian hover:bg-gray-50 transition-colors before:absolute before:-inset-4 before:content-['']"
        aria-label="Cerrar chat"
      >
        <X className="w-3 h-3" />
      </button>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/524432735543?text=Hola%2C%20buen%20d%C3%ADa.%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20legal."
        target="_blank"
        rel="noopener noreferrer"
        className="h-[60px] w-[60px] rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 block"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default ChatWidget;