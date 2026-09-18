"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Lightbulb, Trophy, Users, Headset, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────
   CARD DATA
───────────────────────────────────────── */
const FEATURES_DATA = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Innovative Solutions",
    tagline: "Next-Gen Strategy",
    desc: "Stay ahead of the curve leveraging cutting-edge technologies and strategies to keep your business growing exponentially in a competitive digital landscape.",
    href: "#",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Award-Winning",
    tagline: "Industry Recognition",
    desc: "Recognized by industry leaders, our award-winning team has a proven track record of delivering world-class excellence and exceptional ROI.",
    href: "#",
  },
  {
    id: 3,
    icon: Users,
    title: "Expert Team",
    desc: "Our dedicated professionals bring decades of combined experience, providing fast, scalable, and effective solutions tailored to your unique stack.",
    href: "#",
  },
  {
    id: 4,
    icon: Headset,
    title: "Dedicated Support",
    desc: "Experience ultimate peace of mind with our round-the-clock priority technical support, ensuring your systems run smoothly 24/7.",
    href: "#",
  },
];

// Single static image for the left card
const STATIC_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80";

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
          {/* Glossy Badge (Shadow Removed) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border-[1.5px] border-[#86C232]/40 bg-[#86C232]/10 backdrop-blur-md rounded-[6px] px-4 md:px-5 py-2 text-[#86C232] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[0.15em] mb-5 md:mb-6"
          >
            <Box size={14} strokeWidth={2.5} /> Choose The Best
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#222629] leading-[1.2] md:leading-[1.15] tracking-tight max-w-2xl px-2"
          >
            Empowering Business<br className="hidden sm:block" /> with <span className="text-[#86C232]"> Expertise.</span>
          </motion.h2>
        </div>

        {/* 
          ────────────────────────────────────────────────────────────
          BENTO SHOWCASE — SHADOWS REMOVED
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
            className="lg:col-span-5 flex flex-col gap-4 justify-between"
          >
            {FEATURES_DATA.map((feature, index) => {
              const ItemIcon = feature.icon;
              const isSelected = activeIndex === index;

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center justify-between p-5 sm:p-6 rounded-[18px] cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#222629] text-white border-[#222629] translate-x-1"
                      : "bg-white text-[#222629] border-[#86C232]/20 hover:border-[#86C232]/50 hover:bg-[#F8FAF8]"
                  }`}
                >
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
                      <p className={`text-xs font-medium transition-colors duration-300 ${
                        isSelected ? "text-white/70" : "text-[#474B4F]"
                      }`}>
                        Click to view details
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected ? "bg-white/10 text-[#86C232] rotate-0" : "bg-gray-100 text-gray-400 -rotate-45"
                  }`}>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}