"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollaborateCTAProps {
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CollaborateCTA({
  badge = "JOINT SCIENTIFIC VENTURES",
  titlePrefix = "Ready to ",
  titleHighlight = "collaborate?",
  subtitle = "Whether you're a researcher, hospital, or investor — let's build something that matters.",
  primaryButtonText = "Get In Touch",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
}: CollaborateCTAProps) {
  return (
    <section className={`bg-[#060709] text-white py-24 sm:py-32 relative overflow-hidden ${className}`}>
      {/* High-fidelity scientific background matrix grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#060709]" />

        {/* Matrix Grid Pattern SVG */}
        <svg className="absolute inset-0 w-full h-full stroke-emerald-500/20 opacity-80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-matrix-pattern" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" strokeWidth="0.8" />
              {/* Matrix intersection dots */}
              <circle cx="0" cy="0" r="1.5" fill="#00d09c" className="opacity-60" />
              <circle cx="36" cy="36" r="1.5" fill="#00d09c" className="opacity-60" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-matrix-pattern)" />
        </svg>

        {/* Subtle center spotlight gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00d09c]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Pill Badge Tag */}
        {badge && (
          <div>
            <span className="inline-flex items-center rounded-full border border-teal-500/40 bg-teal-950/40 px-4 py-1.5 text-xs font-mono tracking-wider text-teal-400 uppercase shadow-sm">
              {badge}
            </span>
          </div>
        )}

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
          {titlePrefix}
          <span className="font-bold text-[#00d09c]">{titleHighlight}</span>
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
          {primaryButtonText && primaryButtonHref && (
            <Link
              href={primaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00d09c] hover:bg-[#00b889] text-zinc-950 font-bold px-7 py-3.5 text-sm sm:text-base transition-colors duration-200 shadow-md"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}

          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center border border-zinc-700 bg-zinc-950/80 hover:border-zinc-500 hover:bg-zinc-900 text-zinc-100 font-semibold px-7 py-3.5 text-sm sm:text-base transition-colors duration-200"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
