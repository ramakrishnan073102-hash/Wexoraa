"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   PORTFOLIO DATA
───────────────────────────────────────── */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Event Management Platform",
    badge: "Connect",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    id: 2,
    title: "Digital Marketing Campaign",
    badge: "Empower",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    id: 3,
    title: "Interactive Learning Platform",
    badge: "Support",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    badge: "Growth",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    id: 5,
    title: "E-Commerce Mobile App",
    badge: "Commerce",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    id: 6,
    title: "Corporate Identity Rebrand",
    badge: "Brand",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
];

// Triplicate the array to allow for infinite looping
const EXTENDED_ITEMS = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS];
const ITEMS_COUNT = PORTFOLIO_ITEMS.length;

export default function PortfolioSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(ITEMS_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* ── EXACT SLIDE WIDTH CALCULATION ── */
  useEffect(() => {
    const measure = () => {
      if (trackRef.current && trackRef.current.children.length > 1) {
        const firstCard = trackRef.current.children[0] as HTMLElement;
        const secondCard = trackRef.current.children[1] as HTMLElement;
        // Total width includes the card width + the gap
        setSlideWidth(secondCard.offsetLeft - firstCard.offsetLeft);
      }
    };
    
    measure();
    window.addEventListener("resize", measure);
    // Timeout ensures images/styles load before measuring
    setTimeout(measure, 200); 
    
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ── AUTOMATIC CONTINUOUS SLIDING ── */
  useEffect(() => {
    // Pause if user is hovering or if we haven't calculated widths yet
    if (isHovered || slideWidth === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered, slideWidth]);

  /* ── SEAMLESS INFINITE LOOP RESET ── */
  useEffect(() => {
    // When we reach the start of the 3rd set of items
    if (activeIndex === ITEMS_COUNT * 2) {
      const timeout = setTimeout(() => {
        // 1. Turn off animation
        setIsTransitioning(false); 
        // 2. Teleport back to the 2nd set (visually identical)
        setActiveIndex(ITEMS_COUNT); 
        // 3. Turn animation back on
        setTimeout(() => setIsTransitioning(true), 50);
      }, 800); // 800ms matches the CSS transition duration below
      
      return () => clearTimeout(timeout);
    }
    
    // When we scroll backward past the start of the 2nd set
    if (activeIndex === ITEMS_COUNT - 1 && !isHovered) {
         const timeout = setTimeout(() => {
            setIsTransitioning(false); 
            setActiveIndex((ITEMS_COUNT * 2) - 1); 
            setTimeout(() => setIsTransitioning(true), 50);
          }, 800); 
          return () => clearTimeout(timeout);
    }
  }, [activeIndex, isHovered]);

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(ITEMS_COUNT + index);
  };

  // Determine the true logical index (0 to 5) for the pagination dots
  const realIndex = activeIndex % ITEMS_COUNT;

  return (
    <section 
      id="portfolio"
      className="relative bg-white py-20 md:py-[120px] overflow-hidden w-full font-['Manrope',_sans-serif]"
    >
      
      {/* ── ANIMATED HEADER ── */}
      <div className="text-center mb-[50px] md:mb-[60px] px-6 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-[#86C232] border border-[#86C232] px-[16px] py-[6px] rounded-[5px] text-[11px] font-extrabold tracking-[2px] uppercase mb-[20px]"
        >
          PROUD PROJECTS
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold text-[#222629] leading-[1.1] tracking-[-0.03em]"
        >
          Breaking Boundaries,<br />
          Building <span className="text-[#86C232]">Dreams.</span>
        </motion.h2>
      </div>

      {/* ── SCROLL SLIDER VIEWPORT AREA ── */}
      {/* Responsive Centering Logic:
        Mobile: pl-[calc(50vw-140px)] perfectly centers the 280px wide card.
        Tablet: pl-[calc(50vw-175px)] perfectly centers the 350px wide card.
        Desktop: pl-[clamp(24px,6vw,100px)] returns it to the classic left-aligned look.
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full overflow-hidden py-[20px] pl-[calc(50vw-140px)] sm:pl-[calc(50vw-175px)] lg:pl-[clamp(24px,6vw,100px)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex gap-[16px] sm:gap-[24px] lg:gap-[32px] w-max will-change-transform" 
          ref={trackRef}
          style={{ 
            transform: `translateX(-${activeIndex * slideWidth}px)`,
            // 800ms transition matches the teleport timeout above
            transition: isTransitioning ? "transform 800ms cubic-bezier(0.25, 1, 0.5, 1)" : "none" 
          }}
        >
          {EXTENDED_ITEMS.map((item, index) => {
            return (
              <Link
                key={`${item.id}-${index}`}
                href={item.href}
                // Responsive card widths to fit screens nicely
                className="group/card flex-none w-[280px] sm:w-[350px] lg:w-[420px] h-[380px] sm:h-[460px] lg:h-[520px] rounded-[10px] relative overflow-hidden cursor-pointer no-underline opacity-100"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover/card:scale-[1.08]" 
                />
                
                {/* ── OVERLAY STYLE ── */}
                {/* Always visible on mobile, appears on hover on desktop */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-[30px] sm:p-[40px] text-center transition-all duration-500 z-10 bg-[#111316]/50 lg:bg-transparent lg:group-hover/card:bg-[#111316]/75">
                  
                  {/* Content Wrapper */}
                  <div className="flex flex-col items-center transition-all duration-500 opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100 lg:translate-y-4 lg:group-hover/card:translate-y-0">
                    
                    <span className="bg-transparent border border-white/40 text-white text-[12px] sm:text-[13px] font-medium px-[20px] py-[6px] rounded-full mb-[16px] sm:mb-[20px] backdrop-blur-sm">
                      {item.badge}
                    </span>
                    
                    <h3 className="text-white text-[1.6rem] sm:text-[2rem] font-bold tracking-[-0.02em] leading-[1.2] mb-[20px] sm:mb-[24px]">
                      {item.title}
                    </h3>
                    
                    <div className="text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover/card:translate-x-[6px] lg:group-hover/card:-translate-y-[6px] lg:group-hover/card:text-[#86C232]">
                      <ArrowUpRight size={60} className="sm:w-[80px] sm:h-[80px]" strokeWidth={1} />
                    </div>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* ── PAGINATION ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center gap-[10px] mt-[40px] sm:mt-[50px]"
      >
        {PORTFOLIO_ITEMS.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-[8px] rounded-full cursor-pointer transition-all duration-500 ${
              realIndex === index ? "w-[35px] bg-[#86C232]" : "w-[8px] bg-[#222629]/20 hover:bg-[#222629]/40"
            }`}
          />
        ))}
      </motion.div>

    </section>
  );
}