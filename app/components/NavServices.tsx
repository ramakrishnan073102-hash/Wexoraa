"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  ArrowRight,
  ArrowLeft,
  Box,
  Target,
  PieChart,
  Layers,
  Briefcase,
  TrendingUp,
  Cpu,
  ChevronsRight
} from "lucide-react";
import Marquee from "../components/Marquee"; // Adjust path as needed

/* ──────────────────────────────────────────────────────────
   SERVICES DATA (With Individual Links)
────────────────────────────────────────────────────────── */
const SERVICES_DATA = [
  {
    id: 1,
    title: "Business Strategy Consultant",
    desc: "A powerful combination of data-driven insights and innovative approaches. We work closely with you to develop strategy.",
    icon: Target,
    href: "/page1"
  },
  {
    id: 2,
    title: "Customer Experience Solutions",
    desc: "Customer Experience Solutions are designed to enhance every touchpoint of your customer journey, from first interaction.",
    icon: PieChart,
    href: "/page2"
  },
  {
    id: 3,
    title: "Sustainability and Consulting",
    desc: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
    icon: Layers,
    href: "pag3"
  },
  {
    id: 4,
    title: "Training and Development",
    desc: "Training and Development Programs designed to empower employees with the skills, knowledge, and tools.",
    icon: Briefcase,
    href: "page4"
  },
  {
    id: 5,
    title: "IT Support & Maintenance",
    desc: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
    icon: Cpu,
    href: "page5"
  },
  {
    id: 6,
    title: "Marketing Strategy Campaigns",
    desc: "In today's dynamic business environment, to know to success lies strategic planning and operationals business success execution.",
    icon: TrendingUp,
    href: "page6"
  },
  {
    id: 7,
    title: "Financial Advisory Services",
    desc: "Comprehensive financial planning and risk management strategies to ensure long-term stability and growth for your business.",
    icon: PieChart,
    href: ""
  },
  {
    id: 8,
    title: "Operational Efficiency",
    desc: "Streamline your business operations to reduce costs, improve productivity, and maximize overall output across departments.",
    icon: Layers,
    href: ""
  },
  {
    id: 9,
    title: "Digital Transformation",
    desc: "Integrate cutting-edge digital technology into all areas of your business to fundamentally change how you operate and deliver value.",
    icon: Target,
    href: "#"
  },
];

/* ──────────────────────────────────────────────────────────
   PRICING DATA
────────────────────────────────────────────────────────── */
const PRICING_PLANS = [
  {
    id: 1,
    name: "Basic Plan",
    desc: "Essential Business Services",
    price: "149",
    popular: false,
    features: [
      "Core business services",
      "Basic customer support (email)",
      "1 project per month",
      "Basic reporting and analytics",
      "Access to templates and tools",
      "Basic performance tracking"
    ]
  },
  {
    id: 2,
    name: "Standard Plan",
    desc: "Complete Business Solutions",
    price: "249",
    popular: true,
    features: [
      "All features in Basic Plan",
      "Priority customer support",
      "Up to 3 projects per month",
      "Monthly performance reviews",
      "Collaboration tools for team",
      "Custom templates"
    ]
  },
  {
    id: 3,
    name: "Premium Plan",
    desc: "Advanced Business Services",
    price: "499",
    popular: false,
    features: [
      "All features in Standard Plan",
      "Dedicated account manager",
      "Tailored strategy sessions",
      "Quarterly performance audits",
      "Priority support",
      "24/7 emergency services"
    ]
  }
];

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function ServicesPage(): React.ReactElement {
  // Pagination Setup
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const itemsPerPage = 6;
  const totalPages = Math.ceil(SERVICES_DATA.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = SERVICES_DATA.slice(indexOfFirstItem, indexOfLastItem);

  const scrollToGrid = () => {
    if (gridRef.current) {
      const yOffset = -100;
      const element = gridRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToGrid();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToGrid();
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (currentPage !== pageNumber) {
      setCurrentPage(pageNumber);
      scrollToGrid();
    }
  };

  // Map Tooltip State
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-32">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[15px] md:rounded-[40px] flex items-center justify-center overflow-hidden shadow-sm">
          
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
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Services
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
              <span className="text-white font-bold">Services</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. SERVICES GRID SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 mb-24 md:mb-32" ref={gridRef}>
        
        {/* Animated Grid Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="h-full"
                >
                  {/* ENTIRE CARD IS A LINK */}
                  <Link 
                    href={service.href} 
                    className="group flex flex-col h-full bg-white rounded-[24px] border border-[#474B4F]/10 p-8 lg:p-10 transition-colors duration-300 hover:bg-[#86C232] shadow-[0_5px_20px_rgba(34,38,41,0.03)] hover:shadow-[0_20px_40px_rgba(134,194,50,0.2)] outline-none"
                  >
                    
                    {/* Top Icon Circle */}
                    <div className="w-[72px] h-[72px] rounded-full bg-[#86C232]/10 flex items-center justify-center text-[#86C232] mb-8 transition-colors duration-300 group-hover:bg-white group-hover:text-[#86C232]">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-[1.35rem] font-extrabold text-[#222629] mb-4 transition-colors duration-300 group-hover:text-white leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] font-medium text-[#6B6E70] leading-[1.8] mb-10 transition-colors duration-300 group-hover:text-white/90">
                      {service.desc}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 text-[15px] font-extrabold text-[#222629] transition-colors duration-300 group-hover:text-white mt-auto w-fit">
                      Learn More 
                      <span className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 bg-transparent text-[#222629] group-hover:bg-[#222629] group-hover:text-white">
                        <ArrowRight 
                          size={18} 
                          strokeWidth={2.5} 
                          className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                        />
                      </span>
                    </div>

                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ════════════════════════════════════════════════════
            PAGINATION CONTROLS
        ════════════════════════════════════════════════════ */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-16">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-extrabold transition-all duration-300 shadow-sm ${
                    isActive 
                      ? "bg-[#222629] text-white border border-[#222629]" 
                      : "bg-white border border-[#474B4F]/20 text-[#222629] hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
                  }`}
                >
                  {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                </button>
              );
            })}

            {currentPage < totalPages && (
              <button
                onClick={handleNextPage}
                className="w-12 h-12 rounded-full border border-[#474B4F]/20 bg-white text-[#222629] flex items-center justify-center hover:bg-[#86C232] hover:text-white hover:border-[#86C232] transition-colors duration-300 shadow-sm"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
        )}

      </section>

      {/* ════════════════════════════════════════════════════
          3. DROP US A LINE (CONTACT) SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#111316] relative mb-24 md:mb-32 border-y border-[#474B4F]/20">
        
        {/* WORLD MAP BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
            backgroundSize: "80%",
            backgroundPosition: "20% center",
            backgroundRepeat: "no-repeat",
            filter: "invert(1)"
          }}
        />

        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row py-16 lg:py-0">
          
          {/* LEFT: MAP PINS */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[600px] flex items-center justify-center lg:justify-start">
            
            {/* Interactive Pins Container */}
            <div className="relative w-full max-w-[500px] h-[300px] lg:h-[400px]">
              
              {/* Pin 1 */}
              <div 
                className="absolute top-[30%] left-[20%]"
                onMouseEnter={() => setActiveTooltip(1)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="w-4 h-4 rounded-full bg-white relative cursor-pointer z-20">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50" />
                </div>
                
                <AnimatePresence>
                  {activeTooltip === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#86C232] text-[#111316] p-4 rounded-xl min-w-[200px] shadow-xl z-30 pointer-events-none"
                    >
                      <h4 className="font-extrabold text-[14px] mb-2">Regional office:</h4>
                      <p className="text-[13px] font-medium leading-tight mb-2">
                        32 Altamira, State of Pará, Brazil.
                      </p>
                      <p className="text-[13px] font-bold">P: +1 (009) 544-7818</p>
                      <p className="text-[13px] font-bold">M: support@wexoraa.com</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-[#86C232]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pin 2 */}
              <div className="absolute top-[60%] left-[40%]">
                <div className="w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-125 transition-all" />
              </div>

              {/* Pin 3 */}
              <div className="absolute top-[20%] right-[30%]">
                <div className="w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-125 transition-all" />
              </div>

              {/* Pin 4 */}
              <div className="absolute bottom-[20%] right-[10%]">
                <div className="w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer hover:opacity-100 hover:scale-125 transition-all" />
              </div>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          {/* FIXED: Removed lg:rounded-l-[40px] and lg:-mr-8 and lg:border-r-0 to give all corners a 40px rounded design and fit neatly inside the layout */}
          <div className="w-full lg:w-1/2 bg-[#222629] p-8 sm:p-12 lg:p-16 rounded-[24px] lg:rounded-[10px] shadow-2xl relative my-auto border border-[#474B4F]/30">
            
            <div className="flex items-center gap-2 text-[#86C232] text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Box size={14} strokeWidth={2.5} /> Get in touch
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-white tracking-tight leading-[1.1] mb-10">
              Drop Us a <span className="text-[#86C232]">Line.</span>
            </h2>

            <form className="flex flex-col gap-6 sm:gap-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required
                  className="w-full bg-transparent border-b border-[#474B4F]/60 pb-3 text-white text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required
                  className="w-full bg-transparent border-b border-[#474B4F]/60 pb-3 text-white text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <input 
                  type="tel" 
                  placeholder="Phone number *" 
                  required
                  className="w-full bg-transparent border-b border-[#474B4F]/60 pb-3 text-white text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors"
                />
                
                {/* SELECT MENU WITH REACT WARNING FIX */}
                <div className="relative w-full">
                  <select 
                    required
                    defaultValue="" 
                    className="w-full bg-transparent border-b border-[#474B4F]/60 pb-3 text-white text-[15px] font-semibold outline-none focus:border-[#86C232] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled hidden className="text-[#6B6E70]">Choose a option</option>
                    <option value="business" className="bg-[#222629] text-white">Business Strategy</option>
                    <option value="customer" className="bg-[#222629] text-white">Customer Experience</option>
                    <option value="sustainability" className="bg-[#222629] text-white">Sustainability & ESG</option>
                    <option value="training" className="bg-[#222629] text-white">Training & Development</option>
                  </select>
                  <div className="absolute right-0 top-0 bottom-3 flex items-center pointer-events-none text-[#6B6E70]">
                    <ChevronRight size={18} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <input 
                  type="text" 
                  placeholder="Type message *" 
                  required
                  className="w-full bg-transparent border-b border-[#474B4F]/60 pb-3 text-white text-[15px] font-semibold placeholder:text-[#6B6E70] outline-none focus:border-[#86C232] transition-colors mt-2"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-between bg-[#86C232] text-[#222629] rounded-full p-1.5 pl-6 pr-1.5 text-[15px] font-bold w-fit transition-all duration-300 hover:shadow-[0_12px_32px_rgba(134,194,50,0.25)] hover:bg-[#61892F] hover:text-white outline-none"
                >
                  <span className="mr-4">Send Message</span>
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

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. PRICING PLAN SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 mb-12 md:mb-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-[#86C232] text-xs font-black uppercase tracking-[0.2em] mb-4 bg-[#86C232]/10 px-3 py-1.5 rounded-sm border border-[#86C232]/20 w-fit mx-auto"
          >
            <Box size={14} strokeWidth={2.5} /> Pricing Plan
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-extrabold text-[#222629] tracking-tight leading-[1.1]"
          >
            Our Pricing <span className="text-[#86C232]">Plan.</span>
          </motion.h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {PRICING_PLANS.map((plan, i) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col rounded-[32px] p-8 lg:p-10 transition-all duration-300 ${
                  isPopular 
                    ? "bg-[#61892F] shadow-[0_20px_50px_rgba(97,137,47,0.3)] md:scale-105 z-10 py-10 lg:py-14" 
                    : "bg-white border border-[#474B4F]/10 shadow-[0_10px_30px_rgba(34,38,41,0.04)]"
                }`}
              >
                
                {/* Plan Title & Desc */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-extrabold mb-2 ${isPopular ? "text-white" : "text-[#222629]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-[15px] font-medium ${isPopular ? "text-white/80" : "text-[#6B6E70]"}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-start gap-1 mb-8">
                  <span className={`text-2xl font-extrabold mt-1 ${isPopular ? "text-white" : "text-[#222629]"}`}>
                    $
                  </span>
                  <span className={`text-[4rem] font-black leading-none tracking-tighter ${isPopular ? "text-white" : "text-[#222629]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[15px] font-bold mt-auto mb-2 ml-1 ${isPopular ? "text-white/80" : "text-[#6B6E70]"}`}>
                    /per month
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="#"
                  className={`group flex items-center justify-center gap-3 w-full p-2 pl-6 pr-2 rounded-full font-bold text-[15px] transition-all duration-300 mb-10 ${
                    isPopular
                      ? "bg-white text-[#222629] shadow-lg"
                      : "bg-transparent border-2 border-[#474B4F]/10 text-[#222629] hover:border-[#474B4F]/30"
                  }`}
                >
                  <span className="flex-1 text-center pr-2">Choose Plan</span>
                  <span className="w-11 h-11 rounded-full bg-[#86C232] text-white flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#222629]">
                    <ArrowRight 
                      size={18} 
                      strokeWidth={2.5} 
                      className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                    />
                  </span>
                </Link>

                {/* Features List */}
                <div className="flex flex-col gap-4 mt-auto">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronsRight 
                        size={18} 
                        strokeWidth={3} 
                        className={`flex-shrink-0 mt-0.5 ${isPopular ? "text-white" : "text-[#86C232]"}`} 
                      />
                      <span className={`text-[15px] font-semibold leading-snug ${isPopular ? "text-white/95" : "text-[#474B4F]"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

      {/* ════════════════════════════════════════════════════
          5. PARTNER LOGOS MARQUEE
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 mt-10 md:mt-20 bg-[#f8f9fa] overflow-hidden flex items-center justify-center border-t border-[#474B4F]/10">
        <div className="w-full max-w-[1400px] mx-auto flex justify-center">
          <Marquee />
        </div>
      </section>

    </main>
  );
}