"use client";

import Image from "next/image";
import { Compass, Sparkles, Hammer, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PhilosophySection() {
  const steps = [
    {
      number: "01",
      phase: "Phase 1: Discovery",
      title: "Contextual & Topographic Audit",
      description: "We analyze solar orientation, prevailing winds, soil bearing, and daily human habits before sketching the very first line.",
      timeline: "Weeks 1 - 3",
      icon: Compass,
    },
    {
      number: "02",
      phase: "Phase 2: Prototyping",
      title: "Spatial Immersion & BIM Modeling",
      description: "Iterative 3D CAD modeling and VR walk-throughs allow clients to experience daylight gradients and acoustic resonance prior to groundbreaking.",
      timeline: "Weeks 4 - 8",
      icon: Sparkles,
    },
    {
      number: "03",
      phase: "Phase 3: Materiality",
      title: "Artisan & Quarry Commissioning",
      description: "Direct procurement from Italian travertine quarries, aged timber mills, and metalworkers ensuring unmatched material integrity.",
      timeline: "Weeks 8 - 12",
      icon: Hammer,
    },
    {
      number: "04",
      phase: "Phase 4: Execution",
      title: "Millimeter-Precision Supervision",
      description: "Dedicated on-site architectural superintendents inspect every pour, joint, and fixture, ensuring white-glove handover on schedule.",
      timeline: "Construction Phase",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#F4F0E8] relative border-t border-black/[0.06] overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#A8824C]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Reveal animation="slide-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
              <span>Process & Methodology</span>
            </div>
          </Reveal>

          <Reveal animation="slide-up" delay={200}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight">
              From Raw Blueprint to Living Sanctuary
            </h2>
          </Reveal>

          <Reveal animation="slide-up" delay={300}>
            <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
              We reject formulaic architecture. Every Nirman commission is conceived from the ground
              up as a singular union of geographic truth, structural engineering, and human aspiration.
            </p>
          </Reveal>
        </div>

        {/* Horizontal Stepped Flow Timeline Layout with Staggered Slide-Up */}
        <div className="relative mb-16">
          {/* Connecting track line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#A8824C]/40 to-transparent -translate-y-1/2 -z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx}>
                  <Reveal animation="slide-up" delay={150 * (idx + 1)}>
                    <div
                      className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-xl group relative overflow-hidden"
                    >
                      {/* Top Ghost Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-3xl sm:text-4xl font-light text-stone-300 group-hover:text-[#A8824C] transition-colors">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.06] flex items-center justify-center text-[#A8824C] group-hover:scale-110 group-hover:bg-[#A8824C]/15 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Phase & Content */}
                      <div className="space-y-2.5 mb-6">
                        <div className="text-[11px] font-mono text-[#926E3A] uppercase tracking-wider font-semibold">
                          {step.phase}
                        </div>
                        <h3 className="font-heading text-lg font-medium text-[#16191D] tracking-tight group-hover:text-[#A8824C] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5E6670] font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Timeline Badge */}
                      <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C95A0]">
                          Duration
                        </span>
                        <span className="text-xs font-mono text-[#16191D] font-medium">
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Transformation Gallery Strip */}
        <Reveal animation="slide-up" delay={250}>
          <div className="mb-14 p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-black/[0.08] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#926E3A] font-semibold">
                  Visual Methodology in Action
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-medium text-[#16191D]">
                  From Permit Drafting to Photorealistic 3D Realization
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5E6670]">
                All Projects by Nirman Site Solutions
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {[
                { step: "01. CAD Drafting", title: "Permit Floor Plans", img: "/images/blueprints/shubham-villa-p1.jpg" },
                { step: "02. 3D Architecture", title: "Nirman Signature Villa", img: "/images/gallery/nirman-signature-villa.jpg" },
                { step: "03. Interior Detailing", title: "Palace Chandelier Hall", img: "/images/gallery/grand-palace-interior.jpg" },
                { step: "04. Multi-Tier Scale", title: "Kenneth Residency Tower", img: "/images/gallery/kenneth-residency.jpg" },
                { step: "05. Final Handover", title: "Gated Residence & Cars", img: "/images/gallery/modern-triplex-facade.jpg" },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-black/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-stone-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <span className="text-[8px] font-mono uppercase tracking-wider text-[#C6A676] block">
                      {item.step}
                    </span>
                    <h4 className="text-[11px] font-medium line-clamp-1 group-hover:text-[#C6A676] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Studio Manifesto Banner with Slide-Up */}
        <Reveal animation="slide-up" delay={300}>
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-black/[0.08] shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#926E3A] font-semibold">
                  Studio Nirman Manifesto • Est. 2008
                </span>
                <blockquote className="font-heading text-2xl sm:text-3xl font-light text-[#16191D] italic leading-snug">
                  &ldquo;Architecture is not merely the enclosing of physical space; it is the thoughtful
                  orchestration of daylight, raw matter, and the human condition.&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-[#5E6670] pt-2">
                  <span>Principal Partners: London • Mumbai • New Delhi</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-[#A8824C] font-semibold">RIBA & IIA Accredited</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#16191D] hover:bg-[#A8824C] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#A8824C]/25"
                >
                  <span>Request Atelier Briefing</span>
                </a>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
