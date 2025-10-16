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
            <h2 className="text-2xl font-bold inline-block">English Route</h2>
            <p className="text-sm text-gray-300 tracking-wider">STUDY & WORK ABROAD</p>
            <p className="mt-4 text-gray-300 max-w-sm mx-auto md:mx-0">
              Your trusted partner for unlocking international opportunities and building a global future.
            </p>
          </div>

          <div className="">
             <h3 className="text-lg font-semibold text-brand-gold tracking-wider">Get in Touch</h3>
             <div className="mt-4 space-y-3 text-gray-300">
                <div className="flex items-start justify-center md:justify-start">
                    <LocationMarkerIcon className="text-brand-gold mt-1" />
                    <address className="ml-4 not-italic">
                        Office - G14<br/>
                        Blue Titan, Art Tower<br/>
                        Bur Dubai<br/>
                        Dubai - UAE
                    </address>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                    <PhoneIcon className="text-brand-gold" />
                    <a href="tel:+971589076061" className="ml-4 hover:text-white transition">+971 589076061</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                    <MailIcon className="text-brand-gold" />
                    <a href="mailto:info@englishroutestudyabroad.com" className="ml-4 hover:text-white transition">info@englishroutestudyabroad.com</a>
                </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-gold tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} English Route Study Abroad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;