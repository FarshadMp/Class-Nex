"use client";

import React, { useState } from "react";
import { 
  Building2, 
  GraduationCap, 
  Award, 
  Wallet, 
  BusFront,
  Check
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "admin",
    name: "Admissions & Admin",
    icon: Building2,
    stat: "100%",
    statLabel: "Paperless Registry",
    quote: "Centralize your school database. Eliminate physical paperwork pipelines, digitize visitor logs, and configure security roles instantly.",
    modules: [
      { name: "Enquiry Management", details: ["Structured pipeline tracker", "Lead capture logs", "Task routing"] },
      { name: "Admission Desk", details: ["Walk-in inquiry logs", "Digital document checklist", "Parent meetings logs"] },
      { name: "Student Database", details: ["Profiles registry", "Achievements logs", "Automated Promotions"] },
      { name: "Security & Gates", details: ["Role-based access", "Smart cards ready", "Visitor pass logs"] }
    ]
  },
  {
    id: "academics",
    name: "Academics & Class",
    icon: GraduationCap,
    stat: "Real-Time",
    statLabel: "Parent & Teacher Sync",
    quote: "Engage parents and teachers instantly with automated class timetables, digital homework assignments, and biometric check-ins.",
    modules: [
      { name: "Class Timetables", details: ["Editable timetable builder", "Teacher allocations", "Real-time swap alerts"] },
      { name: "RFID Attendance", details: ["RFID gate sensor ready", "Manual override log", "Absence SMS alerts"] },
      { name: "Assignments Desk", details: ["Publish tasks with files", "Submission portals", "Teacher grades log"] },
      { name: "Digital Diary", details: ["Daily diary reporting", "Behavior indicators", "Instant app sync"] }
    ]
  },
  {
    id: "exams",
    name: "Exams & Reports",
    icon: Award,
    stat: "20x Faster",
    statLabel: "Gradebooks & Cards",
    quote: "Ditch manual spreadsheets. Configure class test structures, calculate student averages, and compile reports automatically.",
    modules: [
      { name: "Examinations setup", details: ["Term exam schedules", "Grade scales configurator", "Class-average tracker"] },
      { name: "Automated Reports", details: ["Single-click PDF report cards", "Subject progress trends", "Academic graphs"] },
      { name: "Moral Grading", details: ["Moral attendance logs", "Mentoring logs", "Extracurricular tags"] }
    ]
  },
  {
    id: "finance",
    name: "Finance & Wallet",
    icon: Wallet,
    stat: "Cashless",
    statLabel: "Fee Gateway & Wallet",
    quote: "Facilitate secure, hassle-free online fee payments for parents and enable smart campus wallet purchases for students.",
    modules: [
      { name: "Fee collections", details: ["Scholarship concessions", "Gateway payment forms", "Automatic reminders"] },
      { name: "Campus Wallet", details: ["RFID student purchases", "Parent-controlled limits", "Spend statements"] },
      { name: "Reconciliation", details: ["Profit & loss ledgers", "Concession registers", "Refund logs"] }
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Staff",
    icon: BusFront,
    stat: "GPS Tracking",
    statLabel: "Fleet & Staff Roster",
    quote: "Oversee school transport vehicles, campus store inventories, and teacher payroll cycles from one centralized panel.",
    modules: [
      { name: "Transport Fleet", details: ["GPS vehicle registries", "Route allocations", "Transport fee tags"] },
      { name: "Store Inventory", details: ["Asset registers", "Wallet checkout sync", "Low-stock flags"] },
      { name: "Staff & Payroll", details: ["Rosters & salary details", "Leave balance tracker", "Automated disbursements"] }
    ]
  }
];

export default function ModulesExplorer() {
  const [activeTab, setActiveTab] = useState("admin");
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="features" className="w-full py-16 md:py-20 bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-900 font-sans relative overflow-hidden">

      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 md:mb-5">
            Platform Deep-Dive by Module
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-semibold leading-relaxed">
            Class Nex integrates all areas of operations into a modular platform. Explore features designed for administrators, teachers, and accountants.
          </p>
        </div>

        {/* Tabs Row */}
        <div className="relative border-b border-white/15 pb-4 mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex justify-start md:justify-center gap-8 md:gap-14 select-none shrink-0 min-w-max">
            {categories.map((cat) => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-xs sm:text-sm font-bold tracking-widest transition-colors relative pb-4 focus:outline-none shrink-0 cursor-pointer ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-white rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Card Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[22px] md:rounded-[26px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100"
        >
          {/* Left Panel (Sidebar) */}
          <div className="lg:w-1/3 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between shrink-0 bg-slate-50/50">
            <div>
              <div className="text-[56px] font-bold text-slate-800 tracking-tighter leading-none mb-3">
                {activeCategory.stat}
              </div>
              <div className="text-base font-bold text-slate-600 leading-normal">
                {activeCategory.statLabel}
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <a 
                href="#contact" 
                className="border border-slate-800 hover:bg-slate-900 hover:text-white text-xs font-black px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 select-none"
              >
                <span>REQUEST DEMO</span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              </a>
            </div>
          </div>

          {/* Right Panel (Content) */}
          <div className="lg:w-2/3 p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              <div className="text-6xl text-slate-200 font-serif leading-none select-none h-4">“</div>
              <p className="text-xl md:text-2xl text-slate-600 font-semibold leading-relaxed">
                {activeCategory.quote}
              </p>
            </div>

            {/* Sub-modules List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-6 md:mt-10 pt-8 border-t border-slate-100">
              {activeCategory.modules.map((mod, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50/70 border border-slate-100 p-5 rounded-2xl flex items-start gap-3.5 hover:border-primary/20 hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 text-primary shrink-0 mt-0.5">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">{mod.name}</h4>
                    <p className="text-base sm:text-sm text-slate-600 font-semibold leading-[1.4]">
                      {mod.details.join(" • ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
