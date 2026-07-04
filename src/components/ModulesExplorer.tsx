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
    modules: [
      { name: "Enquiry Management", details: ["Structured pipeline tracker", "Automated follow-up logs", "Lead capture & task routing"] },
      { name: "Admission Desk", details: ["Inquiry handling (walk-in/call)", "Digital document collection", "Receipting & parent meetings"] },
      { name: "Student Management", details: ["Detailed student profiles", "Behavior logs & achievements", "Automated promotions"] },
      { name: "Access & Security", details: ["Role-based customizable access", "Smart Card/biometric ready", "Multiple login panels"] },
      { name: "Visitors Management", details: ["Visitor passes on apps", "Gate verification & timestamping", "Security push alerts"] }
    ]
  },
  {
    id: "academics",
    name: "Academics & Class",
    icon: GraduationCap,
    modules: [
      { name: "Class & Timetable", details: ["Editable timetable builder", "Real-time timetable alerts", "Subject & teacher assignments"] },
      { name: "Attendance Management", details: ["Biometric & RFID integration", "Manual marking via Teacher App", "Absence alerts to parents"] },
      { name: "Homework & Tasks", details: ["Digital homework publishing", "File attachments (video/doc)", "Submission & feedback grading"] },
      { name: "Daily Reports & Diary", details: ["Diary-style digital reporting", "Behavior & grade notes", "Parent app syncing"] },
      { name: "Leave & Gate Pass", details: ["Parent-submitted leaves", "Workflow approval for staff", "Automatic gate pass print"] }
    ]
  },
  {
    id: "exams",
    name: "Exams & Reports",
    icon: Award,
    modules: [
      { name: "Examinations", details: ["Term & class test config", "Gradebook setup by standard", "Automated score averages"] },
      { name: "Progress Reports", details: ["Printable report generation", "Performance tracking trends", "Subject performance analysis"] },
      { name: "Additional Modules", details: ["Moral Attendance", "Moral Grading System", "Mentoring logs"] }
    ]
  },
  {
    id: "finance",
    name: "Finance & Wallet",
    icon: Wallet,
    modules: [
      { name: "Fee Management", details: ["Custom scholarships/discounts", "Subscription-based structures", "Invoicing & gateway support"] },
      { name: "Student Wallet", details: ["Cashless card-based purchases", "Parent-funded deposits", "Fine deductions & balance logs"] },
      { name: "Deposit & Refund", details: ["Collect deposit bounds", "Deductions & refunds logs", "Fee reconciliation"] },
      { name: "Accounts & Bookkeeping", details: ["Income & expense logs", "Profit & loss reports", "Non-accountant interface"] }
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Staff",
    icon: BusFront,
    modules: [
      { name: "Transportation", details: ["Route & vehicle registries", "GPS tracking ready", "Integrated transport fees"] },
      { name: "Inventory & Store", details: ["Asset lifecycle tracking", "Store management", "Wallet purchase sync"] },
      { name: "Medical & Sick Room", details: ["Health record cards", "Sick room visit logs", "Parental alerts"] },
      { name: "Payroll Management", details: ["Salary profiles register", "Attendance-linked payroll", "Payslips & disbursements logs"] },
      { name: "Ticket System", details: ["Ticket issue generation", "Routing to department", "Escalation workflows"] }
    ]
  }
];

export default function ModulesExplorer() {
  const [activeTab, setActiveTab] = useState("admin");
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];
  const Icon = activeCategory.icon;

  return (
    <section id="features" className="w-full py-16 md:py-22 bg-slate-50 border-y border-slate-200/50 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Modules Explorer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6">
            Platform Deep-Dive by Module
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
            Class Nex integrates all areas of operations into a modular platform. Explore features designed for administrators, teachers, and accountants.
          </p>
        </div>

        {/* Tabs Row */}
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:justify-center gap-2 mb-6 md:mb-10 border-b border-slate-200 pb-4 md:pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1 px-3.5 py-2 md:px-5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all uppercase cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Modules Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {activeCategory.modules.map((mod, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-primary/10 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Number Label */}
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase">
                    MODULE 0{i + 1}
                  </span>
                </div>
                
                <h3 className="text-lg font-black text-slate-800 tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {mod.name}
                </h3>
                
                <ul className="space-y-3">
                  {mod.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-500 font-semibold leading-relaxed">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-50 text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="group-hover:text-slate-600 transition-colors duration-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
