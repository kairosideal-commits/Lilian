import React, { useState } from 'react';
import { Artwork } from '../types';
import Button from './Button';

interface ArtworkCardProps {
  artwork: Artwork;
  whatsappLink: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, whatsappLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? artwork.images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col group">
      {/* Image Carousel Container */}
      <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative group/image">
        {artwork.images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`${artwork.title} - ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Navigation Arrows - Only visible if multiple images exist */}
        {artwork.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-black shadow-sm hover:bg-white hover:scale-105 transition-all opacity-100 lg:opacity-0 lg:group-hover/image:opacity-100 z-10"
              aria-label="Anterior"
            >
              <span className="text-lg leading-none pb-1">&larr;</span>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-black shadow-sm hover:bg-white hover:scale-105 transition-all opacity-100 lg:opacity-0 lg:group-hover/image:opacity-100 z-10"
              aria-label="Próximo"
            >
              <span className="text-lg leading-none pb-1">&rarr;</span>
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10 opacity-100 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300">
                {artwork.images.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'}`}
                    />
                ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 pointer-events-none transition-colors duration-500" />
      </div>

      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="text-lg md:text-xl font-normal uppercase tracking-widest text-black">
          {artwork.title}
        </h3>
        {/* Changed text-xs to text-sm and text-gray-500 to text-gray-600 */}
        <p className="text-sm text-gray-600 font-light uppercase tracking-wider">
          {artwork.technique} {artwork.year && ` — ${artwork.year}`}
        </p>
        
        {/* CTA Button: Always visible on mobile, reveal on hover on desktop */}
        <div className="pt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 transform lg:translate-y-2 lg:group-hover:translate-y-0">
          <Button href={whatsappLink}>
            Consultar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;