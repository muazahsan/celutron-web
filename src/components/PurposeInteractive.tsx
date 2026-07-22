"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardData {
  id: number;
  label: string;
  icon: React.ReactNode;
  body: string;
}

export default function PurposeInteractive() {
  const [activeIdx, setActiveIdx] = useState<number>(2);

  const cards: CardData[] = [
    {
      id: 0,
      label: "PRINT",
      icon: (
        <svg 
          className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:stroke-[2px]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="4" rx="1.5" />
          <path d="M12 7V13" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <path d="M5 19H19" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="12" cy="17.5" r="2" fill="currentColor" className="animate-pulse" />
          <circle cx="8" cy="19" r="1.5" fill="currentColor" />
          <circle cx="16" cy="19" r="1.5" fill="currentColor" />
        </svg>
      ),
      body: "We bioprint living tissue structures layer by layer — with the same precision a surgeon needs, and the speed a patient can't afford to lose."
    },
    {
      id: 1,
      label: "PERSONALISE",
      icon: (
        <svg 
          className="w-12 h-12 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:stroke-[2px]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M4.5 5.5C7.5 5.5 9.5 9.5 12 12C14.5 14.5 16.5 18.5 19.5 18.5" />
          <path d="M4.5 18.5C7.5 18.5 9.5 14.5 12 12C14.5 9.5 16.5 5.5 19.5 5.5" />
          <line x1="7" y1="8" x2="7" y2="16" strokeDasharray="1.5 1.5" />
          <line x1="9.5" y1="10" x2="9.5" y2="14" strokeDasharray="1.5 1.5" />
          <line x1="14.5" y1="10" x2="14.5" y2="14" strokeDasharray="1.5 1.5" />
          <line x1="17" y1="8" x2="17" y2="16" strokeDasharray="1.5 1.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      body: "Every scaffold, every bioink, every membrane is built from the patient's own stem cells. No donors. No waiting. No rejection."
    },
    {
      id: 2,
      label: "RESTORE",
      icon: (
        <svg 
          className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:stroke-[2px]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="2.5" fill="currentColor" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" className="animate-pulse" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="18" r="2.5" fill="currentColor" />
          <line x1="8.5" y1="6" x2="15.5" y2="6" />
          <line x1="6" y1="8.5" x2="9.5" y2="10.5" />
          <line x1="18" y1="8.5" x2="14.5" y2="10.5" />
          <line x1="9.5" y1="13.5" x2="6" y2="15.5" />
          <line x1="14.5" y1="13.5" x2="18" y2="15.5" />
        </svg>
      ),
      body: "From bone reconstruction to organ repair — our tissue systems are designed to dissolve as the body heals, leaving nothing artificial behind."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14
      }
    }
  };

  return (
    <section id="purpose" className="relative py-28 bg-slate-50 border-b border-zinc-200 overflow-hidden">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none animate-clinical-grid" />
      
      {/* Decorative Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-6 max-w-4xl mx-auto text-center"
        >
          {/* Biomedical outline badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-teal-900 uppercase">
              OUR PURPOSE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-zinc-950 leading-tight">
            Rebuilding Human Tissue. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950">
              Eliminating the Wait List.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed max-w-3xl mx-auto font-light pt-2">
            Every year, thousands die waiting for organs that never arrive. Celutron exists to end that wait — by growing tissue from your own cells.
          </p>
        </motion.div>

        {/* 3-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card) => {
            const isActive = activeIdx === card.id;
            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                onMouseEnter={() => setActiveIdx(card.id)}
                whileHover={{ y: -8 }}
                className={`group flex flex-col items-center justify-start text-center bg-white border p-10 py-16 rounded-3xl cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "border-teal-600 shadow-xl shadow-teal-900/10 ring-1 ring-teal-500/20"
                    : "border-zinc-200 hover:border-teal-300 hover:bg-slate-50/50"
                }`}
              >
                {/* Icon Container */}
                <div className={`mb-8 transition-colors duration-300 ${
                  isActive ? "text-teal-700" : "text-zinc-400 group-hover:text-teal-600"
                }`}>
                  {card.icon}
                </div>

                {/* Subheader */}
                <h3 className="font-bold text-sm tracking-widest text-zinc-900 uppercase mb-5">
                  {card.label}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
