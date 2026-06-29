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
        <section className="py-24 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              {/* Text Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-clinical-accent" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                    OUR PLATFORM
                  </span>
                </div>
                <h2 className="text-3xl font-light tracking-tight text-clinical-text sm:text-4xl">
                  A bioprinter built for <span className="font-semibold">the lab bench</span>.
                </h2>
                <div className="space-y-4 text-sm text-clinical-text/70 leading-relaxed font-light">
                  <p className="font-semibold text-clinical-text">
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
                    className="inline-flex items-center justify-center border border-clinical-accent bg-clinical-accent px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-clinical-accent transition-all duration-200"
                  >
                    See BioTron Specs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Right */}
              <div className="relative border border-clinical-border bg-white p-4">
                <Image
                  src="/assets/biotron-v2.jpg"
                  alt="BioTron V2 Printer"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover border border-clinical-border"
                />
                <div className="absolute top-8 right-8 bg-clinical-text/90 px-3 py-1.5 border border-white/10 backdrop-blur-sm">
                  <span className="font-mono text-[9px] font-bold text-white tracking-widest">
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

        {/* Section 8: Contact CTA Strip */}
        <section className="bg-clinical-accent text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              Ready to <span className="font-semibold">collaborate?</span>
            </h2>
            <p className="text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              Whether you&apos;re a researcher, hospital, or investor — let&apos;s build something that matters.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-sm font-semibold text-clinical-accent hover:bg-transparent hover:text-white transition-all duration-200"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
