"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between text-left font-bold text-slate-800 hover:text-primary transition-colors cursor-pointer select-none gap-4"
      >
        <span className="text-base md:text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-48 border-t border-slate-100" : "max-h-0"
        }`}
      >
        <p className="p-5 text-sm font-semibold text-slate-500 leading-relaxed bg-slate-50/30">
          {answer}
        </p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Do we need our own Apple & Google developer accounts?",
    answer: "Yes. To maintain full legal ownership of your application and branding, both Apple and Google guidelines require schools to register their own developer credentials. Our dedicated deployment team will guide you through this setup."
  },
  {
    question: "How long does the App Store compilation & review process take?",
    answer: "Branding asset generation and compilation take 5–7 days. Store review compliance verification generally takes another 3–5 days. Expect your white-label apps to be live on both stores in 10–14 days."
  },
  {
    question: "Are updates to support new Android or iOS releases free?",
    answer: "Absolutely. All compatibility upgrades, security patches, framework adaptations, and operating system updates are fully included in your ClassNex license. We run compiler builds automatically when new OS SDKs launch."
  },
  {
    question: "Can we restrict app sign-ins to active campus members only?",
    answer: "Yes. All three applications require unique token validation, SSO credentials, or verification code pins connected directly to your active school database. Public users cannot view any campus dashboards or data screens."
  }
];

export default function AppsFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/50 text-left font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Header info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block">
              App Store FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Deployment & Store FAQs
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-500 leading-relaxed">
              Have questions about mobile deployment, stores policy guidelines, or device support? Here are quick answers to our most popular inquiries.
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-8 space-y-3.5 w-full">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
