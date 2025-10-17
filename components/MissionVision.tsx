import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { EyeIcon } from './icons/EyeIcon';
import Card from './ui/Card';

const missionVisionData = [
  {
    icon: <TargetIcon />,
    title: 'Our Mission',
    description: 'To empower students and professionals to achieve their global academic and career aspirations by providing expert, personalized, and ethical guidance.',
  },
  {
    icon: <EyeIcon />,
    title: 'Our Vision',
    description: 'To be the most trusted and respected international education and career consultancy, renowned for creating life-changing opportunities and fostering global citizenship.',
  },
];

const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Our Mission & Vision</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our guiding principles that drive us forward.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVisionData.map((item, index) => (
            <Card key={index} className="text-center p-8 border border-gray-200 shadow-xl hover:translate-y-0 hover:shadow-xl">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
