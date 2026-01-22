
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, href, children, className = "" }) => {
  // Changed text-xs to text-sm
  const baseClasses = "inline-block bg-white border border-black text-black px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 cursor-pointer";

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
