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
  Briefcase,
  ArrowRight,
  FileText
} from "lucide-react";

const highlights = [
  {
    title: "AI-Forward & Future-Ready",
    description: "An international EdTech product built to modernize how educational institutions function in today's digital world.",
    icon: Cpu,
    tag: "Product Info"
  },
  {
    title: "AI-Powered Analytics & Insights",
    description: "Advanced analytics deliver performance trends, predictive insights, and data-driven decision support for admins.",
    icon: BarChart3,
    tag: "Analytics"
  },
  {
    title: "Student Info Management",
    description: "Generate custom reports, use interactive dashboards, and derive actionable insights from centralized student databases.",
    icon: Contact,
    tag: "Centralized"
  },
  {
    title: "Parent & Teacher Portal",
    description: "Seamless communication platform connecting parents, teachers, and admins through alerts and messaging.",
    icon: MessageSquare,
    tag: "Communication"
  },
  {
    title: "Smart Attendance System",
    description: "Automated tracking for students and staff with real-time updates and notifications for improved accountability.",
    icon: Fingerprint,
    tag: "RFID & Bio"
  },
  {
    title: "Timetable & Scheduling",
    description: "Automated class scheduling, teacher allocation, subject planning, and real-time adjustments for efficiency.",
    icon: Calendar,
    tag: "Scheduler"
  },
  {
    title: "Fee & Finance Management",
    description: "Complete fee collection, invoicing, online payments, reminders, and transparent financial statements.",
    icon: Landmark,
    tag: "Finances"
  },
  {
    title: "Homework & Assignments",
    description: "Digital assignment sharing, submission tracking, grading, and feedback to enhance learning engagement.",
    icon: FileEdit,
    tag: "E-Learning"
  },
  {
    title: "Examination & Report Cards",
    description: "Create exam schedules, manage grading, generate report cards, and analyze academic performance automatically.",
    icon: Award,
    tag: "Evaluation"
  },
  {
    title: "HR & Staff Management",
    description: "Manage staff records, payroll, attendance, performance logs, and internal communication in one place.",
    icon: Briefcase,
    tag: "HR & Payroll"
  }
];

export default function Highlights() {
  return (
    <section className="w-full py-16 md:py-22 bg-slate-50/30 font-sans text-left relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-2 inline-block">
            Key Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-4">
            Built for Modern, Intelligent Schools
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-[1.6]">
            Class Nex introduces advanced intelligence and end-to-end automation to eliminate administrative overhead, improve student outcomes, and bridge communication gaps.
          </p>
        </div>

        {/* Highlights Grid with shared border style */}
        <div className="border border-slate-200/60 rounded-[32px] overflow-hidden bg-slate-200/50 gap-[1px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className={`
                  bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-50/40 transition-all duration-300 group
                  ${i === highlights.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}
                `}
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-emerald-50 text-primary shrink-0 group-hover:scale-105 transition-transform duration-300 mb-6">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-[24px] font-bold text-slate-800 mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-400 font-semibold leading-[1.4] mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>{item.tag}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
