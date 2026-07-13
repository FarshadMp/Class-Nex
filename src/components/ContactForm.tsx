"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", school: "", phone: "", message: "" });
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-lg max-w-xl mx-auto space-y-4">
        <div className="w-16 h-16 bg-emerald-50 text-primary border border-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Demo Request Received!</h3>
        <p className="text-base font-semibold text-slate-500 leading-relaxed">
          Thank you for reaching out. A ClassNex advisor will contact you within 24 hours to schedule your live walkthrough session.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full text-sm font-bold uppercase transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-100/30 text-left">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Book a Demo & Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50/50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
              placeholder="Full Name"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50/50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
              placeholder="name@school.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">School Name</label>
            <input
              type="text"
              required
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              className="w-full bg-slate-50/50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
              placeholder="e.g. International Academy"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Phone Number</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50/50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Message or Requirements</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-50/50 border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all resize-none"
            placeholder="Tell us about your campus size, current system, and requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full text-base font-bold transition-all uppercase shadow-md shadow-primary/10 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Sending Request..." : "Request Live Demo"}
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
