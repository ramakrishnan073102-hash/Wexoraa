"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA: BLOG POSTS
────────────────────────────────────────────────────────── */
const BLOG_POSTS = [
  // --- PAGE 1 POSTS ---
  {
    id: 1,
    date: { day: "28", month: "JUL" },
    category: "Corporate",
    author: "Ellinien Loma",
    title: "Innovative Solutions for every Business Success.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage1",
  },
  {
    id: 2,
    date: { day: "06", month: "NOV" },
    category: "Business",
    author: "Ellinien Loma",
    title: "Harnessing Digital Transform a Roadmap Businesses.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage2",
  },
  {
    id: 3,
    date: { day: "24", month: "AUG" },
    category: "Consulting",
    author: "Ellinien Loma",
    title: "Mastering Change Management Lessons for Businesses.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage3",
  },
  {
    id: 4,
    date: { day: "28", month: "AUG" },
    category: "Innovations",
    author: "Ellinien Loma",
    title: "Designing a Modern Brand Identity for Competitive Edge.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage4",
  },
  {
    id: 5,
    date: { day: "28", month: "AUG" },
    category: "Managements",
    author: "Ellinien Loma",
    title: "Proven Lessons for Effective Change Management in Business.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage5",
  },
  {
    id: 6,
    date: { day: "28", month: "AUG" },
    category: "Marketing",
    author: "Ellinien Loma",
    title: "Measuring success key metrics every business track.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage6",
  },
  // --- PAGE 2 POSTS ---
  {
    id: 7,
    date: { day: "12", month: "SEP" },
    category: "Consulting",
    author: "Ellinien Loma",
    title: "How to navigate consulting tips for transforming",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage7",
  },
  {
    id: 8,
    date: { day: "18", month: "OCT" },
    category: "Business",
    author: "Ellinien Loma",
    title: "Innovation in action examples of consulting success.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage8",
  },
  {
    id: 9,
    date: { day: "29", month: "DEC" },
    category: "Consulting",
    author: "Ellinien Loma",
    title: "Innovative solutions for business success from today",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage9",
  },
];

const POSTS_PER_PAGE = 6;

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — BLOG GRID PAGE
────────────────────────────────────────────────────────── */
export default function BlogGrid(): React.ReactElement {
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

  const startIndex = (activePage - 1) * POSTS_PER_PAGE;
  const currentPosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      
      {/* ════════════════════════════════════════
         1. HERO SECTION 
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[480px] rounded-[32px] md:rounded-[15px][12px] flex items-center justify-center overflow-hidden shadow-sm">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/70 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Blog grid
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors duration-300">
                <Home size={16} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={16} className="text-[#6B6E70]" />
              <span className="text-white font-bold truncate">
                Blog grid
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
         2. BLOG GRID LAYOUT 
      ════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div 
          key={activePage}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants} className="h-full">
              <Link href={post.href} className="group flex flex-col bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 ease-out h-full">
                
                {/* Image Container */}
                <div className="relative w-full h-[260px] overflow-hidden bg-[#eef0ee]">
                  <div className="absolute inset-0 bg-[#222629]/10 group-hover:bg-transparent transition-colors duration-700 ease-in-out z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-5 left-5 z-20 bg-[#222629] text-white rounded-[8px] flex flex-col items-center justify-center w-[60px] h-[65px] shadow-md">
                    <span className="text-[22px] font-extrabold leading-none tracking-tight">{post.date.day}</span>
                    <span className="text-[12px] font-bold tracking-wider mt-1 text-white/80">{post.date.month}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  
                  {/* Category & Author */}
                  <div className="flex items-center gap-1.5 text-[14px] mb-4">
                    <span className="font-extrabold text-[#222629] group-hover:text-[#86C232] transition-colors duration-500 ease-out">
                      {post.category}
                    </span>
                    <span className="text-[#6B6E70] font-medium">
                      By {post.author}
                    </span>
                  </div>
                  
                  {/* Blog Title with UNDERLINE ON HOVER */}
                  <h3 className="text-[1.45rem] font-extrabold text-[#222629] leading-[1.35] mb-6 line-clamp-3 group-hover:text-[#86C232] group-hover:underline decoration-2 underline-offset-4 transition-all duration-500 ease-out">
                    {post.title}
                  </h3>

                  {/* Read More & Arrow */}
                  <div className="mt-auto flex items-center gap-3 text-[#222629] font-extrabold text-[15px]">
                    <span className="group-hover:text-[#86C232] transition-colors duration-500 ease-out">
                      Read More
                    </span>
                    
                    <div className="w-8 h-8 rounded-full bg-[#222629] group-hover:bg-[#86C232] flex items-center justify-center text-white transition-colors duration-300 ease-out shadow-sm">
                      <ArrowRight 
                        size={18} 
                        strokeWidth={2.5} 
                        className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" 
                      />
                    </div>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          {/* Previous Arrow */}
          <button 
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
              activePage === 1 
                ? "opacity-0 pointer-events-none" 
                : "bg-white text-[#222629] border-[#e0e3e0] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
            }`}
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Page 1 */}
          <button 
            onClick={() => handlePageChange(1)}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[15px] transition-all duration-300 shadow-sm border ${
              activePage === 1 
                ? "bg-[#222629] text-white border-[#222629]" 
                : "bg-white text-[#6B6E70] border-[#e0e3e0] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
            }`}
          >
            01
          </button>

          {/* Page 2 */}
          <button 
            onClick={() => handlePageChange(2)}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[15px] transition-all duration-300 shadow-sm border ${
              activePage === 2 
                ? "bg-[#222629] text-white border-[#222629]" 
                : "bg-white text-[#6B6E70] border-[#e0e3e0] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
            }`}
          >
            02
          </button>

          {/* Next Arrow */}
          <button 
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === totalPages}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
              activePage === totalPages
                ? "opacity-0 pointer-events-none" 
                : "bg-white text-[#222629] border-[#e0e3e0] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
            }`}
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </motion.div>

      </section>
    </main>
  );
}