"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  ArrowRight,
  ArrowLeft,
  Box,
  Target,
  PieChart,
  Layers,
  Briefcase,
  TrendingUp,
  Cpu,
  ChevronsRight
} from "lucide-react";
import Marquee from "../components/Marquee"; // Adjust path as needed

/* ──────────────────────────────────────────────────────────
   SERVICES DATA (With Individual Links)
────────────────────────────────────────────────────────── */
const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    desc: "Fast, responsive websites built to convert visitors into enquiries and help your business look trustworthy online.",
    icon: Target,
    href: "/page1"
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Customer Experience Solutions are designed to enhance every touchpoint of your customer journey, from first interaction.",
    icon: PieChart,
    href: "/page2"
  },
  {
    id: 3,
    title: "Custom Software",
    desc: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
    icon: Layers,
    href: "/page3"
  },
  {
    id: 4,
    title: "Mobile Apps",
    desc: "Training and Development Programs designed to empower employees with the skills, knowledge, and tools.",
    icon: Briefcase,
    href: "/page4"
  },
  {
    id: 5,
    title: "Digital Marketing",
    desc: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
    icon: Cpu,
    href: "/page5"
  },
  {
    id: 6,
    title: "AI Solutions",
    desc: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
    icon: TrendingUp,
    href: "/page6"
  }
];

const MISSION_VISION = {
  mission: [
    "Innovation & Excellence",
    "Exceptional Customer",
    "Business Growth",
  ],
  vision: [
    "Global Leadership",
    "Transformative Impact",
    "Sustainable Success",
  ],
};

/* ──────────────────────────────────────────────────────────
   REUSABLE CTA BUTTON
────────────────────────────────────────────────────────── */
function CtaButton({ text, href = "#" }: { text: string; href?: string }): React.ReactElement {
  return (
    <Link
      href={href}
      className="group/cta inline-flex items-center justify-between bg-[#86C232] text-[#111316] rounded-full p-2 pl-7 pr-2.5 text-base font-bold w-fit transition-all duration-300 hover:shadow-[0_12px_32px_rgba(134,194,50,0.25)] hover:bg-[#61892F] outline-none"
    >
      <span className="relative block overflow-hidden h-5 min-w-[120px] mr-5 select-none leading-none pt-0.5">
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
export default function ServicesPage(): React.ReactElement {
  // Pagination Setup
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const itemsPerPage = 6;
  const totalPages = Math.ceil(SERVICES_DATA.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = SERVICES_DATA.slice(indexOfFirstItem, indexOfLastItem);

  const scrollToGrid = () => {
    if (gridRef.current) {
      const yOffset = -100;
      const element = gridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToGrid();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToGrid();
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (currentPage !== pageNumber) {
      setCurrentPage(pageNumber);
      scrollToGrid();
    }
  };

  return (
    // Reduced padding bottom on main container
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-10 md:pb-16">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[15px] flex items-center justify-center overflow-hidden shadow-sm">
          
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
              Services
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
              <span className="text-white font-bold">Services</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. SERVICES GRID SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 mb-16 md:mb-20" ref={gridRef}>
        
        {/* Animated Grid Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="h-full"
                >
                  <Link 
                    href={service.href} 
                    className="group flex flex-col h-full bg-white rounded-[24px] border border-[#474B4F]/10 p-8 lg:p-10 transition-colors duration-300 hover:bg-[#86C232] shadow-[0_5px_20px_rgba(34,38,41,0.03)] hover:shadow-[0_20px_40px_rgba(134,194,50,0.2)] outline-none"
                  >
                    
                    {/* Top Icon Circle */}
                    <div className="w-[72px] h-[72px] rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] mb-8 transition-colors duration-300 group-hover:bg-white group-hover:text-[#86C232]">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-[1.35rem] font-extrabold text-[#222629] mb-4 transition-colors duration-300 group-hover:text-white leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] font-medium text-[#6B6E70] leading-[1.8] mb-8 lg:mb-10 transition-colors duration-300 group-hover:text-white/90">
                      {service.desc}
                    </p>

                    {/* Let's Build */}
                    <div className="flex items-center gap-2 text-[15px] font-extrabold text-[#222629] transition-colors duration-300 group-hover:text-white mt-auto w-fit">
                      Let's Build 
                      <span className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 bg-transparent text-[#222629] group-hover:bg-[#222629] group-hover:text-white">
                        <ArrowRight 
                          size={18} 
                          strokeWidth={2.5} 
                          className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                        />
                      </span>
                    </div>

                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ════════════════════════════════════════════════════
            PAGINATION CONTROLS
        ════════════════════════════════════════════════════ */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10 md:mt-12">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-extrabold transition-all duration-300 shadow-sm ${
                    isActive 
                      ? "bg-[#222629] text-white border border-[#222629]" 
                      : "bg-white border border-[#474B4F]/20 text-[#222629] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
                  }`}
                >
                  {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                </button>
              );
            })}

            {currentPage < totalPages && (
              <button
                onClick={handleNextPage}
                className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
        )}

      </section>

      {/* ════════════════════════════════════════════════════
          3. GET TO KNOW US SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 bg-[#f0f4f3]">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] md:h-[550px] rounded-[32px] overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
                alt="Business Meeting" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:w-[320px] bg-[#222629]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
                <h4 className="text-white text-lg font-extrabold mb-6">Business Progress</h4>
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm font-semibold">Revenue</span>
                    <span className="text-white font-bold text-sm">82%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#474B4F] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-[#86C232] rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm font-semibold">Satisfaction</span>
                    <span className="text-white font-bold text-sm">90%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#474B4F] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                      className="h-full bg-[#86C232] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <div className="flex items-center gap-2 text-[#86C232] text-[11px] md:text-[15px] font-extrabold uppercase tracking-[0.3em] mb-4 bg-[#86C232]/10 px-[14px] py-[4px] rounded-[4px] border border-[#86C232]/80 w-fit">
                <Box size={16} strokeWidth={2.5} className="md:w-5 md:h-5 -mt-0.5" /> 
                Get to know us
              </div>
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight mb-10">
                Driving Innovation and Excellence for <br />
                Sustainable Corporate Success <span className="text-[#86C232]">Worldwide.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-xl font-extrabold text-[#222629] mb-3">Our Mission</h3>
                  <p className="text-[#6B6E70] text-[15px] font-medium leading-[1.7] mb-5">
                    Our mission is to empower businesses through innovative best solutions, exceptional service.
                  </p>
                  <ul className="space-y-3">
                    {MISSION_VISION.mission.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[15px] text-[#222629] font-bold">
                        <ChevronsRight size={16} strokeWidth={2.5} className="text-[#86C232]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#222629] mb-3">Our Vision</h3>
                  <p className="text-[#6B6E70] text-[15px] font-medium leading-[1.7] mb-5">
                    Our vision is to become a global leader in providing transformative business solutions.
                  </p>
                  <ul className="space-y-3">
                    {MISSION_VISION.vision.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[15px] text-[#222629] font-bold">
                        <ChevronsRight size={16} strokeWidth={2.5} className="text-[#86C232]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <CtaButton text="Let's Build About Us" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. PARTNER LOGOS MARQUEE
      ════════════════════════════════════════════════════ */}
      {/* Reduced vertical padding */}
      <section className="relative w-full py-10 md:py-12 bg-[#f8f9fa] overflow-hidden flex items-center justify-center border-t border-[#474B4F]/10">
        <div className="w-full max-w-[1400px] mx-auto flex justify-center">
          <Marquee />
        </div>
      </section>

    </main>
  );
}