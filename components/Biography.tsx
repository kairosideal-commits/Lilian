import React from 'react';
import Section from './Section';
import { BIOGRAPHY_TEXT, BIOGRAPHY_IMAGE } from '../constants';

const Biography: React.FC = () => {
  return (
    <Section id="biography">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Image and Title */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
           <h2 className="text-2xl md:text-3xl font-normal tracking-[0.2em] uppercase border-b border-black pb-4 inline-block self-start">
            Biografia
          </h2>
          <div className="w-full aspect-[4/5] bg-gray-100 relative overflow-hidden group">
            <img 
              src={BIOGRAPHY_IMAGE} 
              alt="Lilian Kulchar Portrait" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="lg:col-span-7 space-y-6 lg:mt-24">
          {BIOGRAPHY_TEXT.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-800 text-justify">
              {paragraph}
            </p>
          ))}
          
          <div className="pt-12 pb-4">
             {/* Signature rendered with Font to match the requested look without external image dependencies */}
             <span className="font-signature text-6xl text-gray-600 transform -rotate-3 inline-block mix-blend-multiply opacity-80">
               Kulchar
             </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Biography;