"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Heart, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: ShieldAlert,
    title: "Security & Sovereignty",
    description: "Your school data is private and secure. We comply with strict data residency laws and secure transmissions using bank-grade encryption algorithms."
  },
  {
    icon: Cpu,
    title: "AI-Powered Innovation",
    description: "We are constantly evolving our software suite. By integrating helper AI agents, we streamline lesson scheduling, data audit logs, and automatic fee reconciliation."
  },
  {
    icon: Heart,
    title: "Teacher & Student Aligned",
    description: "A tool is only as good as its adoption. We design intuitive, simple mobile interfaces so that students, teachers, and grandparents can operate it without training."
  },
  {
    icon: CheckCircle2,
    title: "Absolute Transparency",
    description: "We believe in honest partnerships. No hidden subscription fees, clear feature scopes, and dedicated live helpdesk channels whenever you need them."
  }
];

export default function AboutValues() {
  return (
    <section className="py-16 md:py-20 bg-[#fbfbf9] font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            The Principles Driving Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200/60 p-8 rounded-2xl text-left flex gap-5 transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary border border-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-base font-semibold text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
