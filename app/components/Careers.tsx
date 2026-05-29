"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  MapPin,
  Briefcase,
  Target,
  Layers,
  PieChart,
  TrendingUp,
  Cpu
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   JOBS DATA (9 Jobs Total: 6 on Pg1, 3 on Pg2)
────────────────────────────────────────────────────────── */
const JOBS_DATA = [
  // --- PAGE 1 (6 Jobs) ---
  {
    id: 1,
    title: "Business Strategy Consultant",
    type: "Full Time Job/On Site",
    urgent: true,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: Target,
  },
  {
    id: 2,
    title: "Management Consultant",
    type: "Full Time Job/On Site",
    urgent: true,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: PieChart,
  },
  {
    id: 3,
    title: "Business Process Consultant",
    type: "Full Time Job/On Site",
    urgent: false,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: Layers,
  },
  {
    id: 4,
    title: "Organizational Development",
    type: "Full Time Job/On Site",
    urgent: true,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: Briefcase,
  },
  {
    id: 5,
    title: "Performance Optimization",
    type: "Full Time Job/On Site",
    urgent: false,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "IT Support Specialist",
    type: "Full Time Job/On Site",
    urgent: true,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: Cpu,
  },
  // --- PAGE 2 (3 Jobs) ---
  {
    id: 7,
    title: "Financial Analyst Lead",
    type: "Full Time Job/On Site",
    urgent: false,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: PieChart,
  },
  {
    id: 8,
    title: "Human Resources Manager",
    type: "Full Time Job/On Site",
    urgent: true,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: Briefcase,
  },
  {
    id: 9,
    title: "Creative Marketing Director",
    type: "Full Time Job/On Site",
    urgent: false,
    salary: "$400-$550",
    period: "/ week",
    location: "London,UK",
    icon: Target,
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function CareersPage(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const itemsPerPage = 6;
  const totalPages = Math.ceil(JOBS_DATA.length / itemsPerPage);

  // Get current jobs to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = JOBS_DATA.slice(indexOfFirstItem, indexOfLastItem);

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
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[32px] md:rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm">
          
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          {/* Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Careers
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
              <span className="text-white font-bold">Careers</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. JOBS GRID SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 bg-[#f8f9fa]" ref={gridRef}>
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          
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
              {currentJobs.map((job, i) => {
                const Icon = job.icon;
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group flex flex-col bg-white rounded-[24px] border border-[#474B4F]/10 p-8 transition-colors duration-300 hover:bg-[#222629] shadow-[0_5px_20px_rgba(34,38,41,0.02)] hover:shadow-xl"
                  >
                    
                    {/* Top Icon Circle */}
                    <div className="w-[72px] h-[72px] rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] mb-8 transition-colors duration-300 group-hover:bg-[#86C232] group-hover:text-white">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="px-3.5 py-1.5 rounded-[8px] border border-[#474B4F]/20 text-[13px] font-bold text-[#6B6E70] transition-colors duration-300 group-hover:border-[#474B4F]/40 group-hover:text-[#e2e2e2]">
                        {job.type}
                      </span>
                      {job.urgent && (
                        <span className="px-3.5 py-1.5 rounded-[8px] border border-[#474B4F]/20 text-[13px] font-bold text-[#6B6E70] transition-colors duration-300 group-hover:border-[#474B4F]/40 group-hover:text-[#e2e2e2]">
                          Urgent
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-[1.35rem] font-extrabold text-[#222629] mb-4 transition-colors duration-300 group-hover:text-white line-clamp-2 leading-tight">
                      {job.title}
                    </h3>

                    {/* Salary */}
                    <div className="mb-8">
                      <span className="text-[1.3rem] font-extrabold text-[#222629] transition-colors duration-300 group-hover:text-white">
                        {job.salary}
                      </span>
                      <span className="text-[#6B6E70] font-semibold ml-1 transition-colors duration-300 group-hover:text-[#e2e2e2]">
                        {job.period}
                      </span>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#474B4F]/10 transition-colors duration-300 group-hover:border-[#474B4F]/40">
                      <div className="flex items-center gap-1.5 text-[#6B6E70] transition-colors duration-300 group-hover:text-[#e2e2e2]">
                        <MapPin size={16} strokeWidth={2.5} className="flex-shrink-0" />
                        <span className="text-[14.5px] font-semibold">{job.location}</span>
                      </div>
                      
                      <Link 
                        href="/careersdetails" 
                        className="flex items-center gap-1 text-[15px] font-extrabold text-[#222629] transition-colors duration-300 group-hover:text-white"
                      >
                        Apply now <ChevronRight size={16} strokeWidth={3} className="mt-0.5" />
                      </Link>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* ════════════════════════════════════════════════════
              3. PAGINATION CONTROLS
          ════════════════════════════════════════════════════ */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-16">
              
              {/* Previous Button */}
              {currentPage > 1 && (
                <button
                  onClick={handlePrevPage}
                  className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <ArrowLeft size={18} strokeWidth={2.5} />
                </button>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;
                
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-extrabold transition-all duration-300 shadow-sm hover:shadow-md ${
                      isActive 
                        ? "bg-[#222629] text-white border border-[#222629]" 
                        : "bg-white border border-[#474B4F]/20 text-[#222629] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
                    }`}
                  >
                    {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                  </button>
                );
              })}

              {/* Next Button */}
              {currentPage < totalPages && (
                <button
                  onClick={handleNextPage}
                  className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              )}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}