import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f8fafc] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/celutron-logo-v2"
                alt="Celutron Logo"
                width={110}
                height={35}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-medium text-zinc-600 max-w-sm leading-relaxed">
              Engineering the Future of Human Tissue Regeneration. Advanced bioprinting systems and clinical-grade patient-specific bioinks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-wider text-teal-700 uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-zinc-600 hover:text-teal-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-zinc-600 hover:text-teal-600 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-zinc-600 hover:text-teal-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-wider text-teal-700 uppercase mb-4">
              Clinical HQ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-600 break-all select-all">
                  gowthamijawahar@celutron.in
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-600 select-all">
                  +91 91763 48990
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-600">
                  Incubated at CIIC, Chennai, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="mt-12 border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; 2025 Celutron Innovations Private Limited. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-teal-800/60 font-mono">
              Chennai base
            </span>
            <span className="text-xs text-teal-800/60 font-mono">
              CIIC incubated
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
