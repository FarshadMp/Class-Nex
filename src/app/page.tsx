import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Highlights from "@/components/Highlights";
import TrustBanner from "@/components/TrustBanner";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CoreOfferings from "@/components/CoreOfferings";
import ModulesExplorer from "@/components/ModulesExplorer";
import PlatformPlatform from "@/components/PlatformPlatform";
import AppsSection from "@/components/AppsSection";
import WhyClassNex from "@/components/WhyClassNex";
import AboutUs from "@/components/AboutUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-900 selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      <Overview /> 
      <PlatformPlatform />
      <TrustBanner />
      <Highlights />
      <CoreOfferings />
      <ModulesExplorer />
      <WhyClassNex />
      <AppsSection />
      <AboutUs />
      <TestimonialsCarousel /> 
      <FinalCTA />
      <Footer />
    </div>
  );
}
