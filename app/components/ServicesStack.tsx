"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowUpRight, 
  Monitor, 
  Paintbrush, 
  Settings, 
  Smartphone, 
  TrendingUp, 
  Bot 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Development",
    desc: "Fast, responsive websites built to convert visitors into enquiries and help your business look trustworthy online.",
    bg: "#1b1b1f",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    number: "02",
    title: "UI/UX Design",
    desc: "Clean user flows and modern interfaces that make your product simple, clear, and easy to use.",
    bg: "#20242b",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=900",
  },
  {
    number: "03",
    title: "Custom Software",
    desc: "Dashboards, CRM, ERP, automation tools, and internal systems designed around your exact workflow.",
    bg: "#262220",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
  },
  {
    number: "04",
    title: "Mobile Apps",
    desc: "Practical mobile apps with smooth user experience, scalable features, and business-focused functionality.",
    bg: "#1f2622",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=900",
  },
  {
    number: "05",
    title: "Digital Marketing",
    desc: "SEO, social media, paid ads, and content strategies focused on bringing qualified leads to your business.",
    bg: "#221f26",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=900",
  },
  {
    number: "06",
    title: "AI Solutions",
    desc: "Chatbots, smart automation, and AI-powered workflows that help your business move faster.",
    bg: "#1a2226",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900",
  },
];

export default function ServiceSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<"before" | "active" | "after">("before");

  useEffect(() => {
    let current = 0;
    let target = 0;
    let frame: number;

    const updateTarget = () => {
      if (!stackRef.current) return;

      const rect = stackRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;

      if (rect.top > 0) {
        setMode("before");
        target = 0;
      } else if (rect.bottom < vh) {
        setMode("after");
        target = 1;
      } else {
        setMode("active");
        target = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      }
    };

    const animate = () => {
      current += (target - current) * 0.08;
      setProgress(current);
      frame = requestAnimationFrame(animate);
    };

    updateTarget();
    animate();

    window.addEventListener("scroll", updateTarget);
    window.addEventListener("resize", updateTarget);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  const layerStyle: React.CSSProperties =
    mode === "active"
      ? {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 20,
        }
      : mode === "after"
      ? {
          position: "absolute",
          bottom: "40px",
          left: 0,
          width: "100%",
          height: "100vh",
        }
      : {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        };

  return (
    // 1. Changed section background to white and base text to dark (#222629)
    <section className="bg-white text-[#222629] relative pb-10 font-['Manrope',_sans-serif]">
      
      {/* 2. Adjusted header text colors for the white background */}
      <div className="pt-16 md:pt-24 pb-12 md:pb-16 text-center px-6 flex flex-col items-center">
        <span className="inline-block text-[#86C232] border border-[#86C232] px-[16px] py-[6px] rounded-[5px] text-[11px] font-extrabold tracking-[2px] uppercase mb-[20px]">
          Services
        </span>

        <h2 className="text-[#222629] text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-5">
          Our ways to move fast
        </h2>

        
      </div>

      <div
        ref={stackRef}
        className="relative"
        style={{ height: `${services.length * 82}vh` }}
      >
        {/* 3. Changed inner scroll layer background to white */}
        <div style={layerStyle} className="overflow-hidden bg-white">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // ANIMATION MATH (UNTOUCHED)
            const total = services.length - 1;
            const start = index === 0 ? 0 : (index - 1) / total;
            const end = index === 0 ? 0 : index / total;

            let y = 0;
            let scale = 1;
            let opacity = 1;

            if (index === 0) {
              y = 0;
            } else if (progress < start) {
              y = 120;
              opacity = 0.9;
            } else if (progress >= end) {
              y = index * 1.8;
              scale = 1 - index * 0.008;
            } else {
              const local = (progress - start) / (end - start);
              const ease = 1 - Math.pow(1 - local, 3);

              y = 120 - ease * (120 - index * 1.8);
              scale = 0.98 + ease * 0.02;
              opacity = 0.92 + ease * 0.08;
            }

            return (
              <div
                key={service.title}
                className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
                style={{
                  zIndex: index + 1,
                  transform: `translate3d(0, ${y}vh, 0) scale(${scale})`,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                {/* 4. The dark cards remain completely identical */}
                <div
                  className="
                    group
                    w-full max-w-[1200px]
                    rounded-[24px] md:rounded-[10px]
                    shadow-[0_15px_50px_rgba(0,0,0,0.15)]
                    overflow-hidden
                    grid grid-cols-1 lg:grid-cols-[55%_45%]
                    min-h-[400px] lg:min-h-[480px]
                    border border-black/5
                  "
                  style={{ backgroundColor: service.bg }}
                >
                  {/* Left: Content Side */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#86C232] mb-6 md:mb-8 shadow-sm">
                      <Icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                    </div>

                    <span className="block text-[#86C232] text-[14px] md:text-[15px] font-bold tracking-[0.05em] mb-3">
                      {service.number}.
                    </span>

                    <h3 className="text-white text-3xl md:text-4xl lg:text-[2.6rem] font-medium leading-[1.1] mb-4 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-white/70 text-[15px] md:text-[1.05rem] leading-[1.7] mb-8 max-w-xl font-normal">
                      {service.desc}
                    </p>

                    <Link
                      href="/"
                      className="group/btn inline-flex items-center gap-3 bg-[#86C232] hover:bg-[#61892F] transition-colors duration-300 rounded-full pl-6 pr-2 py-2 w-fit shadow-lg"
                    >
                      <span className="text-[#222629] font-bold text-sm md:text-[15px]">
                        Learn More
                      </span>
                      <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#222629] text-white flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>

                  {/* Right: Image Side */}
                  <div className="relative h-[250px] sm:h-[350px] lg:h-auto overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-6 md:h-8" />
    </section>
  );
}