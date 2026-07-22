"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SpecTable from "@/components/SpecTable";

export default function BiotronV1Page() {
  const specs = {
    "System Type": "Multi-syringe pneumatic extrusion assembly",
    "Print Resolution": "20 µm",
    "Extruders": "3 (Independent spatial control)",
    "Nozzle Compatibility": "18G – 27G",
    "Build Volume (X×Y×Z)": "200 × 200 × 150 mm",
    "Outer Dimensions": "450 × 400 × 500 mm",
    "Thermal Range": "Active heating & cooling (4°C to 120°C)",
    "Pressure Output": "0 – 200 kPa (Dual-channel regulated)",
    "Max Feed Rate": "50 mm/s",
    "Chamber Decontamination": "Integrated UV-C sterilization loop",
    "Supported Substrates": "Multi-well plates, glass slides, petri dishes",
    "Calibration": "Semi-automated touch probe alignment",
    "Host software": "Local touchscreen firmware console + G-code loader",
    "Interface Connectivity": "Ethernet, USB Type-B",
    "Unit Weight": "12 kg",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow py-16 bg-slate-50 border-b border-zinc-200 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none animate-clinical-grid" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 hover:text-teal-700 uppercase"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column: Image & Overview */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-md overflow-hidden">
                <div className="relative aspect-square w-full bg-slate-50 rounded-xl overflow-hidden border border-zinc-100">
                  <Image
                    src="/assets/biotron-v1.jpg"
                    alt="BioTron V1 Industrial Assembly"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-mono font-bold text-teal-800 uppercase tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                  INDUSTRIAL CELL PATTERNING
                </div>
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-5xl">
                  BioTron <span className="font-extrabold text-teal-900">V1</span>
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                  The BioTron V1 is a multi-cartridge industrial bioprinting assembly engineered for complex multi-material constructs. By housing up to three independent syringe extrusion heads, it enables simultaneous deposition of distinct bioinks, support materials, and cellular densities in a single process.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact?type=product&model=biotron-v1"
                    className="inline-flex items-center justify-center rounded-lg bg-teal-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-950 shadow-sm transition-all duration-200"
                  >
                    Request Technical Integration
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Spec Table */}
            <div>
              <SpecTable specs={specs} title="BIOTRON V1 TECHNICAL SPECIFICATIONS" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
