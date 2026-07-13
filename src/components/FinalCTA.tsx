"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full py-16 bg-white font-sans text-center relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Banner Card */}
        <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#15803d] via-[#065f46] to-[#064e3b] py-16 px-6 md:px-12 text-center text-white overflow-hidden shadow-xl">
          {/* Decorative background grid pattern inside card */}
          <div 
            className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px"
            }}
          />
          <div className="absolute top-0 left-1/4 right-1/4 h-[80px] bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-xl pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1]">
              Ready to Run Your School on Intelligence?
            </h2>
            <p className="text-base md:text-lg text-emerald-50/90 font-semibold mb-10 max-w-2xl leading-[1.5]">
              See how Class Nex brings academics, administration, finance, and communication into a single, AI-powered platform — built around your school's needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-base font-bold text-primary transition-all duration-200 cursor-pointer shadow-md group"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-white/40 hover:bg-white/10 text-base font-bold text-white transition-all duration-200 cursor-pointer"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
