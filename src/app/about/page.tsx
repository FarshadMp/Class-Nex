import React from "react";
import Navbar from "@/components/Navbar";
import InnerHero from "@/components/InnerHero";
import AboutStats from "@/components/AboutStats";
import AboutValues from "@/components/AboutValues";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const aboutRightContent = (
  <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-100/50 text-left relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
    
    <div className="flex items-center gap-3.5 mb-4">
      <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary">
        <Calendar className="w-6 h-6" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase text-slate-600">FOUNDED IN 2018</div>
        <div className="text-lg font-bold text-slate-800">8+ Years of Growth</div>
      </div>
    </div>
    
    <blockquote className="border-l-4 border-primary pl-4 py-1 text-slate-700 font-semibold text-base sm:text-lg mb-6 leading-relaxed">
      &quot;Our mission is simple: to make school management so seamless that educators can focus entirely on teaching, and students on learning.&quot;
    </blockquote>
    
    <div className="flex gap-2">
      <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-bold text-xs rounded-lg">Reliable Cloud</span>
      <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-bold text-xs rounded-lg">AI Automation</span>
      <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 font-bold text-xs rounded-lg">GDPR Compliant</span>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-900 selection:bg-primary/10 selection:text-primary font-sans">
      <Navbar />
      <InnerHero
        badge="Our Journey & Legacy"
        title={
          <>
            Empowering Education, <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Redefining Operations
            </span>
          </>
        }
        description="For over 8 years, ClassNex has been at the forefront of educational innovation. We engineer cloud systems that eliminate paper pipelines, automate finance, and align administrators, parents, and teachers into a single cooperative environment."
        rightContent={aboutRightContent}
      />
      <AboutStats />
      <AboutValues />
      <FinalCTA />
      <Footer />
    </div>
  );
}
