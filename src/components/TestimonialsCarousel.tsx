"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "By migrating our entire multi-campus operations to ClassNex, we've unified admissions, fee collections, and student progress reports. The AI alerts have bridged parent communication gaps effortlessly.",
    name: "Dr. Mariam Al-Hadi",
    role: "Principal",
    school: "Al-Yasmin International School, Riyadh",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Managing data security and role access was our biggest challenge with 10,000+ students. ClassNex resolved this in weeks with top-tier role governance, automated backups, and AES-256 data encryption.",
    name: "Khalid Al-Mansoori",
    role: "IT Director",
    school: "UAE Academic Group, Dubai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "The Modules Explorer allowed us to configure exam score averages and gradebooks specifically for our curriculum without buying custom-built databases. The interface is intuitive for teachers.",
    name: "Sarah Jenkins",
    role: "Academic Director",
    school: "International Academics, Qatar",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const nextClient = testimonials[nextIndex];

  return (
    <section className="w-full py-16 md:py-20 bg-[#fbfbf9] font-sans text-left overflow-hidden border-t border-slate-200/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6 lg:gap-8 items-center w-full">
          
          {/* Left Column: Title card & Current Reviewer Image */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Title Card */}
            <div className="bg-[#f0ede6]/40 border border-slate-200/50 rounded-[16px] md:rounded-[32px] p-4 md:p-8 flex flex-col justify-center min-h-auto py-6 sm:py-8 shadow-xs">
              <h4 className="text-2xl font-bold text-slate-800 tracking-tight leading-[1] mb-2">
                Trusted by leaders
              </h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Endorsed by educators
              </p>
            </div>
            
            {/* Current Reviewer Profile Image */}
            <div className="relative h-56 sm:h-72 w-full rounded-[22px] md:rounded-[32px] overflow-hidden shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Center Column: The Large Review Testimonial Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/50 rounded-[22px] md:rounded-[32px] p-6 md:p-10 shadow-sm min-h-auto md:min-h-[460px] flex flex-col justify-between relative overflow-hidden group hover:border-primary/10 transition-all duration-300">
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-primary/20 rotate-180" />
                
                <div className="min-h-auto md:min-h-[220px] py-4 md:py-0 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl font-bold text-slate-700 leading-relaxed tracking-tight"
                    >
                      "{current.quote}"
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h5 className="text-base font-bold text-slate-800">{current.name}</h5>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                      {current.role} &bull; <span className="text-primary">{current.school}</span>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Next/Prev navigation controls + Next Reviewer Image */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 md:gap-6 h-full items-stretch">
            {/* Top-Left: Empty spacer */}
            <div className="hidden sm:block" />

            {/* Top-Right: Next Testimonial Button */}
            <button
              onClick={nextTestimonial}
              className="bg-primary text-white p-4 sm:p-6 rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] rounded-bl-[4px] flex flex-col justify-between items-start text-left shadow-md hover:bg-[#047857] transition-all duration-300 cursor-pointer min-h-[130px] sm:min-h-[180px] group"
            >
              <span className="text-sm font-black uppercase tracking-wider opacity-95">Next Testimonial</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Bottom-Left: Previous Testimonial Button */}
            <button
              onClick={prevTestimonial}
              className="bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-100/50 text-primary p-4 sm:p-6 rounded-bl-[32px] rounded-tl-[32px] rounded-br-[4px] rounded-tr-[32px] flex flex-col justify-between items-start text-left transition-all duration-300 cursor-pointer min-h-[130px] sm:min-h-[180px] group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="text-sm font-black uppercase tracking-wider">Previous Testimonial</span>
            </button>

            {/* Bottom-Right: Next Reviewer Profile Image */}
            <div className="relative rounded-[32px] rounded-tr-[4px] overflow-hidden shadow-md min-h-[130px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={nextClient.image}
                  src={nextClient.image}
                  alt={nextClient.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
