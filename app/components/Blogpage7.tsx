"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  Check,
  CalendarDays,
  MessageCircle,
  Search,
  ArrowRight,
  ArrowLeft,
  Play,
  Quote,
  X,
  User,
  LayoutGrid
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   CUSTOM SOCIAL ICONS
────────────────────────────────────────────────────────── */
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.73 14h3.5L7.5 4zm0 0l16 16" /></svg>
);
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const RELATED_POSTS = [
  {
    id: 1,
    title: "Innovative Solutions for ever...",
    date: "28 DEC 2025",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=150&q=80",
    href: "/blogpage1",
  },
  {
    id: 2,
    title: "Harnessing Digital Transform...",
    date: "06 NOV 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80",
    href: "/blogpage2",
  },
  {
    id: 3,
    title: "Mastering Change Management L...",
    date: "24 OCT 2025",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=150&q=80",
    href: "/blogpage3",
  },
];

const CATEGORIES = [
  { name: "Corporate", count: "02", active: true }, // Set Corporate to active
  { name: "Business", count: "02", active: false },
  { name: "Consulting", count: "02", active: false },
  { name: "Innovations", count: "01", active: false }, 
  { name: "Managements", count: "01", active: false },
  { name: "Marketing", count: "01", active: false },
];

const TAGS = ["Corporate", "Business", "Design", "Marketing", "Strategy"];

const CHECKLIST = [
  "Embrace Innovation",
  "Scalable Systems",
  "Customer-Centric Approach",
  "Resilience",
  "Effective Leadership",
  "Continuous Learning",
  "Operational Efficiency"
];

const COMMENTS = [
  {
    id: 1,
    author: "Great insights!",
    date: "June 18, 2024 at 06:00 pm",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
    text: "I completely agree that embracing innovation and leveraging data are crucial for any business looking to stay competitive in today's market. The focus on leadership and adaptability really resonated with me. Looking forward to implementing these strategies.",
  },
  {
    id: 2,
    author: "This was a fantastic read",
    date: "June 18, 2024 at 06:00 pm",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
    text: "The lessons on customer-centric approaches and operational efficiency are especially relevant. It's inspiring to see how these core principles can truly unlock a business's potential. Thanks for sharing such valuable content!",
  },
];

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────────────────── */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
   MAIN COMPONENT — BLOG DETAILS
────────────────────────────────────────────────────────── */
export default function Blogpage8(): React.ReactElement {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isVideoOpen]);

  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      <ScrollProgress />

      {/* ════════════════════════════════════════
         1. HERO SECTION
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[420px] lg:h-[480px] rounded-[32px] md:rounded-[12px] flex items-center justify-center overflow-hidden shadow-sm">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/70 mix-blend-multiply" />

          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Blog Details
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors duration-300">
                <Home size={15} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={15} className="text-[#6B6E70]" />
              <Link href="/blogs" className="hover:text-[#86C232] transition-colors duration-300">
                Blogs
              </Link>
              <ChevronRight size={15} className="text-[#6B6E70]" />
              <span className="text-white font-bold truncate max-w-[150px] sm:max-w-[260px]">
                How to navigate consultin...
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
         2. MAIN CONTENT LAYOUT
      ════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── LEFT: ARTICLE CONTENT ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-8 flex flex-col gap-8"
          >
            {/* Featured Image */}
            <motion.div variants={fadeUp} className="w-full h-[350px] md:h-[500px] rounded-[20px] overflow-hidden shadow-sm mb-2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Business Meeting"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Title */}
            <motion.h2 variants={fadeUp} className="text-[2.2rem] md:text-[2.8rem] font-extrabold text-[#222629] leading-[1.2] tracking-tight mb-2">
              How to navigate consulting tips for transforming
            </motion.h2>

             {/* Meta Information Bar */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-12 gap-y-6 bg-[#eef0ee] py-5 px-8 rounded-[16px] mb-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" 
                              alt="Author" 
                              className="w-[48px] h-[48px] rounded-full object-cover shadow-sm"
                            />
                            <div className="flex flex-col">
                              <span className="text-[13px] text-[#6B6E70] font-semibold mb-0.5">Authored by</span>
                              <span className="text-[15px] text-[#222629] font-extrabold leading-none">Burdee Nicolas</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#86C232] flex items-center justify-center text-white shadow-md">
                              <CalendarDays size={22} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[13px] text-[#6B6E70] font-semibold mb-0.5">Date Released</span>
                              <span className="text-[15px] text-[#222629] font-extrabold leading-none">29 December, 2025</span>
                            </div>
                          </div>
            
                          <div className="flex items-center gap-4">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#86C232] flex items-center justify-center text-white shadow-md">
                              <MessageCircle size={22} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[13px] text-[#6B6E70] font-semibold mb-0.5">Comments</span>
                              <span className="text-[15px] text-[#222629] font-extrabold leading-none">03 Comments</span>
                            </div>
                          </div>
                        </motion.div>
            
            {/* Paragraphs */}
            <motion.div variants={fadeUp} className="space-y-6 text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-10">
              <p>
                In today's competitive landscape, businesses must continuously adapt and innovate to thrive. Unlocking Business Potential means identifying untapped opportunities and leveraging innovative solutions to drive growth, enhance efficiency, and foster lasting success. At [Company Name], we believe that success is not just about working harder—it's about working smarter. By harnessing cutting-edge technologies, data-driven insights, and creative problem-solving, we provide businesses with the tools and strategies needed to stay ahead.
              </p>
              <p>
                The curve. Whether you're looking to streamline operations, enhance customer experiences, or explore new market opportunities, our tailored solutions are designed to empower your business to achieve unparalleled success. With a focus on sustainability, scalability, and adaptability, we help your business.
              </p>
            </motion.div>

            {/* Blockquote */}
            <motion.div variants={fadeUp} className="relative bg-[#eef0ee] border-l-[4px] border-[#86C232] py-10 px-10 md:px-14 rounded-r-[16px] mb-4 overflow-hidden">
              <Quote size={100} className="absolute -top-4 -left-4 text-[#86C232]/10 rotate-180" />
              <h3 className="relative z-10 text-[1.25rem] md:text-[1.4rem] font-extrabold text-[#222629] leading-[1.6] mb-4 italic">
                "The true entrepreneur is a doer, not a dreamer. Innovation is the catalyst that transforms ideas into reality. In today's fast-paced world, success depends not on just surviving change."
              </h3>
              <span className="relative z-10 block text-right font-bold text-[#6B6E70] text-[15px]">
                Kevin Hooks
              </span>
            </motion.div>

            {/* Subheading & Text */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[2rem] font-extrabold text-[#222629] leading-tight mb-6">
                Kye lessons of Business Potential
              </h3>
              <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-8">
                Unlocking your business potential requires more than just vision and ambition—it involves strategic thinking, adaptability, and an unwavering commitment to growth. Over time, successful businesses have learned essential lessons that allow them to not only survive but thrive in an ever-changing marketplace. One of the most important lessons is understanding the need for continuous innovation.
              </p>

              {/* 2-Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="h-[320px] rounded-[16px] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Consulting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-[320px] rounded-[16px] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Working" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-10">
                Lastly, effective leadership that inspires and motivates employees, customers, and stakeholders is essential in steering the business toward achieving its full potential. By applying these lessons, businesses can unlock new opportunities, overcome obstacles, and reach new levels of success.
              </p>
            </motion.div>

            {/* Checklist Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#86C232] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-[#222629] text-[16px] font-bold">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Video Mockup Section */}
            <motion.div
              variants={fadeUp}
              className="relative w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden shadow-sm mb-10 group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="absolute inset-0 bg-[#222629]/20 group-hover:bg-[#222629]/40 transition-colors duration-300 z-10" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="Video Thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center text-[#222629] shadow-xl group-hover:bg-[#86C232] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Play size={36} className="ml-2 fill-current" />
                </div>
              </div>
            </motion.div>

            {/* Conclusions */}
            <motion.div variants={fadeUp}>
              <h3 className="text-[2rem] font-extrabold text-[#222629] leading-tight mb-6">
                Conclusions
              </h3>
              <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-6">
                Unlocking your business's full potential is a journey that requires vision, innovation, and strategic on our execution. By embracing key lessons such as leveraging data, focusing on customer are experience, fostering of adaptability, and nurturing effective leadership, businesses can thrive in an ever-evolving marketplace.
              </p>
              <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-10">
                The ability to continuously learn, collaborate, and optimize operations will not only drive growth but ensure long-term sustainability. Remember, the path to success is not linear.
              </p>
            </motion.div>

            {/* Tags & Share Row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-[#222629] font-extrabold text-[15px]">Tags:</span>
                <span className="bg-[#eef0ee] text-[#6B6E70] px-4 py-1.5 rounded-[6px] text-[13px] font-bold hover:bg-[#86C232] hover:text-white transition-colors cursor-pointer">Marketing</span>
                <span className="bg-[#eef0ee] text-[#6B6E70] px-4 py-1.5 rounded-[6px] text-[13px] font-bold hover:bg-[#86C232] hover:text-white transition-colors cursor-pointer">Strategy</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#222629] font-extrabold text-[15px]">Share:</span>
                <div className="flex items-center gap-4 text-[#222629]">
                  <a href="#" className="hover:text-[#86C232] transition-colors"><IconFacebook /></a>
                  <a href="#" className="hover:text-[#86C232] transition-colors"><IconX /></a>
                  <a href="#" className="hover:text-[#86C232] transition-colors"><IconInstagram /></a>
                  <a href="#" className="hover:text-[#86C232] transition-colors"><IconLinkedin /></a>
                </div>
              </div>
            </motion.div>

            {/* Post Navigation */}
            <motion.div variants={fadeUp} className="w-full bg-[#eef0ee] rounded-[16px] mt-10 mb-14 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between px-8 py-6 relative">

                {/* Previous Button */}
                <div className="w-1/3 flex justify-start">
                  <Link href="/blogpage6" className="flex items-center gap-3 text-[#222629] font-extrabold text-[16px] hover:text-[#86C232] group transition-colors">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                      <ArrowLeft size={20} strokeWidth={2.5} />
                    </div>
                    Previous
                  </Link>
                </div>

                {/* Grid Icon Center */}
                <Link href="/blogs" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#222629] hover:text-[#86C232] transition-colors duration-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
                    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
                    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
                    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
                  </svg>
                </Link>

                {/* Next Button */}
                <div className="w-1/3 flex justify-end">
                  <Link href="#" className="flex items-center gap-3 text-[#222629] font-extrabold text-[16px] hover:text-[#86C232] group transition-colors">
                    Next
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                      <ArrowRight size={20} strokeWidth={2.5} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Comments List Section */}
            <motion.div variants={fadeUp} className="mb-14">
              <h3 className="text-[2rem] font-extrabold text-[#222629] leading-tight mb-8">
                Top Comments (02)
              </h3>
              <div className="space-y-6">
                {COMMENTS.map((comment) => (
                  <div key={comment.id} className="bg-white p-8 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <img src={comment.avatar} alt={comment.author} className="w-[60px] h-[60px] rounded-full object-cover shadow-sm" />
                        <div>
                          <h4 className="text-[1.2rem] font-extrabold text-[#222629] mb-1">{comment.author}</h4>
                          <span className="text-[#6B6E70] text-[13px] font-bold">{comment.date}</span>
                        </div>
                      </div>
                      <button className="text-[#86C232] text-[15px] font-extrabold hover:text-[#61892F] transition-colors">
                        Reply
                      </button>
                    </div>
                    <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium italic">
                      "{comment.text}"
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leave a Comment Form */}
            <motion.div variants={fadeUp} className="bg-[#f8f9f8] border border-gray-200 p-10 md:p-12 rounded-[24px]">
              <h3 className="text-[2rem] font-extrabold text-[#222629] leading-tight mb-8">
                Leave a Comment
              </h3>
              <form className="space-y-6">
                <div>
                  <textarea
                    placeholder="Write Your Comment *"
                    rows={6}
                    className="w-full bg-white text-[#222629] text-[15px] px-6 py-5 rounded-[12px] outline-none border border-gray-200 focus:border-[#86C232] focus:ring-1 focus:ring-[#86C232] transition-all resize-none font-medium placeholder-[#6B6E70]"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input type="text" placeholder="Full Name *" className="w-full bg-white text-[#222629] text-[15px] px-6 py-4 rounded-[12px] outline-none border border-gray-200 focus:border-[#86C232] focus:ring-1 focus:ring-[#86C232] transition-all font-medium placeholder-[#6B6E70]" />
                  <input type="email" placeholder="Your Email *" className="w-full bg-white text-[#222629] text-[15px] px-6 py-4 rounded-[12px] outline-none border border-gray-200 focus:border-[#86C232] focus:ring-1 focus:ring-[#86C232] transition-all font-medium placeholder-[#6B6E70]" />
                  <input type="url" placeholder="Website" className="w-full bg-white text-[#222629] text-[15px] px-6 py-4 rounded-[12px] outline-none border border-gray-200 focus:border-[#86C232] focus:ring-1 focus:ring-[#86C232] transition-all font-medium placeholder-[#6B6E70]" />
                </div>

                <div className="mt-8">
                  <button type="button" className="inline-flex items-center justify-between gap-4 bg-[#86C232] text-white pl-8 pr-2 py-2 rounded-full font-extrabold text-[15px] hover:bg-[#61892F] transition-all duration-300 group">
                    <span>Submit Now</span>
                    <div className="w-10 h-10 bg-[#222629] rounded-full flex items-center justify-center text-white shadow-sm">
                      <ArrowRight
                        size={18}
                        strokeWidth={2.5}
                        className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out"
                      />
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>

          </motion.div>

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
                      <h4 className="text-[16px] font-extrabold text-[#222629] leading-snug group-hover:text-[#86C232] transition-colors duration-300">
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
                      className={`flex items-center justify-between px-6 py-4 rounded-[12px] font-extrabold text-[15px] transition-all duration-300 shadow-sm border border-transparent hover:bg-[#86C232] hover:text-white group ${
                        cat.active ? "bg-[#86C232] text-white" : "bg-white text-[#222629]"
                      }`}
                    >
                      <span className={`${cat.active ? "text-white" : "text-[#222629] group-hover:text-white"} transition-colors`}>{cat.name}</span>
                      <span className={`font-bold transition-colors ${cat.active ? "text-white" : "text-[#6B6E70] group-hover:text-white"}`}>
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
                    className="px-5 py-2.5 rounded-[8px] text-[14px] font-extrabold transition-all duration-300 shadow-sm border border-transparent bg-white text-[#6B6E70] hover:bg-[#86C232] hover:text-white"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
         3. VIDEO LIGHTBOX MODAL
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#222629]/95 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#86C232] rounded-full flex items-center justify-center text-white transition-colors duration-300 z-[110]"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-[16px] overflow-hidden shadow-2xl relative"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}