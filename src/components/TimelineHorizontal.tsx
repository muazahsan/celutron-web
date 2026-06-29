"use client";

import React from "react";
import { motion } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function TimelineHorizontal() {
  const milestones: Milestone[] = [
    {
      year: "2023.Q1",
      title: "Founding",
      description: "Celutron Innovations founded to address global donor organ shortage.",
    },
    {
      year: "2023.Q3",
      title: "Incubation",
      description: "Secured incubation and lab facilities at CIIC, Chennai, Tamil Nadu.",
    },
    {
      year: "2024.Q1",
      title: "BioTron V1",
      description: "Completed development and validation of the multi-cartridge extrusion assembly.",
    },
    {
      year: "2024.Q4",
      title: "BioTron V2",
      description: "Launched the intelligent portable Class 5 sterile chamber bioprinting unit.",
    },
    {
      year: "2025.Q2",
      title: "Publications",
      description: "First peer-reviewed publications validated bagasse CNF & bone compressive strength.",
    },
    {
      year: "2025.Q4",
      title: "Translation",
      description: "Initiated clinical translation pathways for implantable scaffolds with advisors.",
    },
  ];

  return (
    <div className="relative py-8">
      {/* Horizontal Line - Desktop */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-clinical-border hidden md:block -translate-y-1/2 z-0" />

      {/* Vertical Line - Mobile */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-clinical-border md:hidden z-0" />

      {/* Milestones Container */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
        {milestones.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-0 md:pt-8 group"
          >
            {/* Timeline Connector Pin */}
            <div className="absolute left-3 top-1.5 md:left-1/2 md:top-0 -translate-y-1/2 md:-translate-x-1/2 h-3.5 w-3.5 rounded-full border-2 border-clinical-accent bg-white group-hover:bg-clinical-accent transition-colors" />

            {/* Content */}
            <div className="space-y-2 md:text-center">
              <span className="inline-block font-mono text-xs font-bold text-clinical-accent bg-clinical-surface border border-clinical-border px-2 py-0.5 select-none">
                {item.year}
              </span>
              <h4 className="text-sm font-semibold text-clinical-text">
                {item.title}
              </h4>
              <p className="text-xs text-clinical-text/50 leading-relaxed max-w-[200px] md:mx-auto">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
