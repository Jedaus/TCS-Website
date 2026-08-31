import React, { useState } from 'react';
import { X, Lock, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export default function TradeLoginModal({ isOpen, onClose, onOpenApply }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Authentication simulation: Trade credentials verified.');
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-surface-border rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-soft-lg relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-on-surface-muted hover:text-primary transition-colors p-1 rounded-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary-container text-primary flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-xl text-primary">
              Trade Portal Login
            </h3>
            <span className="text-xs text-on-surface-muted">
              Cabinetry Online & Production Tracking
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
              Trade Email Address
            </label>
            <input
              type="email"
              required
              placeholder="contractor@trade.com.au"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-dim border border-surface-border p-3 rounded-xl text-sm font-sans text-on-surface focus:border-primary outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold uppercase text-on-surface-muted tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs text-accent hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-dim border border-surface-border p-3 rounded-xl text-sm font-sans text-on-surface focus:border-primary outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-soft flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Info */}
        <div className="mt-6 pt-6 border-t border-surface-border text-center space-y-2">
          <p className="text-xs text-on-surface-muted">
            Don't have a wholesale contractor account yet?
          </p>
          <button
            type="button"
            onClick={onOpenApply}
            className="text-xs font-bold text-accent hover:underline uppercase tracking-wider inline-flex items-center gap-1"
          >
            <UserCheck className="w-3.5 h-3.5" />
            Apply for Trade Pricing (24h Approval)
          </button>
        </div>

      </div>
    </div>
  );
}
