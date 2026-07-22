"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroVideo from "@/components/HeroVideo";
import FundamentalsTriad from "@/components/FundamentalsTriad";
import PurposeInteractive from "@/components/PurposeInteractive";
import ApplicationsInteractive from "@/components/ApplicationsInteractive";
import WhatWeProvide from "@/components/WhatWeProvide";
import ResearchHighlights from "@/components/ResearchHighlights";
import CollaborateCTA from "@/components/CollaborateCTA";

export default function Home() {







  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        {/* Section 1: Hero (Video) */}
        <HeroVideo />

        {/* Section 2: Our Purpose */}
        <PurposeInteractive />

        {/* Section 3: Three Fundamentals (Triad) */}
        <FundamentalsTriad />

        {/* Section 4: BioTron Explainer */}
        <section className="py-24 bg-slate-50 border-b border-zinc-200 relative overflow-hidden">
          {/* Engineering grid pattern background */}
          <div className="absolute inset-0 pointer-events-none animate-clinical-grid" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              {/* Text Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                  OUR PLATFORM
                </div>
                <h2 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-4xl">
                  A bioprinter built for <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950">the lab bench</span>.
                </h2>
                <div className="space-y-4 text-sm text-zinc-700 leading-relaxed font-light">
                  <p className="font-semibold text-zinc-900 text-base">
                    Load your bioink. Set your structure. Press print.
                  </p>
                  <p>
                    BioTron builds living tissue layer by layer at 10µm precision — inside a sealed sterile chamber, automatically.
                  </p>
                  <p>
                    No special training. No cleanroom required.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/products/bioprinters/biotron-v2"
                    className="inline-flex items-center justify-center rounded-lg bg-teal-900 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-950 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    See BioTron Specs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Right */}
              <div className="relative rounded-2xl border border-zinc-200 bg-white p-3 shadow-md overflow-hidden group">
                <Image
                  src="/assets/biotron-v2.jpg"
                  alt="BioTron V2 Printer"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl border border-zinc-100 group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute top-6 right-6 bg-teal-950/90 px-3.5 py-1.5 rounded-full border border-teal-400/20 backdrop-blur-md shadow-sm">
                  <span className="font-mono text-[9px] font-bold text-emerald-300 tracking-widest flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYSTEM STATUS: READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Focus Areas (Redesigned) */}
        <ApplicationsInteractive />

        {/* Section 6: Services */}
        <WhatWeProvide />

        <ResearchHighlights />

        {/* Section 8: Collaborate CTA */}
        <CollaborateCTA />
      </main>

      <Footer />
    </div>
  );
}
