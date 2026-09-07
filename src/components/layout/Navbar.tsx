"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/data/siteData";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#100904]/95 backdrop-blur-xl border-b border-dashed border-[#40372e] transition-all">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 py-3 md:py-4 flex justify-between items-center">
        {/* Left: Brand Wordmark & Official Insignia Logo */}
        <a href="#hero" className="flex items-center space-x-3 sm:space-x-3.5 group flex-shrink-0">
          {/* Logo Container */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/jib-official-fist-logo-transparent.png"
              alt="JIB Electrical Enterprises Official Insignia"
              width={72}
              height={72}
              className="object-contain w-full h-full filter drop-shadow-[0_4px_16px_rgba(204,0,0,0.4)]"
              priority
            />
          </div>

          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider text-[#ffedd7] group-hover:text-[#cc0000] transition-colors duration-200 leading-tight">
              {COMPANY_INFO.name}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#dc5000] font-mono font-bold mt-0.5">
              ENTERPRISES • CAPE TOWN
            </span>
          </div>
        </a>

        {/* Center: Spacious Navigation Links (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 xl:space-x-12 px-6 xl:px-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs xl:text-sm uppercase tracking-widest font-semibold transition-colors duration-200 py-1 ${
                link.isActive
                  ? "text-[#ffedd7] border-b-2 border-[#cc0000] font-bold"
                  : "text-[#ffedd7]/70 hover:text-[#ffedd7] hover:border-b border-[#ffedd7]/40"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Actions & Live Status */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 flex-shrink-0">
          {/* Desktop & Tablet Quote Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-2.5 border border-[#cc0000] bg-[#cc0000]/15 hover:bg-[#cc0000] hover:text-[#100904] text-[#ffedd7] text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(204,0,0,0.25)]"
          >
            <span>SUBMIT QUOTE</span>
            <span className="ml-1.5 text-[#cc0000] group-hover:text-[#100904]">⚡</span>
          </a>

          {/* Active Current Indicator (Desktop) */}
          <div className="hidden xl:flex items-center space-x-2 bg-[#100904] px-3 py-1.5 rounded-full border border-[#40372e]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cc0000] animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-widest text-[#cc0000] font-mono font-semibold">
              LIVE CURRENT
            </span>
          </div>

          {/* Mobile Direct Call Button */}
          <a
            href="tel:+27678186280"
            className="sm:hidden inline-flex items-center justify-center px-3.5 py-2 bg-[#382416] border border-[#cc0000] text-[#ffedd7] text-xs font-bold uppercase tracking-wider rounded-full"
            aria-label="Call Direct"
          >
            CALL ⚡
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#40372e] bg-[#382416]/40 text-[#ffedd7] hover:border-[#ffedd7] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#100904] border-b border-dashed border-[#40372e] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold uppercase tracking-wider text-[#ffedd7] hover:text-[#cc0000] py-2 border-b border-[#40372e]/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#cc0000] text-sm">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#382416] hover:bg-[#ffedd7] text-[#ffedd7] hover:text-[#100904] text-sm font-bold uppercase tracking-widest rounded-full transition-all border border-[#cc0000] text-center"
            >
              SUBMIT A QUOTE ⚡
            </a>
            <div className="flex items-center justify-center space-x-2 py-1">
              <span className="w-2 h-2 rounded-full bg-[#cc0000] animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-[#cc0000] font-mono">
                DIRECTOR JOHN IBALA • LIVE ON-SITE
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

