"use client";

import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function PlatformPlatform() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#fbfbf9] font-sans text-left overflow-hidden relative border-t border-slate-200/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold text-slate-900 tracking-tight leading-[1]">
            Powered by the ClassNex Platform
          </h2>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full">
          
          {/* Card 1: AI Chat Assistant */}
          <div className="relative bg-white border border-slate-200/50 rounded-[26px] md:rounded-[32px] p-8 flex flex-col justify-between shadow-xs hover:border-primary/20 transition-all duration-300 group min-h-[540px]">
            <div className="space-y-4">
              <span className="text-sm font-bold text-slate-600 block">AI Co-Pilot</span>
              <h3 className="text-2xl font-bold text-slate-800 leading-[1]">
                Ask. Analyze.<br />Act.
              </h3>
              
              {/* Visual Illustration */}
              <div className="relative h-44 w-full bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center overflow-hidden my-6">
                <div className="absolute w-36 h-36 border border-dashed border-primary/20 rounded-full animate-[spin_40s_linear_infinite]" />
                
                <div className="absolute top-8 left-4 right-4 bg-white border border-slate-200/60 rounded-xl p-2.5 shadow-xs text-[11px] font-bold text-slate-600 max-w-[85%] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping shrink-0" />
                  <span className="truncate">Draft Grade 5 attendance alert...</span>
                </div>
                
                <div className="absolute right-4 bottom-12 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md shadow-primary/20 flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                  <span>Send</span>
                </div>

                <div className="absolute left-4 bottom-6 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-xs text-[9px] font-bold text-slate-600 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-primary" />
                  <span>AI Agent</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm font-semibold text-slate-700 leading-[1.6]">
              Interact with your entire school database using natural language. Query attendance, draft report card feedback, and dispatch warnings instantly.
            </div>
          </div>

          {/* Card 2: Unified Modules */}
          <div className="relative bg-slate-100/80 border border-slate-200/40 rounded-[26px] md:rounded-[32px] p-8 flex flex-col justify-between shadow-xs hover:border-primary/20 transition-all duration-300 group min-h-[540px]">
            <div className="space-y-4">
              <span className="text-sm font-bold text-slate-500 block">Unified Infrastructure</span>
              <h3 className="text-2xl font-bold text-slate-800 leading-[1]">
                Connect Your School<br />Workflows.
              </h3>
              
              {/* Visual Illustration */}
              <div className="relative h-44 w-full bg-slate-200/40 rounded-2xl flex items-center justify-center my-6">
                <div className="w-40 border border-slate-200/60 bg-white/95 rounded-2xl p-2.5 shadow-sm flex flex-col gap-1.5">
                  {["Admissions Desk", "Daily Attendance", "Fees Payments", "Examinations"].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/30 rounded-lg p-1.5 text-[9px] font-bold text-slate-600 text-center transition-all duration-300 hover:border-primary/30">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm font-semibold text-slate-700 leading-[1.6]">
              Consolidate academic, administrative, and financial processes with zero-setup components. Scalable architecture built to handle multi-hub school campuses.
            </div>
          </div>

          {/* Card 3: Integrations */}
          <div className="relative bg-emerald-50/70 border border-emerald-100/40 rounded-[26px] md:rounded-[32px] p-8 flex flex-col justify-between shadow-xs hover:border-primary/20 transition-all duration-300 group min-h-[540px]">
            <div className="space-y-4">
              <span className="text-sm font-bold text-emerald-600 block">Integrations</span>
              <h3 className="text-2xl font-bold text-slate-800 leading-[1]">
                Connect to Local &amp;<br />Global APIs.
              </h3>
              
              {/* Visual Illustration */}
              <div className="relative h-44 w-full bg-emerald-100/25 rounded-2xl flex items-center justify-center my-6 overflow-hidden">
                {/* Central hub */}
                <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 z-10">
                  <Sparkles className="w-5 h-5" />
                </div>
                
                {/* Connector lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 160">
                  <path d="M 40 35 Q 100 80 100 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.3" />
                  <path d="M 160 35 Q 100 80 100 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.3" />
                  <path d="M 40 125 Q 100 80 100 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.3" />
                  <path d="M 160 125 Q 100 80 100 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.3" />
                </svg>
                
                {/* Connected nodes */}
                <div className="absolute top-4 left-4 bg-white border border-slate-100 rounded-lg py-1 px-2 shadow-xs text-[8px] font-bold text-slate-500">
                  WhatsApp
                </div>
                <div className="absolute top-4 right-4 bg-white border border-slate-100 rounded-lg py-1 px-2 shadow-xs text-[8px] font-bold text-slate-500">
                  Stripe Pay
                </div>
                <div className="absolute bottom-4 left-4 bg-white border border-slate-100 rounded-lg py-1 px-2 shadow-xs text-[8px] font-bold text-slate-500">
                  SMS Gateway
                </div>
                <div className="absolute bottom-4 right-4 bg-white border border-slate-100 rounded-lg py-1 px-2 shadow-xs text-[8px] font-bold text-slate-500">
                  Ministry Portal
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm font-semibold text-slate-700 leading-[1.6]">
              Extend platform capabilities with secure communication nodes. Seamlessly connect with regional payment hubs, WhatsApp notifications, and local education APIs.
            </div>
          </div>

          {/* Card 4: Enterprise Control / Security */}
          <div className="relative bg-primary border border-primary/20 rounded-[26px] md:rounded-[32px] p-8 flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group min-h-[540px] text-white">
            <div className="space-y-4">
              <span className="text-sm font-bold text-emerald-200 block">Security &amp; Privacy</span>
              <h3 className="text-2xl font-bold text-white leading-[1]">
                Secure Your Records<br />As You Scale.
              </h3>
              
              {/* Visual Illustration */}
              <div className="relative h-44 w-full bg-emerald-800/20 rounded-2xl flex items-center justify-center my-6">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border border-emerald-300/10 rounded-full animate-pulse" />
                  <div className="w-14 h-16 border border-emerald-200/50 rounded-b-xl rounded-t-md flex items-center justify-center bg-emerald-700/20 relative shadow-inner">
                    <ShieldCheck className="w-7 h-7 text-emerald-200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm font-semibold text-emerald-100/90 leading-[1.6]">
              Data sovereignty and defense at every layer. Features SSO/SAML integrations, role-based controls, comprehensive data masking, and automated secure backups.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
