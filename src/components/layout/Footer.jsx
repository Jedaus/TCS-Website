import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-surface-container-high w-full pt-10 pb-6 border-t border-outline-variant font-body-md text-body-md mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-10 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-3">
          <img 
            alt="TCS QLD Logo" 
            className="h-10 w-auto object-contain object-left mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6-qTatiwaQ6cfLIQ-E787KoqMWVvBjdmSnTS1Hdmcytf2UJMk9YMq14xwwPGoIFyoW4eEPhRsJgzmwx4lwJFMEAySWSUU1SYa_T7WjybYDlGqH0LwcmF87e2wmyO_dE5y04TQYFjmRtF5MePWXKrcT4z-gI4kqM5wZ3rUeTTM5sgkMoQjG_jenNlrBMd0sjy6KILX5uLvnSbck4oXWQHNzXcha9UmA1b_qbw5zWR5WwMX0-rIFINsd6xpVik4Gez6LhM"
          />
          <p className="text-[14px] leading-relaxed text-on-surface-variant mt-2">
            © 2024 Custom Cabinetry QLD.<br />All Rights Reserved.<br />ABN: 12 345 678 901
          </p>
        </div>

        <div className="flex flex-col gap-3 text-[14px] text-on-surface-variant">
          <p className="text-[11px] font-bold text-on-surface uppercase tracking-[0.1em] mb-1">Location</p>
          <button 
            onClick={() => onNavigate && onNavigate('contact')} 
            className="hover:text-primary transition-colors text-left"
          >
            QLD Factory: 68 Compton Rd, Woodridge QLD
          </button>
          <span className="text-on-surface-variant">Trading Hours: Mon-Fri 7am–4pm</span>
        </div>

        <div className="flex flex-col gap-3 text-[14px] text-on-surface-variant">
          <p className="text-[11px] font-bold text-on-surface uppercase tracking-[0.1em] mb-1">Contact</p>
          <a href="tel:0732991978" className="hover:text-primary transition-colors">Trade Contact: (07) 3299 1978</a>
          <a href="mailto:totalcabinetsupplies@gmail.com" className="hover:text-primary transition-colors">totalcabinetsupplies@gmail.com</a>
        </div>

        <div className="flex flex-col gap-3 text-[14px] text-on-surface-variant">
          <p className="text-[11px] font-bold text-on-surface uppercase tracking-[0.1em] mb-1">Legal</p>
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
