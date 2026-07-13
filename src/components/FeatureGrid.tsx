"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureGridProps {
  description: string;
  benefits: string[];
  subFeatures: {
    title: string;
    description: string;
  }[];
}

export default function FeatureGrid({ description, benefits, subFeatures }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/40 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start text-left">
          
          {/* Benefits Column */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Why Schools Choose This Module
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
              {description}
            </p>
            
            <ul className="space-y-3.5 pt-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm sm:text-base font-semibold text-slate-650">
                  <span className="w-5.5 h-5.5 bg-emerald-50 border border-emerald-100 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Features Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subFeatures.map((sub, index) => (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-100 hover:border-primary/10 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" /> {sub.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
