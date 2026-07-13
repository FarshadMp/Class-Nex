"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TrustBanner() {
  return (
    <section className="w-full pt-16 md:pt-22 bg-white font-sans text-left">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Banner Card Container */}
        <div className="relative w-full rounded-[26px] md:rounded-[32px] bg-gradient-to-br from-[#15803d] via-[#065f46] to-[#064e3b] p-8 md:p-12 lg:p-14 text-white overflow-hidden shadow-xl">
          {/* Blueprint Grid Pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px"
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end relative z-10">
            
            {/* Left Side: Tag, Title, Button */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black tracking-wider text-emerald-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-xs shrink-0" />
                TRUSTED BY SCHOOLS
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold tracking-tight leading-[1.1] max-w-xl">
                1,200+ Schools & Counting. Every Educational Need.
              </h2>
              
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-xs sm:text-sm font-black tracking-widest transition-all shadow-md group cursor-pointer"
                >
                  <span>Learn More</span>
                  <span className="flex items-center justify-center w-5 h-5 bg-slate-900 text-white rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Right Side: Paragraph description aligned at bottom right */}
            <div className="lg:col-span-5 lg:pl-6">
              <p className="text-sm sm:text-base text-emerald-50/90 font-semibold leading-[1.6]">
                Class Nex replaces fragmented point solutions with a single, intelligent platform covering the full spectrum of academic, administration, finance, and communication operations – purpose-built for modern schools in the GCC.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
