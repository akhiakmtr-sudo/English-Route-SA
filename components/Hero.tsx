
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
      {/* Top Part with background image */}
      <div 
        className="relative bg-cover bg-center" 
        style={{ backgroundImage: "url('https://stockwellgoldgallery.s3.us-west-2.amazonaws.com/englishabrd.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl py-24">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                    Your Journey to a Global Future <span className="text-brand-teal">Starts Here</span>.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                    English Route is your trusted partner for unlocking international opportunities. We provide expert guidance for studying abroad and securing your dream job overseas.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button href="#services" variant="primary">Explore Our Services</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-24 md:py-32">
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