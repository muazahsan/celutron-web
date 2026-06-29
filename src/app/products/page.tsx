"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, FlaskConical } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const printers = [
    {
      id: "biotron-v1",
      image: "/assets/biotron-v1.jpg",
      name: "BioTron V1",
      type: "Multi-Cartridge Industrial Assembly",
      desc: "Multi-syringe head with distinct bioink formulations. Automated spatial and temporal pressure extrusion.",
      link: "/products/bioprinters/biotron-v1",
    },
    {
      id: "biotron-v2",
      image: "/assets/biotron-v2.jpg",
      name: "BioTron V2",
      type: "Intelligent Portable Chamber",
      desc: "Compact electropneumatic extrusion with ISO Class 5 sterile chamber. 10µm resolution. Cloud-connected.",
      link: "/products/bioprinters/biotron-v2",
    },
  ];

  const bioinkCategories = [
    {
      id: "ready-to-use",
      title: "Ready to Use",
      products: "CeluLife Bioink, CeluMatrix-LV, CeluMatrix-HV",
      desc: "Get printing immediately with standard bioinks in ready-to-use cartridges.",
      image: "/assets/celulife-bioink.jpg",
    },
    {
      id: "training",
      title: "Training Bioinks",
      products: "CeluLife Trial",
      desc: "Optimized for learning and protocol development without using live cell material.",
      image: "/assets/celulife-trial.jpg",
    },
    {
      id: "biotron-inks",
      title: "BioTron Inks",
      products: "CeluLife-Alg, CeluLife-Gel",
      desc: "Formulated and validated specifically for BioTron hardware systems.",
      image: "/assets/celulife-alg.jpg",
    },
    {
      id: "custom",
      title: "Custom / Enquiry",
      products: "Patient-Specific Formulations",
      desc: "Patient-specific formulations built from your own cell lines. Contact us to begin formulation.",
      isCustom: true,
    },
  ];

  const baseMaterials = [
    { name: "Alginate", notes: "Standard hydrogel carrier" },
    { name: "Gelatin", notes: "Thermoreversible scaffold base" },
    { name: "Pluronic Acid", notes: "Rheology modifier and sacrificial pore former" },
    { name: "Methyl Cellulose", notes: "Viscosity modifier" },
    { name: "Microcrystalline Cellulose", notes: "Structural reinforcement" },
    { name: "Nanocellulose", notes: "CNF from sugarcane bagasse (proprietary isolation)" },
    { name: "Pectin", notes: "Natural polysaccharide carrier" },
    { name: "Polyethylene Glycol (PEG)", notes: "Crosslinkable hydrogel spacer" },
  ];

  const complianceBadges = [
    "CDSCO Compliant",
    "ISO 13485 Certified",
    "IEC 60601 Certified",
    "GLP Standards",
    "GMP Grade",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-clinical-surface border-b border-clinical-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  PRODUCTS CATALOGUE
                </span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-clinical-text sm:text-5xl">
                Precision instruments for <span className="font-semibold">tissue engineering research</span>.
              </h1>
              <p className="text-lg text-clinical-text/60 leading-relaxed font-light">
                Bioprinters and bioinks engineered for reproducible, clinical-grade biofabrication.
              </p>
            </div>
          </div>
        </section>

        {/* Bioprinters Section */}
        <section id="bioprinters" className="py-24 bg-white border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  BIOPRINTERS
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Advanced Extrusion Systems
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {printers.map((printer) => (
                <div
                  key={printer.id}
                  className="group border border-clinical-border bg-white overflow-hidden hover:border-clinical-accent/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video bg-clinical-surface overflow-hidden border-b border-clinical-border">
                      <Image
                        src={printer.image}
                        alt={printer.name}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8 space-y-4">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-clinical-accent uppercase tracking-widest block mb-1">
                          {printer.type}
                        </span>
                        <h3 className="text-2xl font-semibold text-clinical-text">
                          {printer.name}
                        </h3>
                      </div>
                      <p className="text-sm text-clinical-text/70 leading-relaxed font-light">
                        {printer.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-8 pt-2">
                    <Link
                      href={printer.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-clinical-accent hover:underline"
                    >
                      See Specifications
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bioinks Section */}
        <section id="bioinks" className="py-24 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  BIOINKS
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Standard & Patient-Specific Hydrogels
              </h2>
              <p className="text-sm text-clinical-text/60 font-light max-w-xl">
                From standard bioinks to patient-specific formulas — shipped in sterile cartridges ready for research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {bioinkCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="border border-clinical-border bg-white flex flex-col justify-between hover:border-clinical-accent/30 transition-colors p-6"
                >
                  <div className="space-y-4">
                    {!cat.isCustom && cat.image && (
                      <div className="relative aspect-square w-full bg-clinical-surface border border-clinical-border overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                    {cat.isCustom && (
                      <div className="aspect-square w-full bg-clinical-accent/5 border border-clinical-accent/15 flex items-center justify-center text-clinical-accent">
                        <FlaskConical className="h-12 w-12" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-clinical-text">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-[9px] text-clinical-text/40 block mt-1 uppercase font-bold">
                        {cat.products}
                      </span>
                    </div>
                    <p className="text-xs text-clinical-text/60 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-clinical-border/50 mt-6">
                    {cat.isCustom ? (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-bold text-clinical-accent hover:underline uppercase tracking-wider"
                      >
                        Enquire
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <Link
                        href="/contact?type=product"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-clinical-text/70 hover:text-clinical-accent transition-colors"
                      >
                        Order Cartridges →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Base Materials Section */}
        <section id="base-materials" className="py-24 bg-white border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  BASE MATERIALS
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Lyophilized Biomaterials
              </h2>
              <p className="text-sm text-clinical-text/60 font-light max-w-2xl">
                A wide array of stock solutions and lyophilized biomaterials to develop your own bioinks from high-quality, consistent building blocks.
              </p>
            </div>

            {/* Materials Grid */}
            <div className="border border-clinical-border bg-white divide-y divide-clinical-border">
              {baseMaterials.map((item, idx) => (
                <div
                  key={item.name}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-8 py-4 hover:bg-clinical-surface/40 transition-colors"
                >
                  <div className="sm:col-span-1 text-mono text-xs text-clinical-text/30 font-bold">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="sm:col-span-4 text-sm font-semibold text-clinical-text">
                    {item.name}
                  </div>
                  <div className="sm:col-span-5 text-xs text-clinical-text/60 font-light">
                    {item.notes}
                  </div>
                  <div className="sm:col-span-2 text-right">
                    <Link
                      href="/contact?type=product"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-clinical-accent hover:underline uppercase tracking-wider"
                    >
                      Browse
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Strip */}
        <section className="bg-clinical-text text-white py-8 border-y border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="font-mono text-[10px] tracking-wider text-white/30 uppercase font-bold">
              Compliance standards:
            </span>
            {complianceBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-clinical-success" />
                <span className="font-mono text-xs font-semibold text-white/80 select-none">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
