"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowUpRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   CATEGORIES & DATA
────────────────────────────────────────────────────────── */
const CATEGORIES = [
  "All Projects",
  "Web App",
  "Mobile App",
  "Website",
  "Digital Marketing",
  "Custom Software",
];

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    category: "Web App",
    tags: ["#UX AUDIT", "#PRODUCT REDESIGN", "#WEB DEVELOPMENT"],
    title: "Isora – optimizing governance, risk & compliance for top institutions",
    client: "SALTYCLOUD",
    location: "TEXAS, USA",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    techStack: "React, Python, AWS, Next.js",
    timeline: "12 months, ongoing",
    results: [
      "2x faster user workflows",
      "50% shorter time-to-market",
      "Nominated for UX Design Award 2024",
    ],
    href: "/portfoliopage1",
  },
  {
    id: 2,
    category: "Mobile App",
    tags: ["#PRODUCT REDESIGN", "#MOBILE APP DEVELOPMENT"],
    title: "MyWisdom – a digital platform for safer, more connected aging",
    client: "MYWISDOM",
    location: "USA",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    techStack: "Flutter, Java, Spring Boot, AWS",
    timeline: "5 months",
    results: [
      "$1.3M raised in pre-seed funding",
      "Strategic partnership with Samsung",
      "UX Design Award nomination",
    ],
    href: "/portfoliopage2",
  },
  {
    id: 3,
    category: "Website",
    tags: ["#WEBSITE DESIGN", "#WEBSITE DEVELOPMENT"],
    title: "Shaga Odyssey – an award-winning web3 gamepad platform",
    client: "SHAGA.XYZ",
    location: "USA",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    techStack: "Next.js, Tailwind CSS, Three.js",
    timeline: "5 months",
    results: [
      "+40% increase in user engagement",
      "3x faster platform navigation",
      "Awwwards &quot;Site of the Day&quot; winner",
    ],
    href: "/portfoliopage3",
  },
  {
    id: 4,
    category: "Digital Marketing",
    tags: ["#BRANDING", "#GROWTH STRATEGY", "#SEO"],
    title: "Scrambly – branding for a rewarded discovery platform for games",
    client: "SCRAMBLY",
    location: "ITALY",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    techStack: "GA4, Semrush, Mixpanel",
    timeline: "6 months",
    results: [
      "Clearer brand positioning",
      "Consistent visual system",
      "Boosted global user retention by 35%",
    ],
    href: "/portfoliopage4",
  },
  {
    id: 5,
    category: "Custom Software",
    tags: ["#AI TUTORING", "#CUSTOM ARCHITECTURE", "#EDTECH"],
    title: "Tailor – interactive AI tutoring architecture for kids and teens",
    client: "TAILOR",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    techStack: "Python, OpenAI API, Node.js, React",
    timeline: "8 months",
    results: [
      "Faster time-to-market",
      "Established credible product presence",
      "Built with enterprise scalability in mind",
    ],
    href: "/portfoliopage5",
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — PORTFOLIO PAGE
────────────────────────────────────────────────────────── */
export default function PortfolioPage(): React.ReactElement {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  // Filter logic
  const filteredProjects =
    activeCategory === "All Projects"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28 text-[#222629]">
      
      {/* ════════════════════════════════════════
         1. HERO SECTION (Your Exact Hero)
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[10px] md:rounded-[15px] flex items-center justify-center overflow-hidden shadow-sm">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />

          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Explore Our Projects
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors"
              >
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
         2. WEXORAA CATEGORY FILTER TABS (Tighter Bottom Margin)
      ════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none border-b border-[#474B4F]/15">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-extrabold text-[13px] sm:text-[14.5px] tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-[#222629] text-[#86C232] shadow-md scale-105"
                    : "bg-[#EEF3EE] text-[#474B4F] hover:bg-[#86C232]/20 hover:text-[#222629]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════
         3. CASE STUDY LIST (Tightened Gaps)
      ════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* CHANGED: gap-20 md:gap-32 -> gap-12 md:gap-16 */}
        <motion.div layout className="flex flex-col gap-12 md:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                /* CHANGED: pb-20 md:pb-32 -> pb-12 md:pb-16 */
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start border-b border-[#474B4F]/15 pb-12 md:pb-16 last:border-none last:pb-0"
              >
                
                {/* LEFT: Project Showcase Image */}
                <div className="lg:col-span-6 w-full h-[280px] sm:h-[400px] md:h-[460px] rounded-[16px] overflow-hidden bg-[#EEF3EE] border border-[#474B4F]/10 relative group shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#222629]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* RIGHT: Project Details */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full pt-1">
                  <div>
                    {/* Top Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 text-[#86C232] font-extrabold text-[12px] tracking-widest uppercase">
                      {project.tags.join("  ")}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-black text-[#222629] tracking-tight leading-[1.15] mb-5">
                      {project.title}
                    </h2>

                    {/* Client Badges */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className="bg-[#222629] text-[#86C232] px-3.5 py-1 rounded-md font-bold text-xs tracking-wider uppercase shadow-sm">
                        {project.client}
                      </span>
                      <span className="bg-[#EEF3EE] text-[#474B4F] border border-[#474B4F]/10 px-3 py-1 rounded-md font-bold text-xs tracking-wider flex items-center gap-1.5 uppercase">
                        📍 {project.location}
                      </span>
                    </div>

                    {/* Meta Grid: Tech Stack & Timeline */}
                    <div className="grid grid-cols-2 gap-6 py-5 border-y border-[#474B4F]/15 mb-7 font-medium">
                      <div>
                        <span className="block text-xs text-[#6B6E70] font-extrabold uppercase tracking-wider mb-1">
                          Tech Stack
                        </span>
                        <span className="text-sm sm:text-[15px] text-[#222629] font-extrabold">
                          {project.techStack}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-[#6B6E70] font-extrabold uppercase tracking-wider mb-1">
                          Timeline
                        </span>
                        <span className="text-sm sm:text-[15px] text-[#222629] font-extrabold">
                          {project.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Results List */}
                    <div className="mb-8">
                      <span className="block text-xs text-[#6B6E70] font-extrabold uppercase tracking-wider mb-2.5">
                        Key Results
                      </span>
                      <ul className="space-y-2">
                        {project.results.map((res, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm sm:text-[15px] font-semibold text-[#474B4F]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#86C232] shrink-0" />
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* SIGNATURE WEXORAA EXPLORE BUTTON */}
                  <div>
                    <Link
                      href={project.href}
                      className="group inline-flex items-center gap-4 bg-[#222629] text-white hover:bg-[#86C232] hover:text-[#222629] rounded-full pl-6 pr-2 py-2 font-extrabold text-[15px] transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(134,194,50,0.35)] hover:-translate-y-0.5 w-fit"
                    >
                      <span className="tracking-tight">Explore Project</span>
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#86C232] text-[#222629] group-hover:bg-[#222629] group-hover:text-white transition-colors duration-300 shrink-0">
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2.5}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />
                      </span>
                    </Link>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}