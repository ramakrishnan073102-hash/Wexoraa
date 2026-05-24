"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";

/* ─────────────────────────────────────────
   PROCESS DATA 
───────────────────────────────────────── */
const PROCESS_STEPS = [
  {
    id: "01",
    step: "Step 01",
    title: "Discovery & Planning",
    desc: "The first step in our process is understanding your unique business needs, objectives, and our outcomes challenges.",
    margin: "md:mt-12",  
    lineHeight: "md:h-12", 
  },
  {
    id: "02",
    step: "Step 02",
    title: "Execution & Delivery",
    desc: "Once the plan is in place, our team moves forward with execution, turning strategies into actions to deliver.",
    margin: "md:mt-32",
    lineHeight: "md:h-32",
  },
  {
    id: "03",
    step: "Step 03",
    title: "Review & Support",
    desc: "After project completion, we conduct thorough review to ensure everything aligns with your goals and requirements.",
    margin: "md:mt-[13rem]",
    lineHeight: "md:h-[13rem]",
  },
];

/* ─────────────────────────────────────────
   LETTER-BY-LETTER SCROLL ANIMATION
───────────────────────────────────────── */
function LetterScrollAnimation({ text }: { text: string }): React.ReactElement {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  return (
    <motion.div className="inline-flex flex-wrap justify-center gap-x-[0.25em]" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span variants={child} key={letterIndex}>{letter}</motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN PROCESS SECTION
───────────────────────────────────────── */
export default function OurProcessSection(): React.ReactElement {
  return (
    // 1. OUTER WRAPPER: Set to clean White color
    <section className="relative w-full bg-white p-4 sm:p-6 md:p-10 overflow-hidden font-['Manrope',_sans-serif]">
      
      {/* 2. TOTAL SECTION BOX: MODIFIED to use Wexoraa Secondary Dark (#222629) */}
      <div className="w-full bg-[#222629] rounded-[40px] md:rounded-[60px] py-20 md:py-32 px-6 border-2 border-dashed border-white/10 relative overflow-hidden">
        
        {/* Soft Ambient Primary Green Glow inside the dark container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#86C232]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* ── HEADER SECTION ── */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[#86C232] text-xs font-extrabold uppercase tracking-[0.2em] mb-6"
            >
              <Box size={14} strokeWidth={2.5} /> Our Process
            </motion.div>
            
            {/* Header typography set to clean white over the dark background container */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.2] tracking-tight max-w-3xl mx-auto">
              <LetterScrollAnimation text="Seamless Process and Great Results." />
            </h2>
          </div>
          
          {/* ── STAGGERED TIMELINE WRAPPER ── */}
          <div className="relative pt-6">
            
            {/* Main Horizontal Dashed Line (Desktop Only) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-white/10 origin-left z-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10 w-full">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center md:items-start relative w-full group">
                  
                  {/* Step Pill */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex justify-center w-full relative z-20 mb-4 md:mb-0"
                  >
                    {/* Shadow mask matches the main dark box background color #222629 */}
                    <span className="bg-[#111316] border border-[#474B4F]/50 text-[#86C232] text-[0.85rem] font-extrabold px-8 py-2.5 rounded-full tracking-wide shadow-[0_0_0_8px_#222629]">
                      {step.step}
                    </span>
                  </motion.div>

                  {/* Vertical Connecting Line (Desktop) */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    className={`hidden md:block absolute top-[44px] left-1/2 -translate-x-1/2 w-[1px] border-l-2 border-dashed border-white/10 origin-top z-0 ${step.lineHeight}`}
                  />

                  {/* BOXY PROCESS CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative w-full p-8 md:p-10 rounded-[28px] bg-[#111316] border border-[#474B4F]/40 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#86C232]/50 group-hover:shadow-[0_25px_50px_-12px_rgba(134,194,50,0.25)] ${step.margin}`}
                  >
                    {/* Background Number */}
                    <div className="text-[90px] md:text-[110px] leading-[0.8] font-black tracking-tighter mb-6 bg-gradient-to-b from-[#86C232] to-[#111316] text-transparent bg-clip-text select-none">
                      {step.id}
                    </div>
                    
                    {/* Text Content */}
                    <div className="relative z-10">
                      <h3 className="text-[1.35rem] font-extrabold text-white mb-4 tracking-tight transition-colors duration-300 group-hover:text-[#86C232]">
                        {step.title}
                      </h3>
                      <p className="text-[0.95rem] leading-[1.7] text-[#6B6E70] font-medium transition-colors duration-300 group-hover:text-white/70">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}