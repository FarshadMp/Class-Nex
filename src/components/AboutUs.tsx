"use client";

import React from "react";
import { Info } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 md:py-20 bg-white font-sans text-left relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Heading & Quote */}
          <div className="lg:col-span-5 mb-0 lg:mb-0">
            <span className="text-xs sm:text-sm font-bold text-primary bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
              About Class Nex
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-3 md:mb-6 md:mb-8">
              Redefining How Schools Operate
            </h2>
            <div className="border-l-4 border-primary pl-4 md:pl-6">
              <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-[1.2]">
                "Smarter Management.<br />Better Education."
              </p>
            </div>
          </div>

          {/* Right Column: Paragraph narrative */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6 text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
            <p>
              Class Nex is an international EdTech product redefining how schools operate in the digital era. For over 8 years, we have empowered educational institutions with intelligent, efficient, and easy-to-use management solutions.
            </p>
            <p>
              Our innovative platform streamlines administration, strengthens communication, and enhances overall operational performance — enabling schools to focus more on education and less on complexity.
            </p>
            <p>
              We believe every institution is unique. That's why we work closely with schools to deliver fully customized solutions tailored to their specific goals and requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
