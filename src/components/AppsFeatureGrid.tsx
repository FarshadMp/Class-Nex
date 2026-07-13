"use client";

import React from "react";
import { BellRing, WifiOff, Fingerprint, Wallet } from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge: string;
}

function FeatureCard({ icon: Icon, title, description, badge }: FeatureCardProps) {
  return (
    <div className="bg-white border border-slate-200/65 rounded-[24px] p-6 space-y-4 hover:shadow-xl hover:shadow-slate-100/50 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Icon className="w-5.5 h-5.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-150 px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
        <p className="text-sm font-semibold text-slate-500 leading-relaxed">{description}</p>
      </div>
      <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Native Capable</span>
        <span>→</span>
      </div>
    </div>
  );
}

const features = [
  {
    icon: BellRing,
    title: "Smart Push Notifications",
    description: "Broadcast instant notifications for RFID arrivals, exam substitutions, urgent circulars, or fee updates directly to parents' lock screens.",
    badge: "Immediate"
  },
  {
    icon: WifiOff,
    title: "Offline Syncing & Storage",
    description: "Enables offline roster logs for teachers on playground activities and student diaries that automatically sync when back on campus Wi-Fi.",
    badge: "Reliable"
  },
  {
    icon: Fingerprint,
    title: "Biometric Security Lock",
    description: "Secures administrative profiles, financial ledgers, and grading records with native FaceID / TouchID biometric checkpoints.",
    badge: "Secure"
  },
  {
    icon: Wallet,
    title: "Campus Card Wallet",
    description: "Allows parents to top up digital wallets, set daily spending caps at the cafeteria, and track real-time micro-transactions.",
    badge: "Convenient"
  }
];

export default function AppsFeatureGrid() {
  return (
    <section className="py-16 md:py-20 bg-[#fbfbf9] border-t border-slate-200/50 text-center font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Power Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Designed for the Modern Mobile Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed mt-3">
            Our applications utilize native device capabilities to ensure seamless security, reliable communication, and lightning-fast performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {features.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>
      </div>
    </section>
  );
}
