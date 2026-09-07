"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/siteData";

const HERO_IMAGES = [
  {
    id: "tools",
    src: "/images/tools-breaker-kit.png",
    title: "FIELD EQUIPMENT & DISTRIBUTION DEPLOYMENT",
    subtitle: "Precision breakers, insulated pliers & diagnostic toolkit",
    tag: "LIVE TOOLKIT",
  },
  {
    id: "fencing",
    src: "/images/fencing-2.png",
    title: "SABS ELECTRIC FENCE PERIMETER",
    subtitle: "High-voltage boundary shock system with hazard warning",
    tag: "PERIMETER DEFENSE",
  },
  {
    id: "conduit",
    src: "/images/conduit-slab-wiring.png",
    title: "STRUCTURAL SLAB & ROOFTOP WIRING",
    subtitle: "Under-slab conduits and subterranean feeds in Western Cape",
    tag: "STRUCTURAL WIRING",
  },
];

export const HeroSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = HERO_IMAGES[activeImageIndex];

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 relative"
    >
      {/* 2-Column Balanced Master Grid (50/50 Split on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto w-full max-w-7xl mx-auto">
        
        {/* Left Column: Bold Directive, Massive Headlines & Direct Quote CTA (Col Span 6, z-index above image) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-6 relative z-30">
          {/* Micro Tagline */}
          <div className="inline-flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#cc0000] animate-ping"></span>
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#cc0000] uppercase font-bold">
              {COMPANY_INFO.directiveTagline}
            </span>
          </div>

          {/* Master Headline (Layered ABOVE the hero image with drop shadow) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase text-[#ffedd7] leading-[0.9] tracking-tight relative z-30 drop-shadow-[0_8px_32px_rgba(16,9,4,0.95)] lg:-mr-12 xl:-mr-20">
            POWER ARCHITECTURE.
          </h1>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ffedd7]/85 font-normal uppercase tracking-wide leading-relaxed max-w-2xl">
            Engineered by John Ibala. High-end electrical systems, heavy industrial perimeters, and regulatory safety compliance.
          </p>

          {/* High-Visibility Quote Capture Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Quote Capture CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4.5 bg-[#382416] hover:bg-[#ffedd7] text-[#ffedd7] hover:text-[#100904] text-sm md:text-base font-bold uppercase tracking-widest rounded-full transition-all duration-300 border border-[#cc0000] shadow-[0_0_30px_rgba(220,80,0,0.35)] text-center group"
            >
              <span>SUBMIT A QUOTE</span>
              <span className="ml-2 text-[#cc0000] group-hover:text-[#100904] transition-colors">⚡</span>
            </a>

            {/* Direct Phone / Contact CTA */}
            <a
              href="tel:+27678186280"
              className="inline-flex items-center justify-center px-7 py-4.5 border border-[#ffedd7] hover:bg-[#ffedd7]/10 text-[#ffedd7] text-sm md:text-base font-semibold uppercase tracking-wider rounded-full transition-all duration-300 text-center"
            >
              CALL: +27 67 818 6280
            </a>
          </div>

          {/* Trust Authority Badges */}
          <div className="pt-2 flex flex-wrap gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#40372e] text-[11px] uppercase tracking-wider text-[#ffedd7]/90 bg-[#382416]/40 font-medium">
              ● SABS APPROVED ENERGIZERS
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#40372e] text-[11px] uppercase tracking-wider text-[#ffedd7]/90 bg-[#382416]/40 font-medium">
              ● OHS ACT NO. 85 COC CERTIFIED
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-dashed border-[#40372e] text-[11px] uppercase tracking-wider text-[#ffedd7]/90 bg-[#382416]/40 font-medium">
              ● 24/7 RAPID DISPATCH
            </span>
          </div>
        </div>

        {/* Right Column: Immersive Half-Width Darkroom Showcase Image (Col Span 6, z-10 under text) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center w-full relative z-10">
          <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] xl:h-[640px] rounded-2xl border border-dashed border-[#40372e] bg-[#382416]/20 p-2.5 overflow-hidden group shadow-[0_0_70px_rgba(220,80,0,0.1)]">
            
            {/* Main Featured Photo */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#100904]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Darkroom Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#100904] via-[#100904]/35 to-transparent"></div>

              {/* Top Status & Registration Tag */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                <span className="px-3 py-1 rounded bg-[#100904]/90 backdrop-blur-md border border-[#40372e] text-[10px] font-mono uppercase tracking-wider text-[#cc0000] font-bold">
                  ● {activeImage.tag}
                </span>

                <span className="px-3 py-1 rounded bg-[#100904]/90 backdrop-blur-md border border-[#40372e] text-[10px] font-mono uppercase tracking-wider text-[#ffedd7] hidden sm:inline">
                  {COMPANY_INFO.registration}
                </span>
              </div>

              {/* Orbiting Electrical Pulse Ring */}
              <div className="absolute top-16 right-5 w-14 h-14 rounded-full border border-dashed border-[#cc0000]/60 animate-[spin_20s_linear_infinite] pointer-events-none hidden sm:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#cc0000]"></div>
              </div>

              {/* Bottom Details & Image Selector Tabs */}
              <div className="absolute bottom-4 left-4 right-4 space-y-3">
                <div className="bg-[#100904]/85 backdrop-blur-md border border-[#40372e] p-4 rounded-lg">
                  <span className="text-[10px] uppercase tracking-widest text-[#cc0000] font-bold block">
                    OPERATIONAL FIELD DEPLOYMENT
                  </span>
                  <p className="text-sm md:text-base uppercase tracking-wider text-[#ffedd7] font-semibold mt-0.5">
                    {activeImage.title}
                  </p>
                  <p className="text-[11px] text-[#6c5f51] uppercase tracking-wider mt-1">
                    {activeImage.subtitle}
                  </p>
                </div>

                {/* Quick Thumbnail Switcher */}
                <div className="flex gap-2">
                  {HERO_IMAGES.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`flex-1 py-1.5 px-2 rounded text-[9px] uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? "border-[#cc0000] bg-[#cc0000]/20 text-[#ffedd7]"
                          : "border-[#40372e] bg-[#100904]/70 text-[#6c5f51] hover:text-[#ffedd7]"
                      }`}
                    >
                      {img.tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Metadata Bar with Enhanced Typography */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 mt-8 border-t border-dashed border-[#40372e] max-w-7xl mx-auto w-full">
        <span className="text-xs text-[#6c5f51] tracking-widest uppercase font-mono">
          {COMPANY_INFO.established}
        </span>
        <span className="text-xs text-[#ffedd7] font-medium tracking-widest uppercase font-mono mt-2 md:mt-0">
          {COMPANY_INFO.registration} • {COMPANY_INFO.director}
        </span>
      </div>
    </section>
  );
};
