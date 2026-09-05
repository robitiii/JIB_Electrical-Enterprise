import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/siteData";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-[#100904]"
    >
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#dc5000] uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc5000]"></span>
              CORE CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#ffedd7] tracking-tight">
              FOUR DOMAINS OF MASTER INFRASTRUCTURE.
            </h2>
          </div>

          {/* Center Space */}
          <div className="lg:col-span-1"></div>

          {/* Body Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#ffedd7]/90 leading-snug font-normal">
              We wire, automate, and fortify. JIB Electrical builds heavy-duty residential systems, automated gate controls, and SABS-approved electrified perimeters that never falter.
            </p>
          </div>
        </div>

      {/* 4 Core Domain Rich Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-[#382416]/20 border border-[#40372e] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#ffedd7] hover:bg-[#382416]/35 transition-all duration-300 group shadow-lg"
          >
            {/* Real Project Image Thumbnail */}
            <div className="relative w-full h-40 overflow-hidden bg-[#100904]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover filter brightness-85 contrast-110 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100904] via-transparent to-transparent"></div>
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#100904]/80 backdrop-blur-sm border border-[#40372e] text-[9px] text-[#dc5000] font-semibold tracking-wider uppercase">
                {service.code} // {service.category}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-medium uppercase text-[#ffedd7] tracking-wide group-hover:text-[#ffedd7]">
                  {service.title}
                </h3>
                <p className="text-[11px] text-[#6c5f51] uppercase tracking-wide leading-relaxed mt-2 group-hover:text-[#ffedd7]/80 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Technical Specifications Tags */}
              {service.specs && (
                <div className="pt-3 border-t border-dashed border-[#40372e]/60 flex flex-wrap gap-1.5">
                  {service.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[8px] uppercase tracking-wider text-[#ffedd7]/70 bg-[#100904]/60 px-2 py-0.5 rounded border border-[#40372e]/40"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};
