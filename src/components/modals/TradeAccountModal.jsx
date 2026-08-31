import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, Building, Phone, Mail, MapPin, Briefcase } from 'lucide-react';

export default function TradeAccountModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    abn: '',
    contactName: '',
    tradeType: 'carpenter',
    phone: '',
    email: '',
    deliveryRegion: 'brisbane',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-surface-border rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-soft-lg relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-on-surface-muted hover:text-primary transition-colors p-1 rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto shadow-soft">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-headline font-bold text-2xl text-primary">
              Trade Application Submitted!
            </h3>
            <p className="text-sm text-on-surface-muted max-w-md mx-auto leading-relaxed">
              Thank you for applying, <strong className="text-on-surface">{formData.contactName}</strong>. Our estimating desk at Woodridge will verify your ABN (<span className="font-mono font-bold text-accent">{formData.abn}</span>) and activate your wholesale Cabinetry Online tier within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-soft"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-container text-primary flex items-center justify-center font-bold">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-primary">
                  Open Wholesale Trade Account
                </h3>
                <span className="text-xs text-on-surface-muted">
                  Exclusive wholesale pricing for builders & trades
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                    Company / Trading Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Cabinetry Pty Ltd"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                    ABN / ACN Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="11-digit ABN"
                    value={formData.abn}
                    onChange={(e) => setFormData({...formData, abn: e.target.value})}
                    className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-mono focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                    Trade Profession *
                  </label>
                  <select
                    value={formData.tradeType}
                    onChange={(e) => setFormData({...formData, tradeType: e.target.value})}
                    className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
                  >
                    <option value="carpenter">Cabinet Maker / Carpenter</option>
                    <option value="builder">Licensed Builder</option>
                    <option value="shopfitter">Shopfitter / Commercial</option>
                    <option value="installer">Kitchen Installer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(07) 0000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-mono focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="accounts@trade.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                  Primary Delivery / Pickup Preference
                </label>
                <select
                  value={formData.deliveryRegion}
                  onChange={(e) => setFormData({...formData, deliveryRegion: e.target.value})}
                  className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
                >
                  <option value="woodridge">Woodridge Factory Pickup (Logan QLD)</option>
                  <option value="brisbane">Greater Brisbane Site Delivery</option>
                  <option value="goldcoast">Gold Coast Site Delivery</option>
                  <option value="sunshinecoast">Sunshine Coast & Regional</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-soft flex items-center justify-center gap-2 mt-2"
              >
                Submit Trade Application
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
