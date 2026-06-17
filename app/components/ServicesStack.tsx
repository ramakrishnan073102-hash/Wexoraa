"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Monitor,
  Paintbrush,
  Smartphone,
  Settings,
  Bot,
  Package,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────── */
interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  desc: string;
  bg: string;
  image: string;
}

/* ─────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────── */
const SERVICES: Service[] = [
  {
    id: "01",
    title: "Digital marketing that drives real growth.",
    desc: "We plan and run campaigns across SEO, paid ads, and social to bring qualified traffic to your business. Each sprint ships a content calendar, ad creatives, and performance reports so you can see exactly what's working.",
    bg: "#1b1b1f",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Web development built for speed & scale.",
    desc: "We build fast, responsive, SEO-friendly websites using modern frameworks. Every project ships clean, maintainable code, optimized performance, and a CMS your team can manage without calling us for every change.",
    bg: "#20242b",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Design that makes your brand unforgettable.",
    desc: "We craft distinctive visual identities, UI/UX systems, and brand guidelines that set you apart. Each sprint ships logos, design systems, and pixel-perfect interfaces ready for development.",
    bg: "#262220",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "04",
    title: "Mobile apps users actually love.",
    desc: "We design and build native and cross-platform apps for iOS and Android. From wireframes to App Store launch, every sprint ships smooth UX, clean architecture, and a product ready to scale.",
    bg: "#1f2622",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "05",
    title: "Custom software for your unique workflow.",
    desc: "We build tailored software solutions that fit your business processes exactly — internal tools, dashboards, automations, and integrations. Every sprint ships tested, documented, production-ready code.",
    bg: "#221f26",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "06",
    title: "AI development that puts data to work.",
    desc: "We design and deploy AI-powered features — chatbots, automation, recommendation engines, and custom models — tailored to your product. Each sprint ships working prototypes you can test and iterate on fast.",
    bg: "#1a2226",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
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
   SINGLE STACKING CARD
───────────────────────────────────────── */
function StackingCard({
  service,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <motion.div
        style={{
          backgroundColor: service.bg,
          scale,
          top: `calc(-5vh + ${index * 20}px)`,
          transformOrigin: "top",
        }}
        className="
          relative w-full max-w-[1200px]
          flex flex-col md:flex-row
          rounded-2xl md:rounded-[24px] lg:rounded-[28px]
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          max-h-[88vh] md:max-h-none
          md:h-[460px] lg:h-[540px]
        "
      >
        {/* ── Left Side: Content ── */}
        <div className="
          relative z-[2]
          w-full md:w-[55%]
          flex flex-col justify-center
          p-5 sm:p-7 md:p-10 lg:p-16
          overflow-y-auto md:overflow-visible
        ">
          {/* Icon Block */}
          <div className="
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
            rounded-full bg-white/5
            flex items-center justify-center
            text-[#86C232]
            mb-4 sm:mb-5 md:mb-6 lg:mb-8
            shadow-sm border border-white/10
            shrink-0
          ">
            <Icon size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </div>

          {/* Index Number */}
          <span className="block text-[#86C232] text-[12px] sm:text-[13px] md:text-[14px] font-bold tracking-[0.05em] mb-2 md:mb-3">
            {service.id}.
          </span>

          {/* Title */}
          <h3 className="
            text-white font-medium leading-[1.15] tracking-tight
            text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem]
            mb-3 sm:mb-4 md:mb-5
          ">
            {service.title}
          </h3>

          {/* Description — hidden on xs, visible from sm up */}
          <p className="
            hidden sm:block
            text-white/70 leading-[1.7] font-normal
            text-[13px] sm:text-sm md:text-[15px] lg:text-[1.05rem]
            mb-5 sm:mb-6 md:mb-8 lg:mb-10
            max-w-xl
            line-clamp-3 md:line-clamp-none
          ">
            {service.desc}
          </p>

          {/* Short desc only on mobile (xs) */}
          <p className="
            sm:hidden
            text-white/60 leading-[1.6] font-normal text-[13px]
            mb-4
            line-clamp-2
          ">
            {service.desc}
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-[#86C232] hover:bg-[#61892F] transition-colors duration-300 rounded-full pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 w-fit shadow-lg"
          >
            <span className="text-[#222629] font-bold text-xs sm:text-sm md:text-[15px]">
              Learn More
            </span>
            <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#222629] text-white transition-colors duration-300">
              <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="sm:w-[18px] sm:h-[18px] group-hover:rotate-45 transition-transform duration-300 ease-out"
              />
            </span>
          </Link>
        </div>

        {/* ── Right Side: Image ── */}
        <div className="
          relative z-[2]
          w-full md:w-[45%]
          h-[160px] sm:h-[200px] md:h-auto
          overflow-hidden
          border-t md:border-t-0 md:border-l border-white/5
          shrink-0
        ">
          <motion.img
            style={{ scale: imageScale }}
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION COMPONENT
───────────────────────────────────────── */
export default function ServiceSection(): React.ReactElement {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="w-full bg-[#f8f9f8] relative font-['Manrope',_sans-serif]">

      {/* ══════════════════════════════════════════
          1. HEADER SECTION
      ══════════════════════════════════════════ */}
      <div className="flex flex-col items-center justify-center pt-14 sm:pt-18 md:pt-24 pb-8 sm:pb-10 md:pb-16 px-4 sm:px-6 text-center">
        <FadeInReveal>
          <span className="inline-block text-[#86C232] border border-[#86C232] px-[14px] py-[5px] sm:px-[16px] sm:py-[6px] rounded-[5px] text-[10px] sm:text-[11px] font-extrabold tracking-[2px] uppercase mb-4 sm:mb-5">
            Our Services
          </span>
        </FadeInReveal>

        <FadeInReveal delay={0.1}>
          <h2 className="text-[#222629] font-extrabold tracking-tight leading-[1.1] mb-4 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[4rem]">
            What we do best
          </h2>
        </FadeInReveal>
      </div>

      {/* ══════════════════════════════════════════
          2. STACKING CARD STICKY SCROLL ANIMATION
      ══════════════════════════════════════════ */}
      <div ref={stackRef} className="relative w-full">
        {SERVICES.map((service, index) => (
          <StackingCard
            key={service.id}
            service={service}
            index={index}
            total={SERVICES.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          3. FOOTER BANNER
      ══════════════════════════════════════════ */}
      <div
        className="relative w-full mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 flex items-center justify-center text-center pt-8 pb-12 sm:pb-16"
        style={{ zIndex: SERVICES.length + 10 }}
      >
        <FadeInReveal>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-[#474B4F] text-base sm:text-lg md:text-xl font-medium">
            <div className="flex items-center gap-2 sm:gap-3">
              <Package className="text-[#86C232] shrink-0" size={20} />
              <span>Unlock tailored solutions without the wasted effort.</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-bold text-[#222629] hover:text-[#86C232] transition-colors duration-300 underline decoration-[#86C232] decoration-2 underline-offset-4 whitespace-nowrap"
            >
              Talk to us today <ArrowUpRight size={18} />
            </Link>
          </div>
        </FadeInReveal>
      </div>

    </section>
  );
}