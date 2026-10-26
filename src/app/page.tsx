import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import BlueprintsShowcase from "@/components/BlueprintsShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#16191D] flex flex-col font-sans selection:bg-[#A8824C] selection:text-white w-full max-w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <div id="why-us">
          <WhyChooseUsSection />
        </div>
        <ServicesSection />
        <BlueprintsShowcase />
        <ProjectsSection />
        <PhilosophySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
