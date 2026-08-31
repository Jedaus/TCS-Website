import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, Ruler } from 'lucide-react';

export default function QuickQuoteModal({ isOpen, onClose }) {
  const [dimensions, setDimensions] = useState({
    height: 720,
    width: 600,
    depth: 560,
    material: 'hmr_white',
    edge: '1mm_abs',
    quantity: 1
  });

  const [quoteCalculated, setQuoteCalculated] = useState(false);

  if (!isOpen) return null;

  // Simple pricing algorithm
  const baseArea = (dimensions.height * dimensions.width * 2 + dimensions.height * dimensions.depth * 2 + dimensions.width * dimensions.depth * 2) / 1000000;
  const materialRate = dimensions.material === 'hmr_white' ? 42 : dimensions.material === 'oak_woodmatt' ? 78 : 65;
  const edgeRate = dimensions.edge === '2mm_pur' ? 18 : 10;
  const unitPrice = (baseArea * materialRate + edgeRate + 35).toFixed(2);
  const totalPrice = (unitPrice * dimensions.quantity).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-surface-border rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-soft-lg relative">
        
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
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-xl text-primary">
              Cabinetry Online Instant Estimator
            </h3>
            <span className="text-xs text-on-surface-muted">
              Live dimension calculation (Woodridge Factory Rates)
            </span>
          </div>
        </div>

        {/* Dimensions Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                Height (mm)
              </label>
              <input
                type="number"
                value={dimensions.height}
                onChange={(e) => setDimensions({...dimensions, height: Number(e.target.value)})}
                className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-mono font-bold text-primary text-center focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                Width (mm)
              </label>
              <input
                type="number"
                value={dimensions.width}
                onChange={(e) => setDimensions({...dimensions, width: Number(e.target.value)})}
                className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-mono font-bold text-primary text-center focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                Depth (mm)
              </label>
              <input
                type="number"
                value={dimensions.depth}
                onChange={(e) => setDimensions({...dimensions, depth: Number(e.target.value)})}
                className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-mono font-bold text-primary text-center focus:border-primary outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                Board Substrate
              </label>
              <select
                value={dimensions.material}
                onChange={(e) => setDimensions({...dimensions, material: e.target.value})}
                className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
              >
                <option value="hmr_white">16mm HMR White Particleboard</option>
                <option value="oak_woodmatt">Polytec Natural Oak Woodmatt</option>
                <option value="laminex_charcoal">Laminex AbsoluteMatte Charcoal</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-on-surface-muted mb-1 tracking-wider">
                Edge Banding
              </label>
              <select
                value={dimensions.edge}
                onChange={(e) => setDimensions({...dimensions, edge: e.target.value})}
                className="w-full bg-surface-dim border border-surface-border p-2.5 rounded-xl text-sm font-sans focus:border-primary outline-none"
              >
                <option value="1mm_abs">1.0mm ABS Standard Edging</option>
                <option value="2mm_pur">2.0mm Waterproof PUR Heavy Duty</option>
              </select>
            </div>
          </div>

          {/* Pricing Summary Box */}
          <div className="p-4 bg-primary-light/60 border border-primary-container rounded-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider">
                Estimated Trade Wholesale Price
              </div>
              <div className="text-xs text-on-surface-muted">
                Pre-drilled flat pack ready for assembly
              </div>
            </div>
            <div className="text-right">
              <span className="font-headline font-extrabold text-2xl text-primary font-mono">
                ${unitPrice}
              </span>
              <span className="text-xs font-bold text-on-surface-muted block">AUD (ex GST)</span>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={onClose}
              className="w-1/2 py-3 border border-surface-border hover:bg-surface-dim text-on-surface-muted font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                alert('Order specs sent to Cabinetry Online for batching.');
                onClose();
              }}
              className="w-1/2 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-soft flex items-center justify-center gap-1.5"
            >
              Order via Cabinetry Online
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
