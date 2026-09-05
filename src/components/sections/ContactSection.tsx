"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/siteData";
import { ContactDirective, ContactResponse } from "@/types";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactDirective>({
    identifier: "",
    geographicSector: "",
    infrastructureRequirements: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Format the phone number (remove spaces, plus signs, etc.)
    const phone = COMPANY_INFO.phones[0].replace(/\D/g, ''); // "27679323052"
    
    // Construct the WhatsApp message
    const message = `*JIB Electrical - Quote Request*
*Name/Business:* ${formData.identifier}
*Location:* ${formData.geographicSector}
*Requirements:* ${formData.infrastructureRequirements}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setStatus("success");
    setResponseMsg("Redirecting to WhatsApp...");
    
    // Optional: Reset form after a delay
    setTimeout(() => {
      setStatus("idle");
      setResponseMsg("");
      setFormData({
        identifier: "",
        geographicSector: "",
        infrastructureRequirements: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-[#100904]"
    >
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Direct Connection Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-xs md:text-sm tracking-[0.25em] text-[#dc5000] uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dc5000]"></span>
                INITIATE DIRECT QUOTE
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#ffedd7] tracking-tight">
                ESTABLISH SECURE LINK.
              </h2>
            </div>

            <div className="space-y-6 text-sm uppercase tracking-widest text-[#ffedd7]">
              <div>
                <span className="text-[#6c5f51] block text-xs">DIRECTOR HEAD OFFICE</span>
                <span className="block mt-1 font-semibold">{COMPANY_INFO.address.line1}</span>
                <span className="text-[#ffedd7]/80">{COMPANY_INFO.address.line2}</span>
              </div>

              <div>
                <span className="text-[#6c5f51] block text-xs">COMMUNICATION LINES</span>
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="block mt-1 hover:text-[#dc5000] font-semibold transition-colors duration-200"
                  >
                    {phone}
                  </a>
                ))}
              </div>

              <div>
                <span className="text-[#6c5f51] block text-xs">DIGITAL SYSTEM ROUTE</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="block mt-1 hover:text-[#dc5000] font-semibold transition-colors duration-200"
                >
                  {COMPANY_INFO.email.toUpperCase()}
                </a>
              </div>
            </div>
          </div>

          {/* Center Column: Underline Only Form Inputs */}
          <div className="lg:col-span-5 py-6 lg:py-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative border-b border-dashed border-[#40372e] pb-2 focus-within:border-[#ffedd7] transition-colors duration-300">
                <label className="text-xs uppercase tracking-widest text-[#6c5f51] block font-semibold">
                  IDENTIFIER (NAME / BUSINESS)
                </label>
                <input
                  type="text"
                  name="identifier"
                  required
                  value={formData.identifier}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none text-[#ffedd7] focus:outline-none focus:ring-0 uppercase tracking-widest text-sm pt-2 placeholder-[#6c5f51]/60 font-medium"
                  placeholder="ENTER FULL NAME OR COMPANY"
                />
              </div>

            <div className="relative border-b border-dashed border-[#40372e] pb-2 focus-within:border-[#ffedd7] transition-colors duration-300">
              <label className="text-xs uppercase tracking-widest text-[#6c5f51] block font-semibold">
                GEOGRAPHIC SECTOR (CAPETOWN / REGION)
              </label>
              <input
                type="text"
                name="geographicSector"
                required
                value={formData.geographicSector}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-[#ffedd7] focus:outline-none focus:ring-0 uppercase tracking-widest text-sm pt-2 placeholder-[#6c5f51]/60 font-medium"
                placeholder="E.G. GOODWOOD, SEA POINT, BELLVILLE"
              />
            </div>

            <div className="relative border-b border-dashed border-[#40372e] pb-2 focus-within:border-[#ffedd7] transition-colors duration-300">
              <label className="text-xs uppercase tracking-widest text-[#6c5f51] block font-semibold">
                INFRASTRUCTURE REQUIREMENTS (SERVICE TYPE)
              </label>
              <input
                type="text"
                name="infrastructureRequirements"
                required
                value={formData.infrastructureRequirements}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-[#ffedd7] focus:outline-none focus:ring-0 uppercase tracking-widest text-sm pt-2 placeholder-[#6c5f51]/60 font-medium"
                placeholder="HOUSE WIRING / FENCING / GATE AUTOMATION / COC INSPECTION"
              />
            </div>

            {/* Submission Status Message */}
            {status !== "idle" && responseMsg && (
              <div
                className={`text-xs uppercase tracking-widest p-4 border border-dashed rounded ${
                  status === "success"
                    ? "border-[#dc5000] text-[#ffedd7] bg-[#dc5000]/15"
                    : "border-red-500/50 text-red-300 bg-red-950/20"
                }`}
              >
                {responseMsg}
              </div>
            )}

            {/* Transmit Action on Mobile */}
            <div className="block lg:hidden">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4.5 bg-[#382416] hover:bg-[#ffedd7] text-[#ffedd7] hover:text-[#100904] uppercase tracking-widest text-sm font-bold rounded-[36px] transition-all duration-300 border border-[#dc5000] shadow-[0_0_20px_rgba(220,80,0,0.3)] disabled:opacity-50"
              >
                {status === "submitting" ? "TRANSMITTING..." : "TRANSMIT QUOTE REQUEST"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Filled Pill CTA & Credits */}
        <div className="lg:col-span-3 hidden lg:flex flex-col justify-between items-end h-72">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className="w-full py-4.5 bg-[#382416] hover:bg-[#ffedd7] text-[#ffedd7] hover:text-[#100904] uppercase tracking-widest text-sm font-bold rounded-[36px] transition-all duration-300 border border-[#dc5000] shadow-[0_0_25px_rgba(220,80,0,0.35)] disabled:opacity-50 cursor-pointer"
          >
            {status === "submitting" ? "TRANSMITTING..." : "TRANSMIT QUOTE REQUEST"}
          </button>

          <div className="text-right mt-12">
            <span className="text-[10px] text-[#dc5000] uppercase tracking-widest block font-bold">
              {COMPANY_INFO.studioCredit}
            </span>
            <span className="text-[9px] text-[#6c5f51] uppercase tracking-widest block mt-1 font-mono">
              {COMPANY_INFO.copyright}
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
