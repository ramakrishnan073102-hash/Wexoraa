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
          "relative w-full py-[120px] overflow-hidden",
          "bg-[#ffffff] flex items-center",
          "font-['Manrope',sans-serif]",
          /* Left edge fade - using white to match background */
          "before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0",
          "before:w-[200px] before:z-[5] before:pointer-events-none",
          "before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent",
          /* Right edge fade - using white to match background */
          "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0",
          "after:w-[200px] after:z-[5] after:pointer-events-none",
          "after:bg-gradient-to-l after:from-[#ffffff] after:to-transparent",
        ].join(" ")}
      >

        {/* ── Scrolling track ── */}
        <div className="marquee-track flex w-max">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div
              key={index}
              className={[
                "flex-shrink-0 min-w-[200px] px-7 h-[85px] mr-6",
                "flex items-center justify-center gap-4",
                "rounded-2xl border",
                /* White theme card styles */
                "bg-[#f4f4f6] border-[#e5e7eb]",
                "transition-all duration-300 ease-in-out",
                "hover:bg-[#86C232]/10 hover:border-[#86C232]/30 group cursor-default",
              ].join(" ")}
            >
              {/* Tech Logo */}
              <img 
                src={tech.src} 
                alt={`${tech.name} logo`} 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 ease-out" 
              />
              {/* Tech Name */}
              <span className="text-[#474B4F] text-[1.15rem] font-bold tracking-[0.03em] group-hover:text-[#222629] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Centre radial fade overlay + text ── */}
        <div
          className="absolute inset-0 z-[10] pointer-events-none flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at center, #ffffff 30%, rgba(255,255,255,0) 65%)",
          }}
        >
          <div className="text-center z-[20] pointer-events-none">
            <h2
              className={[
                "font-extrabold text-[#222629] leading-[1.5]",
                "text-[1.75rem] md:text-[2.25rem]",
              ].join(" ")}
            >
              Technologies Work with here{" "}
              <br />
              <span className="text-[#86C232]">Wexoraa</span> 
            </h2>
          </div>
        </div>

      </section>
    </>
  );
}