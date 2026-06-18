"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* ─────────────────────────────────────────
   TESTIMONIAL DATA
───────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "The results we've seen after partnering with Wexoraa are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level.",
    name: "Ralph Edwards",
    role: "Co. Founder",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      "We've been working with them for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met.",
    name: "Devon Lane",
    role: "Sr. Manager",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      "Working with Wexoraa has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions helped us streamline operations.",
    name: "Guy Hawkins",
    role: "Sr. Executive",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
  },
];

/* ─────────────────────────────────────────
   EXTENDED ARRAY
───────────────────────────────────────── */
const EXTENDED_TESTIMONIALS = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

const ITEMS_COUNT = TESTIMONIALS.length;

/* ─────────────────────────────────────────
   LETTER ANIMATION
───────────────────────────────────────── */
function LetterScrollAnimation({ text }: { text: string }): React.ReactElement {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="inline-flex flex-wrap gap-x-[0.25em]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span key={letterIndex} variants={child}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

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
      MEASURE EXACT WIDTH
  ───────────────────────────────────────── */
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        setCardWidth(viewportRef.current.offsetWidth);
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
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, cardWidth]);

  /* ─────────────────────────────────────────
      INFINITE RESET
  ───────────────────────────────────────── */
  useEffect(() => {
    if (activeIndex === ITEMS_COUNT * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(ITEMS_COUNT);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(ITEMS_COUNT + index);
  };

  const realIndex = activeIndex % ITEMS_COUNT;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32 font-['Manrope',_sans-serif]">
      
      {/* Soft Ambient Glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#86C232]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* SYMMETRICAL 50/50 GRID */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end relative z-10">
        
        {/* ─────────────────────────────────────────
            LEFT COLUMN (Heading + Image)
        ───────────────────────────────────────── */}
        <div className="flex flex-col w-full">
          {/* Heading */}
          <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight text-[#222629] mb-8 md:mb-10 drop-shadow-sm">
            <LetterScrollAnimation text="Hear from Our" />
            <br />
            <span className="text-[#86C232]">
              <LetterScrollAnimation text="Customer." />
            </span>
          </h2>

          {/* IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-auto lg:h-[460px] lg:rounded-[10px] lg:overflow-hidden lg:shadow-[0_8px_32px_rgba(34,38,41,0.05)] lg:border-[1.5px] lg:border-[#EAF0ED]"
          >
            {/* Hidden on mobile, visible on lg screens */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Team"
              className="hidden lg:block w-full h-full object-cover"
            />

            {/* Glossy Rating Badge 
                UPDATED: Added mx-auto, text-center, and flex adjustments to center on mobile
            */}
            <div className="relative mx-auto lg:mx-0 lg:absolute lg:bottom-0 lg:right-0 bg-black/5 lg:bg-white/60 backdrop-blur-xl p-5 sm:p-6 rounded-[16px] lg:rounded-none lg:rounded-tl-[24px] border-[1.5px] lg:border-none lg:border-t-[1.5px] lg:border-l-[1.5px] border-black/5 lg:border-white/80 shadow-none lg:shadow-[-8px_-8px_32px_rgba(0,0,0,0.05)] w-fit flex flex-col items-center lg:items-start">
              <div className="text-4xl sm:text-6xl font-black leading-none text-[#86C232] drop-shadow-sm">
                4.9
              </div>

              <div className="flex gap-1 my-2 justify-center lg:justify-start w-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#86C232" strokeWidth={0} />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-extrabold text-[#222629] text-center lg:text-left">
                (80+ Clients Reviews)
              </p>
            </div>
          </motion.div>

          {/* Invisible spacer to match the height of the dots on the right side */}
          <div className="h-2.5 mt-6 sm:mt-8 hidden lg:block" />
        </div>

        {/* ─────────────────────────────────────────
            RIGHT COLUMN (Slider)
        ───────────────────────────────────────── */}
        <div className="flex flex-col w-full overflow-hidden">
          
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
                  ? "transform 1s cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
              }}
            >
              {EXTENDED_TESTIMONIALS.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  style={{ width: `${cardWidth}px` }}
                  className="flex-shrink-0"
                >
                  {/* EXACT SIZED GLOSSY CARD COMPONENT */}
                  <div className="flex flex-col relative p-8 md:p-10 rounded-[10px] overflow-hidden bg-gradient-to-br from-[#86C232]/10 to-[#222629]/[0.03] backdrop-blur-xl border border-[#86C232]/20 shadow-[0_8px_32px_rgba(34,38,41,0.05)] w-full h-[400px] lg:h-[460px]">
                    
                    {/* Inner Glossy Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#86C232]/5 via-transparent to-transparent pointer-events-none z-0" />

                    {/* Quote Icon */}
                    <div className="relative z-10 mb-5 text-[#86C232] drop-shadow-sm">
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9.983 18L9.983 10.609C9.983 4.905 6.235 1.038 1 0L0 2.151C2.433 3.068 4 5.789 4 8H0V18H9.983ZM24 18L24 10.609C24 4.905 20.252 1.038 15 0L14.004 2.151C16.437 3.068 18 5.789 18 8H14.017V18H24Z" />
                      </svg>
                    </div>

                    {/* Text */}
                    <p className="relative z-10 text-[#474B4F] text-[0.95rem] sm:text-[1rem] lg:text-[1.05rem] leading-[1.9] font-medium flex-grow">
                      {item.quote}
                    </p>

                    {/* User */}
                    <div className="relative z-10 flex items-center gap-4 mt-8">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-[2px] border-white shadow-sm"
                      />

                      <div>
                        {/* Name */}
                        <h4 className="text-[#222629] text-[1rem] sm:text-[1.1rem] font-extrabold">
                          {item.name}
                        </h4>

                        <div className="flex items-center gap-3 mt-1">
                          {/* Role */}
                          <p className="text-[#6B6E70] text-sm font-semibold">
                            {item.role}
                          </p>
                          <span className="w-7 h-[3px] rounded-full bg-[#86C232]" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6 sm:mt-8 justify-center lg:justify-start">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  realIndex === index
                    ? "w-8 bg-[#86C232]"
                    : "w-2.5 bg-[#86C232]/20 hover:bg-[#86C232]/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}