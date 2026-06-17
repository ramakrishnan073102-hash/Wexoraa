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
      <footer className="relative overflow-hidden bg-[#EEF3EE] font-['Manrope',_sans-serif]">
        <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-10">

          {/* ═══════════════════════════════════════════
              CTA BANNER (GLOSSY & MASSIVE TEXT)
          ═══════════════════════════════════════════ */}
          <div
            className="relative overflow-hidden rounded-[10px] mb-24 min-h-[500px] flex flex-col items-center justify-center isolate bg-gradient-to-br from-[#86C232]/20 via-[#86C232]/5 to-transparent backdrop-blur-2xl border-[1.5px] border-white/60 shadow-[0_20px_60px_rgba(134,194,50,0.15)]"
          >
            {/* Inner Glossy Sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent pointer-events-none z-0" />

            {/* Ambient Background Glow inside banner */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#86C232]/25 blur-[120px] pointer-events-none rounded-full z-0" />

            {/* Content: Massive Text + Centered Avatar Button */}
            <div className="relative z-30 flex flex-col items-center text-center p-8 sm:p-12 w-full">
              
              <h2 className="text-[#222629] text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-black leading-[0.95] tracking-tighter max-w-[1100px] mx-auto drop-shadow-md flex flex-wrap justify-center gap-x-[0.2em] mb-14">
                
                {/* Let's */}
                <span className="inline-block">
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">L</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">e</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">t</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">'s</span>
                </span>
                
                {/* Build (Glossy Green Color) */}
                <span className="inline-block text-[#86C232] drop-shadow-sm">
                  <span className="hover:text-[#222629] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">B</span>
                  <span className="hover:text-[#222629] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">u</span>
                  <span className="hover:text-[#222629] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">i</span>
                  <span className="hover:text-[#222629] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">l</span>
                  <span className="hover:text-[#222629] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">d</span>
                </span>
                
                {/* Future */}
                <span className="inline-block">
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">F</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">u</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">t</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">u</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">r</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">e</span>
                </span>
                
                {/* Together? */}
                <span className="inline-block">
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">T</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">o</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">g</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">e</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">t</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">h</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">e</span>
                  <span className="hover:text-[#86C232] transition-all duration-300 hover:-translate-y-2 inline-block cursor-default">r</span>
                  
                </span>
              </h2>

              {/* Centered Avatar "Lets Talk" Button */}
              <div className="w-full flex justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 lg:gap-6 rounded-full p-2 pr-6 lg:pr-8 bg-[#222629] border border-white/20 shadow-[0_15px_40px_rgba(34,38,41,0.2)] hover:bg-[#86C232] transition-all duration-300 backdrop-blur-md"
                >
                  {/* Overlapping Avatars */}
                  <div className="flex -space-x-3 lg:-space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150" 
                      alt="Team 1" 
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-[3px] border-[#222629] group-hover:border-[#86C232] transition-colors object-cover relative z-30" 
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" 
                      alt="Team 2" 
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-[3px] border-[#222629] group-hover:border-[#86C232] transition-colors object-cover relative z-20" 
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" 
                      alt="Team 3" 
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-[3px] border-[#222629] group-hover:border-[#86C232] transition-colors object-cover relative z-10" 
                    />
                  </div>
                  
                  {/* Text & Arrow */}
                  <span className="flex items-center gap-2 text-white font-extrabold text-[1.1rem] lg:text-[1.3rem] group-hover:text-[#222629] transition-colors tracking-wide">
                    Lets Talk 
                    <ArrowUpRight size={24} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
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

              <p className="text-[#6B6E70] leading-[1.8] text-[15px] max-w-[280px] font-medium">
                Personalize our developing custom ways to increase satisfaction and loyalty of our customer.
              </p>
              {/* Note: Awwwards Badge has been entirely removed from here */}
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
                { icon: FaFacebookF,   label: "Facebook"  },
                { icon: FaInstagram,   label: "Instagram" },
                { icon: FaXTwitter,    label: "Twitter"   },
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