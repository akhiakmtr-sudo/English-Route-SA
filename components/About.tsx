
import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import Card from './ui/Card';

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
    <section 
      id="about" 
      className="py-20 bg-brand-light relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-teal/5 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
              About English Route
            </h2>
            <div className="text-lg text-gray-700 space-y-6 text-left md:text-center">
              <p>
                Every great journey begins with a dream — and at English Route, we turn that dream into a destination.
              </p>
              <p>
                Born in Dubai, the city where the world meets, English Route is your gateway to global education. We’re more than an abroad education consultancy — we’re your travel companion on the road to success. Our passion is helping students discover not just where they want to study, but who they can become.
              </p>
              <p>
                From the first conversation to the first day on campus, we walk beside you — guiding, advising, and celebrating every step of your academic journey. Whether it’s the UK, Canada, Australia, the USA, or beyond, our expert team connects you to the world’s leading universities with clarity, care, and confidence.
              </p>
               <p>
                We believe studying abroad is not just about earning a degree — it’s about building a life filled with experiences, friendships, and opportunities that last forever.
              </p>
              <blockquote className="border-l-4 border-brand-teal pl-6 py-2 my-8 text-left md:text-center md:border-l-0 md:border-t-2 md:border-b-2 md:pl-0">
                <p className="text-xl italic font-semibold text-brand-blue">
                  At English Route Study Abroad, we don’t just send students abroad.
                  <br />
                  We send dreamers to chase their future.
                </p>
              </blockquote>
            </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We are committed to providing you with the best possible guidance and support on your journey to a global future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <Card 
              key={index} 
              className="text-center p-8 bg-white/60 backdrop-blur-md border border-gray-200/50 flex flex-col items-center shadow-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-5 bg-brand-teal/10 p-4 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h3>
              <p className="text-gray-600 flex-grow">{item.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
