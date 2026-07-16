"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, FlaskConical, ChevronRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// ── Product data ──────────────────────────────────────────────────────────────

interface BioinkProduct {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  image?: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

interface BioinkCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: BioinkProduct[];
  isCustom?: boolean;
}

const BIOINK_CATEGORIES: Record<string, BioinkCategory> = {
  "ready-to-use": {
    id: "ready-to-use",
    title: "Ready to Use",
    subtitle: "Standard Hydrogel Bioinks",
    description:
      "Pre-formulated, sterile, and cartridge-ready bioinks for immediate printing. No preparation required — load, print, and validate.",
    products: [
      {
        id: "celulife-bioink",
        name: "CeluLife Bioink",
        shortName: "CeluLife",
        tagline: "Universal cell-laden hydrogel for soft tissue applications.",
        image: "/assets/celulife-bioink.jpg",
        specs: [
          { label: "Base Carrier", value: "Sodium Alginate + Gelatin" },
          { label: "Sterility", value: "GMP Grade, Sterile" },
          { label: "Format", value: "Ready-to-use cartridge" },
          { label: "Application", value: "Soft tissue scaffolds" },
        ],
        highlights: [
          "GMP-grade sterile manufacture",
          "Compatible with all BioTron systems",
          "Optimized rheology for extrusion printing",
        ],
      },
      {
        id: "celumatrix-lv",
        name: "CeluMatrix-LV",
        shortName: "CeluMatrix LV",
        tagline: "Low viscosity formulation for high-resolution microstructures.",
        image: "/assets/celumatrix-lv.jpg",
        specs: [
          { label: "Viscosity", value: "Low (LV)" },
          { label: "Nozzle Compatibility", value: "25G – 28G" },
          { label: "Crosslinking", value: "Ionic (CaCl₂)" },
          { label: "Application", value: "Fine-feature soft tissue" },
        ],
        highlights: [
          "Ideal for 25G–28G nozzle gauges",
          "High resolution microstructure printing",
          "Ionic crosslinking ready",
        ],
      },
      {
        id: "celumatrix-hv",
        name: "CeluMatrix-HV",
        shortName: "CeluMatrix HV",
        tagline: "High viscosity alginate bioink for structural fidelity.",
        image: "/assets/celumatrix-hv.jpg",
        specs: [
          { label: "Viscosity", value: "High (HV)" },
          { label: "Nozzle Compatibility", value: "20G – 22G" },
          { label: "Base", value: "Alginate Bioink" },
          { label: "Application", value: "Structural scaffolds" },
        ],
        highlights: [
          "Excellent shape retention after extrusion",
          "Designed for structural scaffold constructs",
          "Consistent batch-to-batch quality",
        ],
      },
    ],
  },

  training: {
    id: "training",
    title: "Training Bioinks",
    subtitle: "Protocol Development & Learning",
    description:
      "Bioinks specifically optimised for learning, onboarding, and protocol development. No live cell material — safe for non-sterile training environments.",
    products: [
      {
        id: "celulife-trial",
        name: "CeluLife Trial",
        shortName: "CeluLife Trial",
        tagline: "Cell-free training bioink for protocol development and printer calibration.",
        image: "/assets/celulife-trial.jpg",
        specs: [
          { label: "Cell Content", value: "Cell-free" },
          { label: "Viscosity", value: "Matched to CeluLife Bioink" },
          { label: "Environment", value: "Non-sterile safe" },
          { label: "Application", value: "Training & calibration" },
        ],
        highlights: [
          "Matched viscosity to production-grade CeluLife Bioink",
          "Safe for use outside ISO Class 5 environments",
          "Ideal for onboarding new lab personnel",
          "Protocol development before committing live cells",
        ],
      },
    ],
  },

  "biotron-inks": {
    id: "biotron-inks",
    title: "BioTron Inks",
    subtitle: "Hardware-Validated Formulations",
    description:
      "Bioinks formulated and validated specifically for BioTron V1 and V2 hardware systems. Guaranteed compatibility and extrusion performance.",
    products: [
      {
        id: "celulife-alg",
        name: "CeluLife-Alg",
        shortName: "CeluLife-Alg",
        tagline: "Alginate-based bioink, validated on BioTron extrusion platforms.",
        image: "/assets/celulife-alg.jpg",
        specs: [
          { label: "Base", value: "Sodium Alginate" },
          { label: "Crosslinking", value: "Ionic (CaCl₂)" },
          { label: "Validated On", value: "BioTron V1, BioTron V2" },
          { label: "Printability", value: "5 / 5" },
        ],
        highlights: [
          "Validated printability score 5/5 on BioTron systems",
          "Optimised for 22G–25G nozzle range",
          "Consistent filament width ±18 µm tolerance",
        ],
      },
      {
        id: "celulife-gel",
        name: "CeluLife-Gel",
        shortName: "CeluLife-Gel",
        tagline: "Thermoreversible gelatin bioink for temperature-sensitive constructs.",
        image: "/assets/celulife-gel.jpg",
        specs: [
          { label: "Base", value: "Gelatin" },
          { label: "Crosslinking", value: "Thermal (thermoreversible)" },
          { label: "Validated On", value: "BioTron V1, BioTron V2" },
          { label: "Application", value: "Soft tissue, organoids" },
        ],
        highlights: [
          "Thermoreversible scaffold base — ideal for cell embedding",
          "Compatible with BioTron heated/cooled printhead",
          "Excellent biocompatibility for primary cell lines",
        ],
      },
    ],
  },

  custom: {
    id: "custom",
    title: "Custom / Enquiry",
    subtitle: "Patient-Specific Formulations",
    description:
      "Patient-specific bioink formulations built from your own cell lines. We work with your lab to develop, test, and validate a hydrogel system tailored to your clinical or research target.",
    isCustom: true,
    products: [],
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BioinkCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = BIOINK_CATEGORIES[params.category];

  if (!category) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        {/* Breadcrumb + Hero */}
        <section className="bg-clinical-surface border-b border-clinical-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-mono text-[10px] text-clinical-text/40 uppercase tracking-widest mb-8">
              <Link href="/products" className="hover:text-clinical-accent transition-colors">
                Products
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span>Bioinks</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-clinical-text/70">{category.title}</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  BIOINKS — {category.subtitle}
                </span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-clinical-text sm:text-5xl">
                {category.title}{" "}
                <span className="font-semibold">Bioinks</span>
              </h1>
              <p className="text-lg text-clinical-text/60 leading-relaxed font-light max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        {!category.isCustom && category.products.length > 0 && (
          <section className="py-24 bg-white border-b border-clinical-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-clinical-accent" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                    {category.products.length} PRODUCT
                    {category.products.length !== 1 ? "S" : ""} IN THIS CATEGORY
                  </span>
                </div>
              </div>

              <div
                className={`grid gap-10 ${
                  category.products.length === 1
                    ? "grid-cols-1 max-w-2xl"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {category.products.map((product, idx) => (
                  <div
                    key={product.id}
                    className="group border border-clinical-border bg-white flex flex-col hover:border-clinical-accent/30 transition-colors"
                  >
                    {/* Product image */}
                    {product.image && (
                      <div className="relative aspect-video bg-clinical-surface border-b border-clinical-border overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Index badge */}
                        <div className="absolute top-3 left-3 bg-white border border-clinical-border px-2 py-0.5">
                          <span className="font-mono text-[9px] font-bold text-clinical-text/40 uppercase tracking-widest">
                            {(idx + 1).toString().padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-grow space-y-6">
                      {/* Name + tagline */}
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-clinical-accent">
                          {category.subtitle}
                        </span>
                        <h2 className="text-2xl font-semibold text-clinical-text">
                          {product.name}
                        </h2>
                        <p className="text-sm text-clinical-text/60 font-light leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Spec table */}
                      <div className="border border-clinical-border divide-y divide-clinical-border">
                        {product.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="grid grid-cols-2 gap-4 px-4 py-2.5"
                          >
                            <span className="text-[10px] text-clinical-text/40 font-mono uppercase tracking-wider">
                              {spec.label}
                            </span>
                            <span className="text-[11px] font-mono font-semibold text-clinical-text">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 flex-grow">
                        {product.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-clinical-accent" />
                            <span className="text-xs text-clinical-text/70 font-light leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="pt-4 border-t border-clinical-border/50">
                        <Link
                          href="/contact?type=product"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical-accent hover:underline uppercase tracking-wider"
                        >
                          Order Cartridges
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Custom / Enquiry panel */}
        {category.isCustom && (
          <section className="py-24 bg-white border-b border-clinical-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="w-20 h-20 mx-auto bg-clinical-accent/5 border border-clinical-accent/20 flex items-center justify-center text-clinical-accent">
                  <FlaskConical className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-light text-clinical-text tracking-tight">
                    Tell us about your{" "}
                    <span className="font-semibold">cell lines</span>.
                  </h2>
                  <p className="text-clinical-text/60 font-light leading-relaxed">
                    We develop patient-specific hydrogel formulations built from
                    your own cell lines. Every formulation is validated for
                    printability, viability, and clinical-grade reproducibility
                    before delivery.
                  </p>
                </div>

                {/* Process steps */}
                <div className="text-left border border-clinical-border divide-y divide-clinical-border">
                  {[
                    { step: "01", title: "Initial Consultation", desc: "Share your cell type, target tissue, and application parameters." },
                    { step: "02", title: "Formulation Design", desc: "Our team selects carriers, crosslinkers, and additives for your target." },
                    { step: "03", title: "Validation & Testing", desc: "Printability, rheology, and cell viability are confirmed in-house." },
                    { step: "04", title: "Sterile Delivery", desc: "GMP-grade cartridges shipped to your lab ready for immediate use." },
                  ].map((item) => (
                    <div key={item.step} className="grid grid-cols-12 gap-4 px-6 py-5 items-start">
                      <span className="col-span-2 font-mono text-[10px] font-bold text-clinical-accent/60 uppercase tracking-widest pt-0.5">
                        {item.step}
                      </span>
                      <div className="col-span-10 space-y-1">
                        <p className="text-sm font-semibold text-clinical-text">{item.title}</p>
                        <p className="text-xs text-clinical-text/60 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-clinical-accent text-white px-6 py-3 text-sm font-semibold hover:bg-clinical-accent/90 transition-colors"
                >
                  Start Enquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Back link + other categories strip */}
        <section className="py-16 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-clinical-text/30 uppercase tracking-widest block mb-2">
                  OTHER CATEGORIES
                </span>
                <div className="flex flex-wrap gap-3">
                  {Object.values(BIOINK_CATEGORIES)
                    .filter((c) => c.id !== category.id)
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/products/bioinks/${c.id}`}
                        className="inline-flex items-center gap-1 border border-clinical-border bg-white px-3 py-2 text-xs font-semibold text-clinical-text hover:border-clinical-accent/40 hover:text-clinical-accent transition-colors"
                      >
                        {c.title}
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    ))}
                </div>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-text/60 hover:text-clinical-accent transition-colors"
              >
                ← Back to All Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
