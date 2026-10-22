"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";

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
    description: "Cantilevered reinforced concrete villa with seamless indoor-outdoor infinity pool vistas, natural thermal insulation, and passive solar orientation.",
    features: ["Infinity Reflecting Pool", "Triple-Glazed Minimalist Glass", "Geothermal Cooling"],
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
    features: ["Custom Boucle Furnishings", "Travertine Fireplace Wall", "Acoustic Fluted Oak"],
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
    features: ["Parametric Timber Lattice", "Net-Zero Carbon Concrete", "Canal Water Cooling"],
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
    features: ["Daylight Optimization", "Model Prototyping Workshop", "Biophilic Terraces"],
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
    <section id="projects" className="py-24 md:py-32 bg-[#0a0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c6a676]">
              Portfolio Showcase
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Selected Works & Architectural Commissions
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#c6a676] text-[#0d0f12] shadow-lg shadow-[#c6a676]/20 font-semibold"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-[#0d0f12]/80 backdrop-blur-md text-[#c6a676] border border-[#c6a676]/30">
                    {project.category}
                  </span>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#c6a676] text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label={`View details for ${project.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#c6a676]" />
                      {project.location}
                    </span>
                    <span>{project.area} • {project.year}</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight group-hover:text-[#c6a676] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Feature Tags & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1 text-xs font-semibold text-[#c6a676] hover:text-[#d8ba8e] uppercase tracking-wider ml-2 flex-shrink-0"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog for Project Details */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative max-w-2xl w-full bg-[#13171e] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-[#c6a676] tracking-widest">
                    {activeProject.category}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white mt-1">
                    {activeProject.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-zinc-400 mt-2 font-mono">
                    <span>{activeProject.location}</span>
                    <span>•</span>
                    <span>{activeProject.area}</span>
                    <span>•</span>
                    <span>Completed {activeProject.year}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-zinc-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeProject.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activeProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200 text-center"
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#c6a676] text-black rounded-full hover:bg-[#d8ba8e]"
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
