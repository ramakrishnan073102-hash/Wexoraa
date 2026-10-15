"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// --- DATA ---
const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "UI/UX Design", href: "/ui-ux-design" },
      { label: "Custom Software", href: "/custom-software" },
      { label: "Mobile Apps", href: "/mobile-apps" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "AI Solutions", href: "/ai-solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "About Us", href: "/aboutus" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
];

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/wexoraa?stkn=MW5na2dpNDFmMHk1Mg==" },
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/wexoraainfotech/" },
];

const CONTACTS = [
  { icon: Phone, text: "STV Nagar, Nava India Peelamedu, Coimbatore - 641004", href: "#" },
  { icon: Mail, text: "info@wexoraa.com", href: "mailto:info@wexoraa.com" },
];

// --- SUBCOMPONENTS ---
function FooterLink({ href, label, badge }: { href: string; label: string; badge?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="inline-flex items-center gap-2 group select-none outline-none focus:outline-none">
      <span className="inline-block font-medium text-[16px] md:text-[18px] transition-colors duration-300" style={{ color: hovered ? "#86C232" : "#474B4F" }}>
        {label}
      </span>
      {badge && <span className="bg-[#86C232] text-white text-[9px] md:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ml-1">{badge}</span>}
    </Link>
  );
}

// --- MAIN COMPONENT ---
export default function Footer(): React.ReactElement {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative overflow-hidden bg-white font-['Manrope',_sans-serif]">
        <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-6 lg:px-8 pt-16 md:pt-28 pb-10">
          
          {/* CTA BANNER */}
          <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] mb-16 md:mb-24 min-h-[320px] md:min-h-[450px] flex flex-col items-center justify-center bg-[#F2F6F3]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[500px] bg-[#86C232]/20 blur-[90px] md:blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="relative z-30 flex flex-col items-center text-center p-6 sm:p-12 w-full">
              <h2 className="text-[#222629] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-black leading-[1.1] tracking-tight max-w-[1000px] mx-auto mb-8 md:mb-10 select-none cursor-default">
                Let&apos;s <span className="text-[#86C232]">Build</span> Future<br className="hidden sm:block" /> Together
              </h2>
              <Link href="/contact" className="group inline-flex items-center bg-[#222629] hover:bg-[#86C232] rounded-full transition-colors duration-300 shadow-md pr-2 pl-6 sm:pl-8 py-2 sm:py-2.5 select-none outline-none focus:outline-none">
                <span className="relative block overflow-hidden font-extrabold text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] text-white group-hover:text-[#222629] mr-4 sm:mr-6 tracking-wide h-[1.3em]">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">Get in Touch</span>
                  <span className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">Get in Touch</span>
                </span>
                <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 group-hover:bg-[#222629] text-white group-hover:text-[#86C232] transition-colors duration-300 shrink-0">
                  <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] -rotate-45 group-hover:rotate-0" />
                </span>
              </Link>
            </div>
          </div>

          {/* FOOTER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-8 mb-16 md:mb-20">
            <div className="flex flex-col items-start text-left pr-0 md:pr-8">
              <Link href="/" className="flex items-center gap-3 mb-5 md:mb-6 group w-fit select-none outline-none focus:outline-none">
                <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center">
                  <img src="/assets/img/wexoraalogo/logo.png" alt="Wexoraa Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <span className="text-[24px] md:text-[28px] font-black tracking-tight text-[#222629] group-hover:text-[#86C232] transition-colors duration-300">Wexoraa</span>
              </Link>
              <p className="text-[#6B6E70] leading-[1.7] md:leading-[1.8] text-[14px] md:text-[15px] max-w-[320px] font-medium select-none cursor-default">
                We build digital solutions that help businesses grow. From websites and apps to software and digital marketing, we’re your complete growth partner.
              </p>
            </div>

            {FOOTER_COLUMNS.map((col, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <h3 className="text-[#222629] text-[1.25rem] md:text-[1.5rem] font-extrabold mb-5 md:mb-7 select-none cursor-default">{col.title}</h3>
                <ul className="space-y-3 md:space-y-4 flex flex-col items-start">
                  {col.links.map((item, i) => (
                    <li key={i}><FooterLink href={item.href} label={item.label} /></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-8 border-t border-[#474B4F]/15 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 lg:gap-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 text-[#474B4F] font-semibold text-[14px] md:text-[15px]">
              {CONTACTS.map((contact, i) => (
                <a key={i} href={contact.href} className="flex items-center gap-2.5 hover:text-[#86C232] transition-colors duration-300 select-none outline-none focus:outline-none">
                  <contact.icon size={18} className="text-[#6B6E70] shrink-0" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10 w-full xl:w-auto">
              <div className="flex items-center gap-2.5">
                {SOCIALS.map((social, i) => (
                  <Link key={i} href={social.href} target={social.href !== "#" ? "_blank" : undefined} rel={social.href !== "#" ? "noopener noreferrer" : undefined} aria-label={social.label} className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] rounded-full bg-black/5 text-[#474B4F] flex items-center justify-center hover:bg-[#86C232] hover:text-white transition-all duration-300 hover:scale-110 select-none outline-none focus:outline-none">
                    <social.icon size={15} />
                  </Link>
                ))}
              </div>
              <div className="text-[#6B6E70] text-[13px] md:text-[15px] font-medium select-none cursor-default">
                © 2026 <span className="text-[#86C232] font-bold">Wexoraa</span> All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button onClick={scrollToTop} aria-label="Scroll to top" className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#222629] text-white flex items-center justify-center hover:bg-[#86C232] transition-all duration-500 shadow-lg group select-none outline-none focus:outline-none ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <ArrowUp size={24} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </>
  );
}