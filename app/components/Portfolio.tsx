"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA: PORTFOLIO ITEMS
────────────────────────────────────────────────────────── */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    tag: "Management",
    title: "Event Management Platform",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    href: "/portfoliopage1",
  },
  {
    id: 2,
    tag: "Empower",
    title: "Digital Marketing Campaign",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    href: "/portfoliopage2",
  },
  {
    id: 3,
    tag: "Support",
    title: "Interactive Learning Platform",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    href: "/portfoliopage3",
  },
  {
    id: 4,
    tag: "Impact",
    title: "Environmental Impact Dashboard",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    href: "/portfoliopage4",
  },
  {
    id: 5,
    tag: "Connect",
    title: "Rebranding Strategy for a Growing",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    href: "/portfoliopage5",
  },
  {
    id: 6,
    tag: "Connect",
    title: "Integrated Marketing Campaign",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    href: "/portfoliopage6",
  },
];

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────────────────── */
// Explicitly typing these as 'Variants' resolves the TypeScript errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — PORTFOLIO PAGE
────────────────────────────────────────────────────────── */
export default function PortfolioPage(): React.ReactElement {
  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      
      {/* ════════════════════════════════════════
         1. HERO SECTION
      ════════════════════════════════════════ */}
    <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
  <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[10px] md:rounded-[15px][10px] flex items-center justify-center overflow-hidden shadow-sm">
    
    {/* Background Image (Updated to match the portfolio theme) */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')" }}
    />
    
    {/* The custom gradient overlay you provided */}
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
    
    <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
      >
        Portfolio
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
      >
        <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors">
          <Home size={16} className="text-[#86C232]" /> Home
        </Link>
        <ChevronRight size={16} className="text-[#6B6E70]" />
        <span className="text-white font-bold truncate max-w-[160px] sm:max-w-[240px]">
          Portfolio
        </span>
      </motion.div>
    </div>
  </div>
</section>
      {/* ════════════════════════════════════════
         2. PORTFOLIO GRID SECTION
      ════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Link href={item.href} className="group block bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative w-full h-[260px] overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-[#222629]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Content Container */}
                <div className="p-7 flex flex-col flex-grow relative">
                  {/* Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[13px] font-bold text-[#474B4F] bg-gray-100 rounded-[6px] border border-gray-200 group-hover:border-[#86C232]/30 group-hover:bg-[#86C232]/5 transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[1.35rem] font-extrabold text-[#222629] leading-snug pr-8 group-hover:text-[#86C232] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Arrow Icon - Positioned bottom right */}
                  <div className="absolute bottom-7 right-7 text-[#6B6E70] group-hover:text-[#86C232] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={26} strokeWidth={2} />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ════════════════════════════════════════
           3. PAGINATION
        ════════════════════════════════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          {/* Active Page */}
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#222629] text-white font-extrabold text-[15px] shadow-md">
            01
          </button>

          {/* Inactive Page */}
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-[#6B6E70] font-extrabold text-[15px] hover:bg-[#86C232] hover:text-white transition-all duration-300 shadow-sm border border-gray-200 hover:border-[#86C232]">
            02
          </button>

          {/* Next Arrow */}
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-[#6B6E70] hover:bg-[#86C232] hover:text-white transition-all duration-300 shadow-sm border border-gray-200 hover:border-[#86C232]">
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </motion.div>

      </section>
    </main>
  );
}