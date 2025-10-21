import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AdBanner from './components/AdBanner';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import OpportunityDetail from './components/OpportunityDetail';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/opportunity/')) {
      // For now, it always renders the same detail page.
      // This could be expanded to use the slug from the route.
      return <OpportunityDetail />;
    }
    
    // Default main page content
    return (
      <>
        <Hero />
        <AdBanner />
        <About />
        <MissionVision />
        <Services />
        <Events />
        <ContactUs />
      </>
    );
  };

  return (
    <div className="bg-brand-light min-h-screen text-gray-800">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;