
import React from 'react';
import { LocationMarkerIcon } from './icons/LocationMarkerIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold inline-block">English Route Study Abroad</h2>
            <p className="text-sm text-gray-300 tracking-wider">STUDY & WORK ABROAD</p>
            <p className="mt-4 text-gray-300 max-w-sm mx-auto md:mx-0">
              Your trusted partner for unlocking international opportunities and building a global future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-gold tracking-wider">Get in Touch</h3>
            <div className="mt-4 space-y-6 text-gray-300">
                {/* Dubai Office */}
                <div>
                    <div className="flex items-start justify-center md:justify-start">
                        <LocationMarkerIcon className="text-brand-gold mt-1" />
                        <address className="ml-4 not-italic">
                            <strong className="text-white">Dubai Office</strong><br/>
                            Office - G14, Blue Titan, Art Tower<br/>
                            Bur Dubai, Dubai - UAE
                        </address>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-2">
                        <PhoneIcon className="text-brand-gold" />
                        <a href="tel:+971589076061" className="ml-4 hover:text-white transition">+971 589076061</a>
                    </div>
                </div>

                {/* UK Office */}
                <div>
                    <div className="flex items-start justify-center md:justify-start">
                        <LocationMarkerIcon className="text-brand-gold mt-1" />
                        <address className="ml-4 not-italic">
                            <strong className="text-white">UK Office</strong><br/>
                            160 London Road Jhumat house,<br/>
                            Barking IG11 8BB
                        </address>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-2">
                        <PhoneIcon className="text-brand-gold" />
                        <a href="tel:+447826828220" className="ml-4 hover:text-white transition">+44 7826828220</a>
                    </div>
                </div>
                 {/* Email */}
                <div className="flex items-center justify-center md:justify-start">
                  <MailIcon className="text-brand-gold" />
                  <a href="mailto:info@englishroutestudyabroad.com" className="ml-4 hover:text-white transition">info@englishroutestudyabroad.com</a>
                </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-brand-gold tracking-wider">Quick Links</h3>
            <nav className="mt-4 space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition">About Us</a>
              <a href="#services" className="block text-gray-300 hover:text-white transition">Services</a>
              <a href="#mission-vision" className="block text-gray-300 hover:text-white transition">Mission & Vision</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact Us</a>
            </nav>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} English Route Study Abroad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;