"use client";

import React from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const TECH_STACK = [
  { name: "React.js", src: "/assets/img/techstacklogos/react.svg" },
  { name: "Next.js", src: "/assets/img/techstacklogos/nextjs.svg" },
  { name: "HTML5", src: "/assets/img/techstacklogos/html5.svg" },
  { name: "CSS3", src: "/assets/img/techstacklogos/css3.svg" },
  { name: "Tailwind CSS", src: "/assets/img/techstacklogos/tailwind.svg" },
  { name: "Nest.js", src: "/assets/img/techstacklogos/nestjs.svg" },
  { name: "Node.js", src: "/assets/img/techstacklogos/nodejs.svg" },
  { name: "Express.js", src: "/assets/img/techstacklogos/express.svg" },
  { name: "Git", src: "/assets/img/techstacklogos/git.svg" },
  { name: "GitHub", src: "/assets/img/techstacklogos/github.svg" },
  { name: "React Native", src: "/assets/img/techstacklogos/react.svg" },
  { name: "MongoDB", src: "/assets/img/techstacklogos/mongodb.svg" },
  { name: "PostgreSQL", src: "/assets/img/techstacklogos/postgresql.svg" },
  { name: "MySQL", src: "/assets/img/techstacklogos/mysql.svg" },
  { name: "Postman", src: "/assets/img/techstacklogos/postman.svg" },
  { name: "Razorpay", src: "/assets/img/techstacklogos/razorpay.svg" },
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
                "flex-shrink-0 min-w-[150px] md:min-w-[180px] px-4 md:px-6 h-[75px] md:h-[85px] mr-4 md:mr-6",
                "flex items-center justify-center gap-3 md:gap-4",
                "transition-all duration-300 ease-in-out group cursor-default",
              ].join(" ")}
            >
              <img 
                src={tech.src} 
                alt={`${tech.name} logo`} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300 ease-out" 
              />
              <span className="text-[#474B4F] text-[1rem] md:text-[1.15rem] font-bold tracking-[0.03em] group-hover:text-[#86C232] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}