"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Printer, Droplet, Box, Users, Microscope, ArrowRight } from "lucide-react"

// Inline utility
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Inline Card components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

interface ServiceItem {
  id: string
  number: string
  icon: React.ElementType
  title: string
  description: string
  features: string[]
}

interface CelutronServicesProps {
  services?: ServiceItem[]
  sectionTitle?: string
  sectionSubtitle?: string
  className?: string
}

const defaultServices: ServiceItem[] = [
  {
    id: "bioprinting",
    number: "01",
    icon: Printer,
    title: "Bioprinting Systems",
    description: "State-of-the-art 3D bioprinting platforms engineered for precision tissue fabrication and cellular architecture.",
    features: ["Multi-material extrusion", "Automated calibration", "Real-time monitoring"]
  },
  {
    id: "bioink",
    number: "02",
    icon: Droplet,
    title: "Bioink Supply",
    description: "Clinical-grade bioinks formulated for optimal cell viability, printability, and tissue-specific applications.",
    features: ["GMP-certified materials", "Custom formulations", "Quality assurance"]
  },
  {
    id: "scaffold",
    number: "03",
    icon: Box,
    title: "Scaffold Fabrication",
    description: "Advanced scaffold manufacturing services delivering precise geometries for tissue engineering applications.",
    features: ["Custom architectures", "Biocompatible materials", "Sterile processing"]
  },
  {
    id: "research",
    number: "04",
    icon: Users,
    title: "Research Collaboration",
    description: "Strategic partnerships with academic and industry leaders to advance bioprinting technology and applications.",
    features: ["Joint development", "IP protection", "Resource sharing"]
  },
  {
    id: "clinical",
    number: "05",
    icon: Microscope,
    title: "Clinical Translation",
    description: "Comprehensive support for translating bioprinting innovations from laboratory to clinical implementation.",
    features: ["Regulatory guidance", "Clinical trials", "Market strategy"]
  }
]

export default function WhatWeProvide({
  services = defaultServices,
  sectionTitle = "What We Provide",
  sectionSubtitle = "Comprehensive bioprinting solutions engineered for precision, reliability, and clinical excellence",
  className
}: CelutronServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative py-24 sm:py-32 bg-background text-foreground overflow-hidden",
        className
      )}
      role="region"
      aria-label="Services"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            CLINICAL-GRADE SOLUTIONS
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {sectionTitle}
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="relative h-full flex flex-col border border-border bg-card hover:bg-accent/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-border bg-background flex items-center justify-center font-mono text-sm font-bold text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                  {service.number}
                </div>

                <CardHeader className="relative pb-4 pt-6 px-6">
                  <div className="mb-4 p-3 w-fit rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative flex-grow px-6 pb-6 flex flex-col">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>

                  {/* Features list */}
                  <div className="mt-auto space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Ready to advance your bioprinting capabilities?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
