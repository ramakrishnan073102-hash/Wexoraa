"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, CheckCircle2, Phone, Plus, Minus, ArrowRight } from "lucide-react";


const SERVICES_MENU = [
  { name: "Web Development", active: true, href: "/web-development" },
  { name: "UI/UX Design", active: false, href: "/ui-ux-design" },
  { name: "Custom Software", active: false, href: "/custom-software" },
  { name: "Mobile Apps", active: false, href: "/mobile-apps" },
  { name: "Digital Marketing", active: false, href: "/digital-marketing" },
];

const CHECKLIST = [
  "Responsive & Mobile-First",
  "SEO Optimized Architecture",
  "High-Performance Speeds",
  "Secure & Scalable",
];

const NUMBERED_STEPS = [
  { id: "01", title: "Strategy & Planning", desc: "We map out the architecture and roadmap tailored to your goals." },
  { id: "02", title: "Design & Development", desc: "Building scalable, pixel-perfect web applications using modern stacks." },
  { id: "03", title: "Testing & Launch", desc: "Rigorous QA testing ensures a flawless launch and seamless UX." },
];

const FAQS = [
  { id: 1, question: "What technologies do you use?", answer: "We specialize in modern web stacks including React, Next.js, Node.js, and scalable cloud infrastructures." },
  { id: 2, question: "Will my website be mobile-friendly?", answer: "Absolutely. All our web solutions are designed with a mobile-first approach ensuring perfect responsiveness." },
  { id: 3, question: "Do you offer ongoing maintenance?", answer: "Yes, we provide continuous support, security updates, and performance monitoring post-launch." },
];

export default function WebDevServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-20">
      
      {/* 1. ORIGINAL HERO SECTION (RESTORED) */}
      <section className="w-full pt-6 px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] rounded-[15px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/photo-1552664730-d307ca884978.jpg')" }} />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Web Development
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 text-[14px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232]"><Home size={16} className="text-[#86C232]" /> Home</Link>
              <ChevronRight size={16} className="text-[#6B6E70]" />
              <Link href="/services" className="hover:text-[#86C232]">Services</Link>
              <ChevronRight size={16} className="text-[#6B6E70]" />
              <span className="text-white font-bold">Web Development</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL SERVICES MENU (NEW) */}
      <div className="max-w-[1300px] mx-auto px-6 mb-16">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4">
          {SERVICES_MENU.map((service, idx) => (
            <Link key={idx} href={service.href} className={`whitespace-nowrap px-8 py-3.5 rounded-full text-[15px] font-extrabold transition-all duration-300 shadow-sm border ${service.active ? "bg-[#86C232] text-white border-[#86C232]" : "bg-white text-[#222629] border-[#474B4F]/10 hover:border-[#86C232] hover:text-[#86C232]"}`}>
              {service.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 3. BENTO BOX OVERVIEW SECTION (NEW) */}
      <section className="max-w-[1300px] mx-auto px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Bento Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
            <div className="col-span-1 row-span-2 rounded-[24px] overflow-hidden shadow-sm">
              <img src="/assets/images/photo-1600880292203-757bb62b4baf.jpg" className="w-full h-full object-cover" alt="Team" />
            </div>
            <div className="col-span-1 row-span-1 rounded-[24px] overflow-hidden shadow-sm">
              <img src="/assets/images/photo-1573164713988-8665fc963095.jpg" className="w-full h-full object-cover" alt="Code" />
            </div>
            <div className="col-span-1 row-span-1 bg-[#86C232] rounded-[24px] flex flex-col justify-center p-8 text-white shadow-sm">
              <h3 className="text-4xl font-black mb-2">100%</h3>
              <p className="font-bold text-white/80 leading-tight">Scalable Architecture</p>
            </div>
          </div>

          {/* Right: Content & Checklist */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#222629] leading-tight mb-6">
              Building Scalable Digital Foundations.
            </h2>
            <p className="text-[#6B6E70] text-[16px] leading-[1.8] font-medium mb-10">
              By utilizing modern frameworks and clean architecture, we ensure your digital presence is fast, secure, and ready to scale with your users' demands. We don't just build websites; we engineer digital experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-[16px] shadow-sm border border-[#474B4F]/5">
                  <CheckCircle2 size={20} className="text-[#86C232] shrink-0" />
                  <span className="text-[#222629] font-bold text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROCESS STEPS (NEW) */}
      <section className="bg-white py-20 border-y border-[#474B4F]/5 mt-10">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#222629] mb-12 text-center">Our Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NUMBERED_STEPS.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-[24px] bg-[#f8f9fa] border border-[#474B4F]/5 hover:border-[#86C232]/30 hover:shadow-lg transition-all duration-300 group">
                <div className="text-[60px] font-black text-[#86C232]/20 leading-none mb-4 group-hover:text-[#86C232]/40 transition-colors">{step.id}</div>
                <h4 className="text-xl font-extrabold text-[#222629] mb-3">{step.title}</h4>
                <p className="text-[#6B6E70] font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM SPLIT: CTA CARD & FAQS (NEW) */}
      <section className="max-w-[1300px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Modern CTA Card */}
          <div className="lg:col-span-5 bg-[#222629] rounded-[32px] p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border-[2px] border-[#86C232] opacity-20" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white leading-tight mb-2">Ready to</h3>
              <h3 className="text-4xl font-black text-[#86C232] mb-8">Build?</h3>
              
              <p className="text-white/70 font-medium mb-10 text-[15px]">
                Let's discuss your project requirements and see how our tailored web solutions can drive your growth.
              </p>
              
              <a href="tel:+919360375338" className="inline-flex items-center justify-between w-full bg-[#86C232] text-[#222629] px-6 py-4 rounded-full font-black text-[16px] hover:bg-white transition-colors group">
                <span className="flex items-center gap-3"><Phone size={18} /> (+91) 9360375338</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: FAQs */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-black text-[#222629] mb-8">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq) => (
                <div key={faq.id} className={`rounded-[20px] overflow-hidden transition-all duration-300 ${openFaq === faq.id ? "bg-white shadow-lg border border-[#86C232]/30" : "bg-transparent border border-[#474B4F]/10 hover:border-[#86C232]/50"}`}>
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between p-6 text-left group">
                    <h4 className={`font-extrabold text-[16px] ${openFaq === faq.id ? "text-[#86C232]" : "text-[#222629]"}`}>{faq.question}</h4>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === faq.id ? "bg-[#86C232] text-white" : "bg-white text-[#6B6E70] border border-[#474B4F]/20 group-hover:bg-[#86C232]/10 group-hover:text-[#86C232] group-hover:border-transparent"}`}>
                      {openFaq === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="px-6 pb-6 text-[#6B6E70] font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}