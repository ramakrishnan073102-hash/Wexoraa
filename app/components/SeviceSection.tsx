"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Blocks, Radar, Leaf, Sun, Package } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────── */
interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  desc: string;
  bullets: string[];
  image: string;
}

/* ─────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────── */
const SERVICES: Service[] = [
  {
    id: "01",
    title: "Business Strategy Development",
    icon: Blocks,
    desc: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized corporate execution models.",
    bullets: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Customer Experience Solutions",
    icon: Radar,
    desc: "We analyze your customer touchpoints to design seamless, engaging journeys that build brand loyalty and increase retention metrics.",
    bullets: ["Journey Mapping", "Omnichannel Support", "Feedback Analysis"],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Sustainability and ESG Consulting",
    icon: Leaf,
    desc: "Help your corporate entity meet modern environmental standards with actionable ESG frameworks and sustainable growth models.",
    bullets: ["Carbon Footprint Reduction", "ESG Reporting", "Sustainable Supply Chain"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "04",
    title: "Training Development Programs",
    icon: Sun,
    desc: "Empower your workforce with tailored training programs designed to upskill employees and align with your corporate objectives.",
    bullets: ["Leadership Training", "Technical Workshops", "Culture Integration"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
];

/* ─────────────────────────────────────────
   SCROLL REVEAL ANIMATION COMPONENT
───────────────────────────────────────── */
function FadeInReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STICKY STACKED BOX CARD
───────────────────────────────────────── */
function ServiceCard({
  service,
  index,
  total,
}: {
  service: Service;
  index: number;
  total: number;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end start"],
  });

  // Calculate top padding to stack cards below the navbar (assuming nav is ~100px)
  const topOffset = `calc(12vh + ${index * 30}px)`;

  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.5]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.7]);
  const filter = useTransform([brightness], ([b]: number[]) => `brightness(${b})`);

  // Circular scroll-progress indicator
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(scrollYProgress, (v) => circumference * (1 - v));
  const progressLabel = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const indicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    isLast ? [0, 0, 0, 0] : [0, 1, 1, 0]
  );

  return (
    <div 
      ref={cardRef} 
      className="sticky w-full px-5 md:px-8 mb-24 lg:mb-40" 
      style={{ top: topOffset, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity, filter }}
        className="relative w-full max-w-[1300px] mx-auto origin-top flex flex-col lg:flex-row rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-[#111617]"
      >
        {/* Left Side: Dark Background with Content */}
        <div className="relative z-[2] w-full lg:w-[55%] flex flex-col justify-center p-8 md:p-14 lg:p-20 bg-[#111617]">
          
          {/* Icon Block */}
          <div className="w-16 h-16 rounded-full bg-[#1b2628] flex items-center justify-center text-[#86C232] mb-12 shadow-sm border border-[#2c383a]">
            <Icon size={30} strokeWidth={1.5} />
          </div>

          {/* Index Number */}
          <span className="block text-[#86C232] text-[15px] font-bold tracking-[0.05em] mb-4">
            {service.id}.
          </span>

          {/* Title */}
          <h3 className="text-white text-3xl md:text-4xl lg:text-[2.8rem] font-medium leading-[1.1] mb-6 tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[#a0a5a3] text-base md:text-[1.05rem] leading-relaxed mb-10 max-w-xl font-normal">
            {service.desc}
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="group inline-flex items-center gap-3 bg-[#86C232] hover:bg-[#61892F] transition-colors duration-300 rounded-full pl-6 pr-2 py-2 w-fit shadow-lg"
          >
            <span className="text-white font-bold text-sm md:text-[15px]">
              Learn More
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#222629] text-white transition-colors duration-300">
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:rotate-45 transition-transform duration-300 ease-out"
              />
            </span>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="relative z-[2] w-full lg:w-[45%] h-[350px] lg:h-auto">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10" />

          {/* Scroll progress indicator floating on the right edge */}
          {!isLast && (
            <motion.div
              style={{ opacity: indicatorOpacity }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center justify-center z-10"
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-xl border border-[#eef0ee]">
                <svg
                  className="absolute inset-0 -rotate-90"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r={radius}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r={radius}
                    fill="none"
                    stroke="#86C232"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    style={{ strokeDashoffset }}
                  />
                </svg>
                <motion.span className="text-[#222629] text-[13px] font-extrabold tabular-nums">
                  {progressLabel}
                </motion.span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION COMPONENT
───────────────────────────────────────── */
export default function ServiceSection(): React.ReactElement {
  return (
    <section className="w-full bg-[#f8f9f8] relative pb-20 font-['Manrope',_sans-serif]">
      
      {/* ══════════════════════════════════════════
          1. HEADER SECTION
      ══════════════════════════════════════════ */}
      <div className="flex flex-col items-center justify-center pt-24 pb-20 px-6 text-center">
        <FadeInReveal>
          {/* Transparent Outline Badge (Matching reference image) */}
          <span className="inline-block text-[#86C232] border border-[#86C232] px-[16px] py-[6px] rounded-[5px] text-[11px] font-extrabold tracking-[2px] uppercase mb-[20px]">
            Our Solutions
          </span>
        </FadeInReveal>

        <FadeInReveal delay={0.1}>
          {/* Title */}
          <h2 className="text-[#222629] text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6">
            Tailor Business Solutions <br className="hidden md:block" />
            for Corporates.
          </h2>
          <p className="text-[#6B6E70] text-lg max-w-2xl mx-auto font-medium">
           
          </p>
        </FadeInReveal>
      </div>

      {/* ══════════════════════════════════════════
          2. STICKY STACKED BOX CARDS
      ══════════════════════════════════════════ */}
      <div className="relative w-full">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} total={SERVICES.length} />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          3. FOOTER BANNER
      ══════════════════════════════════════════ */}
      <div className="relative w-full px-6 flex items-center justify-center text-center md:text-left pt-10" style={{ zIndex: SERVICES.length + 1 }}>
        <FadeInReveal>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-[#474B4F] text-lg md:text-xl font-medium">
            <div className="flex items-center gap-3">
              <Package className="text-[#86C232]" size={24} />
              <span>Unlock tailored solutions without the wasted effort.</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-bold text-[#222629] hover:text-[#86C232] transition-colors duration-300 underline decoration-[#86C232] decoration-2 underline-offset-4"
            >
              Talk to us today <ArrowUpRight size={20} />
            </Link>
          </div>
        </FadeInReveal>
      </div>

    </section>
  );
}