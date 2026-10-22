"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Luxury Residential Villa",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      city: "Mumbai Atelier",
      address: "Tower 4, Maker Maxity, BKC, Mumbai 400051",
      phone: "+91 (0) 22 8492 1000",
      hours: "Mon – Sat: 9:30 AM – 7:00 PM IST",
    },
    {
      city: "New Delhi Design Studio",
      address: "One Style Mile, Mehrauli, New Delhi 110030",
      phone: "+91 (0) 11 4102 9800",
      hours: "Mon – Sat: 10:00 AM – 6:30 PM IST",
    },
    {
      city: "London Gallery",
      address: "28 Berkeley Square, Mayfair, London W1J 6EN",
      phone: "+44 (0) 20 7946 0912",
      hours: "Mon – Fri: 9:00 AM – 6:00 PM GMT",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#090b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Office Contacts & Brand Promise */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c6a676]">
                Initiate A Commission
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                Let&apos;s Shape Something Enduring
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Whether envisioning a private coastal sanctuary or a landmark cultural pavilion, our
                principals are available for confidential consultations worldwide.
              </p>
            </div>

            {/* Studio Offices */}
            <div className="space-y-4 pt-2">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl glass-card space-y-1.5 transition-all hover:border-[#c6a676]/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white text-sm">{office.city}</span>
                    <span className="text-[10px] font-mono text-[#c6a676] uppercase">In-Person & Virtual</span>
                  </div>
                  <p className="text-xs text-zinc-400 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c6a676] flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 pt-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-zinc-400" />
                      {office.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#c6a676]" />
              <div className="text-xs">
                <span className="text-zinc-400 block">General & Press Inquiries:</span>
                <a href="mailto:atelier@nirmansolutions.com" className="text-white hover:text-[#c6a676] font-mono font-medium">
                  atelier@nirmansolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#c6a676]/20 border border-[#c6a676] text-[#c6a676] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-white">
                    Commission Request Received
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>.
                    A principal architect from Nirman Solutions will review your project parameters
                    and connect with you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        projectType: "Luxury Residential Villa",
                        location: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white border border-white/10 rounded-full"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-heading text-xl font-medium text-white">
                      Request Architectural Consultation
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Provide initial project notes to schedule a private briefing with our partners.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        Full Name <span className="text-[#c6a676]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c6a676] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        Email Address <span className="text-[#c6a676]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@residence.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c6a676] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 or +1 (xxx) xxx-xxxx"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c6a676] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        Project Typology
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/10 text-sm text-white focus:outline-none focus:border-[#c6a676] transition-colors"
                      >
                        <option value="Luxury Residential Villa">Luxury Residential Villa</option>
                        <option value="Penthouse Interior Architecture">Penthouse Interior Architecture</option>
                        <option value="Commercial Landmark / Pavilion">Commercial Landmark / Pavilion</option>
                        <option value="Hospitality & Resort Masterplan">Hospitality & Resort Masterplan</option>
                        <option value="Comprehensive Turnkey Build">Comprehensive Turnkey Build</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">
                      Site Location / City & Expected Area
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Alibaug / Beverly Hills / 12,000 sq.ft plot"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c6a676] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">
                      Vision & Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your design aspirations, preferred timeline, or specific architectural considerations..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c6a676] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-consultation-btn"
                    className="w-full py-4 rounded-xl bg-[#c6a676] hover:bg-[#d8ba8e] text-black font-semibold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-[#c6a676]/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Transmit Commission Brief</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
