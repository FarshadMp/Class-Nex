"use client";

import React from "react";
import { Check, X, ShieldAlert, ShieldCheck } from "lucide-react";

const comparisonData = [
  {
    feature: "App Store Listing Name",
    classnex: "Your Official School Name (e.g., 'Greenwood Academy')",
    generic: "Shared Generic App Name (e.g., 'School Communicator')",
    highlight: true
  },
  {
    feature: "App Icon & Branding",
    classnex: "Custom school logo icon & full custom colors styling",
    generic: "Generic provider logo and uniform template style",
    highlight: true
  },
  {
    feature: "Push Notification Limits",
    classnex: "Unlimited alerts (RFID arrivals, fee notifications, substitution diaries)",
    generic: "Highly restricted daily limits or pay-per-push pricing",
    highlight: false
  },
  {
    feature: "Biometric Screen Lock",
    classnex: "Supported (Native FaceID & TouchID screen lock authentication)",
    generic: "No native lockout - relies on generic session cookies",
    highlight: false
  },
  {
    feature: "Digital Student Wallet",
    classnex: "Yes (Fully integrated with RFID campus card top-ups & limits)",
    generic: "No wallet integration or web-view redirection",
    highlight: false
  },
  {
    feature: "App Store Build Updates",
    classnex: "Lifetime OTA & compiler store updates handled by ClassNex",
    generic: "Manual file uploads or updates charged separately",
    highlight: false
  }
];

export default function AppsComparison() {
  return (
    <section className="py-16 md:py-20 bg-[#fbfbf9] border-t border-slate-200/50 text-left font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-4 inline-block">
            Product Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            White-Label vs. Shared Apps
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed mt-3">
            Why leading educational institutions invest in their own dedicated application rather than a shared, generic portal.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm max-w-5xl mx-auto">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full border-collapse text-left text-sm font-semibold text-slate-500">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="p-6 text-slate-800 font-extrabold text-base w-[30%]">Features & Specs</th>
                  <th className="p-6 text-primary font-black text-base bg-emerald-50/20 w-[35%] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span>ClassNex White-Label</span>
                  </th>
                  <th className="p-6 text-slate-400 font-bold text-base w-[35%]">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-slate-350 shrink-0" />
                      <span>Generic Shared App</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`hover:bg-slate-50/30 transition-colors ${row.highlight ? "bg-emerald-50/5" : ""}`}>
                    <td className="p-6 font-bold text-slate-800">{row.feature}</td>
                    <td className="p-6 bg-emerald-50/10 font-bold text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 bg-emerald-100 text-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                        </span>
                        <span>{row.classnex}</span>
                      </div>
                    </td>
                    <td className="p-6 font-semibold text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span>{row.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
