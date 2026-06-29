"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    inquiryType: "Research Collaboration",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        org: "",
        email: "",
        inquiryType: "Research Collaboration",
        message: "",
      });
    }, 1500);
  };

  const inquiryTypes = [
    "Research Collaboration",
    "Investor Inquiry",
    "Product Inquiry",
    "Academic Partnership",
    "Other",
  ];

  return (
    <div className="w-full border border-clinical-border bg-white p-6 md:p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase text-clinical-text/50 tracking-wider mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-clinical-border bg-clinical-surface px-4 py-2 text-sm text-clinical-text focus:border-clinical-accent focus:outline-none transition-colors"
                placeholder="Dr. / Prof. / Mr. / Ms."
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="org" className="block text-xs font-mono font-semibold uppercase text-clinical-text/50 tracking-wider mb-2">
                Organization / Institution
              </label>
              <input
                id="org"
                type="text"
                value={formData.org}
                onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                className="w-full border border-clinical-border bg-clinical-surface px-4 py-2 text-sm text-clinical-text focus:border-clinical-accent focus:outline-none transition-colors"
                placeholder="University, Hospital, or Company name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-clinical-text/50 tracking-wider mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-clinical-border bg-clinical-surface px-4 py-2 text-sm text-clinical-text focus:border-clinical-accent focus:outline-none transition-colors"
                placeholder="name@institution.edu"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-xs font-mono font-semibold uppercase text-clinical-text/50 tracking-wider mb-2">
                Inquiry Type
              </label>
              <div className="relative">
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full appearance-none border border-clinical-border bg-clinical-surface px-4 py-2.5 text-sm text-clinical-text focus:border-clinical-accent focus:outline-none transition-colors cursor-pointer"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-clinical-text/40">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase text-clinical-text/50 tracking-wider mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-clinical-border bg-clinical-surface px-4 py-2.5 text-sm text-clinical-text focus:border-clinical-accent focus:outline-none transition-colors resize-none"
                placeholder="Please detail your project parameters, bioink requirements, or partnership proposals..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 border border-clinical-accent bg-clinical-accent px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-clinical-accent disabled:opacity-50 transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Transmission...
                  </>
                ) : (
                  <>
                    Transmit Inquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center space-y-4"
          >
            <CheckCircle2 className="h-16 w-16 text-clinical-success" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-clinical-text">
                Transmission Successful
              </h3>
              <p className="text-sm text-clinical-text/60 max-w-sm">
                Your inquiry has been encrypted and sent to Celutron Innovations HQ. A clinical coordinator will respond shortly.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 border border-clinical-border px-4 py-2 text-xs font-mono text-clinical-text/60 hover:text-clinical-text hover:border-clinical-accent transition-colors"
            >
              Send New Transmission
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
