import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { TargetIcon } from './icons/TargetIcon';
import { EyeIcon } from './icons/EyeIcon';

const whyChooseUsData = [
  {
    icon: <UserGroupIcon />,
    title: 'Personalized Guidance',
    description: 'We pride ourselves on a personalized approach, ensuring each client receives tailored advice and unwavering support for their unique journey.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Extensive Global Network',
    description: 'With over 500 partner institutions and employers, our network opens doors for you to the best opportunities worldwide.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Proven Track Record',
    description: 'Our 95% visa success rate speaks for itself. We have a long history of turning our clients\' international ambitions into reality.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Dream. Explore. Achieve.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Every great journey begins with a dream — and at English Route, we turn that dream into a destination. Born in Dubai, the city where the world meets, English Route is your gateway to global education. We’re more than an abroad education consultancy — we’re your travel companion on the road to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 text-center">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex-shrink-0 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-20 bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex-shrink-0 mb-4">
                        <TargetIcon />
                    </div>
                    <h3 className="text-2xl font-extrabold text-brand-blue mb-3">Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                        To guide dreamers toward their destination through:
                    </p>
                     <ul className="space-y-4 text-gray-600 text-left">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <span className="font-semibold text-brand-blue">Personalized pathways</span> — helping each student find the right course, country, and university that fits their goals.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <span className="font-semibold text-brand-blue">Trusted guidance</span> — making the study abroad process simple, transparent, and stress-free.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <span className="font-semibold text-brand-blue">Global connections</span> — bridging students with world-class institutions and endless possibilities.
                            </div>
                        </li>
                    </ul>
                    <p className="text-gray-600 mt-6 italic">
                        Because at English Route Study Abroad, we don’t just prepare students for education abroad — we prepare them for life beyond it.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                     <div className="flex-shrink-0 mb-4">
                        <EyeIcon />
                    </div>
                    <h3 className="text-2xl font-extrabold text-brand-blue mb-3">Our Vision</h3>
                    <p className="text-brand-teal font-semibold text-lg mb-3">
                        The World, Your Campus
                    </p>
                    <p className="text-gray-600">
                        To empower students to become confident global achievers by unlocking education opportunities across borders. We aim to redefine abroad education — not just as a journey to study overseas, but as a transformation toward knowledge, independence, and global impact.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;