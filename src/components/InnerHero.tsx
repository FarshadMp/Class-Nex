"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

interface InnerHeroProps {
  badge: string;
  title: string | React.ReactNode;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  rightContent?: React.ReactNode;
}

export default function InnerHero({
  badge,
  title,
  description,
  ctaText,
  ctaLink = "/contact",
  rightContent
}: InnerHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-[#fbfbf9] overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center text-left">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs sm:text-sm font-bold text-primary">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] md:leading-[1]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2"
              >
                <Link
                  href={ctaLink}
                  className="inline-block px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer"
                >
                  {ctaText}
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right Column Custom Content */}
          {rightContent && (
            <div className="lg:col-span-5 relative w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {rightContent}
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
