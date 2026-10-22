"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Estimator", href: "#estimator" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c6a676] to-[#8d714a] p-[1px] flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0d0f12] rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#c6a676] transition-transform group-hover:rotate-45 duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-widest text-white uppercase group-hover:text-[#c6a676] transition-colors">
              NIRMAN
            </span>
            <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-mono">
              SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-zinc-300 hover:text-[#c6a676] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c6a676] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-xs tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#c6a676]" />
            <span>+91 (0) 22 8492 1000</span>
          </a>
          <a
            href="#contact"
            id="nav-consultation-btn"
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#0d0f12] bg-[#c6a676] hover:bg-[#d8ba8e] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c6a676]/20 active:scale-95"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-6 py-6 mt-2 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-[#c6a676] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 text-xs font-semibold uppercase tracking-widest text-black bg-[#c6a676] rounded-full text-center"
            >
              Book Consultation
            </a>
            <div className="text-center text-xs text-zinc-400">
              Studio: Mumbai • New Delhi • London
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
