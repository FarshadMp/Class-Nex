"use client";

import React from "react";

const ParentMock = () => (
  <div className="bg-slate-50/85 border border-slate-100 rounded-t-2xl p-4.5 space-y-3 mt-4 h-56 overflow-hidden text-left text-xs font-semibold shadow-inner select-none">
    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50"><span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Student Status</span><span className="w-2 h-2 rounded-full bg-emerald-500" /></div>
    <div className="bg-white border border-slate-100/80 p-2.5 rounded-xl shadow-sm flex items-center justify-between">
      <div><div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Attendance</div><div className="font-bold text-slate-700 mt-0.5">Aarav M. — Present</div></div>
      <span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">08:02 AM</span>
    </div>
    <div className="bg-white border border-slate-100/80 p-2.5 rounded-xl shadow-sm flex items-center justify-between">
      <div><div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Fees & Invoices</div><div className="font-bold text-slate-700 mt-0.5">July Term Fees</div></div>
      <span className="text-[9px] bg-rose-50 text-rose-600 px-2.5 py-0.5 rounded-md font-bold cursor-pointer">Pay</span>
    </div>
  </div>
);

const StudentMock = () => (
  <div className="bg-slate-50/85 border border-slate-100 rounded-t-2xl p-4.5 space-y-3 mt-4 h-56 overflow-hidden text-left text-xs font-semibold shadow-inner select-none">
    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50"><span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">My Dashboard</span><span className="text-slate-500 font-extrabold text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-full">$14.50 Wallet</span></div>
    <div className="bg-white border border-slate-100/80 p-2.5 rounded-xl shadow-sm">
      <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Upcoming Class</div>
      <div className="font-bold text-slate-700 mt-0.5">Chemistry (Lab 103)</div>
      <div className="text-[9px] text-indigo-500 font-bold mt-1">Starts in 15 mins</div>
    </div>
    <div className="bg-white border border-slate-100/80 p-2.5 rounded-xl shadow-sm flex items-center justify-between">
      <div><div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Assignment</div><div className="font-bold text-slate-700 mt-0.5">Physics Lab Report</div></div>
      <span className="text-[9px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-bold">Submit</span>
    </div>
  </div>
);

const TeacherMock = () => (
  <div className="bg-slate-50/85 border border-slate-100 rounded-t-2xl p-4.5 space-y-3 mt-4 h-56 overflow-hidden text-left text-xs font-semibold shadow-inner select-none">
    <div className="flex items-center justify-between pb-2 border-b border-slate-200/50"><span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Class 10-A</span><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /></div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white border border-slate-100/80 p-2 rounded-xl shadow-sm text-center cursor-pointer hover:bg-slate-50">
        <div className="text-[8px] text-slate-400 font-black tracking-wider uppercase">ATTENDANCE</div>
        <div className="font-bold text-slate-700 text-[10px] mt-0.5">Mark Roster</div>
      </div>
      <div className="bg-white border border-slate-100/80 p-2 rounded-xl shadow-sm text-center cursor-pointer hover:bg-slate-50">
        <div className="text-[8px] text-slate-400 font-black tracking-wider uppercase">GRADING</div>
        <div className="font-bold text-slate-700 text-[10px] mt-0.5">Upload Marks</div>
      </div>
    </div>
    <div className="bg-white border border-slate-100/80 p-2.5 rounded-xl shadow-sm flex items-center justify-between">
      <div><div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Active Lesson</div><div className="font-bold text-slate-700 mt-0.5">Ch. 4 Laws of Motion</div></div>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
    </div>
  </div>
);

const apps = [
  {
    name: "Parent App",
    tagline: "Keep every family connected to what matters in real time.",
    badge: "Engage",
    badgeColor: "text-amber-500 bg-amber-50 border-amber-100",
    gradientColor: "from-amber-400 via-orange-500 to-rose-500",
    animationClass: "animate-glow-left",
    mockup: ParentMock
  },
  {
    name: "Student App",
    tagline: "Schedules, results, and diaries at their fingertips.",
    badge: "Learn",
    badgeColor: "text-indigo-500 bg-indigo-50 border-indigo-100",
    gradientColor: "from-blue-400 via-indigo-500 to-purple-500",
    animationClass: "animate-glow-center",
    mockup: StudentMock
  },
  {
    name: "Teacher App",
    tagline: "Effortless classroom management from anywhere.",
    badge: "Manage",
    badgeColor: "text-emerald-500 bg-emerald-50 border-emerald-100",
    gradientColor: "from-emerald-400 via-teal-500 to-cyan-500",
    animationClass: "animate-glow-right",
    mockup: TeacherMock
  }
];

export default function AppsSection() {
  return (
    <section id="apps" className="w-full py-16 md:py-22 bg-slate-50/20 font-sans text-left relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-5">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Dedicated Apps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-6">
            One School. <br className="block sm:hidden" /> Three Dedicated Apps.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed mb-6">
            We design and build fully customized apps under your school's own name and branding — tailored to your institution's exact requirements.
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

        {/* Animated Connector Tree */}
        <div className="relative w-full overflow-visible mb-2">
          <svg className="hidden lg:block w-full h-[60px]" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 600 0 V 30 M 188 30 H 1012 M 188 30 V 60 M 600 30 V 60 M 1012 30 V 60" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
            <path d="M 600 0 V 30 H 188 V 60" stroke="url(#gradient-flow)" strokeWidth="3" strokeLinecap="round" className="animate-line-flow" strokeDasharray="100 360" />
            <path d="M 600 0 V 60" stroke="url(#gradient-flow)" strokeWidth="3" strokeLinecap="round" className="animate-line-flow-center" strokeDasharray="30 30" />
            <path d="M 600 0 V 30 H 1012 V 60" stroke="url(#gradient-flow)" strokeWidth="3" strokeLinecap="round" className="animate-line-flow" strokeDasharray="100 360" />
            <defs>
              <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <style>{`
          @keyframes flowBackAndForth {
            0%, 100% { stroke-dashoffset: 472; }
            50% { stroke-dashoffset: 0; }
          }
          @keyframes flowCenter {
            0%, 100% { stroke-dashoffset: 60; }
            50% { stroke-dashoffset: 0; }
          }
          @keyframes cardGlowLeft {
            0%, 100% { box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05); border-color: rgba(226, 232, 240, 0.8); }
            50% { box-shadow: 0 0 25px 2px rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); }
          }
          @keyframes cardGlowCenter {
            0%, 100% { box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05); border-color: rgba(226, 232, 240, 0.8); }
            50% { box-shadow: 0 0 25px 2px rgba(79, 70, 229, 0.15); border-color: rgba(79, 70, 229, 0.4); }
          }
          @keyframes cardGlowRight {
            0%, 100% { box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05); border-color: rgba(226, 232, 240, 0.8); }
            50% { box-shadow: 0 0 25px 2px rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.4); }
          }
          .animate-line-flow { animation: flowBackAndForth 6s ease-in-out infinite; }
          .animate-line-flow-center { animation: flowCenter 6s ease-in-out infinite; }
          .animate-glow-left { animation: cardGlowLeft 6s ease-in-out infinite; }
          .animate-glow-center { animation: cardGlowCenter 6s ease-in-out infinite; }
          .animate-glow-right { animation: cardGlowRight 6s ease-in-out infinite; }
        `}</style>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {apps.map((app, i) => {
            const Mockup = app.mockup;
            return (
              <div 
                key={i} 
                className={`bg-white border border-slate-200/80 rounded-[28px] p-6 pt-8 flex flex-col justify-between text-center relative overflow-hidden group shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 ${app.animationClass}`}
              >
                <div>
                  {/* Badge */}
                  <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border mb-5 ${app.badgeColor}`}>
                    {app.badge}
                  </span>
                  {/* Title & Tagline */}
                  <h3 className="text-3xl font-bold text-slate-800 tracking-tight mb-2.5">{app.name}</h3>
                  <p className="text-sm font-semibold text-slate-400 px-2 leading-relaxed mb-6">{app.tagline}</p>
                  {/* Action Button */}
                  <button className="border border-slate-200 hover:border-slate-300 text-xs font-bold px-4 py-2 hover:bg-slate-50 transition-colors rounded-lg mb-8 inline-block select-none">
                    Explore App Specs
                  </button>
                </div>
                {/* Mockup Container */}
                <Mockup />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
