"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ResearchPage() {
  const studies = [
    {
      id: "study-1",
      title: "SCB-Nanocellulose Bioprinting Matrix",
      fullname: "Rapid Isolation of Cellulose Nanofibrils (CNF) from Sugarcane Bagasse for 3D Bioprinting and Tissue Engineering Applications",
      problem: "Existing CNF isolation models use harsh chemicals and fail to utilize India's 100M+ tonnes of annual sugarcane bagasse waste.",
      approach: "AHP and DES chemical isolation, characterized via FTIR, SEM, NTA.",
      metrics: {
        "DES peak size": "155.8 nm (31.8%)",
        "DES Zeta potential": "-20.6 mV (77.7%)",
        "AHP peak size": "168.3 nm (28.6%)",
        "AHP Zeta potential": "-10.8 mV (66.6%)",
      },
    },
    {
      id: "study-2",
      title: "Exosome Wound Healing Membrane",
      fullname: "Development of Exosome-Loaded Bio-Printed PRF Membrane for Wound Healing Matrix",
      problem: "Chronic diabetic wounds show delayed healing due to damaged angiogenesis and sustained inflammation.",
      approach: "NTA-confirmed exosomes + i-PRF in Sodium Alginate + Gelatin carrier. 5-layer crosslinked scaffold. Verified via MTT assay.",
      metrics: {
        "Scaffold layers": "5 crosslinked layers",
        "Cell carrier": "Alginate + Gelatin",
        "Verification": "MTT viability assays",
      },
    },
    {
      id: "study-3",
      title: "Bone Scaffold (Tri-Component)",
      fullname: "Pluronic-Assisted Alginate-Hydroxyapatite Bioink for 3D Bioprinting of Bone Tissue Scaffolds",
      problem: "Mono-component alginate shows poor extrusion stability and insufficient mechanical load profile for orthopedic defects.",
      approach: "Alginate + nano-HAp + Pluronic F-127 carrier, 22G nozzle, 65–90 kPa extrusion pressure.",
      metrics: {
        "Printability": "5/5 (Formulation F6)",
        "Filament Width": "398 ± 18 µm",
        "Total Porosity": "72.3% (macropores 340±65µm)",
        "Load Strength": "28x improvement (0.64 vs 0.15 MPa)",
        "Cell Viability": ">85% at Day 7 (MG-63)",
      },
    },
    {
      id: "study-4",
      title: "CQD-Chrysin Drug Delivery",
      fullname: "Loading Efficiency and Sustained Release of CQD-Chrysin Nanoconjugates",
      problem: "Inconsistent localized therapeutic concentrations in oncological target sites.",
      approach: "In-vitro mapping at pH 5, 37°C (simulated tumor environment).",
      metrics: {
        "Max loading efficiency": "64.3% (1:8 ratio)",
        "Base loading efficiency": "46.1% (1:2 ratio)",
        "Sustained release window": "49% over 36 hours",
      },
    },
    {
      id: "study-5",
      title: "GO-Chrysin Drug Delivery",
      fullname: "Loading Efficiency and Sustained Release of Graphene Oxide-Chrysin Nanoconjugates",
      problem: "Unstable colloidal transport and fast dissolution of bioactive flavonoids.",
      approach: "Structural hybrid verified via XRD crystal lattice shifts and FTIR surface conjugation spectra. High colloidal stability.",
      metrics: {
        "Structural verification": "XRD crystal lattice shift",
        "Spectroscopy validation": "FTIR surface conjugation",
        "Transport state": "High colloidal stability",
      },
    },
    {
      id: "study-6",
      title: "Advanced Organ Printing",
      fullname: "Synovial Lifting Scaffold Delivery System & Kidney Tissue Biofabrication Project",
      problem: "Massive biological transport blockages in thick bioprinted tissue constructs.",
      approach: "Comparative electrolyte and protein diffusion validation assays.",
      metrics: {
        "Modalities": "Synovial & Kidney biofabrication",
        "Validation assays": "Electrolyte & protein diffusion",
      },
    },
  ];

  const cases = [
    {
      id: "case-alpha",
      name: "Case Alpha — Bioresorbable Maxillofacial Implants",
      indication: "LeFort II Fracture Reconstruction (nasal, orbital, maxillary)",
      approach: "Patient-specific PLA-HAp resorbable fixation screws printed direct from DICOM CT imaging.",
      outcome: "HAp bone ingrowth: Months 3–6. PLA complete resorption: 12–34 months. No second surgery required.",
      timeline: ["Day 1: Custom implant insertion", "Months 3–6: HAp bone ingrowth", "Months 12–34: Complete PLA resorption"],
    },
    {
      id: "case-beta",
      name: "Case Beta — Non-Invasive Breast Cancer Screening",
      indication: "Early-stage breast cancer and permittivity abnormality mapping",
      approach: "Lightweight patch sensor powered by thermoelectric generators harvesting body heat. Real-time wireless data stream.",
      outcome: "Clinical screening costs reduced to <₹500 per session vs ₹5,000–₹25,000 legacy imaging.",
      timeline: ["Real-time data streaming", "Zero-power harvest design", "Sub-₹500 diagnostic threshold"],
    },
    {
      id: "case-gamma",
      name: "Case Gamma — Oncology Cytogenetic Mapping",
      indication: "Paclitaxel and radiation therapy tumor tracking",
      approach: "Chromosomal tracking maps target ACC loci.",
      outcome: "Shared cytogenetic locus identified at Chromosome 6q23: MYB (Breast ACC driver) + BCLAF1 (CMF fusion partner), with GRM1 adjacent at 6q24.",
      timeline: ["Locus focus: Chromosome 6q23", "Drivers: MYB + BCLAF1", "Adjacent driver: GRM1 (6q24)"],
    },
  ];

  const validationDashboard = [
    { metric: "Post-print cell viability", value: ">85%", method: "SEM + MTT assay" },
    { metric: "Bone scaffold porosity", value: "72.3%", method: "Mechanical characterization" },
    { metric: "Scaffold interconnectivity", value: ">95%", method: "Micro-CT" },
    { metric: "Compressive strength improvement", value: "28×", method: "Mechanical testing" },
    { metric: "Drug loading efficiency (max)", value: "64.3%", method: "NTA characterization" },
    { metric: "Sustained release window", value: "36 hours", method: "In-vitro assay" },
    { metric: "CNF particle size (DES)", value: "155.8 nm", method: "NTA" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-white">
        {/* Page Hero */}
        <section className="bg-clinical-surface border-b border-clinical-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  RESEARCH PORTFOLIO
                </span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-clinical-text sm:text-5xl">
                Science that moves <span className="font-semibold">medicine forward</span>.
              </h1>
              <p className="text-lg text-clinical-text/60 leading-relaxed font-light">
                Six active research programs. Three clinical translation case studies. All grounded in validated data.
              </p>
            </div>
          </div>
        </section>

        {/* Research Overview */}
        <section className="py-16 bg-white border-b border-clinical-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Microscope className="h-10 w-10 text-clinical-accent mx-auto mb-4" />
            <p className="text-lg md:text-xl text-clinical-text/80 font-light leading-relaxed">
              &ldquo;Celutron conducts interdisciplinary research spanning biomaterials, additive biofabrication, drug delivery nanoconjugates, and clinical implant translation. Every project targets a real unmet clinical need, with metrics validated through SEM imaging, MTT assays, molecular characterization, and mechanical testing.&rdquo;
            </p>
          </div>
        </section>

        {/* Active Studies Grid */}
        <section className="py-24 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  ACTIVE RESEARCH
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Current Programs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studies.map((study) => (
                <div
                  key={study.id}
                  className="border border-clinical-border bg-white p-8 flex flex-col justify-between hover:border-clinical-accent/30 transition-colors"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] font-bold text-clinical-accent uppercase tracking-widest block">
                      Program ID // {study.id.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-semibold text-clinical-text">
                      {study.title}
                    </h3>
                    <p className="text-xs text-clinical-text/50 font-mono italic leading-relaxed">
                      Nomenclature: {study.fullname}
                    </p>
                    <div className="space-y-2 pt-2">
                      <div className="text-xs">
                        <span className="font-bold text-clinical-text/75 block">Problem Parameter:</span>
                        <span className="text-clinical-text/60 font-light">{study.problem}</span>
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-clinical-text/75 block">Technical Approach:</span>
                        <span className="text-clinical-text/60 font-light">{study.approach}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spec List */}
                  <div className="mt-8 pt-6 border-t border-clinical-border">
                    <h4 className="font-mono text-[10px] font-bold text-clinical-text/30 uppercase tracking-wider mb-3">
                      Validated Program Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {Object.entries(study.metrics).map(([key, val]) => (
                        <div key={key} className="text-xs">
                          <span className="text-clinical-text/40 block font-mono text-[9px]">{key}:</span>
                          <span className="font-mono font-bold text-clinical-text">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Translation Section */}
        <section className="py-24 bg-white border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  CLINICAL TRANSLATION
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Implantable Scaffolds & Diagnostic Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((cs) => (
                <div
                  key={cs.id}
                  className="border border-clinical-border bg-clinical-surface p-8 flex flex-col justify-between hover:border-clinical-accent/30 transition-colors"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-clinical-text border-b border-clinical-border pb-3">
                      {cs.name}
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-clinical-text/75 block">Indication:</span>
                        <span className="text-clinical-text/60 font-light">{cs.indication}</span>
                      </div>
                      <div>
                        <span className="font-bold text-clinical-text/75 block">Methodology:</span>
                        <span className="text-clinical-text/60 font-light">{cs.approach}</span>
                      </div>
                      <div>
                        <span className="font-bold text-clinical-text/75 block">Clinical Outcome:</span>
                        <span className="text-clinical-text/60 font-light">{cs.outcome}</span>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal status line */}
                  <div className="mt-8 pt-6 border-t border-clinical-border">
                    <div className="text-[10px] font-mono font-bold text-clinical-text/30 uppercase mb-2">
                      Translation Sequence
                    </div>
                    <ul className="space-y-1">
                      {cs.timeline.map((step, sIdx) => (
                        <li key={sIdx} className="text-[11px] font-mono text-clinical-text/60 flex items-center gap-1.5">
                          <span className="h-1 w-1 bg-clinical-accent rounded-full" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validation Dashboard Grid */}
        <section className="py-24 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  VALIDATION
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Metric Integrity Dashboard
              </h2>
            </div>

            <div className="border border-clinical-border bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-clinical-border">
                  <thead className="bg-clinical-surface select-none">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left font-mono text-xs font-semibold tracking-wider text-clinical-text/45 uppercase">
                        Validated Parameter
                      </th>
                      <th scope="col" className="px-6 py-4 text-left font-mono text-xs font-semibold tracking-wider text-clinical-text/45 uppercase">
                        System Metric Value
                      </th>
                      <th scope="col" className="px-6 py-4 text-left font-mono text-xs font-semibold tracking-wider text-clinical-text/45 uppercase">
                        Assay Validation Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clinical-border bg-white">
                    {validationDashboard.map((row) => (
                      <tr key={row.metric} className="hover:bg-clinical-surface/40 transition-colors">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-clinical-text/80">
                          {row.metric}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-mono font-bold text-clinical-text">
                          {row.value}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-clinical-text/60 font-light">
                          {row.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborate CTA */}
        <section className="bg-clinical-accent text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              Working on <span className="font-semibold">something similar?</span>
            </h2>
            <p className="text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              We&apos;re open to joint research, university partnerships, and clinical collaborations.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?type=collaboration"
                className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-sm font-semibold text-clinical-accent hover:bg-transparent hover:text-white transition-all duration-200"
              >
                Let&apos;s Research Together
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
