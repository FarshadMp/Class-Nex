"use client";

import React from "react";
import { motion } from "framer-motion";

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

interface FeatureWorkflowProps {
  workflow: WorkflowStep[];
}

export default function FeatureWorkflow({ workflow }: FeatureWorkflowProps) {
  if (!workflow || workflow.length === 0) return null;

  return (
    <section className="py-16 md:py-22 bg-white border-t border-slate-200/40 font-sans text-left">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3 md:mb-4 inline-block">
            Workflow Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-6">
            How It Integrates Into Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-slate-50 border border-slate-100 hover:border-primary/10 hover:bg-white hover:shadow-md p-5 rounded-2xl transition-all duration-300 group flex flex-col gap-4 text-left"
            >
              {/* Step Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold tracking-tight group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm shrink-0">
                {item.step}
              </div>

              {/* Connector line (desktop only, except for last item) */}
              {index < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-20 right-[-12px] h-[1.5px] bg-slate-200/85 pointer-events-none -z-10" />
              )}

              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
