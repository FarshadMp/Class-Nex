"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FeatureFAQProps {
  faqs: FAQItem[];
}

export default function FeatureFAQ({ faqs }: FeatureFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-[#fbfbf9] border-t border-slate-200/40 font-sans text-left">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Header left column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1] mb-3 md:mb-6">
              Have Questions About This Module?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
              Explore answers to common administrative, setup, and integration queries regarding this system module.
            </p>
          </div>

          {/* Accordion right column */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-100 hover:border-primary/10 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-3 md:p-5 text-left font-bold text-slate-805 text-base sm:text-lg cursor-pointer select-none outline-none focus:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-base font-semibold text-slate-400 border-t border-slate-50 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
