
import React from 'react';
import Section from './Section';
import { STUDIES } from '../constants';

const Studies: React.FC = () => {
  return (
    <Section id="studies" className="bg-gray-50">
      <div className="mb-16">
        <h2 className="text-2xl font-normal tracking-[0.2em] uppercase mb-4">
          Estudos
        </h2>
        {/* Changed text-gray-500 to text-gray-600 for better readability */}
        <p className="text-sm md:text-base text-gray-600 font-light max-w-2xl leading-relaxed">
          Uma coleção de processos, testes de cor e explorações materiais que antecedem a obra final. 
          Estes itens representam o pensamento visual em construção.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STUDIES.map((study) => (
          <div key={study.id} className="flex flex-col">
            {/* Different aspect ratio and style for Studies to differentiate from Artworks */}
            <div className="w-full aspect-[3/4] overflow-hidden bg-white mb-4 border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
               <img 
                src={study.imageUrl} 
                alt={study.title} 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{study.title}</h3>
            {/* Changed text-xs to text-sm and text-gray-500 to text-gray-600 */}
            <p className="text-sm text-gray-600 font-light">{study.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Studies;
