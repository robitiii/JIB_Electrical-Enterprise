import { Navbar } from "@/components/layout/Navbar";
import { GridLines } from "@/components/layout/GridLines";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { OperationsSection } from "@/components/sections/OperationsSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#100904] text-[#ffedd7] selection:bg-[#cc0000] selection:text-[#ffedd7] overflow-x-hidden">
      {/* 1. Persistent Top Navigation */}
      <Navbar />

      {/* Persistent Hairline Cork Grid Lines Overlay */}
      <GridLines />

      {/* Main Sections Wrapper */}
      <main className="relative z-20">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <OperationsSection />
        <SectionDivider />
        <WorkflowSection />
        <SectionDivider />
        <ComplianceSection />
        <SectionDivider />
        <ContactSection />
      </main>
    </div>
  );
}

