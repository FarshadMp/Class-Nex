"use client";

import React from "react";
import { Users, GraduationCap, Wallet, Layers, Globe, Award, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StackItem {
  title: string;
  desc: string;
  iconName: string;
}

interface SolutionStackProps {
  stack: StackItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Wallet,
  Layers,
  Globe,
  Award
};

export default function SolutionStack({ stack }: SolutionStackProps) {
  if (!stack || stack.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/40 font-sans text-left">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3 md:mb-4 inline-block">
            Recommended Setup
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-3 md:mb-6">
            Integrated Core Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {stack.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-100 hover:border-primary/10 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-0">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
