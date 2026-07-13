"use client";

import React from "react";
import { Palette, Cpu, FileSearch, Share2, RefreshCw } from "lucide-react";

const timelineSteps = [
  {
    icon: Palette,
    title: "1. Brand Identity Setup",
    description: "Provide your school's logo, colors, graphics, and splash screens. Our onboarding team configures your specific branding guidelines.",
    timeframe: "Days 1–3"
  },
  {
    icon: Cpu,
    title: "2. Compilation & Build",
    description: "Our compilation pipeline generates three dedicated binaries for parents, students, and teachers, customized specifically for your database instance.",
    timeframe: "Days 4–7"
  },
  {
    icon: FileSearch,
    title: "3. Sandbox & Review",
    description: "Access test builds via Apple TestFlight and Google Play Console Internal tracks to review workflows, logins, and notifications in real time.",
    timeframe: "Days 8–10"
  },
  {
    icon: Share2,
    title: "4. Store Submission",
    description: "We manage the entire submission process, resolving compliance checkups and app review comments to ensure smooth approval on App Store and Google Play.",
    timeframe: "Days 11–14"
  },
  {
    icon: RefreshCw,
    title: "5. Lifetime OTA Maintenance",
    description: "Enjoy automated OTA (Over-the-Air) updates, zero-downtime security patches, and instant compatibility releases for new iOS & Android versions.",
    timeframe: "Ongoing"
  }
];

export default function AppsTimeline() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/50 text-left font-sans relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Launch Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            How We Launch Your Dedicated Apps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed mt-3">
            From the initial asset compilation to the final App Store publishing, we handle the technical heavy lifting at every step.
          </p>
        </div>

        {/* Vertical/Horizontal Timeline */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-8 md:space-y-12 max-w-5xl mx-auto">
          {timelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Connector Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-slate-50 bg-white group-hover:border-primary/20 shadow-sm flex items-center justify-center text-slate-600 group-hover:text-primary transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-350 group-hover:bg-primary transition-colors" />
                </div>

                <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg hover:shadow-slate-100/50 hover:border-slate-300 transition-all duration-300">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">{step.title}</h3>
                      <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-2xl">{step.description}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <span className="inline-block md:block text-xs font-bold text-primary bg-emerald-50 border border-emerald-100/80 px-3 py-1 rounded-full tracking-wider">
                      {step.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
