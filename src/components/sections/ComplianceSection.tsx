import React from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/siteData";

export const ComplianceSection: React.FC = () => {
  return (
    <section
      id="compliance"
      className="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-[#100904]"
    >
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Block: Authority & Headline */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs md:text-sm tracking-[0.25em] text-[#dc5000] uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dc5000]"></span>
              REGULATORY VERIFICATION
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#ffedd7] tracking-tight">
              LEGAL STATUS VERIFIED.
            </h2>
            <p className="text-xs text-[#6c5f51] uppercase tracking-widest font-mono">
              {COMPANY_INFO.complianceStandard}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#ffedd7] uppercase tracking-wider font-medium">
                <span className="text-[#dc5000] font-bold">✔</span> Electrical Certificate of Compliance (ECOC)
              </div>
              <div className="flex items-center gap-3 text-sm text-[#ffedd7] uppercase tracking-wider font-medium">
                <span className="text-[#dc5000] font-bold">✔</span> Electric Fence System Certificate (EFC)
              </div>
              <div className="flex items-center gap-3 text-sm text-[#ffedd7] uppercase tracking-wider font-medium">
                <span className="text-[#dc5000] font-bold">✔</span> Property Transfer Municipal Clearances
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#382416] hover:bg-[#ffedd7] text-[#ffedd7] hover:text-[#100904] text-xs font-bold uppercase tracking-widest rounded-full transition-all border border-[#dc5000]"
              >
                BOOK COC INSPECTION
              </a>
            </div>
          </div>

        {/* Center Visual: Distribution Board Inspection Probe Photo */}
        <div className="lg:col-span-4 flex justify-center items-center py-6 lg:py-0">
          <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-dashed border-[#40372e] bg-[#382416]/20 p-2 overflow-hidden shadow-2xl group">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/diagnostics-testing.png"
                alt="Electrical Distribution Board COC Testing"
                fill
                className="object-cover filter brightness-90 contrast-115 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100904] via-transparent to-transparent"></div>

              {/* Status Ribbon */}
              <div className="absolute top-3 left-3 bg-[#100904]/85 backdrop-blur-sm border border-[#40372e] px-2.5 py-1 rounded">
                <span className="text-[9px] font-mono text-[#dc5000] tracking-wider uppercase font-semibold">
                  ● OHS ACT NO. 85 / TEST PASSED
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] uppercase tracking-widest text-[#ffedd7] font-medium block">
                  DISTRIBUTION BOARD PROBE AUDIT
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#6c5f51] block mt-0.5">
                  CIRCUIT RESISTANCE & CONTINUITY CHECK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Block: Explanatory Copy & Requirement Callout */}
        <div className="lg:col-span-4 space-y-6">
          <p className="text-base md:text-xl text-[#ffedd7] leading-relaxed font-normal">
            Your electrical systems must protect both property and lives. JIB Electrical conducts thorough structural testing from the primary point of supply to individual terminal nodes, providing immediate, legally recognized Electrical and Electric Fence Certificates of Compliance (COC) for property transfers and safety checks.
          </p>

          <div className="border-t border-dashed border-[#40372e] pt-6 bg-[#382416]/15 p-4 rounded-xl border">
            <span className="text-[10px] text-[#dc5000] tracking-widest uppercase block mb-1 font-semibold">
              CAPE TOWN MUNICIPAL DIRECTIVE
            </span>
            <p className="text-xs text-[#6c5f51] uppercase tracking-wider leading-relaxed">
              We execute diagnostic assessments, compile comprehensive fault reports, and perform precise corrective repairs on-site to ensure full municipal sign-off.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
