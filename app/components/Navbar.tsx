"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, X } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavBadge { text: string; color: string; }
interface NavChild { label: string; href: string; badge?: NavBadge; desc?: string; }
interface NavItem  { label: string; href: string; children?: NavChild[]; }

// ─── Nav Data ─────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/aboutus" },
  { 
    label: "Services", 
    href: "/services",
    children: [
      { label: "Web Development", href: "/web-development" },
      { label: "UI/UX Design", href: "/ui-ux-design" },
      { label: "Custom Software", href: "/custom-software" },
      { label: "Mobile Apps", href: "/mobile-apps" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "AI Solutions", href: "/ai-solutions" },
    ]
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const SocialIcons: React.FC[] = [
  () => (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
];

// ─── Mobile Accordion Row ─────────────────────────────────────────────────────
function MobileAccordion({ label, href, isOpen, onToggle, children, closeMenu }: any) {
  return (
    <div className="border-t border-[#474B4F]/50">
      <div className="flex items-center justify-between w-full px-6 py-[18px] outline-none select-none">
        <Link 
          href={href}
          onClick={closeMenu}
          className={`text-[1.08rem] font-bold transition-colors duration-200 flex-1 cursor-pointer ${isOpen ? "text-[#86C232]" : "text-white"}`}
        >
          {label}
        </Link>
        <button onClick={onToggle} className="p-2 -mr-2 cursor-pointer focus:outline-none flex-shrink-0">
          <ChevronDown
            size={18} strokeWidth={2}
            className={`transition-all duration-300 ${isOpen ? "text-[#86C232] rotate-180" : "text-[#6B6E70] rotate-0"}`}
          />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar(): React.ReactElement {
  const [scrolled,       setScrolled]      = useState<boolean>(false);
  const [hidden,         setHidden]        = useState<boolean>(false);
  const [mobileOpen,    setMobileOpen]    = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onScroll = (): void => { if (activeMenu) setActiveMenu(null); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeMenu]);

  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = (): void => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 10);
        if (y <= 0) setHidden(false);
        else if (y > lastScrollY.current && y > 100) setHidden(true);
        else if (y < lastScrollY.current) setHidden(false);
        lastScrollY.current = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) setOpenAccordion(null);
  }, [mobileOpen]);

  return (
    <>
      {/* Scrollbar styling (Tailwind lacks native pseudo-element support for scrollbars) */}
      <style>{`
        ::-webkit-scrollbar { width: 14px; }
        ::-webkit-scrollbar-track { background: #222629; }
        ::-webkit-scrollbar-thumb { background: #86C232; border-radius: 10px; border: 3px solid #222629; }
        ::-webkit-scrollbar-thumb:hover { background: #95D638; }
      `}</style>

      {/* ══ NAVBAR WRAPPER ══ */}
      <div
        className={`fixed z-[1000] flex justify-center pointer-events-none top-4 left-3 right-3 md:top-8 md:left-6 md:right-6 lg:top-8 lg:left-10 lg:right-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] font-['Manrope',_sans-serif] ${hidden ? "-translate-y-[180%] opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <div
          className={`relative pointer-events-auto w-full flex items-center justify-between rounded-[10px] px-2.5 py-2 md:px-4 md:py-2.5 gap-1.5 md:gap-4 transition-all duration-400 select-none antialiased ${scrolled ? "bg-white shadow-[0_8px_32px_rgba(34,38,41,0.08)]" : "bg-white shadow-sm"}`}
        >
          {/* Pebble Texture */}
          <div 
            className="absolute inset-0 z-0 rounded-[10px] pointer-events-none mix-blend-overlay" 
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pebbleNoise' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pebbleNoise)'/%3E%3C/svg%3E\")" }} 
          />

          <div className="relative z-10 w-full flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0 group overflow-hidden pl-2 cursor-pointer focus:outline-none">
              <img src="/assets/img/wexoraalogo/logo.png" alt="Wexoraa" className="h-5 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <span className="text-[1.05rem] sm:text-[1.28rem] font-bold text-[#222629] tracking-[-0.03em]">Wex<span className="text-[#86C232]">oraa</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center list-none m-0 p-0 gap-2 xl:gap-4">
                {NAV_ITEMS.map((item) => {
                  const hasDD = !!item.children;
                  const isOpen = activeMenu === item.label;
                  return (
                    <li key={item.label} className="relative" onMouseEnter={() => hasDD && openMenu(item.label)} onMouseLeave={() => hasDD && scheduleClose()}>
                      {hasDD ? (
                        <Link href={item.href} className={`flex items-center gap-1.5 px-4 py-2 text-[1.2rem] font-extrabold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer select-none focus:outline-none ${isOpen ? "text-[#86C232] bg-[#86C232]/10" : "text-[#474B4F] hover:text-[#86C232] hover:bg-[#222629]/5"}`}>
                          {item.label}
                          <ChevronDown size={16} className={`opacity-60 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "rotate-180" : "rotate-0"}`} />
                        </Link>
                      ) : (
                        <Link href={item.href} className="flex items-center gap-1 px-4 py-2 text-[1.2rem] font-extrabold text-[#474B4F] rounded-full hover:text-[#86C232] hover:bg-[#222629]/5 transition-all duration-200 whitespace-nowrap cursor-pointer select-none focus:outline-none">
                          {item.label}
                        </Link>
                      )}

                      {/* DROPDOWN MENU */}
                      {hasDD && (
                        <div className={`absolute top-full left-0 min-w-[240px] z-[200] pt-4 origin-top transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "opacity-100 visible pointer-events-auto translate-y-0 scale-100" : "opacity-0 invisible pointer-events-none translate-y-2 scale-95"}`} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                          <div className="bg-[#222629] border border-white/10 rounded-[16px] p-2 shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                            {item.children!.map((child, idx) => (
                              <div key={child.label}>
                                <Link href={child.href} onClick={() => setActiveMenu(null)} className="group flex items-center justify-between px-3.5 py-3 rounded-[12px] text-[0.875rem] font-bold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 whitespace-nowrap cursor-pointer select-none focus:outline-none">
                                  <span className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#86C232] opacity-0 flex-shrink-0 scale-50 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" />
                                    {child.label}
                                  </span>
                                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full text-[#86C232] opacity-0 -translate-x-1.5 transition-all duration-200 bg-[#86C232]/10 group-hover:opacity-100 group-hover:translate-x-0">
                                    <ArrowRight size={11} strokeWidth={2.5} />
                                  </span>
                                </Link>
                                {idx < item.children!.length - 1 && <div className="h-px bg-white/10 mx-3" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right Actions & Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
              {/* Animated Connect Button */}
              <Link href="/contact" className="group inline-flex items-center bg-[#86C232] text-[#222629] rounded-full flex-shrink-0 transition-transform duration-200 hover:-translate-y-px py-[3px] pr-[3px] pl-3 md:py-1.5 md:pr-1.5 md:pl-5 shadow-sm cursor-pointer select-none focus:outline-none">
                <span className="relative block overflow-hidden text-xs md:text-[0.88rem] font-bold mr-3 md:mr-3.5 whitespace-nowrap h-[18px]">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">Let's Connect</span>
                  <span className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">Let's Connect</span>
                </span>
                <span className="flex items-center justify-center w-[26px] h-[26px] md:w-8 md:h-8 rounded-full bg-[#222629] text-[#86C232] flex-shrink-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.65,0,0.35,1)] -rotate-45 group-hover:rotate-0">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
              
              <button 
                className="flex lg:hidden w-[34px] h-[34px] sm:w-11 sm:h-11 items-center justify-center text-[#222629]/70 hover:text-[#86C232] transition-colors cursor-pointer select-none focus:outline-none" 
                onClick={() => setMobileOpen(true)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE MENU ══ */}
      <div className={`fixed inset-0 z-[1100] bg-black/70 backdrop-blur-sm lg:hidden transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setMobileOpen(false)} />

      <nav
        className={`fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[380px] z-[1101] flex flex-col lg:hidden bg-[#222629] select-none font-['Manrope',_sans-serif] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer focus:outline-none" onClick={() => setMobileOpen(false)}>
            <img src="/assets/img/wexoraalogo/logo.png" alt="Wexoraa" className="h-7 w-auto object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            <span className="text-[1.22rem] font-bold text-white tracking-[-0.03em]">Wex<span className="text-[#86C232]">oraa</span></span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer focus:outline-none">
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 overscroll-contain">
          <div className="border-t border-[#474B4F]/50">
            <Link href="/" className="flex items-center justify-between w-full px-6 py-[18px] text-[1.08rem] font-bold text-white hover:text-[#86C232] transition-colors duration-200 cursor-pointer select-none focus:outline-none" onClick={() => setMobileOpen(false)}>Home</Link>
          </div>
          <div className="border-t border-[#474B4F]/50">
            <Link href="/about" className="flex items-center justify-between w-full px-6 py-[18px] text-[1.08rem] font-bold text-white hover:text-[#86C232] transition-colors duration-200 cursor-pointer select-none focus:outline-none" onClick={() => setMobileOpen(false)}>About Us</Link>
          </div>

          <MobileAccordion 
            label="Services" href="/services" isOpen={openAccordion === "Services"} 
            onToggle={() => setOpenAccordion(openAccordion === "Services" ? null : "Services")}
            closeMenu={() => setMobileOpen(false)}
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              {NAV_ITEMS.find((i) => i.label === "Services")?.children?.map((child) => (
                <Link key={child.label} href={child.href} className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-white/70 hover:text-[#86C232] transition-colors cursor-pointer select-none focus:outline-none" onClick={() => setMobileOpen(false)}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86C232] opacity-70" />
                  {child.label}
                </Link>
              ))}
            </div>
          </MobileAccordion>

          <div className="border-t border-[#474B4F]/50">
            <Link href="/portfolio" className="flex items-center justify-between w-full px-6 py-[18px] text-[1.08rem] font-bold text-white hover:text-[#86C232] transition-colors duration-200 cursor-pointer select-none focus:outline-none" onClick={() => setMobileOpen(false)}>Portfolio</Link>
          </div>
          <div className="border-t border-[#474B4F]/50">
            <Link href="/contact" className="flex items-center justify-between w-full px-6 py-[18px] text-[1.08rem] font-bold text-white hover:text-[#86C232] transition-colors duration-200 cursor-pointer select-none focus:outline-none" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>

          <div className="border-t border-[#474B4F]/50 px-6 pt-7 pb-6">
            <p className="text-[1.08rem] font-bold text-white mb-5">Contact Info</p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Phone",    value: "+91 9360375338" },
                { label: "Email",    value: "info@wexoraa.com" },
                { label: "Location", value: "Coimbatore, Tamil Nadu, India" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[0.72rem] text-[#6B6E70] uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-[0.93rem] text-white font-medium leading-snug">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-7">
              {SocialIcons.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#474B4F] text-white hover:bg-[#86C232] hover:text-[#222629] transition-all cursor-pointer focus:outline-none">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div style={{ height: "max(env(safe-area-inset-bottom, 0px), 16px)" }} />
        </div>
      </nav>
    </>
  );
}