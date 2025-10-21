import React from 'react';

const AdBanner: React.FC = () => {
  const adImageUrl = 'https://i.postimg.cc/15QqZ0JY/Black-White-Gradient-Digital-Marketing-Instagram-Post-20251021-033331-0000.jpg';
  const adLink = 'https://wa.me/971589076061';

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
            <a 
                href={adLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                aria-label="Advertisement for studying and working in the UK, click to apply on WhatsApp"
            >
                <img
                    src={adImageUrl}
                    alt="Study and work in the UK promotion. Details: Get your visa in 14 days, No IELTS required, No advance payment, Age limit 18 to 55, cost is only £6000."
                    className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1"
                />
            </a>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
