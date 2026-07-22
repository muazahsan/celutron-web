"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Video, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroVideo() {
  const [bgMode, setBgMode] = useState<"video" | "image">("video");

  return (
    <div className="relative h-screen w-full overflow-hidden bg-clinical-text">
      {/* Background Media Switching */}
      <AnimatePresence mode="wait">
        {bgMode === "video" ? (
          <motion.div
            key="video-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 h-full w-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-75"
              style={{ filter: "brightness(0.55) contrast(1.05)" }}
            >
              <source src="/assets/hero_loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ) : (
          <motion.div
            key="image-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src="/assets/hero_image.jpg"
              alt="Celutron 3D Bioprinter printing tissue scaffold"
              fill
              priority
              className="object-cover opacity-80"
              style={{ filter: "brightness(0.65) contrast(1.1)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-clinical-text via-transparent to-clinical-text/30 opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-clinical-text/85 via-clinical-text/40 to-transparent pointer-events-none" />

      {/* Background Option Switcher (Top-Right under Navbar) */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-950/80 p-1 backdrop-blur-md shadow-lg">
        <button
          onClick={() => setBgMode("video")}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium transition-all duration-200 ${
            bgMode === "video"
              ? "bg-teal-500 text-slate-950 font-semibold shadow-sm"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
          title="Show Option 1: Video Loop"
        >
          <Video className="h-3.5 w-3.5" />
          <span>Option 1: Video</span>
        </button>
        <button
          onClick={() => setBgMode("image")}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium transition-all duration-200 ${
            bgMode === "image"
              ? "bg-teal-500 text-slate-950 font-semibold shadow-sm"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
          title="Show Option 2: 3D Printer Image"
        >
          <ImageIcon className="h-3.5 w-3.5" />
          <span>Option 2: Image</span>
        </button>
      </div>

      {/* Hero Container */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 z-20">
        
        {/* Text Place */}
        <div className="max-w-2xl space-y-5 text-left">
          {/* Scientific Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/75 px-3.5 py-1 backdrop-blur-md shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-emerald-300 uppercase">
              Clinical Biofabrication Platform
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase leading-[1.08]"
          >
            BIOPRINTING & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
              HUMAN TISSUE
            </span> <br />
            REGENERATION
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-zinc-200 sm:text-lg max-w-xl font-light leading-relaxed"
          >
            Advanced bioprinting systems engineered for personalized tissue restoration, drug discovery, and clinical cell delivery.
          </motion.p>
        </div>

        {/* Explore Place (Bottom-Right Positioning) */}
        <div className="flex justify-end items-end pb-4 sm:pb-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="ml-auto"
          >
            <Link
              href="#purpose"
              className="group inline-flex items-center gap-2.5 font-mono text-sm font-bold tracking-wider text-emerald-300 uppercase hover:text-white transition-colors duration-200 py-2 px-3.5 rounded-lg bg-teal-950/60 border border-teal-400/30 backdrop-blur-md hover:bg-teal-900/80 shadow-lg"
            >
              <span>Explore Our Vision</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-200 text-emerald-400" />
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

