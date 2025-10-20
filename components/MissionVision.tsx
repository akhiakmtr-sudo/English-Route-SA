import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { EyeIcon } from './icons/EyeIcon';
import Card from './ui/Card';

const missionVisionData: { icon: React.ReactNode; title: string; description: React.ReactNode }[] = [
  {
    icon: <TargetIcon />,
    title: 'Our Mission',
    description: (
      <div className="text-left md:text-center">
        <p className="mb-4">To guide dreamers toward their destination through:</p>
        <ul className="space-y-3 inline-block text-left">
          <li>
            <strong className="text-brand-blue">Personalized pathways</strong>
            <span className="ml-1">— helping each student find the right course, country, and university that fits their goals.</span>
          </li>
          <li>
            <strong className="text-brand-blue">Trusted guidance</strong>
            <span className="ml-1">— making the study abroad process simple, transparent, and stress-free.</span>
          </li>
          <li>
            <strong className="text-brand-blue">Global connections</strong>
            <span className="ml-1">— bridging students with world-class institutions and endless possibilities.</span>
          </li>
        </ul>
        <p className="mt-6 italic">
          Because at English Route Study Abroad, we don’t just prepare students for education abroad — we prepare them for life beyond it.
        </p>
      </div>
    ),
  },
  {
    icon: <EyeIcon />,
    title: 'Our Vision',
    description: (
      <>
        <p className="text-xl italic text-brand-blue font-semibold mb-3">The World, Your Campus</p>
        <p>To empower students to become confident global achievers by unlocking education opportunities across borders. We aim to redefine abroad education — not just as a journey to study overseas, but as a transformation toward knowledge, independence, and global impact.</p>
      </>
    ),
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
            <Card key={index} className="text-center p-8 border border-gray-200 shadow-xl hover:translate-y-0 hover:shadow-xl flex flex-col">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">{item.title}</h3>
              <div className="text-gray-600 flex-grow">{item.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;