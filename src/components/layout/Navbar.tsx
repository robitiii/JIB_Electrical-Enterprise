import React from "react";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/data/siteData";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center bg-[#100904]/90 backdrop-blur-lg border-b border-dashed border-[#40372e]">
      {/* Brand Wordmark & Larger Official Logo */}
      <a href="#hero" className="flex items-center space-x-3.5 group">
        <div className="relative w-11 h-11 md:w-12 md:h-12 overflow-hidden rounded-full border border-[#40372e] flex items-center justify-center bg-[#382416]/70 shadow-md group-hover:border-[#ffedd7] transition-all">
          <Image
            src="/images/JIB Eletrical-Enterprice-logo-transparent background.png"
            alt="JIB Electrical Official Logo"
            width={44}
            height={44}
            className="object-contain p-1 group-hover:scale-105 transition-transform"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-base tracking-widest font-bold uppercase text-[#ffedd7] group-hover:text-[#dc5000] transition-colors duration-200">
            {COMPANY_INFO.name}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-[#6c5f51] font-mono -mt-0.5">
            ENTERPRISES • CAPE TOWN
          </span>
        </div>
      </a>

      {/* Center Navigation Links with larger typography */}
      <div className="hidden lg:flex space-x-8 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-xs md:text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
              link.isActive
                ? "text-[#ffedd7] border-b border-dashed border-[#ffedd7] pb-1"
                : "text-[#6c5f51] hover:text-[#ffedd7]"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Header Actions: Quick Quote CTA & Live Status */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-[#dc5000] bg-[#dc5000]/15 hover:bg-[#dc5000] hover:text-[#100904] text-[#ffedd7] text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(220,80,0,0.2)]"
        >
          SUBMIT QUOTE
        </a>

        {/* Active Current Indicator */}
        <div className="flex items-center space-x-2 bg-[#100904]/80 px-2.5 py-1 rounded-full border border-[#40372e]/50">
          <span className="w-2 h-2 rounded-full bg-[#dc5000] animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest text-[#dc5000] font-medium hidden md:inline">
            LIVE CURRENT
          </span>
        </div>
      </div>
    </nav>
  );
};
