"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export default function RealTimeMessagingApp(): React.ReactElement {
  return (
    <main className="w-full bg-[#eef0ee] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        <div className="relative w-full max-w-[1400px] mx-auto min-h-[320px] md:min-h-[420px] rounded-[12px] flex flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/ourprojects/real.jpeg')" }}
          />
          <div className="absolute inset-0 bg-[#222629]/75" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-3xl md:text-5xl lg:text-[4rem] font-extrabold text-white mb-2 leading-tight"
            >
              Real-Time Messaging App
            </motion.h1>
            <p className="text-white/85 text-base sm:text-lg font-medium mb-6">
              Mobile Communication Platform
            </p>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232]">
                <Home size={15} /> Home
              </Link>
              <ChevronRight size={15} />
              <Link href="/portfolio" className="hover:text-[#86C232]">Portfolio</Link>
              <ChevronRight size={15} />
              <span className="text-white">Real-Time Messaging App</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <img
              src="/assets/img/ourprojects/real.jpeg"
              alt="Real-time messaging application"
              className="w-full h-[320px] md:h-[480px] rounded-[16px] object-cover"
            />
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#222629] mt-8 mb-4">
              Mobile Communication Platform
            </h2>
            <p className="text-[#6B6E70] text-[15px] leading-[1.85] font-medium">
              A real-time messaging experience designed to help people connect, share updates, and keep conversations moving across devices.
            </p>
          </div>

          <aside className="lg:col-span-4 bg-white rounded-[16px] p-7 border border-[#474B4F]/10">
            <h2 className="text-xl font-extrabold text-[#222629] mb-4">Project Focus</h2>
            <ul className="space-y-3 text-[15px] font-semibold text-[#474B4F]">
              <li>Real-time conversations</li>
              <li>Mobile-first experience</li>
              <li>Reliable message delivery</li>
            </ul>
          </aside>
        </div>

        <nav aria-label="Portfolio navigation" className="mt-10 flex items-center justify-between bg-white rounded-[16px] p-5 sm:p-6 border border-[#e0e3e0]">
          <Link href="/portfolio/business-platforms" className="inline-flex items-center gap-2 font-bold text-[#222629] hover:text-[#86C232]">
            <ChevronLeft size={20} /> Previous
          </Link>
          <Link href="/portfolio" aria-label="All portfolio projects" className="text-[#222629] hover:text-[#86C232]">
            Portfolio
          </Link>
          <Link href="/portfolio/travel-tourism" className="inline-flex items-center gap-2 font-bold text-[#222629] hover:text-[#86C232]">
            Next <ChevronRight size={20} />
          </Link>
        </nav>
      </section>
    </main>
  );
}