"use client";

import React from "react";
import {
  Cpu,
  BarChart3,
  Contact,
  MessageSquare,
  Fingerprint,
  Calendar,
  Landmark,
  FileEdit,
  Award,
  Briefcase
} from "lucide-react";

const highlights = [
  {
    title: "AI-Forward & Future-Ready",
    description: "An international EdTech product built to modernize how educational institutions function in today's digital world.",
    icon: Cpu
  },
  {
    title: "AI-Powered Analytics & Insights",
    description: "Advanced analytics deliver performance trends, predictive insights, and data-driven decision support for admins.",
    icon: BarChart3
  },
  {
    title: "Student Info Management",
    description: "Generate custom reports, use interactive dashboards, and derive actionable insights from centralized student databases.",
    icon: Contact
  },
  {
    title: "Parent & Teacher Portal",
    description: "Seamless communication platform connecting parents, teachers, and admins through alerts and messaging.",
    icon: MessageSquare
  },
  {
    title: "Smart Attendance System",
    description: "Automated tracking for students and staff with real-time updates and notifications for improved accountability.",
    icon: Fingerprint
  },
  {
    title: "Timetable & Scheduling",
    description: "Automated class scheduling, teacher allocation, subject planning, and real-time adjustments for efficiency.",
    icon: Calendar
  },
  {
    title: "Fee & Finance Management",
    description: "Complete fee collection, invoicing, online payments, reminders, and transparent financial statements.",
    icon: Landmark
  },
  {
    title: "Homework & Assignments",
    description: "Digital assignment sharing, submission tracking, grading, and feedback to enhance learning engagement.",
    icon: FileEdit
  },
  {
    title: "Examination & Report Cards",
    description: "Create exam schedules, manage grading, generate report cards, and analyze academic performance automatically.",
    icon: Award
  },
  {
    title: "HR & Staff Management",
    description: "Manage staff records, payroll, attendance, performance logs, and internal communication in one place.",
    icon: Briefcase
  }
];

export default function Highlights() {
  return (
    <section className="w-full py-16 md:py-22 bg-white font-sans text-left relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-2 inline-block">
            Key Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1] mb-4">
            Built for Modern, Intelligent Schools
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
            Class Nex introduces advanced intelligence and end-to-end automation to eliminate administrative overhead, improve student outcomes, and bridge communication gaps.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="flex gap-4 p-5 rounded-2xl border border-slate-100/80 hover:bg-slate-50/50 hover:border-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
