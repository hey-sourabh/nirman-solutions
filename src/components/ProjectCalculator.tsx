"use client";

import { useState } from "react";
import { Calculator, Clock, Check, Sparkles, Send } from "lucide-react";

type ScopeType = "turnkey" | "interior" | "commercial";
type TierType = "executive" | "ultra" | "heritage";

export default function ProjectCalculator() {
  const [scope, setScope] = useState<ScopeType>("turnkey");
  const [area, setArea] = useState<number>(5000);
  const [tier, setTier] = useState<TierType>("ultra");
  const [hasEcoFeatures, setHasEcoFeatures] = useState<boolean>(true);
  const [hasSmartAutomation, setHasSmartAutomation] = useState<boolean>(true);

  // Dynamic calculations
  const baseRates: Record<ScopeType, number> = {
    turnkey: 380, // $/sq.ft baseline
    interior: 210,
    commercial: 450,
  };

  const tierMultipliers: Record<TierType, number> = {
    executive: 1.0,
    ultra: 1.45,
    heritage: 1.9,
  };

  const rate = baseRates[scope] * tierMultipliers[tier];
  const ecoBonus = hasEcoFeatures ? 25 : 0;
  const techBonus = hasSmartAutomation ? 20 : 0;
  const totalRate = Math.round(rate + ecoBonus + techBonus);
  const estimatedCost = Math.round((totalRate * area) / 1000) * 1000;

  // Timeline estimate
  const designWeeks = scope === "interior" ? "6 - 10 Weeks" : "12 - 16 Weeks";
  const constructionMonths =
    scope === "interior"
      ? "4 - 7 Months"
      : area > 10000
      ? "16 - 24 Months"
      : "10 - 14 Months";

  return (
    <section id="estimator" className="py-24 md:py-32 bg-[#0d0f12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c6a676]/30 bg-[#c6a676]/5 text-xs font-mono tracking-widest uppercase text-[#c6a676]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Feasibility Tool</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            Estimate Your Architectural Commission
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Model your project parameters below to get instant preliminary insights on design timelines,
            execution horizons, and investment scope.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card rounded-2xl p-6 sm:p-10 border border-white/10">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Scope Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                1. Project Discipline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([
                  { id: "turnkey", label: "Full Architecture & Build" },
                  { id: "interior", label: "Interior Architecture" },
                  { id: "commercial", label: "Boutique Commercial" },
                ] as const).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScope(item.id)}
                    className={`p-3.5 rounded-xl text-xs font-medium text-center transition-all ${
                      scope === item.id
                        ? "bg-[#c6a676] text-black font-semibold shadow-lg shadow-[#c6a676]/20"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Square Footage Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  2. Built-Up Area
                </label>
                <span className="text-base font-mono font-semibold text-[#c6a676]">
                  {area.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#c6a676]"
                id="area-range-slider"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                <span>1,000 sq.ft (Boutique)</span>
                <span>10,000 sq.ft</span>
                <span>25,000+ sq.ft (Estate)</span>
              </div>
            </div>

            {/* Finish Tier */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                3. Materiality & Craft Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([
                  { id: "executive", name: "Executive Modern", note: "Engineered woods & clean quartz" },
                  { id: "ultra", name: "Ultra-Luxury Bespoke", note: "Imported travertine & fluted walnut" },
                  { id: "heritage", name: "Monumental Grade", note: "Artisan carved marble & bronze" },
                ] as const).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTier(item.id)}
                    className={`p-3.5 rounded-xl text-left transition-all ${
                      tier === item.id
                        ? "border-2 border-[#c6a676] bg-[#c6a676]/10"
                        : "border border-white/5 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-xs font-medium text-white">{item.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-1 leading-tight">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on toggles */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                4. Innovations & Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHasEcoFeatures(!hasEcoFeatures)}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                    hasEcoFeatures
                      ? "border-[#c6a676] bg-[#c6a676]/10 text-white"
                      : "border-white/5 bg-white/5 text-zinc-400"
                  }`}
                >
                  <span>Net-Zero Solar & Biophilic Landscaping</span>
                  {hasEcoFeatures && <Check className="w-4 h-4 text-[#c6a676]" />}
                </button>

                <button
                  type="button"
                  onClick={() => setHasSmartAutomation(!hasSmartAutomation)}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                    hasSmartAutomation
                      ? "border-[#c6a676] bg-[#c6a676]/10 text-white"
                      : "border-white/5 bg-white/5 text-zinc-400"
                  }`}
                >
                  <span>Circadian Lighting & Smart Automation</span>
                  {hasSmartAutomation && <Check className="w-4 h-4 text-[#c6a676]" />}
                </button>
              </div>
            </div>

          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#181d27] to-[#12161f] p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Preliminary Assessment
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c6a676]/20 text-[#c6a676]">
                  Real-Time Calculation
                </span>
              </div>

              {/* Estimated Budget Box */}
              <div className="space-y-2">
                <div className="text-xs text-zinc-400">Estimated Project Investment</div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  ${(estimatedCost * 0.9).toLocaleString()} – ${(estimatedCost * 1.15).toLocaleString()}
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  Indicative rate ~${totalRate}/sq.ft based on current artisan & material indices.
                </div>
              </div>

              {/* Milestones & Timeline */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c6a676]" />
                    Design & Permitting Phase:
                  </span>
                  <span className="font-mono text-white font-medium">{designWeeks}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#c6a676]" />
                    Construction Execution:
                  </span>
                  <span className="font-mono text-white font-medium">{constructionMonths}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-zinc-400 leading-relaxed">
                * Note: Exact numbers are established after detailed topographic survey, soil load-bearing analysis, and bespoke structural blueprints.
              </div>
            </div>

            {/* Action Button */}
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#c6a676] hover:bg-[#d8ba8e] text-black font-semibold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-[#c6a676]/20"
            >
              <span>Submit Scope for Architectural Review</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
