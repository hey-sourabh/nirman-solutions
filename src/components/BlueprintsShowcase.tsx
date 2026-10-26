"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Layers,
  Ruler,
  Maximize2,
  FileText,
  Sparkles,
  Download,
  Eye,
  Check
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageShutter from "@/components/ImageShutter";

interface TechnicalDrawing {
  id: string;
  code: string;
  title: string;
  category: "Site Topography" | "Structural Section" | "CAD Axonometric" | "Schematic Blueprint";
  scale: string;
  discipline: string;
  specs: string;
  image: string;
  description: string;
  annotations: string[];
}

const drawings: TechnicalDrawing[] = [
  {
    id: "site-topo",
    code: "DWG-001/TOPO",
    title: "Master Site Plan & Topographic Contours",
    category: "Site Topography",
    scale: "1:200 @ A1",
    discipline: "Civil & Landscaping Topography",
    specs: "Contour Intervals: 1.0m • True North Solar Orientation • Runoff Drainage",
    image: "/images/site-plan.jpg",
    description: "Detailed civil engineering topography mapping property setbacks, terraced infinity pool footprint, natural boulder retaining walls, and driveway access gradients.",
    annotations: [
      "Natural Ridge Line 210m - 216m Elevation",
      "Cantilever Sun Deck & Infinity Edge",
      "Permeable Stone Pavers & Native Flora Buffer",
      "Integrated Bio-Retention Swale Loop"
    ],
  },
  {
    id: "bim-section",
    code: "DWG-002/SECT",
    title: "Transverse Cutaway & Structural Section",
    category: "Structural Section",
    scale: "1:100 @ A2",
    discipline: "Structural & Spatial Engineering",
    specs: "Foundation: Concrete Friction Piles • HEB 300 Cantilever • Double Void: 6.2m",
    image: "/images/section-drawing.jpg",
    description: "Full height transverse architectural section displaying foundation pile integration, post-tensioned floor slabs, double-height living void, and thermal insulation envelopes.",
    annotations: [
      "Deep Friction Piles (P1 - P3) into Bedrock",
      "Cantilevered Living Deck with Glass Balustrade",
      "Triple-Glazed Thermally Broken Curtain Wall",
      "Rooftop PV Solar Arrays & Concealed Gutters"
    ],
  },
  {
    id: "exploded-axono",
    code: "DWG-003/AXO",
    title: "Exploded 3D Axonometric Assembly",
    category: "CAD Axonometric",
    scale: "1:100 Isometric",
    discipline: "Parametric Envelope & Detailing",
    specs: "BIM Level 3 • Zinc Roof Truss • Motorized Timber Louvers",
    image: "/images/axonometric.jpg",
    description: "Multi-layered axonometric diagram exposing the interdependent relationship between roof framing, floor plates, cantilever structural columns, and stepped hillside retaining walls.",
    annotations: [
      "Engineered Zinc-Clad Roof Truss Assembly",
      "Motorized Vertical Timber Solar Shading",
      "Reinforced Concrete Core & Shear Walls",
      "Sub-Grade Drainage & Hydrostatic Relief"
    ],
  },
  {
    id: "schematic-cad",
    code: "DWG-004/CAD",
    title: "Bespoke Villa Architectural CAD Blueprint",
    category: "Schematic Blueprint",
    scale: "1:50 @ A0",
    discipline: "Architectural Space Planning",
    specs: "CAD Vector 2026 • Millimeter Accuracy • Full Dimension String",
    image: "/images/blueprint.jpg",
    description: "Comprehensive 2D dimensioned floor plan and axonometric wireframe model illustrating structural grid offsets, bedroom suites, and cantilever pool terrace.",
    annotations: [
      "Axonometric Wireframe Model Overlay",
      "Ground Floor Living, Kitchen & Dining Enfilade",
      "Cantilever Swimming Pool Engineering",
      "North-Point True Celestial Compass"
    ],
  },
];

export default function BlueprintsShowcase() {
  const [activeDrawing, setActiveDrawing] = useState<TechnicalDrawing>(drawings[0]);
  const [inspectModal, setInspectModal] = useState<TechnicalDrawing | null>(null);

  return (
    <section id="blueprints" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.06]">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Reveal animation="slide-down" delay={80}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                <Ruler className="w-3.5 h-3.5 text-[#A8824C]" />
                <span>Technical Drawings & Blueprints</span>
              </div>
            </Reveal>

            <Reveal animation="slide-up" delay={140}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight leading-[1.15]">
                Engineering Schematics,{" "}
                <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#926E3A] via-[#A8824C] to-[#6E4F23]">
                  Contour Maps & Axonometrics
                </span>
              </h2>
            </Reveal>

            <Reveal animation="slide-up" delay={200}>
              <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
                Every Nirman commission is backed by uncompromising technical drafting—from raw site topography and transverse cutaways to millimetric structural CAD blueprints.
              </p>
            </Reveal>
          </div>

          <Reveal animation="slide-left" delay={150}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono text-[#8C95A0]">BIM Level 3 Stamped</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8824C]" />
              <span className="text-xs font-mono text-[#16191D] font-medium">Revit • ArchiCAD • AutoCAD</span>
            </div>
          </Reveal>
        </div>

        {/* Interactive Master Drafting Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Drawing Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            <Reveal animation="slide-right" delay={120}>
              {drawings.map((dwg) => {
                const isSelected = activeDrawing.id === dwg.id;
                return (
                  <button
                    key={dwg.id}
                    onClick={() => setActiveDrawing(dwg)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col gap-2 mb-3.5 ${
                      isSelected
                        ? "bg-white border-[#A8824C] shadow-lg shadow-[#A8824C]/15 translate-x-1"
                        : "bg-white/70 border-black/[0.06] hover:bg-white hover:border-black/15 shadow-sm"
                    } group`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-[#FAF8F5] text-[#926E3A] border border-[#A8824C]/20 font-medium">
                        {dwg.code}
                      </span>
                      <span className="text-xs font-mono text-[#8C95A0]">{dwg.scale}</span>
                    </div>

                    <h3 className={`font-heading text-base sm:text-lg font-medium transition-colors ${
                      isSelected ? "text-[#16191D]" : "text-[#4B535D] group-hover:text-[#16191D]"
                    }`}>
                      {dwg.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-[#5E6670] pt-1 border-t border-black/[0.04]">
                      <span className="font-mono text-[11px]">{dwg.discipline}</span>
                      <span className="text-[11px] font-mono text-[#A8824C] group-hover:underline">View Blueprint →</span>
                    </div>
                  </button>
                );
              })}
            </Reveal>
          </div>

          {/* Right Column: High-Res Blueprint Viewer Console */}
          <div className="lg:col-span-7">
            <Reveal animation="slide-left" delay={180}>
              <div className="bg-white rounded-2xl lg:rounded-3xl border border-black/[0.08] shadow-2xl p-6 sm:p-8 space-y-6">
                
                {/* Visual Canvas Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 group bg-stone-50 shadow-inner">
                  <ImageShutter shutterType="curtain-right" overlayColor="bg-[#16191D]" className="w-full h-full absolute inset-0">
                    <Image
                      src={activeDrawing.image}
                      alt={activeDrawing.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </ImageShutter>

                  {/* Top Overlay Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#926E3A] border border-black/10 font-semibold shadow-sm">
                      {activeDrawing.category}
                    </span>

                    <button
                      onClick={() => setInspectModal(activeDrawing)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-[#16191D] text-[#16191D] hover:text-white text-xs font-mono backdrop-blur-md transition-colors shadow-sm"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full View</span>
                    </button>
                  </div>

                  {/* Bottom Technical Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-mono">
                    <span className="bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                      {activeDrawing.code} • {activeDrawing.scale}
                    </span>
                    <span className="bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm hidden sm:inline">
                      High Precision CAD
                    </span>
                  </div>
                </div>

                {/* Drawing Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#16191D]">
                      {activeDrawing.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#4B535D] font-light leading-relaxed">
                    {activeDrawing.description}
                  </p>
                </div>

                {/* Technical Annotation Callouts */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#5E6670] font-semibold">
                    Key Architectural Annotations & Callouts
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeDrawing.annotations.map((ann, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] border border-black/[0.05] text-xs text-[#16191D]">
                        <Check className="w-3.5 h-3.5 text-[#A8824C] flex-shrink-0 mt-0.5" />
                        <span>{ann}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[#5E6670]">
                    {activeDrawing.specs}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#16191D] hover:bg-[#A8824C] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#A8824C]/25"
                  >
                    <span>Request Full Drawing Set</span>
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* 3-Column Drawing Grid: Site Topography, Sections & Isometric Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drawings.slice(0, 3).map((dwg, idx) => (
            <div key={dwg.id}>
              <Reveal animation="slide-up" delay={120 * (idx + 1)}>
                <div
                  onClick={() => setActiveDrawing(dwg)}
                  className="cursor-pointer group bg-white rounded-2xl overflow-hidden border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <ImageShutter shutterType="curtain-up" overlayColor="bg-[#16191D]" className="w-full h-full absolute inset-0">
                      <Image
                        src={dwg.image}
                        alt={dwg.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </ImageShutter>
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/95 text-[#926E3A] border border-black/10 font-semibold shadow-sm">
                        {dwg.code}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-mono text-[#8C95A0] uppercase tracking-wider">
                      {dwg.scale}
                    </div>
                    <h4 className="font-heading text-base font-medium text-[#16191D] group-hover:text-[#A8824C] transition-colors line-clamp-1">
                      {dwg.title}
                    </h4>
                    <p className="text-xs text-[#5E6670] line-clamp-2 font-light">
                      {dwg.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Fullscreen Inspection Modal */}
        {inspectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full bg-white border border-black/15 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 animate-scale-up">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-[#A8824C] tracking-widest font-semibold">
                    {inspectModal.code} • {inspectModal.discipline}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#16191D] mt-1">
                    {inspectModal.title}
                  </h3>
                  <div className="text-xs text-[#5E6670] mt-1 font-mono">
                    {inspectModal.scale} — {inspectModal.specs}
                  </div>
                </div>
                <button
                  onClick={() => setInspectModal(null)}
                  className="text-[#5E6670] hover:text-[#16191D] p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-sm font-mono transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-inner border border-black/10">
                <Image
                  src={inspectModal.image}
                  alt={inspectModal.title}
                  fill
                  className="object-contain bg-stone-50"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-[#4B535D] leading-relaxed font-light">
                  {inspectModal.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {inspectModal.annotations.map((ann, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-black/[0.06] text-xs font-mono text-[#16191D] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#A8824C]" />
                      <span>{ann}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.08] flex justify-end gap-3">
                <button
                  onClick={() => setInspectModal(null)}
                  className="px-5 py-2 text-xs uppercase tracking-wider text-[#5E6670] hover:text-[#16191D]"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setInspectModal(null)}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#16191D] text-white rounded-full hover:bg-[#A8824C] transition-colors shadow-md"
                >
                  Inquire For Project Stamping
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
