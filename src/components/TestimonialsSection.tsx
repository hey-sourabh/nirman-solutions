"use client";

import Image from "next/image";
import { Star, Quote, Award, Building2, CheckCircle, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Er. Aman Parihar and the Nirman Site Solutions team designed our 3-story luxury duplex in Rajasthan beyond our expectations. The double-height drawing room and landscaped rooftop terrace garden with gazebo are absolute showstoppers.",
    author: "Mr. Shubham Ji",
    title: "The Royal Duplex Villa & Penthouse",
    location: "Rajasthan",
    rating: 5,
    tag: "Luxury Residential Commission",
    image: "/images/gallery/nirman-signature-villa.jpg",
  },
  {
    quote:
      "From the grand 23-foot drawing room to the double-height chandelier lobby and master bath suite, Nirman Site Solutions delivered flawless architectural floor plans. Their millimeter accuracy made execution effortless.",
    author: "Mr. Aalam Khan",
    title: "The Grand Manor Residence",
    location: "Urban Sector",
    rating: 5,
    tag: "Contemporary Manor Design",
    image: "/images/gallery/grand-palace-interior.jpg",
  },
  {
    quote:
      "Planning a 4-level urban townhome with a dedicated acoustic podcast studio and personal gym required serious structural engineering. Nirman created an ingenious layout with natural light and fluid circulation across all 4 floors.",
    author: "Mr. Rishikesh Pandey Ji",
    title: "4-Level Urban Studio & Residence",
    location: "Metropolitan Corridor",
    rating: 5,
    tag: "Vertical Urban Architecture",
    image: "/images/gallery/kenneth-residency.jpg",
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
                  className="bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-xl relative group h-full space-y-5"
                >
                  <div className="space-y-4">
                    {/* Project Render Preview Thumbnail */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-black/10 bg-stone-100 shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white font-mono text-[10px]">
                        <span className="truncate max-w-[180px]">{item.title}</span>
                        <span className="text-[#C6A676]">{item.location}</span>
                      </div>
                    </div>

                    {/* Rating stars & Quote mark */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 text-[#A8824C]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-stone-300 group-hover:text-[#A8824C] transition-colors" />
                    </div>

                    <p className="text-sm text-[#4B535D] font-light italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] space-y-1">
                    <div className="font-medium text-[#16191D] text-sm">
                      {item.author}
                    </div>
                    <div className="text-xs text-[#5E6670] font-mono">
                      {item.title} • {item.location}
                    </div>
                    <div className="text-[10px] font-mono text-[#926E3A] pt-0.5 uppercase tracking-wider font-semibold">
                      {item.tag}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* 4-Item Metric Counters Bar with Slide-Up */}
        <Reveal animation="slide-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] shadow-lg">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#A8824C]">
                  <stat.icon className="w-5 h-5" />
                  <span className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#16191D]">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs text-[#5E6670] font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
