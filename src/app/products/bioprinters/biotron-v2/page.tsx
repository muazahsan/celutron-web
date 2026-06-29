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

      <main className="flex-grow py-16 bg-clinical-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-clinical-text/50 hover:text-clinical-accent uppercase"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column: Image & Overview */}
            <div className="space-y-8">
              <div className="border border-clinical-border bg-white p-4">
                <div className="relative aspect-square w-full bg-clinical-surface border border-clinical-border overflow-hidden">
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
                <span className="inline-block font-mono text-[10px] font-bold text-clinical-accent uppercase tracking-widest bg-clinical-accent/5 border border-clinical-accent/10 px-2.5 py-0.5">
                  CLINICAL BENCHTOP UNIT
                </span>
                <h1 className="text-3xl font-light tracking-tight text-clinical-text">
                  BioTron <span className="font-semibold">V2</span>
                </h1>
                <p className="text-sm text-clinical-text/70 leading-relaxed font-light">
                  The BioTron V2 is an intelligent benchtop bioprinter designed to operate in standard laboratory environments without cleanroom overhead. Featuring an electropneumatic extrusion driver with 10µm resolution, it operates inside an ISO Class 5 sterile containment chamber equipped with dual UV decontamination and HEPA H14 filtration.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact?type=product&model=biotron-v2"
                    className="inline-flex items-center justify-center border border-clinical-accent bg-clinical-accent px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-clinical-accent transition-all duration-200"
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
