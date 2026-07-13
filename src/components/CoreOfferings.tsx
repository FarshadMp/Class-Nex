"use client";

import React from "react";
import { Sparkles, Building2, MessageSquare } from "lucide-react";

const ERPPlatformMockup = () => (
  <div className="relative bg-slate-50/80 border border-slate-200/60 rounded-t-2xl p-5 mx-6 mt-6 h-56 overflow-hidden flex flex-col justify-between shadow-inner select-none">
    <div className="space-y-4 text-left">
      <div className="text-slate-500 font-bold text-sm">Which portal are you accessing?</div>
      <div className="flex gap-2.5">
        <span className="flex items-center gap-1.5 bg-white border border-slate-200 shadow-xs px-3 py-1.5 rounded-lg text-sm font-bold text-slate-800">
          <Building2 className="w-3.5 h-3.5 text-primary" /> Admin Panel
        </span>
        <span className="flex items-center gap-1.5 bg-slate-100/50 border border-slate-200/40 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600">
          Teacher Portal
        </span>
        <span className="flex items-center gap-1.5 bg-slate-100/50 border border-slate-200/40 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600">
          Parent App
        </span>
      </div>
      <div className="space-y-2">
        <div className="text-slate-500 font-bold text-sm">Enter administrative prompt</div>
        <div className="flex gap-2 items-center bg-white border border-slate-200 rounded-lg p-1.5 pl-3">
          <span className="text-sm text-slate-600 font-semibold truncate flex-1">
            Review mid-term fee collections ledger for Class 10-A
          </span>
          <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded text-xs font-bold text-slate-800 border border-slate-200">
            <Sparkles className="w-2.5 h-2.5 text-primary" /> Run AI
          </span>
        </div>
      </div>
    </div>
  </div>
);

const AIAgentsMockup = () => (
  <div className="relative bg-slate-50/80 border border-slate-200/60 rounded-t-2xl p-5 mx-6 mt-6 h-56 overflow-hidden flex gap-4 shadow-inner select-none">
    {/* Mobile mockup on left */}
    <div className="w-1/2 bg-white border border-slate-200/80 rounded-lg p-3.5 space-y-3.5 text-xs font-semibold text-slate-500 text-left shrink-0 shadow-sm">
      <div className="flex justify-between items-center pb-1 border-b border-slate-100">
        <span className="text-[10px] font-black text-slate-600">Student Profile</span>
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
      </div>
      <div className="bg-slate-50/80 p-2.5 rounded border border-slate-100">
        <div className="text-[8px] text-slate-600 font-black">WALLET BALANCE</div>
        <div className="font-extrabold text-slate-700 text-sm mt-0.5">$90.00</div>
      </div>
      <div className="bg-slate-50/80 p-2.5 rounded border border-slate-100">
        <div className="text-[8px] text-slate-600 font-black">FEE INVOICE</div>
        <div className="font-extrabold text-slate-700 text-sm mt-0.5">July Term: Paid</div>
      </div>
    </div>

    {/* Chatbot overlay on right */}
    <div className="flex-1 bg-slate-100/50 border border-slate-200/40 rounded-lg p-3.5 flex flex-col justify-between text-left text-xs font-semibold relative">
      <div className="space-y-2 overflow-hidden h-[125px]">
        {/* Bubble 1 */}
        <div className="bg-white border border-slate-150 p-2.5 rounded-lg text-slate-500 leading-relaxed flex gap-1.5 items-start shadow-xs animate-chat-1">
          <MessageSquare className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
          <span>Welcome! What task can I help you compile today?</span>
        </div>
        {/* Bubble 2 */}
        <div className="bg-primary/10 border border-primary/20 p-2.5 rounded-lg text-primary self-end text-right leading-relaxed font-bold animate-chat-2">
          Calculate attendance clusters.
        </div>
        {/* Bubble 3 */}
        <div className="bg-emerald-50 border border-emerald-100/60 p-2.5 rounded-lg text-emerald-700 leading-relaxed font-bold animate-chat-3 flex gap-1.5 items-start shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
          <span>Found cluster: Class 10-B (Thursday PM).</span>
        </div>
      </div>
      
      <div className="bg-white border border-slate-200 rounded p-2 text-[10px] text-slate-600 truncate mt-2 relative">
        <span>Type instruction...</span>
        <span className="absolute right-3 top-2.5 w-1 h-3.5 bg-slate-400 animate-blink" />
      </div>
    </div>
  </div>
);

export default function CoreOfferings() {
  return (
    <section className="w-full py-16 md:py-20 bg-slate-50/40 border-y border-slate-200/40 text-slate-900 font-sans overflow-hidden relative">
      {/* CSS keyframe animations injection */}
      <style>{`
        @keyframes chatFade1 {
          0%, 100% { opacity: 0; transform: translateY(6px); }
          5%, 90% { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatFade2 {
          0%, 25%, 100% { opacity: 0; transform: translateY(6px); }
          30%, 90% { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatFade3 {
          0%, 55%, 100% { opacity: 0; transform: translateY(6px); }
          60%, 90% { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-chat-1 { animation: chatFade1 8s ease-in-out infinite; }
        .animate-chat-2 { animation: chatFade2 8s ease-in-out infinite; }
        .animate-chat-3 { animation: chatFade3 8s ease-in-out infinite; }
        .animate-blink { animation: cursorBlink 1s step-end infinite; }
      `}</style>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1] mb-6 text-slate-900">
            Two Core Pillars. One Seamless Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-[1.6]">
            Class Nex combines a comprehensive enterprise-grade administrative database with next-generation AI interfaces and mobile apps.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: ERP Platform */}
          <div className="relative bg-white border border-slate-200/80 rounded-[26px] md:rounded-[32px] pt-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.1)] hover:border-primary/20 transition-all duration-300 group min-h-[460px]">
            {/* Top gradient glow overlay */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-50/30 via-transparent to-transparent pointer-events-none" />
            
            <div className="px-8 sm:px-10 space-y-3 relative z-10 text-left">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
                School ERP Platform
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                The unified foundation that connects your academics, administration, and finance workflows — across every department, at any scale.
              </p>
            </div>

            {/* Platform Mockup Visual */}
            <ERPPlatformMockup />
          </div>

          {/* Card 2: AI Agents & Apps */}
          <div className="relative bg-white border border-slate-200/80 rounded-[26px] md:rounded-[32px] pt-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.1)] hover:border-primary/20 transition-all duration-300 group min-h-[460px]">
            {/* Top gradient glow overlay */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-50/30 via-transparent to-transparent pointer-events-none" />

            <div className="px-8 sm:px-10 space-y-3 relative z-10 text-left">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
                AI Agents & Apps
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                A suite of custom-branded mobile apps and AI tools that automate parent alerts, teacher workflows, and institutional analytics.
              </p>
            </div>

            {/* AI Notification Mockup Visual */}
            <AIAgentsMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
