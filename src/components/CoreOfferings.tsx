"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

export default function CoreOfferings() {
  return (
    <section className="w-full py-16 md:py-22 bg-slate-950 text-white font-sans overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-950/40 border border-emerald-900/60 px-3 py-1.5 rounded-full mb-4 inline-block">
            Our Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1] mb-6">
            Two Core Pillars. One Seamless Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-semibold leading-relaxed">
            Class Nex combines a comprehensive enterprise-grade administrative database with next-generation AI interfaces and mobile apps.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: ERP Platform */}
          <div className="relative bg-slate-900 border border-slate-800/80 rounded-[22px] md:rounded-[32px] p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-primary/20 transition-all duration-300 group min-h-auto md:min-h-[560px]">
            {/* Background Mesh */}
            <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern" />
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
                School ERP Platform
              </h3>
              <p className="text-sm sm:text-base text-slate-400 font-semibold leading-relaxed">
                The unified foundation that connects your academics, administration, and finance workflows — across every department, at any scale.
              </p>
            </div>

            {/* Platform Mockup Visual */}
            <div className="relative z-10 my-8 w-full bg-slate-950/80 rounded-2xl border border-slate-800/80 p-4 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 text-left">
              {/* Browser control bar */}
              <div className="flex gap-1.5 mb-4 items-center">
                <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                <span className="text-[10px] text-slate-600 font-bold ml-2">classnex.ai/dashboard</span>
              </div>
              
              {/* Mini dashboard stats mockup */}
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/40">
                  <span className="text-xs font-bold text-slate-400">Total Fee Collected</span>
                  <span className="text-xs font-black text-emerald-400">92.4%</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/40">
                  <span className="text-xs font-bold text-slate-400">Daily Attendance Rate</span>
                  <span className="text-xs font-black text-primary">96.8%</span>
                </div>
                <div className="w-full bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/40 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400">Active Registrations</span>
                    <span className="text-xs font-bold text-slate-500">1,240 / 1,500</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[82%] h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 flex justify-end">
              <Link
                href="#features"
                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-md group cursor-pointer"
              >
                <span>Learn More</span>
                <span className="flex items-center justify-center w-5 h-5 bg-white text-slate-950 rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3 h-3 text-slate-950" />
                </span>
              </Link>
            </div>
          </div>

          {/* Card 2: AI Agents & Apps */}
          <div className="relative bg-slate-900 border border-slate-800/80 rounded-[22px] md:rounded-[32px] p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-primary/20 transition-all duration-300 group min-h-auto md:min-h-[560px]">
            {/* Background Glow */}
            <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern" />
            <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
                AI Agents & Apps
              </h3>
              <p className="text-sm sm:text-base text-slate-400 font-semibold leading-relaxed">
                A suite of custom-branded mobile apps and AI tools that automate parent alerts, teacher workflows, and institutional analytics.
              </p>
            </div>

            {/* AI Notification Mockup Visual */}
            <div className="relative z-10 my-8 w-full bg-slate-950/80 rounded-2xl border border-slate-800/80 p-5 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 text-left space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider">Class Nex AI Co-Pilot</span>
              </div>
              
              {/* Notification Bubbles */}
              <div className="space-y-3.5">
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <MessageSquare className="w-3 h-3" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800/60 rounded-2xl rounded-tl-none p-3 max-w-[85%] text-xs font-semibold text-slate-300 leading-relaxed shadow-sm">
                    Analyze section attendance patterns between January and March to uncover absenteeism trends.
                  </div>
                </div>
                
                <div className="flex gap-2.5 items-start justify-end">
                  <div className="bg-primary/15 border border-primary/30 rounded-2xl rounded-tr-none p-3 max-w-[85%] text-xs font-bold text-emerald-400 leading-relaxed shadow-sm">
                    Analyzing class data... Section B shows 4% absenteeism cluster on Thursday afternoons. Automatic email digest sent to counselors.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 flex justify-end">
              <Link
                href="#apps"
                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-md group cursor-pointer"
              >
                <span>Explore Apps</span>
                <span className="flex items-center justify-center w-5 h-5 bg-white text-slate-950 rounded-full transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3 h-3 text-slate-950" />
                </span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
