"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetricCounter from "./MetricCounter";

// 1. Cells Animation Component (Floating cells, pulsing nucleoli, clinical look)
const CellAnimation = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-teal-300" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-teal-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-teal-300" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-teal-300" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-teal-950" />
        ))}
      </div>

      <svg className="w-60 h-60 relative z-10" viewBox="0 0 240 240">
        <defs>
          {/* Cell Cytoplasm Gradient */}
          <radialGradient id="mainCellGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#0D9488" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0.25" />
          </radialGradient>

          <radialGradient id="secondCellGrad" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
          </radialGradient>

          {/* Nucleus Gradient */}
          <radialGradient id="nucleusGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#0F766E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#134E4A" stopOpacity="1" />
          </radialGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Fluid Nutrient Medium Ripples */}
        <motion.circle
          cx="120"
          cy="120"
          r="88"
          fill="none"
          stroke="#0D9488"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ rotate: 360, scale: [0.98, 1.02, 0.98] }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="opacity-20"
          style={{ transformOrigin: "120px 120px" }}
        />

        {/* --- MAIN STEM CELL (Center-Left) --- */}
        <motion.g
          animate={{
            y: [0, -4, 0, 4, 0],
            x: [0, 3, -3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer Cell Membrane (Organic flexible shape) */}
          <motion.path
            d="M 115 55 C 150 50, 180 80, 172 118 C 165 152, 132 170, 95 162 C 60 152, 52 118, 62 85 C 72 55, 90 58, 115 55 Z"
            fill="url(#mainCellGrad)"
            stroke="#0D9488"
            strokeWidth="2.5"
            strokeLinejoin="round"
            filter="url(#softGlow)"
            animate={{
              d: [
                "M 115 55 C 150 50, 180 80, 172 118 C 165 152, 132 170, 95 162 C 60 152, 52 118, 62 85 C 72 55, 90 58, 115 55 Z",
                "M 118 52 C 146 54, 176 84, 168 122 C 160 156, 128 166, 92 165 C 56 160, 56 122, 65 82 C 76 52, 94 50, 118 52 Z",
                "M 115 55 C 150 50, 180 80, 172 118 C 165 152, 132 170, 95 162 C 60 152, 52 118, 62 85 C 72 55, 90 58, 115 55 Z"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Organelles in cytoplasm */}
          <circle cx="90" cy="85" r="4" fill="#0D9488" className="opacity-40" />
          <circle cx="145" cy="100" r="3" fill="#0D9488" className="opacity-30" />
          <circle cx="130" cy="140" r="3.5" fill="#0D9488" className="opacity-35" />
          <circle cx="82" cy="130" r="4.5" fill="#0D9488" className="opacity-30" />

          {/* Cell Nucleus (Distinct biological core) */}
          <motion.circle
            cx="112"
            cy="110"
            r="22"
            fill="url(#nucleusGrad)"
            stroke="#042F2E"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Dense Nucleolus */}
          <circle cx="108" cy="106" r="7" fill="#F0FDFA" className="opacity-90" />
          <circle cx="107" cy="105" r="3" fill="#0D9488" />
        </motion.g>

        {/* --- SECONDARY ADJACENT CELL (Top Right) --- */}
        <motion.g
          animate={{
            y: [0, 4, 0],
            x: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          {/* Cell Membrane */}
          <motion.path
            d="M 170 50 C 190 45, 210 65, 205 88 C 200 108, 178 115, 160 105 C 145 95, 148 72, 155 58 Z"
            fill="url(#secondCellGrad)"
            stroke="#059669"
            strokeWidth="2"
            filter="url(#softGlow)"
          />
          {/* Nucleus */}
          <circle cx="178" cy="78" r="12" fill="#047857" className="opacity-80" />
          <circle cx="176" cy="76" r="4" fill="#A7F3D0" />
        </motion.g>

        {/* --- SMALL DAUGHTER STEM CELL (Bottom Left) --- */}
        <motion.g
          animate={{
            y: [0, -3, 0],
            x: [0, 4, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <circle
            cx="65"
            cy="175"
            r="16"
            fill="url(#secondCellGrad)"
            stroke="#0D9488"
            strokeWidth="1.5"
          />
          <circle cx="65" cy="175" r="6" fill="#0F766E" />
          <circle cx="64" cy="174" r="2" fill="#CCFBF1" />
        </motion.g>

        {/* Biological Label Pointers */}
        <g className="opacity-80">
          {/* Nucleus Indicator line & Label */}
          <line x1="112" y1="110" x2="165" y2="160" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="165" cy="160" r="2" fill="#0D9488" />
          <text x="170" y="163" fill="#0D9488" className="font-mono text-[9px] font-bold">NUCLEUS</text>

          {/* Cell Membrane Indicator */}
          <line x1="68" y1="80" x2="25" y2="60" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="25" cy="60" r="2" fill="#0D9488" />
          <text x="22" y="50" fill="#0D9488" className="font-mono text-[9px] font-bold">MEMBRANE</text>
        </g>
      </svg>

      {/* Diagnostic Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-teal-900 tracking-wider font-semibold">
        [ LIVING STEM CELLS ]
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[8px] text-zinc-500">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        VIABLE CELLS
      </div>

      {/* Info labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-zinc-600">
        <div className="space-y-0.5">
          <div>VIABILITY: <span className="text-emerald-600 font-bold">&gt;85%</span></div>
          <div>SOURCE: PATIENT iPSC</div>
        </div>
        <div className="text-right space-y-0.5">
          <div>DENSITY: 10⁶ - 10⁸ / ML</div>
          <div>STATUS: HEALTHY</div>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-wider text-teal-900 bg-teal-50 px-2 py-0.5 border border-teal-200 rounded">
          THE BIOLOGICAL ENGINE
        </span>
      </div>
    </div>
  );
};

// 2. Bioink Animation Component (Extruding hydrogel carrier ribbon with embedded cells)
const BioinkAnimation = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-teal-300" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-teal-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-teal-300" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-teal-300" />

      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-teal-950" />
        ))}
      </div>

      <svg className="w-60 h-60 relative z-10" viewBox="0 0 240 240">
        <defs>
          <linearGradient id="bioinkGel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0D9488" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="lightCone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Crosslinking Light Beam */}
        <polygon points="90,40 150,40 200,200 40,200" fill="url(#lightCone)" />

        {/* Extrusion Nozzle Head */}
        <g transform="translate(120, 20)">
          <rect x="-18" y="0" width="36" height="30" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" rx="2" />
          <path d="M -18 30 L -5 45 L 5 45 L 18 30 Z" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
          <rect x="-3" y="45" width="6" height="12" fill="#475569" stroke="#0F172A" strokeWidth="1" />
        </g>

        {/* Extruded Hydrogel Filament Track */}
        <motion.path
          d="M 120,77 L 120,130 C 120,150 160,150 160,170 C 160,190 80,190 80,210"
          fill="none"
          stroke="url(#bioinkGel)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "300", strokeDashoffset: "300" }}
          animate={{ strokeDashoffset: [300, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Embedded Living Cells inside Extruded Gel Strand */}
        <motion.g
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <circle cx="120" cy="95" r="4" fill="#F0FDFA" stroke="#047857" strokeWidth="1" />
          <circle cx="120" cy="115" r="3.5" fill="#F0FDFA" stroke="#047857" strokeWidth="1" />
          <circle cx="135" cy="142" r="4" fill="#F0FDFA" stroke="#047857" strokeWidth="1" />
          <circle cx="158" cy="165" r="3.8" fill="#F0FDFA" stroke="#047857" strokeWidth="1" />
          <circle cx="115" cy="188" r="4" fill="#F0FDFA" stroke="#047857" strokeWidth="1" />
        </motion.g>

        {/* Labels & Annotations */}
        <g className="opacity-80">
          <line x1="120" y1="100" x2="45" y2="100" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="45" cy="100" r="2" fill="#0D9488" />
          <text x="18" y="92" fill="#0D9488" className="font-mono text-[9px] font-bold">EMBEDDED CELLS</text>

          <line x1="160" y1="170" x2="205" y2="170" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="205" cy="170" r="2" fill="#0D9488" />
          <text x="165" y="185" fill="#0D9488" className="font-mono text-[9px] font-bold">dECM MATRIX</text>
        </g>
      </svg>

      {/* Diagnostic Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-teal-900 tracking-wider font-semibold">
        [ BIOINK EXTRUSION ]
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[8px] text-zinc-500">
        <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
        GMP GELATIN / dECM
      </div>

      {/* Info labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-zinc-600">
        <div className="space-y-0.5">
          <div>STANDARD: <span className="text-teal-700 font-bold">dECM MATRIX</span></div>
          <div>CROSSLINK: GELMA / ALGINATE</div>
        </div>
        <div className="text-right space-y-0.5">
          <div>FLOW: STABLE</div>
          <div>BIOCOMPATIBLE: 100%</div>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-wider text-teal-900 bg-teal-50 px-2 py-0.5 border border-teal-200 rounded">
          THE LIVING MATERIAL
        </span>
      </div>
    </div>
  );
};

// 3. Scaffold Animation Component (Modeled directly after real physical bioprinted hydrogel/PCL scaffolds)
const ScaffoldAnimation = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-teal-300" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-teal-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-teal-300" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-teal-300" />

      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-teal-950" />
        ))}
      </div>

      <svg className="w-64 h-64 relative z-10" viewBox="0 0 260 260">
        <defs>
          {/* Hydrogel Filament Gradients */}
          <linearGradient id="layer1Gel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#115E59" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>

          <linearGradient id="layer2Gel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>

          <linearGradient id="activeStrandGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>

        <g transform="translate(10, 10)">
          {/* Circular Perimeter Ring (matching the circular scaffold model in bioprinting) */}
          <circle
            cx="120"
            cy="120"
            r="104"
            fill="none"
            stroke="#CCFBF1"
            strokeWidth="3"
            strokeDasharray="4 4"
            className="opacity-60"
          />

          {/* LAYER 1: Base Horizontal Serpentine Strand Path (with U-turn loops on left/right borders) */}
          <motion.path
            d="M 45 45 H 195 A 12.5 12.5 0 0 1 195 70 H 45 A 12.5 12.5 0 0 0 45 95 H 195 A 12.5 12.5 0 0 1 195 120 H 45 A 12.5 12.5 0 0 0 45 145 H 195 A 12.5 12.5 0 0 1 195 170 H 45 A 12.5 12.5 0 0 0 45 195 H 195"
            fill="none"
            stroke="url(#layer1Gel)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-75"
          />

          {/* LAYER 2: Stacked Vertical Serpentine Strand Path (with U-turn loops on top/bottom borders) */}
          <motion.path
            d="M 45 45 V 195 A 12.5 12.5 0 0 0 70 195 V 45 A 12.5 12.5 0 0 1 95 45 V 195 A 12.5 12.5 0 0 0 120 195 V 45 A 12.5 12.5 0 0 1 145 45 V 195 A 12.5 12.5 0 0 0 170 195 V 45 A 12.5 12.5 0 0 1 195 45 V 195"
            fill="none"
            stroke="url(#layer2Gel)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* OPEN SQUARE PORES (Highlighting the precise square pore grid formed by overlapping strands) */}
          {[45, 70, 95, 120, 145, 170].map((x, colIdx) =>
            [45, 70, 95, 120, 145, 170].map((y, rowIdx) => {
              if (colIdx < 5 && rowIdx < 5) {
                return (
                  <motion.rect
                    key={`pore-${x}-${y}`}
                    x={x + 3.5}
                    y={y + 3.5}
                    width="18"
                    height="18"
                    rx="2"
                    fill="#99F6E4"
                    animate={{ opacity: [0.15, 0.65, 0.15] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: (colIdx + rowIdx) * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                );
              }
              return null;
            })
          )}

          {/* LAYER 3 ANIMATION: Active Nozzle Extruding Top Layer Strand in Real-Time */}
          <motion.path
            d="M 45 45 H 195 A 12.5 12.5 0 0 1 195 70 H 45 A 12.5 12.5 0 0 0 45 95 H 195 A 12.5 12.5 0 0 1 195 120 H 45 A 12.5 12.5 0 0 0 45 145 H 195 A 12.5 12.5 0 0 1 195 170 H 45 A 12.5 12.5 0 0 0 45 195 H 195"
            fill="none"
            stroke="url(#activeStrandGrad)"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "1200", strokeDashoffset: "1200" }}
            animate={{ strokeDashoffset: [1200, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* 3D Bioprinthead Nozzle Tracing the Serpentine Path */}
          <motion.g
            animate={{
              x: [45, 195, 195, 45, 45, 195, 195, 45, 45, 195, 195, 45, 45, 195],
              y: [45, 45, 70, 70, 95, 95, 120, 120, 145, 145, 170, 170, 195, 195],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <circle cx="0" cy="0" r="7" fill="#0D9488" className="opacity-40 animate-ping" />
            <circle cx="0" cy="0" r="4" fill="#0F766E" stroke="#F0FDFA" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="#5EEAD4" />
          </motion.g>

          {/* Dimension Callout pointing to a real Pore */}
          <g transform="translate(130, 80)">
            <line x1="0" y1="0" x2="35" y2="-25" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="0" cy="0" r="2.5" fill="#0D9488" />
            <rect x="35" y="-37" width="85" height="18" fill="#F0FDFA" stroke="#0D9488" strokeWidth="0.8" rx="3" />
            <text x="77" y="-25" fill="#0D9488" className="font-mono text-[8.5px] font-bold" textAnchor="middle">
              100–500 µm PORE
            </text>
          </g>
        </g>

      </svg>

      {/* Diagnostic Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-teal-900 tracking-wider font-semibold">
        [ REAL TISSUE SCAFFOLD MESH ]
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[8px] text-zinc-500">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        SQUARE PORE GRID
      </div>

      {/* Info labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-zinc-600">
        <div className="space-y-0.5">
          <div>HARD TISSUE: <span className="text-teal-700 font-bold">100–500 µm</span></div>
          <div>BORDER: CONTINUOUS LOOP</div>
        </div>
        <div className="text-right space-y-0.5">
          <div>MATERIAL: PCL / HYDROGEL</div>
          <div>LAYERS: 0° / 90° CROSS</div>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-wider text-teal-900 bg-teal-50 px-2 py-0.5 border border-teal-200 rounded">
          THE STRUCTURAL BLUEPRINT
        </span>
      </div>
    </div>
  );
};

export default function FundamentalsTriad() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hasBeenActive, setHasBeenActive] = useState([true, false, false]);

  useEffect(() => {
    setHasBeenActive((prev) => {
      const next = [...prev];
      next[activeStep] = true;
      return next;
    });
  }, [activeStep]);

  // Refs for the three step cards to observe and scroll to, memoized to be stable
  const stepRefs = React.useMemo(() => [
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ], []);

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

  // Set up Scroll Spy IntersectionObserver on desktop
  useEffect(() => {
    if (isMobile) return;

    const observers = stepRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          root: null,
          // Triggers when the section reaches the middle/upper center of viewport
          rootMargin: "-25% 0px -45% 0px",
          threshold: 0.15,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [isMobile, stepRefs]);

  const scrollToStep = (index: number) => {
    if (stepRefs[index].current) {
      stepRefs[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      if (isMobile) {
        setActiveStep(index);
      }
    }
  };

  const cards = [
    {
      label: "CELLS",
      badge: "iPSC",
      subLabel: "THE BIOLOGICAL ENGINE - MIN. VIABLE CELL SURVIVAL",
      metric: ">85% Post-Print Viability",
      points: [
        "Sourced from patient biopsy, iPSCs, or allogeneic stem cell lines.",
        "Utilizes chondrocytes, osteoblasts, fibroblasts, or endothelial cells.",
        "Formulated at densities between 10⁶ and 10⁸ cells/mL.",
        "Maintains high cell viability under post-extrusion shear stress.",
      ],
    },
    {
      label: "BIOINK",
      badge: "dECM",
      subLabel: "THE LIVING MATERIAL - GOLD STANDARD MATRIX",
      metric: "dECM Gold Standard",
      points: [
        "Hydrogel carrier composed of GelMA, alginate, or fibrin.",
        "Decellularized extracellular matrix (dECM) for biocompatibility.",
        "Rheological properties optimized for shape fidelity.",
        "Non-toxic, ionic or photo-curing crosslinking mechanism.",
      ],
    },
    {
      label: "SCAFFOLD",
      badge: "100 MM",
      subLabel: "THE STRUCTURAL BLUEPRINT - CRITICAL MIN. PORE SIZE",
      metric: "100–500µm Hard / 20–100µm Soft",
      points: [
        "Provides 3D architecture for cell ingrowth and vascularization.",
        "Pore sizes between 100-500 µm for load-bearing structures.",
        "Custom geometry designed from patient MRI or CT scans.",
        "Bioresorbable materials (PCL, PLGA) degrade safely over time.",
      ],
    },
  ];

  const renderVisualizer = (step: number) => {
    switch (step) {
      case 0:
        return <CellAnimation />;
      case 1:
        return <BioinkAnimation />;
      case 2:
        return <ScaffoldAnimation />;
      default:
        return null;
    }
  };

  return (
    <section ref={containerRef} className="relative py-28 bg-white overflow-x-clip border-b border-zinc-200">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 animate-blueprint-grid" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-teal-900 uppercase">
              SCIENCE
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-5xl">
            Every construct begins with <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950">three fundamentals</span>.
          </h2>
        </div>

        {/* Two Column Layout (Sticky Visualizer Left, Scrollable steps Right) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          
          {/* LEFT COLUMN: Sticky Visualizer Card (Desktop only) */}
          <div className="hidden lg:flex lg:w-[42%] lg:shrink-0">
            <div className="sticky top-28 z-20 w-full self-start">
              <div className="border border-zinc-200 bg-white p-3 shadow-md rounded-2xl overflow-hidden aspect-square flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    {renderVisualizer(activeStep)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination indicators under the visualizer */}
              <div className="flex justify-center gap-2.5 mt-5">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToStep(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                      activeStep === i ? "w-8 bg-teal-600" : "w-2 bg-zinc-200 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to section ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrollable/Selectable steps */}
          <div className="flex-1 space-y-12 lg:space-y-24 pb-12 lg:pb-32">
            {cards.map((card, idx) => (
              <div key={card.label} className="relative">
                {/* Mobile visualizer - rendered inline on mobile only, right above the text card */}
                <div className="block lg:hidden mb-6 w-full aspect-square border border-zinc-200 bg-white p-3 shadow-sm rounded-2xl">
                  {renderVisualizer(idx)}
                </div>

                <div
                  ref={stepRefs[idx]}
                  onClick={() => scrollToStep(idx)}
                  className={`group transition-all duration-300 border-l-2 rounded-r-2xl pl-6 p-6 lg:p-10 cursor-pointer ${
                    activeStep === idx
                      ? "border-teal-600 bg-teal-50/40 shadow-sm"
                      : "border-zinc-200 hover:border-teal-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Circle Indicator Badge */}
                    <div
                      className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 border ${
                        activeStep === idx
                          ? "bg-teal-700 border-teal-700 text-white font-bold shadow-sm"
                          : "bg-white border-zinc-200 text-zinc-400 group-hover:text-teal-700 group-hover:border-teal-300"
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4 flex-grow">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-semibold text-teal-700 tracking-widest uppercase">
                            {card.label}
                          </span>
                          <span className="font-mono text-[9px] border border-teal-200 bg-teal-50 text-teal-800 px-2 py-0.5 rounded-full font-medium">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-zinc-950 tracking-tight uppercase">
                          {card.subLabel}
                        </h3>
                      </div>

                      <ul className="space-y-3.5 pl-4 list-disc text-zinc-600 text-sm">
                        {card.points.map((point) => (
                          <li key={point} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Validated Metric Footer */}
                      <div className="pt-5 border-t border-zinc-200 max-w-xs">
                        <div className="text-[9px] font-mono font-bold uppercase text-zinc-400 tracking-wider mb-1">
                          Validated Metric
                        </div>
                        <div className="text-lg font-mono font-bold text-zinc-950">
                          <MetricCounter value={card.metric} trigger={hasBeenActive[idx]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
