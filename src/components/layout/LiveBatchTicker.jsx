import React from 'react';
import { Activity, ShieldCheck, Clock, Layers } from 'lucide-react';

export default function LiveBatchTicker() {
  return (
    <div className="bg-industrial-900 text-charcoal-300 text-xs border-b border-industrial-800 py-1.5 px-4 font-mono hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white font-semibold">QLD FACTORY ACTIVE:</span>
            <span className="text-charcoal-200">CNC Batch #QLD-8492</span>
          </div>

          <div className="flex items-center gap-1.5 text-charcoal-400">
            <ShieldCheck className="w-3.5 h-3.5 text-trade-500" />
            <span>Tolerance: <strong className="text-white">±0.2mm</strong></span>
          </div>

          <div className="flex items-center gap-1.5 text-charcoal-400">
            <Clock className="w-3.5 h-3.5 text-safety-500" />
            <span>Standard Lead Time: <strong className="text-white">4-7 Working Days</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="bg-industrial-700 text-industrial-200 px-2 py-0.5 rounded-sm border border-industrial-600">
            B2B TRADE ONLY
          </span>
          <span className="text-charcoal-400">Direct CAM ➔ Homag CNC Routing</span>
        </div>
      </div>
    </div>
  );
}
