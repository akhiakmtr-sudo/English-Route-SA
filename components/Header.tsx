
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to ensure scroll is restored on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Mission & Vision', href: '#mission-vision' },
    { name: 'Services', href: '#services' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={handleLinkClick} className="flex items-center gap-3 flex-shrink-0">
              <img 
                src="https://stockwellgoldgallery.s3.us-west-2.amazonaws.com/stdyabrdhome.png" 
                alt="English Route Study Abroad Logo"
                className="h-16 w-auto"
              />
              <span className="text-xl font-extrabold text-brand-blue leading-tight">
                English Route<br />Study Abroad
              </span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:bg-brand-teal hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
               <a href="#contact" className="bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-sm">
                  Contact Us
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="relative z-50 inline-flex items-center justify-center w-10 h-10 bg-brand-teal rounded-md text-white hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg className={`block h-6 w-6 absolute transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close Icon */}
                <svg className={`block h-6 w-6 absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `} 
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <nav className="h-full flex flex-col justify-center items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-3xl font-semibold text-brand-blue hover:text-brand-teal transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="absolute bottom-16 bg-brand-teal text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
