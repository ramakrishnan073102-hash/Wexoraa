"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  Box, 
  ArrowRight,
  ChevronsRight
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   PRICING DATA
────────────────────────────────────────────────────────── */
const PRICING_PLANS = [
  {
    id: 1,
    name: "Basic Plan",
    desc: "Essential Business Services",
    price: "149",
    popular: false,
    features: [
      "Core business services",
      "Basic customer support (email)",
      "1 project per month",
      "Basic reporting and analytics",
      "Access to templates and tools",
      "Basic performance tracking"
    ]
  },
  {
    id: 2,
    name: "Standard Plan",
    desc: "Complete Business Solutions",
    price: "249",
    popular: true,
    features: [
      "All features in Basic Plan",
      "Priority customer support",
      "Up to 3 projects per month",
      "Monthly performance reviews",
      "Collaboration tools for team",
      "Custom templates"
    ]
  },
  {
    id: 3,
    name: "Premium Plan",
    desc: "Advanced Business Services",
    price: "499",
    popular: false,
    features: [
      "All features in Standard Plan",
      "Dedicated account manager",
      "Tailored strategy sessions",
      "Quarterly performance audits",
      "Priority support",
      "24/7 emergency services"
    ]
  }
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function PricingPage(): React.ReactElement {
  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-32">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[15px][10px] flex items-center justify-center overflow-hidden shadow-sm">
          
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          {/* Main Background Gradient using Secondary Dark & Accent Green */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Pricing Plan
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors">
                <Home size={16} /> Home
              </Link>
              <ChevronRight size={16} className="text-white/40 mx-1" />
              <span className="text-white font-bold">Pricing Plan</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. PRICING CARDS SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[#86C232] text-xs font-black uppercase tracking-[0.2em] mb-4 bg-[#86C232]/10 px-3 py-1.5 rounded-sm border border-[#86C232]/20 w-fit mx-auto"
          >
            <Box size={14} strokeWidth={2.5} /> Pricing Plan
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-extrabold text-[#222629] tracking-tight leading-[1.1]"
          >
            Our Pricing <span className="text-[#86C232]">Plan.</span>
          </motion.h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {PRICING_PLANS.map((plan, i) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col rounded-[32px] p-8 lg:p-10 transition-all duration-300 ${
                  isPopular 
                    ? "bg-[#61892F] shadow-[0_20px_50px_rgba(97,137,47,0.3)] md:scale-105 z-10 py-10 lg:py-14" 
                    : "bg-white border border-[#474B4F]/10 shadow-[0_10px_30px_rgba(34,38,41,0.04)]"
                }`}
              >
                
                {/* Plan Title & Desc */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-extrabold mb-2 ${isPopular ? "text-white" : "text-[#222629]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-[15px] font-medium ${isPopular ? "text-white/80" : "text-[#6B6E70]"}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-start gap-1 mb-8">
                  <span className={`text-2xl font-extrabold mt-1 ${isPopular ? "text-white" : "text-[#222629]"}`}>
                    $
                  </span>
                  <span className={`text-[4rem] font-black leading-none tracking-tighter ${isPopular ? "text-white" : "text-[#222629]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[15px] font-bold mt-auto mb-2 ml-1 ${isPopular ? "text-white/80" : "text-[#6B6E70]"}`}>
                    /per month
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="contact"
                  className={`group flex items-center justify-center gap-3 w-full p-2 pl-6 pr-2 rounded-full font-bold text-[15px] transition-all duration-300 mb-10 ${
                    isPopular
                      ? "bg-white text-[#222629] shadow-lg"
                      : "bg-transparent border-2 border-[#474B4F]/10 text-[#222629] hover:border-[#474B4F]/30"
                  }`}
                >
                  <span className="flex-1 text-center pr-2">Choose Plan</span>
                  <span className="w-11 h-11 rounded-full bg-[#86C232] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#222629]">
                    {/* FIXED: Starts up-right (-rotate-45) and rotates to horizontal right (rotate-0) on hover */}
                    <ArrowRight 
                      size={18} 
                      strokeWidth={2.5} 
                      className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                    />
                  </span>
                </Link>

                {/* Features List */}
                <div className="flex flex-col gap-4 mt-auto">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronsRight 
                        size={18} 
                        strokeWidth={3} 
                        className={`flex-shrink-0 mt-0.5 ${isPopular ? "text-white" : "text-[#86C232]"}`} 
                      />
                      <span className={`text-[15px] font-semibold leading-snug ${isPopular ? "text-white/95" : "text-[#474B4F]"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

    </main>
  );
}