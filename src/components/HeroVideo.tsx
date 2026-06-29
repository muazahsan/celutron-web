"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-clinical-text">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        style={{ filter: "brightness(0.5) contrast(1.05)" }}
      >
        <source src="/assets/hero_loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-clinical-text via-transparent to-clinical-text/20 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-clinical-text/80 via-clinical-text/30 to-transparent" />

      {/* Overlay Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Scientific Category Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 bg-clinical-accent" />
            <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
              Clinical Biofabrication Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Engineering the Future of <br className="hidden sm:inline" />
            <span className="font-semibold text-white">Human Tissue Regeneration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/80 sm:text-lg max-w-2xl font-light"
          >
            Advanced bioprinting systems for personalized regenerative medicine and tissue engineering research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/about#technology"
              className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-semibold text-clinical-text hover:bg-clinical-surface transition-all duration-200"
            >
              Explore Technology
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid Specs Overlay */}
      <div className="absolute right-8 bottom-8 hidden lg:flex flex-col text-right font-mono text-[10px] text-white/40 space-y-1">
        <div>LATITUDE: 13.0827° N</div>
        <div>LONGITUDE: 80.2707° E</div>
        <div>SYSTEM: BIOTRON V.2</div>
        <div>STATUS: ACTIVE VALIDATION</div>
      </div>
    </div>
  );
}
