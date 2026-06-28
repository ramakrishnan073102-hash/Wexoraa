"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ChevronRight,
   ChevronLeft, // <-- Added ChevronLeft for the Previous button
  Check,
  Phone,
  User,
  DollarSign,
  MapPin,
  Briefcase,
  Calendar,
  Search,
  X
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const PROJECT_INFO = [
  {
    icon: User,
    label: "Clients",
    value: "Innovate Interiors G...",
  },
  {
    icon: DollarSign,
    label: "Budget",
    value: "$100M USD",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maplewood Height",
  },
  {
    icon: Briefcase,
    label: "Sector",
    value: "Corporate Business",
  },
  {
    icon: Calendar,
    label: "Complete date",
    value: "OCT 20, 2024",
  },
];

const CHECKLIST = [
  "Market & Research",
  "Launch & Marketing",
  "Internal Communication",
  "Creative Direction",
  "User Experience",
  "Touchpoints",
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
];

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────────────────── */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ──────────────────────────────────────────────────────────
   SCROLL PROGRESS RING
────────────────────────────────────────────────────────── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 20;
  const circ = 2 * Math.PI * radius;
  const dashOffset = circ - (progress / 100) * circ;

  return (
    <div className="fixed bottom-8 right-8 z-40 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg">
      <svg width="56" height="56" className="absolute top-0 left-0 -rotate-90">
        <circle cx="28" cy="28" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="3" />
        <circle
          cx="28" cy="28" r={radius}
          fill="none" stroke="#86C232" strokeWidth="3"
          strokeDasharray={circ}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>
      <span className="text-[11px] font-black text-[#222629] relative z-10">
        {progress}%
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — PORTFOLIO DETAILS PAGE 4
────────────────────────────────────────────────────────── */
export default function PortfolioPage4(): React.ReactElement {
  // STATE: Tracks which image is currently open in the lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedImage]);

  return (
    <main className="w-full bg-[#eef0ee] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      <ScrollProgress />

      {/* ════════════════════════════════════════
         1. HERO SECTION
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[420px] lg:h-[480px] rounded-[12px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />

          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-3xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Environmental Impact Dashboard
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] font-medium text-white/75 bg-[#222629]/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors">
                <Home size={15} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={15} className="text-[#6B6E70]" />
              <Link href="/portfolio" className="hover:text-[#86C232] transition-colors">
                Portfolio
              </Link>
              <ChevronRight size={15} className="text-[#6B6E70]" />
              <span className="text-white font-bold truncate max-w-[180px] sm:max-w-[260px]">
                Environmental Impact Dash...
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
         2. TWO-COLUMN LAYOUT
      ════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── LEFT: MAIN CONTENT ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-8 flex flex-col gap-10"
          >
            {/* Top Project Image */}
            <motion.div variants={fadeUp} className="w-full h-[320px] md:h-[480px] rounded-[16px] overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Project Discussion"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Main Heading & Paragraphs */}
            <motion.div variants={fadeUp}>
              <h2 className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#222629] leading-[1.12] tracking-tight mb-5">
                Designing a Modern Brand Identity for Competitive Edge
              </h2>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium mb-5">
                More than just a logo change or a new color palette; it's about reshaping how your brand is perceived in the marketplace. At Wexoraa, we specialize in crafting robust rebranding strategies that align your business with its evolving goals, values, and audience. Whether you're launching in new markets, updating your identity for modern aesthetics, or fully reinvigorating a tired brand, we take a holistic approach to ensure your brand connects with customers on a deeper level.
              </p>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium">
                The process is rooted in strategic thinking, market research, and creativity. We work closely to understand your business, vision, and customers, ensuring that every element of your brand—from visual design to messaging—is authentic and impactful. The end result is a unified brand that speaks.
              </p>
            </motion.div>

            {/* Checklist — 2-column grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 my-4">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#86C232] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-[#222629] text-[15px] font-bold">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Overview Section */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-4">
                Overview
              </h3>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium mb-5">
                In a dynamic market, a strong and consistent brand identity is key to standing out and driving growth. [Client Name], a growing business in the sector, recognized the need to evolve its brand to keep up with an expanding audience and adapt to shifting market trends.
              </p>
              <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-4 mt-8">
                Project Gallery
              </h3>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium mb-8">
                Strategy for [Client Name] transformed their entire brand identity, from a fresh new logo to updated visual design that resonates with their growing audience.
              </p>

              {/* IMAGE GALLERY GRID WITH CLICK HANDLERS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Image 1 */}
                <div 
                  onClick={() => setSelectedImage(GALLERY_IMAGES[0])}
                  className="md:col-span-2 relative group w-full h-[340px] rounded-[16px] overflow-hidden cursor-pointer shadow-sm"
                >
                  <div className="absolute inset-0 bg-[#222629]/20 group-hover:bg-[#222629]/40 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-300 transform group-hover:scale-110">
                      <Search size={24} />
                    </div>
                  </div>
                  <img src={GALLERY_IMAGES[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                {/* Image 2 */}
                <div 
                  onClick={() => setSelectedImage(GALLERY_IMAGES[1])}
                  className="relative group w-full h-[240px] rounded-[16px] overflow-hidden cursor-pointer shadow-sm"
                >
                  <div className="absolute inset-0 bg-[#222629]/20 group-hover:bg-[#222629]/40 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-300 transform group-hover:scale-110">
                      <Search size={20} />
                    </div>
                  </div>
                  <img src={GALLERY_IMAGES[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                {/* Image 3 */}
                <div 
                  onClick={() => setSelectedImage(GALLERY_IMAGES[2])}
                  className="relative group w-full h-[240px] rounded-[16px] overflow-hidden cursor-pointer shadow-sm"
                >
                  <div className="absolute inset-0 bg-[#222629]/20 group-hover:bg-[#222629]/40 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform duration-300 transform group-hover:scale-110">
                      <Search size={20} />
                    </div>
                  </div>
                  <img src={GALLERY_IMAGES[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

              </div>

              {/* ── BOTTOM NAV: Grid | Next ── */}
              <div className="w-full bg-white rounded-[16px] mt-10 shadow-sm border border-[#e0e3e0]">
                <div className="flex items-center px-6 py-5 relative">

                     {/* Previous Button */}
                  <Link
                    href="/portfoliopage3"
                    className="flex items-center gap-3 text-[#222629] font-extrabold text-[15px] transition-colors hover:text-[#86C232] group outline-none"
                  >
                    <div className="w-11 h-11 rounded-full border border-[#d1d5db] flex items-center justify-center text-[#222629] transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                      <ChevronLeft size={19} strokeWidth={2.5} />
                    </div>
                    Previous
                  </Link>
                  
                  {/* Center: 4-square grid icon */}
                  <Link
                    href="/portfolio"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#222629] hover:text-[#86C232] transition-colors duration-300 outline-none"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3"    y="3"    width="7.5" height="7.5" rx="1.5" />
                      <rect x="13.5" y="3"    width="7.5" height="7.5" rx="1.5" />
                      <rect x="3"    y="13.5" width="7.5" height="7.5" rx="1.5" />
                      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
                    </svg>
                  </Link>

                  {/* Next */}
                  <Link
                    href="/portfoliopage5"
                    className="flex items-center gap-3 text-[#222629] font-extrabold text-[15px] transition-colors hover:text-[#86C232] group outline-none ml-auto"
                  >
                    Next
                    <div className="w-11 h-11 rounded-full border border-[#d1d5db] flex items-center justify-center text-[#222629] transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                      <ChevronRight size={19} strokeWidth={2.5} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: STICKY SIDEBAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-8"
          >
            {/* Project Info Card */}
            <div className="bg-white rounded-[20px] p-7 shadow-sm border border-gray-100">
              <h3 className="text-[1.35rem] font-extrabold text-[#222629] mb-6">
                Project Info
              </h3>
              <div className="flex flex-col gap-5">
                {PROJECT_INFO.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] flex-shrink-0 mt-1">
                      <info.icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[#6B6E70] text-[13px] font-semibold mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-[#222629] font-extrabold text-[15px]">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA card */}
            <div className="bg-[#1a2826] rounded-[20px] overflow-hidden shadow-xl relative min-h-[270px] flex flex-col justify-end p-8">
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full border-[40px] border-[#86C232]/15 translate-x-12 -translate-y-12 z-0" />
              <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full overflow-hidden border-4 border-[#1a2826] z-10 translate-x-6 translate-y-6 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Consultant"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="relative z-20 w-[62%]">
                <h3 className="text-[2.8rem] font-extrabold text-white leading-[1] tracking-tight mb-1">
                  Modern
                </h3>
                <p className="text-white/70 text-[14px] font-semibold mb-7">
                  Home Makeover
                </p>
                <a
                  href="tel:+83218906"
                  className="inline-flex items-center gap-2 bg-[#86C232] text-white px-4 py-2.5 rounded-full font-bold text-[13px] transition-colors duration-300 hover:bg-[#61892F]"
                >
                  <Phone size={13} fill="currentColor" />
                  +8 (321) 890-640
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
         3. IMAGE LIGHTBOX MODAL
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#222629]/90 backdrop-blur-sm p-4 cursor-pointer"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-[110]"
            >
              <X size={24} />
            </button>

            {/* Enlarged Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Enlarged project view"
              className="max-w-full max-h-[90vh] object-contain rounded-[8px] shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}