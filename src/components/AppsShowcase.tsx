"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Users, GraduationCap, Award } from "lucide-react";

// Mockup components for high-fidelity presentation
const ParentPreview = () => (
  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 space-y-4 shadow-inner text-left text-xs font-semibold select-none h-64 flex flex-col justify-between">
    <div className="flex items-center justify-between pb-2 border-b border-slate-200/40">
      <span className="text-[10px] font-black text-slate-600">Child: Aarav Sharma</span>
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
    </div>
    <div className="space-y-2">
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs flex items-center justify-between">
        <div>
          <div className="text-[9px] text-slate-600 font-bold">Today&apos;s Attendance</div>
          <div className="font-bold text-slate-700 mt-0.5">Present (Checked in at 07:55 AM)</div>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">On Time</span>
      </div>
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs flex items-center justify-between">
        <div>
          <div className="text-[9px] text-slate-600 font-bold">Pending Fees</div>
          <div className="font-bold text-slate-700 mt-0.5">July Term Invoices</div>
        </div>
        <span className="text-[10px] bg-rose-50 border border-rose-100 text-rose-600 px-3 py-1 rounded-lg font-black cursor-pointer hover:bg-rose-100 transition-colors">PAY NOW</span>
      </div>
    </div>
    <div className="text-[10px] text-slate-600 text-center font-bold">Last sync: Just now</div>
  </div>
);

const StudentPreview = () => (
  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 space-y-4 shadow-inner text-left text-xs font-semibold select-none h-64 flex flex-col justify-between">
    <div className="flex items-center justify-between pb-2 border-b border-slate-200/40">
      <span className="text-[10px] font-black text-slate-600">Campus Card Balance</span>
      <span className="text-slate-800 font-black text-[11px] bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">$24.00</span>
    </div>
    <div className="space-y-2">
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs">
        <div className="text-[9px] text-slate-600 font-bold">Next Class Period</div>
        <div className="font-bold text-slate-700 mt-0.5">Physics (Lab 2) — Mr. Dave</div>
        <div className="text-[9px] text-primary font-bold mt-1">Starts in 8 minutes</div>
      </div>
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs flex items-center justify-between">
        <div>
          <div className="text-[9px] text-slate-600 font-bold">Active Homework</div>
          <div className="font-bold text-slate-700 mt-0.5">Algebra Exercise 4.2</div>
        </div>
        <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-600 px-2.5 py-0.5 rounded-md font-bold cursor-pointer">Submit</span>
      </div>
    </div>
    <div className="text-[10px] text-slate-600 text-center font-bold">Class 10-A</div>
  </div>
);

const TeacherPreview = () => (
  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 space-y-4 shadow-inner text-left text-xs font-semibold select-none h-64 flex flex-col justify-between">
    <div className="flex items-center justify-between pb-2 border-b border-slate-200/40">
      <span className="text-[10px] font-black text-slate-600">Teacher: Sarah Collins</span>
      <span className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">Class 10-B</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs text-center cursor-pointer hover:bg-slate-50 transition-colors">
        <div className="text-[8px] text-slate-600 font-black">ATTENDANCE</div>
        <div className="font-bold text-slate-700 mt-0.5">Mark Roster</div>
      </div>
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs text-center cursor-pointer hover:bg-slate-50 transition-colors">
        <div className="text-[8px] text-slate-600 font-black">EXAMS</div>
        <div className="font-bold text-slate-700 mt-0.5">Upload Grades</div>
      </div>
    </div>
    <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xs flex items-center justify-between">
      <div>
        <div className="text-[9px] text-slate-600 font-bold">Class Diary Note</div>
        <div className="font-bold text-slate-700 mt-0.5">Physics mid-term revision sheet</div>
      </div>
      <span className="w-2 h-2 rounded-full bg-emerald-500" />
    </div>
  </div>
);

const appTabs = [
  {
    id: "parent",
    name: "Parent App",
    tagline: "Total oversight for families on child metrics.",
    icon: Users,
    bulletPoints: [
      "RFID Entry/Exit alerts the second students pass gate sensors",
      "One-click online fee gateway checkouts and installments",
      "Instant feedback diaries, consent requests, and exam schedules",
      "Full digital gradebook card logs detailing child progress logs"
    ],
    previewComponent: ParentPreview
  },
  {
    id: "student",
    name: "Student App",
    tagline: "Empower students to manage their academic diaries.",
    icon: GraduationCap,
    bulletPoints: [
      "Live time-tables, substitutions, and exams notifications",
      "Secure campus card wallets for cafeteria & library spends",
      "Class assignments submissions and teacher grade notes",
      "Extracurricular milestones, achievements, and club announcements"
    ],
    previewComponent: StudentPreview
  },
  {
    id: "teacher",
    name: "Teacher App",
    tagline: "Effortless administration right from the classroom floor.",
    icon: Award,
    bulletPoints: [
      "Log class rosters or mark attendance in less than 30 seconds",
      "Publish daily assignments sheets and grading matrices",
      "Send behavioral feedback or updates directly to parents",
      "Schedule substitution alerts and request leave approvals"
    ],
    previewComponent: TeacherPreview
  }
];

export default function AppsShowcase() {
  const [activeTab, setActiveTab] = useState("parent");
  const currentTab = appTabs.find((tab) => tab.id === activeTab) || appTabs[0];
  const Preview = currentTab.previewComponent;

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/50 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2.5 sm:gap-4 mb-8 md:mb-10">
          {appTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-bold transition-all cursor-pointer ${
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/10" 
                    : "bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Bullets & descriptions */}
              <div className="lg:col-span-7 text-left space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{currentTab.name}</h3>
                  <p className="text-base sm:text-lg text-slate-500 font-semibold">{currentTab.tagline}</p>
                </div>
                
                <ul className="space-y-3.5 pt-2">
                  {currentTab.bulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-base font-semibold text-slate-600">
                      <span className="w-5 h-5 bg-emerald-50 border border-emerald-100 text-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphical Preview Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
                <Preview />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
