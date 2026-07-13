import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import InnerHero from "@/components/InnerHero";
import SolutionContent from "@/components/SolutionContent";
import SolutionCaseStudy from "@/components/SolutionCaseStudy";
import SolutionStack from "@/components/SolutionStack";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { solutionsData } from "@/config/solutionsData";
import { Calendar } from "lucide-react";

interface PageProps {
  params: Promise<{
    solution: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    solution: slug,
  }));
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { solution } = await params;
  const data = solutionsData[solution];

  if (!data) {
    notFound();
  }

  const rightContent = (
    <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-100/50 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase text-slate-600">BENEFIT METRIC</div>
          <div className="text-lg font-bold text-slate-800">Target Value</div>
        </div>
      </div>
      
      <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-none mb-1.5">
        {data.stat}
      </div>
      <p className="text-sm sm:text-base font-bold text-slate-500">
        {data.statLabel}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-900 selection:bg-primary/10 selection:text-primary font-sans font-semibold font-sans">
      <Navbar />
      <InnerHero
        badge="Core Target Solution"
        title={data.name}
        description={data.tagline}
        ctaText="Schedule consultation"
        rightContent={rightContent}
      />
      <SolutionContent
        targetAudience={data.targetAudience}
        challenges={data.challenges}
        features={data.features}
      />
      <SolutionCaseStudy caseStudy={data.caseStudy} />
      <SolutionStack stack={data.stack} />
      <FinalCTA />
      <Footer />
    </div>
  );
}
