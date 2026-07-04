"use client";

import React from "react";
import { 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

const apps = [
  {
    name: "Parent App",
    tagline: "Keep every family connected to what matters.",
    icon: Smartphone,
    features: [
      "Real-time notifications on attendance and grades",
      "Homework monitoring and submission deadlines",
      "Secure online fee payments via gateway integration",
      "Visitor pass creation and gate exit/entry tracking",
      "Emergency gate passes and leave letters submission"
    ],
    bgClass: "from-emerald-50 to-teal-50 border-emerald-100"
  },
  {
    name: "Student App",
    tagline: "Class schedules, results, exams, and diaries at their fingertips.",
    icon: Smartphone,
    features: [
      "Schedules, results, exams, and diaries dashboard",
      "Access daily class diaries and feedback notes",
      "Download assignments and upload documents",
      "Cashless student wallet purchase statements",
      "Raise support/approval tickets directly to departments"
    ],
    bgClass: "from-blue-50/50 to-indigo-50/50 border-indigo-100/50"
  },
  {
    name: "Teacher App",
    tagline: "Effortless classroom management from anywhere.",
    icon: Laptop,
    features: [
      "Mark attendance (biometric or manual override)",
      "Upload marks and gradebooks on the go",
      "Digital homework and assignment creation",
      "Approve student leave requests and gate passes",
      "Track lesson plans and subject progress"
    ],
    bgClass: "from-slate-50 to-slate-100/80 border-slate-200"
  }
];

export default function AppsSection() {
  return (
    <section id="apps" className="w-full py-16 md:py-22 bg-white font-sans text-left relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Dedicated Apps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1] mb-6">
            One School. <br className="block sm:hidden" /> Three Dedicated Apps.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed mb-6">
            We design and build fully customized **Parent App**, **Student App**, and **Teacher App** — under your school's own name and branding — tailored to your institution's exact requirements, at no additional development cost.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-1 md:gap-4 text-sm font-bold text-slate-600 uppercase tracking-wider bg-slate-50 border border-slate-200/50 px-6 py-2.5 rounded-full"> 
            <span>Available on:</span>
            <span className="text-slate-900 font-black">Android</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-900 font-black">iOS</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-900 font-black">PC & Desktop</span>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <div 
                key={i} 
                className={`bg-gradient-to-br ${app.bgClass} border rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div>
                  {/* App Type Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-100 text-primary shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white/80 border border-slate-100 px-3 py-1 rounded-full">
                      Custom Branded
                    </span>
                  </div>

                  {/* App Info */}
                  <h3 className="text-2xl font-black text-slate-800 mb-2">{app.name}</h3>
                  <p className="text-sm font-semibold text-slate-500 mb-6 leading-relaxed">{app.tagline}</p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-md text-slate-600 font-semibold leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn more mock CTA */}
                <div className="border-t border-slate-200/50 pt-6 mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    <span>View app specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
