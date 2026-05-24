"use client";

import React, { useState, useEffect, useRef } from "react";
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
function LetterScrollAnimation({
  text,
}: {
  text: string;
}): React.ReactElement {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
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
      MEASURE WIDTH
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
    }, 3000);

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
    <section className="relative w-full overflow-hidden bg-[#f4f4f6] py-16 md:py-24 lg:py-32 font-['Manrope',_sans-serif]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* ─────────────────────────────────────────
            LEFT CONTENT
        ───────────────────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Heading */}
          <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] tracking-tight text-[#222629] mb-8 md:mb-10">
            <LetterScrollAnimation text="Hear from Our" />
            <br />
            {/* Added color wrapper for "Customer." */}
            <span className="text-[#86C232]">
              <LetterScrollAnimation text="Customer." />
            </span>
          </h2>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Team"
              className="w-full h-full object-cover"
            />

            {/* Rating Badge */}
            <div className="absolute bottom-0 right-0 bg-[#86C232] text-white p-4 sm:p-6 rounded-tl-[24px] border-t-[6px] border-l-[6px] border-[#f4f4f6]">
              <div className="text-4xl sm:text-6xl font-black leading-none">
                4.9
              </div>

              <div className="flex gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fff" strokeWidth={0} />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-semibold text-white/90">
                (80+ Clients Reviews)
              </p>
            </div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────
            RIGHT SLIDER — SHOWING SINGLE CARD
        ───────────────────────────────────────── */}
        <div
          className="lg:col-span-7 relative w-full overflow-hidden"
          ref={viewportRef}
        >
          <div
            className="w-full"
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
                  style={{
                    width: `${cardWidth}px`,
                  }}
                  className="
                    flex-shrink-0
                    flex flex-col
                    bg-[#222629]     /* <-- UPDATED CARD BACKGROUND */
                    rounded-[12px]
                    border border-white/10
                    shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_14px_35px_rgba(0,0,0,0.15)]
                    transition-all duration-300
                    p-6 sm:p-8 md:p-10 lg:p-12
                    min-h-[350px]
                    sm:min-h-[400px]
                    lg:h-[500px]
                  "
                >
                  {/* Quote Icon */}
                  <div className="mb-5 text-[#86C232]">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9.983 18L9.983 10.609C9.983 4.905 6.235 1.038 1 0L0 2.151C2.433 3.068 4 5.789 4 8H0V18H9.983ZM24 18L24 10.609C24 4.905 20.252 1.038 15 0L14.004 2.151C16.437 3.068 18 5.789 18 8H14.017V18H24Z" />
                    </svg>
                  </div>

                  {/* Text (Updated to white/80 for visibility) */}
                  <p className="text-white/80 text-[0.95rem] sm:text-[1rem] lg:text-[1.05rem] leading-[1.9] font-medium flex-grow">
                    {item.quote}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                    />

                    <div>
                      {/* Name (Updated to white for visibility) */}
                      <h4 className="text-white text-[1rem] sm:text-[1.1rem] font-extrabold">
                        {item.name}
                      </h4>

                      <div className="flex items-center gap-3 mt-1">
                        {/* Role (Updated to white/60 for visibility) */}
                        <p className="text-white/60 text-sm font-medium">
                          {item.role}
                        </p>

                        <span className="w-7 h-[3px] rounded-full bg-[#86C232]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4 sm:mt-6 pl-1">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  realIndex === index
                    ? "w-8 bg-[#86C232]"
                    : "w-2.5 bg-[#474B4F]/20 hover:bg-[#474B4F]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}