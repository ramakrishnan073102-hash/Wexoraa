"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  Phone,
  Plus,
  Minus
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   FAQ DATA
────────────────────────────────────────────────────────── */
const FAQS = [
  {
    id: 1,
    question: "What services does Wexoraa offer to clients?",
    answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
  {
    id: 2,
    question: "How do I get started with Corporate Business?",
    answer: "We begin with a comprehensive discovery phase to understand your unique business needs, followed by a strategic roadmap tailored to your corporate goals. Our experts will guide you every step of the way.",
  },
  {
    id: 3,
    question: "How do you ensure the success of a project?",
    answer: "We implement rigorous quality assurance protocols, maintain transparent communication, and leverage data-driven analytics to continuously optimize project performance and deliver exceptional results.",
  },
  {
    id: 4,
    question: "How long will it take to complete my project?",
    answer: "Project timelines vary depending on scope and complexity. During our initial consultation, we will provide a detailed timeline with key milestones to ensure expectations are aligned from day one.",
  },
  {
    id: 5,
    question: "Can I track the progress of my project?",
    answer: "Absolutely! We provide all our clients with access to a dedicated project management dashboard where you can monitor milestones, updates, and communications in real-time.",
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function FaqPage(): React.ReactElement {
  // First item open by default
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-32">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[15px][10px] flex items-center justify-center overflow-hidden shadow-sm">
          
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          {/* Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Faq
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10"
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors">
                <Home size={16} /> Home
              </Link>
              <ChevronRight size={16} className="text-white/40 mx-1" />
              <span className="text-white font-bold">Faq</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. MAIN CONTENT AREA
      ════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: TITLE & IMAGE CARD ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <h2 className="text-[2.5rem] lg:text-[3rem] font-extrabold text-[#222629] leading-[1.1] tracking-tight mb-10">
              Need Help? Start <br />
              Here...
            </h2>

            {/* Image Wrapper with Floating Card */}
            <div className="relative w-full max-w-[500px] mt-4 mb-8 sm:mb-12 lg:mb-0">
              {/* Main Image */}
              <div className="w-full h-[380px] sm:h-[450px] rounded-[24px] overflow-hidden shadow-lg bg-[#e8eceb]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=600&q=80" 
                  alt="Customer Support" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Green Contact Card (Bottom Right) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#86C232] rounded-[24px] p-6 sm:p-8 shadow-[0_20px_40px_rgba(134,194,50,0.3)] border-4 border-[#f8f9fa] flex flex-col gap-5 max-w-[260px] z-10">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  Get Started <br />
                  Free Call?
                </h3>
                
                <div className="w-12 h-12 rounded-full bg-[#222629] flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                
                <a href="tel:1-888-452-1505" className="text-white text-[1.15rem] font-bold hover:text-[#222629] transition-colors whitespace-nowrap">
                  1-888-452-1505
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: ACCORDION LIST ── */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-[16px] overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#86C232] shadow-[0_15px_30px_rgba(134,194,50,0.25)]" 
                      : "bg-white border border-[#474B4F]/10 shadow-sm hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none group"
                  >
                    {/* Question Title */}
                    <h4 
                      className={`text-lg sm:text-[1.15rem] font-extrabold pr-4 transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-[#222629] group-hover:text-[#86C232]"
                      }`}
                    >
                      {faq.question}
                    </h4>

                    {/* Toggle Icon */}
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen 
                          ? "border-2 border-white text-white" 
                          : "border-2 border-[#86C232] text-[#86C232]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={3} />
                      ) : (
                        <Plus size={16} strokeWidth={3} />
                      )}
                    </div>
                  </button>
                  
                  {/* Expandable Answer Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-white/95 text-[15px] font-medium leading-[1.8]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>

    </main>
  );
}