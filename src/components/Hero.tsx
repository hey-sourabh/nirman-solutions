"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Building2, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slow-motion playback (0.5x) for cinematic luxury architectural feel
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleVideoMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.playbackRate = 0.5;
  };

  const stats = [
    { value: "18+", label: "Years Experience", icon: Building2 },
    { value: "140+", label: "Masterpieces Built", icon: CheckCircle2 },
    { value: "28", label: "Design Accolades", icon: Award },
    { value: "100%", label: "Sustainable Design", icon: ShieldCheck },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-screen flex items-center pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle architectural background millimeter grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_40%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient warm radial glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#A8824C]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Pure Architectural Typography & CTAs (Clean, No Video Bleed) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Tagline Badge */}
            <Reveal animation="slide-down" delay={80}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A8824C]/30 bg-white/95 shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                <Sparkles className="w-3.5 h-3.5 text-[#A8824C]" />
                <span>Where Comfort Meets Creativity</span>
              </div>
            </Reveal>

            {/* Main Headline with Progressive Blur-Fade */}
            <Reveal animation="slide-up" delay={150}>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#16191D] leading-[1.12]">
                Design That Feels Like Home,{" "}
                <span className="block sm:inline font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-[#926E3A] via-[#A8824C] to-[#6E4F23]">
                  Looks Like Art
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal animation="slide-up" delay={220}>
              <p className="text-sm sm:text-base lg:text-lg text-[#4B535D] font-light leading-relaxed max-w-xl">
                Nirman Site Solutions blends progressive structural engineering, natural materiality,
                and refined interior craftsmanship to create bespoke sanctuaries and landmark
                environments.
              </p>
            </Reveal>

            {/* Pill CTA Buttons */}
            <Reveal animation="slide-up" delay={300}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#projects"
                  id="hero-explore-projects"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#16191D] hover:bg-[#A8824C] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#A8824C]/25 group"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
                </a>

                <a
                  href="#contact"
                  id="hero-contact-cta"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#16191D] hover:text-[#A8824C] bg-white hover:bg-stone-50 border border-black/10 hover:border-[#A8824C]/40 rounded-full transition-all duration-300 shadow-sm"
                >
                  <span>Initiate Commission</span>
                </a>
              </div>
            </Reveal>

            {/* Trust Points / Credential Metrics */}
            <Reveal animation="slide-up" delay={380}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-black/[0.08]">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[#A8824C]">
                      <stat.icon className="w-4 h-4" />
                      <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#16191D]">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#5E6670] font-normal">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Right Column: Dedicated Video Viewport (Covers strictly the right half of the fold) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <Reveal animation="slide-left" delay={200}>
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-white group aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full">
                
                {/* Slow-Motion Architectural Video (No Controls, Runs Silently at 0.5x speed) */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={handleVideoMetadata}
                  poster="/images/hero.jpg"
                  className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 group-hover:scale-105"
                >
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                  <source src="https://demo.awaikenthemes.com/assets/videos/inspaire-video.mp4" type="video/mp4" />
                </video>

                {/* Subtle vignette on video for atmospheric depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge on Video */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[10px] font-mono uppercase tracking-wider text-[#16191D] font-medium shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Architectural Cinema</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    4K Cinematic
                  </span>
                </div>

                {/* Floating Featured Project Badge (Light Glassmorphic with Gentle Floating Animation) */}
                <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-xl space-y-1.5 border border-black/10 shadow-xl animate-float z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#926E3A] font-semibold">
                      Featured Commission
                    </span>
                    <span className="text-[10px] text-[#5E6670] font-mono">Completed 2026</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-medium text-[#16191D] tracking-tight">
                    The Coastal Horizon Pavilion
                  </h2>
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-[#5E6670] pt-1 border-t border-black/[0.08] font-mono">
                    <span>Cantilever Villa • 8,400 sq.ft</span>
                    <span className="text-[#16191D] font-medium">Malibu Coast</span>
                  </div>
                </div>

              </div>

              {/* Architectural bronze accent brackets behind the viewport */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#A8824C]/40 -z-10 rounded-br-2xl pointer-events-none hidden sm:block" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-[#A8824C]/40 -z-10 rounded-tl-2xl pointer-events-none hidden sm:block" />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
