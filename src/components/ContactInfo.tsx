"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const offices = [
  {
    region: "Middle East Hub (UAE & KSA)",
    address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE",
    phone: "+971 4 456 7890",
    email: "mena@classnex.ai"
  },
  {
    region: "Asia Pacific (India)",
    address: "8th Floor, Tech Park Campus, Outer Ring Road, Bangalore, India",
    phone: "+91 80 6789 0123",
    email: "apac@classnex.ai"
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-primary bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Let&apos;s Start a Conversation
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
          Have questions about pricing plans, module customization, or security configurations? Drop us a note or call our regional desks directly.
        </p>
      </div>

      {/* Offices list */}
      <div className="space-y-6">
        {offices.map((office) => (
          <div key={office.region} className="bg-white border border-slate-200/60 p-5 rounded-2xl space-y-3.5">
            <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> {office.region}
            </h4>
            <p className="text-sm font-semibold text-slate-500 leading-relaxed">
              {office.address}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-slate-600" /> {office.phone}
              </span>
              <span className="hidden sm:inline text-slate-350">|</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-slate-600" /> {office.email}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* General contacts */}
      <div className="border-t border-slate-200 pt-6 flex gap-6 text-sm font-semibold text-slate-500">
        <span className="flex items-center gap-2 text-base">
          <Clock className="w-4 h-4 text-primary" /> Support Desk: 24/7 (SaaS Tier)
        </span>
      </div>
    </div>
  );
}
