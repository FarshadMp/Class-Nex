"use client";

import React, { useState, useEffect } from "react";
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

export default function Navbar({ transparentAtTop = false }: { transparentAtTop?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"platform" | "solutions" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!transparentAtTop) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentAtTop]);

  const isTransparent = transparentAtTop && !isScrolled && !isOpen;

  const headerClass = isTransparent
    ? "fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent font-sans transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 font-sans transition-all duration-300";

  const logoSrc = isTransparent ? "/img/logo.svg" : "/img/logo-dark.svg";

  const navLinkClass = isTransparent
    ? "text-base font-bold text-white/90 hover:text-emerald-400 transition-colors"
    : "text-base font-bold text-slate-700 hover:text-primary transition-colors";

  const outlineBtnClass = isTransparent
    ? "px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 rounded-full text-sm sm:text-sm font-bold transition-all"
    : "px-5 py-2.5 border border-primary text-primary hover:bg-primary/5 rounded-full text-sm sm:text-sm font-bold transition-all";

  const hamburgerColorClass = isTransparent 
    ? "text-white hover:text-emerald-400" 
    : "text-slate-700 hover:text-primary";

  return (
    <header className={headerClass}>
      <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src={logoSrc} 
              alt="ClassNex Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("platform")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 cursor-pointer py-2 ${navLinkClass}`}>
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
              <button className={`flex items-center gap-1 cursor-pointer py-2 ${navLinkClass}`}>
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

            <Link href="/apps" className={navLinkClass}>
              Apps
            </Link>
            <Link href="/about" className={navLinkClass}>
              About Us
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={outlineBtnClass}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full text-sm sm:text-sm font-bold shadow-md shadow-primary/10 hover:shadow-lg transition-all group animate-none"
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
              className={`relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none z-50 cursor-pointer ${hamburgerColorClass}`}
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

              <div className="px-3 py-2 text-base font-bold text-slate-600">Solutions:</div>
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
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex-1 text-center py-2.5 border border-primary text-primary rounded-full text-sm font-bold">Contact</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex-1 text-center py-2.5 bg-primary text-white rounded-full text-sm font-bold flex items-center justify-center gap-1">
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
