
import React from 'react';
import Card from './ui/Card';
import { GlobeIcon } from './icons/GlobeIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const servicesData = [
  {
    icon: <GlobeIcon />,
    title: 'Study Abroad Services',
    description: 'From selection to visa applications, we guide you at every step. We partner with top institutions worldwide to find the perfect fit for your academic goals.',
    features: ['Career Counseling', 'Application Assistance', 'Visa Guidance'],
    imageUrl: 'https://stockwellgoldgallery.s3.us-west-2.amazonaws.com/3bda1d9f549920e4a527b89824fd2036.jpg',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Abroad Job Services',
    description: 'Navigate the international job market with confidence. We help you with resume building, interview preparation, and connecting with global employers for your next career move.',
    features: ['Global Job Search', 'Resume & CV Writing', 'Interview Coaching', 'Work Permit Support'],
    imageUrl: 'https://stockwellgoldgallery.s3.us-west-2.amazonaws.com/48d78304470d5aecd8a9dcf925ff3136.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Our Premier Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We offer comprehensive support to make your international ambitions a reality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((service, index) => (
            <div key={index} className="group">
              <Card className="flex flex-col h-full">
                <div className="relative">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover rounded-t-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 group-hover:from-black/70"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="bg-brand-teal p-3 rounded-full text-white shadow-lg transition-all duration-300 group-hover:bg-brand-gold group-hover:scale-110 group-hover:shadow-xl">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-brand-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;