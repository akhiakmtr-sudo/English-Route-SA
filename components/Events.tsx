import React from 'react';
import { Event } from '../types';
import Card from './ui/Card';
import { CalendarIcon } from './icons/CalendarIcon';

const eventsData: Event[] = [
  {
    type: 'Webinar',
    title: 'Study in Canada: A Complete Guide',
    date: 'October 28, 2024',
    time: '4:00 PM (GMT)',
    description: 'Join our experts as they walk you through the entire process of applying to Canadian universities, from course selection to visa applications.',
  },
  {
    type: 'Info Session',
    title: 'UK Job Market Insights for Graduates',
    date: 'November 12, 2024',
    time: '2:00 PM (GMT)',
    description: 'Learn about the most in-demand sectors in the UK, how to tailor your CV, and what employers are looking for in international candidates.',
  },
  {
    type: 'Webinar',
    title: 'Australia Permanent Residency Pathways',
    date: 'November 25, 2024',
    time: '10:00 AM (GMT)',
    description: 'Discover the various visa options and pathways to permanent residency in Australia after completing your studies. Hosted by a certified migration agent.',
  },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Upcoming Events & Webinars</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Join our free sessions to learn more about studying and working abroad from our experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <Card key={index} className="flex flex-col border border-gray-200">
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${event.type === 'Webinar' ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-gold/20 text-brand-gold-dark'}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <CalendarIcon className="mr-2" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                <div className="mt-auto">
                    <a href="#contact" className="w-full text-center block bg-brand-teal text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-blue transition-all shadow-md">
                        Register Now
                    </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;