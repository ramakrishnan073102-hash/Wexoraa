"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronDown, ArrowRight, X, Phone,
  Blocks, Radar, Leaf, Sun, Cpu, Megaphone,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavBadge { text: string; color: string; }
interface NavChild { label: string; href: string; badge?: NavBadge; icon?: React.ElementType; desc?: string; }
interface NavItem  { label: string; href: string; children?: NavChild[]; mega?: boolean; }
interface MegaCol  { title: string; links: NavChild[]; }

// ─── Nav Data ─────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  {
    label: "Home", href: "/",
  
  },
  { label: "Pages", href: "#", mega: true },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Business Strategy Development",   href: "/page1",  icon: Blocks,    desc: "Customized corporate execution models" },
      { label: "Customer Experience Solutions",   href: "/page2",        icon: Radar,     desc: "Seamless journeys that build loyalty"  },
      { label: "Sustainability & ESG Consulting", href: "/page3",       icon: Leaf,      desc: "Actionable ESG frameworks"             },
      { label: "Training Development Programs",   href: "/page4",  icon: Sun,       desc: "Upskill employees & align objectives"  },
      { label: "IT Support & Maintenance",        href: "/page5",        icon: Cpu,       desc: "Reliable tech support for your team"   },
      { label: "Marketing Strategy & Campaigns",  href: "/page6", icon: Megaphone, desc: "Data-driven marketing execution"       },
    ],
  },
  {
    label: "Portfolio", href: "/portfolio",
    children: [
      { label: "Portfolios",        href: "/portfolio" },
      { label: "Portfolio Details", href: "/portfoliopage1" },
    ],
  },
  {
    label: "Blog", href: "/blog",
    children: [
      { label: "Blog",              href: "/readblog" },
      { label: "Blog Grid",         href: "/bloggrid" },
      { label: "Blog With Sidebar", href: "/blogrightsidebar" },
      { label: "Blog Details",      href: "/blogpage1" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const MEGA_COLS: MegaCol[] = [
  {
    title: "Main Pages",
    links: [
      { label: "About Us",          href: "/about" },
      { label: "Our History",       href: "/history",         badge: { text: "HOT", color: "#ef4444" } },
      { label: "Team",              href: "/team" },
      { label: "Team Details",      href: "/teamdetails" },
      { label: "Careers",           href: "/careers",         badge: { text: "New", color: "#86C232" } },
      { label: "Careers Details",   href: "/careersdetails" },
      { label: "Pricing Plan",      href: "/pricing" },
      { label: "Feedbacks",         href: "/feedbacks" },
      { label: "Faq",               href: "/faq" },
      { label: "Contact",           href: "/contact" },
    ],
  },
  {
    title: "Other pages",
    links: [
      { label: "Services",          href: "/navservices" },
      { label: "Service Details",   href: "/page1" },
      { label: "Portfolios",        href: "/portfolio" },
      { label: "Portfolio Details", href: "/portfoliopage1" },
      { label: "Error 404",         href: "/404" },
      { label: "Blog Grid",         href: "/bloggrid",    badge: { text: "New", color: "#86C232" } },
      { label: "Blog Standard",     href: "/readblog" },
      { label: "Blog Sidebar",      href: "/blogrightsidebar" },
      { label: "Blog Details",      href: "/blogpage1" },
      { label: "Term & Conditions", href: "/termsandconditions" },
    ],
  },
  {
    title: "Shop pages",
    links: [
      { label: "Shop",          href: "/shop",         badge: { text: "HOT", color: "#ef4444" } },
      { label: "Shop Details",  href: "/shop-details" },
      { label: "Cart",          href: "/cart" },
      { label: "Checkout",      href: "/checkout" },
      { label: "My Account",    href: "/account" },
      { label: "Wishlist",      href: "/wishlist",     badge: { text: "New", color: "#86C232" } },
      { label: "Login",         href: "/login" },
      { label: "Registration",  href: "/register" },
      { label: "Order Confirm", href: "/order-confirm" },
      { label: "Coming Soon",   href: "/coming-soon" },
    ],
  },
];

const HOME_DEMOS = [
  { label: "Home - 01", href: "/", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
  { label: "Home - 02", href: "/", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80" },
  { label: "Home - 03", href: "/", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
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
function MobileAccordion({
  label, isOpen, onToggle, children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[#474B4F]/50">
      <button
        className="flex items-center justify-between w-full px-6 py-[18px] outline-none"
        onClick={onToggle}
      >
        <span
          className="text-[1.08rem] font-bold transition-colors duration-200"
          style={{ color: isOpen ? "#86C232" : "#ffffff" }}
        >
          {label}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          style={{
            color: isOpen ? "#86C232" : "#6B6E70",
            transition: "transform 0.32s cubic-bezier(0.16,1,0.3,1), color 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        />
      </button>
      <div className={`mob-acc ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar(): React.ReactElement {
  const [scrolled,      setScrolled]      = useState<boolean>(false);
  const [hidden,        setHidden]        = useState<boolean>(false);
  const [sidePanelOpen, setSidePanelOpen] = useState<boolean>(false);
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
    document.body.style.overflow = sidePanelOpen || mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidePanelOpen, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) setOpenAccordion(null);
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        html, body { max-width: 100vw; overflow-x: hidden; }
        .navbar-hidden { transform: translateY(-180%); opacity: 0; }

        .tp-lbl-inner { display: block; transition: transform 0.4s cubic-bezier(0.65,0,0.35,1); }
        .tp-lbl::after {
          content: attr(data-text); position: absolute;
          top: 100%; left: 0; display: block;
          transition: transform 0.4s cubic-bezier(0.65,0,0.35,1);
        }
        .tp:hover .tp-lbl-inner { transform: translateY(-100%); }
        .tp:hover .tp-lbl::after { transform: translateY(-100%); }

        .js-dropdown {
          opacity: 0; visibility: hidden; pointer-events: none;
          transform: translateY(8px) scale(0.97); transform-origin: top center;
          transition: opacity 0.32s ease-out, transform 0.32s cubic-bezier(0.16,1,0.3,1), visibility 0.32s;
        }
        .js-dropdown[data-open="true"] {
          opacity: 1; visibility: visible; pointer-events: auto;
          transform: translateY(0) scale(1);
          transition: opacity 0.38s ease-out, transform 0.38s cubic-bezier(0.16,1,0.3,1), visibility 0s;
        }
        .js-mega {
          opacity: 0; visibility: hidden; pointer-events: none;
          transform: translateX(-50%) translateY(8px) scale(0.97); transform-origin: top center;
          transition: opacity 0.32s ease-out, transform 0.32s cubic-bezier(0.16,1,0.3,1), visibility 0.32s;
        }
        .js-mega[data-open="true"] {
          opacity: 1; visibility: visible; pointer-events: auto;
          transform: translateX(-50%) translateY(0) scale(1);
          transition: opacity 0.38s ease-out, transform 0.38s cubic-bezier(0.16,1,0.3,1), visibility 0s;
        }
        .nav-chevron { transition: transform 0.32s cubic-bezier(0.16,1,0.3,1); }
        .nav-chevron[data-open="true"] { transform: rotate(180deg); }

        .dd-link:hover .dd-dot   { opacity:1; transform:scale(1); }
        .dd-link:hover .dd-arrow { opacity:1; transform:translateX(0); }
        .mega-link:hover .mega-dot   { opacity:1; transform:scale(1); }
        .mega-link:hover .mega-arrow { opacity:1; transform:translateX(0); }

        /* Panels */
        .panel-overlay { opacity:0; visibility:hidden; transition:opacity 0.28s, visibility 0.28s; }
        .panel-overlay.open { opacity:1; visibility:visible; }
        .side-panel { transform:translateX(100%); transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        .side-panel.open { transform:translateX(0); }
        .mob-panel { transform:translateX(100%); transition:transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .mob-panel.open  { transform:translateX(0); }

        /* Accordion */
        .mob-acc { max-height:0; overflow:hidden; transition:max-height 0.4s ease; }
        .mob-acc.open { max-height:3000px; }

        /* Service row hover */
        .svc-row-arrow { opacity:0; transition:opacity 0.2s ease; }
        .svc-row:hover .svc-row-arrow { opacity:1; }
        .svc-row:hover .svc-row-label { color:#86C232; }
        .svc-row-label { transition:color 0.2s ease; }

        /* Demo card hover overlay */
        .demo-overlay { opacity:0; transition:opacity 0.2s ease; }
        .demo-card:hover .demo-overlay { opacity:1; }
      `}</style>

      {/* ══ NAVBAR WRAPPER ══ */}
      <div
        className={[
          "fixed z-[1000] flex justify-center pointer-events-none",
          "top-8 left-3 right-3 md:top-8 md:left-6 md:right-6 lg:top-8 lg:left-10 lg:right-10",
          "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          hidden ? "navbar-hidden" : "",
        ].join(" ")}
      >
        <div
          className={[
            "relative pointer-events-auto w-full flex items-center justify-between",
            "rounded-2xl px-2.5 py-2 gap-1.5 md:px-4 md:py-2.5 md:gap-4",
            "border transition-[background,box-shadow,border-color] duration-300",
            scrolled
              ? "bg-[#1a1e21]/85 border-[#474B4F] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              : "bg-[#1a1e21]/60 border-[#474B4F]/50",
          ].join(" ")}
          style={{
            fontFamily: "'Manrope', sans-serif",
            backdropFilter: "blur(100px) saturate(250%)",
            WebkitBackdropFilter: "blur(100px) saturate(250%)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0 group overflow-hidden">
            <img
              src="/img/logo.png" alt="Wexoraa"
              className="h-5 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <span className="text-[1.05rem] sm:text-[1.28rem] font-bold text-white" style={{ letterSpacing: "-0.03em" }}>
              Wex<span className="text-[#86C232]">oraa</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center list-none m-0 p-0 gap-px">
              {NAV_ITEMS.map((item) => {
                const hasDD      = !!(item.children && !item.mega);
                const isMega     = !!item.mega;
                const hasAny     = hasDD || isMega;
                const isServices = item.label === "Services";
                const isOpen     = activeMenu === item.label;
                return (
                  <li
                    key={item.label}
                    className={`relative ${isMega ? "static" : ""}`}
                    onMouseEnter={() => hasAny && openMenu(item.label)}
                    onMouseLeave={() => hasAny && scheduleClose()}
                  >
                    {hasAny ? (
                      <button className={["flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold bg-transparent border-none cursor-pointer rounded-full transition-colors duration-200 whitespace-nowrap", isOpen ? "text-[#86C232] bg-[#86C232]/[0.08]" : "text-white/85 hover:text-[#86C232] hover:bg-[#86C232]/[0.08]"].join(" ")}>
                        {item.label}
                        <ChevronDown size={13} className="nav-chevron opacity-60" data-open={isOpen ? "true" : "false"} />
                      </button>
                    ) : (
                      <Link href={item.href} className="flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold text-white/85 rounded-full hover:text-[#86C232] hover:bg-[#86C232]/[0.08] transition-colors duration-200 whitespace-nowrap">
                        {item.label}
                      </Link>
                    )}

                    {hasDD && !isServices && (
                      <div className="js-dropdown absolute top-full left-0 min-w-[240px] z-[200] pt-2" data-open={isOpen ? "true" : "false"} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                        <div className="bg-[#222629] border border-[#474B4F] rounded-[16px] p-2 shadow-[0_24px_64px_rgba(0,0,0,0.65)]" style={{ backdropFilter: "blur(30px)" }}>
                          {item.children!.map((child, idx) => (
                            <div key={child.label}>
                              {/* ADDED onClick={() => setActiveMenu(null)} */}
                              <Link href={child.href} onClick={() => setActiveMenu(null)} className="dd-link flex items-center justify-between px-3.5 py-3 rounded-[12px] text-[0.875rem] font-bold text-[#6B6E70] hover:text-[#86C232] hover:bg-[#86C232]/[0.05] transition-colors duration-200 whitespace-nowrap group">
                                <span className="flex items-center gap-2.5">
                                  <span className="dd-dot w-1.5 h-1.5 rounded-full bg-[#86C232] opacity-0 flex-shrink-0 scale-50 transition-[opacity,transform] duration-200" />
                                  {child.label}
                                  {child.badge && <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded text-[#222629] uppercase tracking-wide" style={{ background: child.badge.color }}>{child.badge.text}</span>}
                                </span>
                                <span className="dd-arrow flex items-center justify-center w-[22px] h-[22px] rounded-full text-[#86C232] opacity-0 -translate-x-1.5 transition-[opacity,transform] duration-200 bg-[#86C232]/[0.12]">
                                  <ArrowRight size={11} strokeWidth={2.5} />
                                </span>
                              </Link>
                              {idx < item.children!.length - 1 && <div className="h-px bg-[#474B4F]/60 mx-3" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {hasDD && isServices && (
                      <div className="js-dropdown absolute top-full left-0 w-[480px] z-[200] pt-2" data-open={isOpen ? "true" : "false"} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                        <div className="bg-[#222629] border border-[#474B4F] rounded-[20px] p-3 shadow-[0_24px_64px_rgba(0,0,0,0.65)]" style={{ backdropFilter: "blur(30px)" }}>
                          <div className="grid grid-cols-2 gap-1">
                            {item.children!.map((child) => {
                              const Icon = child.icon;
                              return (
                                /* ADDED onClick={() => setActiveMenu(null)} */
                                <Link key={child.label} href={child.href} onClick={() => setActiveMenu(null)} className="dd-link flex items-start gap-3 px-3.5 py-3.5 rounded-[14px] hover:bg-[#86C232]/[0.07] transition-colors duration-200 group">
                                  <span className="flex-shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center bg-[#474B4F]/30 border border-[#474B4F]/60 text-[#86C232] group-hover:bg-[#86C232]/15 group-hover:border-[#86C232]/30 transition-all duration-200">
                                    {Icon && <Icon size={16} strokeWidth={1.8} />}
                                  </span>
                                  <span className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-[0.8rem] font-bold text-white group-hover:text-[#86C232] transition-colors duration-200 leading-tight">{child.label}</span>
                                    {child.desc && <span className="text-[0.72rem] font-medium leading-snug" style={{ color: "rgba(107,110,112,0.9)" }}>{child.desc}</span>}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 pt-2.5 border-t border-[#474B4F]/60 px-2 flex items-center justify-between">
                            <span className="text-[0.78rem] font-semibold text-[#6B6E70]">Explore all services</span>
                            {/* ADDED onClick={() => setActiveMenu(null)} */}
                            <Link href="/services" onClick={() => setActiveMenu(null)} className="flex items-center gap-1.5 text-[0.78rem] font-bold text-[#86C232] hover:underline">View all <ArrowRight size={12} strokeWidth={2.5} /></Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {isMega && (
                      <div className="js-mega absolute top-full left-1/2 w-[1050px] max-w-[calc(100vw-4rem)] z-[200] pt-2" data-open={isOpen ? "true" : "false"} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                        <div className="bg-[#222629] border border-[#474B4F] rounded-[24px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)] grid grid-cols-[1fr_1fr_1fr_280px] gap-8" style={{ backdropFilter: "blur(100px)" }}>
                          {MEGA_COLS.map((col) => (
                            <div key={col.title}>
                              <div className="text-[1.0rem] font-extrabold text-white mb-5 pb-3 border-b border-[#474B4F]">{col.title}</div>
                              <div className="flex flex-col gap-0.5">
                                {col.links.map((lnk) => (
                                  /* ADDED onClick={() => setActiveMenu(null)} */
                                  <Link key={lnk.label} href={lnk.href} onClick={() => setActiveMenu(null)} className="mega-link flex items-center justify-between text-[0.875rem] font-semibold text-[#6B6E70] px-3 py-[9px] rounded-xl hover:text-[#86C232] hover:bg-[#86C232]/[0.06] transition-colors duration-200 gap-1.5">
                                    <span className="flex items-center gap-2">
                                      <span className="mega-dot w-1.5 h-1.5 rounded-full bg-[#86C232] opacity-0 flex-shrink-0 scale-50 transition-[opacity,transform] duration-200" />
                                      {lnk.label}
                                      {lnk.badge && <span className="ml-1 text-[9px] font-extrabold px-1.5 py-0.5 rounded text-[#222629] uppercase" style={{ background: lnk.badge.color }}>{lnk.badge.text}</span>}
                                    </span>
                                    <span className="mega-arrow text-[#86C232] opacity-0 -translate-x-1 transition-[opacity,transform] duration-200 flex-shrink-0"><ArrowRight size={12} strokeWidth={2.5} /></span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="rounded-[20px] p-6 flex flex-col relative overflow-hidden bg-[#111316] border border-[#474B4F] shadow-xl">
                            <div className="relative z-10">
                              <h3 className="text-4xl font-extrabold text-white leading-[1.1] mb-2">Modern</h3>
                              <p className="text-[0.9rem] mb-6 text-[#e2e2e2] font-semibold tracking-wide">Home Makeover</p>
                              <a href="tel:+8321890640" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[0.85rem] font-bold border-2 rounded-full transition-all hover:bg-[#86C232] hover:text-[#111316] border-[#86C232] text-[#86C232]">
                                <Phone size={14} strokeWidth={2.5} /> +8 (321) 890-640
                              </a>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full border-[6px] border-[#86C232] overflow-hidden bg-[#222629]">
                              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="Professional" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[100px] opacity-25 bg-[#86C232] pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
            <Link href="/contact" className="tp inline-flex items-center bg-[#86C232] text-[#222629] rounded-full flex-shrink-0 transition-transform duration-200 hover:-translate-y-px py-[3px] pr-[3px] pl-3 md:py-1.5 md:pr-1.5 md:pl-5">
              <span className="tp-lbl relative block overflow-hidden text-xs md:text-[0.88rem] font-bold mr-3 md:mr-3.5 whitespace-nowrap" data-text="Let's Talk">
                <span className="tp-lbl-inner">Let&apos;s Talk</span>
              </span>
              <span className="flex items-center justify-center w-[26px] h-[26px] md:w-8 md:h-8 rounded-full bg-[#222629] text-[#86C232] flex-shrink-0">
                <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-[400ms] ease-[cubic-bezier(0.65,0,0.35,1)] -rotate-45 [.tp:hover_&]:rotate-0" />
              </span>
            </Link>
            <button className="hidden lg:flex w-11 h-11 items-center justify-center text-[#6B6E70] hover:text-[#86C232] transition-colors" onClick={() => setSidePanelOpen(true)}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            <button className="flex lg:hidden w-[34px] h-[34px] sm:w-11 sm:h-11 items-center justify-center text-[#6B6E70] hover:text-[#86C232] transition-colors" onClick={() => setMobileOpen(true)}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ══ SIDEBAR ══ */}
      <div className={`panel-overlay fixed inset-0 z-[1100] bg-black/60 backdrop-blur-sm ${sidePanelOpen ? "open" : ""}`} onClick={() => setSidePanelOpen(false)} />
      <aside
        className={["side-panel fixed top-0 right-0 h-[100dvh] w-full max-w-[400px] z-[1101] flex flex-col p-8 sm:p-10 overflow-y-auto bg-[#222629] border-l border-[#474B4F]", sidePanelOpen ? "open" : ""].join(" ")}
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <button onClick={() => setSidePanelOpen(false)} className="absolute top-7 right-7 w-10 h-10 rounded-xl flex items-center justify-center text-[#6B6E70] border border-[#474B4F] hover:bg-[#86C232] hover:border-[#86C232] hover:text-[#222629] transition-all">
          <X size={18} />
        </button>
        <div className="flex items-center gap-3 mt-2 mb-5">
          <span className="text-xl font-bold text-white" style={{ letterSpacing: "-0.03em" }}>Wex<span className="text-[#86C232]">oraa</span></span>
        </div>
        <p className="text-sm leading-relaxed mb-9 text-[#6B6E70]">Developing personalized customer journeys to increase satisfaction &amp; loyalty of our expanding audience.</p>
        <div className="mb-9">
          <h4 className="text-xs font-bold text-white mb-5 uppercase tracking-widest">Contact Info</h4>
          <div className="flex flex-col gap-6">
            {[
              { label: "Phone",    value: "+1 (009) 544-7818" },
              { label: "Email",    value: "info@wexoraa.com" },
              { label: "Location", value: "993 Renner Burg, West Rond, MT 94251-030" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <p className="text-xs text-[#6B6E70]">{label}</p>
                <p className="text-base text-white break-words leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-6">
          <h4 className="text-sm font-bold text-white mb-4">Follow Us</h4>
          <div className="flex gap-3 flex-wrap">
            {SocialIcons.map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#474B4F] text-white hover:bg-[#86C232] hover:text-[#222629] transition-all"><Icon /></a>
            ))}
          </div>
        </div>
      </aside>

      {/* ══ MOBILE MENU ══ */}
      <div className={`panel-overlay fixed inset-0 z-[1100] bg-black/70 backdrop-blur-sm lg:hidden ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />

      <nav
        className={["mob-panel fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[380px] z-[1101] flex flex-col lg:hidden bg-[#222629]", mobileOpen ? "open" : ""].join(" ")}
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <img
              src="/img/logo.png" alt="Wexoraa"
              className="h-7 w-auto object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <span className="text-[1.22rem] font-bold text-white" style={{ letterSpacing: "-0.03em" }}>
              Wex<span className="text-[#86C232]">oraa</span>
            </span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white transition-colors" aria-label="Close">
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 overscroll-contain">

          <MobileAccordion label="Home" isOpen={openAccordion === "Home"} onToggle={() => setOpenAccordion(openAccordion === "Home" ? null : "Home")}>
            <div className="flex flex-col gap-4 px-5 pb-6">
              {HOME_DEMOS.map((demo) => (
                <Link
                  key={demo.label} href={demo.href}
                  className="demo-card relative rounded-[16px] overflow-hidden block bg-[#1a1d20]"
                  style={{ aspectRatio: "16/9" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <img src={demo.img} alt={demo.label} className="w-full h-full object-cover opacity-75" />
                  <div className="demo-overlay absolute inset-0 flex items-center justify-center bg-black/35">
                    <span className="flex items-center gap-2 bg-[#86C232] text-[#222629] font-bold text-[0.82rem] px-4 py-2 rounded-full">
                      View Demo <ArrowRight size={13} strokeWidth={2.5} className="-rotate-45" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/75 to-transparent">
                    <span className="text-white font-bold text-[0.88rem]">{demo.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </MobileAccordion>

          <MobileAccordion label="Pages" isOpen={openAccordion === "Pages"} onToggle={() => setOpenAccordion(openAccordion === "Pages" ? null : "Pages")}>
            <div className="pb-4">
              {MEGA_COLS.map((col) => (
                <div key={col.title} className="px-6 pt-5 pb-1">
                  <p className="text-[1.0rem] font-bold text-white mb-1">{col.title}</p>
                  <div className="w-7 h-[3px] bg-[#86C232] rounded-full mb-3" />
                  {col.links.map((lnk, idx) => (
                    <div key={lnk.label}>
                      <Link
                        href={lnk.href}
                        className="flex items-center gap-2 py-[10px] text-[0.9rem] font-medium text-white/75 hover:text-[#86C232] transition-colors duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {lnk.label}
                        {lnk.badge && (
                          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ background: lnk.badge.color, color: lnk.badge.color === "#86C232" ? "#222629" : "#fff" }}>
                            {lnk.badge.text}
                          </span>
                        )}
                      </Link>
                      {idx < col.links.length - 1 && <div className="h-px bg-[#474B4F]/40" />}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </MobileAccordion>

          <MobileAccordion label="Services" isOpen={openAccordion === "Services"} onToggle={() => setOpenAccordion(openAccordion === "Services" ? null : "Services")}>
            <div className="pb-2">
              {NAV_ITEMS.find(i => i.label === "Services")!.children!.map((svc, idx, arr) => {
                const Icon = svc.icon;
                return (
                  <div key={svc.label}>
                    <Link
                      href={svc.href}
                      className="svc-row flex items-center gap-4 px-6 py-4 hover:bg-[#86C232]/[0.05] transition-colors duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="flex-shrink-0 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#86C232]/20 text-[#86C232]">
                        {Icon && <Icon size={22} strokeWidth={1.7} />}
                      </span>
                      <span className="svc-row-label flex-1 text-[0.98rem] font-semibold text-white leading-snug">
                        {svc.label}
                      </span>
                      <span className="svc-row-arrow flex-shrink-0 text-[#86C232]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </span>
                    </Link>
                    {idx < arr.length - 1 && <div className="h-px bg-[#474B4F]/40 mx-6" />}
                  </div>
                );
              })}
            </div>
          </MobileAccordion>

          <MobileAccordion label="Portfolio" isOpen={openAccordion === "Portfolio"} onToggle={() => setOpenAccordion(openAccordion === "Portfolio" ? null : "Portfolio")}>
            <div className="px-6 pb-4">
              {NAV_ITEMS.find(i => i.label === "Portfolio")!.children!.map((child, idx, arr) => (
                <div key={child.label}>
                  <Link href={child.href} className="block py-[10px] text-[0.9rem] font-medium text-white/75 hover:text-[#86C232] transition-colors duration-200" onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                  {idx < arr.length - 1 && <div className="h-px bg-[#474B4F]/40" />}
                </div>
              ))}
            </div>
          </MobileAccordion>

          <MobileAccordion label="Blog" isOpen={openAccordion === "Blog"} onToggle={() => setOpenAccordion(openAccordion === "Blog" ? null : "Blog")}>
            <div className="px-6 pb-4">
              {NAV_ITEMS.find(i => i.label === "Blog")!.children!.map((child, idx, arr) => (
                <div key={child.label}>
                  <Link href={child.href} className="block py-[10px] text-[0.9rem] font-medium text-white/75 hover:text-[#86C232] transition-colors duration-200" onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                  {idx < arr.length - 1 && <div className="h-px bg-[#474B4F]/40" />}
                </div>
              ))}
            </div>
          </MobileAccordion>

          <div className="border-t border-[#474B4F]/50">
            <Link
              href="/contact"
              className="flex items-center justify-between w-full px-6 py-[18px] text-[1.08rem] font-bold text-white hover:text-[#86C232] transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="border-t border-[#474B4F]/50 px-6 pt-7 pb-6">
            <p className="text-[1.08rem] font-bold text-white mb-5">Contact Info</p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Phone",    value: "+1 (009) 544-7818" },
                { label: "Email",    value: "info@wexoraa.com" },
                { label: "Location", value: "993 Renner Burg, West Rond, MT 94251-030" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[0.72rem] text-[#6B6E70] uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-[0.93rem] text-white font-medium leading-snug">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-7">
              {SocialIcons.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#474B4F] text-white hover:bg-[#86C232] hover:text-[#222629] transition-all">
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