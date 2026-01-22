
import React from 'react';
import Section from './Section';
import { REFERENCE_CONTENT } from '../constants';

const Reference: React.FC = () => {
  return (
    <Section id="reference">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
          <div className="space-y-2">
            <h2 className="text-2xl font-normal tracking-[0.2em] uppercase">
              {REFERENCE_CONTENT.title}
            </h2>
            <p className="text-3xl font-serif italic text-gray-400">
               {REFERENCE_CONTENT.subject}
            </p>
          </div>

          <div className="relative pl-6 md:pl-0">
             <span className="hidden md:block absolute -left-8 -top-6 text-8xl text-gray-100 font-serif leading-none z-0">“</span>
             <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800 relative z-10 italic">
               {REFERENCE_CONTENT.quote}
             </p>
          </div>
          
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed text-justify">
            {REFERENCE_CONTENT.text}
          </p>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="w-full h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            <img 
              src={REFERENCE_CONTENT.image} 
              alt="Paisagem evocativa do Sertão" 
              className="w-full h-full object-cover filter sepia-[.3] contrast-[0.9] hover:filter-none transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Reference;
