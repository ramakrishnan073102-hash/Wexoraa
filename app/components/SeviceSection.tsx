"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Blocks, Radar, Leaf, Sun, Package } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────── */
interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  desc: string;
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
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Customer Experience Solutions",
    icon: Radar,
    desc: "We analyze your customer touchpoints to design seamless, engaging journeys that build brand loyalty and increase retention metrics.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Sustainability and ESG Consulting",
    icon: Leaf,
    desc: "Help your corporate entity meet modern environmental standards with actionable ESG frameworks and sustainable growth models.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "04",
    title: "Training Development Programs",
    icon: Sun,
    desc: "Empower your workforce with tailored training programs designed to upskill employees and align with your corporate objectives.",
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
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STICKY STACKED CARD
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  // Each card's sticky top offset staggers 24px per card
  const topOffset = `calc(6rem + ${index * 24}px)`;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Scale card down as it scrolls behind next card (desktop only effect)
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.88]);
  // Darken overlay fades in as card scrolls behind
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : 0.7]);

  return (
    /*
     * RESPONSIVE WRAPPER:
     * Mobile/Tablet (< lg): h-auto, mb-8 gap between cards, no stacking
     * Desktop (>= lg): h-[120vh] scroll track for sticky stacking effect, no gap
     */
    <div
      ref={wrapperRef}
      className={`
        relative w-full
        mb-8 sm:mb-10 md:mb-12
        lg:mb-0
        ${isLast ? "h-auto lg:pb-10" : "h-auto lg:h-[120vh]"}
      `}
    >
      <div
        className="w-full px-4 sm:px-6 md:px-8 relative lg:sticky lg:top-[var(--sticky-top)]"
        style={{
          zIndex: index + 1,
          "--sticky-top": topOffset,
        } as React.CSSProperties}
      >
        {/*
         * CARD SHELL
         * .mobile-stack-reset overrides Framer Motion inline scale on mobile/tablet.
         * This prevents cards from being scaled down on touch devices.
         */}
        <motion.div
          style={{ scale, transformOrigin: "top center" }}
          className="
            mobile-stack-reset
            relative w-full max-w-[1300px] mx-auto
            flex flex-col lg:flex-row
            rounded-3xl sm:rounded-[10px]
            overflow-hidden
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            bg-[#111617]
          "
        >
          {/* ── Left: Content ── */}
          <div className="
            relative z-[2] w-full lg:w-[55%]
            flex flex-col justify-center
            p-8 sm:p-12 md:p-14 lg:p-20
            bg-[#111617]
          ">
            {/* Icon */}
            <div className="
              w-16 h-16 rounded-full
              bg-[#1b2628] border border-[#2c383a]
              flex items-center justify-center
              text-[#86C232] mb-10 md:mb-12
              shadow-sm
            ">
              <Icon size={30} strokeWidth={1.5} />
            </div>

            {/* Index */}
            <span className="block text-[#86C232] text-[15px] font-bold tracking-[0.05em] mb-4">
              {service.id}.
            </span>

            {/* Title */}
            <h3 className="
              text-white font-medium leading-[1.1] tracking-tight mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem]
            ">
              {service.title}
            </h3>

            {/* Description */}
            <p className="
              text-[#a0a5a3] leading-relaxed font-normal mb-8 md:mb-10 max-w-xl
              text-base md:text-[1.05rem]
            ">
              {service.desc}
            </p>

            {/* CTA */}
            <Link
              href="#"
              className="
                group inline-flex items-center gap-3 w-fit
                bg-[#86C232] hover:bg-[#61892F]
                transition-colors duration-300
                rounded-full pl-6 pr-2 py-2
                shadow-lg
              "
            >
              <span className="text-white font-bold text-sm md:text-[15px]">
                Learn More
              </span>
              <span className="
                flex items-center justify-center
                w-9 h-9 rounded-full
                bg-[#222629] text-white
                transition-colors duration-300
              ">
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="group-hover:rotate-45 transition-transform duration-300 ease-out"
                />
              </span>
            </Link>
          </div>

          {/* ── Right: Image ── */}
          <div className="
            relative z-[2] w-full lg:w-[45%]
            h-[260px] xs:h-[300px] sm:h-[360px] md:h-[400px] lg:h-auto
          ">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10" />
          </div>

          {/* ── Dark Overlay — desktop stacking effect only ── */}
          {!isLast && (
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="hidden lg:block pointer-events-none absolute inset-0 z-[10] bg-black"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function ServiceSection(): React.ReactElement {
  return (
    <>
      {/*
       * MOBILE SCALE RESET
       * Forces transform: none on all screens below lg (1024px).
       * This undoes Framer Motion's inline scale style so cards don't
       * shrink or overlap on mobile/tablet.
       */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 1023px) {
            .mobile-stack-reset {
              transform: none !important;
            }
          }
        `,
      }} />

      <section className="w-full bg-[#f8f9f8] relative pb-20 font-['Manrope',_sans-serif]">

        {/* ══════════════════════
            1. HEADER
        ══════════════════════ */}
        <div className="flex flex-col items-center justify-center pt-20 md:pt-24 pb-16 md:pb-20 px-6 text-center">
          <FadeInReveal>
            <span className="
              inline-block text-[#86C232] border border-[#86C232]
              px-4 py-1.5 rounded-[5px]
              text-[11px] font-extrabold tracking-[2px] uppercase
              mb-5
            ">
              Our Services
            </span>
          </FadeInReveal>

          <FadeInReveal delay={0.1}>
            <h2 className="
              text-[#222629] font-extrabold tracking-tight leading-[1.1]
              text-4xl sm:text-5xl lg:text-[4rem]
              max-w-4xl mb-6
            ">
              Tailor Business Solutions{" "}
              <br className="hidden md:block" />
              for Corporates.
            </h2>
          </FadeInReveal>
        </div>

        {/* ══════════════════════
            2. STACKING CARDS
        ══════════════════════ */}
        <div className="relative w-full">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              total={SERVICES.length}
            />
          ))}
        </div>

        {/* ══════════════════════
            3. FOOTER BANNER
        ══════════════════════ */}
        <div
          className="relative w-full px-6 flex items-center justify-center text-center md:text-left pt-10 pb-10"
          style={{ zIndex: SERVICES.length + 1 }}
        >
          <FadeInReveal>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-[#474B4F] text-lg md:text-xl font-medium">
              <div className="flex items-center gap-3">
                <Package className="text-[#86C232] shrink-0" size={24} />
                <span>Unlock tailored solutions without the wasted effort.</span>
              </div>
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-1 font-bold
                  text-[#222629] hover:text-[#86C232]
                  transition-colors duration-300
                  underline decoration-[#86C232] decoration-2 underline-offset-4
                "
              >
                Talk to us today <ArrowUpRight size={20} />
              </Link>
            </div>
          </FadeInReveal>
        </div>

      </section>
    </>
  );
}