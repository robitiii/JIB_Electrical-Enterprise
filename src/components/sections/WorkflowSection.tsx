import React from "react";
import { WORKFLOW_STEPS } from "@/data/siteData";

export const WorkflowSection: React.FC = () => {
  return (
    <section
      id="workflow"
      className="min-h-screen w-full py-24 px-6 md:px-12 relative bg-[#100904]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <span className="text-xs md:text-sm tracking-[0.25em] text-[#cc0000] uppercase font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cc0000]"></span>
            OPERATIONAL PROTOCOL // STANDARD PROCEDURE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#ffedd7] tracking-tight">
            SERVICE DEPLOYMENT WORKFLOW.
          </h2>
          <p className="max-w-2xl text-xl text-[#ffedd7]/70 font-normal leading-relaxed mt-6">
            From initial transmission to final compliance verification, our deployment sequence ensures precision, safety, and uncompromising quality.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[1px] border-t border-dashed border-[#40372e] z-0"></div>

          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col group">
              {/* Step Number & Node */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-[#382416]/40 border border-[#40372e] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black text-[#ffedd7] group-hover:border-[#cc0000] group-hover:text-[#cc0000] group-hover:bg-[#cc0000]/10 transition-all duration-300">
                  {step.stepNumber}
                </div>
                {/* Mobile/Tablet vertical connector (optional) or just line */}
                <div className="lg:hidden flex-1 h-[1px] border-t border-dashed border-[#40372e]"></div>
              </div>

              {/* Content */}
              <div className="bg-[#382416]/20 border border-[#40372e] p-6 rounded-xl flex-1 flex flex-col group-hover:border-[#ffedd7]/50 transition-colors duration-300">
                <h3 className="text-lg font-bold uppercase text-[#ffedd7] mb-3 group-hover:text-[#cc0000] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#ffedd7]/70 leading-relaxed mb-6 flex-1">
                  {step.description}
                </p>
                
                {/* Details List */}
                <ul className="space-y-2 border-t border-dashed border-[#40372e] pt-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#6c5f51] font-mono uppercase tracking-wider">
                      <span className="text-[#cc0000] mt-[2px]">►</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
