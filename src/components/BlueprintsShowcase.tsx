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
  Check,
  User,
  MapPin,
  Image as ImageIcon
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageShutter from "@/components/ImageShutter";

export interface TechnicalDrawing {
  id: string;
  code: string;
  title: string;
  client: string;
  category: "Resort & Villa" | "Luxury Duplex" | "Grand Manor" | "Urban Studio & Gym";
  scale: string;
  discipline: string;
  specs: string;
  image: string;
  renderPreview: string;
  pages: { sheet: string; label: string; image: string }[];
  description: string;
  annotations: string[];
}

export const technicalDrawings: TechnicalDrawing[] = [
  {
    id: "beachside-resort-blueprint",
    code: "DWG-F01 / RESORT",
    title: "Beachside Resort Villa & Swimming Pool Deck Layout",
    client: "Mr. Akshay",
    category: "Resort & Villa",
    scale: "Scale: NTS • Sheet F-01",
    discipline: "Architectural Layout & Landscape Zoning",
    specs: "Plot: 159'-8\" × 94'-0\" • Ground Slab: 2,318.46 Sq.ft • Total: 6,864 Sq.ft",
    image: "/images/blueprints/beachside-resort-p1.jpg",
    renderPreview: "/images/gallery/modern-triplex-driveway.jpg",
    pages: [
      { sheet: "F-01", label: "Ground Floor & Pool Deck", image: "/images/blueprints/beachside-resort-p1.jpg" },
      { sheet: "F-02", label: "First Floor Bedroom Suites", image: "/images/blueprints/beachside-resort-p2.jpg" },
      { sheet: "F-03", label: "Second Floor Rooftop Bar", image: "/images/blueprints/beachside-resort-p3.jpg" },
    ],
    description: "Authentic architectural furniture plan drawn by Aman Parihar & checked by S. Khan for Nirman Site Solutions. Detailed site zoning incorporating central resort court, private swimming pool, sun deck, poolside gazebo, kitchen pavilion, servant room, and 4-car parking.",
    annotations: [
      "Turquoise Swimming Pool & Timber Sun Deck (18'6\" × 14'6\")",
      "Handcrafted Wooden Gazebo Pavilion (12'0\" × 11'8\")",
      "Central Courtyard Water Fountain & Sculptural Lawn",
      "Independent 4-Bay Vehicle Parking & Access Road",
      "Ground Floor Master Bedroom (13'4\" × 16'0\") with Dress & Toilet",
      "Second Floor Open Rooftop Bar & Lounge Terrace"
    ],
  },
  {
    id: "royal-duplex-blueprint",
    code: "DWG-D01 / DUPLEX",
    title: "Royal Duplex Villa with Double-Height Drawing Room",
    client: "Mr. Shubham Ji (Rajasthan)",
    category: "Luxury Duplex",
    scale: "Floor Ht: 12'-0\" • Wall: 9\" Ext / 5\" Int",
    discipline: "Comprehensive Architectural Floor Plans",
    specs: "Plot: 49'-0\" × 64'-0\" • G+2 + Terrace (6,157 Sq.ft Total Area)",
    image: "/images/blueprints/shubham-villa-p1.jpg",
    renderPreview: "/images/gallery/nirman-signature-villa.jpg",
    pages: [
      { sheet: "Draft-01 (P1)", label: "Ground & First Floor Plans", image: "/images/blueprints/shubham-villa-p1.jpg" },
      { sheet: "Draft-01 (P2)", label: "Second & Landscaped Terrace Plans", image: "/images/blueprints/shubham-villa-p2.jpg" },
    ],
    description: "Detailed multi-level villa blueprint drafted by Er. Aman Parihar for Mr. Shubham Ji. Engineered with double-height drawing room, EV charge machine, passenger lift, private home theater, terrace garden, and open pergola gazebo.",
    annotations: [
      "Double-Height Drawing Room (17'3\" × 17'1\") with Front Porch",
      "EV Charge Machine in Covered Vehicle Parking",
      "Residential Elevator / Lift (4'6\" × 4'6\") across all floors",
      "Private Home Theater Room (18'2\" × 13'5\") on Second Floor",
      "Rooftop Landscaped Terrace Garden with Wooden Gazebo",
      "Marble Pooja Room (8'2\" × 6'1\") & Island Kitchen (14'8\" × 14'2\")"
    ],
  },
  {
    id: "grand-manor-blueprint",
    code: "DWG-P02 / MANOR",
    title: "Grand Manor Residence Master Floor Plans",
    client: "Mr. Aalam Khan",
    category: "Grand Manor",
    scale: "Floor Ht: 13'-0\" • Sheet P-02",
    discipline: "Luxury Residential Space Planning",
    specs: "Plot: 53'-0\" × 56'-0\" • Slab: 3,213 Sq.ft/floor (6,426 Sq.ft Total)",
    image: "/images/blueprints/aalam-manor-p1.jpg",
    renderPreview: "/images/gallery/grand-palace-interior.jpg",
    pages: [
      { sheet: "P-02 (P1)", label: "Ground Floor Plan & Grand Drawing Room", image: "/images/blueprints/aalam-manor-p1.jpg" },
      { sheet: "P-02 (P2)", label: "First Floor Multi-Purpose Hall & Chandelier", image: "/images/blueprints/aalam-manor-p2.jpg" },
    ],
    description: "Bespoke architectural layout by Er. Aman for Mr. Aalam Khan. Showcases 23-foot grand drawing room, double-height chandelier central lobby, master suites with luxury bathtubs and walk-in dressing rooms, multi-purpose family lounge, and party terrace.",
    annotations: [
      "Grand Drawing Room (23'0\" × 18'0\") with Wall Moldings",
      "Double-Height Chandelier Central Family Lobby",
      "Master Suite 01 (17'0\" × 18'4\") with Bath-Tub (6'0\" × 3'6\")",
      "Multi-Purpose Family Entertainment Area (18'5\" × 23'5\")",
      "Island Modular Kitchen (14'3\" × 16'5\") with Store & Wash Area",
      "Front Verandah (10'0\" × 11'7\") with Sculptural Planter Boxes"
    ],
  },
  {
    id: "urban-studio-blueprint",
    code: "DWG-P01 / STUDIO",
    title: "4-Level Urban Residence, Podcast Studio & Gym",
    client: "Mr. Rishikesh Pandey Ji",
    category: "Urban Studio & Gym",
    scale: "Floor Ht: 11'-5\" • Sheets P.01 - P.04",
    discipline: "Vertical Urban Architectural Planning",
    specs: "Plot: 35'-0\" × 68'-0\" (2,380 Sq.ft) • 4 Levels: Ground, 1st, 2nd & 3rd Floor",
    image: "/images/blueprints/rishikesh-residence-p2.jpg",
    renderPreview: "/images/gallery/kenneth-residency.jpg",
    pages: [
      { sheet: "P.01", label: "Ground Floor Car Parking & Fountain", image: "/images/blueprints/rishikesh-residence-p1.jpg" },
      { sheet: "P.02", label: "First Floor Double-Height Living & Library", image: "/images/blueprints/rishikesh-residence-p2.jpg" },
      { sheet: "P.03", label: "Second Floor Master Suite & Overlook", image: "/images/blueprints/rishikesh-residence-p3.jpg" },
      { sheet: "P.04", label: "Third Floor Podcast Studio & Gym", image: "/images/blueprints/rishikesh-residence-p4.jpg" },
    ],
    description: "Modern 4-story architectural plan drafted by Nirman Site Solutions. Features double-height living room, soundproof podcast studio, personal fitness gym, executive office, library, and garden fountain court.",
    annotations: [
      "Acoustic Podcast Studio (9'0\" × 21'4\") with Sound Isolation",
      "Private Fitness Gym (204 Sq.ft) on Penthouse Level",
      "Double-Height Living Room (12'0\" × 14'0\") & Front Balcony",
      "Private Library (8'0\" × 6'9\") & Double-Height Entry Foyer",
      "Ground Floor Gated Car Parking (25'4\" × 16'4\") & Fountain Garden",
      "Integrated Passenger Elevator (6'0\" × 6'0\")"
    ],
  },
];

export default function BlueprintsShowcase() {
  const [activeDrawing, setActiveDrawing] = useState<TechnicalDrawing>(technicalDrawings[0]);
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);
  const [activeViewMode, setActiveViewMode] = useState<"blueprint" | "render">("blueprint");
  const [inspectModal, setInspectModal] = useState<TechnicalDrawing | null>(null);
  const [modalImage, setModalImage] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");

  const handleSelectDrawing = (dwg: TechnicalDrawing) => {
    setActiveDrawing(dwg);
    setSelectedPageIndex(0);
    setActiveViewMode("blueprint");
  };

  const openInspectModal = (dwg: TechnicalDrawing, imgUrl?: string, label?: string) => {
    setInspectModal(dwg);
    setModalImage(imgUrl || (activeViewMode === "render" ? dwg.renderPreview : dwg.pages[selectedPageIndex]?.image || dwg.image));
    setModalTitle(label || (activeViewMode === "render" ? "3D Render Perspective" : dwg.pages[selectedPageIndex]?.label || dwg.title));
  };

  const currentActiveImage = activeViewMode === "render"
    ? activeDrawing.renderPreview
    : activeDrawing.pages[selectedPageIndex]?.image || activeDrawing.image;

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
                <span>Original Architectural Blueprints</span>
              </div>
            </Reveal>

            <Reveal animation="slide-up" delay={140}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight leading-[1.15]">
                Original Floor Plans &{" "}
                <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#926E3A] via-[#A8824C] to-[#6E4F23]">
                  Technical CAD Blueprints
                </span>
              </h2>
            </Reveal>

            <Reveal animation="slide-up" delay={200}>
              <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
                Authentic technical drawings and floor plans drafted by Er. Aman Parihar and the Nirman Site Solutions team. Toggle between 2D dimensioned CAD drafting sheets and 3D architectural renders.
              </p>
            </Reveal>
          </div>

          <Reveal animation="slide-left" delay={150}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono text-[#8C95A0]">Bespoke CAD Drafting</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8824C]" />
              <span className="text-xs font-mono text-[#16191D] font-medium">AutoCAD • Revit • Structural BIM</span>
            </div>
          </Reveal>
        </div>

        {/* Interactive Master Drafting Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Drawing Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            <Reveal animation="slide-right" delay={120}>
              {technicalDrawings.map((dwg) => {
                const isSelected = activeDrawing.id === dwg.id;
                return (
                  <button
                    key={dwg.id}
                    onClick={() => handleSelectDrawing(dwg)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col gap-2 mb-3.5 cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#A8824C] shadow-lg shadow-[#A8824C]/15 translate-x-1"
                        : "bg-white/70 border-black/[0.06] hover:bg-white hover:border-black/15 shadow-sm"
                    } group`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-[#FAF8F5] text-[#926E3A] border border-[#A8824C]/20 font-medium">
                        {dwg.code}
                      </span>
                      <span className="text-xs font-mono text-[#8C95A0]">Client: {dwg.client}</span>
                    </div>

                    <h3 className={`font-heading text-base sm:text-lg font-medium transition-colors ${
                      isSelected ? "text-[#16191D]" : "text-[#4B535D] group-hover:text-[#16191D]"
                    }`}>
                      {dwg.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-[#5E6670] pt-1 border-t border-black/[0.04]">
                      <span className="font-mono text-[11px]">{dwg.specs}</span>
                      <span className="text-[11px] font-mono text-[#A8824C] group-hover:underline">View Sheet →</span>
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
                      src={currentActiveImage}
                      alt={activeDrawing.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-102"
                    />
                  </ImageShutter>

                  {/* Top Overlay Badge & View Mode Toggle */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 z-10">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#926E3A] border border-black/10 font-semibold shadow-sm">
                      {activeDrawing.category}
                    </span>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {/* Blueprint vs Render Toggle */}
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
                        <button
                          onClick={() => setActiveViewMode("blueprint")}
                          className={`px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeViewMode === "blueprint"
                              ? "bg-[#A8824C] text-white font-semibold shadow-sm"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          2D Sheet
                        </button>
                        <button
                          onClick={() => setActiveViewMode("render")}
                          className={`px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeViewMode === "render"
                              ? "bg-[#A8824C] text-white font-semibold shadow-sm"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          3D Render
                        </button>
                      </div>

                      <button
                        onClick={() => openInspectModal(activeDrawing)}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/95 hover:bg-[#16191D] text-[#16191D] hover:text-white text-xs font-mono backdrop-blur-md transition-colors shadow-sm cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Full Zoom</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom Technical Tag */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-xs text-white font-mono z-10 pointer-events-none">
                    <span className="bg-black/75 px-2.5 sm:px-3 py-1 rounded-md backdrop-blur-sm whitespace-nowrap text-[10px] sm:text-xs">
                      {activeDrawing.code} • {activeDrawing.scale}
                    </span>
                    <span className="bg-black/75 px-2.5 sm:px-3 py-1 rounded-md backdrop-blur-sm hidden sm:inline text-xs">
                      Client: {activeDrawing.client}
                    </span>
                  </div>
                </div>

                {/* Multi-Page Blueprint Sheet Switcher */}
                {activeViewMode === "blueprint" && activeDrawing.pages.length > 1 && (
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#5E6670] uppercase tracking-wider font-semibold">
                      Select Floor Sheet:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeDrawing.pages.map((pg, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedPageIndex(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                            selectedPageIndex === idx
                              ? "bg-[#16191D] text-white font-semibold shadow-sm"
                              : "bg-[#FAF8F5] text-[#5E6670] hover:bg-stone-200 border border-black/[0.06]"
                          }`}
                        >
                          <FileText className="w-3 h-3 text-[#A8824C]" />
                          <span>{pg.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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
                    Key Architectural Features & Room Demarcations
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
                    Drafted by <strong>Er. Aman Parihar • Nirman Site Solutions</strong>
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#16191D] hover:bg-[#A8824C] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#A8824C]/25"
                  >
                    <span>Request Custom Floor Plan</span>
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* 4-Card Drawing Grid with Dual Blueprint / 3D Render Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalDrawings.map((dwg, idx) => (
            <div key={dwg.id}>
              <Reveal animation="slide-up" delay={100 * (idx + 1)}>
                <div
                  onClick={() => handleSelectDrawing(dwg)}
                  className="cursor-pointer group bg-white rounded-2xl overflow-hidden border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-full"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-50">
                    <Image
                      src={dwg.image}
                      alt={dwg.title}
                      fill
                      className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/95 text-[#926E3A] border border-black/10 font-semibold shadow-sm">
                        {dwg.code}
                      </span>
                    </div>
                    {/* Render thumbnail in bottom corner */}
                    <div className="absolute bottom-2 right-2 w-10 h-10 rounded-lg overflow-hidden border-2 border-white shadow-md">
                      <Image src={dwg.renderPreview} alt={dwg.title} fill className="object-cover" />
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#8C95A0] uppercase tracking-wider">
                        Client: {dwg.client}
                      </div>
                      <h4 className="font-heading text-sm font-medium text-[#16191D] group-hover:text-[#A8824C] transition-colors line-clamp-2 mt-1">
                        {dwg.title}
                      </h4>
                    </div>
                    <div className="text-[11px] font-mono text-[#A8824C] pt-2 border-t border-black/[0.04]">
                      {dwg.pages.length} Sheets Available →
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Fullscreen Inspection Modal */}
        {inspectModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto"
            onClick={() => setInspectModal(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-white border border-black/15 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 animate-scale-up my-auto max-h-[94vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-black/[0.08] pb-4">
                <div>
                  <span className="text-xs font-mono uppercase text-[#A8824C] tracking-widest font-semibold">
                    {inspectModal.code} • {inspectModal.discipline}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#16191D] mt-1">
                    {inspectModal.title}
                  </h3>
                  <div className="text-xs text-[#5E6670] mt-1 font-mono">
                    Client: <strong>{inspectModal.client}</strong> — {inspectModal.specs}
                  </div>
                </div>
                <button
                  onClick={() => setInspectModal(null)}
                  className="text-[#5E6670] hover:text-[#16191D] p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-sm font-mono transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* View Switcher in Modal */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setModalImage(inspectModal.renderPreview);
                    setModalTitle("3D Architectural Render Perspective");
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    modalImage === inspectModal.renderPreview
                      ? "bg-[#16191D] text-white font-semibold shadow-sm"
                      : "bg-stone-100 text-[#5E6670] hover:bg-stone-200"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#A8824C]" />
                  <span>3D Render</span>
                </button>

                {inspectModal.pages.map((pg, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setModalImage(pg.image);
                      setModalTitle(pg.label);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                      modalImage === pg.image
                        ? "bg-[#16191D] text-white font-semibold shadow-sm"
                        : "bg-stone-100 text-[#5E6670] hover:bg-stone-200"
                    }`}
                  >
                    <FileText className="w-3 h-3 text-[#A8824C]" />
                    <span>{pg.label}</span>
                  </button>
                ))}
              </div>

              {/* Large Zoom Viewport */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-inner border border-black/10 bg-stone-50">
                <Image
                  src={modalImage}
                  alt={modalTitle || inspectModal.title}
                  fill
                  className="object-contain"
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

              <div className="pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-[#5E6670]">
                  Drafted by <strong>Er. Aman Parihar • Nirman Site Solutions</strong>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInspectModal(null)}
                    className="px-5 py-2 text-xs uppercase tracking-wider text-[#5E6670] hover:text-[#16191D] cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setInspectModal(null)}
                    className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#16191D] text-white rounded-full hover:bg-[#A8824C] transition-colors shadow-md"
                  >
                    Inquire For Custom Blueprint
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
