"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  Check,
  Phone,
  Plus,
  Minus,
  LayoutGrid
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   MOCK DATA (Updated with individual unique routing paths)
────────────────────────────────────────────────────────── */
const SIDEBAR_SERVICES = [
  { name: "Business Strategy", active: true, href: "/page1" },
  { name: "Customer Experience", active: false, href: "/page2" },
  { name: "ESG Consulting", active: false, href: "/page3" },
  { name: "Training Programs", active: false, href: "/page4" },
  { name: "IT Support", active: false, href: "/services/it-support" },
  { name: "Marketing Strategy", active: false, href: "/services/marketing-strategy" },
];

const CHECKLIST = [
  "Innovation at Scale",
  "Customer Retention",
  "Actionable Insights",
  "Support Optimization",
  "Omnichannel Integration",
  "Proactive Engagement",
];

const NUMBERED_STEPS = [
  {
    id: "01.",
    title: "Enhanced Customer Satisfaction",
    desc: "By focusing on personalized, seamless experiences, we ensure your customers feel valued and understood, making them more likely to return.",
  },
  {
    id: "02.",
    title: "Improved Operational Efficiency",
    desc: "With our tools and strategies, your customer support teams can handle inquiries faster, while automated systems streamline operations.",
  },
  {
    id: "03.",
    title: "Insights for Continuous Improvement",
    desc: "Our data-driven approach provides team with valuable insights into customer behavior, enabling to continual.",
  },
];

const FAQS = [
  {
    id: 1,
    question: "What is Customer Experience (CX) and why is it important?",
    answer: "Customer experience (CX) refers to the overall impression a customer has of a business based on their interactions across various touchpoints—whether it's a website visit, a support call, or an in-store purchase. It encompasses everything from ease of service quality to emotional connection and brand perception.",
  },
  {
    id: 2,
    question: "How can your Customer Experience Solutions benefit?",
    answer: "Our solutions optimize every touchpoint of the customer journey, ensuring seamless and meaningful interactions. The benefits include improved customer retention rates, stronger brand loyalty, and actionable insights to improve your customer engagement strategies.",
  },
  {
    id: 3,
    question: "How do you personalize the customer experience?",
    answer: "We utilize data analytics and customer segmentation to deliver tailored content, product recommendations, and support interactions that resonate with individual user preferences.",
  },
  {
    id: 4,
    question: "What kind of tools do you use to improve customer experience?",
    answer: "We integrate modern CRM platforms, AI-driven chatbots, feedback survey tools, and comprehensive analytics dashboards to streamline and enhance every touchpoint.",
  },
  {
    id: 5,
    question: "How do you collect customer feedback?",
    answer: "We use a combination of automated post-interaction surveys, Net Promoter Score (NPS) tracking, in-app feedback widgets, and social listening tools to gather comprehensive and actionable customer insights.",
  },
  {
    id: 6,
    question: "How do you help improve our customer support system?",
    answer: "We assess your current support workflows and implement omnichannel support platforms, self-service knowledge bases, and advanced ticketing systems to reduce response times and increase first-contact resolution.",
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function ServiceDetailsPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[32px] md:rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm">
          
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
              Business Strategy Development
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
                Business Strategy Develop...
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. MAIN CONTENT AREA (TWO COLUMNS)
      ════════════════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── LEFT COLUMN: DETAILS CONTENT ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col gap-10"
          >
            {/* Top Image */}
            <div className="w-full h-[350px] md:h-[480px] rounded-[10px] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
                alt="Business Discussion" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Main Header & Paragraphs */}
            <div>
              <h2 className="text-[2.2rem] md:text-[2.8rem] font-extrabold text-[#222629] leading-[1.1] tracking-tight mb-6">
                Transforming Customer: Tailored Solutions for Experiences.
              </h2>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-5">
                Exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand into a meaningful and positive experience. We believe that consistent, high-quality experiences build customer loyalty, satisfaction, and lifetime value. Our approach to customer experience is comprehensive and data-driven.
              </p>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium">
                Customer experience is comprehensive and data-driven. We begin by assessing your current customer touchpoints, identifying areas for improvement, and using insights to design journeys that meet your customers' evolving needs. From optimizing digital platforms.
              </p>
            </div>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#86C232] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-[#222629] text-[16px] font-bold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Three Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="h-[240px] rounded-[24px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="Consulting 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="h-[240px] rounded-[24px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="Consulting 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="h-[240px] rounded-[24px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" alt="Consulting 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            {/* Secondary Section */}
            <div className="mt-2">
              <h3 className="text-[1.8rem] md:text-[2.2rem] font-extrabold text-[#222629] leading-tight mb-5">
                The Advantage of Customer Services
              </h3>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-10">
                We don't just focus on solving customer problems—we focus on creating experiences that build long-lasting relationships. Whether it's through improving customer service operations, upgrading technology, or designing more engaging digital experiences, our team is here to help you exceed customers' expectations every time. We help you understand your customers deeply, experience.
              </p>
              
              {/* Numbered Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {NUMBERED_STEPS.map((step, idx) => (
                  <div key={idx} className="bg-[#f8f9fa] p-8 rounded-[24px] border border-[#474B4F]/5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] font-black text-lg mb-6">
                      {step.id}
                    </div>
                    <h4 className="text-[17px] font-extrabold text-[#222629] mb-4 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[#6B6E70] text-[14px] leading-[1.7] font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <h3 className="text-[1.8rem] md:text-[2.2rem] font-extrabold text-[#222629] leading-tight mb-8">
                Frequently asked questions
              </h3>
              <div className="flex flex-col gap-4">
                {FAQS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <motion.div
                      key={faq.id}
                      initial={false}
                      className={`rounded-[16px] transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? "bg-[#86C232] shadow-lg border-none" 
                          : "bg-white border border-[#474B4F]/10 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none group"
                      >
                        <h4 className={`text-[15px] sm:text-[1.1rem] font-extrabold pr-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-[#222629] group-hover:text-[#86C232]"}`}>
                          {faq.question}
                        </h4>
                        
                        <div 
                          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isOpen 
                              ? "border-[1.5px] border-white text-white" 
                              : "border-[1.5px] border-[#86C232] text-[#86C232] group-hover:bg-[#86C232] group-hover:text-white"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={18} strokeWidth={2.5} />
                          ) : (
                            <Plus size={18} strokeWidth={2.5} />
                          )}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-[15px] font-medium leading-[1.8] text-white border-t border-white/20 mt-2 pt-6">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM NAVIGATION BLOCK */}
              <div className="w-full bg-white rounded-[20px] p-5 sm:p-6 mt-12 shadow-[0_5px_20px_rgba(34,38,41,0.03)] border border-[#474B4F]/5 flex items-center relative">
                
                {/* Centered Grid Icon SVG (Solid 4 Squares) */}
                <Link 
                  href="/services" 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#222629] hover:text-[#86C232] transition-colors duration-300 outline-none"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
                    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
                    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
                    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
                  </svg>
                </Link>

                {/* Left empty space filler */}
                <div className="flex-1"></div>

                {/* Right Side Next Button */}
                <Link 
                  href="/page2" 
                  className="flex items-center gap-4 text-[#222629] font-extrabold text-[16px] transition-colors hover:text-[#86C232] group outline-none"
                >
                  Next
                  <div className="w-12 h-12 rounded-full border border-[#474B4F]/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#86C232] group-hover:bg-[#86C232] group-hover:text-white">
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </div>
                </Link>

              </div>

            </div>

          </motion.div>

          {/* ── RIGHT COLUMN: SIDEBAR ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-8"
          >
            
            {/* More Services Menu */}
            <div className="bg-[#f8f9fa] rounded-[24px] p-6 md:p-8 border border-[#474B4F]/5">
              <h3 className="text-2xl font-extrabold text-[#222629] mb-6">
                More Services
              </h3>
              <div className="flex flex-col gap-2">
                {SIDEBAR_SERVICES.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className={`px-6 py-4 rounded-[12px] text-[15px] font-extrabold transition-all duration-300 ${
                      service.active
                        ? "bg-[#86C232] text-white shadow-md"
                        : "bg-white text-[#222629] hover:bg-[#86C232] hover:text-white border border-[#474B4F]/10"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Custom Contact Card ("Modern Home Makeover") */}
            <div className="bg-[#222629] rounded-[24px] overflow-hidden shadow-xl relative flex flex-col justify-center min-h-[260px] p-8">
              
              {/* Thin green background circle */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[-20%] w-[240px] h-[240px] rounded-full border-[2px] border-[#86C232] opacity-40 z-0" />

              {/* Left Side Content */}
              <div className="relative z-20 w-[65%]">
                <h3 className="text-[2.6rem] font-extrabold text-white leading-[1] tracking-tight mb-2">
                  Modern
                </h3>
                <p className="text-white/80 text-[14px] font-medium mb-8">
                  Home Makeover
                </p>
                
                {/* Phone Pill Button */}
                <a 
                  href="tel:+83218906" 
                  className="inline-flex items-center gap-2 bg-[#86C232] text-[#222629] px-4 py-2.5 rounded-full font-bold text-[13px] transition-colors duration-300 hover:bg-[#61892F] hover:text-white"
                >
                  <Phone size={14} fill="currentColor" />
                  +8 (321) 890-6...
                </a>
              </div>

              {/* Right Side Circular Image (Correctly Clipped to ensure it displays properly) */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-48 h-48 rounded-full border-[6px] border-[#222629] overflow-hidden z-10 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                  alt="Consultant" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}