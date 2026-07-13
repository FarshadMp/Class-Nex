import React from "react";
import Navbar from "@/components/Navbar";
import InnerHero from "@/components/InnerHero";
import AppsShowcase from "@/components/AppsShowcase";
import AppsFeatureGrid from "@/components/AppsFeatureGrid";
import AppsTimeline from "@/components/AppsTimeline";
import AppsComparison from "@/components/AppsComparison";
import AppsFAQ from "@/components/AppsFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { CheckCircle, Shield } from "lucide-react";

const appsRightContent = (
  <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-100/50 space-y-5 text-left">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary">
        <Shield className="w-5 h-5" />
      </div>
      <h4 className="font-extrabold text-slate-800 text-lg">White-Label Security</h4>
    </div>
    <ul className="space-y-3.5 text-sm font-semibold text-slate-500">
      <li className="flex items-start gap-2.5">
        <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
        <span>Custom listing on Apple App Store & Google Play Store</span>
      </li>
      <li className="flex items-start gap-2.5">
        <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
        <span>School name, identity colors, logo icons, and branding guidelines</span>
      </li>
      <li className="flex items-start gap-2.5">
        <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
        <span>Automatic app updates, performance patches, and compatibility fixes</span>
      </li>
    </ul>
  </div>
);

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-900 selection:bg-primary/10 selection:text-primary font-sans">
      <Navbar />
      <InnerHero
        badge="Mobile Apps Ecosystem"
        title={
          <>
            Your Own School App. <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fully Custom-Branded.
            </span>
          </>
        }
        description="We don't force you into a generic, shared app. ClassNex designs and compiles three dedicated, white-labeled mobile applications under your school's official name, logo, and colors — deployed directly to the App Store and Google Play."
        rightContent={appsRightContent}
      />
      <AppsShowcase />
      <AppsFeatureGrid />
      <AppsTimeline />
      <AppsComparison />
      <AppsFAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
