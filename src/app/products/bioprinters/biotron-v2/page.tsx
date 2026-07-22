"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SpecTable from "@/components/SpecTable";

export default function BiotronV2Page() {
  const specs = {
    "System": "Electropneumatic extrusion",
    "Print Resolution": "10 µm",
    "Print Head": "1 (Movable)",
    "Nozzle Size": "20G – 28G",
    "Build Volume": "15 × 15 × 10 cm",
    "Outer Dimensions": "300 × 240 × 345 mm",
    "Operating Temperature": "Ambient",
    "Pressure": "0 – 100 kPa",
    "Max Speed": "80 mm/s",
    "Max Acceleration": "3000 mm/s²",
    "Infill": "Up to 100%",
    "Build Surface": "Petri dishes — 75 mm, 100 mm",
    "Features": "Crosslinking module + adjustable nozzles",
    "Enclosure": "ISO Class 5 sterile chamber with UV + HEPA H14 filter",
    "Software": "Cloud-based G-code visualization + print library",
    "Calibration": "Automatic + Manual",
    "User Interface": "Integrated touchscreen + Online Web Interface",
    "Connectivity": "Touchscreen + Wi-Fi",
    "Weight": "4 kg",
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
                    src="/assets/biotron-v2.jpg"
                    alt="BioTron V2 Portable Chamber"
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
                  CLINICAL BENCHTOP UNIT
                </div>
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-5xl">
                  BioTron <span className="font-extrabold text-teal-900">V2</span>
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                  The BioTron V2 is an intelligent benchtop bioprinter designed to operate in standard laboratory environments without cleanroom overhead. Featuring an electropneumatic extrusion driver with 10µm resolution, it operates inside an ISO Class 5 sterile containment chamber equipped with dual UV decontamination and HEPA H14 filtration.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact?type=product&model=biotron-v2"
                    className="inline-flex items-center justify-center rounded-lg bg-teal-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-950 shadow-sm transition-all duration-200"
                  >
                    Enquire / Order System
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Spec Table */}
            <div>
              <SpecTable specs={specs} title="BIOTRON V2 SPECIFICATIONS SHEET" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
