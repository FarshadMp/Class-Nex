"use client";

import React from "react";
import { motion } from "framer-motion";
import { School, Users, CreditCard, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: School,
    value: "500+",
    label: "Partner Schools",
    description: "Empowering academies, group networks, and K-12 systems."
  },
  {
    icon: Users,
    value: "250K+",
    label: "Active Users",
    description: "Engaging students, teachers, and parents daily."
  },
  {
    icon: CreditCard,
    value: "$10M+",
    label: "Fees Collected Online",
    description: "Processed through secure, integrated cashless pipelines."
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "Server Uptime",
    description: "Ensuring highly reliable cloud access from anywhere."
  }
];

export default function AboutStats() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/50 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-xs text-left flex flex-col justify-between hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-emerald-50 text-primary border border-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-base font-bold text-slate-800">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-500 mt-4 border-t border-slate-100 pt-3 leading-[1.3]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
