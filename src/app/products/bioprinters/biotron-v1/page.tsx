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
                <span className="inline-block font-mono text-[10px] font-bold text-clinical-accent uppercase tracking-widest bg-clinical-accent/5 border border-clinical-accent/10 px-2.5 py-0.5">
                  INDUSTRIAL CELL PATTERNING
                </span>
                <h1 className="text-3xl font-light tracking-tight text-clinical-text">
                  BioTron <span className="font-semibold">V1</span>
                </h1>
                <p className="text-sm text-clinical-text/70 leading-relaxed font-light">
                  The BioTron V1 is a multi-cartridge industrial bioprinting assembly engineered for complex multi-material constructs. By housing up to three independent syringe extrusion heads, it enables simultaneous deposition of distinct bioinks, support materials, and cellular densities in a single process.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact?type=product&model=biotron-v1"
                    className="inline-flex items-center justify-center border border-clinical-accent bg-clinical-accent px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-clinical-accent transition-all duration-200"
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
