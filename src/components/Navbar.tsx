"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const platformLinks = [
  { name: "Academics", href: "/platform/academics" },
  { name: "Admissions & Enquiry", href: "/platform/admissions" },
  { name: "Finance & Fees", href: "/platform/finance" },
  { name: "HR & Payroll", href: "/platform/payroll" },
  { name: "Attendance", href: "/platform/attendance" },
  { name: "Transportation", href: "/platform/transportation" },
  { name: "Communication", href: "/platform/communication" },
];

const solutionsLinks = [
  { name: "Schools", href: "/solutions/schools" },
  { name: "School Groups", href: "/solutions/school-groups" },
  { name: "International Schools", href: "/solutions/international" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"platform" | "solutions" | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 font-sans">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src="/img/logo-dark.svg" 
              alt="ClassNex Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-base font-bold text-slate-700 hover:text-primary transition-colors">
              Home
            </Link>

            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("platform")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer py-2">
                <span>Platform</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "platform" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "platform" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-1 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl p-3 z-50 grid gap-1"
                  >
                    {platformLinks.map((item) => (
                      <Link key={item.name} href={item.href} className="px-4 py-2.5 text-base font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-base font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer py-2">
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-1 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl p-3 z-50 grid gap-1"
                  >
                    {solutionsLinks.map((item) => (
                      <Link key={item.name} href={item.href} className="px-4 py-2.5 text-base font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/apps" className="text-base font-bold text-slate-700 hover:text-primary transition-colors">
              Apps
            </Link>
            <Link href="/about" className="text-base font-bold text-slate-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-base font-bold text-slate-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-primary text-primary hover:bg-primary/5 rounded-full text-sm sm:text-base font-bold transition-all uppercase"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full text-sm sm:text-base font-bold shadow-md shadow-primary/10 hover:shadow-lg transition-all uppercase group"
            >
              <span>Book a Demo</span>
              <span className="flex items-center justify-center w-5 h-5 bg-white text-primary rounded-full transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center text-slate-700 hover:text-primary focus:outline-none z-50 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className={`block absolute w-7 h-[3px] bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`block absolute w-7 h-[3px] bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block absolute w-7 h-[3px] bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="grid gap-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg">Home</Link>
              
              <div className="px-3 py-1 text-base font-bold text-slate-800">Platform Features:</div>
              <div className="grid grid-cols-2 gap-0 pl-4">
                {platformLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-1 text-base font-semibold text-slate-600 hover:text-primary">{link.name}</Link>
                ))}
              </div>

              <div className="px-3 py-2 text-base font-bold text-slate-400">Solutions:</div>
              <div className="grid gap-1 pl-4">
                {solutionsLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-1 text-base font-semibold text-slate-600 hover:text-primary">{link.name}</Link>
                ))}
              </div>

              <Link href="/apps" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg">Apps</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg">About Us</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg">Contact</Link>
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-row gap-3">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex-1 text-center py-2.5 border border-primary text-primary rounded-full text-sm font-bold uppercase">Contact</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex-1 text-center py-2.5 bg-primary text-white rounded-full text-sm font-bold uppercase flex items-center justify-center gap-1">
                <span>Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
