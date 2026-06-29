"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
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
                  CONTACT CHANNELS
                </span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-clinical-text sm:text-5xl">
                Initiate <span className="font-semibold">transmission</span>.
              </h1>
              <p className="text-lg text-clinical-text/60 leading-relaxed font-light">
                Establish contact with our clinical coordination office.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              {/* Form Left */}
              <div className="lg:col-span-7">
                <div className="space-y-4 mb-8">
                  <h2 className="text-2xl font-light text-clinical-text">
                    Digital <span className="font-semibold">Inquiry Portal</span>
                  </h2>
                  <p className="text-sm text-clinical-text/60 font-light">
                    Complete all marked fields to transmit your request to our regional laboratory system.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* HQ Information Right */}
              <div className="lg:col-span-5 space-y-8 lg:pl-8">
                {/* Info Panel */}
                <div className="border border-clinical-border bg-clinical-surface p-8 space-y-6">
                  <h3 className="font-mono text-xs font-bold text-clinical-accent uppercase tracking-widest border-b border-clinical-border pb-3">
                    CLINICAL HQ / INCUBATION
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-clinical-accent shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <span className="font-semibold text-clinical-text block">Registered Address:</span>
                        <span className="text-clinical-text/75 font-light leading-relaxed block">
                          Celutron Innovations Private Limited<br />
                          Crescent Innovation & Incubation Centre (CIIC)<br />
                          BSA Crescent Institute of Science and Technology<br />
                          Seethakathi Estate, Vandalur, Chennai – 600048, Tamil Nadu, India.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-clinical-accent shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <span className="font-semibold text-clinical-text block">Electronic Mail:</span>
                        <span className="text-clinical-accent select-all block font-medium">
                          gowthamijawahar@celutron.in
                        </span>
                        <span className="text-clinical-text/50 select-all block text-xs">
                          info@celutron.in (General inquiries)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-clinical-accent shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <span className="font-semibold text-clinical-text block">Voice Contact:</span>
                        <span className="text-clinical-text/75 font-medium select-all block">
                          +91 91763 48990
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-clinical-accent shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <span className="font-semibold text-clinical-text block">Hours of Operation:</span>
                        <span className="text-clinical-text/60 font-light block">
                          Monday – Friday: 09:00 – 17:30 IST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coordinate Map Panel */}
                <div className="border border-clinical-border bg-white p-6 space-y-3">
                  <h4 className="font-mono text-[10px] font-bold text-clinical-text/40 uppercase tracking-wider">
                    HQ Coordinates / Positioning
                  </h4>
                  <div className="bg-clinical-surface border border-clinical-border px-4 py-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-clinical-accent">
                      LAT/LONG
                    </span>
                    <span className="font-mono text-xs font-bold text-clinical-text">
                      12.8715° N, 80.0827° E
                    </span>
                  </div>
                  <p className="text-[11px] text-clinical-text/50 leading-relaxed font-light">
                    CIIC is situated adjacent to Vandalur Zoo, easily accessible via GST Road in Chennai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
