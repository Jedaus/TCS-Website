import React from 'react';

export default function BuildersAdvantagePage({ onOpenApply, onOpenQuote }) {
  return (
    <main className="flex-grow">
      
      {/* Hero Section */}
      <section className="relative bg-surface w-full py-16 md:py-24 px-6 md:px-10 border-b border-outline-variant overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
          
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block bg-primary text-white text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-2 rounded-xl shadow-sm">
              B2B Manufacturing Partner
            </div>
            
            <h1 className="font-['Literata'] text-[28px] md:text-[40px] leading-[1.2] font-bold text-primary tracking-tight">
              Rooted in Precision and Reliability
            </h1>

            <p className="text-[17px] leading-[1.65] text-on-surface-variant max-w-xl">
              Designed for the high-stakes environment of B2B manufacturing and trade supply. We provide sustainable utility, speed, and accuracy to ensure your projects are delivered on time, to spec, and grow with your business.
            </p>

            <div className="pt-2">
              <button 
                onClick={onOpenApply}
                className="inline-flex items-center gap-2.5 bg-tertiary text-white text-[12px] font-bold px-7 py-3.5 rounded-xl uppercase tracking-widest hover:bg-[#2d5158] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined">business_center</span>
                Apply for Trade Pricing
              </button>
            </div>
          </div>

          {/* Bento Style Hero Graphic */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-surface-container-highest rounded-full blur-3xl opacity-50 z-0"></div>
            
            {/* Batch Status */}
            <div className="col-span-2 bg-white border border-outline-variant p-5 shadow-sm rounded-xl relative z-10 flex items-center gap-5">
              <div className="w-16 h-16 bg-primary rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-4xl">straighten</span>
              </div>
              <div>
                <div className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold mb-1">Current Batch Status</div>
                <div className="text-[14px] font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span> In Production
                </div>
                <div className="text-[12px] text-outline mt-1">Batch #4892-B</div>
              </div>
            </div>

            {/* Daily Parts */}
            <div className="bg-white border border-outline-variant p-5 shadow-sm rounded-xl relative z-10 flex flex-col items-center justify-center text-center gap-1">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">inventory_2</span>
              <div className="text-[26px] font-bold text-on-surface leading-none">10k+</div>
              <div className="text-[11px] text-outline uppercase tracking-[0.1em] font-semibold">Parts Cut Daily</div>
            </div>

            {/* Tolerance */}
            <div className="bg-primary text-white border border-outline-variant p-5 shadow-sm rounded-xl relative z-10">
              <div className="text-[11px] uppercase tracking-[0.1em] font-bold mb-3 opacity-80">Factory Precision</div>
              <div className="w-full h-2 bg-primary-container/40 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-tertiary-fixed-dim w-11/12 rounded-full"></div>
              </div>
              <div className="text-[13px] flex justify-between mt-1">
                <span>Tolerance</span>
                <span className="font-bold">±0.5mm</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-surface-bright border-b border-outline-variant">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <h2 className="font-['Literata'] text-[26px] md:text-[32px] font-semibold text-primary mb-3">Industrial Grade Benefits</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Feature 1 */}
            <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container rounded-xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-sm">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-on-surface mb-1.5">Trade Pricing</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">Maximize business margins with wholesale pricing exclusive to industry professionals.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container rounded-xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-sm">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-on-surface mb-1.5">Time Saving</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">Real-time online ordering system with zero wait time.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container rounded-xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-sm">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-on-surface mb-1.5">Precision</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">Flawless cut-to-size and edgebanding using state-of-the-art equipment.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all group flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 bg-surface-container rounded-xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-sm">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-on-surface mb-1.5">Local Support</h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">Fast response times and guaranteed delivery from our local QLD factory.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12 text-center flex flex-col items-center">
            <h2 className="font-['Literata'] text-[26px] md:text-[32px] font-semibold text-primary mb-3">How it works for Builders</h2>
            <div className="w-16 h-1 bg-tertiary rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-white border border-outline-variant rounded-xl p-5 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center text-[13px] font-bold shadow-md">1</div>
                <div className="text-center pt-4">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl mb-3 mx-auto block">person_add</span>
                  <h4 className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold mb-1">Step 1</h4>
                  <div className="text-[15px] font-bold text-on-surface">Apply for Account</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-outline-variant rounded-xl p-5 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center text-[13px] font-bold shadow-md">2</div>
                <div className="text-center pt-4">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl mb-3 mx-auto block">price_check</span>
                  <h4 className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold mb-1">Step 2</h4>
                  <div className="text-[15px] font-bold text-on-surface">Get Trade Pricing</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-outline-variant rounded-xl p-5 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center text-[13px] font-bold shadow-md">3</div>
                <div className="text-center pt-4">
                  <span className="material-symbols-outlined text-on-surface-variant text-3xl mb-3 mx-auto block">laptop_mac</span>
                  <h4 className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold mb-1">Step 3</h4>
                  <div className="text-[15px] font-bold text-on-surface">Quote &amp; Order Online</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white border-2 border-tertiary rounded-xl p-5 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-tertiary rounded-full text-white flex items-center justify-center text-[13px] font-bold shadow-md">4</div>
                <div className="text-center pt-4">
                  <span className="material-symbols-outlined text-tertiary text-3xl mb-3 mx-auto block">handyman</span>
                  <h4 className="text-[11px] text-primary uppercase tracking-[0.1em] font-bold mb-1">Step 4</h4>
                  <div className="text-[15px] font-bold text-on-surface">Pickup &amp; Install</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Pre-amble */}
      <section className="bg-primary text-on-primary py-16 md:py-20 px-6 md:px-10 text-center border-t border-outline-variant">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="font-['Literata'] text-[26px] md:text-[32px] font-bold text-white">Ready to streamline your workflow?</h2>
          <p className="text-[16px] leading-relaxed text-on-primary-container">
            Join hundreds of builders maximizing their margins with our precision factory output.
          </p>
          <div className="pt-2">
            <button 
              onClick={onOpenApply}
              className="inline-flex items-center gap-2.5 bg-tertiary text-white text-[12px] font-bold px-8 py-4 rounded-xl uppercase tracking-widest hover:bg-white hover:text-tertiary transition-all duration-200 shadow-md"
            >
              Apply for Trade Pricing
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
