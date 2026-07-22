"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Microscope,
  FlaskConical,
  Layers,
  Dna,
  HeartPulse,
  Atom,
  Beaker,
  TestTubes,
  BookOpen,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const productCategories = [
  {
    id: "bioprinters",
    label: "Bioprinters",
    icon: Microscope,
    color: "#0F766E",
    bg: "#F0FDFA",
    items: [
      {
        name: "BioTron V1",
        description: "Multi-cartridge industrial assembly",
        href: "/products/bioprinters/biotron-v1",
        icon: Atom,
      },
      {
        name: "BioTron V2",
        description: "Intelligent portable chamber",
        href: "/products/bioprinters/biotron-v2",
        icon: HeartPulse,
      },
    ],
  },
  {
    id: "bioinks",
    label: "Bioinks & Materials",
    icon: FlaskConical,
    color: "#047857",
    bg: "#ECFDF5",
    items: [
      {
        name: "Ready to Use",
        description: "Pre-optimised cell-laden hydrogels",
        href: "/products#bioinks",
        icon: Beaker,
      },
      {
        name: "Training Bioinks",
        description: "Calibration & workflow optimisation",
        href: "/products#bioinks",
        icon: TestTubes,
      },
      {
        name: "BioTron Inks",
        description: "Proprietary formulations",
        href: "/products#bioinks",
        icon: Dna,
      },
      {
        name: "Base Materials",
        description: "Collagen, GelMA & custom matrices",
        href: "/products#base-materials",
        icon: Layers,
      },
    ],
  },
];

const aboutItems = [
  {
    name: "Our Story",
    description: "Origins of precision bioprinting",
    href: "/about#story",
    icon: BookOpen,
  },
  {
    name: "Technology",
    description: "The science behind Celutron",
    href: "/about#technology",
    icon: Atom,
  },
  {
    name: "Founders",
    description: "Meet the team",
    href: "/about#founders",
    icon: Users,
  },
  {
    name: "Partners",
    description: "Global research network",
    href: "/about#partners",
    icon: Building2,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProductsMega({ close }: { close: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-clinical-text"
      style={{ width: 680 }}
    >
      {/* Arrow notch */}
      <div
        className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-clinical-border"
        style={{ zIndex: 1 }}
      />

      <div
        className="relative bg-white border border-clinical-border overflow-hidden"
        style={{
          boxShadow:
            "0 20px 60px -10px rgba(15,23,42,0.12), 0 4px 16px -4px rgba(15,23,42,0.06)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-clinical-border px-6 py-3 bg-clinical-surface">
          <span className="font-mono text-[10px] uppercase tracking-widest text-clinical-text/40 font-semibold">
            Celutron Platform
          </span>
          <Link
            href="/products"
            onClick={close}
            className="flex items-center gap-1 text-xs font-semibold text-clinical-accent hover:underline"
          >
            View all products <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Body */}
        <div className="grid grid-cols-2 divide-x divide-clinical-border">
          {productCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div key={cat.id} className="p-5">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded"
                    style={{ background: cat.bg }}
                  >
                    <CatIcon
                      className="w-4 h-4"
                      style={{ color: cat.color }}
                    />
                  </div>
                  <h3
                    className="font-semibold text-xs tracking-wider uppercase"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-1">
                  {cat.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-clinical-surface transition-colors duration-150"
                        >
                          <div
                            className="mt-0.5 flex items-center justify-center w-7 h-7 rounded shrink-0 transition-colors duration-150 group-hover:bg-white"
                            style={{ background: cat.bg }}
                          >
                            <ItemIcon
                              className="w-3.5 h-3.5"
                              style={{ color: cat.color }}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-clinical-text group-hover:text-clinical-accent transition-colors duration-150">
                              {item.name}
                            </div>
                            <div className="text-xs text-clinical-text/50 mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-clinical-border bg-clinical-surface px-6 py-3 flex items-center justify-between">
          <p className="text-xs text-clinical-text/50">
            Need a custom formulation or enterprise quote?
          </p>
          <Link
            href="/contact"
            onClick={close}
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-clinical-accent px-3 py-1.5 hover:opacity-90 transition-opacity"
          >
            Talk to us <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function AboutMega({ close }: { close: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-clinical-text"
      style={{ width: 360 }}
    >
      {/* Arrow notch */}
      <div
        className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-clinical-border"
        style={{ zIndex: 1 }}
      />

      <div
        className="relative bg-white border border-clinical-border overflow-hidden"
        style={{
          boxShadow:
            "0 20px 60px -10px rgba(15,23,42,0.12), 0 4px 16px -4px rgba(15,23,42,0.06)",
        }}
      >
        <div className="border-b border-clinical-border px-5 py-3 bg-clinical-surface">
          <span className="font-mono text-[10px] uppercase tracking-widest text-clinical-text/40 font-semibold">
            Company
          </span>
        </div>

        <ul className="p-3 space-y-1">
          {aboutItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-clinical-surface transition-colors duration-150"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded bg-[#EFF6FF] shrink-0">
                    <Icon className="w-4 h-4 text-clinical-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-clinical-text group-hover:text-clinical-accent transition-colors duration-150">
                      {item.name}
                    </div>
                    <div className="text-xs text-clinical-text/50 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

// ─── Main NavBar ──────────────────────────────────────────────────────────────

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "products" | "about" | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Keep transparent throughout the hero section (until user scrolls 60% of screen height)
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroTransparent = (pathname === "/" || pathname === "") && !isScrolled;

  const openDropdown = (name: "products" | "about") => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const close = () => setActiveDropdown(null);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isHeroTransparent
          ? "bg-transparent text-white border-b border-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-clinical-border text-clinical-text shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/celutron-logo-v2"
              alt="Celutron Logo"
              width={110}
              height={36}
              className={`h-8 w-auto object-contain transition-all duration-300 ${
                isHeroTransparent ? "invert mix-blend-screen" : "mix-blend-multiply"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Products — button navigates, hover shows mega */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("products")}
            onMouseLeave={scheduleClose}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1 text-sm font-semibold tracking-wider transition-colors py-5 uppercase ${
                isHeroTransparent
                  ? "text-white/90 hover:text-emerald-300"
                  : "text-clinical-text/80 hover:text-clinical-accent"
              }`}
            >
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === "products" ? "rotate-180" : ""
                } ${isHeroTransparent ? "text-white/70" : ""}`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "products" && (
                <div
                  onMouseEnter={() => openDropdown("products")}
                  onMouseLeave={scheduleClose}
                >
                  <ProductsMega close={close} />
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Research */}
          <Link
            href="/research"
            className={`text-sm font-semibold tracking-wider transition-colors uppercase ${
              isHeroTransparent
                ? "text-white/90 hover:text-emerald-300"
                : "text-clinical-text/80 hover:text-clinical-accent"
            }`}
          >
            Research
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            className={`text-[#09090B] font-sans text-xs font-bold tracking-widest transition-colors uppercase ${
              isHeroTransparent
                ? "text-white/90 hover:text-emerald-300"
                : "text-clinical-text/80 hover:text-clinical-accent"
            }`}
          >
            Careers
          </Link>

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("about")}
            onMouseLeave={scheduleClose}
          >
            <Link
              href="/about"
              className={`flex items-center gap-1 text-sm font-semibold tracking-wider transition-colors py-5 uppercase ${
                isHeroTransparent
                  ? "text-white/90 hover:text-emerald-300"
                  : "text-clinical-text/80 hover:text-clinical-accent"
              }`}
            >
              About
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === "about" ? "rotate-180" : ""
                } ${isHeroTransparent ? "text-white/70" : ""}`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "about" && (
                <div
                  onMouseEnter={() => openDropdown("about")}
                  onMouseLeave={scheduleClose}
                >
                  <AboutMega close={close} />
                </div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA - CONTACT US on Far Right like Reference */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest pb-0.5 transition-all duration-200 ${
              isHeroTransparent
                ? "text-white border-b-2 border-white hover:text-emerald-300 hover:border-emerald-300"
                : "text-clinical-text border-b-2 border-clinical-text hover:text-teal-800 hover:border-teal-800"
            }`}
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-clinical-text/80 hover:text-clinical-accent p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-clinical-border bg-white px-4 py-4 space-y-4"
          >
            {/* Products */}
            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-clinical-text/30 font-bold">
                  Products
                </span>
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold text-clinical-accent flex items-center gap-1"
                >
                  View all <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              {productCategories.flatMap((cat) =>
                cat.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors rounded-lg"
                    >
                      <ItemIcon className="w-4 h-4 text-clinical-accent shrink-0" />
                      {item.name}
                    </Link>
                  );
                })
              )}
            </div>

            {/* Company */}
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-clinical-text/30 font-bold px-3 py-1">
                Company
              </div>
              <Link
                href="/research"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors rounded-lg"
              >
                <BookOpen className="w-4 h-4 text-clinical-accent shrink-0" />
                Research
              </Link>
              {aboutItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors rounded-lg"
                  >
                    <Icon className="w-4 h-4 text-clinical-accent shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-clinical-text hover:bg-clinical-surface transition-colors rounded-lg"
              >
                <Users className="w-4 h-4 text-clinical-accent shrink-0" />
                Careers
              </Link>
            </div>

            <div className="pt-2 border-t border-clinical-border">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full border border-teal-900 bg-teal-900 px-4 py-2.5 text-sm font-semibold text-white uppercase tracking-wider transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
