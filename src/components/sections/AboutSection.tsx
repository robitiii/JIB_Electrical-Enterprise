"use client";

import React from "react";
import Image from "next/image";
import { LEADER_PROFILE, COMPANY_INFO } from "@/data/siteData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-[#100904]"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#cc0000] animate-ping"></span>
              <span className="text-xs md:text-sm tracking-[0.25em] text-[#cc0000] uppercase font-bold">
                LEADERSHIP & TECHNICAL AUTHORITY // CAPE TOWN
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] text-[#ffedd7] tracking-tight">
              THE ENGINEER BEHIND THE CURRENT.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pt-6">
            <p className="text-xl md:text-2xl text-[#ffedd7]/90 leading-snug font-normal">
              Meet <span className="text-[#ffedd7] font-bold underline decoration-[#cc0000] decoration-2 underline-offset-4">John Ibala</span> — Founder, Technical Director, and the hands-on engineering force powering residential, commercial, and perimeter security across the Western Cape.
            </p>
            <p className="text-sm md:text-base text-[#6c5f51] leading-relaxed uppercase tracking-wider">
              At JIB Electrical, your project is never passed off to third-party subcontractors. Every wire run, distribution board, solar inverter, and fence bracket is personally designed, verified, and commissioned by John Ibala.
            </p>
          </div>
        </div>

        {/* Dual Visual Showcase: The Face of the Company + The Engineer In Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: The Executive Face of the Company */}
          <div className="group relative rounded-2xl overflow-hidden border border-[#40372e] bg-[#382416]/20 flex flex-col justify-between hover:border-[#ffedd7] transition-all duration-500 shadow-2xl">
            {/* Image Container with 4:5 Aspect Ratio */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#100904]">
              <Image
                src={LEADER_PROFILE.portraitImage}
                alt="John Ibala - Founder & Lead Electrical Engineer"
                fill
                className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100904] via-[#100904]/20 to-transparent"></div>

              {/* Status Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-[#100904]/85 backdrop-blur-md border border-[#40372e] px-3 py-1.5 rounded-full flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#cc0000]"></span>
                  <span className="text-[10px] font-mono text-[#ffedd7] uppercase tracking-wider font-semibold">
                    DIRECTOR // THE FACE OF JIB
                  </span>
                </div>
                <div className="bg-[#100904]/85 backdrop-blur-md border border-[#40372e] px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-mono text-[#ffedd7]/80 uppercase tracking-widest">
                    CAPE TOWN HQ
                  </span>
                </div>
              </div>

              {/* Bottom Image Overlay Badges */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[9px] font-mono text-[#cc0000] uppercase tracking-widest font-bold block">
                  STRATEGIC DIRECTION & SCHEMATICS
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-[#ffedd7] tracking-tight">
                  JOHN IBALA
                </h3>
                <p className="text-xs text-[#ffedd7]/80 uppercase tracking-wider font-mono">
                  DIRECTOR & LEAD ELECTRICAL ENGINEER
                </p>
              </div>
            </div>

            {/* Description & Technical Pillars */}
            <div className="p-6 md:p-8 space-y-4 bg-[#100904]/60 backdrop-blur-sm border-t border-dashed border-[#40372e]">
              <p className="text-xs sm:text-sm text-[#ffedd7]/80 uppercase tracking-wide leading-relaxed font-light">
                Operating from Goodwood with direct sights on Cape Town infrastructure, John provides the executive authority and regulatory compliance backing every JIB contract.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full border border-dashed border-[#40372e] text-[10px] uppercase tracking-wider text-[#ffedd7] bg-[#382416]/40 font-mono">
                  ● 100% DIRECT OVERSIGHT
                </span>
                <span className="px-3 py-1 rounded-full border border-dashed border-[#40372e] text-[10px] uppercase tracking-wider text-[#ffedd7] bg-[#382416]/40 font-mono">
                  ● ARCHITECTURAL SCHEMATICS
                </span>
                <span className="px-3 py-1 rounded-full border border-dashed border-[#40372e] text-[10px] uppercase tracking-wider text-[#ffedd7] bg-[#382416]/40 font-mono">
                  ● EXECUTIVE SIGN-OFF
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: The Engineer In Action */}
          <div className="group relative rounded-2xl overflow-hidden border border-[#40372e] bg-[#382416]/20 flex flex-col justify-between hover:border-[#ffedd7] transition-all duration-500 shadow-2xl">
            {/* Image Container with 4:5 Aspect Ratio */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#100904]">
              <Image
                src={LEADER_PROFILE.fieldImage}
                alt="John Ibala in action wiring Deye solar inverter and Hubble lithium battery system"
                fill
                className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100904] via-[#100904]/20 to-transparent"></div>

              {/* Status Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-[#100904]/85 backdrop-blur-md border border-[#cc0000] px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-[0_0_15px_rgba(204,0,0,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-[#cc0000] animate-pulse"></span>
                  <span className="text-[10px] font-mono text-[#ffedd7] uppercase tracking-wider font-semibold">
                    IN ACTION // FIELD COMMISSIONING
                  </span>
                </div>
                <div className="bg-[#100904]/85 backdrop-blur-md border border-[#40372e] px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-mono text-[#ffedd7]/80 uppercase tracking-widest">
                    SOLAR & STORAGE
                  </span>
                </div>
              </div>

              {/* Bottom Image Overlay Badges */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[9px] font-mono text-[#cc0000] uppercase tracking-widest font-bold block">
                  HYBRID INVERTER & LITHIUM STORAGE
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-[#ffedd7] tracking-tight">
                  ACTIVE ON-SITE COMMISSIONING
                </h3>
                <p className="text-xs text-[#ffedd7]/80 uppercase tracking-wider font-mono">
                  DEYE HYBRID & HUBBLE LITHIUM INTEGRATION
                </p>
              </div>
            </div>

            {/* Description & Technical Pillars */}
            <div className="p-6 md:p-8 space-y-4 bg-[#100904]/60 backdrop-blur-sm border-t border-dashed border-[#40372e]">
              <p className="text-xs sm:text-sm text-[#ffedd7]/80 uppercase tracking-wide leading-relaxed font-light">
                Active in the trenches. John personally wires, grounds, balances, and tests high-capacity Deye hybrid inverters and Hubble lithium energy banks, ensuring faultless zero-failure performance.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full border border-dashed border-[#40372e] text-[10px] uppercase tracking-wider text-[#ffedd7] bg-[#382416]/40 font-mono">
                  ● HYBRID SOLAR / DEYE
                </span>
                <span className="px-3 py-1 rounded-full border border-dashed border-[#40372e] text-[10px] uppercase tracking-wider text-[#ffedd7] bg-[#382416]/40 font-mono">
                  ● HUBBLE LITHIUM ARRAYS
                </span>
                <span className="px-3 py-1 rounded-full border border-dashed border-[#40372e] text-[10px] uppercase tracking-wider text-[#ffedd7] bg-[#382416]/40 font-mono">
                  ● PRECISION CONDUIT ROUTING
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials & Direct Engagement Banner */}
        <div className="rounded-2xl border border-dashed border-[#40372e] bg-[#382416]/25 p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: The Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-mono text-[#cc0000] uppercase tracking-[0.25em] font-bold block">
                THE JIB PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#ffedd7] tracking-tight leading-tight">
                &ldquo;WE DO NOT OUTSOURCE RESPONSIBILITY. WHEN MY NAME IS ON THE SYSTEM, IT IS BUILT TO OUTLAST THE ELEMENTS.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-[#6c5f51] uppercase tracking-wider leading-relaxed">
                Whether fortifying high-tensile electric fencing against coastal corrosion or engineering commercial single and 3-phase electrical distribution boards, John Ibala guarantees hands-on compliance under the Occupational Health and Safety Act No. 85 of 1993.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {LEADER_PROFILE.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#cc0000] text-sm mt-0.5">⚡</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#ffedd7]/90 font-medium">
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Direct Consultation Box */}
            <div className="lg:col-span-5 flex flex-col space-y-5 bg-[#100904]/90 p-6 md:p-8 rounded-xl border border-[#40372e]">
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-[#cc0000] uppercase tracking-widest font-semibold block">
                  DIRECT ACCESS TO LEADERSHIP
                </span>
                <h4 className="text-lg font-bold uppercase text-[#ffedd7] tracking-wide">
                  SPEAK DIRECTLY WITH JOHN IBALA
                </h4>
                <p className="text-xs text-[#6c5f51] uppercase tracking-wider leading-relaxed">
                  Have a complex electrical project, solar installation, perimeter fortification, or urgent compliance audit? Discuss your blueprint directly with the director.
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-dashed border-[#40372e]">
                {LEADER_PROFILE.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <span className="text-[8px] font-mono text-[#6c5f51] uppercase tracking-widest block">
                      {metric.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#ffedd7] uppercase tracking-wide block mt-0.5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3.5 bg-[#382416] hover:bg-[#ffedd7] text-[#ffedd7] hover:text-[#100904] text-xs font-bold uppercase tracking-widest rounded-full transition-all border border-[#cc0000] shadow-[0_0_20px_rgba(204,0,0,0.25)] text-center group"
                >
                  <span>CONSULT WITH JOHN</span>
                  <span className="ml-1.5 text-[#cc0000] group-hover:text-[#100904]">⚡</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="inline-flex items-center justify-center px-5 py-3.5 border border-[#40372e] hover:border-[#ffedd7] text-[#ffedd7] text-xs font-semibold uppercase tracking-wider rounded-full transition-all text-center"
                >
                  CALL DIRECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
