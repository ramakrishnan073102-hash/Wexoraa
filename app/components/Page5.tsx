"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  ChevronLeft,
  Check,
  Phone,
  Plus,
  Minus,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const SIDEBAR_SERVICES = [
  { name: "Business Strategy",   href: "/page1" },
  { name: "Customer Experience", href: "/page2" },
  { name: "ESG Consulting",      href: "/page3" },
  { name: "Training Programs",   href: "/page4" },
  { name: "IT Support",          href: "/page5", active: true },
  { name: "Marketing Strategy",  href: "/page6" },
];

const CHECKLIST = [
  "24/7 System Monitoring",
  "Network Security & Firewalls",
  "Data Backup & Recovery",
  "Hardware Maintenance",
  "Cloud Infrastructure Support",
  "Remote Helpdesk Solutions",
  "Software Updates & Patching",
];

const NUMBERED_STEPS = [
  {
    id: "01.",
    title: "Proactive Maintenance",
    desc: "We identify and resolve potential IT issues before they can cause downtime, ensuring your operations run smoothly round-the-clock.",
  },
  {
    id: "02.",
    title: "Rapid Response Time",
    desc: "Our dedicated support team provides immediate assistance for critical technical glitches to minimize disruptions to your workflow.",
  },
  {
    id: "03.",
    title: "Scalable Infrastructure",
    desc: "We design and maintain adaptable IT architectures that grow seamlessly alongside your business expansion and evolving tech needs.",
  },
];

const FAQS = [
  {
    id: 1,
    question: "What specific IT support services do you offer?",
    answer:
      "We offer a comprehensive suite of IT services, including 24/7 helpdesk support, network management, cybersecurity auditing, cloud migration, hardware deployment, and automated data backup solutions.",
  },
  {
    id: 2,
    question: "Do you provide 24/7 network monitoring?",
    answer:
      "Yes, our systems run continuously to monitor your network health. This allows us to detect anomalies, prevent cyber threats, and address hardware failures instantly, regardless of the time of day.",
  },
  {
    id: 3,
    question: "How do you ensure data security and compliance?",
    answer:
      "We implement multi-layered security protocols including end-to-end encryption, strict firewall configurations, multi-factor authentication (MFA), and regular compliance audits to keep your sensitive data secure.",
  },
  {
    id: 4,
    question: "Can you help migrate our on-premise servers to the cloud?",
    answer:
      "Absolutely. We specialize in seamless cloud migrations utilizing platforms like AWS, Microsoft Azure, and Google Cloud, ensuring zero data loss and minimal operational downtime during the transition.",
  },
  {
    id: 5,
    question: "What is your typical response time for critical IT issues?",
    answer:
      "For critical, business-halting emergencies, our SLA guarantees a response time of under 15 minutes. For standard requests, we typically respond and begin troubleshooting within one hour.",
  },
  {
    id: 6,
    question: "Do you support remote and hybrid work setups?",
    answer:
      "Yes! We set up secure Virtual Private Networks (VPNs), remote desktop protocols, and secure cloud storage to ensure your remote workforce has safe, fast, and reliable access to company resources.",
  },
];

/* ──────────────────────────────────────────────────────────
   SCROLL PROGRESS RING
────────────────────────────────────────────────────────── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 20;
  const circ = 2 * Math.PI * radius;
  const dashOffset = circ - (progress / 100) * circ;

  return (
    <div className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg">
      <svg width="56" height="56" className="absolute top-0 left-0 -rotate-90">
        <circle cx="28" cy="28" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="3" />
        <circle
          cx="28" cy="28" r={radius}
          fill="none" stroke="#86C232" strokeWidth="3"
          strokeDasharray={circ}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>
      <span className="text-[11px] font-black text-[#222629] relative z-10">
        {progress}%
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — PAGE 5: IT SUPPORT & MAINTENANCE
────────────────────────────────────────────────────────── */
export default function Page5(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <main className="w-full bg-[#eef0ee] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      <ScrollProgress />

      {/* ════════════════════════════════════════
         1. HERO
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[10px] md:rounded-[15px][10px] flex items-center justify-center overflow-hidden shadow-sm">
          
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Digital Marketing
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors">
                <Home size={16} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={16} className="text-[#6B6E70]" />
              <Link href="/services" className="hover:text-[#86C232] transition-colors">
                Services
              </Link>
              <ChevronRight size={16} className="text-[#6B6E70]" />
              <span className="text-white font-bold truncate max-w-[160px] sm:max-w-[240px]">
               Digital Marketing...
              </span>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
         2. TWO-COLUMN LAYOUT
      ════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── LEFT: MAIN CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8 flex flex-col gap-10"
          >
            {/* Hero image - Tech Support Professional */}
            <div className="w-full h-[320px] md:h-[440px] rounded-[10px] overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="IT Support Team"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Main heading + body */}
            <div>
              <h2 className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#1a1d1f] leading-[1.12] tracking-tight mb-5">
                Ensuring Business Continuity: Reliable IT Support Solutions.
              </h2>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium mb-5">
                In today's fast-paced digital landscape, a stable and secure IT infrastructure is the backbone of your business operations. Our IT Support & Maintenance services are designed to minimize downtime, protect your critical data, and ensure your technological ecosystem operates at peak efficiency. We offer a proactive approach, identifying vulnerabilities and system bottlenecks before they evolve into costly disruptions.
              </p>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium">
                Whether you need on-demand helpdesk assistance, comprehensive server management, or strategic IT consulting, our expert technicians serve as an extension of your team. By optimizing your digital platforms and maintaining rigorous security protocols, we empower your business to focus on growth rather than troubleshooting tech issues.
              </p>
            </div>

            {/* Checklist — 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#86C232] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-[#1a1d1f] text-[15px] font-bold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* 2-image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="h-[280px] rounded-[16px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80"
                  alt="Server Room Networking"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="h-[280px] rounded-[16px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3cb37bac?auto=format&fit=crop&w=700&q=80"
                  alt="IT Helpdesk Engineer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Secondary section */}
            <div>
              <h3 className="text-[1.7rem] md:text-[2rem] font-extrabold text-[#1a1d1f] leading-tight mb-4">
                Our Range of IT Services
              </h3>
              <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium mb-10">
                We provide end-to-end technical support designed to fortify your operations and scale alongside your business. From resolving everyday user issues to managing complex cloud environments and mitigating security risks, our structured IT services ensure your company remains agile, secure, and technologically advanced.
              </p>

              {/* Numbered step cards — filled teal circle badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {NUMBERED_STEPS.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-7 rounded-[18px] border border-[#e0e3e0] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#86C232] flex items-center justify-center text-white font-black text-[16px] mb-5 shadow-sm">
                      {step.id}
                    </div>
                    <h4 className="text-[16px] font-extrabold text-[#1a1d1f] mb-3 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[#6B6E70] text-[13px] leading-[1.75] font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FAQ ACCORDION ── */}
            <div className="mt-2">
              <h3 className="text-[1.7rem] md:text-[2rem] font-extrabold text-[#1a1d1f] leading-tight mb-7">
                Frequently asked questions
              </h3>

              <div className="flex flex-col gap-3">
                {FAQS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-[14px] overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "bg-[#86C232] shadow-lg"
                          : "bg-white border border-[#e0e3e0] shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="w-full flex items-center justify-between px-7 py-5 text-left outline-none group"
                      >
                        <h4
                          className={`text-[15px] sm:text-[16px] font-extrabold pr-4 transition-colors duration-300 ${
                            isOpen
                              ? "text-white"
                              : "text-[#1a1d1f] group-hover:text-[#86C232]"
                          }`}
                        >
                          {faq.question}
                        </h4>
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 border ${
                            isOpen
                              ? "border-white text-white"
                              : "border-[#86C232] text-[#86C232] group-hover:bg-[#86C232] group-hover:text-white"
                          }`}
                        >
                          {isOpen
                            ? <Minus size={17} strokeWidth={2.5} />
                            : <Plus size={17} strokeWidth={2.5} />
                          }
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-7 pb-6 border-t border-white/25 pt-4 text-[14px] font-medium leading-[1.85] text-white">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* ── BOTTOM NAV: Previous | Grid | Next ── */}
              <div className="w-full bg-white rounded-[16px] mt-10 shadow-sm border border-[#e0e3e0]">
                <div className="flex items-center px-6 py-5 relative">

                  {/* Previous - Links to Page 4 */}
                  <Link
                    href="/page4"
                    className="flex items-center gap-3 text-[#1a1d1f] font-extrabold text-[15px] transition-colors hover:text-[#86C232] group outline-none"
                  >
                    <div className="w-11 h-11 rounded-full border border-[#d1d5db] flex items-center justify-center text-[#1a1d1f] transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                      <ChevronLeft size={19} strokeWidth={2.5} />
                    </div>
                    Previous
                  </Link>

                  {/* Center: 4-square grid icon */}
                  <Link
                    href="/navservices"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1a1d1f] hover:text-[#86C232] transition-colors duration-300 outline-none"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3"    y="3"    width="7.5" height="7.5" rx="1.5" />
                      <rect x="13.5" y="3"    width="7.5" height="7.5" rx="1.5" />
                      <rect x="3"    y="13.5" width="7.5" height="7.5" rx="1.5" />
                      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
                    </svg>
                  </Link>

                  {/* Next - Links to Page 6 */}
                  <Link
                    href="/page6"
                    className="flex items-center gap-3 text-[#1a1d1f] font-extrabold text-[15px] transition-colors hover:text-[#86C232] group outline-none ml-auto"
                  >
                    Next
                    <div className="w-11 h-11 rounded-full border border-[#d1d5db] flex items-center justify-center text-[#1a1d1f] transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                      <ChevronRight size={19} strokeWidth={2.5} />
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: STICKY SIDEBAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-8"
          >
            {/* More Services */}
            <div className="bg-[#e4e8e4] rounded-[20px] p-6 md:p-7">
              <h3 className="text-[1.35rem] font-extrabold text-[#1a1d1f] mb-5">
                More Services
              </h3>
              <div className="flex flex-col gap-2">
                {SIDEBAR_SERVICES.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className={`flex items-center justify-between px-5 py-4 rounded-[10px] text-[14px] font-extrabold transition-all duration-200 ${
                      service.active
                        ? "bg-[#86C232] text-white"
                        : "bg-white text-[#1a1d1f] border border-[#dde0dd] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
                    }`}
                  >
                    <span>{service.name}</span>
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact CTA card */}
            <div className="bg-[#1a2826] rounded-[20px] overflow-hidden shadow-xl relative min-h-[270px] flex flex-col justify-end p-8">
              {/* Decorative ring */}
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full border-[40px] border-[#86C232]/15 translate-x-12 -translate-y-12 z-0" />

              {/* Circular portrait — bottom-right, partially cropped */}
              <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full overflow-hidden border-4 border-[#1a2826] z-10 translate-x-6 translate-y-6 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Consultant"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text */}
              <div className="relative z-20 w-[62%]">
                <h3 className="text-[2.8rem] font-extrabold text-white leading-[1] tracking-tight mb-1">
                  Modern
                </h3>
                <p className="text-white/70 text-[14px] font-semibold mb-7">
                  Home Makeover
                </p>
                <a
                  href="tel:+83218906"
                  className="inline-flex items-center gap-2 bg-[#86C232] text-white px-4 py-2.5 rounded-full font-bold text-[13px] transition-colors duration-300 hover:bg-[#61892F]"
                >
                  <Phone size={13} fill="currentColor" />
                  +8 (321) 890-640
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}