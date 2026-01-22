
import React from 'react';
import Section from './Section';
import ArtworkCard from './ArtworkCard';
import { AUTHORIAL_WORKS, WHATSAPP_NUMBER, COMMERCIAL_INFO } from '../constants';

const Artworks: React.FC = () => {
  const getWhatsAppLink = (artTitle: string) => {
    const text = `Olá, gostaria de saber mais sobre a obra "${artTitle}".`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <Section id="artworks">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-normal tracking-[0.2em] uppercase">
          Artes Autorais
        </h2>
        {/* Changed text-gray-400 to text-gray-500 for better contrast */}
        <p className="mt-4 text-xs md:text-sm text-gray-500 font-light tracking-widest uppercase">
          Obras Selecionadas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24 md:mb-32">
        {AUTHORIAL_WORKS.map((art) => (
          <ArtworkCard 
            key={art.id} 
            artwork={art} 
            whatsappLink={getWhatsAppLink(art.title)} 
          />
        ))}
      </div>

      {/* Commercial / Sales Section */}
      <div className="border-t border-gray-200 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="order-2 md:order-1 relative h-96 w-full bg-gray-100 overflow-hidden group">
            <img 
              src={COMMERCIAL_INFO.image} 
              alt="Obra emoldurada em ambiente decorado"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 backdrop-blur-sm">
                <span className="text-[10px] uppercase tracking-widest">Exemplo de aplicação</span>
            </div>
          </div>

          {/* Text Info */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-xl font-normal uppercase tracking-[0.15em] border-l-2 border-black pl-4">
              {COMMERCIAL_INFO.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed text-justify">
              {COMMERCIAL_INFO.description}
            </p>
            <ul className="space-y-3 pt-2">
              {COMMERCIAL_INFO.details.map((detail, index) => (
                <li key={index} className="flex items-center text-sm text-gray-500 font-light tracking-wide">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Artworks;
