import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Download, 
  Send, 
  Ruler, 
  Layers, 
  DollarSign, 
  CheckCircle2, 
  Cpu, 
  FileSpreadsheet,
  AlertCircle,
  HelpCircle,
  Copy
} from 'lucide-react';

export default function QuoteMatrixPage({ onOpenApply }) {
  // Preset list of cabinets in current job batch
  const [jobItems, setJobItems] = useState([
    {
      id: 1,
      code: 'BC-01',
      type: 'Standard Base Cabinet (2-Door)',
      height: 720,
      width: 800,
      depth: 560,
      material: '16mm White HMR',
      edge: '1mm Matching ABS',
      hardware: 'Blum Soft-Close (2x)',
      qty: 2,
      pricePerUnit: 134.00,
    },
    {
      id: 2,
      code: 'WC-01',
      type: 'Overhead Wall Cabinet (2-Door)',
      height: 600,
      width: 900,
      depth: 320,
      material: '16mm White HMR',
      edge: '1mm Matching ABS',
      hardware: 'Blum Soft-Close (2x)',
      qty: 2,
      pricePerUnit: 98.50,
    },
    {
      id: 3,
      code: 'DR-01',
      type: '4-Drawer Base Bank',
      height: 720,
      width: 600,
      depth: 560,
      material: '16mm White HMR',
      edge: '1mm Matching ABS',
      hardware: 'Hettich Soft-Close Runners (4x)',
      qty: 1,
      pricePerUnit: 245.00,
    }
  ]);

  // Form state for adding new item
  const [newItem, setNewItem] = useState({
    code: 'BC-02',
    type: 'Standard Base Cabinet (2-Door)',
    height: 720,
    width: 600,
    depth: 560,
    material: '16mm White HMR',
    edge: '1mm Matching ABS',
    hardware: 'Blum Soft-Close',
    qty: 1
  });

  const [selectedItem, setSelectedItem] = useState(jobItems[0]);
  const [isSentToCnc, setIsSentToCnc] = useState(false);

  // Price calculator for new item
  const calculateItemPrice = (item) => {
    const areaSqM = ((item.height * item.width * 2) + (item.height * item.depth * 2) + (item.width * item.depth * 2)) / 1000000;
    const baseMachining = item.type.includes('Drawer') ? 85 : 45;
    const matRate = item.material.includes('Polytec') ? 60 : 40;
    const edgeRate = item.edge.includes('2mm') ? 16 : 8;
    return Math.round((areaSqM * matRate) + baseMachining + edgeRate);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const price = calculateItemPrice(newItem);
    const itemToAdd = {
      ...newItem,
      id: Date.now(),
      pricePerUnit: price,
    };
    setJobItems([...jobItems, itemToAdd]);
    setSelectedItem(itemToAdd);
    // Auto increment code
    setNewItem({
      ...newItem,
      code: `CAB-${jobItems.length + 2}`,
    });
  };

  const handleDeleteItem = (id) => {
    const updated = jobItems.filter(item => item.id !== id);
    setJobItems(updated);
    if (selectedItem?.id === id) {
      setSelectedItem(updated[0] || null);
    }
  };

  // Grand totals
  const subtotal = jobItems.reduce((acc, item) => acc + (item.pricePerUnit * item.qty), 0);
  const gst = subtotal * 0.10;
  const totalWithGst = subtotal + gst;
  const totalParts = jobItems.reduce((acc, item) => acc + (item.qty * 6), 0); // approx parts

  return (
    <div className="space-y-8 pb-16 bg-charcoal-50">
      
      {/* Top Header Bar */}
      <section className="bg-industrial-800 text-white py-8 px-4 sm:px-6 lg:px-8 border-b-2 border-industrial-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-safety-500 text-white text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded">
                Interactive Tool
              </span>
              <span className="text-xs font-mono text-charcoal-300">
                Direct-to-CNC Measurement Matrix
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-sans">
              Cut-to-Size & Cabinet Matrix Simulator
            </h1>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={() => {
                const csvData = jobItems.map(j => `${j.code},${j.type},${j.height},${j.width},${j.depth},${j.material},${j.qty},${j.pricePerUnit}`).join('\n');
                const blob = new Blob([`Code,Type,Height,Width,Depth,Material,Qty,PriceAUD\n` + csvData], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `TCS_CutList_Job_${Date.now()}.csv`;
                a.click();
              }}
              className="px-3.5 py-2 bg-industrial-900 hover:bg-industrial-700 text-charcoal-200 border border-industrial-600 rounded flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4 text-trade-500" />
              Export CSV Cut List
            </button>

            <button
              onClick={() => {
                setIsSentToCnc(true);
                setTimeout(() => setIsSentToCnc(false), 3000);
              }}
              className="px-4 py-2 bg-safety-500 hover:bg-safety-600 text-white font-bold uppercase rounded shadow-hard-orange flex items-center gap-1.5 transition-all"
            >
              <Send className="w-4 h-4" />
              {isSentToCnc ? 'Transmitted to CNC Line!' : 'Send Job to Production'}
            </button>
          </div>
        </div>
      </section>

      {/* Main Matrix Workspace Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Status notice */}
        {isSentToCnc && (
          <div className="p-4 bg-emerald-900/90 text-white rounded-lg border border-emerald-500 flex items-center gap-3 animate-fadeIn font-mono text-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <strong className="block text-sm font-sans">Batch Dispatched to Homag CNC Router!</strong>
              Nesting efficiency 94.2% • Production scheduled at Woodridge factory facility.
            </div>
          </div>
        )}

        {/* Input Form & Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Add Cabinet Item Form */}
          <div className="lg:col-span-7 bg-white border border-charcoal-300 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-charcoal-200 mb-4">
              <h3 className="font-bold text-industrial-800 text-base font-sans flex items-center gap-2">
                <Plus className="w-4 h-4 text-safety-500" />
                Add Cabinet / Cut-to-Size Item
              </h3>
              <span className="text-xs font-mono text-charcoal-500">Millimeters (mm)</span>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-charcoal-700 mb-1">
                    Cabinet Tag / Code
                  </label>
                  <input
                    type="text"
                    required
                    value={newItem.code}
                    onChange={(e) => setNewItem({...newItem, code: e.target.value})}
                    className="w-full px-3 py-1.5 text-sm border border-charcoal-300 rounded font-mono font-bold uppercase"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono font-bold uppercase text-charcoal-700 mb-1">
                    Cabinet Type
                  </label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                    className="w-full px-3 py-1.5 text-sm border border-charcoal-300 rounded text-xs font-sans"
                  >
                    <option>Standard Base Cabinet (2-Door)</option>
                    <option>Standard Base Cabinet (1-Door)</option>
                    <option>Overhead Wall Cabinet (2-Door)</option>
                    <option>Full Height Pantry (4-Door)</option>
                    <option>4-Drawer Base Bank</option>
                    <option>Single Custom Flat Panel</option>
                  </select>
                </div>
              </div>

              {/* Exact Millimeter Dimension Inputs */}
              <div className="p-3.5 bg-charcoal-75 rounded border border-charcoal-200">
                <div className="text-xs font-mono font-bold text-industrial-800 uppercase mb-2 flex items-center justify-between">
                  <span>Exact Dimensions</span>
                  <span className="text-safety-600 text-[10px]">No modular restrictions</span>
                </div>
                <div className="grid grid-cols-3 gap-3 font-mono">
                  <div>
                    <label className="block text-[10px] text-charcoal-500 uppercase">Height (H)</label>
                    <div className="relative mt-0.5">
                      <input
                        type="number"
                        min="100"
                        max="2800"
                        value={newItem.height}
                        onChange={(e) => setNewItem({...newItem, height: Number(e.target.value)})}
                        className="w-full px-2 py-1.5 pr-8 border border-charcoal-300 rounded font-bold text-sm text-right"
                      />
                      <span className="absolute right-2 top-2 text-[10px] text-charcoal-400">mm</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-charcoal-500 uppercase">Width (W)</label>
                    <div className="relative mt-0.5">
                      <input
                        type="number"
                        min="100"
                        max="2400"
                        value={newItem.width}
                        onChange={(e) => setNewItem({...newItem, width: Number(e.target.value)})}
                        className="w-full px-2 py-1.5 pr-8 border border-charcoal-300 rounded font-bold text-sm text-right"
                      />
                      <span className="absolute right-2 top-2 text-[10px] text-charcoal-400">mm</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-charcoal-500 uppercase">Depth (D)</label>
                    <div className="relative mt-0.5">
                      <input
                        type="number"
                        min="50"
                        max="1200"
                        value={newItem.depth}
                        onChange={(e) => setNewItem({...newItem, depth: Number(e.target.value)})}
                        className="w-full px-2 py-1.5 pr-8 border border-charcoal-300 rounded font-bold text-sm text-right"
                      />
                      <span className="absolute right-2 top-2 text-[10px] text-charcoal-400">mm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Substrate & Edging selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-mono font-bold uppercase text-charcoal-700 mb-1">
                    Board Substrate
                  </label>
                  <select
                    value={newItem.material}
                    onChange={(e) => setNewItem({...newItem, material: e.target.value})}
                    className="w-full px-2.5 py-1.5 border border-charcoal-300 rounded"
                  >
                    <option>16mm White HMR</option>
                    <option>18mm Polytec Matt Black</option>
                    <option>18mm Laminex Natural Oak</option>
                    <option>18mm Paint-Ready MR MDF</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono font-bold uppercase text-charcoal-700 mb-1">
                    Edge Banding
                  </label>
                  <select
                    value={newItem.edge}
                    onChange={(e) => setNewItem({...newItem, edge: e.target.value})}
                    className="w-full px-2.5 py-1.5 border border-charcoal-300 rounded"
                  >
                    <option>1mm Matching ABS</option>
                    <option>2mm Heavy Duty ABS</option>
                    <option>Raw Core (Unedged)</option>
                  </select>
                </div>
              </div>

              {/* Submit to list */}
              <div className="flex items-center justify-between pt-2 border-t border-charcoal-200">
                <div className="text-xs font-mono text-charcoal-600">
                  Est. Unit: <strong className="text-industrial-800 font-bold">${calculateItemPrice(newItem)}.00</strong>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-industrial-800 hover:bg-industrial-900 text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-all shadow-hard-sm flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Add to Job Cut List
                </button>
              </div>
            </form>
          </div>

          {/* Selected Item 2D CAD Wireframe Viewer */}
          <div className="lg:col-span-5 bg-industrial-900 border-2 border-industrial-700 rounded-lg p-6 text-white font-mono flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-industrial-800 text-xs">
                <span className="text-safety-500 font-bold">2D CAD PREVIEW</span>
                <span className="text-charcoal-400">{selectedItem?.code || 'No Selection'}</span>
              </div>

              {selectedItem ? (
                <div className="my-4 space-y-4">
                  {/* Schematic Box */}
                  <div className="w-full h-44 bg-industrial-800 border border-industrial-700 rounded p-4 relative flex flex-col justify-between">
                    <div className="flex justify-between text-[11px] text-trade-400">
                      <span>W: {selectedItem.width}mm</span>
                      <span>D: {selectedItem.depth}mm</span>
                    </div>

                    <div className="border border-dashed border-trade-500/50 h-24 rounded bg-trade-500/10 flex flex-col items-center justify-center text-center p-2">
                      <div className="text-white font-bold text-sm font-sans">{selectedItem.type}</div>
                      <div className="text-[10px] text-charcoal-300 mt-0.5">
                        {selectedItem.material} • {selectedItem.edge}
                      </div>
                    </div>

                    <div className="flex justify-between text-[11px] text-trade-400">
                      <span>H: {selectedItem.height}mm</span>
                      <span className="text-emerald-400">Pre-Bored for Hinges</span>
                    </div>
                  </div>

                  {/* Cut Breakdown */}
                  <div className="text-xs space-y-1.5 text-charcoal-300">
                    <div className="text-[10px] uppercase text-charcoal-500">Components List:</div>
                    <div className="flex justify-between text-[11px] border-b border-industrial-800 pb-1">
                      <span>2x Ends (L & R)</span>
                      <span className="text-white font-bold">{selectedItem.height} × {selectedItem.depth}mm</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-industrial-800 pb-1">
                      <span>1x Bottom / Top Rail</span>
                      <span className="text-white font-bold">{selectedItem.width - 32} × {selectedItem.depth}mm</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span>1x Solid 16mm Back</span>
                      <span className="text-white font-bold">{selectedItem.height - 32} × {selectedItem.width - 32}mm</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-xs text-charcoal-500">
                  Select a cabinet from the table to preview dimensions.
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-industrial-800 flex items-center justify-between text-xs">
              <span className="text-charcoal-400">Yield: ~1.4m²</span>
              <span className="text-emerald-400 font-bold">±0.2mm Homag Ready</span>
            </div>
          </div>

        </div>

        {/* Full Job Matrix Data Table */}
        <div className="bg-white border border-charcoal-300 rounded-lg p-6 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-charcoal-200">
            <div>
              <h3 className="text-lg font-bold text-industrial-800 font-sans">
                Active Job Cut List & Wholesale Pricing
              </h3>
              <p className="text-xs text-charcoal-600 font-mono">
                {jobItems.length} line items • ~{totalParts} total precision parts
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setJobItems([]);
                  setSelectedItem(null);
                }}
                className="px-3 py-1.5 text-xs font-mono text-charcoal-600 hover:text-red-600 border border-charcoal-200 rounded"
              >
                Clear List
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left font-mono text-xs zebra-table border border-charcoal-200">
              <thead className="bg-industrial-800 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-3">Code</th>
                  <th className="p-3">Cabinet Description</th>
                  <th className="p-3 text-right">H (mm)</th>
                  <th className="p-3 text-right">W (mm)</th>
                  <th className="p-3 text-right">D (mm)</th>
                  <th className="p-3">Board Material</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-right">Unit Price</th>
                  <th className="p-3 text-right">Line Total</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-200">
                {jobItems.map((item) => (
                  <tr 
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`cursor-pointer transition-colors ${
                      selectedItem?.id === item.id ? '!bg-safety-50 font-semibold' : 'hover:bg-charcoal-100'
                    }`}
                  >
                    <td className="p-3 font-bold text-industrial-800">{item.code}</td>
                    <td className="p-3 font-sans font-medium text-charcoal-800">{item.type}</td>
                    <td className="p-3 text-right font-bold text-industrial-800">{item.height}</td>
                    <td className="p-3 text-right font-bold text-industrial-800">{item.width}</td>
                    <td className="p-3 text-right font-bold text-industrial-800">{item.depth}</td>
                    <td className="p-3 text-charcoal-600">{item.material}</td>
                    <td className="p-3 text-center font-bold">{item.qty}</td>
                    <td className="p-3 text-right">${item.pricePerUnit.toFixed(2)}</td>
                    <td className="p-3 text-right text-industrial-800 font-bold">
                      ${(item.pricePerUnit * item.qty).toFixed(2)}
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteItem(item.id);
                        }}
                        className="p-1 text-charcoal-400 hover:text-red-600 rounded transition-colors"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Summary Footer */}
          <div className="mt-6 pt-4 border-t border-charcoal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-charcoal-600 font-mono space-y-1">
              <div>• Lead time: <strong className="text-industrial-800">4-7 Working Days</strong> from order confirmation.</div>
              <div>• Collection: <strong className="text-industrial-800">68 Compton Rd, Woodridge QLD</strong> or site transport.</div>
            </div>

            <div className="bg-industrial-900 text-white p-4 rounded-lg font-mono text-right min-w-[280px] shadow-sm">
              <div className="flex justify-between text-xs text-charcoal-400 mb-1">
                <span>Subtotal (Wholesale):</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-charcoal-400 mb-2">
                <span>GST (10%):</span>
                <span className="text-white">${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-safety-500 border-t border-industrial-700 pt-2">
                <span>Total Trade Price:</span>
                <span>${totalWithGst.toFixed(2)} <span className="text-xs font-normal text-charcoal-300">AUD</span></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
