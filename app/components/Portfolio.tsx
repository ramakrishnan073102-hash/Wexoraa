"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowUpRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA TYPES & CONTENT
────────────────────────────────────────────────────────── */
interface PortfolioProject {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  results: string[];
  href: string;
}

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: "Travel & Tourism",
    subtitle: "Travel Websites & Booking Experiences",
    image: "/assets/img/ourprojects/t&t.jpeg",
    results: [
      "2x faster user workflows",
      "50% shorter time-to-market",
      "Nominated for UX Design Award 2024",
    ],
    href: "/portfolio/travel-tourism",
  },
  {
    id: 2,
    title: "E-Commerce",
    subtitle: "Online Stores & Shopping Platforms",
    image: "/assets/img/ourprojects/ecom.jpeg",
    results: [
      "$1.3M raised in pre-seed funding",
      "Strategic partnership with Samsung",
      "UX Design Award nomination",
    ],
    href: "/portfolio/e-commerce",
  },
  {
    id: 3,
    title: "Cab & Taxi Services",
    subtitle: "Booking & Lead Generation Websites",
    image: "/assets/img/ourprojects/cab.jpeg",
    results: [
      "+40% increase in user engagement",
      "3x faster platform navigation",
      'Awwwards "Site of the Day" winner',
    ],
    href: "/portfolio/cab-taxi-services",
  },
  {
    id: 4,
    title: "Laundry Solutions",
    subtitle: "Laundry Websites & Digital Platforms",
    image: "/assets/img/ourprojects/laundry.jpeg",
    results: [
      "Clearer brand positioning",
      "Consistent visual system",
      "Boosted global user retention by 35%",
    ],
    href: "/portfolio/laundry-solutions",
  },
  {
    id: 5,
    title: "Mobile Applications",
    subtitle: "Custom Mobile App Development",
    image: "/assets/img/ourprojects/mobile.jpeg",
    results: [
      "Faster time-to-market",
      "Established credible product presence",
      "Built with enterprise scalability in mind",
    ],
    href: "/portfolio/mobile-applications",
  },
  {
    id: 6,
    title: "Business Platforms",
    subtitle: "CRM, ERP, SaaS & Custom Software",
    image: "/assets/img/ourprojects/business.jpeg",
    results: [
      "Faster time-to-market",
      "Established credible product presence",
      "Built with enterprise scalability in mind",
    ],
    href: "/portfolio/business-platforms",
  },
  {
    id: 7,
    title: "Real-Time Messaging App",
    subtitle: "Mobile Communication Platform",
    image: "/assets/img/ourprojects/real.jpeg",
    results: [
      "Faster time-to-market",
      "Established credible product presence",
      "Built with enterprise scalability in mind",
    ],
    href: "/portfolio/real-time-messaging-app",
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — PORTFOLIO PAGE
────────────────────────────────────────────────────────── */
export default function PortfolioPage(): React.ReactElement {
  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28 text-[#222629]">
      
      {/* ════════════════════════════════════════
         1. HERO SECTION
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[10px] md:rounded-[15px] flex items-center justify-center overflow-hidden shadow-sm">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/images/photo-1600880292203-757bb62b4baf.jpg')",
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
         2. CASE STUDY LIST
      ════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="flex flex-col gap-12 md:gap-16">
          <AnimatePresence mode="popLayout">
            {PORTFOLIO_PROJECTS.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start border-b border-[#474B4F]/15 pb-12 md:pb-16 last:border-none last:pb-0"
              >
                
                {/* LEFT: Project Showcase Image */}
                <div className="lg:col-span-6 w-full h-[280px] sm:h-[400px] md:h-[460px] rounded-[16px] overflow-hidden bg-[#EEF3EE] border border-[#474B4F]/10 relative group shadow-sm lg:mt-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#222629]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* RIGHT: Project Details */}
                <div className="lg:col-span-6 flex flex-col justify-center h-full pt-1 lg:pt-8">
                  <div className="mb-10">
                    {/* Title */}
                    <Link
                      href={project.href}
                      className="group/title block w-fit mb-8 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86C232]"
                    >
                      <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-black text-[#222629] tracking-tight leading-[1.15] mb-3 transition-colors group-hover/title:text-[#61892F]">
                        {project.title}
                      </h2>
                      <p className="text-base sm:text-lg font-semibold text-[#6B6E70] mb-0">
                        {project.subtitle}
                      </p>
                    </Link>

                    {/* Results List */}
                    <div>
                      <span className="block text-xs text-[#6B6E70] font-extrabold uppercase tracking-wider mb-4">
                        Key Results
                      </span>
                      <ul className="space-y-3">
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