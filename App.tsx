import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;