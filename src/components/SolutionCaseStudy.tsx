"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

interface CaseStudyData {
  title: string;
  challenge: string;
  result: string;
  metric: string;
  metricLabel: string;
}

interface SolutionCaseStudyProps {
  caseStudy: CaseStudyData;
}

export default function SolutionCaseStudy({ caseStudy }: SolutionCaseStudyProps) {
  if (!caseStudy) return null;

  return (
    <section className="py-16 md:py-22 bg-[#fbfbf9] border-t border-slate-200/40 font-sans text-left">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3 md:mb-4 inline-block">
            Success Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-6">
            Real Impact: Case Study Highlights
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-primary/10 transition-all duration-300">
          
          {/* Left metrics column */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-2.5 relative overflow-hidden bg-white border border-slate-150 p-6 rounded-xl shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-primary rounded-lg flex items-center justify-center mx-auto lg:mx-0">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                {caseStudy.metric}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-450 uppercase tracking-wider leading-snug">
                {caseStudy.metricLabel}
              </div>
            </div>
          </div>

          {/* Right narratives column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mb-2">
                {caseStudy.title}
              </h3>
            </div>
            
            <div className="space-y-4 font-semibold text-xs sm:text-sm leading-relaxed text-slate-500">
              <div className="border-l-4 border-rose-500/80 pl-4 py-0.5">
                <h5 className="text-[10px] uppercase font-bold text-rose-500 tracking-widest mb-1">The Challenge</h5>
                <p className="text-slate-550">{caseStudy.challenge}</p>
              </div>

              <div className="border-l-4 border-primary pl-4 py-0.5">
                <h5 className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">The Solution & Result</h5>
                <p className="text-slate-555">{caseStudy.result}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
