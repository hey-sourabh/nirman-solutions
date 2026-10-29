"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2, Check, FileText, Sparkles, User, Ruler } from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageShutter, { ShutterType } from "@/components/ImageShutter";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "Architecture" | "Interior Design" | "Commercial & Urban";
  location: string;
  dimensions: string;
  area: string;
  year: string;
  image: string; // Primary authentic render
  galleryImages: { title: string; image: string }[];
  blueprint: string; // Primary blueprint
  blueprintPages: { label: string; image: string }[];
  description: string;
  features: string[];
  gridClass: string;
  aspectClass: string;
}

export const projects: Project[] = [
  {
    id: "nirman-signature-villa",
    title: "Nirman Signature 3-Story Luxury Villa",
    client: "Mr. Shubham Ji",
    category: "Architecture",
    location: "Rajasthan",
    dimensions: "49'-0\" × 64'-0\"",
    area: "6,157 sq.ft (G+2 + Terrace)",
    year: "2026",
    image: "/images/gallery/nirman-signature-villa.jpg",
    galleryImages: [
      { title: "Official Nirman Facade", image: "/images/gallery/nirman-signature-villa.jpg" },
      { title: "Gated Front Elevation", image: "/images/gallery/modern-triplex-facade.jpg" },
      { title: "Courtyard & Driveway", image: "/images/gallery/modern-triplex-driveway.jpg" },
    ],
    blueprint: "/images/blueprints/shubham-villa-p1.jpg",
    blueprintPages: [
      { label: "Ground & 1st Floor Plans (Draft-01)", image: "/images/blueprints/shubham-villa-p1.jpg" },
      { label: "2nd & Landscaped Terrace Plans", image: "/images/blueprints/shubham-villa-p2.jpg" },
    ],
    description: "Official Nirman Site Solutions commission featuring an iconic arched vertical glass curtain wall, double-height drawing room, EV car charging porch, private passenger elevator, and lush rooftop pergola garden.",
    features: [
      "Arched Vertical Glass Curtain Wall",
      "Double-Height Drawing Room (17'3\"×17'1\")",
      "Rooftop Landscaped Garden with Pergola",
      "EV Car Charging Station in Covered Porch",
      "Residential Elevator / Lift Integration",
      "Original Nirman Blueprint Draft-01"
    ],
    gridClass: "lg:col-span-7",
    aspectClass: "aspect-[4/3] sm:aspect-[16/10]",
  },
  {
    id: "kenneth-residency",
    title: "Kenneth Residency — Luxury Apartment Tower",
    client: "Mr. Rishikesh Pandey Ji / Kenneth Residency",
    category: "Commercial & Urban",
    location: "Metropolitan Corridor",
    dimensions: "35'-0\" × 68'-0\" Plot",
    area: "Multi-Storey Complex",
    year: "2026",
    image: "/images/gallery/kenneth-residency.jpg",
    galleryImages: [
      { title: "Kenneth Residency Tower", image: "/images/gallery/kenneth-residency.jpg" },
      { title: "Urban Studio Facade", image: "/images/projects/rishikesh-residence-3d.jpg" },
    ],
    blueprint: "/images/blueprints/rishikesh-residence-p2.jpg",
    blueprintPages: [
      { label: "Ground Floor Parking & Fountain (P.01)", image: "/images/blueprints/rishikesh-residence-p1.jpg" },
      { label: "First Floor Double-Height Living (P.02)", image: "/images/blueprints/rishikesh-residence-p2.jpg" },
      { label: "Second Floor Master Suite (P.03)", image: "/images/blueprints/rishikesh-residence-p3.jpg" },
      { label: "Third Floor Podcast Studio & Gym (P.04)", image: "/images/blueprints/rishikesh-residence-p4.jpg" },
    ],
    description: "Landmark multi-tier boutique residency engineered by Nirman Site Solutions. Features illuminated vertical signage, ventilated travertine stone facade, cantilever balcony greenery, covered ground-floor parking, and penthouse podcast studio.",
    features: [
      "Illuminated Architectural Sign Board",
      "Acoustic Podcast Studio (9'0\"×21'4\")",
      "Private Fitness Gym (204 sq.ft)",
      "Travertine Stone & Wood Panel Cladding",
      "Continuous Balcony Planter Boxes",
      "Comprehensive Sheets P.01 to P.04"
    ],
    gridClass: "lg:col-span-5",
    aspectClass: "aspect-[4/3] lg:aspect-[16/10]",
  },
  {
    id: "grand-palace-interior",
    title: "The Grand Royal Palace & Chandelier Court",
    client: "Mr. Aalam Khan",
    category: "Interior Design",
    location: "Prime Urban Sector",
    dimensions: "53'-0\" × 56'-0\"",
    area: "6,426 sq.ft (3,213 sq.ft/floor)",
    year: "2026",
    image: "/images/gallery/grand-palace-interior.jpg",
    galleryImages: [
      { title: "Grand Chandelier Living Hall", image: "/images/gallery/grand-palace-interior.jpg" },
      { title: "Contemporary Manor Facade", image: "/images/projects/aalam-manor-3d.jpg" },
    ],
    blueprint: "/images/blueprints/aalam-manor-p1.jpg",
    blueprintPages: [
      { label: "Ground Floor 23-Ft Drawing Room (P-02)", image: "/images/blueprints/aalam-manor-p1.jpg" },
      { label: "First Floor Chandelier Lobby & Lounge", image: "/images/blueprints/aalam-manor-p2.jpg" },
    ],
    description: "Monumental luxury interior architecture featuring dual sweeping marble staircases, multi-tiered 24K gold crystal chandelier, classical wall moldings, mezzanine viewing gallery, and opulent furnishings tailored for regal hospitality.",
    features: [
      "Dual Sweeping Marble Staircases",
      "Grand 24K Gold Plated Chandelier",
      "23-Foot Grand Drawing Room (23'0\"×18'0\")",
      "Mezzanine Gallery Walkway Overlook",
      "Master Suite with Soaking Tub (6'0\"×3'6\")",
      "Architectural Sheet P-02 by Er. Aman"
    ],
    gridClass: "lg:col-span-5",
    aspectClass: "aspect-[4/3] lg:aspect-[16/10]",
  },
  {
    id: "modern-triplex-residence",
    title: "Modern Triplex Villa & Water Cascade Court",
    client: "Mr. Akshay",
    category: "Architecture",
    location: "Coastal & Beachside Plot",
    dimensions: "159'-8\" × 94'-0\"",
    area: "6,864 sq.ft Total Slab",
    year: "2025",
    image: "/images/gallery/modern-triplex-driveway.jpg",
    galleryImages: [
      { title: "Driveway & Cascade Fountain", image: "/images/gallery/modern-triplex-driveway.jpg" },
      { title: "Gated Street Elevation & Cars", image: "/images/gallery/modern-triplex-facade.jpg" },
      { title: "Beachside Pool & Gazebo Deck", image: "/images/projects/beachside-resort-3d.jpg" },
    ],
    blueprint: "/images/blueprints/beachside-resort-p1.jpg",
    blueprintPages: [
      { label: "Ground Floor & Pool Deck (F-01)", image: "/images/blueprints/beachside-resort-p1.jpg" },
      { label: "First Floor Suites (F-02)", image: "/images/blueprints/beachside-resort-p2.jpg" },
      { label: "Second Floor Rooftop Bar (F-03)", image: "/images/blueprints/beachside-resort-p3.jpg" },
    ],
    description: "3-story modern luxury villa with integrated water cascade fountain, spacious driveway parking, cantilever glass balconies, pool gazebo deck, and rooftop open-air lounge pergola.",
    features: [
      "Courtyard Water Cascade Fountain Wall",
      "Covered Ground-Floor Car Parking Porch",
      "Double Balcony Glass Railing View",
      "Infinity Swimming Pool & Sun Deck",
      "Handcrafted Wooden Gazebo (12'×11'8\")",
      "Architectural Drawing Sheet F-01"
    ],
    gridClass: "lg:col-span-7",
    aspectClass: "aspect-[4/3] sm:aspect-[16/10]",
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>("");
  const [activeModalLabel, setActiveModalLabel] = useState<string>("");
  const [cardSelectedImage, setCardSelectedImage] = useState<Record<string, string>>({});
  const [cardViewModes, setCardViewModes] = useState<Record<string, "render" | "blueprint">>({});

  const categories = ["All", "Architecture", "Interior Design", "Commercial & Urban"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleCardMode = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCardViewModes((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === "blueprint" ? "render" : "blueprint",
    }));
  };

  const handleCardGallerySelect = (projectId: string, imgUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCardSelectedImage((prev) => ({ ...prev, [projectId]: imgUrl }));
    setCardViewModes((prev) => ({ ...prev, [projectId]: "render" }));
  };

  const openModal = (project: Project) => {
    setActiveProject(project);
    setActiveModalImage(cardSelectedImage[project.id] || project.image);
    setActiveModalLabel("3D Architectural Render");
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Reveal animation="slide-down" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                <Sparkles className="w-3.5 h-3.5 text-[#A8824C]" />
                <span>Our Works & Portfolio</span>
              </div>
            </Reveal>

            <Reveal animation="slide-up" delay={200}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight">
                Authentic Built Masterpieces & CAD Blueprints
              </h2>
            </Reveal>
            
            <Reveal animation="slide-up" delay={250}>
              <p className="text-sm sm:text-base text-[#5E6670] font-light leading-relaxed">
                Explore real commissions designed by Er. Aman Parihar and Nirman Site Solutions. Browse photo galleries of our 3D architectural renders and original dimensioned CAD drafting sets.
              </p>
            </Reveal>
          </div>

          {/* Filter Pills */}
          <Reveal animation="slide-left" delay={200}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#16191D] text-white shadow-md font-semibold"
                      : "bg-white text-[#5E6670] hover:text-[#16191D] hover:bg-stone-50 border border-black/[0.08]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Asymmetric Staggered Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {filteredProjects.map((project, idx) => {
            const currentMode = cardViewModes[project.id] || "render";
            const currentImage =
              currentMode === "blueprint"
                ? project.blueprint
                : cardSelectedImage[project.id] || project.image;

            return (
              <div key={project.id} className={project.gridClass}>
                <Reveal animation="slide-up" delay={150 * (idx + 1)}>
                  <div
                    onClick={() => openModal(project)}
                    className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-2xl flex flex-col cursor-pointer"
                  >
                    {/* Image Frame with Shutter Reveal */}
                    <div className={`relative ${project.aspectClass} w-full overflow-hidden bg-stone-100`}>
                      <ImageShutter
                        shutterType={
                          (["curtain-up", "split-vertical", "louvers", "curtain-right"] as ShutterType[])[
                            idx % 4
                          ]
                        }
                        overlayColor="bg-[#16191D]"
                        className="w-full h-full absolute inset-0"
                      >
                        <Image
                          src={currentImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />
                      </ImageShutter>

                      {/* Top Badges & Toggle */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10">
                        <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/95 backdrop-blur-md text-[#926E3A] border border-black/10 font-medium shadow-sm">
                          {project.category}
                        </span>

                        {/* Interactive Toggle between 3D Render and Blueprint */}
                        <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
                          <button
                            onClick={(e) => toggleCardMode(project.id, e)}
                            className={`px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                              currentMode === "render"
                                ? "bg-[#A8824C] text-white font-semibold shadow-sm"
                                : "text-white/80 hover:text-white"
                            }`}
                          >
                            3D Render
                          </button>
                          <button
                            onClick={(e) => toggleCardMode(project.id, e)}
                            className={`px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                              currentMode === "blueprint"
                                ? "bg-[#A8824C] text-white font-semibold shadow-sm"
                                : "text-white/80 hover:text-white"
                            }`}
                          >
                            Blueprint
                          </button>
                        </div>
                      </div>

                      {/* Mini Thumbnail Gallery Strip on the Card */}
                      {project.galleryImages.length > 1 && (
                        <div className="absolute top-12 sm:top-14 left-3 sm:left-4 flex items-center gap-1.5 z-10">
                          {project.galleryImages.map((gImg, gIdx) => (
                            <button
                              key={gIdx}
                              onClick={(e) => handleCardGallerySelect(project.id, gImg.image, e)}
                              className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shadow-md ${
                                currentImage === gImg.image
                                  ? "border-[#A8824C] scale-110 ring-2 ring-[#A8824C]/40"
                                  : "border-white/60 opacity-75 hover:opacity-100 hover:border-white"
                              }`}
                              title={gImg.title}
                            >
                              <Image src={gImg.image} alt={gImg.title} fill className="object-cover" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Bottom info banner on image */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white font-mono z-10 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 bg-black/75 px-2.5 py-1 rounded-md backdrop-blur-sm whitespace-nowrap">
                          <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C6A676]" />
                          Client: {project.client}
                        </span>
                        <span className="bg-black/75 px-2.5 py-1 rounded-md backdrop-blur-sm whitespace-nowrap">
                          {project.dimensions} • {project.area}
                        </span>
                      </div>
                    </div>

                    {/* Content Card Body */}
                    <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8C95A0]">
                          <MapPin className="w-3.5 h-3.5 text-[#A8824C] flex-shrink-0" />
                          <span>{project.location}</span>
                          <span className="text-[#A8824C]">•</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#16191D] tracking-tight group-hover:text-[#A8824C] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#5E6670] font-light leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Features & Action */}
                      <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3.5">
                        <div className="flex flex-wrap gap-1.5">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#FAF8F5] text-[#5E6670] border border-black/[0.05] leading-normal"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="hidden sm:inline text-[11px] font-mono text-[#8C95A0]">
                            CAD Blueprints & 3D Render
                          </span>
                          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8824C] group-hover:text-[#16191D] whitespace-nowrap ml-auto transition-colors">
                            <span>Inspect Gallery</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Dedicated Panoramic Architectural Gallery Strip */}
        <Reveal animation="slide-up" delay={200}>
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-[#A8824C] tracking-widest font-semibold">
                  Photo Gallery
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#16191D] mt-0.5">
                  Nirman Site Solutions Visual Showcase
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5E6670]">
                All Renders Designed by Er. Aman Parihar
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Nirman Signature Villa", desc: "Arched Glass & Pergola", src: "/images/gallery/nirman-signature-villa.jpg" },
                { title: "Kenneth Residency", desc: "Commercial & Apartment Tower", src: "/images/gallery/kenneth-residency.jpg" },
                { title: "Grand Palace Interior", desc: "Dual Stairs & Chandelier", src: "/images/gallery/grand-palace-interior.jpg" },
                { title: "Triplex Villa Driveway", desc: "Water Cascade & Porch", src: "/images/gallery/modern-triplex-driveway.jpg" },
                { title: "Triplex Villa Facade", desc: "Gated Street Perspective", src: "/images/gallery/modern-triplex-facade.jpg" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const matchedProj = projects[idx % projects.length];
                    setActiveProject(matchedProj);
                    setActiveModalImage(item.src);
                    setActiveModalLabel(item.title);
                  }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer bg-stone-100"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-white/95 text-[#16191D] flex items-center justify-center shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C6A676] block mb-0.5">
                      {item.desc}
                    </span>
                    <h4 className="text-xs font-medium line-clamp-1 group-hover:text-[#C6A676] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Modal Dialog for Project Details (Full Blueprint + 3D View) */}
        {activeProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-white border border-black/15 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 animate-scale-up my-auto max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-black/[0.08] pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase text-[#A8824C] tracking-widest font-semibold">
                      {activeProject.category}
                    </span>
                    <span className="text-[#8C95A0]">•</span>
                    <span className="text-xs font-mono text-[#5E6670]">
                      Client: <strong className="text-[#16191D]">{activeProject.client}</strong>
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#16191D] mt-1">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-[#5E6670] mt-2 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#A8824C]" />
                      {activeProject.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Ruler className="w-3.5 h-3.5 text-[#A8824C]" />
                      Plot: {activeProject.dimensions}
                    </span>
                    <span>•</span>
                    <span>Total Area: {activeProject.area}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-[#5E6670] hover:text-[#16191D] p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-sm font-mono transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* View Switcher Tabs (3D Render vs Blueprint Sheets) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5E6670] font-semibold">
                    Gallery & Blueprints:
                  </span>
                  <span className="text-xs font-mono text-[#A8824C]">
                    Viewing: {activeModalLabel}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Gallery 3D Renders */}
                  {activeProject.galleryImages.map((gImg, i) => (
                    <button
                      key={`g-${i}`}
                      onClick={() => {
                        setActiveModalImage(gImg.image);
                        setActiveModalLabel(gImg.title);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeModalImage === gImg.image
                          ? "bg-[#16191D] text-white font-semibold shadow-sm"
                          : "bg-stone-100 text-[#5E6670] hover:bg-stone-200"
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-[#A8824C]" />
                      <span>{gImg.title}</span>
                    </button>
                  ))}

                  {/* Blueprint Sheets */}
                  {activeProject.blueprintPages.map((pg, i) => (
                    <button
                      key={`bp-${i}`}
                      onClick={() => {
                        setActiveModalImage(pg.image);
                        setActiveModalLabel(pg.label);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeModalImage === pg.image
                          ? "bg-[#16191D] text-white font-semibold shadow-sm"
                          : "bg-stone-100 text-[#5E6670] hover:bg-stone-200"
                      }`}
                    >
                      <FileText className="w-3 h-3 text-[#A8824C]" />
                      <span>{pg.label}</span>
                    </button>
                  ))}
                </div>

                {/* Main Modal Image Viewport */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-inner border border-black/10 bg-stone-50">
                  <Image
                    src={activeModalImage || activeProject.image}
                    alt={activeProject.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description & Features */}
              <div className="space-y-4">
                <p className="text-sm text-[#4B535D] leading-relaxed font-light">
                  {activeProject.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-[#FAF8F5] border border-black/[0.06] text-xs font-mono text-[#16191D] flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#A8824C]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-[#5E6670]">
                  Drafted by <strong>Er. Aman Parihar • Nirman Site Solutions</strong>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2 text-xs uppercase tracking-wider text-[#5E6670] hover:text-[#16191D] cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                    className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#16191D] text-white rounded-full hover:bg-[#A8824C] transition-colors shadow-md"
                  >
                    Inquire About Similar Design
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
