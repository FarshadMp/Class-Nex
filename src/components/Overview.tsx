"use client";

import React from "react";
import { 
  GraduationCap, 
  ClipboardList, 
  CalendarDays, 
  BookOpen, 
  ShoppingBag, 
  Settings, 
  Calculator, 
  UserCheck, 
  Bus, 
  Users 
} from "lucide-react";

interface CardItem {
  name: string;
  label: string;
  icon: React.ComponentType<any>;
  desc: string;
  extra: string;
  color: string;
  desktopClass: string;
}

const cardsData: CardItem[] = [
  { name: "Academic", label: "academic-service", icon: GraduationCap, desc: "Class 10-A Timetable updated by Principal.", extra: "Grade scale: Midterms", color: "text-emerald-500 bg-emerald-50 border-emerald-100", desktopClass: "top-[2%] left-[4%] rotate-[-4deg]" },
  { name: "Accounts", label: "accounts-api", icon: Calculator, desc: "Fee collection rate reaches 94.6%.", extra: "Direct Deposits: $12.4k", color: "text-blue-500 bg-blue-50/50 border-blue-100/80", desktopClass: "top-[20%] left-[-2%] rotate-[3deg]" },
  { name: "Attendance", label: "rfid-check-in", icon: UserCheck, desc: "Student check-in completed: 96.4% present.", extra: "Latest: Jared B. (07:52 AM)", color: "text-indigo-500 bg-indigo-50/50 border-indigo-100/80", desktopClass: "top-[40%] left-[5%] rotate-[-2deg]" },
  { name: "Transportation", label: "fleet-tracker", icon: Bus, desc: "Bus Route 4 status is active and on schedule.", extra: "Driver: Ramesh K.", color: "text-amber-500 bg-amber-50/50 border-amber-100/80", desktopClass: "top-[60%] left-[-3%] rotate-[4deg]" },
  { name: "Administration", label: "auth-gateway", icon: Settings, desc: "System check: User permissions updated.", extra: "12 active admin sessions", color: "text-slate-500 bg-slate-50 border-slate-100", desktopClass: "bottom-[3%] left-[4%] rotate-[-3deg]" },
  { name: "Enquiry", label: "lead-manager", icon: ClipboardList, desc: "New registration enquiry for Admissions 2026.", extra: "Lead score: High Priority", color: "text-teal-500 bg-teal-50/50 border-teal-100/80", desktopClass: "top-[3%] right-[3%] rotate-[5deg]" },
  { name: "Functions", label: "school-diary", icon: CalendarDays, desc: "Annual Sports Meet venue booked.", extra: "Date: Dec 15 (Main Ground)", color: "text-rose-500 bg-rose-50/50 border-rose-100/80", desktopClass: "top-[21%] right-[-2%] rotate-[-3deg]" },
  { name: "Library", label: "library-service", icon: BookOpen, desc: "Book 'Clean Code' checkout registered.", extra: "Due: July 12 (Alex T.)", color: "text-purple-500 bg-purple-50/50 border-purple-100/80", desktopClass: "top-[41%] right-[4%] rotate-[2deg]" },
  { name: "Store", label: "student-wallet", icon: ShoppingBag, desc: "POS checkout: Wallet balance transaction.", extra: "Amount: $12.50 (Store B)", color: "text-orange-500 bg-orange-50/50 border-orange-100/80", desktopClass: "top-[61%] right-[-3%] rotate-[-4deg]" },
  { name: "Teachers", label: "staff-roster", icon: Users, desc: "Automated lesson plans dispatched to roster.", extra: "42 active teaching staff", color: "text-cyan-500 bg-cyan-50/50 border-cyan-100/80", desktopClass: "bottom-[3%] right-[4%] rotate-[3deg]" },
];

export default function Overview() {
  const renderCard = (card: CardItem, i: number, isDesktop: boolean) => {
    const Icon = card.icon;
    return (
      <div
        key={i}
        className={`
          bg-white/95 backdrop-blur-sm border border-slate-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] rounded-2xl p-5 flex flex-col gap-3.5 group/card transition-all duration-300 w-full
          ${isDesktop ? `absolute ${card.desktopClass} hover:rotate-0 hover:scale-105 hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)] hover:border-primary/40 hover:z-30 z-20 max-w-[285px]` : "hover:-translate-y-1 hover:shadow-md hover:border-primary/40"}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg border ${card.color} shrink-0`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
              {card.label}
            </span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <div className="space-y-1.5">
          <h4 className="text-base font-bold text-slate-800 group-hover/card:text-primary transition-colors">
            {card.name}
          </h4>
          <p className="text-sm text-slate-500 font-semibold leading-relaxed">
            {card.desc}
          </p>
        </div>

        {card.extra && (
          <div className="mt-auto pt-2.5 border-t border-slate-50 text-[11px] font-bold text-slate-400">
            <span>{card.extra}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="platform" className="w-full py-16 md:py-20 bg-slate-50/50 border-y border-slate-200/40 font-sans overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100/80 px-3 py-1.5 rounded-full mb-4 inline-block">
            Operational Overview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-3 md:mb-6">
            One Platform, <br className="block sm:hidden" /> Every Operational Area
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
            It's an all-in-one school management tool that lets authorized users access and manage everything happening across an institution.
          </p>
        </div>

        {/* Grid for mobile/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
          {cardsData.map((card, i) => renderCard(card, i, false))}
        </div>

        {/* Absolute visual collage for desktop */}
        <div className="hidden lg:block relative w-full h-[780px] overflow-visible">
          {/* Grid lines background */}
          <div 
            className="absolute inset-0 z-0 opacity-80 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(rgba(16, 185, 129, 0.15) 1.5px, transparent 1.5px),
                linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px"
            }}
          />

          {/* Brackets and central text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative p-10 max-w-xl text-left pointer-events-auto bg-white/40 backdrop-blur-[2px] rounded-3xl">
              {/* Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-primary" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-primary" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-primary" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-primary" />

              <div className="space-y-6">
                <p className="text-lg font-bold text-slate-800 tracking-tight leading-relaxed">
                  Data exists everywhere in your school.<br />
                  Most of it stays locked in departmental silos.
                </p>
                <p className="text-lg font-bold text-slate-800 tracking-tight leading-relaxed">
                  Operational updates wait on the manual communication of staff.
                </p>
                <p className="text-lg font-bold text-slate-800 tracking-tight leading-relaxed">
                  Administrators struggle to keep track of fees, library books, and attendance in real time.
                </p>
                <p className="text-lg font-bold text-slate-800 tracking-tight leading-relaxed">
                  ClassNex unifies every area. Connecting all workflows under one intelligent system.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          {cardsData.map((card, i) => renderCard(card, i, true))}
        </div>
      </div>
    </section>
  );
}
