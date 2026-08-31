import React from 'react';

export default function ServicesPage({ onOpenQuote, onOpenApply }) {
  return (
    <main className="flex-grow w-full max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop py-xl space-y-xl">
      
      {/* Page Header */}
      <header className="mb-xl">
        <h1 className="font-headline text-3xl font-bold md:text-4xl text-primary mb-sm">Our Capabilities</h1>
        <p className="font-body text-lg text-on-surface-variant max-w-3xl">Precision manufacturing for trades. From raw board to ready-to-assemble flat packs, engineered to exact specifications.</p>
      </header>

      {/* Section 1: Cut to Size & Flat Packs (Bento Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-[12px] p-lg relative overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXk81ucSz4HjsoXd1bOA5sw4xrCYJ9UMaSLqQyw_o41r9d0sIUw7DfPOmvSWXeC9Z0edSgU26y3HO1Y91wv-PE69qwwnPoqbjCJiqrTbcM112JETKXRnaZXE5neS23b_wta_lXOW3vlddPmmgzGZFjjp8Z3DW-JMRCccHVytNuknvgnOUL5t-lnlcJQ69dYt1047w0VAHUtIleavvNmorVB3H2gv-SBwrdmltyqUPyY7ueo1tiJZbyvw"
              alt="A detailed blueprint technical drawing of a complex cabinet structure"
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary text-3xl" data-icon="straighten" data-weight="fill">straighten</span>
              <h2 className="font-headline text-2xl font-semibold text-primary">Cut to Size &amp; Flat Packs</h2>
            </div>
            <p className="font-body text-base text-on-surface-variant mb-md max-w-2xl">
              Our core service is delivering millimeter-perfect cut-to-size panels and complete flat pack cabinetry. We process your technical specifications directly into our automated production line, ensuring every piece fits with factory precision.
            </p>
            <div className="grid grid-cols-2 gap-sm mt-lg">
              <div className="bg-surface p-sm border border-outline-variant rounded-[12px]">
                <span className="font-label uppercase text-xs font-semibold tracking-wider text-on-surface-variant block mb-xs">Tolerance</span>
                <span className="font-body text-sm text-primary font-bold">± 0.2 mm</span>
              </div>
              <div className="bg-surface p-sm border border-outline-variant rounded-[12px]">
                <span className="font-label uppercase text-xs font-semibold tracking-wider text-on-surface-variant block mb-xs">Lead Time</span>
                <span className="font-body text-sm text-primary font-bold">4-7 Days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-[12px] overflow-hidden flex flex-col">
          <div className="h-48 w-full bg-surface-variant border-b border-outline-variant relative">
            <img
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCybKRv3BjZk352dSEtFnKrcq80g9QHNWhllrb6rpPwr2HkwG9nKTR-WlKmZJaVc06tZIDKdWteXDehrraecaJ5r559yh_ZkpkFc-6Zv3S31gHznwKCG008CxkCXJPdZeWoctsoag9cNmj6jhg5DljTPDy9oAZ6oEwvA0rwf1Z_kP4J6XMrNSI48Y19LUWZL-5kzefRIw0S1Q3s6OnXmaBxuqBKjsqqrWgnz3a3OTAC8cWDYTa_CSh7Q"
              alt="Stack of freshly cut raw MDF boards on a metal factory trolley"
            />
          </div>
          <div className="p-md flex-grow flex flex-col justify-center bg-surface">
            <h3 className="font-label uppercase text-xs font-semibold tracking-wider text-primary mb-xs">Ready for Assembly</h3>
            <p className="font-body text-base text-on-surface-variant text-sm">All flat packs arrive pre-drilled, labeled, and sorted by project zone for rapid installation on site.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Machinery & Technology (Asymmetric) */}
      <section className="mt-xl border-t border-outline-variant pt-xl">
        <div className="flex items-center gap-sm mb-lg">
          <span className="material-symbols-outlined text-primary text-3xl" data-icon="precision_manufacturing">precision_manufacturing</span>
          <h2 className="font-headline text-2xl font-semibold text-primary">Machinery &amp; Technology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="space-y-md order-2 md:order-1">
            <div className="border-l-4 border-primary pl-md py-sm">
              <h3 className="font-body text-lg font-bold text-on-surface mb-xs">CNC Routing</h3>
              <p className="font-body text-base text-on-surface-variant">Automated nesting and routing ensures maximum material yield and exact hole placements for hardware. We handle complex shapes and custom joinery detailing with ease.</p>
            </div>
            <div className="border-l-4 border-outline-variant pl-md py-sm hover:border-primary transition-colors">
              <h3 className="font-body text-lg font-bold text-on-surface mb-xs">Industrial Edgebanding</h3>
              <p className="font-body text-base text-on-surface-variant">PUR adhesive application for seamless, highly durable edges. Capable of handling various thicknesses and materials, ensuring a flawless finish that withstands harsh site conditions.</p>
            </div>
            <div className="border-l-4 border-outline-variant pl-md py-sm hover:border-primary transition-colors">
              <h3 className="font-body text-lg font-bold text-on-surface mb-xs">Software Integration</h3>
              <p className="font-body text-base text-on-surface-variant">Direct CAM integration from your design files reduces translation errors and speeds up production processing times.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 h-96 w-full relative border border-outline-variant rounded-[12px] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP01YZ2plZuf5mVlAjp7NfDzzPaKIK2MsF7dOp5tZio1DyBGQfy6tufmt-0XpXedshv2F9QgiLqut07IrjotMg5zbrsIO9xQ_YSsm_7S58KNazdL5gha8cRezIDETIW5EeCcUCeWBcET85rDPtoWKitej087rMAjHXUAgVtQ5RCLVm8DwNU9-79nGPKZZfsT1eyTNsto9X8F8Yyv0JB5tHUGILUniP_nH22WHdP9FTVQiA3G0-0cSyyQ"
              alt="Modern clean factory floor featuring a large industrial CNC routing machine"
            />
            <div className="absolute bottom-0 left-0 w-full bg-surface/90 backdrop-blur border-t border-outline-variant p-sm flex justify-between items-center">
              <span className="font-label uppercase text-xs font-semibold tracking-wider text-primary">Active Production Line</span>
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Materials & Hardware (Grid/Cards) */}
      <section className="mt-xl border-t border-outline-variant pt-xl mb-xl">
        <header className="mb-lg flex flex-col md:flex-row md:justify-between md:items-end gap-md">
          <div>
            <h2 className="font-headline text-2xl font-semibold text-primary mb-xs">Materials &amp; Hardware</h2>
            <p className="font-body text-base text-on-surface-variant">We partner with industry-leading suppliers to ensure structural integrity and aesthetic perfection.</p>
          </div>
          <div className="flex gap-md opacity-70 grayscale">
            <div className="font-headline font-bold tracking-widest text-on-surface text-sm">POLYTEC</div>
            <div className="font-headline font-bold tracking-widest text-on-surface text-sm">LAMINEX</div>
            <div className="font-headline font-bold tracking-widest text-on-surface text-sm">BLUM</div>
            <div className="font-headline font-bold tracking-widest text-on-surface text-sm">HETTICH</div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Hardware Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[12px] overflow-hidden group hover:border-primary transition-colors">
            <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmetbyOU_znwo7rdxBRSmnqa4kdTaKo0TsGsVIXUt01LaVS3Kr4GY7Eja5fdm21cJf1cS73QoMLWn7s2CJqctGjJjKuEpl89Eue4lJMlTnzJVU60Aq4_Qov23Sslaxg_IWQZoQADXMJffcth0cs5Z_QkV0Ch6x-Pvk28fFH3B6iRlHraYXcq1ML5ol1PfA3MQW4O_tukCFxI9VE2ky1MB1bxBk_SyiuKFGR2kFzHxb6oLnLV_wwg09Q"
                alt="Premium soft-close cabinet hinge attached to a dark wood grain board"
              />
            </div>
            <div className="p-md">
              <h3 className="font-body text-lg font-bold text-on-surface mb-xs">Premium Hardware</h3>
              <p className="font-body text-base text-on-surface-variant text-sm">Pre-drilled configurations for standard Blum and Hettich runner systems and hinges.</p>
            </div>
          </div>

          {/* Board Finishes Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[12px] overflow-hidden group hover:border-primary transition-colors">
            <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOsLjhAciXG9WWhCI7gGtR8xjgUi-tKdZWYdo4bKEkLQr02332395xfYBEncnqlGv0cA7h88hXVhwUe4qhOSO8bFUUPS75u1IIMi9jcszu2RNN9t4zNnrx73AGw73p5DFT_yeKCR1yjmICB3CVh3kVsKDTXPu6h2gex0fnFs46Mb16DK1qz9lw9KVLdb0QSVsr2Hyy5aNUF-9VfE1SuKeU5X-O2VUfnNIWLmhrFvd1UZK9pUWwvDlOXw"
                alt="Stacked melamine boards showing different textures and finishes"
              />
            </div>
            <div className="p-md">
              <h3 className="font-body text-lg font-bold text-on-surface mb-xs">Board Finishes</h3>
              <p className="font-body text-base text-on-surface-variant text-sm">Extensive library of MR MDF, Particleboard, and decorative panels available on demand.</p>
            </div>
          </div>

          {/* Edge Detail Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[12px] overflow-hidden group hover:border-primary transition-colors">
            <div className="h-48 w-full bg-surface-variant relative overflow-hidden">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlptmPTfqcMcj6xIEr1Dc2ry2CO3YtvBdKeUcAoUOt5g5qQYNTLiC7NuL3v6uJ-WgJmvrCZaFRj6NIgtj0iDvBYY5_XWYWyLWni262NKFJ80bzDrUdJteeS058ZnX4QlqOUjeRj0J5cdp5vN2fm8q8lnNEldMBiNJvhMtBGijrmAM3D0J3GkhOygJ2gvtJ-TNnfQp9MGSA3Hx1ZEDu1eJ6n_4sqz-eTR7uRYZHGOIvvM4kU126xREDmw"
                alt="Perfectly applied ABS edge strip on a white melamine board"
              />
            </div>
            <div className="p-md">
              <h3 className="font-body text-lg font-bold text-on-surface mb-xs">Edge Detailing</h3>
              <p className="font-body text-base text-on-surface-variant text-sm">1mm and 2mm ABS edging applied with precision PUR adhesives for moisture resistance.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
