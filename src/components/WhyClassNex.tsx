"use client";

import React from "react";
import { 
  ShieldCheck, 
  RefreshCw, 
  GraduationCap, 
  Headphones, 
  BadgeDollarSign 
} from "lucide-react";

const steps = [
  { title: "Comprehensive Onboarding", description: "Configuring the entire workspace according to your school curriculum and sections.", icon: ShieldCheck },
  { title: "Seamless Data Migration", description: "Secure, structured migration of existing student, teacher, and finance records.", icon: RefreshCw },
  { title: "On-site Staff Training", description: "Hands-on guidance and sessions for administrators, teachers, and registrars.", icon: GraduationCap },
  { title: "Continuous 24/7 Support", description: "Dedicated account managers and technical teams to assist your school anytime.", icon: Headphones },
];

export default function WhyClassNex() {
  return (
    <section className="w-full py-16 md:py-22 bg-slate-50 border-y border-slate-200/50 font-sans text-left">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Product Value Prop */}
          <div>
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3 md:mb-4 inline-block">
              Why Class Nex
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1] mb-4 md:mb-6">
              The Future of Smart School Management
            </h2>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg text-slate-500 font-semibold leading-relaxed mb-6 md:mb-8">
              <p>
                Class Nex is an international AI-powered School Management Solution designed to transform how educational institutions operate in the digital era. The platform streamlines administration, automates daily processes, enhances communication, and delivers intelligent insights to improve academic and operational performance.
              </p>
              <p>
                From student management and attendance tracking to finance, examinations, and analytics, Class Nex provides a secure, scalable, and fully customizable system tailored to each institution's unique needs.
              </p>
            </div>

            {/* Highlight callout: Cost-Effective */}
            <div className="bg-gradient-to-br from-primary/10 to-emerald-100/30 border border-primary/20 rounded-2xl p-4 md:p-6 flex gap-3 md:gap-4 items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/10">
                <BadgeDollarSign className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-800 mb-1">Cost-Effective Solution</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wide">
                  Enterprise-grade capability, priced for schools of every size.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Deployment Roadmap Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-5 sm:left-6 top-8 bottom-8 w-[1.5px] bg-slate-200/80" />
            
            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-3 sm:gap-4 relative z-10 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-100 hover:border-primary/10 hover:bg-white transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
