"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const LOGOS = [
  { name: "Covai Home Tech", src: "/assets/img/clientslogo/1.png" },
  { name: "Flomodia", src: "/assets/img/clientslogo/2.png" },
  { name: "Weglot", src: "/assets/img/clientslogo/3.png" },
  { name: "Influence 4 You", src: "/assets/img/clientslogo/4.png" },
  { name: "TSE", src: "/assets/img/clientslogo/5.png" },
  { name: "Monceau", src: "/assets/img/clientslogo/6.png" },
  { name: "Company 7", src: "/assets/img/clientslogo/7.png" },
  { name: "Company 8", src: "/assets/img/clientslogo/8.png" },
  { name: "Company 9", src: "/assets/img/clientslogo/9.png" },
  { name: "Company 10", src: "/assets/img/clientslogo/10.png" },
  { name: "Company 11", src: "/assets/img/clientslogo/11.png" },
  { name: "Company 12", src: "/assets/img/clientslogo/12.png" },
  { name: "Company 13", src: "/assets/img/clientslogo/13.jpeg" },
  { name: "Company 14", src: "/assets/img/clientslogo/14.png" },
  { name: "Company 15", src: "/assets/img/clientslogo/15.jpeg" },
  { name: "Company 16", src: "/assets/img/clientslogo/16.png" },
  { name: "Company 17", src: "/assets/img/clientslogo/17.png" },
];

/* ─────────────────────────────────────────
   SCROLL REVEAL COMPONENTS (Smooth Wave)
───────────────────────────────────────── */
function RevealCharacter({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#A0AAB2", "#222629"]); 
  
  return (
    <motion.span style={{ opacity, color }} className="transition-none">
      {char}
    </motion.span>
  );
}

function RevealImage({ src, alt, progress, range }: { src: string; alt: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const scale = useTransform(progress, range, [0.95, 1]);
  return (
    <motion.span 
      style={{ opacity, scale }}
      className="inline-block align-middle w-[90px] md:w-[110px] h-[1.05em] rounded-[10px] overflow-hidden mx-1 relative top-[-4px] shadow-sm"
    >
      <img src={src} className="w-full h-full object-cover" alt={alt} />
    </motion.span>
  );
}

type ParsedElement = 
  | { type: 'space'; content: string }
  | { type: 'word'; content: string }
  | { type: 'img'; src: string; alt: string };

function FullScrollRevealHeading() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 45%"], 
  });

  const headingChunks = [
    { type: 'text', content: "Wexoraa brings strategy, " },
    { type: 'img', src: "/assets/images/photo-1573164713988-8665fc963095.jpg", alt: "Team" },
    { type: 'text', content: "  creativity, and technology together to build meaningful digital experiences that strengthen businesses, inspire growth,  " },
    { type: 'img', src: "/assets/images/photo-1552581234-26160f608093.jpg", alt: "Meeting" },
    { type: 'text', content: "and create lasting value for brands." }
  ];

  const elements: ParsedElement[] = [];
  
  headingChunks.forEach(chunk => {
    if (chunk.type === 'text' && chunk.content) {
      const tokens = chunk.content.match(/\S+|\s+/g) || [];
      tokens.forEach(token => {
        if (token.trim() === '') elements.push({ type: 'space', content: token });
        else elements.push({ type: 'word', content: token });
      });
    } else if (chunk.type === 'img' && chunk.src && chunk.alt) {
      elements.push({ type: 'img', src: chunk.src, alt: chunk.alt });
    }
  });

  let totalItems = 0;
  elements.forEach(el => {
    if (el.type === 'word' || el.type === 'space') totalItems += el.content.length;
    else if (el.type === 'img') totalItems += 1;
  });

  let globalIdx = 0;

  return (
    <h2 ref={containerRef} className="text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] font-medium text-[#222629] leading-[1.15] tracking-tight mb-12">
      {elements.map((el, elIdx) => {
        if (el.type === 'space') {
           return el.content.split('').map((char: string, cIdx: number) => {
              const start = globalIdx / totalItems;
              const end = start + 0.15; 
              globalIdx++;
              return <RevealCharacter key={`s-${elIdx}-${cIdx}`} char={char} progress={scrollYProgress} range={[start, end]} />;
           });
        } else if (el.type === 'word') {
           return (
             <span key={`w-${elIdx}`} className="inline-block whitespace-nowrap">
               {el.content.split('').map((char: string, cIdx: number) => {
                  const start = globalIdx / totalItems;
                  const end = start + 0.15; 
                  globalIdx++;
                  return <RevealCharacter key={`wc-${elIdx}-${cIdx}`} char={char} progress={scrollYProgress} range={[start, end]} />;
               })}
             </span>
           );
        } else if (el.type === 'img') {
           const start = globalIdx / totalItems;
           const end = start + 0.15; 
           globalIdx++;
           return <RevealImage key={`img-${elIdx}`} src={el.src} alt={el.alt} progress={scrollYProgress} range={[start, end]} />;
        }
        return null;
      })}
    </h2>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function HomeAbout(): React.ReactElement {
  return (
    <div className="w-full bg-white px-4 md:px-8 lg:px-10 py-10 font-['Manrope',_sans-serif]">
      
      {/* ── UPDATED BACKGROUND BOX ── */}
      <section 
        className="relative w-full max-w-[1600px] mx-auto pt-24 pb-16 overflow-hidden rounded-[24px] bg-[#F8FAF8] border border-[#86C232]/10 shadow-[0_8px_40px_rgba(0,0,0,0.03)]"
      >
        {/* Ambient Glow behind everything */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#86C232]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-6">
            
            {/* Left Column: Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-3 flex flex-col justify-start h-full pt-4"
            >
              <span className="inline-block text-[#86C232] border border-[#86C232]/80 bg-[#86C232]/10 px-[14px] py-[4px] rounded-[4px] text-[11px] md:text-[15px] font-extrabold tracking-[0.3em] uppercase mb-8 w-fit shadow-sm">
                Get to know us
              </span>
            </motion.div>

            {/* Right Column: Large Text & Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-9 flex flex-col justify-between relative"
            >
              
              <FullScrollRevealHeading />

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 bg-[#86C232] text-white rounded-full pl-6 pr-2 py-2 font-bold text-[15px] hover:bg-[#61892F] transition-all duration-300 shadow-md"
                >
                  Get Started 
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#222629] text-white transition-transform duration-300">
                    <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════
             HARDWARE-ACCELERATED INFINITE SCROLL
          ══════════════════════════════════════════ */}
          <div className="w-full relative pt-8 pb-4 border-t border-[#474B4F]/10 mt-12">
             {/* Fade Edges matches the new bg-[#F8FAF8] */}
             <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#F8FAF8] to-transparent z-10 pointer-events-none" />
             <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#F8FAF8] to-transparent z-10 pointer-events-none" />

             <div className="overflow-hidden whitespace-nowrap flex items-center">
                <motion.div 
                   className="flex items-center gap-1 md:gap-1 w-max"
                   animate={{ x: ["0%", "-50%"] }}
                   // Reduced duration from 180 to 50 to speed up the marquee
                   transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
                >
                   {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-center min-w-[120px] md:min-w-[160px] h-[80px] md:h-[100px] transition-transform duration-300 flex-shrink-0 cursor-pointer hover:-translate-y-1"
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.name} 
                          className="max-h-[60px] md:max-h-[75px] max-w-[110px] md:max-w-[140px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    ))}
                </motion.div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}