"use client";

import { Compass, Sparkles, Leaf, HardHat, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Planning & Schematics",
    description: "Holistic site analysis, zoning clearance, structural blueprints, and computational design optimizing daylight, ventilation, and structural economy.",
    deliverables: ["Comprehensive Blueprint Sets", "3D Photorealistic Renders", "Zoning & Municipal Permitting", "Parametric Solar Analysis"],
  },
  {
    icon: Sparkles,
    title: "Luxury Interior Architecture & Decor",
    description: "Immersive interior narratives harmonizing natural stone, warm architectural woods, bespoke furnishings, and recessed circadian lighting schemes.",
    deliverables: ["Curated Material Palettes", "Custom Millwork Drawings", "Bespoke Furniture Sourcing", "Acoustic & Lighting Choreography"],
  },
  {
    icon: Leaf,
    title: "Biophilic & Sustainable Engineering",
    description: "Responsible luxury rooted in sustainable design principles—embracing passive cooling, rainwater harvesting, and renewable materials.",
    deliverables: ["Net-Zero Feasibility Reports", "Passive Thermal Strategies", "Green Building Certifications", "Life Cycle Carbon Assessment"],
  },
  {
    icon: HardHat,
    title: "Turnkey Execution & Supervision",
    description: "Flawless on-site construction management ensuring that the architectural fidelity crafted in our studio is translated into concrete reality.",
    deliverables: ["Dedicated Project Superintendent", "Contractor & Artisan Vetting", "Cost Estimation & Milestone Tracking", "White-Glove Key Handover"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0d0f12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#c6a676]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c6a676]">
            Disciplines & Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            Integrated Design & Construction Solutions
          </h2>
          <p className="text-base text-zinc-400 font-light leading-relaxed">
            From initial sketch and zoning clearances to bespoke millwork and final handover,
            we deliver end-to-end architectural mastery under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:border-[#c6a676]/40 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c6a676] group-hover:scale-110 group-hover:bg-[#c6a676]/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-light text-zinc-600 group-hover:text-[#c6a676] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl font-medium text-white tracking-tight group-hover:text-[#c6a676] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
                      Deliverables Included
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c6a676] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#estimator"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-400 group-hover:text-[#c6a676] transition-colors"
                  >
                    <span>Estimate this scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
