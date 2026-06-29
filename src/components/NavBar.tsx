"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<"products" | "about" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-clinical-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Left */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/celutron-logo-v2"
              alt="Celutron Logo"
              width={100}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Center (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-clinical-text/80 hover:text-clinical-accent transition-colors py-5">
              Products
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[480px] border border-clinical-border bg-white p-6 grid grid-cols-2 gap-8"
                  style={{ boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)" }}
                >
                  {/* Bioprinters */}
                  <div>
                    <h3 className="font-mono text-xs font-semibold tracking-wider text-clinical-text/40 uppercase mb-3">
                      Bioprinters
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/products/bioprinters/biotron-v1"
                          onClick={() => setActiveDropdown(null)}
                          className="group block"
                        >
                          <div className="text-sm font-medium text-clinical-text hover:text-clinical-accent transition-colors">
                            BioTron V1
                          </div>
                          <div className="text-xs text-clinical-text/50">
                            Multi-cartridge assembly
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/bioprinters/biotron-v2"
                          onClick={() => setActiveDropdown(null)}
                          className="group block"
                        >
                          <div className="text-sm font-medium text-clinical-text hover:text-clinical-accent transition-colors">
                            BioTron V2
                          </div>
                          <div className="text-xs text-clinical-text/50">
                            Intelligent portable chamber
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Bioinks */}
                  <div>
                    <h3 className="font-mono text-xs font-semibold tracking-wider text-clinical-text/40 uppercase mb-3">
                      Bioinks & Materials
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/products#bioinks"
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-0.5"
                        >
                          Ready to Use
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products#bioinks"
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-0.5"
                        >
                          Training Bioinks
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products#bioinks"
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-0.5"
                        >
                          BioTron Inks
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products#base-materials"
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-0.5"
                        >
                          Base Materials
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-clinical-accent font-medium hover:underline py-0.5"
                        >
                          Custom Formulation →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Research */}
          <Link
            href="/research"
            className="text-sm font-medium text-clinical-text/80 hover:text-clinical-accent transition-colors"
          >
            Research
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-clinical-text/80 hover:text-clinical-accent transition-colors py-5">
              About
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full w-48 border border-clinical-border bg-white p-4 space-y-2"
                  style={{ boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)" }}
                >
                  <Link
                    href="/about#story"
                    onClick={() => setActiveDropdown(null)}
                    className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-1"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about#technology"
                    onClick={() => setActiveDropdown(null)}
                    className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-1"
                  >
                    Technology
                  </Link>
                  <Link
                    href="/about#founders"
                    onClick={() => setActiveDropdown(null)}
                    className="block text-sm text-clinical-text hover:text-clinical-accent transition-colors py-1"
                  >
                    Founders
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-medium text-clinical-text/80 hover:text-clinical-accent transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Right */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-clinical-accent bg-clinical-accent px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-clinical-accent transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-clinical-text/80 hover:text-clinical-accent p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-clinical-border bg-white px-4 py-4 space-y-4"
          >
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-clinical-text/30 font-bold px-3 py-1">
                Products
              </div>
              <Link
                href="/products/bioprinters/biotron-v1"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors"
              >
                BioTron V1 (Industrial)
              </Link>
              <Link
                href="/products/bioprinters/biotron-v2"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors"
              >
                BioTron V2 (Portable)
              </Link>
              <Link
                href="/products#bioinks"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors"
              >
                Bioinks & Materials
              </Link>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-clinical-text/30 font-bold px-3 py-1">
                Company
              </div>
              <Link
                href="/research"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors"
              >
                Research
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-clinical-border">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full border border-clinical-accent bg-clinical-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-transparent hover:text-clinical-accent transition-all duration-200"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
