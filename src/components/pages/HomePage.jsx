import React from 'react';

export default function HomePage({ onOpenQuote, onOpenApply }) {
  return (
    <main className="flex-grow w-full relative">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[640px] flex items-center bg-surface-container-low organic-texture border-b border-outline-variant overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-multiply" 
            style={{ 
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLa2jt6asF35CHVUuQo7kxoSU5Q9rZi86x3jb98iF0ZCL4KSbxmoHgTdnjQlQUu_eyg9l-vn7najbiNYckC8JMmD0I2hyfKCOH_xXX1Ux2l6PdvIGM-GrX6hvAMqkupxkg5n99XbE1oghgUGTk7j6N1J8QD_nzvXifmiSneToW0YZfd2ZocJdbD9sby71OYLZfmGpXBqNLewkX37B1AseSBuZg1ehcytLbl_Cjpinw1_dvit5mdsJQJQ')` 
            }}
          />
          {/* Soft Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-surface-container-lowest via-surface-container-lowest/80 to-transparent" />
        </div>

        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 flex flex-col gap-6 py-16 md:py-20">
            <span className="font-semibold text-[11px] text-primary uppercase tracking-[0.12em] bg-primary-container w-max px-4 py-2 rounded-full">
              B2B Trade Manufacturing
            </span>

            <h1 className="font-['Literata'] text-[28px] md:text-[40px] leading-[1.2] font-bold text-on-surface max-w-3xl tracking-tight">
              Save time and increase your margins. The perfect flat pack partner for installers.
            </h1>

            <p className="text-[17px] leading-[1.65] text-on-surface-variant max-w-2xl border-l-4 border-primary pl-5 font-normal">
              100% custom cabinetry and cut-to-size services manufactured locally in QLD. Precision cut to the millimeter (mm) with no size limitations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={onOpenApply}
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-white text-[12px] font-bold px-7 py-3.5 rounded-full hover:bg-secondary transition-all duration-200 uppercase tracking-widest shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">engineering</span>
                Open Trade Account
              </button>

              <button 
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 bg-surface-container-lowest text-primary text-[12px] font-bold px-7 py-3.5 rounded-full hover:bg-primary-container transition-all duration-200 uppercase tracking-widest shadow-sm border-2 border-primary"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                Order via Cabinetry Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits (Bento Grid Style) */}
      <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Benefit 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-7 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary-container flex items-center justify-center rounded-bl-3xl transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[32px] text-primary" data-icon="calculate">calculate</span>
            </div>
            <h3 className="font-['Literata'] text-[22px] font-semibold text-on-surface mt-8 leading-tight">24/7 Real-time Quoting</h3>
            <p className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold">Real-time Quoting via Cabinetry Online</p>
            <div className="mt-auto pt-4 border-t border-surface-variant">
              <p className="text-[15px] leading-relaxed text-on-surface-variant">Instant pricing generation with exact dimensional inputs. No waiting for manual quotes.</p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-7 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary-container flex items-center justify-center rounded-bl-3xl transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[32px] text-primary" data-icon="architecture">architecture</span>
            </div>
            <h3 className="font-['Literata'] text-[22px] font-semibold text-on-surface mt-8 leading-tight">100% Custom Cut-to-size</h3>
            <p className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold">100% Customise Cut-to-size</p>
            <div className="mt-auto pt-4 border-t border-surface-variant">
              <p className="text-[15px] leading-relaxed text-on-surface-variant">Precision CNC routing to the millimeter. Custom drills, rebates, and edge banding standard.</p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-7 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary-container flex items-center justify-center rounded-bl-3xl transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[32px] text-primary" data-icon="local_shipping">local_shipping</span>
            </div>
            <h3 className="font-['Literata'] text-[22px] font-semibold text-on-surface mt-8 leading-tight">Local QLD Pickup &amp; Delivery</h3>
            <p className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold">Local QLD Production &amp; Delivery</p>
            <div className="mt-auto pt-4 border-t border-surface-variant">
              <p className="text-[15px] leading-relaxed text-on-surface-variant">Manufactured locally in Queensland for rapid turnaround. Reliable site delivery or warehouse pickup.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Integration Banner */}
      <section className="bg-secondary text-on-secondary py-16 md:py-20 rounded-t-[3rem]">
        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 text-primary-container text-[11px] font-bold uppercase tracking-[0.1em] mb-1 bg-on-secondary/10 w-max px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-[16px]">api</span>
              Platform Integration
            </div>

            <h2 className="font-['Literata'] text-[26px] md:text-[34px] font-bold text-on-secondary leading-[1.2]">
              Powered by Cabinetry Online
            </h2>

            <p className="text-[17px] leading-[1.65] text-secondary-container">
              Our production floor is directly integrated with Cabinetry Online. Submit your custom dimensions 24/7, get instant pricing, and send jobs straight to our CNC machines. Speed and accuracy for serious builders.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2 text-[14px] text-on-secondary bg-on-secondary/5 p-5 rounded-xl">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                <span>Zero Data Entry Errors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                <span>Live Order Tracking</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                <span>Direct to CNC Routing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                <span>Automated Cut Lists</span>
              </div>
            </div>
          </div>

          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg bg-surface">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center" 
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAe-6DSVzfBMNYognVJ04xeaSDIEwkQhHunheTXO618AXotqvzmyOWYgWuSOcVXpPe_fIWA5ZqxLdt1atotydjSlgn-T-lI_JIsN2SrkDaufyR5jHFIL3GDbqUt56HJ5Qd83H-JT5dOgBrgJiqvVezyps2oGUVHv1zHYytAUL9Udz5gmPzbHixGoO1kYoD_k3307C2VI-XufUxrTQ6WkovnU0ca9ESC36o5RUV10uLxsfYpvBcg25iXew')` 
              }}
            />
          </div>

        </div>
      </section>

      {/* Trusted Suppliers & Partners Section */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant py-16 md:py-20">
        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-semibold text-[11px] text-primary uppercase tracking-[0.12em] bg-primary-container px-4 py-2 rounded-full inline-block mb-3">
              Industry Partnerships
            </span>
            <h2 className="font-['Literata'] text-[26px] md:text-[34px] font-bold text-on-surface mb-3 leading-tight">
              Proudly Supported by Leading Australian Suppliers
            </h2>
            <p className="text-[16px] text-on-surface-variant leading-relaxed">
              We exclusively manufacture using premium boards, laminates, and hardware from industry-leading brands.
            </p>
          </div>

          {/* Supplier Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            
            {/* Polytec */}
            <div className="bg-white border border-outline-variant rounded-2xl p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <img 
                src="/logos/polytec.jpg" 
                alt="Polytec" 
                className="max-h-16 w-auto object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Laminex */}
            <div className="bg-white border border-outline-variant rounded-2xl p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <img 
                src="/logos/laminex.jpg" 
                alt="Laminex" 
                className="max-h-16 w-auto object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Blum */}
            <div className="bg-white border border-outline-variant rounded-2xl p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <img 
                src="/logos/blum.jpg" 
                alt="Blum Hardware" 
                className="max-h-14 w-auto object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Flexi Panel */}
            <div className="bg-white border border-outline-variant rounded-2xl p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
              <img 
                src="/logos/flexi-panel.jpg" 
                alt="Flexi Panel" 
                className="max-h-16 w-auto object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>

          </div>

          <div className="mt-8 text-center">
            <span className="text-[13px] text-on-surface-variant/80 font-medium">
              Have specific material requirements? We can source custom finishes from all major suppliers.
            </span>
          </div>

        </div>
      </section>

    </main>
  );
}
