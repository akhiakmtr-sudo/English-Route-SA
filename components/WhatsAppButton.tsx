import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '971589076061';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#128C7E]"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
