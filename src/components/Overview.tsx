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

const areas = [
  { name: "Academic", description: "Class schedules, grading scales, subject plans, and student promotions.", icon: GraduationCap },
  { name: "Enquiry Management", description: "Leads tracking, enquiry follow-ups, document uploads, and registrations.", icon: ClipboardList },
  { name: "School Functions", description: "Timetables, events management, school diaries, and daily notifications.", icon: CalendarDays },
  { name: "Library", description: "Book registries, checkout logs, due date alerts, and digital search.", icon: BookOpen },
  { name: "Store", description: "Inventory tracking, Point-of-Sale (POS), and Student Wallet transactions.", icon: ShoppingBag },
  { name: "Administration", description: "User permission management, security logs, and role-based panels.", icon: Settings },
  { name: "Accounts", description: "Fee collections, concession registers, online payments, and profit & loss.", icon: Calculator },
  { name: "Attendance", description: "Biometric or RFID-based automated check-ins for students & staff.", icon: UserCheck },
  { name: "Transportation", description: "Vehicle registries, route details, and fee structures.", icon: Bus },
  { name: "Teachers", description: "Rosters, lesson plans, automated salary disbursements, and evaluations.", icon: Users },
];

export default function Overview() {
  return (
    <section id="platform" className="w-full py-16 md:py-22 bg-slate-50/50 border-y border-slate-200/40 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100/80 px-3 py-1.5 rounded-full mb-4 inline-block">
            Operational Overview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1] mb-6">
            One Platform, <br className="block sm:hidden" /> Every Operational Area
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
            It's an all-in-one school management tool that lets authorized users access and manage everything happening across an institution — from the front desk to the classroom to the finance office.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div 
                key={i} 
                className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-start text-left overflow-hidden"
              >
                {/* Top Green Hover Indicator Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon Container */}
                <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-slate-50 text-slate-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-5 group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0 shadow-sm">
                  <Icon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
                </div>
                
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1 md:mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                  {area.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-sm text-slate-400 font-semibold leading-tight">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
