"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#16191D] border-t border-black/[0.1] pt-20 pb-12 text-[#9EA7B3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal animation="slide-up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
            
            {/* Brand & Mission */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="group inline-flex items-center gap-3.5">
                <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/logo-emblem.png"
                    alt="Nirman Site Solutions"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-bold tracking-widest text-white uppercase group-hover:text-[#A8824C] transition-colors leading-tight">
                    NIRMAN
                  </span>
                  <span className="text-[10px] tracking-[0.24em] text-[#A8824C] uppercase font-mono font-semibold">
                    SITE SOLUTIONS
                  </span>
                </div>
              </Link>

              <p className="text-xs text-[#9EA7B3] font-light leading-relaxed max-w-sm">
                An international architectural atelier crafting distinguished residences, bespoke
                interiors, and monumental public spaces with rigorous material integrity.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#A8824C] text-[#C4CDD7] hover:text-[#16191D] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#A8824C] text-[#C4CDD7] hover:text-[#16191D] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#A8824C] text-[#C4CDD7] hover:text-[#16191D] flex items-center justify-center transition-colors"
                  aria-label="Global Portfolio"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links: Portfolio */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                Portfolio
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#projects" className="hover:text-[#A8824C] transition-colors">
                    Coastal Residences
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#A8824C] transition-colors">
                    Bespoke Interiors
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#A8824C] transition-colors">
                    Urban Landmarks
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#A8824C] transition-colors">
                    Hospitality Estates
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links: Disciplines */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                Capabilities
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#services" className="hover:text-[#A8824C] transition-colors">
                    Architectural Blueprints
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#A8824C] transition-colors">
                    Interior Architecture
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#A8824C] transition-colors">
                    Parametric Facades
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#A8824C] transition-colors">
                    Turnkey Execution
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter: Architectural Journal */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                The Nirman Journal
              </h4>
              <p className="text-xs text-[#9EA7B3] font-light leading-relaxed">
                Curated monographs, materiality essays, and early previews of ongoing commissions delivered quarterly.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-[#A8824C]/30 text-xs text-[#A8824C]">
                  <Check className="w-4 h-4" />
                  <span>You are subscribed to The Nirman Journal.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#A8824C]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#A8824C] hover:bg-[#926E3A] text-white font-semibold text-xs flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C95A0] gap-4">
            <div>
              &copy; 2026 Nirman Site Solutions LLP. All architectural rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-[11px] font-mono">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Commission</a>
              <span>•</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-[#A8824C] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-semibold"
              >
                <span>Back to Top ↑</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
