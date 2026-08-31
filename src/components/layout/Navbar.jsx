import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenLogin, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'builders', label: 'Builders Advantage' },
    { id: 'services', label: 'Services' },
    { id: 'how-to-order', label: 'How to Order' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-surface-container-lowest sticky top-0 w-full z-50 border-b border-outline-variant shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-10 h-20 w-full max-w-screen-2xl mx-auto">
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => handleNav('home')}
            className="hover:opacity-80 transition-opacity flex items-center flex-shrink-0"
          >
            <img 
              alt="TCS QLD Logo" 
              className="h-12 w-auto object-contain mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaompCdV-ZnrmVUl-rld5-KTTC3Imfc6w7wVhFzNt_jr-hDML2IX2db3aVi8jn7R7DuS_IGDdwNfAgKGPPduor5HGkkI_-HEv7tOoB3HKbKQL1ZfyV-HW6jwfdFB7nnRadkOwrXlgjRMbTs7Nk1t6GXWKRTgGN3fY2Tb6l4pXDMj2t0f36fFDUFe33EPB2mMCB3IS9BkOR967ibK4hgU8frzSPYrsb5iBv9Bo8qZD-FqIcCdN0bKtMzlVNqLQmgFaicQk"
            />
          </button>

          <nav className="hidden md:flex items-center gap-1 h-full">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`h-20 flex items-center px-4 text-[14px] font-semibold tracking-wide transition-all duration-200 border-b-2 ${
                    isActive 
                      ? 'text-primary border-primary bg-primary/5' 
                      : 'text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low hover:border-primary/30'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center bg-transparent border-2 border-primary text-primary text-[12px] font-bold px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200 uppercase tracking-widest"
          >
            Trade Login
          </button>

          <button 
            onClick={onOpenQuote}
            className="inline-flex items-center bg-primary text-white text-[12px] font-bold px-5 py-2.5 rounded-full hover:bg-secondary transition-all duration-200 uppercase tracking-widest shadow-md"
          >
            Start Quote
          </button>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary p-2 ml-1"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-5 py-5 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left py-3 px-4 rounded-xl text-[14px] font-semibold transition-colors ${
                activePage === link.id
                  ? 'bg-primary-container text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 mt-3 border-t border-outline-variant flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileOpen(false); onOpenLogin(); }}
              className="w-full py-3 border-2 border-primary text-primary rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              Trade Login
            </button>
            <button
              onClick={() => { setMobileOpen(false); onOpenQuote(); }}
              className="w-full py-3 bg-primary text-white rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-secondary transition-all"
            >
              Start Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
