
import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';

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
            About Us
          </h2>
          <div className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto space-y-6">
            <p>
              Every great journey begins with a dream — and at English Tour, we turn that dream into a destination.
            </p>
            <p>
              Born in Dubai, the city where the world meets, English Tour is your gateway to global education. We’re more than an abroad education consultancy — we’re your travel companion on the road to success. Our passion is helping students discover not just where they want to study, but who they can become.
            </p>
            <p>
              From the first conversation to the first day on campus, we walk beside you — guiding, advising, and celebrating every step of your academic journey. Whether it’s the UK, Canada, Australia, the USA, or beyond, our expert team connects you to the world’s leading universities with clarity, care, and confidence.
            </p>
            <p>
              We believe studying abroad is not just about earning a degree — it’s about building a life filled with experiences, friendships, and opportunities that last forever.
            </p>
            <p className="font-semibold text-brand-blue">
              At English Tour Study Abroad, we don’t just send students abroad.
              <br/>
              We send dreamers to chase their future.
            </p>
          </div>
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
      </div>
    </section>
  );
};

export default About;
