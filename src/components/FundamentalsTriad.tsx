"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetricCounter from "./MetricCounter";

// 1. Cells Animation Component (Floating cells, pulsing nucleoli, clinical look)
const CellAnimation = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-clinical-border" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-clinical-border" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-clinical-border" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-clinical-border" />

      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-clinical-text" />
        ))}
      </div>

      <svg className="w-56 h-56 relative z-10" viewBox="0 0 200 200">
        {/* Gradients */}
        <defs>
          <radialGradient id="cellGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Micro-particles / Organelles */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle cx="80" cy="50" r="1.5" fill="#1E40AF" className="opacity-40" />
          <circle cx="130" cy="70" r="1" fill="#1E40AF" className="opacity-30" />
          <circle cx="60" cy="120" r="2" fill="#1E40AF" className="opacity-20" />
          <circle cx="110" cy="150" r="1.5" fill="#1E40AF" className="opacity-40" />
        </motion.g>

        {/* Connection/Shear stress lines */}
        <motion.path
          d="M 50,100 L 100,100 M 100,100 L 150,100 M 100,100 L 100,50 M 100,100 L 100,150"
          stroke="#E2E8F0"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-60"
        />

        {/* Cell 1: Central/Mother Cell */}
        <motion.g
          animate={{
            scale: [1, 1.06, 1],
            y: [0, -4, 0],
            x: [0, 2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Cytoplasm */}
          <circle
            cx="100"
            cy="100"
            r="38"
            fill="url(#cellGrad)"
            stroke="#1E40AF"
            strokeWidth="1.5"
            className="opacity-20"
          />
          <circle
            cx="100"
            cy="100"
            r="38"
            fill="none"
            stroke="#1E40AF"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
          {/* Nucleus */}
          <circle
            cx="100"
            cy="100"
            r="12"
            fill="#1E40AF"
            className="opacity-30"
          />
          {/* Nucleolus */}
          <circle
            cx="98"
            cy="98"
            r="3.5"
            fill="#1E40AF"
            className="opacity-60"
          />
        </motion.g>

        {/* Cell 2: Top-Left Floating Cell */}
        <motion.g
          animate={{
            x: [0, 12, 0],
            y: [0, -8, 0],
            scale: [0.92, 0.96, 0.92],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <circle
            cx="50"
            cy="70"
            r="22"
            fill="url(#cellGrad)"
            stroke="#1E40AF"
            strokeWidth="1.2"
            className="opacity-15"
          />
          <circle
            cx="50"
            cy="70"
            r="22"
            fill="none"
            stroke="#1E40AF"
            strokeWidth="0.6"
            strokeDasharray="3 3"
          />
          <circle
            cx="50"
            cy="70"
            r="6.5"
            fill="#1E40AF"
            className="opacity-25"
          />
        </motion.g>

        {/* Cell 3: Bottom-Right Floating Cell */}
        <motion.g
          animate={{
            x: [0, -8, 0],
            y: [0, 12, 0],
            scale: [0.88, 0.92, 0.88],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <circle
            cx="150"
            cy="130"
            r="19"
            fill="url(#cellGrad)"
            stroke="#1E40AF"
            strokeWidth="1.2"
            className="opacity-15"
          />
          <circle
            cx="150"
            cy="130"
            r="19"
            fill="none"
            stroke="#1E40AF"
            strokeWidth="0.6"
            strokeDasharray="2 2"
          />
          <circle
            cx="150"
            cy="130"
            r="5.5"
            fill="#1E40AF"
            className="opacity-25"
          />
        </motion.g>

        {/* Cell 4: Top-Right Small Stem Cell */}
        <motion.g
          animate={{
            x: [0, 6, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <circle
            cx="140"
            cy="60"
            r="13"
            fill="url(#cellGrad)"
            stroke="#1E40AF"
            strokeWidth="1"
            className="opacity-10"
          />
          <circle
            cx="140"
            cy="60"
            r="4.5"
            fill="#1E40AF"
            className="opacity-20"
          />
        </motion.g>
      </svg>

      {/* Metric Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[#1E40AF] tracking-wider font-semibold">
        [ SYSTEM_DIAGNOSTIC: CELLS_ONLINE ]
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[8px] text-clinical-text/40">
        <span className="h-1.5 w-1.5 rounded-full bg-clinical-success animate-pulse" />
        LIVE SCAN
      </div>

      {/* Info labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-clinical-text/40">
        <div className="space-y-0.5">
          <div>VIABILITY: &gt;85%</div>
          <div>VIABILITY STATUS: <span className="text-clinical-success font-semibold">PASS</span></div>
        </div>
        <div className="text-right space-y-0.5">
          <div>DENSITY: 10⁶ - 10⁸ / ML</div>
          <div>SHEAR_STRESS: NOMINAL</div>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-wider text-clinical-accent bg-clinical-accent/5 px-2 py-0.5 border border-clinical-accent/10">
          THE BIOLOGICAL ENGINE
        </span>
      </div>
    </div>
  );
};

// 2. Bioink Animation Component (Needle extrusion, molecular crosslinking network)
const BioinkAnimation = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-clinical-border" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-clinical-border" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-clinical-border" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-clinical-border" />

      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-clinical-text" />
        ))}
      </div>

      <svg className="w-56 h-56 relative z-10" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="uvCone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* UV Crosslinking Cone */}
        <motion.polygon
          points="85,50 115,50 155,180 45,180"
          fill="url(#uvCone)"
          className="pointer-events-none"
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Syringe Assembly */}
        <g transform="translate(100, 15)">
          {/* Plunger shaft */}
          <motion.rect
            x="-5"
            y="-10"
            width="10"
            height="18"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.2"
            animate={{
              y: [-10, 2, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Syringe tube */}
          <rect
            x="-14"
            y="5"
            width="28"
            height="45"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="1.2"
          />
          {/* Hydrogel within tube */}
          <motion.rect
            x="-13"
            y="20"
            width="26"
            height="29"
            fill="#5DCAA5"
            className="opacity-25"
            animate={{
              height: [29, 17, 29],
              y: [20, 32, 20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Nozzle Cone */}
          <path
            d="M -14,50 L -4,65 L 4,65 L 14,50 Z"
            fill="#FFFFFF"
            stroke="#0F172A"
            strokeWidth="1.2"
          />
          {/* Needle Tip */}
          <line
            x1="0"
            y1="65"
            x2="0"
            y2="78"
            stroke="#0F172A"
            strokeWidth="1.5"
          />
        </g>

        {/* Extruded gel stream */}
        <motion.path
          d="M 100,93 L 100,125 L 135,125 L 135,155 L 65,155 L 65,175"
          fill="none"
          stroke="#5DCAA5"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "220", strokeDashoffset: "220" }}
          animate={{ strokeDashoffset: [220, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Crosslinking Polymer Network Overlay */}
        <g>
          {/* Matrix Nodes */}
          <motion.circle
            cx="100"
            cy="120"
            r="3.5"
            fill="#1E40AF"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.circle
            cx="135"
            cy="140"
            r="3.5"
            fill="#1E40AF"
            animate={{ scale: [1.2, 0.8, 1.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle
            cx="80"
            cy="155"
            r="3.5"
            fill="#1E40AF"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
          />

          {/* Dotted crosslink lines */}
          <motion.line
            x1="100"
            y1="120"
            x2="135"
            y2="140"
            stroke="#1E40AF"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.line
            x1="135"
            y1="140"
            x2="80"
            y2="155"
            stroke="#1E40AF"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            animate={{ opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
          />
        </g>
      </svg>

      {/* Metric Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[#1E40AF] tracking-wider font-semibold">
        [ PROCESS_LOG: EXTRUDING_HYDROGEL ]
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[8px] text-clinical-text/40">
        <span className="h-1.5 w-1.5 rounded-full bg-clinical-warning animate-pulse" />
        CROSSLINKING ACTIVE
      </div>

      {/* Info labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-clinical-text/40">
        <div className="space-y-0.5">
          <div>PRESSURE: 65 kPa</div>
          <div>MATERIAL: dECM GLYCAN</div>
        </div>
        <div className="text-right space-y-0.5">
          <div>TEMP: 37 °C</div>
          <div>VISCOSITY: 4.5 PA·S</div>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-wider text-clinical-accent bg-clinical-accent/5 px-2 py-0.5 border border-clinical-accent/10">
          THE LIVING MATERIAL
        </span>
      </div>
    </div>
  );
};

// 3. Scaffold Animation Component (Layer-by-layer lattice fabrication with scanning print head)
const ScaffoldAnimation = () => {
  // Lattice grid configuration
  const gridStart = 45;
  const gridEnd = 155;
  const strandCount = 6;
  const spacing = (gridEnd - gridStart) / (strandCount - 1);

  // Generate horizontal strands (Layer 1)
  const hStrands = Array.from({ length: strandCount }, (_, i) => ({
    y: gridStart + i * spacing,
    x1: gridStart,
    x2: gridEnd,
  }));

  // Generate vertical strands (Layer 2)
  const vStrands = Array.from({ length: strandCount }, (_, i) => ({
    x: gridStart + i * spacing,
    y1: gridStart,
    y2: gridEnd,
  }));

  // Junction nodes at intersections
  const junctions: { x: number; y: number }[] = [];
  for (let r = 0; r < strandCount; r++) {
    for (let c = 0; c < strandCount; c++) {
      junctions.push({
        x: gridStart + c * spacing,
        y: gridStart + r * spacing,
      });
    }
  }

  const strandLength = gridEnd - gridStart;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-clinical-border" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-clinical-border" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-clinical-border" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-clinical-border" />

      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-clinical-text" />
        ))}
      </div>

      <svg className="w-56 h-56 relative z-10" viewBox="0 0 200 200">
        <defs>
          {/* Glow filter for the print head */}
          <filter id="scaffoldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Pore fill gradient */}
          <radialGradient id="poreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DCAA5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#5DCAA5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer bounding frame */}
        <rect
          x="38"
          y="38"
          width="124"
          height="124"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="0.6"
        />

        {/* Pore fills (subtle squares between strands that pulse) */}
        {Array.from({ length: strandCount - 1 }, (_, r) =>
          Array.from({ length: strandCount - 1 }, (_, c) => {
            const px = gridStart + c * spacing + spacing * 0.15;
            const py = gridStart + r * spacing + spacing * 0.15;
            const pSize = spacing * 0.7;
            return (
              <motion.rect
                key={`pore-${r}-${c}`}
                x={String(px)}
                y={String(py)}
                width={String(pSize)}
                height={String(pSize)}
                rx="1"
                fill="url(#poreGrad)"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (r + c) * 0.2,
                }}
              />
            );
          })
        )}

        {/* Layer 1: Horizontal strands — drawn sequentially */}
        {hStrands.map((s, i) => (
          <motion.line
            key={`h-${i}`}
            x1={s.x1}
            y1={s.y}
            x2={s.x2}
            y2={s.y}
            stroke="#5DCAA5"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ strokeDasharray: strandLength, strokeDashoffset: strandLength }}
            animate={{ strokeDashoffset: [strandLength, 0] }}
            transition={{
              duration: 1.2,
              delay: i * 0.35,
              repeat: Infinity,
              repeatDelay: strandCount * 0.35 + 2.5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Layer 2: Vertical strands — drawn after horizontals */}
        {vStrands.map((s, i) => (
          <motion.line
            key={`v-${i}`}
            x1={s.x}
            y1={s.y1}
            x2={s.x}
            y2={s.y2}
            stroke="#5DCAA5"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeOpacity="0.7"
            initial={{ strokeDasharray: strandLength, strokeDashoffset: strandLength }}
            animate={{ strokeDashoffset: [strandLength, 0] }}
            transition={{
              duration: 1.2,
              delay: strandCount * 0.35 + i * 0.35,
              repeat: Infinity,
              repeatDelay: strandCount * 0.35 + 2.5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Junction nodes — pulse at lattice intersections */}
        {junctions.map((j, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={j.x}
            cy={j.y}
            r="2.5"
            fill="#1E40AF"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              r: [1.5, 2.8, 1.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08,
            }}
          />
        ))}

        {/* Pore dimension indicator — animated bracket */}
        <motion.g
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Top bracket marks */}
          <line
            x1={gridStart}
            y1={gridStart - 8}
            x2={gridStart}
            y2={gridStart - 4}
            stroke="#1E40AF"
            strokeWidth="0.8"
          />
          <line
            x1={gridStart + spacing}
            y1={gridStart - 8}
            x2={gridStart + spacing}
            y2={gridStart - 4}
          stroke="#1E40AF"
            strokeWidth="0.8"
          />
          {/* Connecting line with arrow */}
          <line
            x1={gridStart}
            y1={gridStart - 6}
            x2={gridStart + spacing}
            y2={gridStart - 6}
            stroke="#1E40AF"
            strokeWidth="0.6"
            strokeDasharray="2 1"
          />
          <text
            x={gridStart + spacing / 2}
            y={gridStart - 10}
            fill="#1E40AF"
            className="font-mono text-[5.5px]"
            textAnchor="middle"
          >
            100-500µm
          </text>
        </motion.g>

        {/* Scanning Print Head Cursor — traces the lattice build path */}
        <motion.g
          filter="url(#scaffoldGlow)"
          animate={{
            x: [gridStart, gridEnd, gridEnd, gridStart, gridStart, gridStart],
            y: [gridStart, gridStart, gridEnd, gridEnd, gridStart, gridStart],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle cx="0" cy="0" r="4" fill="none" stroke="#1E40AF" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.5" fill="#1E40AF" opacity="0.6" />
          <line x1="-7" y1="0" x2="7" y2="0" stroke="#1E40AF" strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="-7" x2="0" y2="7" stroke="#1E40AF" strokeWidth="0.5" opacity="0.5" />
        </motion.g>

        {/* Layer count indicators on right side */}
        {["L1", "L2", "L3"].map((label, i) => (
          <motion.text
            key={label}
            x="170"
            y={gridStart + 20 + i * 22}
            fill="#94A3B8"
            className="font-mono text-[6px]"
            textAnchor="start"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            {label}
          </motion.text>
        ))}

        {/* Coordinate annotations */}
        <text x="38" y="35" fill="#94A3B8" className="font-mono text-[6px]" textAnchor="start">0,0</text>
        <text x="155" y="35" fill="#94A3B8" className="font-mono text-[6px]" textAnchor="end">X</text>
        <text x="38" y="165" fill="#94A3B8" className="font-mono text-[6px]" textAnchor="start">Y</text>
      </svg>

      {/* Metric Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[#1E40AF] tracking-wider font-semibold">
        [ FABRICATION_LOG: LATTICE_BUILD ]
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[8px] text-clinical-text/40">
        <span className="h-1.5 w-1.5 rounded-full bg-[#5DCAA5] animate-pulse" />
        LAYER DEPOSITION
      </div>

      {/* Info labels */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-clinical-text/40">
        <div className="space-y-0.5">
          <div>PORE SIZE: 100-500µm</div>
          <div>INTERCONNECTIONS: &gt;95%</div>
        </div>
        <div className="text-right space-y-0.5">
          <div>LAYERS: 3 / 3</div>
          <div>MATERIAL: PCL / PLGA</div>
        </div>
      </div>

      <div className="mt-2">
        <span className="font-mono text-[9px] tracking-wider text-clinical-accent bg-clinical-accent/5 px-2 py-0.5 border border-clinical-accent/10">
          LATTICE SCAFFOLD FABRICATION
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
    <section ref={containerRef} className="relative py-24 bg-white overflow-x-clip border-b border-clinical-border">
      {/* Decorative Grid Line Separators */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-clinical-border" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-clinical-border" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-clinical-accent" />
            <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
              SCIENCE
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight text-clinical-text sm:text-4xl">
            Every construct begins with <span className="font-semibold">three fundamentals</span>.
          </h2>
        </div>

        {/* Two Column Layout (Sticky Visualizer Left, Scrollable steps Right) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          
          {/* LEFT COLUMN: Sticky Visualizer Card (Desktop only) */}
          <div className="hidden lg:flex lg:w-[42%] lg:shrink-0">
            <div className="sticky top-28 z-20 w-full self-start">
              <div className="border border-clinical-border bg-white p-2 shadow-sm rounded-sm overflow-hidden aspect-square flex flex-col justify-between">
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
                      activeStep === i ? "w-8 bg-[#5DCAA5]" : "w-2 bg-clinical-border hover:bg-clinical-text/20"
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
                <div className="block lg:hidden mb-6 w-full aspect-square border border-clinical-border bg-white p-2 shadow-sm rounded-sm">
                  {renderVisualizer(idx)}
                </div>

                <div
                  ref={stepRefs[idx]}
                  onClick={() => scrollToStep(idx)}
                  className={`group transition-all duration-300 border-l-2 pl-6 py-6 lg:py-10 cursor-pointer ${
                    activeStep === idx
                      ? "border-[#5DCAA5] bg-clinical-surface/40"
                      : "border-clinical-border hover:border-clinical-text/30 hover:bg-clinical-surface/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Circle Indicator Badge */}
                    <div
                      className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 border ${
                        activeStep === idx
                          ? "bg-[#5DCAA5] border-[#5DCAA5] text-white font-bold"
                          : "bg-white border-clinical-border text-clinical-text/30 group-hover:text-clinical-text/60 group-hover:border-clinical-text/30"
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4 flex-grow">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-semibold text-[#5DCAA5] tracking-widest uppercase">
                            {card.label}
                          </span>
                          <span className="font-mono text-[9px] border border-clinical-border bg-white text-clinical-text/60 px-1.5 py-0.5 rounded-sm">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-normal text-clinical-text tracking-tight uppercase">
                          {card.subLabel}
                        </h3>
                      </div>

                      <ul className="space-y-3.5 pl-4 list-disc text-clinical-text/60 text-xs">
                        {card.points.map((point) => (
                          <li key={point} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Validated Metric Footer */}
                      <div className="pt-5 border-t border-clinical-border/50 max-w-xs">
                        <div className="text-[9px] font-mono font-bold uppercase text-clinical-text/30 tracking-wider mb-1">
                          Validated Metric
                        </div>
                        <div className="text-lg font-mono font-bold text-clinical-text">
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
