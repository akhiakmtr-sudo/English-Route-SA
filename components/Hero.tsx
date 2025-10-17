
import React from 'react';
import Button from './ui/Button';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { GlobeAmericasIcon } from './icons/GlobeAmericasIcon';

const benefitsData = [
  {
    icon: <TrendingUpIcon />,
    title: 'Boost Your Career',
    description: 'An international degree makes your profile stand out to employers globally, opening doors to high-growth career paths.',
  },
  {
    icon: <GlobeAmericasIcon />,
    title: 'Experience New Cultures',
    description: 'Immerse yourself in a new environment, learn a new language, and build a global network of friends and colleagues.',
  },
];

const Hero: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Top Part with Image */}
      <div className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-brand-blue opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue tracking-tight">
                    Your Journey to a Global Future <span className="text-brand-teal">Starts Here</span>.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                    English Tour is your trusted partner for unlocking international opportunities. We provide expert guidance for studying abroad and securing your dream job overseas.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button href="#services" variant="primary">Explore Our Services</Button>
                </div>
            </div>
            <div className="mt-16 md:mt-24">
                <div className="relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-blue to-brand-teal rounded-xl transform -rotate-1"></div>
                    <img 
                        src="https://stockwellgoldgallery.s3.us-west-2.amazonaws.com/englishabrd.jpeg" 
                        alt="Students celebrating graduation abroad"
                        className="relative w-full h-auto object-cover rounded-xl shadow-2xl" 
                    />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                </div>
            </div>
        </div>
      </div>
      
      {/* New Benefits Section */}
      <div className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex-shrink-0 mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 max-w-xs">{benefit.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;