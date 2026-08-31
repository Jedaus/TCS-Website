import React, { useState } from 'react';

export default function ContactFaqPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [jobQuery, setJobQuery] = useState({ name: '', phone: '', jobNumber: '', notes: '' });

  return (
    <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      
      {/* Header Section */}
      <header className="lg:col-span-12 mb-2">
        <p className="text-[11px] font-bold text-primary tracking-[0.12em] uppercase mb-3">
          Support &amp; Information
        </p>
        <h1 className="font-['Literata'] text-[28px] md:text-[40px] font-bold text-primary mb-4 leading-tight">
          Contact &amp; FAQ
        </h1>
        <p className="text-[17px] leading-[1.65] text-on-surface-variant max-w-3xl">
          Get in touch with our QLD factory for trade support, or find quick answers to common questions regarding orders, materials, and lead times.
        </p>
      </header>

      {/* Contact Info Panel */}
      <section className="lg:col-span-5 flex flex-col gap-5">
        <div className="bg-surface-container-lowest border border-outline-variant p-7 rounded-2xl shadow-sm">
          <h2 className="font-['Literata'] text-[22px] font-semibold text-primary mb-5 border-b border-outline-variant pb-4">
            Contact Details
          </h2>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-0.5">call</span>
              <div>
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-1">Phone</p>
                <a className="text-[16px] font-bold text-primary hover:underline" href="tel:0732991978">
                  (07) 3299 1978
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-0.5">mail</span>
              <div>
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-1">Email</p>
                <a className="text-[16px] font-bold text-primary hover:underline" href="mailto:totalcabinetsupplies@gmail.com">
                  totalcabinetsupplies@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-0.5">location_on</span>
              <div>
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-1">QLD Factory Address</p>
                <p className="text-[16px] font-bold text-primary">68 Compton Rd, Woodridge QLD</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary mt-0.5">schedule</span>
              <div>
                <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.1em] mb-1">Trading Hours</p>
                <p className="text-[16px] font-bold text-primary">Trading Hours: Mon-Fri 7am–4pm</p>
              </div>
            </li>
          </ul>
          <div className="mt-7 pt-6 border-t border-outline-variant">
            <button 
              onClick={() => setSupportModalOpen(true)}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-white text-[13px] font-bold px-6 py-4 rounded-xl hover:bg-secondary transition-all duration-200 shadow-md uppercase tracking-wider"
            >
              <span className="material-symbols-outlined">support_agent</span>
              Contact Trade Support
            </button>
          </div>
        </div>

        {/* Map Module */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm h-64 relative group">
          <img 
            alt="Map of 68 Compton Rd, Woodridge QLD" 
            className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqmybquinrsqZu78Hcv0aNm1pvIbXF1lCBFaxSE28OT5cG-yvCX78ckiK2CeG6-EquQJ3z4wmRCZd28_PdXWNuLtzp7brVBsb0xA4qUw6NCe_niub9VBgqrrt9PfnBtizcQrS3kHkEOYi_3ICiSexYZvUVUB571qZIXFmWulYnGbg6-GJBKsgKJ4pBFDccXRHyC76IvzjJEw78K1F3aUu9HdYc4ZxjfR9rjAbQgVGnG9Ta47_lXqI-Wg"
          />
          <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 bg-white border border-outline-variant px-3 py-2 rounded-xl shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[18px]">storefront</span>
            <span className="text-[12px] font-bold text-primary">Total Cabinet Supplies</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="lg:col-span-7">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant bg-surface-bright">
            <h2 className="font-['Literata'] text-[22px] font-semibold text-primary flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">quiz</span>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col">
            
            {/* Item 1 */}
            <details className="group border-b border-outline-variant" open>
              <summary className="flex justify-between items-center text-[15px] font-bold cursor-pointer list-none px-6 py-5 text-primary hover:bg-surface-container-low transition-colors">
                <span>Can the general public place an order?</span>
                <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-outline flex-shrink-0 ml-3">expand_more</span>
              </summary>
              <div className="text-[15px] leading-relaxed text-on-surface-variant px-6 pb-6">
                This is a B2B only service. We supply cabinets and materials exclusively for professional carpenters, builders, and trade-related businesses.
              </div>
            </details>

            {/* Item 2 */}
            <details className="group border-b border-outline-variant">
              <summary className="flex justify-between items-center text-[15px] font-bold cursor-pointer list-none px-6 py-5 text-primary hover:bg-surface-container-low transition-colors">
                <span>What is the turnaround time?</span>
                <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-outline flex-shrink-0 ml-3">expand_more</span>
              </summary>
              <div className="text-[15px] leading-relaxed text-on-surface-variant px-6 pb-6">
                For standard products, it takes 3-5 business days after order confirmation. For custom sizes or special finishes, it may take 7-10 business days. An exact schedule will be provided during quotation.
              </div>
            </details>

            {/* Item 3 */}
            <details className="group border-b border-outline-variant">
              <summary className="flex justify-between items-center text-[15px] font-bold cursor-pointer list-none px-6 py-5 text-primary hover:bg-surface-container-low transition-colors">
                <span>Can I get a quote for custom sizes without additional fees?</span>
                <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-outline flex-shrink-0 ml-3">expand_more</span>
              </summary>
              <div className="text-[15px] leading-relaxed text-on-surface-variant px-6 pb-6">
                Yes, our CNC machining system supports custom sizes down to the millimeter. Quotes are based on the board area used, so no unreasonable setup fees will be incurred.
              </div>
            </details>

            {/* Item 4 */}
            <details className="group">
              <summary className="flex justify-between items-center text-[15px] font-bold cursor-pointer list-none px-6 py-5 text-primary hover:bg-surface-container-low transition-colors">
                <span>What board materials can I choose from?</span>
                <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180 text-outline flex-shrink-0 ml-3">expand_more</span>
              </summary>
              <div className="text-[15px] leading-relaxed text-on-surface-variant px-6 pb-6">
                We handle high-quality HMR particleboard, MDF, and plywood from major Australian brands like Laminex and polytec. You can select from our full color and finish library when requesting a quote.
              </div>
            </details>

          </div>
        </div>

        {/* Help Banner */}
        <div className="mt-5 bg-tertiary-container/30 border border-tertiary-container p-6 rounded-2xl flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[16px] font-bold text-tertiary mb-1">Need help with a specific order?</h3>
            <p className="text-[14px] leading-relaxed text-on-surface-variant">Have your Job Number ready when contacting support.</p>
          </div>
          <div className="hidden sm:block flex-shrink-0">
            <span className="material-symbols-outlined text-tertiary text-4xl">build</span>
          </div>
        </div>
      </section>

      {/* Support Direct Modal */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-7 border border-outline-variant shadow-xl">
            <h3 className="font-['Literata'] text-[22px] font-bold text-primary mb-1">Trade Support Desk</h3>
            <p className="text-[13px] text-on-surface-variant mb-6">
              Direct dispatch inquiry to 68 Compton Rd, Woodridge QLD
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                <div className="text-[17px] font-bold text-primary">Inquiry Dispatched</div>
                <p className="text-[14px] text-on-surface-variant">Our trade estimators will respond shortly.</p>
                <button 
                  onClick={() => { setSubmitted(false); setSupportModalOpen(false); }}
                  className="mt-4 inline-flex items-center gap-2 px-7 py-3 bg-primary text-white text-[12px] font-bold rounded-full uppercase tracking-widest hover:bg-secondary transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name / Trade Entity" 
                  value={jobQuery.name} 
                  onChange={(e) => setJobQuery({...jobQuery, name: e.target.value})}
                  className="w-full border border-outline-variant p-3.5 rounded-xl text-[15px] bg-surface focus:outline-none focus:border-primary transition-colors"
                />
                <input 
                  type="tel" 
                  required 
                  placeholder="Contact Phone" 
                  value={jobQuery.phone} 
                  onChange={(e) => setJobQuery({...jobQuery, phone: e.target.value})}
                  className="w-full border border-outline-variant p-3.5 rounded-xl text-[15px] bg-surface focus:outline-none focus:border-primary transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Job Number (e.g. TCS-4892)" 
                  value={jobQuery.jobNumber} 
                  onChange={(e) => setJobQuery({...jobQuery, jobNumber: e.target.value})}
                  className="w-full border border-outline-variant p-3.5 rounded-xl text-[15px] font-mono bg-surface focus:outline-none focus:border-primary transition-colors"
                />
                <textarea 
                  rows="3" 
                  required 
                  placeholder="Describe your inquiry or order amendment..." 
                  value={jobQuery.notes} 
                  onChange={(e) => setJobQuery({...jobQuery, notes: e.target.value})}
                  className="w-full border border-outline-variant p-3.5 rounded-xl text-[15px] bg-surface resize-none focus:outline-none focus:border-primary transition-colors"
                />
                <div className="flex justify-end gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={() => setSupportModalOpen(false)}
                    className="px-5 py-2.5 text-[13px] font-bold text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-primary hover:bg-secondary text-white text-[12px] font-bold uppercase tracking-widest rounded-full shadow-md transition-all"
                  >
                    Send to Factory
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
