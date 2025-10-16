
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqData = [
  {
    question: "What documents are required for a student visa application?",
    answer: "Generally, you will need a valid passport, proof of acceptance from a designated learning institution, proof of financial support, passport-sized photographs, and sometimes a medical examination. Requirements vary by country, and English Route provides a detailed checklist for your specific destination."
  },
  {
    question: "How long does the entire university application process take?",
    answer: "The process can take anywhere from 6 to 12 months. This includes researching universities, preparing for standardized tests (like IELTS or TOEFL), gathering documents, writing essays, and waiting for admission decisions. We recommend starting as early as possible."
  },
  {
    question: "Can English Route help me find and apply for scholarships?",
    answer: "Absolutely! We maintain an extensive database of scholarships, grants, and bursaries. Our counselors will help you identify opportunities you're eligible for and assist you with the application process to maximize your chances of receiving financial aid."
  },
  {
    question: "What kind of support do you offer for finding jobs abroad?",
    answer: "Our abroad job services include professional resume and CV tailoring for international markets, cover letter writing, interview coaching with common international questions, and connecting you with our network of partner employers in various countries."
  },
  {
    question: "Which countries are the most popular destinations right now?",
    answer: "Popular destinations for both studying and working include Canada, the United Kingdom, Australia, Germany, and the United States. Each country has unique advantages, and our AI Advisor and human counselors can help you decide which is the best fit for your career goals."
  }
];

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-brand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Frequently Asked Questions</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Have questions? We have answers. Here are some of the most common inquiries we receive.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 className="text-lg font-semibold text-brand-blue">{item.question}</h3>
                                    <ChevronDownIcon className={openIndex === index ? 'rotate-180 text-brand-teal' : 'text-gray-500'} />
                                </button>
                                <div 
                                    id={`faq-answer-${index}`}
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-600">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
