import React from 'react';

export default function HowToOrderPage({ onOpenApply, onOpenQuote }) {
  return (
    <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col gap-12 md:gap-16">
      
      {/* Header Section */}
      <header className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="font-['Literata'] text-[28px] md:text-[40px] font-bold text-primary leading-tight">
          How to Order via Cabinetry Online
        </h1>
        <p className="text-[17px] leading-[1.65] text-on-surface-variant">
          Streamlined ordering for precision manufacturing. Follow these steps to get your custom cabinetry straight to site.
        </p>
      </header>

      {/* Timeline / Process Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Timeline Visual (Left Column) */}
        <div className="col-span-1 md:col-span-5 lg:col-span-4 relative border-l-2 border-surface-variant ml-4 md:ml-0 pl-6 space-y-6 py-4">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -left-[37px] top-4 w-6 h-6 bg-surface-container-lowest border-2 border-outline-variant rounded-full flex items-center justify-center group-hover:border-primary transition-colors z-10">
              <span className="text-[11px] font-bold text-on-surface-variant group-hover:text-primary">1</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-['Literata'] text-[18px] font-semibold text-primary mb-2">Trade Account Sign Up &amp; Approval</h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                Create your trade account to access wholesale pricing and precision ordering tools. Approval typically within 24 hours.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -left-[37px] top-4 w-6 h-6 bg-surface-container-lowest border-2 border-outline-variant rounded-full flex items-center justify-center group-hover:border-primary transition-colors z-10">
              <span className="text-[11px] font-bold text-on-surface-variant group-hover:text-primary">2</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-['Literata'] text-[18px] font-semibold text-primary mb-2">Access Cabinetry Online &amp; Create a New Project</h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                Log in to the dashboard and create a new project. Define global parameters like material thickness and edge banding defaults.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -left-[37px] top-4 w-6 h-6 bg-primary border-2 border-primary rounded-full flex items-center justify-center z-10">
              <span className="text-[11px] font-bold text-white">3</span>
            </div>
            <div className="bg-primary-container/20 border border-primary p-5 rounded-xl shadow-sm">
              <h3 className="font-['Literata'] text-[18px] font-semibold text-primary mb-2">Input Dimensions, Select Materials &amp; View Live Pricing</h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant mb-4">
                Use the measurement matrix to input exact millimeter dimensions. Select materials and hardware to see instant pricing updates.
              </p>
              <div className="bg-surface-container-lowest border border-outline-variant p-3 rounded-lg text-[13px] grid grid-cols-3 gap-2 text-center">
                <div className="bg-primary/10 text-primary font-bold py-2 rounded-lg">H (mm)</div>
                <div className="bg-primary/10 text-primary font-bold py-2 rounded-lg">W (mm)</div>
                <div className="bg-primary/10 text-primary font-bold py-2 rounded-lg">D (mm)</div>
                <div className="bg-surface py-2 rounded-lg text-on-surface-variant">720</div>
                <div className="bg-surface py-2 rounded-lg text-on-surface-variant">600</div>
                <div className="bg-surface py-2 rounded-lg text-on-surface-variant">560</div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="absolute -left-[37px] top-4 w-6 h-6 bg-surface-container-lowest border-2 border-outline-variant rounded-full flex items-center justify-center group-hover:border-primary transition-colors z-10">
              <span className="text-[11px] font-bold text-on-surface-variant group-hover:text-primary">4</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-['Literata'] text-[18px] font-semibold text-primary mb-2">Order Approval &amp; Payment</h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                Review your cut list, approve the final quote, and process payment securely to send directly to CNC manufacturing.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative group">
            <div className="absolute -left-[37px] top-4 w-6 h-6 bg-surface-container-lowest border-2 border-outline-variant rounded-full flex items-center justify-center group-hover:border-primary transition-colors z-10">
              <span className="text-[11px] font-bold text-on-surface-variant group-hover:text-primary">5</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-['Literata'] text-[18px] font-semibold text-primary mb-2">QLD Factory Pickup or Site Delivery</h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                Track production status. Choose to pick up from our QLD facility or schedule flat-pack delivery straight to your site.
              </p>
            </div>
          </div>

        </div>

        {/* Visuals / Video / Screenshots (Right Column) */}
        <div className="col-span-1 md:col-span-7 lg:col-span-8 flex flex-col gap-5 sticky top-[100px]">
          
          <div className="bg-surface-container-highest border border-outline-variant rounded-2xl aspect-video flex flex-col items-center justify-center text-on-surface-variant relative overflow-hidden group">
            <img 
              alt="CNC Machine Video Render" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:opacity-100 transition-opacity duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVw0YUgqwWM_iOchU1YN3tu1hLLgzs3z3QjXN31eekt6INh5_If0EKKNu9AUHjnVH-0E9PkVHW6jxefdRQPktsxsXItZUdwVlk_NGY0fKxZErl02wFmZMZHvEPisNpf3MfoWXXJl8_Ur5B1iMnvryj1vCVLswU5AXjZYCYLfKH9DpfQis9lgQye9hLfCcSOE_asM8taO-WN5cdngcuorF1bpftIdvtU9SvS1ZL-oSo31VaybYLNvBDvw"
            />
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
            <div className="z-10 bg-surface-container-lowest/90 rounded-full w-16 h-16 flex items-center justify-center shadow-lg cursor-pointer hover:bg-white hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-primary text-3xl ml-1">play_arrow</span>
            </div>
            <span className="z-10 mt-3 text-[11px] font-bold bg-surface-container-lowest/80 px-4 py-2 rounded-full text-primary shadow-sm uppercase tracking-wider">
              Watch Tutorial Video
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-surface-container-high mb-4 rounded-lg overflow-hidden relative">
                <img 
                  alt="Measurement Matrix UI" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv8Y_yX6dJPupu4_5N06I03bh-mshZA5jrO-G9qkRtnZe9oV_IKGmRPwZPR49v7Wtd5W-5pL8yb3uN525uFfFuq4Z2WLXUpEi_UJt5GnVO0lbc1rXc1KY5xV92hXCx4cNGJItt3zOcklzJ4rqWSkfHfKU-jl5wXkXb0JmIkZWL0qHC77nBzlXC_1cdHkempocCbQG7e_dtHrMru72LJX5MsXOU9-3Tv3TMTHwF56NxQ3lw0SaPzI4BOg"
                />
              </div>
              <h4 className="text-[15px] font-bold text-primary mb-1">Measurement Matrix UI</h4>
              <p className="text-[14px] leading-relaxed text-on-surface-variant">Fast data entry specifically designed for exact mm dimensions.</p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-surface-container-high mb-4 rounded-lg overflow-hidden relative">
                <img 
                  alt="Live Production Tracking" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUldc_UCPNLvDEBe6OFe3th7wHjkCmeadBpueCS8SH7syNKf9_cZ3v9p8MyB5h8nL-i254bwSTNuWuXbzO1pLj9OlY4nOJKC2Sic9oEm0lrlchuZNEPpIL2AHRdKHT1UUuKIsre8cffkCQglc3SIwbg0WxLc6ZULzeBoYcixSsbqn_VmT1l5AAi-Dk9TgAREnmg4wotcMn0MieYuDmz2KQ555CtHd5kqwcmgvK04Y6i0zr8kkdoagIdw"
                />
              </div>
              <h4 className="text-[15px] font-bold text-primary mb-1">Live Production Tracking</h4>
              <p className="text-[14px] leading-relaxed text-on-surface-variant">Monitor your order from cutting to dispatch in real-time.</p>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <button 
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2.5 bg-primary text-white text-[13px] font-bold px-7 py-4 rounded-full hover:bg-secondary transition-all duration-200 shadow-md uppercase tracking-widest"
            >
              Go to Cabinetry Online
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

        </div>

      </section>

    </main>
  );
}
