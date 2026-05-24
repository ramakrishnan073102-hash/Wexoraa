"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MoveDown } from "lucide-react";

// ─── Slide images ─────────────────────────────────────────────────────────────
const SLIDES: string[] = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
];

const EXPLORE_LABEL = "Explore More * Explore More * Explore More * ";

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSection(): React.ReactElement {
  const [current,     setCurrent]     = useState<number>(0);
  const [vis,         setVis]         = useState<boolean>(false);
  const [rotation,    setRotation]    = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [textKey,     setTextKey]     = useState<number>(0);

  // Initial page reveal
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Rotate "Explore More" ring
  useEffect(() => {
    const id = setInterval(() => setRotation((r) => r + 0.38), 16);
    return () => clearInterval(id);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const id = setInterval(() => {
      triggerTransition((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const triggerTransition = (nextIndex: number): void => {
    if (isAnimating || nextIndex === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setTextKey((k) => k + 1);
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = (): void =>
    triggerTransition((current - 1 + SLIDES.length) % SLIDES.length);
  const goToNext = (): void =>
    triggerTransition((current + 1) % SLIDES.length);

  return (
    <>
      {/* ── Only styles that Tailwind cannot express inline ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* Background crossfade */
        .bg-slide {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0; transform: scale(1.08);
          transition: opacity 1.2s ease-in-out, transform 8s ease-out;
          z-index: 0;
        }
        .bg-slide.active { opacity: 1; transform: scale(1); z-index: 1; }

        /* Headline clip-reveal */
        .hl-inner {
          display: block;
          transform: translateY(115%); opacity: 0;
          animation: slideUpFade 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hl-inner.d1 { animation-delay: 0.1s; }
        .hl-inner.d2 { animation-delay: 0.2s; }

        .sub-anim { opacity:0; transform:translateY(22px); animation: fadeRise 0.6s ease 0.3s forwards; }
        .cta-anim { opacity:0; transform:translateY(22px); animation: fadeRise 0.6s ease 0.4s forwards; }

        @keyframes slideUpFade { to { transform:translateY(0); opacity:1; } }
        @keyframes fadeRise    { to { opacity:1; transform:translateY(0); } }

        /* CTA label text-roll */
        .cta-label-inner { display:block; transition:transform 0.4s cubic-bezier(0.65,0,0.35,1); }
        .cta-label::after {
          content: attr(data-text); position:absolute; top:100%; left:0;
          display:block; transition:transform 0.4s cubic-bezier(0.65,0,0.35,1);
        }
        .cta-btn:hover .cta-label-inner { transform:translateY(-100%); }
        .cta-btn:hover .cta-label::after { transform:translateY(-100%); }

        /* Arrow: default ↗ → rotates to → on hover */
        .cta-icon-svg {
          transform: rotate(-45deg);
          transition: transform 0.4s cubic-bezier(0.65,0,0.35,1);
        }
        .cta-btn:hover .cta-icon-svg { transform: rotate(0deg); }
      `}</style>

      {/* ══════════════════════════════════════════
          OUTER SHELL
      ══════════════════════════════════════════ */}
      <div
        className={[
          "w-full min-h-screen bg-white flex flex-col", // <-- CHANGED TO bg-white
          "p-3 md:p-[22px]",
          "[font-family:'Inter',system-ui,sans-serif]",
          "transition-opacity duration-700 ease-in",
          vis ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >

        {/* ══════════════════════════════════════════
            CURVED FRAME
        ══════════════════════════════════════════ */}
        <div
          className={[
            "relative flex-1 overflow-hidden",
            "rounded-[20px] md:rounded-[28px]",
            "border border-[#474B4F] bg-[#222629]",
            "min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-44px)]",
          ].join(" ")}
        >

          {/* ── Background crossfade images ── */}
          {SLIDES.map((bg, i) => (
            <div
              key={i}
              className={`bg-slide ${i === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${bg})` }}
            />
          ))}

          {/* ── Overlay 1: directional dark gradient ── */}
          <div
            className="absolute inset-0 z-[3]"
            style={{
              background:
                "linear-gradient(108deg, rgba(34,38,41,0.96) 0%, rgba(34,38,41,0.78) 44%, rgba(34,38,41,0.30) 68%, rgba(34,38,41,0.10) 100%)",
            }}
          />
          {/* ── Overlay 2: radial vignette ── */}
          <div
            className="absolute inset-0 z-[3]"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 36%, rgba(34,38,41,0.5) 100%)",
            }}
          />
          {/* ── Overlay 3: bottom-left green glow ── */}
          <div
            className="absolute inset-0 z-[3]"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(134,194,50,0.08), transparent 60%)",
            }}
          />

          {/* ── Slide counter (top-right) ── */}
          <div
            className={[
              "absolute z-[12]",
              "top-6 right-6 md:top-9 md:right-11",
              "text-[0.75rem] font-bold tracking-[0.1em] text-[#6B6E70]",
            ].join(" ")}
          >
            0{current + 1} / 0{SLIDES.length}
          </div>

          {/* ══════════════════════════════════════════
              HERO BODY
          ══════════════════════════════════════════ */}
          <div
            className={[
              "relative z-[10] flex items-center",
              "min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-44px)]",
              "px-6 pt-[120px] pb-20",
              "md:px-[90px] md:pt-[140px] md:pb-[80px]",
              "lg:px-[110px] lg:pt-[160px] lg:pb-[90px]",
            ].join(" ")}
          >
            {/* Text group — re-mounts on key change, fades on transition */}
            <div
              key={textKey}
              className={[
                "max-w-[680px]",
                "transition-opacity duration-500 ease-in-out",
                isAnimating ? "opacity-0" : "opacity-100",
              ].join(" ")}
            >

              {/* Headline */}
              <h1
                className={[
                  "font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6",
                  "[font-size:clamp(2.5rem,7vw,6.4rem)]",
                ].join(" ")}
              >
                <span className="block overflow-hidden">
                  <span className="hl-inner d1">Leading Future</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="hl-inner d2">
                    for{" "}
                    <span className="text-[#86C232]">Business.</span>
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={[
                  "sub-anim",
                  "[font-size:clamp(0.95rem,2vw,1.05rem)]",
                  "text-white/70 leading-[1.6] max-w-[440px] mb-10 font-normal",
                ].join(" ")}
              >
                Committed to delivering innovative solutions that drive success.
                With a focus on quality.
              </p>

              {/* CTA */}
              <div className="cta-anim">
                <Link
                  href="/contact"
                  className={[
                    "cta-btn",
                    "inline-flex items-center",
                    "bg-[#86C232] text-[#222629] rounded-full",
                    "pl-4 sm:pl-5 pr-[3px] py-[3px]",
                    "transition-[transform,box-shadow] duration-[220ms]",
                    "hover:-translate-y-px hover:shadow-[0_12px_36px_rgba(134,194,50,0.35)]",
                  ].join(" ")}
                >
                  {/* Rolling label */}
                  <span
                    className="cta-label relative block overflow-hidden text-base font-bold mr-3.5 tracking-[-0.01em] whitespace-nowrap"
                    data-text="Get Started"
                  >
                    <span className="cta-label-inner">Get Started</span>
                  </span>

                  {/* Arrow circle */}
                  <span
                    className={[
                      "flex items-center justify-center flex-shrink-0 rounded-full",
                      "bg-[#222629] text-[#86C232]",
                      "w-[42px] h-[42px] sm:w-12 sm:h-12",
                    ].join(" ")}
                  >
                    <ArrowRight size={20} className="cta-icon-svg" />
                  </span>
                </Link>
              </div>

            </div>
          </div>

          {/* ══════════════════════════════════════════
              PREV / NEXT ARROWS  (hidden on mobile)
          ══════════════════════════════════════════ */}
          <button
            className={[
              "hidden md:flex",
              "absolute left-6 lg:left-6 top-1/2 -translate-y-1/2 z-[12]",
              "w-[54px] h-[54px] rounded-full cursor-pointer",
              "items-center justify-center",
              "bg-[#474B4F]/40 border border-[#6B6E70] text-white",
              "[backdrop-filter:blur(10px)]",
              "transition-all duration-[250ms]",
              "hover:bg-[#86C232] hover:border-[#86C232] hover:text-[#222629] hover:scale-[1.07]",
            ].join(" ")}
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className={[
              "hidden md:flex",
              "absolute right-6 lg:right-6 top-1/2 -translate-y-1/2 z-[12]",
              "w-[54px] h-[54px] rounded-full cursor-pointer",
              "items-center justify-center",
              "bg-[#474B4F]/40 border border-[#6B6E70] text-white",
              "[backdrop-filter:blur(10px)]",
              "transition-all duration-[250ms]",
              "hover:bg-[#86C232] hover:border-[#86C232] hover:text-[#222629] hover:scale-[1.07]",
            ].join(" ")}
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* ══════════════════════════════════════════
              DOT INDICATORS
          ══════════════════════════════════════════ */}
          <div
            className={[
              "absolute z-[12] flex items-center gap-2",
              "bottom-6 left-6",
              "md:bottom-9 md:left-[90px]",
              "lg:left-[110px]",
            ].join(" ")}
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => triggerTransition(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-[3px] rounded-sm border-none cursor-pointer",
                  "transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                  i === current
                    ? "w-[46px] bg-[#86C232]"
                    : "w-[22px] bg-[#6B6E70] hover:bg-[#86C232]/60",
                ].join(" ")}
              />
            ))}
          </div>

          {/* ══════════════════════════════════════════
              EXPLORE MORE ROTATING BADGE
          ══════════════════════════════════════════ */}
          <div
            className={[
              "absolute z-[12] w-[148px] h-[148px] cursor-pointer",
              "bottom-6 right-6 md:bottom-8 md:right-11",
              "origin-bottom-right transition-transform duration-300 ease-in-out",
              "scale-[0.65] sm:scale-[0.75] lg:scale-100",
            ].join(" ")}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            {/* Rotating SVG text ring */}
            <svg
              viewBox="0 0 148 148"
              className="absolute inset-0 w-full h-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <defs>
                <path
                  id="ep"
                  d="M 74,74 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                />
              </defs>
              <text
                style={{
                  fontSize: "11.5px",
                  fill: "#6B6E70",
                  fontWeight: 600,
                  letterSpacing: "2px",
                }}
              >
                <textPath href="#ep">{EXPLORE_LABEL}</textPath>
              </text>
            </svg>

            {/* Centre icon — hover handled via group */}
            <div
              className={[
                "group",
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "w-11 h-11 rounded-full",
                "bg-[#474B4F] border border-[#6B6E70]",
                "flex items-center justify-content",
                "transition-all duration-[280ms]",
                "hover:bg-[#86C232] hover:border-[#86C232] hover:scale-110",
              ].join(" ")}
            >
              <MoveDown
                size={18}
                className="text-white group-hover:text-[#222629] transition-colors duration-[280ms] m-auto"
              />
            </div>
          </div>

        </div>
        {/* end curved frame */}

      </div>
      {/* end outer shell */}
    </>
  );
}