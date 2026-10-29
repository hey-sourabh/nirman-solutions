"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Ruler,
  Building,
  Zap,
  Droplets,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageShutter from "@/components/ImageShutter";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: typeof Ruler;
  tag: string;
  description: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
  image: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: "floor-plan",
    number: "01",
    title: "Floor Plan & Spatial Schematics",
    subtitle: "Zoning Optimization & Circadian Flow",
    icon: Ruler,
    tag: "Blueprint Core",
    description: "Architectural floor planning optimized for solar exposure, natural sightlines, functional acoustics, and fluid human circulation.",
    deliverables: [
      "Master Demarcation Blueprints (1:100 & 1:50)",
      "Circulation & Sightline Flow Diagrams",
      "Vastu / Environmental Harmonization",
      "Dimensional Furniture Layouts & Clearances"
    ],
    specs: [
      { label: "BIM Integration", value: "Revit / ArchiCAD" },
      { label: "Standard Scale", value: "1:50 / 1:100" },
      { label: "Turnaround", value: "2 - 3 Weeks" },
    ],
    image: "/images/blueprints/beachside-resort-p1.jpg",
  },
  {
    id: "structural",
    number: "02",
    title: "Structural & Seismic Engineering",
    subtitle: "Cantilevers, Post-Tensioned Slabs & Columns",
    icon: Building,
    tag: "Engineering",
    description: "Advanced structural calculations ensuring earthquake resilience, soil load-bearing capacity, and audacious cantilever architectural expressions.",
    deliverables: [
      "Seismic Load Analysis & Calculation Reports",
      "Foundation & Footing Reinforcement Schedules",
      "Post-Tensioned Beam & Column Schematics",
      "Municipal Structural Engineering Stamp"
    ],
    specs: [
      { label: "Seismic Code", value: "Zone IV & V Compliant" },
      { label: "Material Grade", value: "Fe550D / High-Strength Concrete" },
      { label: "Verification", value: "Independent Peer Review" },
    ],
    image: "/images/blueprints/shubham-villa-p1.jpg",
  },
  {
    id: "electrical",
    number: "03",
    title: "Working & Electrical Schematics",
    subtitle: "Circadian Lighting & Smart Automation",
    icon: Zap,
    tag: "Systems",
    description: "Comprehensive low-voltage automation, hidden architectural conduit runs, circadian LED troughs, and emergency power backup networks.",
    deliverables: [
      "Circadian & Dimmable Lighting Layouts",
      "Smart Home Automation Conduit Diagrams",
      "Switchboard & Distribution Board (DB) Schedules",
      "EV Charging & Solar Inverter Integration"
    ],
    specs: [
      { label: "Automation", value: "KNX / Lutron Compatible" },
      { label: "Efficiency", value: "100% LED Architectural" },
      { label: "Surge Protection", value: "Class 1 & 2 SPD" },
    ],
    image: "/images/gallery/modern-triplex-driveway.jpg",
  },
  {
    id: "plumbing",
    number: "04",
    title: "Plumbing & Hydrology Engineering",
    subtitle: "Rainwater Harvesting & Acoustic Drainage",
    icon: Droplets,
    tag: "Hydrology",
    description: "Silent gravity-fed drainage systems, rainwater catchment loops, greywater recycling, and commercial-grade hydrostatic water pressure boosting.",
    deliverables: [
      "Silent Cast Iron / Acoustic Drainage Runs",
      "Dual-Plumbing Greywater Recycling Layouts",
      "Rainwater Harvesting Filtration & Storage",
      "Solar Water Heating & Heat Pump Manifolds"
    ],
    specs: [
      { label: "Drainage", value: "Sound-Insulated Multi-Layer" },
      { label: "Water Savings", value: "Up to 45% Harvested" },
      { label: "Pressure", value: "Multi-Zone Constant Boost" },
    ],
    image: "/images/blueprints/aalam-manor-p1.jpg",
  },
  {
    id: "elevation",
    number: "05",
    title: "Elevation & Facade Engineering",
    subtitle: "Parametric Louvers, Travertine & Glazing",
    icon: Layers,
    tag: "Aesthetics",
    description: "Sculptural building envelopes utilizing insulated low-E glazing, ventilated stone facades, fluted terracotta, and motorized sun shading louvers.",
    deliverables: [
      "Photorealistic Exterior Renders (Day & Dusk)",
      "Thermal Bridging & U-Value Calculations",
      "Curtain Wall & Flush Frame Joinery Details",
      "Wind Pressure & Deflection Simulations"
    ],
    specs: [
      { label: "Glazing", value: "Triple-Glazed Argon Low-E" },
      { label: "Cladding", value: "Rear-Ventilated Travertine" },
      { label: "Sun Study", value: "Equinox Solar Shading" },
    ],
    image: "/images/gallery/nirman-signature-villa.jpg",
  },
  {
    id: "interior",
    number: "06",
    title: "Luxury Interior Architecture",
    subtitle: "Bespoke Millwork, Travertine & Bouclé",
    icon: Sparkles,
    tag: "Interior",
    description: "Curated sanctuary interiors orchestrating natural stone, acoustic fluted timber, concealed doors, and tailor-made artisan furnishings.",
    deliverables: [
      "Custom Cabinetry & Millwork Shop Drawings",
      "Curated Material & Finish Schedules",
      "Acoustic Wall Paneling & Lighting Coordination",
      "Turnkey FF&E Procurement & White-Glove Styling"
    ],
    specs: [
      { label: "Materials", value: "Italian Travertine & Fluted Walnut" },
      { label: "Hardware", value: "Concealed Soft-Close Architectural" },
      { label: "Styling", value: "Turnkey Ready-to-Live" },
    ],
    image: "/images/gallery/grand-palace-interior.jpg",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeService = serviceItems[activeTab];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F4F0E8] relative overflow-hidden border-t border-black/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#A8824C]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <Reveal animation="slide-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
              <span>Architectural Disciplines</span>
            </div>
          </Reveal>

          <Reveal animation="slide-up" delay={200}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight">
              Comprehensive Design & Engineering Services
            </h2>
          </Reveal>

          <Reveal animation="slide-up" delay={300}>
            <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
              From initial zoning clearance and structural schematics to bespoke elevation facade engineering,
              explore our end-to-end architectural disciplines below.
            </p>
          </Reveal>
        </div>

        {/* Interactive Split Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Discipline Selector Menu with Slide-Right */}
          <div className="lg:col-span-5 space-y-3">
            <Reveal animation="slide-right" delay={150}>
              {serviceItems.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border mb-3 ${
                      isSelected
                        ? "bg-white border-[#A8824C] shadow-lg shadow-[#A8824C]/15"
                        : "bg-white/70 border-black/[0.06] hover:bg-white hover:border-black/15 shadow-sm"
                    } group`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#16191D] text-white shadow-sm"
                            : "bg-[#FAF8F5] text-[#5E6670] group-hover:text-[#A8824C]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#A8824C]">{item.number}</span>
                          <h3 className={`text-sm sm:text-base font-medium tracking-tight ${isSelected ? "text-[#16191D]" : "text-[#4B535D] group-hover:text-[#16191D]"}`}>
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-[#5E6670] font-light mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full ${
                        isSelected
                          ? "bg-[#A8824C]/15 text-[#926E3A] border border-[#A8824C]/30 font-medium"
                          : "text-[#5E6670] border border-black/[0.06] bg-[#FAF8F5]"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </button>
                );
              })}
            </Reveal>
          </div>

          {/* Right Column: Live Technical Console / Detail Showcase with Slide-Left */}
          <div className="lg:col-span-7">
            <Reveal animation="slide-left" delay={200}>
              <div className="bg-white rounded-2xl border border-black/[0.08] shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden transition-all duration-300">
                {/* Visual Header / Blueprint Preview with Shutter Reveal */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-black/10 group shadow-inner">
                  <ImageShutter shutterType="split-horizontal" overlayColor="bg-[#16191D]" className="w-full h-full absolute inset-0">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </ImageShutter>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#926E3A] border border-black/10 font-semibold shadow-sm">
                      Active Discipline • {activeService.number}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight">
                        {activeService.title}
                      </h3>
                      <p className="text-xs text-zinc-200 font-mono mt-0.5">
                        {activeService.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-sm text-[#4B535D] font-light leading-relaxed">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#5E6670]">
                    Key Technical Deliverables Included
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FAF8F5] border border-black/[0.05] text-xs text-[#16191D]">
                        <CheckCircle2 className="w-4 h-4 text-[#A8824C] flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Strip */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-black/[0.08]">
                  {activeService.specs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#FAF8F5] border border-black/[0.05] text-center">
                      <div className="text-[10px] font-mono text-[#5E6670] uppercase tracking-wider">
                        {spec.label}
                      </div>
                      <div className="text-xs font-semibold text-[#16191D] mt-0.5 truncate">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#5E6670]">
                    Tailored CAD blueprints & structural stamping.
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#16191D] hover:bg-[#A8824C] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#A8824C]/25"
                  >
                    <span>Inquire For Discipline</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* Services Visual Gallery Strip */}
        <Reveal animation="slide-up" delay={250}>
          <div className="mt-16 pt-10 border-t border-black/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#926E3A] font-semibold">
                  Disciplines in Action
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-medium text-[#16191D]">
                  Executed Engineering & Architectural Portfolio
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5E6670]">
                All Renders & Plans by Er. Aman Parihar
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {[
                { title: "Signature Villa Facade", tag: "3D Elevation", img: "/images/gallery/nirman-signature-villa.jpg" },
                { title: "Kenneth Residency", tag: "Commercial Tower", img: "/images/gallery/kenneth-residency.jpg" },
                { title: "Palace Chandelier Hall", tag: "Interior Decor", img: "/images/gallery/grand-palace-interior.jpg" },
                { title: "Triplex Villa Court", tag: "Driveway & Fountain", img: "/images/gallery/modern-triplex-driveway.jpg" },
                { title: "Villa Gate & Cars", tag: "Front Entrance", img: "/images/gallery/modern-triplex-facade.jpg" },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-black/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-stone-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <span className="text-[8px] font-mono uppercase tracking-wider text-[#C6A676] block">
                      {item.tag}
                    </span>
                    <h4 className="text-[11px] font-medium line-clamp-1 group-hover:text-[#C6A676] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
