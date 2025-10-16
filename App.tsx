import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;