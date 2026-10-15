"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Box, Lightbulb, Trophy, Users, Headset, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────
   CARD DATA
───────────────────────────────────────── */
const FEATURES_DATA = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Business-First Approach ",
    tagline: "Next-Gen Strategy",
    desc: "We understand your business before recommending the right solution. ",
    href:  "/about",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Technology + Marketing ",
    tagline: "Industry Recognition",
    desc: "Development, software and digital marketing—all under one team.",
    href:  "/services",
  },
  {
    id: 3,
    icon: Users,
    title: "Solutions Built Around You ",
    tagline: "Custom Tailored",
    desc: "No one-size-fits-all approach. We build around your goals and requirements.",
    href:  "/custom-software",
  },
  {
    id: 4,
    icon: Headset,
    title: "Support Beyond Delivery ",
    tagline: "Long-Term Growth",
    desc: "From launch to optimization and growth, we stay with your business.",
    href: "/contact",
  },
];

// Single static image for the left card
const STATIC_IMAGE = "/assets/img/choosethebest/choose.jpg";

/* ─────────────────────────────────────────
   MAIN SECTION COMPONENT
───────────────────────────────────────── */
export default function ChooseBestSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      // ── CLEAN WHITE BACKGROUND WITH RESPONSIVE PADDING ──
      className="relative w-full bg-white py-16 sm:py-24 md:py-32 overflow-hidden font-['Manrope',_sans-serif]"
    >
      {/* Soft Ambient Glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1200px] h-[700px] md:h-[900px] bg-[#86C232]/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />

      {/* EXACT NAVBAR ALIGNMENT: px-3 md:px-6 lg:px-10 */}
      <div className="w-full px-3 md:px-6 lg:px-10 mx-auto relative z-10">
        
        {/* ── HEADER SECTION ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-[#86C232] border border-[#86C232]/80 bg-[#86C232]/10 px-[14px] py-[4px] rounded-[4px] text-[11px] md:text-[15px] font-extrabold tracking-[0.3em] uppercase mb-5 md:mb-6 w-fit shadow-sm"
          >
            <Box size={16} strokeWidth={2.5} className="md:w-5 md:h-5 -mt-0.5" /> 
            Choose The Best
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#222629] leading-[1.2] md:leading-[1.15] tracking-tight max-w-2xl px-2"
          >
            One Partner.  Complete <br className="hidden sm:block" /><span className="text-[#86C232]"> Business Solutions.</span>
          </motion.h2>
        </div>

        {/* 
          ────────────────────────────────────────────────────────────
          BENTO SHOWCASE
          ──────────────────────────────────────────────────────────── 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 max-w-[1300px] mx-auto items-stretch">
          
          {/* ════════════════════════════════════════
             LEFT: PHOTO-ONLY SPOTLIGHT CARD (7 Columns)
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 relative overflow-hidden rounded-[24px] border border-[#86C232]/30 min-h-[480px]"
          >
            <img
              src={STATIC_IMAGE}
              alt="Dedicated Support"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* ════════════════════════════════════════
             RIGHT: INTERACTIVE SELECTION STACK (5 Columns)
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-4 justify-center"
          >
            {FEATURES_DATA.map((feature, index) => {
              const ItemIcon = feature.icon;
              const isSelected = activeIndex === index;

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex flex-col justify-center p-5 sm:p-6 rounded-[18px] cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#222629] text-white border-[#222629] shadow-xl md:translate-x-[-10px]"
                      : "bg-white text-[#222629] border-[#86C232]/20 hover:border-[#86C232]/50 hover:bg-[#F8FAF8]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      
                      {/* Mini Icon Box */}
                      <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isSelected ? "bg-[#86C232] text-[#222629]" : "bg-[#86C232]/10 text-[#86C232]"
                      }`}>
                        <ItemIcon size={22} strokeWidth={2} />
                      </div>

                      <div>
                        <h4 className={`text-base sm:text-lg font-extrabold tracking-tight transition-colors duration-300 ${
                          isSelected ? "text-white" : "text-[#222629]"
                        }`}>
                          {feature.title}
                        </h4>
                        
                        {/* Dynamic Subtitle */}
                        {!isSelected ? (
                          <p className="text-xs font-medium text-[#474B4F] transition-colors duration-300">
                            Click to view details
                          </p>
                        ) : (
                          <p className="text-xs font-bold text-[#86C232] uppercase tracking-wider mt-0.5">
                            {feature.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Passive Indicator Arrow (Hidden when active) */}
                    {!isSelected && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gray-100 text-gray-400 -rotate-45 transition-all duration-300">
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>

                  {/* ── EXPANDABLE CONTENT (Description + Learn More Button) ── */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-[4rem]">
                          <p className="text-[14.5px] text-white/80 leading-[1.7] font-medium mb-5 pr-2">
                            {feature.desc}
                          </p>
                          
                          {/* Signature Wexoraa "Learn More" Arrow Link */}
                          <Link 
                            href={feature.href}
                            className="group/link flex items-center gap-2.5 text-[14px] font-extrabold text-[#86C232] transition-colors duration-300 hover:text-white w-fit outline-none"
                          >
                            Learn More
                            <span className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 bg-[#86C232]/10 text-[#86C232] group-hover/link:bg-[#86C232] group-hover/link:text-[#222629]">
                              <ArrowRight 
                                size={15} 
                                strokeWidth={2.5} 
                                className="-rotate-45 transition-transform duration-300 group-hover/link:rotate-0" 
                              />
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}