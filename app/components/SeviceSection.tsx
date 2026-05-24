"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronsRight, Blocks, Radar, Leaf, Sun } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────── */
interface Service {
  title: string;
  href: string;
  icon: React.ElementType;
  desc: string;
  bullets: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
  activeIndex: number;
  total: number;
}

/* ─────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────── */
const SERVICES: Service[] = [
  {
    title: "Business Strategy Development",
    href: "#",
    icon: Blocks,
    desc: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized corporate execution models.",
    bullets: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
  },
  {
    title: "Customer Experience Solutions",
    href: "#",
    icon: Radar,
    desc: "We analyze your customer touchpoints to design seamless, engaging journeys that build brand loyalty and increase retention metrics.",
    bullets: ["Journey Mapping", "Omnichannel Support", "Feedback Analysis"],
  },
  {
    title: "Sustainability and ESG Consulting",
    href: "#",
    icon: Leaf,
    desc: "Help your corporate entity meet modern environmental standards with actionable ESG frameworks and sustainable growth models.",
    bullets: ["Carbon Footprint Reduction", "ESG Reporting", "Sustainable Supply Chain"],
  },
  {
    title: "Training Development Programs",
    href: "#",
    icon: Sun,
    desc: "Empower your workforce with tailored training programs designed to upskill employees and align with your corporate objectives.",
    bullets: ["Leadership Training", "Technical Workshops", "Culture Integration"],
  },
];

/* ─────────────────────────────────────────
   CONTINUOUS LOOP CARD COMPONENT
───────────────────────────────────────── */
function ServiceCard({ service, index, activeIndex, total }: ServiceCardProps): React.ReactElement {
  const Icon = service.icon;

  const relativePosition = (index - activeIndex + total) % total;

  let x = "120%";
  let opacity = 0;
  let zIndex = 0;

  if (relativePosition === 0) {
    x = "0%";
    opacity = 1;
    zIndex = 10;
  } else if (relativePosition === total - 1) {
    x = "-120%";
    opacity = 0;
    zIndex = 0;
  } else {
    x = "120%";
    opacity = 0;
    zIndex = 0;
  }

  return (
    <motion.div
      animate={{ x, opacity }}
      style={{ zIndex, fontFamily: "'Manrope', sans-serif" }}
      transition={{ type: "spring", stiffness: 75, damping: 17 }}
      className="absolute inset-0 w-full h-full group/card cursor-pointer overflow-hidden rounded-2xl border border-[#474B4F]/50 bg-[#222629] p-6 lg:p-8 select-none transition-colors duration-300 hover:border-[#86C232]/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background: "radial-gradient(circle at top right, rgba(134,194,50,0.05), transparent 60%)",
        }}
      />

      <div className="relative h-full flex flex-col justify-between sm:grid sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6 lg:gap-10">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#474B4F]/20 border border-[#474B4F]/40 text-[#86C232] mb-6 transition-colors duration-300 group-hover/card:bg-[#86C232]/10">
            <Icon size={24} strokeWidth={1.8} />
          </div>
          <h3 className="text-xl font-extrabold leading-tight text-white tracking-tight transition-colors duration-300 group-hover/card:text-[#86C232]">
            {service.title}
          </h3>
        </div>

        <div className="flex flex-col justify-between h-full sm:pt-2">
          <p className="text-sm md:text-base leading-relaxed text-[#6B6E70]">
            {service.desc}
          </p>
          <ul className="mt-4 space-y-2.5">
            {service.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 text-sm md:text-base text-white/90 font-semibold transition-transform duration-300 group-hover/card:translate-x-1"
              >
                <ChevronsRight size={15} strokeWidth={2.5} className="text-[#86C232] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   CTA BUTTON COMPONENT
───────────────────────────────────────── */
function CtaButton(): React.ReactElement {
  return (
    <Link
      href="#"
      style={{ fontFamily: "'Manrope', sans-serif" }}
      className="inline-flex items-center justify-between bg-[#86C232] text-[#111316] rounded-full p-2 pl-7 pr-2.5 text-base font-bold w-fit transition-all duration-300 hover:shadow-[0_12px_32px_rgba(134,194,50,0.25)] hover:bg-[#61892F] group/cta"
    >
      <span className="relative block overflow-hidden h-5 min-w-[110px] mr-5 select-none leading-none pt-0.5">
        <span className="block transition-transform duration-500 cubic-bezier(0.65,0,0.35,1) group-hover/cta:-translate-y-full text-[#111316]">
          More Services
        </span>
        <span className="absolute top-full left-0 block transition-transform duration-500 cubic-bezier(0.65,0,0.35,1) group-hover/cta:-translate-y-full text-[#111316]">
          More Services
        </span>
      </span>

      {/* MODIFIED: Hover arrow circle takes main background (#222629), Arrow is horizontal and slides right on hover */}
      <span className="w-10 h-10 rounded-full bg-[#111316] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/cta:bg-[#222629] group-hover/cta:text-[#86C232]">
        <ArrowRight
          size={18}
          strokeWidth={2.5}
          className="transition-transform duration-500 cubic-bezier(0.65,0,0.35,1) group-hover/cta:translate-x-1"
        />
      </span>
    </Link>
  );
}

/* ─────────────────────────────────────────
   PROGRESS DOTS COMPONENT
───────────────────────────────────────── */
interface ProgressDotsProps {
  total: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ProgressDots({ total, activeIndex, setActiveIndex }: ProgressDotsProps): React.ReactElement {
  return (
    <div className="flex gap-2 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="block rounded-full transition-all duration-300 h-2 w-2 bg-[#474B4F] hover:bg-[#6B6E70] outline-none cursor-pointer data-[active=true]:w-8 data-[active=true]:bg-[#86C232]"
          data-active={i === activeIndex}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN CAROUSEL SECTION
───────────────────────────────────────── */
export default function ServicesSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    
    const ticker = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000);

    return () => clearInterval(ticker);
  }, [isPaused]);

  return (
    <section 
      style={{ fontFamily: "'Manrope', sans-serif" }} 
      // MODIFIED: Changed outer section main background from #111316 to white
      className="w-full bg-white py-16 px-4 sm:px-[22px] lg:py-24"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
      `}} />

      <div className="mx-auto w-full max-w-[1400px]">
        <div 
          className="relative w-full overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#474B4F]/30 bg-[#222629]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.015] z-0"
            style={{
              backgroundImage: "repeating-linear-gradient(-25deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20 gap-12 lg:gap-4">
            
            {/* LEFT SIDEBAR PANEL */}
            <div className="w-full lg:w-[42%] flex flex-col select-none lg:pr-6">
              <span className="inline-block rounded-full bg-[#86C232]/10 border border-[#86C232]/20 px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-[#86C232] w-fit mb-8 uppercase">
                Our Solutions
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-white tracking-tight mb-10">
                Tailored<br />
                Business<br />
                Solutions for our<br />
                <span className="text-[#86C232]">Corporates.</span>
              </h2>

              <CtaButton />

              <ProgressDots 
                total={SERVICES.length} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
              />
            </div>

            {/* RIGHT SIDEBAR PANEL */}
            <div className="w-full lg:w-[58%] relative h-[420px] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[440px]">
              {SERVICES.map((svc, i) => (
                <ServiceCard
                  key={svc.title}
                  service={svc}
                  index={i}
                  activeIndex={activeIndex}
                  total={SERVICES.length}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}