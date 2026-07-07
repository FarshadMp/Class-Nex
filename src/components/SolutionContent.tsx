"use client";

import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface SolutionContentProps {
  targetAudience: string;
  challenges: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export default function SolutionContent({ targetAudience, challenges, features }: SolutionContentProps) {
  return (
    <section className="py-16 md:py-22 bg-slate-50 border-t border-slate-200/40 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Challenges Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                Target Audience & Goals
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed bg-white border border-slate-100 p-4 rounded-2xl shadow-xs">
                <strong>Best For:</strong> {targetAudience}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Common Operational Pain Points
              </h4>
              <ul className="space-y-3.5">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-3 text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Capabilities Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              ClassNex Solutions Portfolio
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, index) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-slate-100 hover:border-primary/10 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 group-hover:text-primary transition-colors">
                      <CheckCircle className="w-4.5 h-4.5 text-primary" /> {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
