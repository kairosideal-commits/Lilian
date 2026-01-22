import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section 
      id={id} 
      className={`w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto reveal ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;