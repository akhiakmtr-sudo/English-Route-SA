
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, variant = 'primary', className = '' }) => {
  const baseStyles = 'inline-block px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 shadow-md transform hover:-translate-y-1';
  
  const variantStyles = {
    primary: 'bg-brand-teal text-white hover:bg-opacity-90',
    secondary: 'bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-light',
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
