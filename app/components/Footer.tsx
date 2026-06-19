"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
interface FooterLinkItem {
  label: string;
  href: string;
  badge?: string; // FIX: explicitly typed so item.badge is always string | undefined, never a type error
}

const FOOTER_LINKS: { services: FooterLinkItem[]; resources: FooterLinkItem[] } = {
  services: [
    { label: "Web Development", href: "/page1" },
    { label: "UI/UX Design",   href: "/page2" },
    { label: "Custom Software",   href: "/page3" },
    { label: "Mobile Apps",    href: "/page4" },
    { label: "Digital Marketing",      href: "/page5" },
    { label: "AI Solutions",     href: "/page6" },
  ],
  resources: [
    { label: "Contact us",   href: "/contact" },
    { label: "About Us",     href: "/about" },
    { label: "Portfolio",    href: "/portfolio" },
  ],
};

/* ─────────────────────────────────────────────
   FOOTER LINK
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
        className="inline-block font-medium text-[16px] md:text-[18px] transition-colors duration-300"
        style={{ color: hovered ? "#86C232" : "#474B4F" }}
      >
        {label}
      </span>
      {badge && (
        <span className="bg-[#86C232] text-white text-[9px] md:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ml-1">
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
        <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-6 lg:px-8 pt-16 md:pt-28 pb-10">

          {/* ═══════════════════════════════════════════
              CTA BANNER
          ═══════════════════════════════════════════ */}
          <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] mb-16 md:mb-24 min-h-[320px] md:min-h-[450px] flex flex-col items-center justify-center bg-[#F2F6F3]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[500px] bg-[#86C232]/20 blur-[90px] md:blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-30 flex flex-col items-center text-center p-6 sm:p-12 w-full">
              <h2 className="text-[#222629] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-black leading-[1.1] tracking-tight max-w-[1000px] mx-auto mb-8 md:mb-10">
                Let&apos;s <span className="text-[#86C232]">Build</span> Future<br className="hidden sm:block" /> Together
              </h2>

              <div className="w-full flex justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 sm:gap-4 lg:gap-6 rounded-full p-2 pr-5 sm:pr-6 lg:pr-8 bg-[#222629] hover:bg-[#86C232] transition-colors duration-300 shadow-md"
                >
                  <div className="flex -space-x-3 lg:-space-x-4">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150" alt="Team 1" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[2.5px] lg:border-[3px] border-[#222629] group-hover:border-[#86C232] transition-colors object-cover relative z-30" />
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" alt="Team 2" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[2.5px] lg:border-[3px] border-[#222629] group-hover:border-[#86C232] transition-colors object-cover relative z-20" />
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" alt="Team 3" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[2.5px] lg:border-[3px] border-[#222629] group-hover:border-[#86C232] transition-colors object-cover relative z-10" />
                  </div>
                  <span className="flex items-center gap-1.5 sm:gap-2 text-white font-extrabold text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] group-hover:text-[#222629] transition-colors tracking-wide">
                    Lets Talk
                    <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:w-[22px] sm:h-[22px]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              FOOTER GRID
          ═══════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-8 mb-16 md:mb-20">

            {/* Brand */}
            <div className="flex flex-col items-start text-left pr-0 md:pr-8">
              <Link href="#" className="flex items-center gap-3 mb-5 md:mb-6 group w-fit">
                <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center">
                  <img src="/img/logo.png" alt="Wexoraa Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <span className="text-[24px] md:text-[28px] font-black tracking-tight text-[#222629] group-hover:text-[#86C232] transition-colors duration-300">
                  Wexoraa
                </span>
              </Link>
              <p className="text-[#6B6E70] leading-[1.7] md:leading-[1.8] text-[14px] md:text-[15px] max-w-[320px] font-medium">
                Personalize our developing custom ways to increase satisfaction and loyalty of our customer.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col items-start">
              <h3 className="text-[#222629] text-[1.25rem] md:text-[1.5rem] font-extrabold mb-5 md:mb-7">Services</h3>
              <ul className="space-y-3 md:space-y-4 flex flex-col items-start">
                {FOOTER_LINKS.services.map((item, i) => (
                  <li key={i}>
                    <FooterLink href={item.href} label={item.label} badge={item.badge} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-start">
              <h3 className="text-[#222629] text-[1.25rem] md:text-[1.5rem] font-extrabold mb-5 md:mb-7">Resources</h3>
              <ul className="space-y-3 md:space-y-4 flex flex-col items-start">
                {FOOTER_LINKS.resources.map((item, i) => (
                  <li key={i}>
                    <FooterLink href={item.href} label={item.label} badge={item.badge} />
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ═══════════════════════════════════════════
              BOTTOM BAR
          ═══════════════════════════════════════════ */}
          <div className="pt-8 border-t border-[#474B4F]/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-6">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 text-[#474B4F] font-semibold text-[14px] md:text-[15px]">
              <a href="tel:+10095447818" className="flex items-center gap-2.5 hover:text-[#86C232] transition-colors duration-300">
                <Phone size={18} className="text-[#6B6E70]" /> (009) 544-7818
              </a>
              <a href="mailto:info@wexoraa.com" className="flex items-center gap-2.5 hover:text-[#86C232] transition-colors duration-300">
                <Mail size={18} className="text-[#6B6E70]" /> info@wexoraa.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
              <div className="flex items-center gap-2.5">
                {[
                  { icon: FaFacebookF,  label: "Facebook"  },
                  { icon: FaInstagram,  label: "Instagram" },
                  { icon: FaXTwitter,   label: "Twitter"   },
                  { icon: FaLinkedinIn, label: "LinkedIn"  },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <Link key={i} href="#" aria-label={social.label}
                      className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] rounded-full bg-black/5 text-[#474B4F] flex items-center justify-center hover:bg-[#86C232] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={15} />
                    </Link>
                  );
                })}
              </div>
              <div className="text-[#6B6E70] text-[13px] md:text-[15px] font-medium">
                © 2026 <span className="text-[#86C232] font-bold">Wexoraa</span> All rights reserved.
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}