"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  AtSign
} from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaLinkedinIn 
} from "react-icons/fa6";

/* ──────────────────────────────────────────────────────────
   TEAM DATA (14 Members Total: 8 on Pg1, 6 on Pg2)
────────────────────────────────────────────────────────── */
const TEAM_MEMBERS = [
  // --- PAGE 1 (8 Members) ---
  {
    id: 1,
    name: "Savannah Nguen",
    role: "Operations Head",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    email: "savannah@wexoraa.com",
  },
  {
    id: 2,
    name: "Kristin Watson",
    role: "Marketing Lead",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    email: "kristin@wexoraa.com",
  },
  {
    id: 3,
    name: "Darlene Roberts",
    role: "Business Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    email: "darlene@wexoraa.com",
  },
  {
    id: 4,
    name: "Eade Marren",
    role: "Chief Executive",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    email: "eade@wexoraa.com",
  },
  {
    id: 5,
    name: "Emma Richardson",
    role: "Marketing Lead",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    email: "emma@wexoraa.com",
  },
  {
    id: 6,
    name: "Benjamin Reed",
    role: "Operations Head",
    img: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&w=600&q=80",
    email: "benjamin@wexoraa.com",
  },
  {
    id: 7,
    name: "Caleb Turner",
    role: "Business Director",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    email: "caleb@wexoraa.com",
  },
  {
    id: 8,
    name: "Nathaniel Ellington",
    role: "Business Director",
    img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&w=600&q=80",
    email: "nathaniel@wexoraa.com",
  },
  // --- PAGE 2 (6 Members) ---
  {
    id: 9,
    name: "Michael Chen",
    role: "Senior Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    email: "michael@wexoraa.com",
  },
  {
    id: 10,
    name: "Sarah Jenkins",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    email: "sarah@wexoraa.com",
  },
  {
    id: 11,
    name: "David Torres",
    role: "Financial Analyst",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    email: "david@wexoraa.com",
  },
  {
    id: 12,
    name: "Emily Carter",
    role: "HR Manager",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    email: "emily@wexoraa.com",
  },
  {
    id: 13,
    name: "James Wilson",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80",
    email: "james@wexoraa.com",
  },
  {
    id: 14,
    name: "Olivia Martinez",
    role: "Lead Designer",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    email: "olivia@wexoraa.com",
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function TeamPage(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // 8 members on Page 1, 6 members on Page 2
  const currentMembers = currentPage === 1 
    ? TEAM_MEMBERS.slice(0, 8) 
    : TEAM_MEMBERS.slice(8, 14);

  const totalPages = 2; 

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
              Team
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
              <span className="text-white font-bold">Team</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. TEAM GRID SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 bg-[#f8f9fa]" ref={gridRef}>
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14"
            >
              {currentMembers.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex flex-col bg-transparent"
                >
                  {/* ── IMAGE BOX (BOXY DESIGN) ── */}
                  <div className="relative w-full h-[320px] sm:h-[340px] bg-[#e8eceb] rounded-[24px] overflow-hidden shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(34,38,41,0.08)]">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top" 
                    />
                    
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-[#222629]/85 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                      {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, idx) => (
                        <Link 
                          key={idx} 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#86C232] hover:text-[#111316] flex items-center justify-center transition-colors duration-300"
                        >
                          <Icon size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ── INFO TEXT (NORMAL BACKGROUND) ── */}
                  <div className="flex items-center justify-between pt-6 px-2 bg-transparent transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="text-left">
                      <h4 className="text-[1.15rem] font-extrabold text-[#222629] mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[#6B6E70] text-sm font-semibold">
                        {member.role}
                      </p>
                    </div>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="w-10 h-10 rounded-full border border-[#474B4F]/20 flex items-center justify-center text-[#474B4F] hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 flex-shrink-0"
                    >
                      <AtSign size={16} strokeWidth={2.5} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ════════════════════════════════════════════════════
              3. PAGINATION CONTROLS
          ════════════════════════════════════════════════════ */}
          <div className="flex items-center justify-center gap-3 mt-20">
            
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm hover:shadow-md"
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

            {currentPage < totalPages && (
              <button
                onClick={handleNextPage}
                className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}