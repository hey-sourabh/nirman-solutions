"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import ImageShutter, { ShutterType } from "@/components/ImageShutter";

interface Project {
  id: string;
  title: string;
  category: "Architecture" | "Interior Design" | "Commercial & Urban";
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  features: string[];
  gridClass: string;
  aspectClass: string;
}

const projects: Project[] = [
  {
    id: "zenith-pavilion",
    title: "The Coastal Horizon Residence",
    category: "Architecture",
    location: "Malibu, California",
    area: "8,400 sq.ft",
    year: "2026",
    image: "/images/hero.jpg",
    description: "Cantilevered reinforced concrete residence with seamless indoor-outdoor infinity pool vistas, natural thermal insulation, and passive solar orientation overlooking the Pacific ocean.",
    features: ["Infinity Reflecting Pool", "Triple-Glazed Minimalist Glass", "Geothermal Cooling", "Cantilevered Living Deck"],
    gridClass: "lg:col-span-8",
    aspectClass: "aspect-[16/10] sm:aspect-[16/9]",
  },
  {
    id: "travertine-sanctuary",
    title: "The Travertine Courtyard Haven",
    category: "Interior Design",
    location: "Kyoto, Japan",
    area: "4,600 sq.ft",
    year: "2025",
    image: "/images/interior.jpg",
    description: "Bespoke Japandi interior curation integrating hand-carved travertine stone, fluted walnut architectural joinery, and private Zen garden integration.",
    features: ["Custom Bouclé Furnishings", "Travertine Fireplace Wall", "Acoustic Fluted Oak", "Circadian Zen Courtyard"],
    gridClass: "lg:col-span-4",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "curvature-pavilion",
    title: "The Biomimetic Cultural Dome",
    category: "Commercial & Urban",
    location: "Zurich, Switzerland",
    area: "24,000 sq.ft",
    year: "2025",
    image: "/images/urban.jpg",
    description: "An iconic undulating lattice shell incorporating bronze louvers, rainwater harvesting canals, and public amphitheater landscaping.",
    features: ["Parametric Timber Lattice", "Net-Zero Carbon Concrete", "Canal Water Cooling", "Acoustic Auditorium Shell"],
    gridClass: "lg:col-span-5",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "nirman-studio-labs",
    title: "Studio Nirman Design Atelier",
    category: "Architecture",
    location: "Mumbai, India",
    area: "12,500 sq.ft",
    year: "2024",
    image: "/images/studio.jpg",
    description: "An adaptive-reuse industrial loft converted into a multi-tiered collaborative architectural research space, fabrication lab, and materials library.",
    features: ["Daylight Optimization", "Model Prototyping Workshop", "Biophilic Terraces", "Solar Microgrid"],
    gridClass: "lg:col-span-7",
    aspectClass: "aspect-[16/10]",
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Architecture", "Interior Design", "Commercial & Urban"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4">
            <Reveal animation="slide-down" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A8824C]/30 bg-white shadow-sm text-xs font-mono tracking-widest uppercase text-[#926E3A]">
                <span>Portfolio Showcase</span>
              </div>
            </Reveal>

            <Reveal animation="slide-up" delay={200}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#16191D] tracking-tight">
                Selected Works & Architectural Commissions
              </h2>
            </Reveal>
          </div>

          {/* Filter Pills with Slide-Left */}
          <Reveal animation="slide-left" delay={200}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={project.gridClass}>
              <Reveal animation="slide-up" delay={150 * (idx + 1)}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 border border-black/[0.08] hover:border-[#A8824C]/50 shadow-md hover:shadow-2xl flex flex-col"
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
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />
                    </ImageShutter>

                    {/* Top Badge Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/95 backdrop-blur-md text-[#926E3A] border border-black/10 font-medium shadow-sm">
                        {project.category}
                      </span>

                      <button
                        onClick={() => setActiveProject(project)}
                        className="w-9 h-9 rounded-full bg-white/90 hover:bg-[#16191D] text-[#16191D] hover:text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-sm"
                        aria-label={`Inspect ${project.title}`}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom info banner on image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-mono">
                      <span className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A676]" />
                        {project.location}
                      </span>
                      <span className="bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                        {project.area} • {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#16191D] tracking-tight group-hover:text-[#A8824C] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#5E6670] font-light leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Features & Action */}
                    <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FAF8F5] text-[#5E6670] border border-black/[0.04]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#A8824C] hover:text-[#16191D] ml-2 flex-shrink-0"
                      >
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Modal Dialog for Project Details (Light Theme) */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-2xl w-full bg-white border border-black/15 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 animate-scale-up">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-[#A8824C] tracking-widest font-semibold">
                    {activeProject.category}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#16191D] mt-1">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-[#5E6670] mt-2 font-mono">
                    <span>{activeProject.location}</span>
                    <span>•</span>
                    <span>{activeProject.area}</span>
                    <span>•</span>
                    <span>Completed {activeProject.year}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-[#5E6670] hover:text-[#16191D] p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-sm font-mono transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-[#4B535D] leading-relaxed font-light">
                  {activeProject.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
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

              <div className="pt-4 border-t border-black/[0.08] flex justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 text-xs uppercase tracking-wider text-[#5E6670] hover:text-[#16191D]"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#16191D] text-white rounded-full hover:bg-[#A8824C] transition-colors shadow-md"
                >
                  Commission Similar Project
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
