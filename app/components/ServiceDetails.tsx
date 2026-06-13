"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  CheckCircle2,
  Phone,
  Plus,
  Minus
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   MOCK DATA
────────────────────────────────────────────────────────── */
const SIDEBAR_SERVICES = [
  { name: "Business Strategy", active: true },
  { name: "Customer Experience", active: false },
  { name: "ESG Consulting", active: false },
  { name: "Training Programs", active: false },
  { name: "IT Support", active: false },
  { name: "Marketing Strategy", active: false },
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
    desc: "Our data-driven approach provides your team with valuable insights into customer behavior, enabling continuous business growth.",
  },
];

const FAQS = [
  {
    id: 1,
    question: "What is Customer Experience (CX) and why is it important?",
    answer: "Customer experience (CX) refers to the overall impression a customer has of a business based on their interactions across various touchpoints—whether it's a website visit, a support call, or an in-store purchase. It encompasses everything from ease of use to service quality to emotional connection.",
  },
  {
    id: 2,
    question: "How will your Customer Experience Solutions benefit my business?",
    answer: "Our solutions are designed to map the entire customer journey, identify friction points, and implement strategies that increase satisfaction, boost retention rates, and ultimately drive higher revenue.",
  },
  {
    id: 3,
    question: "How do you personalize the customer experience?",
    answer: "We utilize data analytics and customer segmentation to deliver tailored content, product recommendations, and support interactions that resonate with individual user preferences.",
  },
  {
    id: 4,
    question: "What tools do you use to improve customer experience?",
    answer: "We integrate modern CRM platforms, AI-driven chatbots, feedback survey tools, and comprehensive analytics dashboards to streamline and enhance every touchpoint.",
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function ServicesDetailsPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[15px][40px] flex items-center justify-center overflow-hidden shadow-sm">
          
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl leading-tight"
            >
              Business Strategy Development
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
              <Link href="/services" className="hover:text-[#86C232] transition-colors">
                Services
              </Link>
              <ChevronRight size={16} className="text-white/40 mx-1" />
              <span className="text-white font-bold truncate max-w-[150px] sm:max-w-[200px]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: DETAILS CONTENT ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col gap-10"
          >
            {/* Top Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-[15px] overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=1200&q=80" 
                alt="Business Strategy" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Main Header & Paragraphs */}
            <div>
              <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight mb-6">
                Transforming Customer: Tailored Solutions for Experiences.
              </h2>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-5">
                Exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand into a meaningful and positive experience. We believe that consistent, high-quality experiences build customer loyalty, satisfaction, and lifetime value.
              </p>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium">
                Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current customer touchpoints, identifying areas for improvement, and using insights to design journeys that meet your customers' evolving needs. From optimizing digital platforms to training staff.
              </p>
            </div>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 bg-white p-8 rounded-[24px] border border-[#474B4F]/10 shadow-sm">
              {CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#86C232]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-[#86C232]" strokeWidth={3} />
                  </div>
                  <span className="text-[#222629] text-[15px] font-bold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Three Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="h-[200px] rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="Consulting 1" className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="Consulting 2" className="w-full h-full object-cover" />
              </div>
              <div className="h-[200px] rounded-[20px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" alt="Consulting 3" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Secondary Section */}
            <div>
              <h3 className="text-2xl md:text-[2rem] font-extrabold text-[#222629] leading-tight mb-5">
                The Advantage of Customer Services
              </h3>
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-8">
                We don't just focus on solving customer problems—we focus on creating experiences that build long-lasting relationships. Whether it's through improving customer service operations, upgrading technology, or designing more engaging digital experiences, our team is here to help you exceed customers' expectations every time.
              </p>
              
              {/* Numbered Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {NUMBERED_STEPS.map((step, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[24px] border border-[#474B4F]/10 shadow-[0_5px_20px_rgba(34,38,41,0.02)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] font-black text-xl mb-6">
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
            <div className="mt-4">
              <h3 className="text-2xl md:text-[2rem] font-extrabold text-[#222629] leading-tight mb-8">
                Frequently asked questions
              </h3>
              <div className="flex flex-col gap-4">
                {FAQS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <motion.div
                      key={faq.id}
                      initial={false}
                      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? "bg-[#86C232] shadow-lg border border-transparent" 
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
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isOpen 
                              ? "border-[1.5px] border-white text-white" 
                              : "border-[1.5px] border-[#86C232] text-[#86C232] group-hover:bg-[#86C232] group-hover:text-white"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={16} strokeWidth={2.5} />
                          ) : (
                            <Plus size={16} strokeWidth={2.5} />
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
                            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-[15px] font-medium leading-[1.8] text-white/95 border-t border-white/20 mt-2 pt-6">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
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
            <div className="bg-[#f8f9fa] rounded-[24px] p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-[#222629] mb-6">
                More Services
              </h3>
              <div className="flex flex-col gap-3">
                {SIDEBAR_SERVICES.map((service, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className={`px-6 py-4 rounded-[12px] text-[15px] font-extrabold transition-all duration-300 ${
                      service.active
                        ? "bg-[#86C232] text-white shadow-md"
                        : "bg-white text-[#474B4F] hover:bg-[#86C232] hover:text-white border border-[#474B4F]/5"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact / Help Card */}
            <div className="bg-[#222629] rounded-[24px] overflow-hidden shadow-2xl relative">
              {/* Card Image */}
              <div className="w-full h-[220px]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                  alt="Contact Expert" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
              </div>
              
              {/* Card Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#222629] via-[#222629]/80 to-transparent" />
              
              <div className="relative z-10 p-8 pt-0 flex flex-col items-center text-center -mt-16">
                <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">
                  Need Expert <br />
                  <span className="text-[#86C232]">Consulting?</span>
                </h3>
                <p className="text-[#6B6E70] text-sm font-medium mb-8">
                  Get in touch with us today and let's transform your business.
                </p>
                
                {/* Phone CTA Button */}
                <a 
                  href="tel:+83218906" 
                  className="flex items-center gap-3 bg-[#86C232] text-[#111316] px-6 py-3.5 rounded-full font-extrabold text-[15px] transition-transform duration-300 hover:scale-105 hover:bg-[#61892F] hover:text-white w-full justify-center"
                >
                  <Phone size={18} fill="currentColor" />
                  +8 (321) 890-6...
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}