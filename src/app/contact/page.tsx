"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink, CheckCircle2, ArrowUpRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 1200);
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Crescent+Innovation+%26+Incubation+Council+Vandalur+Chennai";

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <NavBar />

      <main className="flex-grow pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Contact Grid (Left Details + Right Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stacked Contact Info Cards */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Card 1: Contact Details */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 space-y-5"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
                  CONTACT DETAILS
                </span>

                <div className="space-y-4 pt-1">
                  {/* Phone */}
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition-colors group-hover:bg-teal-100">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold">Phone</span>
                      <a href="tel:+919176348990" className="text-sm font-semibold text-slate-800 hover:text-teal-700 transition-colors block">
                        +91 91763 48990
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition-colors group-hover:bg-teal-100">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-slate-400 font-semibold">Email</span>
                      <a href="mailto:gowthamijawahar@celutron.in" className="text-sm font-semibold text-slate-800 hover:text-teal-700 transition-colors block">
                        gowthamijawahar@celutron.in
                      </a>
                      <a href="mailto:info@celutron.in" className="text-xs text-slate-500 hover:text-teal-700 transition-colors block">
                        info@celutron.in
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Company Address */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800 mt-1">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      Celutron Innovations Private Limited
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Crescent Innovation & Incubation Council (CIIC),<br />
                      BSA Crescent Institute of Science and Technology,<br />
                      Seethakathi Estate, Vandalur, Chennai – 600048, Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Send us a message form */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_6px_30px_-6px_rgba(0,0,0,0.05)] border border-slate-100"
            >
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Send us a message
                </h1>
                <p className="text-sm text-slate-500 mt-2 font-normal">
                  Fill in the details below and we&apos;ll get back to you shortly.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Full Name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email Address"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>

                      {/* Company / Organization */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-2">
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company / Organization"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Your Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B132B] hover:bg-[#1C2541] text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending Transmission...</span>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md">
                      Thank you for reaching out. Our team has received your transmission and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-mono font-semibold text-slate-700 hover:bg-white hover:border-slate-300 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </div>

          {/* Bottom Section: Map Embed & Location Header */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="space-y-4 pt-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                  OUR LOCATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Find us on the map
                </h2>
              </div>
              
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 transition-colors group"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Interactive Map Frame */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 aspect-[16/7] min-h-[360px]">
              <iframe
                title="CIIC Vandalur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8654854580327!2d80.08051131482069!3d12.871500990921473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712957b42ef%3A0x6b7aa020132ec5dd!2sCrescent%20Innovation%20%26%20Incubation%20Council%20(CIIC)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
