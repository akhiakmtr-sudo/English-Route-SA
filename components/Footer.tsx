
import React from 'react';
import { LocationMarkerIcon } from './icons/LocationMarkerIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { ThreadsIcon } from './icons/ThreadsIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';

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
            <div className="mt-6 flex justify-center md:justify-start space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <InstagramIcon />
                </a>
                <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <ThreadsIcon />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <YoutubeIcon />
                </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-gold tracking-wider">Get in Touch</h3>
            <div className="mt-4 space-y-5 text-gray-300">
                {/* Dubai Office Block */}
                <div className="flex items-start justify-center md:justify-start">
                    <LocationMarkerIcon className="text-brand-gold mt-1 flex-shrink-0" />
                    <div className="ml-2">
                        <p className="font-bold text-white">Dubai Office</p>
                        <address className="not-italic text-sm leading-relaxed">
                            Office - G14, Blue Titan, Art Tower<br/>
                            Bur Dubai, Dubai - UAE
                        </address>
                        <a href="tel:+971589076061" className="mt-1 inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors group">
                            <PhoneIcon className="w-4 h-4 mr-2 text-brand-gold transition-colors group-hover:text-white" />
                            <span>+971 589076061</span>
                        </a>
                    </div>
                </div>

                {/* UK Office Block */}
                <div className="flex items-start justify-center md:justify-start">
                     <LocationMarkerIcon className="text-brand-gold mt-1 flex-shrink-0" />
                    <div className="ml-2">
                        <p className="font-bold text-white">UK Office</p>
                        <address className="not-italic text-sm leading-relaxed">
                            160 London Road Jhumat house,<br/>
                            Barking IG11 8BB
                        </address>
                         <a href="tel:+447826828220" className="mt-1 inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors group">
                            <PhoneIcon className="w-4 h-4 mr-2 text-brand-gold transition-colors group-hover:text-white" />
                            <span>+44 7826828220</span>
                        </a>
                    </div>
                </div>
                
                 {/* Email Block */}
                <div className="flex items-center justify-center md:justify-start">
                  <MailIcon className="text-brand-gold flex-shrink-0" />
                  <a href="mailto:info@englishroutestudyabroad.com" className="ml-2 text-sm hover:text-white transition">info@englishroutestudyabroad.com</a>
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
