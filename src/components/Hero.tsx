"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Building2, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "18+", label: "Years of Excellence", icon: Building2 },
    { value: "140+", label: "Masterpieces Built", icon: CheckCircle2 },
    { value: "28", label: "Architectural Awards", icon: Award },
    { value: "100%", label: "Sustainable Design", icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c6a676]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c6a676]/30 bg-[#c6a676]/5 text-xs font-mono tracking-widest uppercase text-[#c6a676]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Innovation & Interior Design</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
              Crafting Spaces of{" "}
              <span className="font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-[#d8ba8e] via-[#c6a676] to-[#a38053]">
                Timeless Distinction
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
              Nirman Solutions blends progressive structural engineering, natural materiality,
              and refined interior craftsmanship to create bespoke sanctuaries and landmark
              environments.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-explore-projects"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0d0f12] bg-[#c6a676] hover:bg-[#d8ba8e] rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#c6a676]/25 group"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#estimator"
                id="hero-estimate-cta"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-zinc-300 hover:text-white border border-white/20 hover:border-white/50 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                <span>Project Estimator</span>
              </a>
            </div>

            {/* Quick Badges / Trust points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#c6a676]">
                    <stat.icon className="w-4 h-4" />
                    <span className="font-heading text-2xl font-bold tracking-tight text-white">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 font-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual with Project Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <div className="relative aspect-[4/5] sm:aspect-[16/14] lg:aspect-[4/5] w-full">
                <Image
                  src="/images/hero.jpg"
                  alt="Nirman Solutions flagship architectural residence"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-black/20" />
              </div>

              {/* Floating Floating Project Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-card backdrop-blur-xl space-y-2 border border-white/15">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c6a676]">
                    Featured Commission
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-zinc-400 font-mono">Completed 2026</span>
                  </div>
                </div>
                <h2 className="text-lg font-medium text-white tracking-tight">
                  The Coastal Horizon Pavilion
                </h2>
                <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-white/10">
                  <span>Cantilever Villa • 8,400 sq.ft</span>
                  <span className="text-zinc-300">Malibu Coast</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative architectural grid lines behind image */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-[#c6a676]/30 -z-10 rounded-br-2xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-[#c6a676]/30 -z-10 rounded-tl-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
