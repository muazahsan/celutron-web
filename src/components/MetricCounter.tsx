"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/lib/hooks/useCountUp";

interface MetricCounterProps {
  value: string; // e.g., ">85%", "28x", "72.3%", "100-500µm"
  className?: string;
  trigger?: boolean;
}

export default function MetricCounter({ value, className = "", trigger }: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prefersReduced = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }, []);

  const numberRegex = /([0-9.]+)/;
  const match = value.match(numberRegex);

  const startOnView = trigger !== undefined ? trigger : isInView;
  const targetNumber = match ? parseFloat(match[0]) : 0;
  const count = useCountUp(targetNumber, 1.5, startOnView && !prefersReduced);

  if (!match || prefersReduced) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const numberIndex = match.index ?? 0;
  const prefix = value.substring(0, numberIndex);
  const suffix = value.substring(numberIndex + match[0].length);

  const isDecimal = match[0].includes(".");
  const formattedNumber = isDecimal ? count.toFixed(1) : Math.round(count).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedNumber}{suffix}
    </span>
  );
}

