"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const FOOTER_LINKS = {
  services: [
    { label: "Customer Experience", href: "#" },
    { label: "Training Programs",   href: "#" },
    { label: "Business Strategy",   href: "#" },
    { label: "Training Program",    href: "#" },
    { label: "ESG Consulting",      href: "#" },
    { label: "Development Hub",     href: "#" },
  ],
  resources: [
    { label: "Contact us",   href: "#" },
    { label: "Team Member",  href: "#" },
    { label: "Recognitions", href: "#" },
    { label: "Careers",      href: "#", badge: "NEW" },
    { label: "News",         href: "#" },
    { label: "Feedback",     href: "#" },
  ],
};

/* ─────────────────────────────────────────────
   HEADING LETTER HOVER EFFECT
───────────────────────────────────────────── */
function AnimatedHeading({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h2 className="text-white text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight max-w-[620px]">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="inline-block transition-all duration-300 hover:text-[#222629] hover:-translate-y-1 cursor-default"
              style={{ transitionDelay: `${ci * 20}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}

/* ─────────────────────────────────────────────
   SIMPLE FOOTER LINK — colour change only
───────────────────────────────────────────── */
function FooterLink({
  href,
  label,
  badge,
}: {
  href: string;
  label: string;
  badge?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-2"
    >
      <span
        className="inline-block font-medium text-[15px] transition-colors duration-300"
        style={{ color: hovered ? "#86C232" : "#6B6E70" }}
      >
        {label}
      </span>
      {badge && (
        <span className="bg-[#86C232] text-white text-[9px] font-black uppercase tracking-wider px-2 py-[3px] rounded-sm">
          {badge}
        </span>
      )}
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MAIN FOOTER
───────────────────────────────────────────── */
export default function Footer(): React.ReactElement {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Pill bg transitions */
        .gs-btn {
          transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.2s ease;
        }
        .gs-btn:hover {
          background: #86C232 !important;
          box-shadow: 0 10px 36px rgba(134,194,50,0.42);
        }
        .gs-btn:active { transform: scale(0.97); }

        /* Arrow circle */
        .gs-circle {
          background: white;
          color: #222629;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .gs-btn:hover .gs-circle {
          background: #222629;
          color: white;
        }

        /* Arrow icon sliding rotation alignment on hover */
        .gs-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .gs-btn:hover .gs-arrow {
          transform: rotate(-45deg);
        }
      `}} />

      {/* MODIFIED: Master layout switched from bg-[#e8f1ef] to absolute white bg */}
      <footer className="relative overflow-hidden bg-white font-['Manrope',_sans-serif]">

        {/* Ambient glows optimized for white backdrop depth */}
        <div className="absolute top-[-140px] right-[-140px] w-[380px] h-[380px] rounded-full bg-[#86C232]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-140px] left-[-140px] w-[420px] h-[420px] rounded-full bg-[#86C232]/10 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-10">

          {/* ═══════════════════════════════════════════
              CTA BANNER
          ═══════════════════════════════════════════ */}
          <div
            className="relative overflow-hidden rounded-[28px] mb-24 min-h-[380px] shadow-[0_25px_80px_rgba(134,194,50,0.15)] flex flex-col lg:flex-row items-stretch isolate"
            style={{ background: "linear-gradient(135deg, #61892F 0%, #86C232 100%)" }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 z-[1] opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* LEFT: text + button */}
            <div className="relative z-30 flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-16 max-w-[700px]">
              <AnimatedHeading text="Let's Build Future Together." />

              <div className="mt-10">
                <button
                  className="gs-btn group inline-flex items-center gap-4 w-fit rounded-full pl-7 pr-2 py-2 font-bold text-[1rem] text-white shadow-[0_10px_30px_rgba(34,38,41,0.3)]"
                  style={{ background: "#222629" }}
                >
                  <span>Get Started Now</span>
                  <span className="gs-circle w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="gs-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT: image with blob mask */}
            <div className="relative z-20 flex-1 min-h-[320px] lg:min-h-full overflow-hidden flex items-center justify-end">
              <div
                className="absolute right-0 w-[120%] lg:w-[110%] h-full lg:h-[130%] origin-right"
                style={{
                  borderRadius: "50% 0% 0% 50% / 70% 0% 0% 30%",
                  overflow: "hidden",
                  transform: "translateX(5%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  alt="Business Meeting"
                  className="w-full h-full object-cover object-right-top transition-transform duration-[2500ms] hover:scale-105"
                />
                <div className="absolute inset-0 shadow-[inset_20px_0_40px_rgba(34,38,41,0.15)] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              FOOTER GRID
          ═══════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10 mb-16">

            {/* 1. BRAND */}
            <div>
              <Link href="#" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/img/logo.png"
                    alt="Wexoraa Logo"
                    className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-3xl font-extrabold tracking-tight text-[#222629] group-hover:text-[#86C232] transition-colors duration-300">
                  Wexoraa
                </span>
              </Link>

              <p className="text-[#6B6E70] leading-[1.9] text-sm max-w-[290px] mb-8">
                Developing personalized customer journeys to increase satisfaction
                and loyalty through scalable modern digital experiences.
              </p>

              {/* Awwwards Badge */}
              <div className="flex gap-4 items-center opacity-80">
                {/* MODIFIED: Awwwards floating mask indicator badge background switched from bg-[#e8f1ef] to custom white layer context alignment */}
                <div className="flex flex-col items-center justify-center border-2 border-[#474B4F] rounded-full w-16 h-16 relative hover:border-[#86C232] transition-colors duration-300 group cursor-pointer">
                  <span className="text-sm font-bold text-[#222629] group-hover:text-[#86C232] transition-colors duration-300">5</span>
                  <span className="text-[8px] font-bold tracking-wider text-[#222629] absolute -bottom-4 bg-white px-1">
                    AWWWARDS
                  </span>
                </div>
              </div>
            </div>

            {/* 2. SERVICES */}
            <div>
              <h3 className="text-[#222629] text-xl font-extrabold mb-8">Services</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.services.map((item, i) => (
                  <li key={i}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. RESOURCES */}
            <div>
              <h3 className="text-[#222629] text-xl font-extrabold mb-8">Resources</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.resources.map((item, i) => (
                  <li key={i}>
                    <FooterLink href={item.href} label={item.label} badge={item.badge} />
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. NEWSLETTER */}
            <div>
              <h3 className="text-[#222629] text-2xl font-extrabold leading-tight mb-6 pr-4">
                Subscribe to Our{" "}
                <span className="text-[#86C232]">Newsletter.</span>
              </h3>

              {/* MODIFIED: Input element border parameters fixed to show clean structural styling against absolute white layout surface */}
              <div className="relative mb-5">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full h-[60px] rounded-2xl bg-[#f4f7f6] border border-transparent px-5 pr-16 outline-none text-[#222629] placeholder:text-[#6B6E70] focus:border-[#86C232] shadow-sm transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-[#222629] text-white flex items-center justify-center hover:bg-[#86C232] transition-all duration-300 group/sub">
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover/sub:rotate-45" />
                </button>
              </div>

              <label className="flex items-start gap-3 text-sm text-[#6B6E70] leading-relaxed cursor-pointer">
                <input type="checkbox" className="mt-[3px] w-4 h-4 accent-[#86C232] cursor-pointer" />
                <span>
                  Agree to our{" "}
                  <Link href="#" className="font-bold text-[#222629] hover:text-[#86C232] transition-colors duration-300">
                    Terms &amp; Condition?
                  </Link>
                </span>
              </label>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              BOTTOM BAR
          ═══════════════════════════════════════════ */}
          <div className="pt-8 border-t border-[#474B4F]/15 flex flex-col lg:flex-row items-center justify-between gap-6">

            <div className="flex flex-col sm:flex-row items-center gap-6 text-[#6B6E70] font-medium text-sm">
              <a href="tel:+10095447818" className="flex items-center gap-2 hover:text-[#86C232] transition-colors duration-300">
                <Phone size={18} /> (009) 544-7818
              </a>
              <a href="mailto:info@wexoraa.com" className="flex items-center gap-2 hover:text-[#86C232] transition-colors duration-300">
                <Mail size={18} /> info@wexoraa.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF,  label: "Facebook"  },
                { icon: FaInstagram,  label: "Instagram" },
                { icon: FaXTwitter,   label: "Twitter"   },
                { icon: FaLinkedinIn, label: "LinkedIn"  },
              ].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#222629]/5 text-[#474B4F] flex items-center justify-center shadow-sm hover:bg-[#86C232] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>

            <div className="text-[#6B6E70] text-sm font-medium text-center lg:text-right">
              © 2026 Wexoraa All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}