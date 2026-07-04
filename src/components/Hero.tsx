"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  GraduationCap, 
  BookOpen, 
  Pencil, 
  Award, 
  Calculator, 
  Bell 
} from "lucide-react";

const floatingIcons = [
  { icon: GraduationCap, className: "top-[22%] left-[6%] text-primary", delay: 0, duration: 4 },
  { icon: BookOpen, className: "top-[48%] left-[10%] text-emerald-500", delay: 1, duration: 5 },
  { icon: Pencil, className: "top-[70%] left-[5%] text-slate-400 rotate-12", delay: 2, duration: 4.5 },
  { icon: Award, className: "top-[25%] right-[6%] text-emerald-600", delay: 0.5, duration: 4.8 },
  { icon: Calculator, className: "top-[45%] right-[10%] text-primary", delay: 1.5, duration: 5.2 },
  { icon: Bell, className: "top-[68%] right-[5%] text-slate-400 -rotate-12", delay: 2.5, duration: 4.2 },
];

const stats = [
  { value: "8+", label: "Years EdTech Experience" },
  { value: "4", label: "Countries Served (KSA, India, UAE, Qatar)" },
  { value: "49+", label: "Integrated Features" },
  { value: "3", label: "Apps (Parent, Student & Teacher)" },
];

export default function Hero() {
  return (
    <section className="relative pt-34 md:pt-44 pb-0 flex flex-col items-center overflow-hidden bg-white font-sans text-center">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-grid-pattern opacity-80" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-white" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Animated School-Related Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className={`absolute z-10 hidden lg:flex items-center justify-center p-3.5 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-2xl shadow-md ${item.className}`}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Icon className="w-5.5 h-5.5" />
          </motion.div>
        );
      })}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10 w-full flex flex-col items-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider"
        >
          🚀 Next-Generation School Management System
        </motion.div>

        {/* H1 Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] max-w-4xl mb-6 tracking-tight"
        >
          Run Your School on{" "}
          <span className="bg-gradient-to-r from-primary via-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            Intelligence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-xl text-slate-500 font-medium leading-[1.4] max-w-3xl mb-4 font-inter"
        >
          Class Nex is an AI-powered, all-in-one School Management System that unifies academics, administration, finance, and communication — so your team can focus less on paperwork and more on education.
        </motion.p>

        {/* Supporting Line */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-xs sm:text-sm text-slate-400 font-bold uppercase mb-8 md:mb-10 font-sans"
        >
          Where technology meets education. Simplify operations. Amplify excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-base font-bold text-white shadow-lg shadow-primary/20 transition-all uppercase cursor-pointer group"
          >
            <span>Book a demo</span>
            <span className="flex items-center justify-center w-6 h-6 bg-white text-primary rounded-full transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="#platform"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-base font-bold text-slate-700 shadow-sm transition-all uppercase cursor-pointer group"
          >
            <span>Explore the Platform</span>
            <span className="flex items-center justify-center w-6 h-6 bg-slate-100 text-slate-500 rounded-full transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </motion.div>

        {/* Trust strip (stats) Card UI with 3D block feel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="w-full max-w-5xl bg-gradient-to-b from-white to-slate-50/65 border border-slate-200/80 border-b-8 border-b-slate-350/55 rounded-[32px] p-6 sm:p-8 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(5,150,105,0.02)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),_0_15px_30px_-10px_rgba(5,150,105,0.08)] hover:-translate-y-2 transition-all duration-300 mb-16 relative overflow-hidden text-left"
        >
          {/* Background decorative glow inside card */}
          <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -top-24 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 md:gap-0 divide-y-0 md:divide-x divide-slate-150/80 relative z-10">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center text-center px-4 py-4 sm:py-2 md:py-1"
              >
                <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-[0_3px_5px_rgba(5,150,105,0.15)]">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase leading-snug max-w-[180px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
