"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Beaker, FileText, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResearchHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const studies = [
    {
      title: "SCB-Nanocellulose Bioprinting Matrix",
      problem: "Existing CNF models use harsh chemicals & fail to use bagasse waste.",
      metric: "DES: 155.8nm",
      subMetric: "Zeta: -20.6mV",
      icon: <Beaker className="w-5 h-5" />,
      color: "from-blue-500/20 to-blue-600/0",
      accent: "bg-blue-500",
    },
    {
      title: "Bone Scaffold",
      problem: "Mono-component alginate shows poor load profile for orthopedic defects.",
      metric: "28x Compressive",
      subMetric: "72.3% Porosity",
      icon: <Activity className="w-5 h-5" />,
      color: "from-purple-500/20 to-purple-600/0",
      accent: "bg-purple-500",
    },
    {
      title: "Exosome Wound Healing Membrane",
      problem: "Chronic diabetic wounds show delayed healing due to damaged angiogenesis.",
      metric: "i-PRF Matrix",
      subMetric: "MTT Validated",
      icon: <FileText className="w-5 h-5" />,
      color: "from-emerald-500/20 to-emerald-600/0",
      accent: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-b border-zinc-200">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none animate-blueprint-grid opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20 space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-teal-50/90 border border-teal-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-widest text-teal-900 uppercase">
              Clinical Research
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-light tracking-tight text-zinc-950 sm:text-5xl md:text-6xl"
          >
            Validated. Peer-reviewed. <br className="hidden md:block" />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950">Clinically directed.</span>
          </motion.h2>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-3">
          {studies.map((study, idx) => (
            <div
              key={study.title}
              className="relative group h-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Glow Animation */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal-500/20 to-transparent blur-sm z-0"
                  />
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="relative z-10 flex flex-col justify-between h-full bg-white border border-zinc-200 rounded-2xl p-8 transition-all duration-300 group-hover:border-teal-300 shadow-sm group-hover:shadow-md"
              >
                <div className="relative z-10 space-y-6">
                  {/* Icon & Title */}
                  <div className="flex flex-col gap-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-clinical-surface border border-clinical-border text-clinical-text group-hover:text-clinical-accent group-hover:border-clinical-accent/30 transition-colors">
                      {study.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-clinical-text leading-snug">
                      {study.title}
                    </h3>
                  </div>

                  {/* Problem Statement */}
                  <p className="text-sm text-clinical-text/70 leading-relaxed font-light">
                    {study.problem}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 mt-10 pt-6 border-t border-clinical-border/50 group-hover:border-clinical-border transition-colors flex items-end justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${study.accent}`} />
                      <span className="font-mono text-xs uppercase font-bold text-clinical-text">
                        {study.metric}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase font-semibold text-clinical-text/50 block pl-3.5">
                      {study.subMetric}
                    </span>
                  </div>
                  
                  <Link
                    href="/research"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-clinical-surface border border-clinical-border text-clinical-text group-hover:bg-clinical-accent group-hover:border-clinical-accent group-hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 transform group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
