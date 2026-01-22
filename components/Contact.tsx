
import React from 'react';
import Section from './Section';
import Button from './Button';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre suas obras e processos.")}`;

  return (
    <Section id="contact" className="border-t border-gray-100 mt-12 md:mt-24">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
        <span className="font-signature text-5xl md:text-6xl text-gray-400 transform -rotate-2 mix-blend-multiply opacity-60 mb-8">
          Fale Comigo
        </span>
        
        <h2 className="text-2xl md:text-3xl font-normal tracking-[0.2em] uppercase mb-8 text-black">
          Contato & Aquisições
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mb-10">
          Para conhecer melhor o acervo disponível, discutir comissões personalizadas, 
          realizar pedidos ou tirar dúvidas sobre o processo criativo, sinta-se à vontade 
          para entrar em contato direto.
        </p>

        <Button href={whatsappUrl} className="px-10 py-4 text-sm">
          Conversar no WhatsApp
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
