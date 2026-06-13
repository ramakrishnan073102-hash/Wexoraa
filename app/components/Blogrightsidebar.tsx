"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowUpRight, ArrowLeft, ArrowRight, Search } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA
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
    title: "How to navigate consulting tips for transforming.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage7",
  },
  {
    id: 8,
    date: { day: "18", month: "OCT" },
    category: "Business",
    author: "Ellinien Loma",
    title: "Innovation in action examples of consulting successst.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage8",
  },
  {
    id: 9,
    date: { day: "28", month: "AUG" },
    category: "Consulting",
    author: "Ellinien Loma",
    title: "Innovative solutions for business success from today.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    href: "/blogpage9",
  },
];

const RELATED_POSTS = [
  {
    id: 1,
    title: "Innovative Solutions for ever..",
    date: "28 DEC 2025",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=150&q=80",
    href: "/blogpage1",
  },
  {
    id: 2,
    title: "Harnessing Digital Transform ..",
    date: "06 NOV 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80",
    href: "/blogpage2",
  },
  {
    id: 3,
    title: "Mastering Change Management L..",
    date: "24 OCT 2025",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=150&q=80",
    href: "/blogpage3",
  },
];

const CATEGORIES = [
  { name: "Corporate", count: "02" },
  { name: "Business", count: "02" },
  { name: "Consulting", count: "02" },
  { name: "Innovations", count: "01" },
  { name: "Managements", count: "01" },
  { name: "Marketing", count: "01" },
];

const TAGS = ["Corporate", "Business", "Design", "Marketing", "Strategy"];

const POSTS_PER_PAGE = 6;

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — BLOG RIGHT SIDEBAR PAGE
────────────────────────────────────────────────────────── */
export default function Blogrightsidebar(): React.ReactElement {
  // Pagination State
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

  // Logic to slice the array based on the current page
  const startIndex = (activePage - 1) * POSTS_PER_PAGE;
  const currentPosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Scroll to top of grid when page changes
  const handlePageChange = (page: number) => {
    setActivePage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      
      {/* ════════════════════════════════════════
         1. HERO SECTION 
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[420px] lg:h-[480px] rounded-[32px] md:rounded-[15px][12px] flex items-center justify-center overflow-hidden shadow-sm">
          
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/70 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Blog Right Sidebar
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors duration-300">
                <Home size={16} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={16} className="text-[#6B6E70]" />
              <span className="text-white font-bold truncate">
                Blog Right Sidebar
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
         2. MAIN CONTENT & SIDEBAR LAYOUT
      ════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ── LEFT: BLOG GRID ── */}
          <div className="lg:col-span-8">
            <motion.div 
              key={activePage}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {currentPosts.map((post) => (
                <motion.div key={post.id} variants={cardVariants} className="h-full">
                  <Link href={post.href} className="group flex flex-col bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 ease-out h-full">
                    
                    {/* Image Container */}
                    <div className="relative w-full h-[240px] overflow-hidden bg-[#eef0ee]">
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
                    <div className="p-7 flex flex-col flex-grow">
                      
                      {/* Category & Author */}
                      <div className="flex items-center gap-1.5 text-[13px] mb-4">
                        <span className="font-extrabold text-[#222629] group-hover:text-[#86C232] transition-colors duration-500 ease-out bg-[#eef0ee] px-2.5 py-1 rounded-[4px]">
                          {post.category}
                        </span>
                        <span className="text-[#6B6E70] font-medium ml-1">
                          By {post.author}
                        </span>
                      </div>
                      
                      {/* Blog Title */}
                      <h3 className="text-[1.35rem] font-extrabold text-[#222629] leading-[1.35] mb-6 line-clamp-3 group-hover:text-[#86C232] transition-colors duration-500 ease-out">
                        {post.title}
                      </h3>

                      {/* Read More */}
                      <div className="mt-auto flex items-center gap-2.5 text-[#222629] font-extrabold text-[14px]">
                        <span className="group-hover:text-[#86C232] transition-colors duration-500 ease-out">
                          Read More
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#222629] group-hover:bg-[#86C232] flex items-center justify-center text-white transition-colors duration-300 ease-out shadow-sm">
                          <ArrowRight 
                            size={16} 
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

            {/* Pagination inside the Left Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mt-14"
            >
              {/* Previous Arrow */}
              <button 
                onClick={() => handlePageChange(activePage - 1)}
                disabled={activePage === 1}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
                  activePage === 1 
                    ? "opacity-0 pointer-events-none" 
                    : "bg-white text-[#222629] border-[#e0e3e0] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
                }`}
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-[14px] transition-all duration-300 shadow-sm border ${
                    activePage === i + 1 
                      ? "bg-[#222629] text-white border-[#222629]" 
                      : "bg-[#eef0ee] text-[#222629] border-transparent hover:bg-[#86C232] hover:text-white"
                  }`}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </button>
              ))}

              {/* Next Arrow */}
              <button 
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === totalPages}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
                  activePage === totalPages
                    ? "opacity-0 pointer-events-none" 
                    : "bg-white text-[#222629] border-[#e0e3e0] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
                }`}
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT: STICKY SIDEBAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-8"
          >
            {/* Search Widget */}
            <div className="bg-[#eef0ee] rounded-[20px] p-8 shadow-sm">
              <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-6">Search here</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search here" 
                  className="w-full bg-white text-[#222629] text-[15px] font-medium px-6 py-4 rounded-[12px] outline-none pr-14 shadow-sm border border-gray-100 focus:border-[#86C232] transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-[8px] flex items-center justify-center text-[#222629] hover:bg-[#86C232] hover:text-white transition-colors border border-gray-100">
                  <Search size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Related Post Widget */}
            <div className="bg-[#eef0ee] rounded-[20px] p-8 shadow-sm">
              <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-8">Related post</h3>
              <div className="flex flex-col gap-6">
                {RELATED_POSTS.map((post) => (
                  <Link key={post.id} href={post.href} className="flex items-center gap-5 group">
                    <div className="w-[85px] h-[85px] rounded-[12px] overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-[15px] font-extrabold text-[#222629] leading-snug group-hover:text-[#86C232] transition-colors duration-300">
                        {post.title}
                      </h4>
                      <span className="text-[12px] font-bold text-[#6B6E70] tracking-wider uppercase">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-[#eef0ee] rounded-[20px] p-8 shadow-sm">
              <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-6">Categories</h3>
              <ul className="flex flex-col gap-3">
                {CATEGORIES.map((cat, idx) => (
                  <li key={idx}>
                    <Link 
                      href="#" 
                      className={`flex items-center justify-between px-6 py-4 rounded-[12px] font-extrabold text-[15px] transition-all duration-300 shadow-sm border border-transparent hover:bg-[#86C232] hover:text-white group bg-white text-[#222629]`}
                    >
                      <span className="transition-colors group-hover:text-white">{cat.name}</span>
                      <span className="font-bold text-[#6B6E70] group-hover:text-white transition-colors">
                        ({cat.count})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Widget */}
            <div className="bg-[#eef0ee] rounded-[20px] p-8 shadow-sm">
              <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-6">Tags</h3>
              <div className="flex flex-wrap gap-2.5">
                {TAGS.map((tag, idx) => (
                  <Link 
                    key={idx} 
                    href="#" 
                    className={`px-5 py-2.5 rounded-[8px] text-[14px] font-extrabold transition-all duration-300 shadow-sm border border-transparent bg-white text-[#6B6E70] hover:bg-[#86C232] hover:text-white`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </main>
  );
}