"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121212] text-neutral-300 font-sans text-left relative overflow-hidden">
      {/* Decorative Grid Overlay inside Footer */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center group">
              <img 
                src="/img/logo.svg" 
                alt="ClassNex Logo" 
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
              />
            </Link>
            <p className="text-base font-semibold text-neutral-450 max-w-sm leading-relaxed text-neutral-400">
              Smarter Management. Better Education. Redefining how schools operate in the digital era with enterprise-grade modular capabilities.
            </p>
            {/* Locations strip */}
            <div className="space-y-2">
              <span className="text-sm font-black text-neutral-500 block">Regional Hubs</span>
              <div className="flex flex-wrap gap-2 text-sm font-bold text-neutral-300">
                <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800/60 px-2.5 py-1 rounded-full"><MapPin className="w-3 h-3 text-primary" /> Saudi Arabia</span>
                <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800/60 px-2.5 py-1 rounded-full"><MapPin className="w-3 h-3 text-primary" /> India</span>
                <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800/60 px-2.5 py-1 rounded-full"><MapPin className="w-3 h-3 text-primary" /> UAE</span>
                <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800/60 px-2.5 py-1 rounded-full"><MapPin className="w-3 h-3 text-primary" /> Qatar</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-sm font-bold text-neutral-500">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-base font-bold text-neutral-300">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-primary shrink-0 border border-neutral-800/60">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:sales@classnex.ai" className="hover:text-primary transition-colors">sales@classnex.ai</a>
              </li>
              <li className="flex items-center gap-3 text-base font-bold text-neutral-300">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-primary shrink-0 border border-neutral-800/60">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:0552091677" className="hover:text-primary transition-colors">0552091677</a>
              </li>
              <li className="flex items-center gap-3 text-base font-bold text-neutral-300">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-primary shrink-0 border border-neutral-800/60">
                  <Globe className="w-4 h-4" />
                </div>
                <a href="https://www.classnext.ai" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">www.classnext.ai</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-bold text-neutral-500">Quick Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-base font-bold text-neutral-400">
              <li><Link href="#platform" className="hover:text-primary transition-colors">Platform</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="#apps" className="hover:text-primary transition-colors">Apps</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-bold text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Class Nex. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
