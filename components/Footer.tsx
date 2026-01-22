
import React from 'react';
import { ARTIST_NAME, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 md:py-24 border-t border-gray-100 flex flex-col items-center justify-center space-y-8 bg-white">
      <h3 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
        {ARTIST_NAME}
      </h3>
      
      <div className="flex gap-12">
        {/* Changed text-xs to text-sm */}
        <a 
          href="#" 
          className="text-sm uppercase tracking-[0.15em] hover:text-gray-500 transition-colors border-b border-transparent hover:border-gray-500 pb-1"
        >
          Instagram
        </a>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`} 
          className="text-sm uppercase tracking-[0.15em] hover:text-gray-500 transition-colors border-b border-transparent hover:border-gray-500 pb-1"
        >
          WhatsApp
        </a>
      </div>

      {/* Changed text-[10px] to text-xs and text-gray-300 to text-gray-500 */}
      <div className="mt-12 text-xs text-gray-500 tracking-widest uppercase">
        © {new Date().getFullYear()} Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
