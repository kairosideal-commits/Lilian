
import React from 'react';
import Section from './Section';
import Button from './Button';
import { EXHIBITIONS, WHATSAPP_NUMBER } from '../constants';

const Exhibitions: React.FC = () => {
  const scheduleUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, gostaria de conversar sobre agendamento de exposição ou apresentação do portfólio.")}`;

  return (
    <Section id="exhibitions">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <h2 className="text-2xl font-normal tracking-[0.2em] uppercase mb-4 border-b border-black pb-4 inline-block self-start">
            Exposições
          </h2>
          
          {/* New Call to Action Block - Visible on Desktop */}
          <div className="hidden lg:block mt-12 pr-8">
            <p className="text-lg font-serif italic text-gray-500 mb-6">
              Interessado em levar esta obra para sua galeria ou espaço cultural?
            </p>
            <Button href={scheduleUrl} className="w-full text-center text-xs px-4">
              Agendar Apresentação
            </Button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ul className="space-y-0 border-t border-gray-200">
            {EXHIBITIONS.map((exhibition) => (
              <li key={exhibition.id} className="border-b border-gray-200 py-8 group hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4 sm:mx-0 sm:px-4">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-8">
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    {/* Changed text-gray-400 to text-gray-500 for better visibility */}
                    <span className="text-sm font-bold tracking-widest text-gray-500 group-hover:text-black transition-colors">{exhibition.year}</span>
                    <span className="text-xl md:text-2xl uppercase tracking-wider font-light leading-snug">{exhibition.title}</span>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                    {/* Changed text-gray-500 to text-gray-600 */}
                    <span className="text-sm text-gray-600 font-light italic">{exhibition.location}</span>
                    {exhibition.link && (
                      /* Changed text-xs to text-sm */
                      <a href={exhibition.link} className="text-sm uppercase font-bold tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                        Ver detalhes
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Call to Action Block - Mobile Only */}
          <div className="block lg:hidden mt-12 bg-gray-50 p-6 text-center">
            <p className="text-base font-serif italic text-gray-500 mb-6">
              Interessado em levar esta obra para sua galeria ou espaço cultural?
            </p>
            <Button href={scheduleUrl} className="w-full text-center">
              Agendar Apresentação
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Exhibitions;
