import React from 'react';
import { Event } from '../types';
import Card from './ui/Card';
import { CalendarIcon } from './icons/CalendarIcon';
import { LocationMarkerIcon } from './icons/LocationMarkerIcon';

const eventsData: Event[] = [
  {
    type: 'University Admission',
    title: 'Qualifi Level 3 Diploma in Health and Social Care',
    country: 'UK',
    lastDateToApply: 'Feb 28, 2025',
    points: [
      'Level 3 RQF Qualification',
      'Fully Accredited by Ofqual',
      'Pathway to a University Degree',
      'Develops skills for health and social care sector',
      'Available in the UK and Internationally'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    detailsUrl: '#/opportunity/qualifi-level-3-diploma'
  },
  {
    type: 'Study & Work',
    title: 'Reach the UK in 14 Days',
    country: 'UK',
    lastDateToApply: 'Ongoing',
    points: [
      'Plus Two Certificate & CV required',
      'Work alongside your studies',
      'Visa processing in 14 working days',
      'No interview required',
      'Age: 18 to 55',
      'Only £6000, no advance payment',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    detailsUrl: 'https://wa.me/971589076061'
  },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Upcoming Opportunities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Explore scholarships, job openings, and university intakes. Your global future awaits.
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-8 pb-8 -mx-4 px-4 scrollbar-thin scrollbar-thumb-brand-teal/50 scrollbar-track-transparent">
          {eventsData.map((event, index) => (
            <div key={index} className="flex-shrink-0 w-[340px]">
              <Card className="flex flex-col h-full border border-gray-200 group">
                <div className="relative">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className={`absolute top-3 right-3 inline-block px-3 py-1 text-xs font-semibold rounded-full text-white ${event.type === 'Webinar' ? 'bg-brand-gold' : 'bg-brand-teal'}`}>
                        {event.type}
                    </span>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-teal transition-colors">{event.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-b pb-3">
                    <div className="flex items-center">
                        <LocationMarkerIcon className="mr-2 text-gray-400" />
                        <span>{event.country}</span>
                    </div>
                    <div className="flex items-center">
                        <CalendarIcon className="mr-2 text-gray-400" />
                        <span>Apply by: <strong>{event.lastDateToApply}</strong></span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600 mb-5 flex-grow">
                    {event.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                      <a 
                        href={event.detailsUrl || '#contact'} 
                        className="w-full text-center block bg-brand-teal text-white font-semibold py-2.5 px-4 rounded-md hover:bg-brand-blue transition-all shadow-md transform group-hover:-translate-y-1"
                        target={event.title === 'Reach the UK in 14 Days' ? '_blank' : undefined}
                        rel={event.title === 'Reach the UK in 14 Days' ? 'noopener noreferrer' : undefined}
                      >
                          {event.title === 'Reach the UK in 14 Days' ? 'Apply Now' : 'Learn More'}
                      </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;