import React from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

const pdfUrl = "https://stockwellgoldgallery.s3.us-west-2.amazonaws.com/QUALIFI-Level-3-Diploma-in-Health-and-Social-Care-SpecificationJune2025v2.p_20251019_141348_0000.pdf";

const specificationsData = [
    { label: 'Qualification title', value: 'Qualifi Level 3 Diploma in Health and Social Care' },
    { label: 'Qualification type', value: 'Vocational Related Qualification' },
    { label: 'Level', value: '3' },
    { label: 'Accreditation status', value: 'Accredited' },
    { label: 'TQT', value: '600' },
    { label: 'Credit Equivalency', value: '60' },
    { label: 'Qualification number (RQF)', value: '603/0819/9' },
    { label: 'Progression routes', value: 'Qualifi, Level 4 Certificate or first of 3 year Honours Degree at UK University' },
    { label: 'Availability', value: 'UK and International' },
    { label: 'Centre Specification', value: <a href={pdfUrl} download className="text-brand-teal font-semibold hover:underline">Click here to download</a> },
];

const mandatoryUnits = [
    'An Introduction to Health and Social Care',
    'Communication for Health and Social Care',
    'Promoting Health in the Population',
    'Person-Centered Care',
];

const optionalUnits = [
    'Understanding Diabetes Care',
    'Understanding Stroke Care',
    'Understanding Dementia Care',
];

const OpportunityDetail: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <a href="/#" className="text-brand-blue hover:text-brand-teal font-semibold transition-colors duration-300 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Back to Home
                    </a>
                </div>

                <header>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue leading-tight">
                        Qualifi Level 3 Diploma in Health and Social Care
                    </h1>
                    <div className="mt-3 inline-block text-white px-4 py-2 rounded-md" style={{ backgroundColor: '#B94A48' }}>
                        <p className="font-semibold text-sm">Qualification number (RQF):</p>
                        <p className="font-bold text-lg">603/0819/9</p>
                    </div>
                </header>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div id="specifications">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4 border-b-2 border-brand-light pb-2">Specifications</h2>
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                {specificationsData.map((item, index) => (
                                    <div key={index} className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <div className="font-semibold text-gray-700 md:col-span-1">{item.label}</div>
                                        <div className="text-gray-800 md:col-span-2">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="overview">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4 border-b-2 border-brand-light pb-2">Qualification Overview</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The Qualification has been created to develop and reward the health and social care workers of today and the future, and to continue to bring recognition and professionalism to the health and social care sector. The rationale of the programme is to provide a career path for learners who wish to develop their care capabilities within the health and social care sector.
                            </p>
                        </div>
                        
                        <div id="units">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4 border-b-2 border-brand-light pb-2">Units</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Mandatory</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {mandatoryUnits.map(unit => <li key={unit}>{unit}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Optional</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {optionalUnits.map(unit => <li key={unit}>{unit}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                         <div id="outcomes">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4 border-b-2 border-brand-light pb-2">Outcomes</h2>
                            <p className="text-gray-700">Detailed learning outcomes will be provided upon inquiry.</p>
                        </div>

                         <div id="requirements">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4 border-b-2 border-brand-light pb-2">Requirements</h2>
                            <p className="text-gray-700">Please contact us for specific entry requirements for this qualification.</p>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                             <a 
                                href={pdfUrl} 
                                download 
                                className="inline-flex items-center justify-center bg-brand-teal text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue transition-all shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal"
                            >
                                <DownloadIcon />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    {/* Sticky Navigation Card */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-xl font-bold text-brand-blue">Qualifi Level 3 Diploma in Health and Social Care</h3>
                            <nav className="mt-4 border-t border-gray-200">
                                <ul className="divide-y divide-gray-200">
                                    {['Specifications', 'Overview', 'Units', 'Outcomes', 'Requirements'].map(item => (
                                        <li key={item}>
                                            <a href={`#${item.toLowerCase()}`} className="block py-3 text-gray-600 hover:text-brand-teal font-medium transition-colors">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default OpportunityDetail;