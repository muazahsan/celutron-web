"use client";

import React from "react";
import Image from "next/image";
import { Landmark } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TimelineHorizontal from "@/components/TimelineHorizontal";
import TechTabSwitcher from "@/components/TechTabSwitcher";

export default function AboutPage() {
  const founders = [
    {
      name: "Dr. Gowthami Jawahar",
      role: "FOUNDER & CEO",
      focus: "Regenerative medicine, tissue engineering, patient-focused innovation",
      photo: "/assets/founder-gowthami.jpg",
    },
    {
      name: "Dr. Shashank Chetty",
      role: "CO-FOUNDER",
      focus: "Biomedical research, biofabrication systems",
      photo: "/assets/founder-shashank.jpg",
    },
    {
      name: "Dr. Pradeepkumar Sundarraj, PhD",
      role: "SCIENTIFIC & ENGINEERING ADVISOR",
      focus: "Mechanical engineering, thermodynamics, additive manufacturing, precision systems",
      photo: "/assets/advisor-pradeep.jpg",
    },
    {
      name: "Dr. Prashanth K.K.",
      role: "CLINICAL & MEDICAL ADVISOR",
      focus: "Clinical validation, medical research, regulatory alignment",
      photo: "/assets/advisor-prashanth.jpg",
    },
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
                  ABOUT CELUTRON
                </span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-clinical-text sm:text-5xl">
                Built in a lab. <span className="font-semibold">Driven by a mission.</span>
              </h1>
              <p className="text-lg text-clinical-text/60 leading-relaxed font-light">
                Celutron was founded to solve the organ shortage — one bioprinted tissue construct at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative & Mission */}
        <section id="story" className="py-24 bg-white border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Narrative paragraphs Left */}
              <div className="lg:col-span-7 space-y-6 text-sm text-clinical-text/70 leading-relaxed font-light">
                <h3 className="font-mono text-xs font-bold text-clinical-text/30 uppercase tracking-widest mb-2 select-none">
                  Corporate Narrative
                </h3>
                <p>
                  Celutron Innovations was established with a singular, clear-cut imperative: to bridge the critical shortage in transplantable human tissues. Every year, thousands of patients lose their lives while on organ waiting lists. By developing advanced biomaterials and precise benchtop bioprinting hardware, we aim to make tissue fabrication accessible and routine.
                </p>
                <p>
                  Our system combines structural engineering, advanced cell biology, and clinical translation protocols. We develop patient-specific hydrogel carriers that house cell lines, allowing researchers to print structural scaffolds with extreme viability rates.
                </p>
                <p>
                  Based in Chennai, India, and incubated at the Crescent Innovation & Incubation Centre (CIIC), Celutron is supported by an interdisciplinary team of biomedical engineers, mechanical systems designers, and clinical researchers. We are focused on translating academic laboratory breakthroughs into verified medical devices.
                </p>
              </div>

              {/* Mission/Vision Box Right */}
              <div className="lg:col-span-5 border border-clinical-border bg-clinical-surface p-8 space-y-8">
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase mb-2">
                    Our Mission
                  </h4>
                  <p className="text-sm font-medium text-clinical-text leading-relaxed">
                    &ldquo;To make patient-specific tissue engineering accessible, reproducible, and clinically deployable.&rdquo;
                  </p>
                </div>
                <div className="border-t border-clinical-border/50 pt-6">
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase mb-2">
                    Our Vision
                  </h4>
                  <p className="text-sm font-medium text-clinical-text leading-relaxed">
                    &ldquo;A future where no patient dies waiting for a transplant.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  MILESTONES
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                Evolutionary Timeline
              </h2>
            </div>

            <TimelineHorizontal />
          </div>
        </section>

        {/* Technology Details */}
        <section id="technology" className="py-24 bg-white border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  TECHNOLOGY
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                How Celutron builds tissue.
              </h2>
            </div>

            {/* Switcher and details */}
            <div className="space-y-16">
              <div>
                <h3 className="font-mono text-xs font-semibold tracking-wider text-clinical-text/40 uppercase mb-4">
                  Subsection 1 // Bioprinting Modalities
                </h3>
                <TechTabSwitcher />
              </div>

              {/* Grid with subsections 2, 3, 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Bioink Systems */}
                <div className="border border-clinical-border bg-clinical-surface p-8 space-y-4">
                  <span className="font-mono text-[10px] font-bold text-clinical-accent uppercase tracking-widest">
                    SYSTEM // 02
                  </span>
                  <h4 className="text-lg font-bold text-clinical-text">
                    Bioink Systems
                  </h4>
                  <ul className="space-y-2 text-xs text-clinical-text/75 font-light leading-relaxed">
                    <li className="list-disc list-inside">dECM gold standard formulation</li>
                    <li className="list-disc list-inside">GMP-grade sterile manufacture</li>
                    <li className="list-disc list-inside">Patient-specific hydrogel tuning</li>
                    <li className="list-disc list-inside">Carriers: Alginate, Gelatin, Fibrin, Hyaluronic Acid</li>
                  </ul>
                </div>

                {/* Scaffold Engineering */}
                <div className="border border-clinical-border bg-clinical-surface p-8 space-y-4">
                  <span className="font-mono text-[10px] font-bold text-clinical-accent uppercase tracking-widest">
                    SYSTEM // 03
                  </span>
                  <h4 className="text-lg font-bold text-clinical-text">
                    Scaffold Engineering
                  </h4>
                  <ul className="space-y-2 text-xs text-clinical-text/75 font-light leading-relaxed">
                    <li className="list-disc list-inside">Hard tissue: 100–500µm interconnected macropores</li>
                    <li className="list-disc list-inside">Soft tissue: 20–100µm microporosity channels</li>
                    <li className="list-disc list-inside">Materials: PCL, PLGA, Type-I Collagen, Nano-HAp (bioresorbable)</li>
                  </ul>
                </div>

                {/* FRESH Bioprinting */}
                <div className="border border-clinical-border bg-clinical-surface p-8 space-y-4">
                  <span className="font-mono text-[10px] font-bold text-clinical-accent uppercase tracking-widest">
                    SYSTEM // 04
                  </span>
                  <h4 className="text-lg font-bold text-clinical-text">
                    FRESH Bioprinting
                  </h4>
                  <ul className="space-y-2 text-xs text-clinical-text/75 font-light leading-relaxed">
                    <li className="list-disc list-inside">Support bath printing</li>
                    <li className="list-disc list-inside">Hydrogel stabilization for complex structures</li>
                    <li className="list-disc list-inside">Cell viability optimization under support conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Registry */}
        <section id="founders" className="py-24 bg-clinical-surface border-b border-clinical-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-clinical-accent" />
                <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                  OUR TEAM
                </span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-clinical-text">
                The people behind the platform.
              </h2>
            </div>

            {/* Founder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {founders.map((member) => (
                <div
                  key={member.name}
                  className="border border-clinical-border bg-white overflow-hidden hover:border-clinical-accent/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/5] bg-clinical-surface overflow-hidden border-b border-clinical-border">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-clinical-text leading-tight">
                          {member.name}
                        </h3>
                        <span className="font-mono text-[9px] font-bold text-clinical-accent uppercase tracking-wider block mt-1">
                          {member.role}
                        </span>
                      </div>
                      <p className="text-xs text-clinical-text/60 leading-relaxed font-light">
                        {member.focus}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem/Incubation */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-clinical-accent" />
              <span className="font-mono text-xs font-semibold tracking-wider text-clinical-accent uppercase">
                ECOSYSTEM
              </span>
            </div>
            <Landmark className="h-8 w-8 text-clinical-accent mx-auto" />
            <h3 className="text-xl font-normal text-clinical-text">
              Incubated at CIIC
            </h3>
            <p className="text-sm text-clinical-text/60 font-light max-w-md mx-auto">
              Celutron is proudly incubated at the Crescent Innovation & Incubation Centre (CIIC) in Chennai, India, offering access to high-end diagnostic and fabrication infrastructure.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
