"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  LayoutGrid
} from "lucide-react";
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaLinkedinIn,
  FaPinterestP
} from "react-icons/fa6";

/* ──────────────────────────────────────────────────────────
   MOCK DATA
────────────────────────────────────────────────────────── */
const JOB_DETAILS = {
  title: "Management Consultant",
  type: "Full Time Job/On Site",
  urgent: true,
  location: "London, UK",
  description: [
    "Our mission is to empowers businesses size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptionals the value through strategic inset innovative approaches. Our consulting of our missing empower businesses of all sizes to thrive. We are committed to the delivering exceptional in the values through our strategic inset innovative approaches empower. Our mission is to empowers businesses.",
    "Our mission is to empowers businesses size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptionals the value through strategic inset innovative approaches. Our consulting of our missing empower businesses of all sizes to thrive."
  ],
  requirements: {
    text: "We begin with an in-depth analysis of your business goals and market to identify opportunities and challenges. From there, we work with you to develop a clear, actionable.",
    bullets: [
      "Clear vision and direction for your business for consultings.",
      "Enhanced ability to anticipate and respond to market changes.",
      "Data-driven decision-making for strategic planning execution.",
      "Structured approach to achieving your business goals."
    ]
  },
  responsibilities: {
    text: "Our mission is to empowers businesses size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptionals the value through strategic inset innovative approaches. Our consulting of our missing empower businesses of all sizes to thrive. We are committed to the delivering exceptional in the values through our strategic inset innovative approaches empower.",
    bullets: [
      "Deeply understand our expertise",
      "Dedication and commitment to explained",
      "Trust in our team and learn",
      "Trust in our team"
    ]
  },
  info: [
    { label: "Category", value: "Business Consulting" },
    { label: "Number", value: "02" },
    { label: "Company", value: "Wexoraa" },
    { label: "Website", value: "www.wexoraa.com" },
    { label: "Salary", value: "$400-$550 / Week" },
    { label: "Vacancy", value: "03 Person" },
    { label: "Apply on", value: "OCT 12, 2026" },
  ]
};

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function CareersDetailsPage(): React.ReactElement {
  const [fileName, setFileName] = useState<string>("No file chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    // MAIN BACKGROUND SET TO WHITE
    <main className="w-full bg-white font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[15px][10px] flex items-center justify-center overflow-hidden shadow-sm">
          
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')" }}
          />
          {/* Main Background Gradient using #222629 and #61892F */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/60 mix-blend-multiply" />
          
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Careers Details
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
              <span className="text-white font-bold">Careers Details</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. MAIN CONTENT AREA
      ════════════════════════════════════════════════════ */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: JOB DESCRIPTION ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            {/* JOB CARD BACKGROUND SET TO GRAY (#f8f9fa) */}
            <div className="bg-[#f8f9fa] rounded-[24px] p-8 md:p-10 border border-[#474B4F]/10 shadow-[0_5px_20px_rgba(34,38,41,0.03)]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                {/* Icon */}
                <div className="w-[72px] h-[72px] rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] flex-shrink-0 border border-[#86C232]/20">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                </div>
                
                {/* Title & Tags */}
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3.5 py-1.5 rounded-[8px] border border-[#474B4F]/20 text-[13px] font-bold text-[#6B6E70]">
                      {JOB_DETAILS.type}
                    </span>
                    {JOB_DETAILS.urgent && (
                      <span className="px-3.5 py-1.5 rounded-[8px] border border-[#474B4F]/20 text-[13px] font-bold text-[#6B6E70]">
                        Urgent
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#222629] mb-4 tracking-tight leading-tight">
                    {JOB_DETAILS.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-[#6B6E70]">
                    <MapPin size={18} strokeWidth={2.5} className="flex-shrink-0 text-[#86C232]" />
                    <span className="text-[15px] font-semibold">{JOB_DETAILS.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h3 className="text-[1.6rem] font-extrabold text-[#222629] mb-4">Description</h3>
                {JOB_DETAILS.description.map((para, idx) => (
                  <p key={idx} className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              {/* Requirements */}
              <div className="mb-10">
                <h3 className="text-[1.6rem] font-extrabold text-[#222629] mb-4">Requirements</h3>
                <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-6">
                  {JOB_DETAILS.requirements.text}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {JOB_DETAILS.requirements.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#86C232] flex-shrink-0 mt-0.5 bg-[#86C232]/10 rounded-full" />
                      <p className="text-[#222629] text-[15px] font-semibold leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-12">
                <h3 className="text-[1.6rem] font-extrabold text-[#222629] mb-4">Responsibilities</h3>
                <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-6">
                  {JOB_DETAILS.responsibilities.text}
                </p>
                <ul className="flex flex-col gap-3">
                  {JOB_DETAILS.responsibilities.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#6B6E70] text-[15px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#86C232] mt-2.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[#474B4F]/10 border-dashed">
                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-bold text-[#6B6E70] mr-2">Share:</span>
                  {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaPinterestP].map((Icon, idx) => (
                    <Link key={idx} href="#" className="text-[#474B4F] hover:text-[#86C232] transition-colors">
                      <Icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#474B4F]/10">
                <div className="flex-1" /> 
                <Link href="/careers" className="w-12 h-12 rounded-[12px] bg-white border border-[#474B4F]/10 flex items-center justify-center text-[#222629] hover:bg-[#86C232] hover:border-[#86C232] hover:text-white transition-colors duration-300">
                  <LayoutGrid size={20} strokeWidth={2} />
                </Link>
                <div className="flex-1 flex justify-end">
                  <Link href="#" className="flex items-center gap-2 text-[15px] font-extrabold text-[#222629] hover:text-[#86C232] transition-colors group">
                    Next 
                    <span className="w-8 h-8 rounded-full border border-[#474B4F]/20 bg-white flex items-center justify-center group-hover:border-[#86C232] transition-colors">
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: INFO & FORM ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            
            {/* Job Information Card BACKGROUND SET TO GRAY (#f8f9fa) */}
            <div className="bg-[#f8f9fa] rounded-[24px] p-8 md:p-10 border border-[#474B4F]/10 shadow-[0_5px_20px_rgba(34,38,41,0.03)]">
              <h3 className="text-2xl font-extrabold text-[#222629] mb-8">
                Job Information
              </h3>
              <div className="flex flex-col gap-5">
                {JOB_DETAILS.info.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-b border-[#474B4F]/10 pb-4 last:border-0 last:pb-0">
                    <span className="w-[100px] flex-shrink-0 text-[15px] font-bold text-[#6B6E70]">
                      {item.label}
                    </span>
                    <span className="text-[15px] font-bold text-[#222629]">
                      <span className="hidden sm:inline mr-2 text-[#6B6E70] font-normal">:</span> 
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Online Form BACKGROUND SET TO GRAY (#f8f9fa) */}
            <div className="bg-[#f8f9fa] rounded-[24px] p-8 md:p-10 border border-[#474B4F]/10 shadow-[0_5px_20px_rgba(34,38,41,0.03)]">
              <h3 className="text-2xl font-extrabold text-[#222629] mb-8">
                Apply Online
              </h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Full name*" 
                    required
                    className="w-full bg-transparent border-b border-[#474B4F]/20 pb-3 text-[#222629] text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter email*" 
                    required
                    className="w-full bg-transparent border-b border-[#474B4F]/20 pb-3 text-[#222629] text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Phone number*" 
                    required
                    className="w-full bg-transparent border-b border-[#474B4F]/20 pb-3 text-[#222629] text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                  />
                </div>
                
                <div className="relative mt-2">
                  <textarea 
                    placeholder="Cover letter*" 
                    rows={2}
                    required
                    className="w-full bg-transparent border-b border-[#474B4F]/20 pb-3 text-[#222629] text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors resize-y min-h-[40px]"
                  />
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-[14px] font-bold text-[#6B6E70]">Attach resume*</span>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer bg-white border border-[#474B4F]/10 px-5 py-2.5 rounded-[8px] text-[14px] font-bold text-[#222629] hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-all shadow-sm">
                      Choose File
                      <input 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="text-[14px] font-medium text-[#6B6E70] truncate max-w-[150px]">
                      {fileName}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between bg-[#86C232] text-[#222629] rounded-full p-1.5 pl-6 pr-1.5 text-[15px] font-bold w-fit transition-all duration-300 hover:shadow-[0_12px_32px_rgba(134,194,50,0.25)] hover:bg-[#61892F] hover:text-white"
                  >
                    <span className="mr-4">Submit now</span>
                    <span className="w-10 h-10 rounded-full bg-[#222629] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#111316] group-hover:text-[#86C232]">
                      <ArrowRight
                        size={18}
                        strokeWidth={2.5}
                        className="-rotate-45 transition-transform duration-500 group-hover:rotate-0"
                      />
                    </span>
                  </button>
                </div>
                
              </form>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}