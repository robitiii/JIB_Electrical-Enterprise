import React from "react";
import Image from "next/image";
import { GALLERY_PROJECTS } from "@/data/siteData";

export const OperationsSection: React.FC = () => {
  return (
    <section
      id="operations"
      className="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-[#100904]"
    >
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#dc5000] uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc5000]"></span>
              FIELD DIRECTIVES // ON-SITE EXECUTION
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#ffedd7] tracking-tight">
              PROVEN POWER ARCHITECTURE.
            </h2>
          </div>

          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#ffedd7]/90 leading-snug font-normal">
              Real-world execution across Cape Town residential properties, commercial facilities, and security perimeters. Every system is built to withstand high coastal wear, power fluctuations, and intrusion attempts.
            </p>
          </div>
        </div>

      {/* Operations Bento Grid (4 real work photos) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {GALLERY_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="group relative rounded-xl overflow-hidden border border-[#40372e] bg-[#382416]/20 flex flex-col justify-between hover:border-[#ffedd7] transition-all duration-300 shadow-lg"
          >
            {/* Visual Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#100904]">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover filter brightness-85 contrast-110 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100904] via-transparent to-transparent"></div>

              {/* Tag indicator */}
              <div className="absolute top-3 left-3 bg-[#100904]/80 backdrop-blur-sm border border-[#40372e] px-2 py-0.5 rounded">
                <span className="text-[8px] font-mono text-[#dc5000] uppercase tracking-wider font-semibold">
                  {proj.tag}
                </span>
              </div>
            </div>

            {/* Info Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#6c5f51] block font-mono">
                  {proj.location}
                </span>
                <h3 className="text-sm font-semibold uppercase text-[#ffedd7] tracking-wide mt-1 group-hover:text-[#dc5000] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-[11px] text-[#6c5f51] uppercase tracking-wide leading-relaxed mt-2 group-hover:text-[#ffedd7]/80 transition-colors">
                  {proj.description}
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-[#40372e]/60 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-widest text-[#ffedd7]/60">
                  STATUS: OPERATIONAL
                </span>
                <span className="text-[#dc5000] text-xs">⚡</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};
