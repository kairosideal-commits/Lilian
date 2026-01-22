import React, { useState, useEffect } from 'react';
import { ARTIST_NAME, ARTIST_TAGLINE, HEADER_IMAGES } from '../constants';

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HEADER_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white p-6 overflow-hidden">
      {/* Background Image Layer */}
      {HEADER_IMAGES.map((imgUrl, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-[2500ms] ease-in-out ${index === currentImageIndex ? 'opacity-60' : 'opacity-0'}`}
        >
          <img 
            src={imgUrl}
            alt={`Atelier Background ${index + 1}`} 
            className="w-full h-full object-cover filter grayscale-[20%]"
          />
        </div>
      ))}
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto reveal active">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light tracking-[0.1em] leading-none drop-shadow-2xl text-white mix-blend-screen">
          {ARTIST_NAME}
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-normal tracking-[0.25em] uppercase text-white/90 mt-4 drop-shadow-lg border-t border-white/30 pt-6 inline-block px-4">
          {ARTIST_TAGLINE}
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow opacity-80">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-8 h-8 sm:w-10 sm:h-10 text-white"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </header>
  );
};

export default Header;