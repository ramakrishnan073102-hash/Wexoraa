"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquareText, 
  ArrowRight, 
  Box 
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   CONTACT INFO DATA
────────────────────────────────────────────────────────── */
const CONTACT_INFO = [
  {
    id: 1,
    title: "Our Location",
    icon: MapPin,
    details: ["993 Renner Burg, West", "Rond, MT 94251-030"],
    link: null,
  },
  {
    id: 2,
    title: "Email us",
    icon: Mail,
    details: ["support@wexoraa.com", "info@wexoraa.com"],
    link: null,
  },
  {
    id: 3,
    title: "Call us",
    icon: Phone,
    details: ["+1 (009) 544-7818", "+1 (009) 880-1810"],
    link: null,
  },
  {
    id: 4,
    title: "Live chat",
    icon: MessageSquareText,
    details: ["livechat@wexoraa.com"],
    link: { text: "Need help?", href: "#" },
  },
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function ContactPage(): React.ReactElement {
  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif]">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        {/* The Boxy Rounded Container */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[200px] lg:h-[500px] rounded-[32px] md:rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm">
          
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')" }}
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
              Contact Us
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
              <span className="text-white font-bold">Contact Us</span>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. CONTACT INFO CARDS SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-16 pb-20 md:pt-24 md:pb-28 bg-[#f8f9fa]">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-14 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#86C232] text-xs font-black uppercase tracking-[0.2em] mb-4 bg-[#86C232]/10 px-3 py-1.5 rounded-sm border border-[#86C232]/20"
            >
              <Box size={14} strokeWidth={2.5} /> Contact Info
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222629] tracking-tight"
            >
              <span className="text-[#86C232]">Reach Out</span> to Us
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col items-center text-center bg-white p-8 md:p-10 rounded-[24px] border border-[#474B4F]/10 shadow-[0_10px_40px_rgba(34,38,41,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(134,194,50,0.12)] transition-all duration-300"
                >
                  {/* Icon Circle */}
                  <div className="w-[72px] h-[72px] rounded-full bg-[#f4f7f6] flex items-center justify-center text-[#86C232] mb-6 transition-colors duration-300 group-hover:bg-[#86C232] group-hover:text-white">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#222629] mb-4 group-hover:text-[#86C232] transition-colors duration-300">
                    {info.title}
                  </h3>
                  
                  {/* Details */}
                  <div className="flex flex-col gap-1 text-[15px] font-medium text-[#6B6E70]">
                    {info.details.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>

                  {/* Optional Action Link */}
                  {info.link && (
                    <Link href={info.link.href} className="mt-2 text-[15px] font-bold text-[#86C232] hover:text-[#61892F] transition-colors">
                      {info.link.text}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. FORM & MAP SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            
            {/* ── LEFT: CONTACT FORM ── */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight mb-10 max-w-lg">
                Feel Free to Get in Touch or Visit our Location.
              </h2>

              <form className="w-full flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* 2-Column Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Full Name*" 
                      required
                      className="w-full bg-transparent border-b-2 border-[#474B4F]/20 pb-3 text-[#222629] font-medium placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email Address*" 
                      required
                      className="w-full bg-transparent border-b-2 border-[#474B4F]/20 pb-3 text-[#222629] font-medium placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                    />
                  </div>
                </div>

                {/* 2-Column Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="Phone number*" 
                      required
                      className="w-full bg-transparent border-b-2 border-[#474B4F]/20 pb-3 text-[#222629] font-medium placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select 
                      required
                      className="w-full bg-transparent border-b-2 border-[#474B4F]/20 pb-3 text-[#6B6E70] font-medium outline-none focus:border-[#86C232] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected hidden>Chose a option</option>
                      <option value="business">Business Strategy</option>
                      <option value="customer">Customer Experience</option>
                      <option value="esg">Sustainability and ESG</option>
                      <option value="training">Training and Development</option>
                    </select>
                    {/* Custom Dropdown Chevron */}
                    <div className="absolute right-0 top-1 pointer-events-none text-[#6B6E70]">
                      <ChevronRight size={18} className="rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Full Width Row 3 */}
                <div className="relative mt-2">
                  <textarea 
                    placeholder="Type message*" 
                    rows={1}
                    required
                    className="w-full bg-transparent border-b-2 border-[#474B4F]/20 pb-3 text-[#222629] font-medium placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors resize-y min-h-[40px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center bg-[#86C232] text-[#111316] rounded-full p-2 pl-7 pr-2.5 text-[15px] font-bold w-fit transition-all duration-300 hover:shadow-[0_12px_32px_rgba(134,194,50,0.25)] hover:bg-[#61892F] hover:text-white"
                  >
                    <span className="mr-4">Submit Now</span>
                    <span className="w-10 h-10 rounded-full bg-[#111316] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#222629] group-hover:text-[#86C232]">
                      <ArrowRight
                        size={18}
                        strokeWidth={2.5}
                        className="-rotate-45 transition-transform duration-500 group-hover:rotate-0"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>

            {/* ── RIGHT: MAP IFRAME ── */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(34,38,41,0.1)] border-4 border-white relative isolate"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1716462719277!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover filter contrast-100"
              />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}