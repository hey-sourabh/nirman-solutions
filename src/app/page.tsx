import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProjectCalculator from "@/components/ProjectCalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-zinc-100 flex flex-col font-sans selection:bg-[#c6a676] selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <ServicesSection />
        <PhilosophySection />
        <ProjectCalculator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
