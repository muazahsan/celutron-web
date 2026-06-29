"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabItem {
  id: string;
  name: string;
  description: string;
  details: string[];
}

export default function TechTabSwitcher() {
  const tabs: TabItem[] = [
    {
      id: "extrusion",
      name: "Extrusion",
      description: "Pressure-controlled layer-by-layer deposition of viscous hydrogels and bioinks.",
      details: [
        "Pneumatic & mechanical piston drives",
        "Dual-cartridge extrusion with thermal control (ambient to 80°C)",
        "Resolution down to 10µm filaments",
        "Optimized for high-viscosity dECM formulations and polymers like PCL",
      ],
    },
    {
      id: "inkjet",
      name: "Inkjet Patterning",
      description: "High-speed, contactless droplet-based cell patterning for micro-scale arrangements.",
      details: [
        "Piezoelectric and thermal nozzle excitation",
        "Single-cell positioning capabilities",
        "Low shear stress for cell viability optimization",
        "Ideal for high-throughput pharmacological validation constructs",
      ],
    },
    {
      id: "dmd",
      name: "DMD Photopolymerization",
      description: "Digital Micromirror Device technology using projected UV/Visible light to crosslink photopolymers.",
      details: [
        "Projection-based stereolithography (SLA) printing",
        "Simultaneous layer fabrication for extreme build speeds",
        "Ultra-high resolution structural details (sub-5µm features)",
        "Compatible with PEGDA, GelMA, and light-activated bioresorbables",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("extrusion");
  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="w-full space-y-6">
      {/* Tab Switcher Headers */}
      <div className="flex border-b border-clinical-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? "text-clinical-accent" : "text-clinical-text/50 hover:text-clinical-text"}`}
          >
            {tab.name}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-clinical-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="bg-clinical-surface border border-clinical-border p-6 min-h-[220px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div>
              <h4 className="font-mono text-xs font-semibold tracking-wider text-clinical-text/40 uppercase mb-1">
                Modality Description
              </h4>
              <p className="text-base text-clinical-text/80 font-light">
                {activeData.description}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs font-semibold tracking-wider text-clinical-text/40 uppercase mb-2">
                Technical Highlights
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {activeData.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-clinical-text/60 leading-relaxed list-disc list-inside">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
