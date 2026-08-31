import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import BuildersAdvantagePage from './components/pages/BuildersAdvantagePage';
import ServicesPage from './components/pages/PrecisionServicesPage';
import HowToOrderPage from './components/pages/HowToOrderPage';
import ContactFaqPage from './components/pages/ContactFaqPage';
import TradeLoginModal from './components/modals/TradeLoginModal';
import TradeAccountModal from './components/modals/TradeAccountModal';
import QuickQuoteModal from './components/modals/QuickQuoteModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body antialiased selection:bg-primary selection:text-on-primary">
      
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Routed Content */}
      <div className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onOpenQuote={() => setIsQuoteOpen(true)}
            onOpenApply={() => setIsApplyOpen(true)}
            onNavigate={(page) => setActivePage(page)}
          />
        )}

        {activePage === 'builders' && (
          <BuildersAdvantagePage
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenQuote={() => setIsQuoteOpen(true)}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {activePage === 'how-to-order' && (
          <HowToOrderPage
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <ContactFaqPage />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={(page) => setActivePage(page)} />

      {/* Interactive Modals */}
      <TradeLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenApply={() => {
          setIsLoginOpen(false);
          setIsApplyOpen(true);
        }}
      />

      <TradeAccountModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

    </div>
  );
}
