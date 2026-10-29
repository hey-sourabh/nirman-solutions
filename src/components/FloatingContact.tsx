"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 animate-slide-up delay-500">
      <a
        href="https://wa.me/919111811918"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-white/95 hover:bg-white text-[#16191D] border border-black/10 hover:border-[#A8824C]/60 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Direct Architectural Inquiry on WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="hidden sm:inline text-xs font-mono tracking-wider uppercase text-[#16191D] font-medium group-hover:text-[#A8824C]">
          WhatsApp Desk
        </span>
        <div className="w-6 h-6 rounded-full bg-[#16191D] group-hover:bg-[#A8824C] text-white flex items-center justify-center transition-colors shadow-sm">
          <MessageSquare className="w-3.5 h-3.5" />
        </div>
      </a>
    </div>
  );
}
