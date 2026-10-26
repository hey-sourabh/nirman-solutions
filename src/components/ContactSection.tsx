"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

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
      phone: "+91 79097 90983",
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
    <section id="contact" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Office Contacts & Brand Promise with Slide-Right */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal animation="slide-right" delay={150}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                  <span>Initiate A Commission</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#16191D] tracking-tight">
                  Let&apos;s Shape Something Enduring
                </h2>
                <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
                  Whether envisioning a private coastal sanctuary or a landmark cultural pavilion, our
                  principals are available for confidential consultations worldwide.
                </p>
              </div>

              {/* Studio Offices */}
              <div className="space-y-4 pt-4">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-black/[0.08] shadow-sm space-y-1.5 transition-all hover:border-[#A8824C]/40 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#16191D] text-sm">{office.city}</span>
                      <span className="text-[10px] font-mono text-[#926E3A] uppercase font-semibold">In-Person & Virtual</span>
                    </div>
                    <p className="text-xs text-[#5E6670] flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A8824C] flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#8C95A0] pt-1 font-mono">
                      <span className="flex items-center gap-1 text-[#4B535D]">
                        <Phone className="w-3 h-3 text-[#A8824C]" />
                        {office.phone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-black/[0.08] bg-white shadow-sm flex items-center gap-3 mt-4">
                <Mail className="w-5 h-5 text-[#A8824C]" />
                <div className="text-xs">
                  <span className="text-[#5E6670] block">General & Press Inquiries:</span>
                  <a href="mailto:atelier@nirmansolutions.com" className="text-[#16191D] hover:text-[#A8824C] font-mono font-medium">
                    atelier@nirmansolutions.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Consultation Booking Form with Slide-Left */}
          <div className="lg:col-span-7">
            <Reveal animation="slide-left" delay={200}>
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-black/[0.08] shadow-xl relative">
                {submitted ? (
                  <div className="py-16 text-center space-y-4 animate-scale-up">
                    <div className="w-16 h-16 rounded-full bg-[#A8824C]/15 border border-[#A8824C] text-[#A8824C] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-medium text-[#16191D]">
                      Commission Request Received
                    </h3>
                    <p className="text-sm text-[#5E6670] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#16191D] font-medium">{formData.name}</span>.
                      A principal architect from Nirman Site Solutions will review your project parameters
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
                      className="mt-4 px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-[#5E6670] hover:text-[#16191D] border border-black/[0.1] rounded-full hover:bg-stone-50"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-black/[0.08] pb-4">
                      <h3 className="font-heading text-xl font-medium text-[#16191D]">
                        Request Architectural Consultation
                      </h3>
                      <p className="text-xs text-[#5E6670] mt-1">
                        Provide initial project notes to schedule a private briefing with our partners.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#5E6670] font-semibold">
                          Full Name <span className="text-[#A8824C]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-sm text-[#16191D] placeholder-[#8C95A0] focus:outline-none focus:border-[#A8824C] focus:bg-white transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#5E6670] font-semibold">
                          Email Address <span className="text-[#A8824C]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. eleanor@residence.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-sm text-[#16191D] placeholder-[#8C95A0] focus:outline-none focus:border-[#A8824C] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#5E6670] font-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 or +1 (xxx) xxx-xxxx"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-sm text-[#16191D] placeholder-[#8C95A0] focus:outline-none focus:border-[#A8824C] focus:bg-white transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[#5E6670] font-semibold">
                          Project Typology
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-sm text-[#16191D] focus:outline-none focus:border-[#A8824C] focus:bg-white transition-colors"
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
                      <label className="text-xs font-mono text-[#5E6670] font-semibold">
                        Site Location / City & Expected Area
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Alibaug / Beverly Hills / 12,000 sq.ft plot"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-sm text-[#16191D] placeholder-[#8C95A0] focus:outline-none focus:border-[#A8824C] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#5E6670] font-semibold">
                        Vision & Specific Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your design aspirations, preferred timeline, or specific architectural considerations..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-black/[0.08] text-sm text-[#16191D] placeholder-[#8C95A0] focus:outline-none focus:border-[#A8824C] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="submit-consultation-btn"
                      className="w-full py-4 rounded-xl bg-[#16191D] hover:bg-[#A8824C] text-white font-semibold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#A8824C]/25 flex items-center justify-center gap-2 group"
                    >
                      <span>Transmit Commission Brief</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
