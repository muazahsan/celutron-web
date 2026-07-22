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
      products: ["CeluLife Bioink", "CeluMatrix-LV", "CeluMatrix-HV"],
      desc: "Get printing immediately with standard bioinks in ready-to-use cartridges.",
      image: "/assets/celulife-bioink.jpg",
      link: "/products/bioinks/ready-to-use",
    },
    {
      id: "training",
      title: "Training Bioinks",
      products: ["CeluLife Trial"],
      desc: "Optimized for learning and protocol development without using live cell material.",
      image: "/assets/celulife-trial.jpg",
      link: "/products/bioinks/training",
    },
    {
      id: "biotron-inks",
      title: "BioTron Inks",
      products: ["CeluLife-Alg", "CeluLife-Gel"],
      desc: "Formulated and validated specifically for BioTron hardware systems.",
      image: "/assets/celulife-alg.jpg",
      link: "/products/bioinks/biotron-inks",
    },
    {
      id: "custom",
      title: "Custom / Enquiry",
      products: ["Patient-Specific Formulations"],
      desc: "Patient-specific formulations built from your own cell lines. Contact us to begin formulation.",
      isCustom: true,
      link: "/products/bioinks/custom",
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
        <section className="bg-slate-50 border-b border-zinc-200 py-24 relative overflow-hidden">
          {/* Engineering grid pattern background */}
          <div className="absolute inset-0 pointer-events-none animate-clinical-grid" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                PRODUCTS CATALOGUE
              </div>
              <h1 className="text-4xl font-light tracking-tight text-zinc-950 sm:text-6xl">
                Precision instruments for <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950">tissue engineering research</span>.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-light">
                Bioprinters and bioinks engineered for reproducible, clinical-grade biofabrication.
              </p>
            </div>
          </div>
        </section>

        {/* Bioprinters Section */}
        <section id="bioprinters" className="py-24 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                BIOPRINTERS
              </div>
              <h2 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-4xl">
                Advanced Extrusion <span className="font-bold text-teal-900">Systems</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {printers.map((printer) => (
                <div
                  key={printer.id}
                  className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video bg-slate-50 overflow-hidden border-b border-zinc-100">
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
                        <span className="font-mono text-[10px] font-bold text-teal-800 uppercase tracking-widest block mb-1">
                          {printer.type}
                        </span>
                        <h3 className="text-2xl font-bold text-zinc-950">
                          {printer.name}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed font-light">
                        {printer.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-8 pt-2">
                    <Link
                      href={printer.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
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
        <section id="bioinks" className="py-24 bg-slate-50 border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                BIOINKS
              </div>
              <h2 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-4xl">
                Standard & Patient-Specific <span className="font-bold text-teal-900">Hydrogels</span>
              </h2>
              <p className="text-sm text-zinc-600 font-light max-w-xl">
                From standard bioinks to patient-specific formulas — shipped in sterile cartridges ready for research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {bioinkCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.link}
                  className="rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all p-6 group/card"
                >
                  <div className="space-y-4">
                    {!cat.isCustom && cat.image && (
                      <div className="relative aspect-square w-full bg-slate-50 border border-zinc-100 rounded-xl overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                    {cat.isCustom && (
                      <div className="aspect-square w-full bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center text-teal-700">
                        <FlaskConical className="h-12 w-12" />
                      </div>
                    )}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-zinc-950">
                        {cat.title}
                      </h3>
                      {/* Product chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {cat.products.map((product) => (
                          <span
                            key={product}
                            className={`inline-block font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${
                              cat.isCustom
                                ? "border-teal-200 bg-teal-50 text-teal-800"
                                : "border-zinc-200 bg-slate-50 text-zinc-600"
                            }`}
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 mt-6">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 group-hover/card:underline uppercase tracking-wider"
                    >
                      {cat.isCustom ? "Enquire" : "See All Products"}
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Base Materials Section */}
        <section id="base-materials" className="py-24 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-4 py-1.5 text-xs font-mono font-medium text-teal-900 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                BASE MATERIALS
              </div>
              <h2 className="text-3xl font-light tracking-tight text-zinc-950 sm:text-4xl">
                Lyophilized <span className="font-bold text-teal-900">Biomaterials</span>
              </h2>
              <p className="text-sm text-zinc-600 font-light max-w-2xl">
                A wide array of stock solutions and lyophilized biomaterials to develop your own bioinks from high-quality, consistent building blocks.
              </p>
            </div>

            {/* Materials Grid */}
            <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm divide-y divide-zinc-100">
              {baseMaterials.map((item, idx) => (
                <div
                  key={item.name}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-8 py-4.5 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="sm:col-span-1 font-mono text-xs text-zinc-400 font-bold">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="sm:col-span-4 text-sm font-bold text-zinc-950">
                    {item.name}
                  </div>
                  <div className="sm:col-span-5 text-xs text-zinc-600 font-light">
                    {item.notes}
                  </div>
                  <div className="sm:col-span-2 text-right">
                    <Link
                      href="/contact?type=product"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-teal-700 hover:text-teal-900 uppercase tracking-wider"
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
        <section className="bg-teal-950 text-white py-10 border-y border-teal-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="font-mono text-[10px] tracking-wider text-emerald-300/80 uppercase font-bold">
              Compliance standards:
            </span>
            {complianceBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />
                <span className="font-mono text-xs font-semibold text-white/90 select-none">
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
