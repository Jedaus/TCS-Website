import React from 'react';
import { ExternalLink, Download, ShieldCheck, Check } from 'lucide-react';

export default function MaterialsPage() {
  const materials = [
    {
      brand: 'POLYTEC',
      name: 'Ravine Woodgrain',
      thickness: '16mm / 18mm',
      desc: 'Textured woodgrain finish offering durability and a premium natural look for commercial and residential architectural applications.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    },
    {
      brand: 'LAMINEX',
      name: 'AbsoluteMatte',
      thickness: '18mm',
      desc: 'Fingerprint-resistant, super-matte finish providing a contemporary, low-maintenance surface for high-traffic kitchens and vanities.',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80'
    },
    {
      brand: 'POLYTEC',
      name: 'Venette Metallic',
      thickness: '16mm',
      desc: 'A sophisticated metallic-infused melamine that delivers a robust, industrial aesthetic with commercial-grade resilience.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-16 pb-20 bg-surface">
      
      {/* Hero Header */}
      <section className="bg-primary text-white py-16 px-margin-mobile md:px-margin-desktop border-b border-primary-container">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-block bg-accent-gold/20 text-accent-gold font-mono text-xs uppercase px-3 py-1 rounded border border-accent-gold/30 mb-3 font-bold">
            Curated Finishes & European Mechanics
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-black tracking-tight">
            Premium Materials & Hardware
          </h1>
          <p className="text-sm sm:text-base text-charcoal-200 max-w-3xl mt-3 leading-relaxed">
            Explore our curated selection of industry-leading finishes and precision hardware, sourced from trusted Australian and European partners for uncompromising structural integrity.
          </p>
        </div>
      </section>

      {/* Surface Finishes Gallery */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-headline font-extrabold text-primary uppercase">
            Surface Finishes
          </h2>
          <div className="h-px bg-surface-border flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((mat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-surface-border rounded-lg overflow-hidden group hover:border-primary/60 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div 
                  className="w-full h-48 bg-cover bg-center border-b border-surface-border group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${mat.image}')` }}
                />
                <div className="p-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
                    {mat.brand}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-primary mb-2">
                    {mat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {mat.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-surface-border flex items-center justify-between font-mono text-xs">
                  <span className="bg-surface-low text-primary px-2.5 py-1 rounded font-bold border border-surface-border">
                    {mat.thickness}
                  </span>
                  <span className="text-accent-gold flex items-center gap-1 font-bold">
                    Specs <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware Specs: Blum & Hettich */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-headline font-extrabold text-primary uppercase">
            Hardware & Mechanics
          </h2>
          <div className="h-px bg-surface-border flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Blum Specs */}
          <div className="bg-white border border-surface-border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary p-4 border-b border-primary-container flex items-center justify-between">
              <h3 className="font-headline font-bold text-lg text-white">Blum LEGRABOX</h3>
              <span className="text-xs font-mono text-accent-gold uppercase font-bold">Austria</span>
            </div>
            <div className="p-6">
              <p className="text-xs sm:text-sm text-charcoal-600 mb-6 font-sans">
                Elegant box system with slim design and outstanding running characteristics for the highest architectural demands.
              </p>
              <table className="w-full text-left font-mono text-xs border border-surface-border rounded">
                <thead className="bg-surface-low border-b border-surface-border text-primary font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Specification</th>
                    <th className="py-2.5 px-4">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-charcoal-700">
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Load Capacity</td>
                    <td className="py-2.5 px-4">40kg / 70kg Dynamic Load</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Side Thickness</td>
                    <td className="py-2.5 px-4">12.8mm Straight Interior & Exterior</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Motion Technology</td>
                    <td className="py-2.5 px-4">BLUMOTION Soft-Close / TIP-ON Touch</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Finishes</td>
                    <td className="py-2.5 px-4">Orion Grey, Silk White Matt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hettich Specs */}
          <div className="bg-white border border-surface-border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary p-4 border-b border-primary-container flex items-center justify-between">
              <h3 className="font-headline font-bold text-lg text-white">Hettich ArciTech</h3>
              <span className="text-xs font-mono text-accent-gold uppercase font-bold">Germany</span>
            </div>
            <div className="p-6">
              <p className="text-xs sm:text-sm text-charcoal-600 mb-6 font-sans">
                Robust double-walled drawer system designed for heavy commercial payloads and continuous smooth operation.
              </p>
              <table className="w-full text-left font-mono text-xs border border-surface-border rounded">
                <thead className="bg-surface-low border-b border-surface-border text-primary font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Specification</th>
                    <th className="py-2.5 px-4">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-charcoal-700">
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Load Capacity</td>
                    <td className="py-2.5 px-4">40kg / 60kg / 80kg Heavy Duty</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Profile Design</td>
                    <td className="py-2.5 px-4">Double-Walled Steel System</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Damping System</td>
                    <td className="py-2.5 px-4">Integrated Silent System</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Finishes</td>
                    <td className="py-2.5 px-4">Silver, Anthracite, Pure White</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Trade Price List Download Banner */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary-container text-white border border-primary-dim/40 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="max-w-xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-headline font-bold uppercase text-accent-gold flex items-center gap-2">
              <Download className="w-6 h-6" />
              Complete Trade Price List
            </h2>
            <p className="text-sm text-charcoal-200 leading-relaxed font-sans">
              Download our comprehensive material and hardware price guide. Available exclusively for registered trade partners across Queensland.
            </p>
          </div>

          <button 
            onClick={() => alert("Downloading TCS Trade Material & Hardware Spec Guide (2024-2025 Edition).pdf")}
            className="px-8 py-3.5 bg-accent-gold hover:bg-yellow-400 text-primary font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-gold flex-shrink-0 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD PDF (2.4MB)
          </button>
        </div>
      </section>

    </div>
  );
}
