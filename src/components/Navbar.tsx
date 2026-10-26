"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

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
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Blueprints", href: "#blueprints" },
    { name: "Portfolio", href: "#projects" },
    { name: "Process", href: "#philosophy" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled
          ? "glass-nav py-3.5 shadow-sm shadow-black/[0.04]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo-emblem.png"
              alt="Nirman Site Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-widest text-[#16191D] uppercase leading-tight group-hover:text-[#A8824C] transition-colors">
              NIRMAN
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#A8824C] uppercase font-mono font-semibold">
              SITE SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-[#4B535D] hover:text-[#A8824C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A8824C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+917909790983"
            className="flex items-center gap-2 text-xs tracking-wider text-[#5E6670] hover:text-[#16191D] transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#A8824C]" />
            <span>+91 79097 90983</span>
          </a>
          
          <a
            href="#contact"
            id="nav-consultation-btn"
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#16191D] hover:bg-[#A8824C] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#A8824C]/25 active:scale-95 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#16191D] hover:text-[#A8824C] focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-black/[0.08] px-6 py-6 mt-2 space-y-4 animate-slide-down">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-[#16191D] hover:text-[#A8824C] py-1.5 transition-colors border-b border-black/[0.05]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+917909790983"
              className="text-xs font-mono text-[#5E6670] flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8824C]" />
              <span>+91 79097 90983</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-widest text-white bg-[#16191D] hover:bg-[#A8824C] rounded-full text-center shadow-md transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
