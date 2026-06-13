"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const HISTORY_DATA = [
  {
    id: 1,
    year: "2008",
    step: "01",
    title: "Founding and Early Years",
    desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 2,
    year: "2012",
    step: "02",
    title: "Expansion and Growth",
    desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 3,
    year: "2016",
    step: "03",
    title: "Innovation and Industry Leadership",
    desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 4,
    year: "2020",
    step: "04",
    title: "Global Expansion and Diversification",
    desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
    images: [
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    id: 5,
    year: "2024",
    step: "05",
    title: "Looking Ahead",
    desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
    images: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    ],
  },
];

/* ──────────────────────────────────────────────────────────
   REUSABLE CTA BUTTON
────────────────────────────────────────────────────────── */
function CtaButton({ text, href = "#" }: { text: string; href?: string }): React.ReactElement {
  return (
    <Link
      href={href}
      className="group/cta inline-flex items-center justify-between bg-[#86C232] text-[#111316] rounded-full p-2 pl-7 pr-2.5 text-base font-bold w-fit transition-all duration-300 hover:shadow-[0_12px_32px_rgba(134,194,50,0.25)] hover:bg-[#61892F] outline-none"
    >
      <span className="relative block overflow-hidden h-5 min-w-[100px] mr-4 select-none leading-none pt-0.5">
        <span className="block transition-transform duration-500 cubic-bezier(0.65,0,0.35,1) group-hover/cta:-translate-y-full text-[#111316] whitespace-nowrap">
          {text}
        </span>
        <span className="absolute top-full left-0 block transition-transform duration-500 cubic-bezier(0.65,0,0.35,1) group-hover/cta:-translate-y-full text-[#111316] whitespace-nowrap">
          {text}
        </span>
      </span>
      <span className="w-10 h-10 rounded-full bg-[#111316] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/cta:bg-[#222629] group-hover/cta:text-[#86C232]">
        <ArrowRight
          size={18}
          strokeWidth={2.5}
          className="-rotate-45 transition-transform duration-500 cubic-bezier(0.65,0,0.35,1) group-hover/cta:rotate-0"
        />
      </span>
    </Link>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function OurHistory(): React.ReactElement {
  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] overflow-hidden">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[15px][10px] flex items-center justify-center overflow-hidden shadow-sm">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Company History
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
              <span className="text-white font-bold">Company History</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. INTRO CONTENT SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-20 pb-12 md:pt-28 md:pb-16 bg-[#f8f9fa]">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
            
            {/* Left Header */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center gap-2 text-[#86C232] text-xs font-black uppercase tracking-[0.2em] mb-4 bg-[#86C232]/10 px-3 py-1.5 rounded-sm border border-[#86C232]/20 w-fit">
                Background
              </div>
              <h2 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight">
                Discover How We <br className="hidden md:block" />
                Evolved Our <br className="hidden md:block" />
                Company&apos;s on <br className="hidden md:block" />
                <span className="text-[#86C232]">History.</span>
              </h2>
            </motion.div>

            {/* Right Paragraph */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 flex flex-col items-start justify-center"
            >
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-4">
                Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in our strategic inset, innovative approaches. empower businesses of all sizes to thrive.
              </p>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-8">
                Committed to the delivering exceptional in our strategic inset, innovative approaches.
              </p>
              <CtaButton text="Learn More" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. TIMELINE SECTION
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 relative">
          
          {/* Vertical Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#474B4F]/20 md:-translate-x-1/2" />

          <div className="flex flex-col gap-16 md:gap-24 relative">
            {HISTORY_DATA.map((item, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex w-full"
                >
                  
                  {/* Timeline Dot (Desktop & Mobile) */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-[#6B6E70] bg-[#f8f9fa] z-10" />

                  {/* ── MOBILE LAYOUT (Stack: Year -> Card) ── */}
                  <div className="md:hidden w-full pl-12">
                    <h3 className="text-4xl font-black text-[#6B6E70]/80 tracking-tighter mb-4">
                      {item.year}
                    </h3>
                    <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#474B4F]/10 shadow-[0_10px_30px_rgba(34,38,41,0.03)] flex flex-col">
                      <h4 className="text-xl font-extrabold text-[#222629] mb-4">
                        <span className="text-[#6B6E70]">{item.step}.</span> {item.title}
                      </h4>
                      <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-6">
                        {item.desc}
                      </p>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-auto">
                        <img src={item.images[0]} alt="History 1" className="w-full h-24 sm:h-32 object-cover rounded-xl" />
                        <img src={item.images[1]} alt="History 2" className="w-full h-24 sm:h-32 object-cover rounded-xl" />
                      </div>
                    </div>
                  </div>

                  {/* ── DESKTOP LAYOUT (Zig-Zag) ── */}
                  <div className="hidden md:flex w-full items-center">
                    
                    {/* Left Side */}
                    <div className="w-[45%] flex justify-end pr-10 lg:pr-16">
                      {isEven ? (
                        <div className="bg-white p-8 lg:p-10 rounded-[24px] border border-[#474B4F]/10 shadow-[0_10px_30px_rgba(34,38,41,0.03)] flex flex-col w-full text-left">
                          <h4 className="text-[1.35rem] font-extrabold text-[#222629] mb-4">
                            <span className="text-[#6B6E70]">{item.step}.</span> {item.title}
                          </h4>
                          <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-8">
                            {item.desc}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-auto">
                            <img src={item.images[0]} alt="History 1" className="w-full h-32 lg:h-36 object-cover rounded-xl" />
                            <img src={item.images[1]} alt="History 2" className="w-full h-32 lg:h-36 object-cover rounded-xl" />
                          </div>
                        </div>
                      ) : (
                        <h3 className="text-5xl lg:text-7xl font-black text-[#6B6E70]/80 tracking-tighter">
                          {item.year}
                        </h3>
                      )}
                    </div>

                    {/* Spacer for Line */}
                    <div className="w-[10%]" />

                    {/* Right Side */}
                    <div className="w-[45%] flex justify-start pl-10 lg:pl-16">
                      {isEven ? (
                        <h3 className="text-5xl lg:text-7xl font-black text-[#6B6E70]/80 tracking-tighter">
                          {item.year}
                        </h3>
                      ) : (
                        <div className="bg-white p-8 lg:p-10 rounded-[24px] border border-[#474B4F]/10 shadow-[0_10px_30px_rgba(34,38,41,0.03)] flex flex-col w-full text-left">
                          <h4 className="text-[1.35rem] font-extrabold text-[#222629] mb-4">
                            <span className="text-[#6B6E70]">{item.step}.</span> {item.title}
                          </h4>
                          <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-8">
                            {item.desc}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-auto">
                            <img src={item.images[0]} alt="History 1" className="w-full h-32 lg:h-36 object-cover rounded-xl" />
                            <img src={item.images[1]} alt="History 2" className="w-full h-32 lg:h-36 object-cover rounded-xl" />
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}