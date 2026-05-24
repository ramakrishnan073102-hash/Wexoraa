"use client";

import React from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const PARTNERS: string[] = [
  "Monceau", "Coudac", "Flomodia", "Influence4You",
  "Weglot", "TSE Energy", "TechCorp", "Nexus",
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
          animation: marquee-scroll 30s linear infinite;
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
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className={[
                "flex-shrink-0 w-[240px] h-[90px] mr-8",
                "flex items-center justify-center",
                "rounded-2xl border",
                /* White theme card styles */
                "bg-[#f4f4f6] border-[#e5e7eb]",
                "text-[#474B4F] text-[1.25rem] font-bold tracking-[0.05em]",
                "transition-all duration-300 ease-in-out",
                "hover:bg-[#86C232]/10 hover:text-[#222629] hover:border-[#86C232]/30",
              ].join(" ")}
            >
              {partner}
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
                "font-bold text-[#222629] leading-[1.6]",
                "text-[1.75rem] md:text-[2.25rem]",
              ].join(" ")}
            >
              Join Over{" "}
              <span
                className={[
                  "inline-block bg-[#86C232] text-white",
                  "px-4 py-1 rounded-full font-extrabold align-middle mx-2",
                  "text-[1.5rem] md:text-[1.8rem]",
                  "shadow-[0_4px_14px_rgba(134,194,50,0.3)]",
                ].join(" ")}
              >
                30+
              </span>
              <br />
              Companies with{" "}
              <span className="text-[#86C232]">Wexoraa</span> Here
            </h2>
          </div>
        </div>

      </section>
    </>
  );
}