"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  Crosshair, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Upload, 
  ChevronDown 
} from "lucide-react";

interface RoleItem {
  title: string;
  location: string;
  type: "Full-time" | "Internship" | "Contract";
  category: "open" | "internship";
}

const fullTimeRoles: RoleItem[] = [
  {
    title: "Robotics & Hardware Engineer",
    location: "Chennai, India",
    type: "Full-time",
    category: "open"
  },
  {
    title: "Bioink Slicer & Controls Developer",
    location: "Remote / Chennai",
    type: "Full-time",
    category: "open"
  },
  {
    title: "Biomaterials R&D Scientist",
    location: "Chennai, India",
    type: "Full-time",
    category: "open"
  },
  {
    title: "Clinical Operations Lead",
    location: "Chennai, India",
    type: "Full-time",
    category: "open"
  }
];

const internshipRoles: RoleItem[] = [
  {
    title: "Robotics & Bioprinter Intern",
    location: "Chennai, India",
    type: "Internship",
    category: "internship"
  },
  {
    title: "Software Intern (Slicer / Automation)",
    location: "Remote / Chennai",
    type: "Internship",
    category: "internship"
  },
  {
    title: "Materials R&D Intern",
    location: "Chennai, India",
    type: "Internship",
    category: "internship"
  },
  {
    title: "Operations Intern",
    location: "Chennai, India",
    type: "Internship",
    category: "internship"
  }
];

export default function CareersPage() {
  const formRef = useRef<HTMLDivElement | null>(null);

  // Form selections & data state
  const [selectedRole, setSelectedRole] = useState<string>("Robotics & Hardware Engineer");
  const [selectedType, setSelectedType] = useState<string>("Full-time");
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to form and preselect role & type
  const handleApplyClick = (roleTitle: string, type: "Full-time" | "Internship" | "Contract") => {
    setSelectedRole(roleTitle);
    setSelectedType(type);
    setIsSubmitted(false);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const allRoleOptions = [
    "Robotics & Hardware Engineer",
    "Bioink Slicer & Controls Developer",
    "Biomaterials R&D Scientist",
    "Clinical Operations Lead",
    "Robotics & Bioprinter Intern",
    "Software Intern (Slicer / Automation)",
    "Materials R&D Intern",
    "Operations Intern",
    "Spontaneous Application / Other"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFC] text-slate-900 font-sans">
      <NavBar />

      <main className="flex-grow pt-16">
        
        {/* 1. Hero Banner with AI Generated Minimalist 3D Render Image (Matching Reference 2) */}
        <section className="relative w-full bg-[#E5E7EB] min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-slate-200">
          
          {/* Background Studio Render Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/careers_hero.png"
              alt="Minimalist Bioprinter Studio Render"
              fill
              className="object-cover object-center brightness-[0.98] contrast-[1.02]"
              priority
            />
            {/* Subtle Gradient Overlay for readable left text */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/15 to-transparent sm:from-slate-900/30 sm:via-transparent" />
          </div>

          {/* Hero Content Overlay */}
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full relative z-10 py-20">
            <div className="max-w-xl space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400 bg-slate-900/60 px-3 py-1 rounded-md backdrop-blur-sm inline-block">
                JOIN THE MISSION
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase drop-shadow-md leading-none">
                WORK WITH US
              </h1>
              
              <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed drop-shadow max-w-lg bg-slate-900/40 p-4 rounded-xl backdrop-blur-sm">
                Help us build a more sustainable, efficient, and intelligent future in human tissue engineering. We&apos;re looking for visionaries who want to leave a lasting mark on bioprinting and regenerative medicine.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Top 3 Value Cards (Matching Reference 1) */}
        <section className="py-16 bg-[#FAFAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] space-y-3 transition-transform hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Innovation First</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  We don&apos;t just use technology; we build it from the ground up, from proprietary bioinks to precision motion systems.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] space-y-3 transition-transform hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Crosshair className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Impact Driven</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Every bioprinter and material formulation we optimize accelerates clinical translation and patient organ research.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] space-y-3 transition-transform hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Collaborative Spirit</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  PhDs, tissue engineers, and embedded firmware developers working together in an open, agile lab environment.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Open Positions Section (Matching Reference 1) */}
        <section className="py-12 bg-[#FAFAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="space-y-1">
              <h2 className="text-3xl font-extrabold text-slate-900 italic tracking-tight">
                Open Positions
              </h2>
              <p className="text-xs text-slate-500 font-normal">
                Find your next challenge and join the Celutron family.
              </p>
            </div>

            <div className="space-y-4">
              {fullTimeRoles.map((role, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-slate-300"
                >
                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono font-semibold uppercase">
                      {role.type}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {role.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      {role.location}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleApplyClick(role.title, role.type)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 transition-colors cursor-pointer group"
                    >
                      <span>APPLY</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Internship Opportunities Section (Matching Reference 1) */}
        <section className="py-12 bg-[#FAFAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="space-y-1">
              <h2 className="text-3xl font-extrabold text-slate-900 italic tracking-tight">
                Internship Opportunities
              </h2>
              <p className="text-xs text-slate-500 font-normal">
                Learn fast, build real systems, and work alongside our robotics, materials, and lab teams.
              </p>
            </div>

            <div className="space-y-4">
              {internshipRoles.map((role, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-slate-300"
                >
                  <div className="space-y-1.5">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono font-semibold uppercase">
                      {role.type}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {role.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      {role.location}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleApplyClick(role.title, role.type)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 transition-colors cursor-pointer group"
                    >
                      <span>APPLY</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. Don't see a match? Dark Card (Matching Reference 1 bottom section) */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[#090D16] rounded-3xl p-10 sm:p-16 text-center text-white space-y-6 shadow-2xl flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Briefcase className="h-6 w-6" />
              </div>

              <div className="space-y-2 max-w-xl">
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Don&apos;t see a match?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  We are always looking for exceptional talent. If you&apos;re passionate about bioprinting and tissue engineering, we want to hear from you.
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleApplyClick("Spontaneous Application / Other", "Full-time")}
                  className="rounded-full bg-white text-slate-950 hover:bg-slate-100 px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  SPONTANEOUS APPLICATION
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Single Unified Application Form Section (Matching Reference 3) */}
        <section ref={formRef} id="application-form" className="py-16 bg-[#FAFAFC] scroll-mt-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_6px_30px_-6px_rgba(0,0,0,0.04)] space-y-8">
              
              <div className="border-b border-slate-100 pb-6 text-center sm:text-left space-y-1">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-teal-800 block">
                  ONLINE APPLICATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Apply for a Position
                </h2>
                <p className="text-xs text-slate-500 font-normal">
                  Submit your details below for direct review by Celutron&apos;s recruitment team.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@email.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Current Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          PHONE
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 ..."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          CURRENT LOCATION
                        </label>
                        <input
                          type="text"
                          value={currentLocation}
                          onChange={(e) => setCurrentLocation(e.target.value)}
                          placeholder="Chennai / Remote"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Role & Application Type Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          ROLE
                        </label>
                        <div className="relative">
                          <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-semibold text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none transition-all cursor-pointer pr-10"
                          >
                            {allRoleOptions.map((roleOpt) => (
                              <option key={roleOpt} value={roleOpt}>
                                {roleOpt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          APPLICATION TYPE
                        </label>
                        <div className="relative">
                          <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-semibold text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none transition-all cursor-pointer pr-10"
                          >
                            <option value="Full-time">Full-time</option>
                            <option value="Internship">Internship</option>
                            <option value="Contract">Contract</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Resume Upload & Portfolio/Github */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          RESUME UPLOAD
                        </label>
                        <div className="relative rounded-xl border border-slate-200 bg-slate-50/50 p-4 flex items-center justify-between">
                          <div className="text-xs">
                            <span className="block font-semibold text-slate-700">
                              Upload resume (PDF recommended)
                            </span>
                            <span className="text-[11px] text-slate-400 block truncate max-w-[180px]">
                              {selectedFileName ? selectedFileName : "No file selected"}
                            </span>
                          </div>
                          <label className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0">
                            <Upload className="h-3.5 w-3.5 text-slate-500" />
                            CHOOSE FILE
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                          PORTFOLIO/GITHUB (OPTIONAL)
                        </label>
                        <input
                          type="url"
                          value={portfolio}
                          onChange={(e) => setPortfolio(e.target.value)}
                          placeholder="https://github.com/..."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 5: Message (Optional) */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                        MESSAGE (OPTIONAL)
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what excites you about bioprinting, biomaterials, and 3D tissue engineering..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:bg-white focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Bottom disclaimer & Submit */}
                    <div className="pt-2 space-y-4">
                      <p className="text-[11px] text-slate-400 text-center font-normal">
                        By submitting, you agree Celutron Innovations can contact you about this application.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#090D16] hover:bg-slate-800 text-white py-4 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>SUBMITTING APPLICATION...</span>
                        ) : (
                          <>
                            <span>SUBMIT APPLICATION</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                    <p className="text-xs text-slate-600 max-w-md">
                      Thank you, <strong>{fullName}</strong>. Your application for <strong>{selectedRole}</strong> ({selectedType}) has been logged with Celutron Innovations recruitment team.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-mono font-semibold text-slate-700 hover:bg-white transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
