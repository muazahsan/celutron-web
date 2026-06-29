"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

interface Metric {
  label: string;
  value: string;
}

interface FocusAreaData {
  id: string;
  area: string;
  desc: string;
  img: string;
  extendedDesc: string;
  tissue: string;
  metrics: Metric[];
}

export default function ApplicationsInteractive() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const focusAreas: FocusAreaData[] = [
    {
      id: "01",
      area: "Bone Reconstruction",
      desc: "Patient-specific implants and bone scaffold systems",
      img: "/assets/bone_reconstruction.png",
      tissue: "Bone Tissue",
      extendedDesc: "Utilizing biocompatible calcium phosphate composite bioinks to print rigid structures that stimulate natural bone growth and osteointegration, eventually resorbing as the bone heals.",
      metrics: [
        { label: "Osteoconduction", value: "98.4%" },
        { label: "Pore Diameter", value: "150-300µm" },
        { label: "Comp. Strength", value: "12.5 MPa" }
      ]
    },
    {
      id: "02",
      area: "Wound Healing",
      desc: "Exosome-loaded membranes for chronic diabetic wounds",
      img: "/assets/wound_healing.png",
      tissue: "Dermal Tissue",
      extendedDesc: "A cellular patch embedded with concentrated stem cell-derived exosomes to stimulate cellular signaling, accelerating angiogenesis and tissue repair in chronic wounds.",
      metrics: [
        { label: "Angiogenesis", value: "+320%" },
        { label: "Cell Migration", value: "1.8x Speed" },
        { label: "Release Window", value: "72 Hours" }
      ]
    },
    {
      id: "03",
      area: "Organ Repair",
      desc: "Kidney tissue biofabrication and organ construct research",
      img: "/assets/organ_repair.png",
      tissue: "Renal Tissue",
      extendedDesc: "High-precision microfluidic extrusion printing of renal proximal tubules to model toxicological responses and research complex multicellular organ architectures.",
      metrics: [
        { label: "Print Precision", value: "10µm" },
        { label: "Cell Viability", value: "94.2%" },
        { label: "Tubule Length", value: "12.5mm" }
      ]
    },
    {
      id: "04",
      area: "Drug Delivery",
      desc: "Nanoconjugate systems for controlled therapeutic release",
      img: "/assets/drug_delivery.png",
      tissue: "Targeted Systems",
      extendedDesc: "Custom biodegradable polymer nanocarriers conjugated with targeted ligands to release therapeutic payloads locally, minimizing systemic toxicities.",
      metrics: [
        { label: "Targeting Index", value: "92.6" },
        { label: "Degradation Half-Life", value: "48h" },
        { label: "Loading Efficiency", value: "88.1%" }
      ]
    },
    {
      id: "05",
      area: "Maxillofacial",
      desc: "Bioresorbable fixation implants from DICOM CT imaging",
      img: "/assets/maxillofacial.png",
      tissue: "Skeletal Tissue",
      extendedDesc: "Patient-matched bone fixation plates designed from clinical DICOM scans, printed using bioresorbable polymers to eliminate the need for secondary removal surgeries.",
      metrics: [
        { label: "CT Match Accuracy", value: "<0.1mm" },
        { label: "Resorption Time", value: "12 Months" },
        { label: "Tensile Modulus", value: "2.4 GPa" }
      ]
    },
    {
      id: "06",
      area: "Cancer Diagnostics",
      desc: "Non-invasive patch sensors and cytogenetic mapping",
      img: "/assets/cancer_diagnostics.png",
      tissue: "Intercellular Fluid",
      extendedDesc: "Highly sensitive micro-electrode arrays embedded in comfortable skin patches, monitoring protein biomarkers and cellular fragments in real-time to detect oncogenic changes.",
      metrics: [
        { label: "LOD Sensitivity", value: "1.2 pg/mL" },
        { label: "Sensor Density", value: "64 ch/cm²" },
        { label: "Latency", value: "<150ms" }
      ]
    }
  ];

  // Detect screen size for responsive behavior
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Set up Framer Motion useScroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track scroll position changes on desktop to transition items
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    
    const stepsCount = focusAreas.length;
    const start = 0.05; // buffer at start
    const end = 0.95;   // buffer at end
    
    if (latest < start) {
      setActiveIdx(0);
    } else if (latest > end) {
      setActiveIdx(stepsCount - 1);
    } else {
      const pct = (latest - start) / (end - start);
      const idx = Math.min(Math.floor(pct * stepsCount), stepsCount - 1);
      setActiveIdx(idx);
    }
  });

  // Smooth scroll to the corresponding scroll offset on tab click
  const handleTabClick = (index: number) => {
    setActiveIdx(index);
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const stepsCount = focusAreas.length;
    const start = 0.05;
    const end = 0.95;
    
    // Calculate the percentage scroll offset representing this step
    const pct = start + (index / (stepsCount - 1)) * (end - start);
    
    // Calculate final absolute Y scroll coordinate
    const scrollableHeight = container.offsetHeight - window.innerHeight;
    const targetY = scrollTop + rect.top + pct * scrollableHeight;

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  const currentArea = focusAreas[activeIdx];

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-white border-b border-clinical-border ${
        isMobile ? "h-auto py-20" : "h-[350vh]"
      }`}
    >
      <div className={`${isMobile ? "relative" : "sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Header */}
          <div className="mb-14 space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-clinical-accent" />
              <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                APPLICATIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-clinical-text leading-tight">
              What we are <span className="font-semibold text-clinical-accent">building towards</span>.
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-xl leading-relaxed">
              Our technology platform is directed towards engineering functional biological structures, aiming to replace complex tissues and diagnostic systems.
            </p>
          </div>

          {/* Minimalistic Interactive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Minimalistic List */}
            <div className="lg:col-span-5 relative">
              {/* Elegant Vertical Line Track */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-100" />
              
              <div className="space-y-6 relative">
                {focusAreas.map((item, index) => {
                  const isActive = activeIdx === index;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleTabClick(index)}
                      onMouseEnter={() => !isMobile && setActiveIdx(index)}
                      className="group relative pl-6 text-left cursor-pointer select-none block py-1"
                    >
                      {/* Active Line Segment overlay */}
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-clinical-accent"
                          transition={{ type: "spring", stiffness: 350, damping: 35 }}
                        />
                      )}

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-semibold transition-colors duration-300 ${
                            isActive ? "text-clinical-accent" : "text-slate-400 group-hover:text-slate-500"
                          }`}>
                            {item.id}
                          </span>
                          <h3 className={`text-lg font-medium transition-colors duration-300 ${
                            isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-500"
                          }`}>
                            {item.area}
                          </h3>
                        </div>
                        
                        {/* Description - expanded when active */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          isActive ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        }`}>
                          <div className="space-y-4 pt-1 pr-4">
                            <p className="text-sm text-slate-500 font-light leading-relaxed">
                              {item.desc}
                            </p>

                            {/* Extended desc (mobile only) */}
                            <p className="text-xs text-slate-400 font-light leading-relaxed italic lg:hidden">
                              {item.extendedDesc}
                            </p>

                            {/* Image inline (mobile only) */}
                            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm lg:hidden">
                              <Image
                                src={item.img}
                                alt={item.area}
                                fill
                                className="object-cover"
                              />
                            </div>

                            {/* Metrics (mobile only) */}
                            <div className="grid grid-cols-3 gap-2 pt-1 lg:hidden">
                              {item.metrics.map((m, i) => (
                                <div key={i} className="bg-slate-50 p-2 border border-slate-100 rounded-lg">
                                  <div className="font-mono text-[8px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                                  <div className="font-mono text-xs font-light text-slate-900 mt-0.5">{m.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Realistic Image Display (Desktop only) */}
            <div className="lg:col-span-7 hidden lg:block">
              <div className="flex flex-col space-y-6">
                
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentArea.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentArea.img}
                        alt={currentArea.area}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Specs & Description */}
                <div className="space-y-5 px-1">
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {currentArea.extendedDesc}
                  </p>

                  {/* Key metrics grid */}
                  <div className="grid grid-cols-3 gap-6 pt-5 border-t border-slate-100">
                    {currentArea.metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium">
                          {m.label}
                        </span>
                        <span className="block text-xl font-light text-slate-900 tracking-tight">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
