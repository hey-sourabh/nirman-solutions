"use client";

import Image from "next/image";
import { SlidersHorizontal, Eye, Compass, Hammer } from "lucide-react";

export default function PhilosophySection() {
  const steps = [
    {
      number: "01",
      icon: Eye,
      title: "Contextual Discovery & Lifestyle Audit",
      description: "We analyze site topography, sun paths, wind vectors, and the client's day-to-day rhythm before drawing the first line.",
    },
    {
      number: "02",
      icon: Compass,
      title: "Spatial Prototyping & Virtual Walkthroughs",
      description: "Iterative 3D modeling and VR spatial immersion allow our clients to experience acoustics, shadows, and vistas before construction.",
    },
    {
      number: "03",
      icon: SlidersHorizontal,
      title: "Materiality & Artisan Commissioning",
      description: "Direct partnerships with quarries, timber mills, and metalworkers to select authentic, sustainable materials that age gracefully.",
    },
    {
      number: "04",
      icon: Hammer,
      title: "Millimeter-Precision Execution",
      description: "Our on-site project directors supervise every pour, joint, and fixture, delivering uncompromising quality on schedule.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#090b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Atelier Note */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/studio.jpg"
                  alt="Nirman Solutions studio design process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-xl border border-white/10">
                <blockquote className="text-sm italic text-zinc-300 font-light">
                  &ldquo;Architecture is not merely the enclosing of space; it is the thoughtful
                  orchestration of light, matter, and human experience.&rdquo;
                </blockquote>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#c6a676]">
                  <span>Studio Nirman Manifesto</span>
                  <span>Est. 2008</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 4-Stage Methodology */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c6a676]">
                Design Philosophy & Methodology
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                From Raw Blueprint to Living Sanctuary
              </h2>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                We reject formulaic architecture. Every Nirman commission is conceived from the ground
                up as a singular union of geographic truth and human aspiration.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-xl glass-card transition-all duration-300 hover:border-[#c6a676]/40 flex gap-4 sm:gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#c6a676]/10 border border-[#c6a676]/20 flex items-center justify-center flex-shrink-0 text-[#c6a676] font-mono font-bold text-sm">
                      {step.number}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#c6a676]" />
                        <h3 className="font-heading text-lg font-medium text-white tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
