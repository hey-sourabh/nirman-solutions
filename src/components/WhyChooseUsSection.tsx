"use client";

import { Compass, Eye, ShieldCheck, Ruler, ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function WhyChooseUsSection() {
  const highlights = [
    {
      icon: Ruler,
      title: "Precision Blueprints & CAD",
      desc: "Millimeter-exact structural permit sets, MEP schematics, and BIM models minimizing on-site delays and cost overruns.",
      tag: "Technical Rigor",
      span: "md:col-span-1 lg:col-span-4",
    },
    {
      icon: Eye,
      title: "3D Photorealistic & VR Immersion",
      desc: "Step inside your architectural sanctuary before breaking ground. Experience diurnal sunlight shifts, acoustics, and materials in real time.",
      tag: "Spatial Clarity",
      span: "md:col-span-1 lg:col-span-4",
    },
    {
      icon: Compass,
      title: "Passive Climate & Biophilic Design",
      desc: "Harnessing natural ventilation, thermal mass, and solar trajectory to build residences that live in harmony with surrounding ecosystems.",
      tag: "Sustainable Luxury",
      span: "md:col-span-1 lg:col-span-4",
    },
    {
      icon: ShieldCheck,
      title: "Turnkey Execution & Single Accountability",
      desc: "From initial sketch to key handover, our dedicated project directors supervise every pour, joint, and bespoke millwork detail.",
      tag: "Zero-Compromise",
      span: "md:col-span-2 lg:col-span-8",
      featured: true,
    },
    {
      icon: Sparkles,
      title: "Curated Material Integrity",
      desc: "Direct partnerships with European stone quarries, heritage timber mills, and bronze artisans.",
      tag: "Artisanal",
      span: "md:col-span-1 lg:col-span-4",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.06]">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <Reveal animation="slide-down" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                <span>Why Choose Us</span>
              </div>
            </Reveal>

            <Reveal animation="slide-up" delay={200}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight leading-[1.2]">
                Bringing Your Vision to Life with{" "}
                <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#926E3A] via-[#A8824C] to-[#6E4F23]">
                  Every Design
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal animation="slide-up" delay={300}>
              <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
                Nexel-inspired architectural discipline combines bold visionary aesthetics with rigorous engineering
                standards. We reject repetitive templates to build bespoke legacy spaces that appreciate in emotional and financial value.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric Bento-Style Feature Card Grid with Staggered Slide-Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={item.span}>
                <Reveal animation="slide-up" delay={150 * (idx + 1)}>
                  <div
                    className="h-full bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 border border-black/[0.08] hover:border-[#A8824C]/50 shadow-sm hover:shadow-xl group relative overflow-hidden"
                  >
                    {/* Subtle warm glow on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#A8824C]/5 rounded-full blur-2xl group-hover:bg-[#A8824C]/15 transition-all duration-500 pointer-events-none" />

                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-black/[0.06] flex items-center justify-center text-[#A8824C] group-hover:scale-110 group-hover:bg-[#A8824C]/15 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#5E6670] border border-black/[0.08] px-2.5 py-1 rounded-full bg-[#FAF8F5]">
                          {item.tag}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-heading text-xl font-medium text-[#16191D] tracking-tight group-hover:text-[#A8824C] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#5E6670] font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#8C95A0]">0{idx + 1}</span>
                      <a
                        href="#contact"
                        className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#5E6670] group-hover:text-[#A8824C] transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
