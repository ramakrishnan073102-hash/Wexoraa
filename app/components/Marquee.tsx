"use client";

import React from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const TECH_STACK = [
  { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Nest.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Razorpay", src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function MarqueeSection(): React.ReactElement {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        /* Seamless infinite scroll */
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 45s linear infinite;
        }
      `}</style>

      <section
        className={[
          "relative w-full py-20 md:py-[120px] overflow-hidden",
          "bg-[#ffffff] flex items-center justify-center",
          "font-['Manrope',sans-serif]",
          /* Left & Right fade edges */
          "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0",
          "before:w-[40px] md:before:w-[150px] before:z-[5] before:pointer-events-none",
          "before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent",
          "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0",
          "after:w-[40px] md:after:w-[150px] after:z-[5] after:pointer-events-none",
          "after:bg-gradient-to-l after:from-[#ffffff] after:to-transparent",
        ].join(" ")}
      >

        {/* ── Scrolling track ── */}
        <div className="marquee-track flex w-max relative z-[1]">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div
              key={index}
              className={[
                "flex-shrink-0 min-w-[180px] md:min-w-[200px] px-5 md:px-7 h-[75px] md:h-[85px] mr-4 md:mr-6",
                "flex items-center justify-center gap-4",
                "rounded-2xl border",
                "bg-[#f4f4f6] border-[#e5e7eb]",
                "transition-all duration-300 ease-in-out",
                "hover:bg-[#86C232]/10 hover:border-[#86C232]/30 group cursor-default",
              ].join(" ")}
            >
              <img 
                src={tech.src} 
                alt={`${tech.name} logo`} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300 ease-out" 
              />
              <span className="text-[#474B4F] text-[1rem] md:text-[1.15rem] font-bold tracking-[0.03em] group-hover:text-[#222629] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Center Soft Glassmorphism Overlay ── */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">

          {/* Clean, Crisp Frosted Glass Circle 
              UPDATED: w-[200px] h-[200px] for mobile, leaving plenty of room for marquee cards 
          */}
          <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full bg-white/50 backdrop-blur-[15px] border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transform-gpu" />
          
          {/* The Text Layout */}
          <div className="relative z-20 text-center px-4 w-full max-w-[200px] sm:max-w-none">
            <h2 className="font-extrabold text-[#222629] leading-[1.4] text-[13px] sm:text-base md:text-lg">
              Technologies to Work With
              <br />
              <span className="text-[#86C232]">Wexoraa</span> 
            </h2>
          </div>

        </div>

      </section>
    </>
  );
}