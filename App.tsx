import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Events />
        <ContactUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;