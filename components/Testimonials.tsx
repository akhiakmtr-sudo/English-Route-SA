
import React, { useState } from 'react';
import Card from './ui/Card';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "English Tour made my dream of studying in Canada a reality. Their team was incredibly supportive throughout the entire visa process. I couldn't have done it without them!",
    name: 'Priya Sharma',
    role: 'Student, University of Toronto',
    image: 'https://picsum.photos/seed/person1/100/100',
    destination: 'Canada',
  },
  {
    quote: "Finding a tech job in Germany seemed impossible until I contacted English Tour. Their interview coaching and resume services were top-notch and landed me a fantastic role in Berlin.",
    name: 'Michael Chen',
    role: 'Software Engineer, Berlin',
    image: 'https://picsum.photos/seed/person2/100/100',
    destination: 'Germany',
  },
  {
    quote: "The personalized attention I received was amazing. They helped me choose the perfect university in Australia that matched my career goals perfectly. Highly recommended!",
    name: 'Fatima Al-Jamil',
    role: 'Masters Student, University of Sydney',
    image: 'https://picsum.photos/seed/person3/100/100',
    destination: 'Australia',
  },
  {
    quote: "The entire process was smooth. English Tour helped me secure admission and a scholarship for my MBA in the UK. Truly grateful!",
    name: 'David Smith',
    role: 'MBA Student, London Business School',
    image: 'https://picsum.photos/seed/person4/100/100',
    destination: 'UK',
  },
  {
    quote: "I was overwhelmed with the US university application process. English Tour's counselors were patient and knowledgeable. Now I'm at my dream school!",
    name: 'Sophia Rodriguez',
    role: 'Undergrad, Stanford University',
    image: 'https://picsum.photos/seed/person5/100/100',
    destination: 'USA',
  },
  {
    quote: "Moving to Canada for work was a big step. English Tour's job assistance program was a game-changer. They connected me with employers and helped with my work permit.",
    name: "Liam O'Connell",
    role: 'Mechanical Engineer, Vancouver',
    image: 'https://picsum.photos/seed/person6/100/100',
    destination: 'Canada',
  }
];

const Testimonials: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', ...Array.from(new Set(testimonialsData.map(t => t.destination)))];

  const filteredTestimonials = testimonialsData.filter(testimonial =>
    selectedFilter === 'All' || testimonial.destination === selectedFilter
  );

  return (
    <section id="testimonials" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">Success Stories from Our Clients</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Filter by destination to see stories relevant to your journey.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12" aria-label="Filter testimonials by country">
            {filters.map(filter => (
                <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedFilter === filter
                    ? 'bg-brand-gold text-brand-blue shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                aria-pressed={selectedFilter === filter}
                >
                {filter}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm text-white border border-white/20 flex flex-col">
                <div className="p-6 flex flex-col h-full">
                    <p className="text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                        <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-brand-teal" />
                        <div className="ml-4">
                            <p className="font-bold text-white">{testimonial.name}</p>
                            <p className="text-sm text-gray-300">{testimonial.role}</p>
                             <p className="text-xs text-brand-gold font-bold mt-1 tracking-wider uppercase">{testimonial.destination}</p>
                        </div>
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;