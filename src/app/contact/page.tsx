import React from "react";
import Navbar from "@/components/Navbar";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-900 selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      {/* Contact Grid Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden font-sans">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto px-4 sm:px-6 lg:px-0 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Info */}
            <div className="lg:col-span-6">
              <ContactInfo />
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
