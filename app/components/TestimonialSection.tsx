"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

/* ─────────────────────────────────────────
   TESTIMONIAL DATA
───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "The results we've seen after partnering with Wexoraa are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level.",
    name: "Ralph Edwards",
    role: "1 day ago",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      "We've been working with them for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met.",
    name: "Devon Lane",
    role: "3 days ago",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      "Working with Wexoraa has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions helped us streamline operations.",
    name: "Guy Hawkins",
    role: "1 week ago",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
  },
];

/* ─────────────────────────────────────────
   EXTENDED ARRAY FOR INFINITE SLIDER
───────────────────────────────────────── */
const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

const ITEMS_COUNT = TESTIMONIALS.length;

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function TestimonialSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(ITEMS_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);

  /* ─────────────────────────────────────────
      MEASURE RESPONSIVE WIDTH
      Mobile: 1 card visible
      Tablet: 1.5 cards visible
      Desktop: 2 cards visible
  ───────────────────────────────────────── */
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        const containerWidth = viewportRef.current.offsetWidth;
        if (window.innerWidth >= 1024) {
          setCardWidth(containerWidth / 2); // Show 2 cards on desktop
        } else if (window.innerWidth >= 768) {
          setCardWidth(containerWidth / 1.5); // Show 1.5 cards on tablet
        } else {
          setCardWidth(containerWidth); // Show 1 card on mobile
        }
      }
    };

    measure();
    window.addEventListener("resize", measure);
    const timer = setTimeout(measure, 100);

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
    };
  }, []);

  /* ─────────────────────────────────────────
      AUTO SLIDE
  ───────────────────────────────────────── */
  useEffect(() => {
    if (isHovered || cardWidth === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, cardWidth]);

  /* ─────────────────────────────────────────
      INFINITE RESET (Works left & right)
  ───────────────────────────────────────── */
  useEffect(() => {
    if (activeIndex === 0 || activeIndex === ITEMS_COUNT * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(ITEMS_COUNT);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500); // Matches transition duration

      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32 font-['Manrope',_sans-serif]">
      
      {/* Soft Ambient Glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[800px] bg-[#86C232]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1300px] mx-auto px-3 md:px-6 lg:px-10 relative z-10">
        
        {/* ─────────────────────────────────────────
            TOP HEADER (Matches Reference Image)
        ───────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#222629] mb-4">
            Reviews from <span className="text-[#86C232]">real people</span>
          </h2>
          <div className="flex items-center gap-2 sm:gap-3 text-sm md:text-base font-bold text-[#474B4F]">
            <span>4.9/5</span>
            <Star size={20} fill="#86C232" className="text-[#86C232]" strokeWidth={0} />
            <span className="text-[#222629] font-black tracking-wide">Wexoraa</span>
            <span className="text-gray-400 font-medium">|</span>
            <span className="font-semibold text-gray-500">Based on 80+ reviews</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            MAIN SPLIT LAYOUT GRID
        ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Sticky Context & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <Quote size={64} className="text-[#86C232]/30 mb-6 rotate-180" fill="currentColor" strokeWidth={0} />
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#222629] leading-tight mb-8 max-w-sm">
              What our <br className="hidden lg:block" /> customers are <br className="hidden lg:block" /> saying
            </h3>

            {/* Custom Arrow Controls */}
            <div className="flex items-center gap-4 mt-2">
              <button 
                onClick={handlePrev} 
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#474B4F] hover:text-[#86C232] hover:bg-[#86C232]/10 transition-all"
              >
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>
              
              {/* Status Line */}
              <div className="w-16 h-[2px] bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#222629] w-1/3 rounded-full" />
              </div>

              <button 
                onClick={handleNext} 
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#474B4F] hover:text-[#86C232] hover:bg-[#86C232]/10 transition-all"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Slider Track */}
          <div className="lg:col-span-8 w-full overflow-hidden relative">
            
            {/* Edge Fade Masks for a seamless look */}
            <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <div
              className="w-full"
              ref={viewportRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="flex will-change-transform"
                style={{
                  transform: `translateX(-${activeIndex * cardWidth}px)`,
                  transition: isTransitioning
                    ? "transform 0.5s ease-in-out"
                    : "none",
                }}
              >
                {EXTENDED_TESTIMONIALS.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    style={{ width: `${cardWidth}px` }}
                    className="flex-shrink-0 px-3 md:px-4"
                  >
                    {/* WEXORAA GLOSSY CARD */}
                    <div className="flex flex-col relative p-8 md:p-10 rounded-[20px] overflow-hidden bg-gradient-to-br from-[#86C232]/10 to-[#222629]/[0.03] backdrop-blur-xl border border-[#86C232]/20 shadow-[0_8px_32px_rgba(34,38,41,0.05)] w-full h-full min-h-[380px] lg:min-h-[420px]">
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-[#86C232]/5 via-transparent to-transparent pointer-events-none z-0" />

                      {/* Top: Quote Text */}
                      <p className="relative z-10 text-[#474B4F] text-[0.95rem] lg:text-[1.05rem] leading-[1.8] font-medium flex-grow mb-6">
                        {item.quote}
                      </p>

                      {/* Middle: Stars */}
                      <div className="relative z-10 flex gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#86C232" className="text-[#86C232]" strokeWidth={0} />
                        ))}
                      </div>

                      {/* Bottom: Profile & Date */}
                      <div className="relative z-10 flex items-center gap-4 mt-auto">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover shadow-sm"
                        />
                        <div>
                          <h4 className="text-[#222629] text-[1rem] font-extrabold tracking-tight">
                            {item.name}
                          </h4>
                          <p className="text-[#6B6E70] text-xs font-semibold mt-0.5">
                            {item.role}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}