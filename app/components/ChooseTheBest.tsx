"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Lightbulb, Trophy, Users, Headset, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   CARD DATA (All routes set to dummy "#" to avoid 404 errors)
───────────────────────────────────────── */
const FEATURES_DATA = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Innovative Solutions",
    desc: "Stay ahead of the curve leveraging cutting-edge technologies and strategies to keep your business growing.",
    href: "#",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Award-Winning",
    desc: "Recognized by industry leaders, our award-winning team has a proven track record of excellence.",
    href: "#",
  },
  {
    id: 3,
    icon: Users,
    title: "Expert Team",
    desc: "Our team is always available to address your concerns, providing quick and effective solutions.",
    href: "#",
  },
  {
    id: 4,
    icon: Headset,
    title: "Dedicated Support",
    desc: "Our team is always available to address your concerns, providing quick and effective support 24/7.",
    href: "#",
  },
];

/* ─────────────────────────────────────────
   MAIN SECTION COMPONENT
───────────────────────────────────────── */
export default function ChooseBestSection(): React.ReactElement {
  return (
    <section 
      // MODIFIED: Changed main outer background to clean white
      className="relative w-full bg-white py-24 md:py-32 overflow-hidden" 
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Soft Ambient Glow optimized for white background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#86C232]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* ── HEADER SECTION ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[#86C232] text-xs font-extrabold uppercase tracking-[0.2em] mb-4 md:mb-6"
          >
            <Box size={14} strokeWidth={2.5} /> Choose The Best
          </motion.div>
          
          {/* MODIFIED: Header typography inverted to dark secondary color (#222629) */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#222629] leading-[1.2] tracking-tight max-w-2xl"
          >
            Empowering Business<br /> with <span className="text-[#86C232]"> Expertise.</span>
          </motion.h2>
        </div>

        {/* ── FEATURES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {FEATURES_DATA.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                // STABLE: Retained distinct card architecture bg-[#222629] to produce high contrast box items over white background
                className="group/card flex flex-col h-full bg-[#222629] p-8 md:p-10 rounded-2xl border border-[#474B4F]/40 transition-all duration-300 hover:-translate-y-2 hover:border-[#86C232]/50 hover:shadow-[0_25px_50px_-12px_rgba(134,194,50,0.15)]"
              >
                {/* Large Thin Icon */}
                <div className="mb-8 text-[#86C232] transition-transform duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-1 origin-bottom-left">
                  <Icon size={52} strokeWidth={1.2} />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl md:text-[1.35rem] font-extrabold text-white mb-4 tracking-tight transition-colors duration-300 group-hover/card:text-[#86C232]">
                    {feature.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.7] text-[#6B6E70] font-medium mb-8">
                    {feature.desc}
                  </p>
                </div>

                {/* Read More Button */}
                <Link
                  href={feature.href}
                  className="group/btn inline-flex items-center gap-3 text-white font-bold text-[0.9rem] transition-colors hover:text-[#86C232] w-fit mt-auto"
                >
                  <span>Read More</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#474B4F]/40 text-[#86C232] transition-all duration-300 group-hover/btn:bg-[#86C232] group-hover/btn:text-[#222629]">
                    {/* Arrow starts pointing Up-Right (-rotate-45), snaps to Straight-Right (rotate-0) on hover */}
                    <ArrowRight 
                      size={14} 
                      strokeWidth={2.5} 
                      className="-rotate-45 transition-transform duration-300 group-hover/btn:rotate-0" 
                    />
                  </span>
                </Link>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}