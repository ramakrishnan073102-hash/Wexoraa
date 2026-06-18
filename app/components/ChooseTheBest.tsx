"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Lightbulb, Trophy, Users, Headset, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   CARD DATA 
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
      // ── CLEAN WHITE BACKGROUND ──
      className="relative w-full bg-white py-24 md:py-32 overflow-hidden font-['Manrope',_sans-serif]"
    >
      {/* Soft Ambient Glow (helps the glossy cards pop) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#86C232]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* ── HEADER SECTION ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          {/* Glossy Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border-[1.5px] border-[#86C232]/40 bg-[#86C232]/10 backdrop-blur-md rounded-[6px] px-5 py-2 text-[#86C232] text-[12px] font-extrabold uppercase tracking-[0.15em] mb-6 shadow-sm"
          >
            <Box size={14} strokeWidth={2.5} /> Choose The Best
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight max-w-2xl drop-shadow-sm"
          >
            Empowering Business<br /> with <span className="text-[#86C232]"> Expertise.</span>
          </motion.h2>
        </div>

        {/* ── GLOSSY FEATURES GRID ── */}
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
                /* ── ONLY CARDS ARE GLOSSY NOW ── */
                className="group/card flex flex-col h-full relative p-8 md:p-10 rounded-[10px] overflow-hidden bg-gradient-to-br from-[#86C232]/10 to-[#222629]/[0.03] backdrop-blur-xl border border-[#86C232]/20 shadow-[0_8px_32px_rgba(34,38,41,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#86C232]/40 hover:from-[#86C232]/15 hover:to-[#86C232]/10 hover:shadow-[0_25px_50px_-12px_rgba(134,194,50,0.15)]"
              >
                {/* Card internal glossy reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#86C232]/5 via-transparent to-transparent pointer-events-none z-0" />

                {/* Icon */}
                <div className="relative z-10 mb-8 text-[#86C232] transition-transform duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-1 origin-bottom-left">
                  <Icon size={52} strokeWidth={1.2} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-[1.35rem] font-extrabold text-[#222629] mb-4 tracking-tight transition-colors duration-300 group-hover/card:text-[#61892F]">
                    {feature.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.7] text-[#474B4F] font-medium mb-8">
                    {feature.desc}
                  </p>
                </div>

                {/* Read More Button */}
                <Link
                  href={feature.href}
                  className="relative z-10 group/btn inline-flex items-center gap-3 text-[#222629] font-bold text-[0.9rem] transition-colors hover:text-[#86C232] w-fit mt-auto"
                >
                  <span>Read More</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#86C232]/10 text-[#86C232] transition-all duration-300 group-hover/btn:bg-[#86C232] group-hover/btn:text-white">
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