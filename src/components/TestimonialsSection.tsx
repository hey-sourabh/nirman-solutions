"use client";

import { Star, Quote, Award, Building2, CheckCircle, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Nirman Site Solutions transformed our Alibaug coastal plot into a sanctuary of light and raw travertine. Their millimeter precision in managing complex cantilevers while preserving the surrounding banyan trees was nothing short of miraculous.",
    author: "Rajiv & Anita Singhania",
    title: "The Coastal Horizon Residence",
    location: "Alibaug Coast",
    rating: 5,
    tag: "Private Villa Commission",
  },
  {
    quote:
      "From zoning clearances through to the bespoke walnut joinery, Nirman's single-point accountability removed every anxiety. The circadian lighting and passive cooling reduced our operational energy by 42%.",
    author: "Marc & Helene Dubois",
    title: "Travertine Courtyard Estate",
    location: "Geneva / Kyoto",
    rating: 5,
    tag: "Bespoke Residential",
  },
  {
    quote:
      "As a luxury boutique developer, timing and structural fidelity are non-negotiable. Nirman delivered our 24,000 sq.ft cultural pavilion ahead of schedule with craftsmanship that has won two international design accolades.",
    author: "Vikram Malhotra",
    title: "Managing Director, Apex Landmark Group",
    location: "Mumbai",
    rating: 5,
    tag: "Commercial Pavilion",
  },
];

const stats = [
  { value: "18+", label: "Years of Practice", icon: Building2 },
  { value: "140+", label: "Bespoke Residences", icon: CheckCircle },
  { value: "28", label: "Design Accolades", icon: Award },
  { value: "98%", label: "Client Referrals", icon: ShieldCheck },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A8824C]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Reveal animation="slide-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
              <span>Client Testimonials</span>
            </div>
          </Reveal>

          <Reveal animation="slide-up" delay={200}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight">
              Distinction Affirmed by Our Patrons
            </h2>
          </Reveal>

          <Reveal animation="slide-up" delay={300}>
            <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
              The greatest measure of architectural success is the enduring joy and reverence of those who inhabit our spaces.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Editorial Review Cards with Staggered Slide-Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => (
            <div key={idx}>
              <Reveal animation="slide-up" delay={150 * (idx + 1)}>
                <div
                  className="bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-xl relative group h-full"
                >
                  <div className="space-y-4">
                    {/* Rating stars & Quote mark */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#A8824C]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-stone-300 group-hover:text-[#A8824C] transition-colors" />
                    </div>

                    <p className="text-sm text-[#4B535D] font-light italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/[0.06] space-y-1">
                    <div className="font-medium text-[#16191D] text-sm">
                      {item.author}
                    </div>
                    <div className="text-xs text-[#5E6670] font-mono">
                      {item.title} • {item.location}
                    </div>
                    <div className="text-[10px] font-mono text-[#926E3A] pt-1 uppercase tracking-wider font-semibold">
                      {item.tag}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Minimalist Architectural Stats Ribbon */}
        <Reveal animation="slide-up" delay={250}>
          <div className="bg-white rounded-2xl p-5 sm:p-10 border border-black/[0.08] shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`space-y-2 text-center ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/[0.05] text-[#A8824C] mb-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-[#16191D] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#5E6670] font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
