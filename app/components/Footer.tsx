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
    { label: "Customer Experience", href: "/page1" },
    { label: "Training Programs",   href: "/page2" },
    { label: "Business Strategy",   href: "/page3" },
    { label: "Training Program",    href: "/page4" },
    { label: "ESG Consulting",      href: "/page5" },
    { label: "Development Hub",     href: "page6" },
  ],
  resources: [
    { label: "Contact us",   href: "/contact" },
    { label: "Team Member",  href: "/team" },
    { label: "Recognitions", href: "/" },
    { label: "Careers",      href: "/careers", badge: "NEW" },
    { label: "News",         href: "/readblog" },
    { label: "Feedback",     href: "/faq" },
  ],
};

/* ─────────────────────────────────────────────
   HEADING LETTER HOVER EFFECT
───────────────────────────────────────────── */
function AnimatedHeading({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h2 className="text-white text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight max-w-[650px]">
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
   SIMPLE FOOTER LINK
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
      className="inline-flex items-center gap-2 group"
    >
      <span
        className="inline-block font-medium text-[15.5px] transition-colors duration-300"
        style={{ color: hovered ? "#86C232" : "#474B4F" }}
      >
        {label}
      </span>
      {badge && (
        <span className="bg-[#86C232] text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ml-1">
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
        .gs-btn {
          transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.2s ease;
        }
        .gs-btn:hover {
          background: #86C232 !important;
          box-shadow: 0 10px 36px rgba(134,194,50,0.3);
        }
        .gs-btn:active { transform: scale(0.97); }

        .gs-circle {
          background: white;
          color: #222629;
          transition: background 0.35s ease, color 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .gs-btn:hover .gs-circle {
          transform: rotate(45deg) scale(1.05);
        }
      `}} />

      <footer className="relative overflow-hidden bg-[#EEF3EE] font-['Manrope',_sans-serif]">
        <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-10">

          {/* ═══════════════════════════════════════════
              CTA BANNER
          ═══════════════════════════════════════════ */}
          <div
            className="relative overflow-hidden rounded-[32px] mb-24 min-h-[380px] flex flex-col lg:flex-row items-stretch isolate"
            style={{ background: "#61892F" }}
          >
            {/* Ambient Background Glow inside banner */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#86C232] blur-[150px] opacity-40 pointer-events-none rounded-full" />

            {/* LEFT: Text + Button */}
            <div className="relative z-30 flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-[4.5rem] lg:pr-0 max-w-[750px]">
              <AnimatedHeading text="Let's Build Future together." />

              <div className="mt-12">
                <button
                  className="gs-btn group inline-flex items-center gap-4 w-fit rounded-full pl-8 pr-2 py-2 font-bold text-[1.1rem] text-white shadow-lg"
                  style={{ background: "#222629" }}
                >
                  <span>Started Now</span>
                  <span className="gs-circle w-[46px] h-[46px] rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={22} strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT: Image with Blob Mask */}
            <div className="relative z-20 flex-1 min-h-[350px] lg:min-h-full overflow-hidden flex items-center justify-end">
              <div
                className="absolute right-0 w-[115%] lg:w-[105%] h-[110%] lg:h-[120%] origin-right"
                style={{
                  borderRadius: "50% 0% 0% 50% / 60% 0% 0% 40%",
                  overflow: "hidden",
                  transform: "translateX(2%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  alt="Business Meeting"
                  className="w-full h-full object-cover object-center transition-transform duration-[2500ms] hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              FOOTER GRID
          ═══════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] gap-12 lg:gap-8 mb-20">

            {/* 1. BRAND */}
            <div className="pr-4">
              <Link href="#" className="flex items-center gap-3 mb-6 group w-fit">
                <div className="w-11 h-11 flex items-center justify-center">
                  <img
                    src="/img/logo.png"
                    alt="Wexoraa Logo"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-[28px] font-black tracking-tight text-[#222629] group-hover:text-[#86C232] transition-colors duration-300">
                  Wexoraa
                </span>
              </Link>

              <p className="text-[#6B6E70] leading-[1.8] text-[15px] max-w-[280px] mb-8 font-medium">
                Personalize our developing custom ways to increase satisfaction and loyalty of our customer.
              </p>

              {/* Awwwards Badge */}
              <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center justify-center border-2 border-[#222629] rounded-full w-[72px] h-[72px] relative hover:border-[#86C232] transition-colors duration-300 group cursor-pointer">
                  <span className="text-xl font-black text-[#222629] group-hover:text-[#86C232] transition-colors duration-300 leading-none">5</span>
                  <span className="text-[9px] font-extrabold tracking-widest text-[#222629] absolute -bottom-2 bg-[#EEF3EE] px-1.5 uppercase">
                    AWWWARDS
                  </span>
                </div>
              </div>
            </div>

            {/* 2. SERVICES */}
            <div>
              <h3 className="text-[#222629] text-[1.35rem] font-extrabold mb-7">Services</h3>
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
              <h3 className="text-[#222629] text-[1.35rem] font-extrabold mb-7">Resources</h3>
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
              <h3 className="text-[#222629] text-[1.65rem] font-extrabold leading-[1.3] mb-6">
                Subscribe to Our <br /> Newsletter.
              </h3>

              {/* Input Field with Boxy Outline & Submit Button */}
              <div className="mb-5 flex items-stretch gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full h-[54px] rounded-md bg-white border-2 border-[#DCE6DC] px-5 outline-none text-[#222629] placeholder:text-[#6B6E70] focus:border-[#86C232] transition-colors duration-300 text-[15px] font-medium"
                  />
                </div>
                <button 
                  className="h-[54px] w-[54px] rounded-md bg-[#222629] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#86C232] transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* Checkbox underneath */}
              <label className="flex items-start gap-3 text-[14px] text-[#474B4F] font-medium cursor-pointer group w-fit">
                <div className="relative flex items-center pt-1">
                  <input 
                    type="checkbox" 
                    className="w-[18px] h-[18px] accent-[#86C232] cursor-pointer rounded border-[#DCE6DC]" 
                  />
                </div>
                <span>
                  Agree to our{" "}
                  <Link href="#" className="font-extrabold text-[#222629] hover:text-[#86C232] transition-colors duration-300">
                    Terms & Conditions
                  </Link>
                </span>
              </label>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              BOTTOM BAR
          ═══════════════════════════════════════════ */}
          <div className="pt-8 border-t border-[#474B4F]/15 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-[#474B4F] font-semibold text-[15px]">
              <a href="tel:+10095447818" className="flex items-center gap-2.5 hover:text-[#86C232] transition-colors duration-300">
                <Phone size={18} className="text-[#6B6E70]" /> (009) 544-7818
              </a>
              <a href="mailto:info@bexon.com" className="flex items-center gap-2.5 hover:text-[#86C232] transition-colors duration-300">
                <Mail size={18} className="text-[#6B6E70]" /> info@wexoraa.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
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
                  className="w-[38px] h-[38px] rounded-full bg-black/5 text-[#474B4F] flex items-center justify-center hover:bg-[#86C232] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={15} />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-[#6B6E70] text-[15px] font-medium text-center lg:text-right">
              © 2026 <span className="text-[#86C232] font-bold">Wexoraa</span> All rights reserved.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}