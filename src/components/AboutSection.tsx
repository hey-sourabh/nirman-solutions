"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Mail, Award, ThumbsUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageShutter from "@/components/ImageShutter";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F4F0E8] relative overflow-hidden border-t border-black/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#A8824C]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-center">
          
          {/* Left Column: Overlapping Dual-Image Asymmetric Composition with Slide-Right */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16 lg:pb-0">
            <Reveal animation="slide-right" delay={150}>
              {/* Main Primary Image with Shutter Reveal */}
              <div className="relative w-10/12 sm:w-4/5 aspect-[4/5] rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-white group">
                <ImageShutter shutterType="curtain-up" overlayColor="bg-[#16191D]" className="w-full h-full">
                  <Image
                    src="/images/entryway.jpg"
                    alt="Modern travertine architectural entryway"
                    fill
                    sizes="(max-width: 1024px) 85vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </ImageShutter>
              </div>

              {/* Overlapping Secondary Image with Split Shutter Reveal */}
              <div className="absolute -bottom-6 right-2 sm:right-6 w-7/12 sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 bg-white group">
                <ImageShutter shutterType="split-vertical" overlayColor="bg-[#16191D]" delay={250} className="w-full h-full">
                  <Image
                    src="/images/lounge.jpg"
                    alt="Bespoke luxury living room lounge"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </ImageShutter>
              </div>

              {/* Floating Metric 1: Positive Feedback */}
              <div className="absolute -top-4 right-4 sm:right-12 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-black/10 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-lg bg-[#A8824C]/15 border border-[#A8824C]/30 flex items-center justify-center text-[#A8824C]">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-[#16191D] tracking-tight">95%</div>
                  <div className="text-[11px] text-[#5E6670] font-mono uppercase tracking-wider">Positive Feedback</div>
                </div>
              </div>

              {/* Floating Metric 2: Years of Experience */}
              <div className="absolute top-1/2 left-0 sm:-left-6 z-30 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-black/10 shadow-xl flex items-center gap-3 animate-float-delayed">
                <div className="w-10 h-10 rounded-lg bg-[#A8824C]/15 border border-[#A8824C]/30 flex items-center justify-center text-[#A8824C]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-[#16191D] tracking-tight">18+</div>
                  <div className="text-[11px] text-[#5E6670] font-mono uppercase tracking-wider">Years Experience</div>
                </div>
              </div>

              {/* Background architectural corner accent */}
              <div className="absolute -top-6 -left-6 w-28 h-28 border-t-2 border-l-2 border-[#A8824C]/30 -z-10 rounded-tl-2xl pointer-events-none" />
            </Reveal>
          </div>

          {/* Right Column: Narrative, Checkmarks & Contact Cards with Slide-Left */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal animation="slide-left" delay={200}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                  <span>About Our Atelier</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight leading-[1.2]">
                  Building Architecture with{" "}
                  <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#926E3A] via-[#A8824C] to-[#6E4F23]">
                    Purpose and Precision
                  </span>
                </h2>

                <p className="text-base text-[#4B535D] font-light leading-relaxed">
                  Our architectural designs are more than just physical structures—they are bespoke, enduring solutions.
                  Nirman Site Solutions builds sanctuaries that are sustainable, structurally uncompromising, and visually striking,
                  honoring both geographic topography and human aspiration.
                </p>
              </div>

              {/* Checkmark Bullets */}
              <div className="space-y-3 pt-4">
                {[
                  "Passionate About Design & Structural Purity",
                  "Tailored, Creative Blueprints for Every Topography",
                  "Exceptional Artisan Craftsmanship & Millimeter Precision",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#16191D]">
                    <div className="w-5 h-5 rounded-full bg-[#A8824C]/15 flex items-center justify-center text-[#A8824C] flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button and Dual Direct Contact Cards */}
              <div className="pt-6 space-y-6">
                <div>
                  <a
                    href="#philosophy"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#16191D] hover:bg-[#A8824C] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#A8824C]/25 group"
                  >
                    <span>Explore Our Philosophy</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Direct Inquiries Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.08]">
                  <a
                    href="tel:+917909790983"
                    className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center gap-3.5 transition-all duration-300 hover:border-[#A8824C]/60 hover:shadow-md group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#A8824C]/15 border border-[#A8824C]/30 flex items-center justify-center text-[#A8824C] group-hover:scale-110 group-hover:bg-[#A8824C]/25 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#5E6670]">
                        Need Any Help?
                      </div>
                      <div className="text-sm font-semibold text-[#16191D] group-hover:text-[#A8824C] transition-colors">
                        +91 79097 90983
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:atelier@nirmansolutions.com"
                    className="p-4 rounded-xl bg-white border border-black/[0.08] shadow-sm flex items-center gap-3.5 transition-all duration-300 hover:border-[#A8824C]/60 hover:shadow-md group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#A8824C]/15 border border-[#A8824C]/30 flex items-center justify-center text-[#A8824C] group-hover:scale-110 group-hover:bg-[#A8824C]/25 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#5E6670]">
                        Email Atelier
                      </div>
                      <div className="text-sm font-semibold text-[#16191D] group-hover:text-[#A8824C] transition-colors truncate max-w-[170px]">
                        atelier@nirman.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
