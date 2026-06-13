"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────────────────── */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT — TERMS AND CONDITIONS
────────────────────────────────────────────────────────── */
export default function TermsAndConditions(): React.ReactElement {
  
  // Custom function for smooth scrolling to sections
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">

      {/* ════════════════════════════════════════
         1. HERO SECTION
      ════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[420px] lg:h-[480px] rounded-[32px] md:rounded-[15px][12px] flex items-center justify-center overflow-hidden shadow-sm">
          {/* Background Image - Updated to match corporate theme */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#222629]/95 via-[#222629]/85 to-[#61892F]/80 mix-blend-multiply" />

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Terms and Conditions
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[15px] font-medium text-white/80 bg-[#222629]/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 w-fit"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors duration-300"
              >
                <Home size={15} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={15} className="text-[#6B6E70]" />
              <span className="text-white font-bold">Terms and Conditions</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
         2. CONTENT SECTION
      ════════════════════════════════════════ */}
      <section className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="bg-white p-8 md:p-12 lg:p-16 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100"
        >
          {/* Header Info */}
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-[2.2rem] md:text-[2.6rem] font-extrabold text-[#222629] leading-[1.2] tracking-tight mb-4">
              Terms & Conditions Wexoraa - Corporate Business HTML Template
            </h2>
            <p className="text-[#6B6E70] text-[15px] font-medium">
              Last updated: September 9, 2025
            </p>
          </motion.div>

          {/* Intro Paragraphs */}
          <motion.div variants={fadeUp} className="space-y-6 text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-12">
            <p>
              Thank you for choosing <strong className="text-[#222629]">Wexoraa - Corporate Business HTML Template</strong>. These Terms & Conditions govern your use of the Template purchased from <span className="text-[#86C232] hover:text-[#61892F] transition-colors cursor-pointer">ThemeForest (Envato Market)</span>. By downloading, installing, or using the Template, you agree to be bound by these Terms and the applicable <span className="text-[#86C232] hover:text-[#61892F] transition-colors cursor-pointer">Envato License</span>.
            </p>
            <p>
              <strong className="text-[#222629]">Short version:</strong> You can use Wexoraa on the number of end products allowed by your Envato license, but you can't resell, redistribute, or share the source files. Support and updates are provided according to the policies below.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div variants={fadeUp} className="mb-14">
            <h3 className="text-[2rem] font-extrabold text-[#222629] leading-tight mb-6">
              Table of Contents
            </h3>
            <ol className="flex flex-col gap-3 text-[16px] font-bold text-[#86C232]">
              <li>
                <a href="#definitions" onClick={(e) => handleScroll(e, 'definitions')} className="hover:text-[#61892F] transition-colors duration-300">
                  1. Definitions
                </a>
              </li>
              <li>
                <a href="#license" onClick={(e) => handleScroll(e, 'license')} className="hover:text-[#61892F] transition-colors duration-300">
                  2. License & Permitted Use
                </a>
              </li>
              <li>
                <a href="#restrictions" onClick={(e) => handleScroll(e, 'restrictions')} className="hover:text-[#61892F] transition-colors duration-300">
                  3. Restrictions
                </a>
              </li>
              <li>
                <a href="#support" onClick={(e) => handleScroll(e, 'support')} className="hover:text-[#61892F] transition-colors duration-300">
                  4. Support Policy
                </a>
              </li>
              <li>
                <a href="#updates" onClick={(e) => handleScroll(e, 'updates')} className="hover:text-[#61892F] transition-colors duration-300">
                  5. Updates & Compatibility
                </a>
              </li>
            </ol>
          </motion.div>

          {/* Separator */}
          <motion.hr variants={fadeUp} className="border-gray-200 mb-12" />

          {/* 1. Definitions */}
          <motion.div id="definitions" variants={fadeUp} className="mb-12 scroll-mt-24">
            <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-6">
              1. Definitions
            </h3>
            <ul className="space-y-4 text-[#6B6E70] text-[16px] leading-[1.85] font-medium list-disc pl-5 marker:text-[#86C232]">
              <li>
                <strong className="text-[#222629]">"We", "Us", "Our"</strong> refers to Theme Junction, the author of the Template on ThemeForest.
              </li>
              <li>
                <strong className="text-[#222629]">"You", "Your"</strong> refers to the purchaser/licensee who downloads or uses the Template.
              </li>
              <li>
                <strong className="text-[#222629]">"License"</strong> refers to the Envato Market license (Regular or Extended) under which the Template is purchased. For full details, see the <span className="text-[#86C232] hover:text-[#61892F] transition-colors cursor-pointer">Envato License Terms</span>.
              </li>
            </ul>
          </motion.div>

          {/* 2. License & Permitted Use */}
          <motion.div id="license" variants={fadeUp} className="mb-12 scroll-mt-24">
            <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-6">
              2. License & Permitted Use
            </h3>
            <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-6">
              Your rights to use the Template are determined by the Envato license you purchased:
            </p>
            <ul className="space-y-4 text-[#6B6E70] text-[16px] leading-[1.85] font-medium list-disc pl-5 marker:text-[#86C232] mb-6">
              <li>
                <strong className="text-[#222629]">Regular License:</strong> Permits the use of the Template in a single <em className="text-[#222629]">end product</em> that is not offered for sale, where end users are not charged to access or use it.
              </li>
              <li>
                <strong className="text-[#222629]">Extended License:</strong> Permits the use of the Template in a single <em className="text-[#222629]">end product offered for sale</em> (e.g., a SaaS or paid access site). The Template itself cannot be resold as a template or theme.
              </li>
            </ul>
            <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium">
              Each license is valid for <strong className="text-[#222629]">one end product</strong>. If you need the Template for multiple projects, you must purchase one license for each end product. All uses must comply with Envato's licensing rules.
            </p>
          </motion.div>

          {/* 3. Restrictions */}
          <motion.div id="restrictions" variants={fadeUp} className="mb-12 scroll-mt-24">
            <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-6">
              3. Restrictions
            </h3>
            <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-6">
              You agree that you will not:
            </p>
            <ul className="space-y-4 text-[#6B6E70] text-[16px] leading-[1.85] font-medium list-disc pl-5 marker:text-[#86C232]">
              <li>Resell, redistribute, sublicense, share, or make the Template (or any source files) publicly available, except as permitted by your Envato license.</li>
              <li>Use the Template in any way that competes with the original item (e.g., as a theme/template for sale, or in a template library/marketplace).</li>
              <li>Remove, obscure, or alter copyright notices, license headers, or item metadata where present.</li>
              <li>Claim the Template as your own original work.</li>
              <li>Use the Template for unlawful, harmful, or offensive content, or in violation of any applicable law or regulation.</li>
            </ul>
          </motion.div>

          {/* 4. Support Policy */}
          <motion.div id="support" variants={fadeUp} className="mb-12 scroll-mt-24">
            <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-6">
              4. Support Policy
            </h3>
            <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-6">
              Item support is provided in accordance with Envato's <span className="text-[#86C232] hover:text-[#61892F] transition-colors cursor-pointer">Item Support Policy</span> for the support period associated with your purchase.
            </p>
            
            <h4 className="text-[1.2rem] font-extrabold text-[#222629] mb-4">What's included:</h4>
            <ul className="space-y-3 text-[#6B6E70] text-[16px] leading-[1.85] font-medium list-disc pl-5 marker:text-[#86C232] mb-8">
              <li>Answering questions about item features and functionality.</li>
              <li>Bug fixes and reported issue investigation (if the issue is reproducible with the original item).</li>
              <li>Updates to maintain item compatibility with supported browsers and dependencies listed in the documentation.</li>
            </ul>

            <h4 className="text-[1.2rem] font-extrabold text-[#222629] mb-4">What's not included:</h4>
            <ul className="space-y-3 text-[#6B6E70] text-[16px] leading-[1.85] font-medium list-disc pl-5 marker:text-[#86C232] mb-8">
              <li>Installation, customization, or new feature requests.</li>
              <li>Support for third-party plugins, scripts, or hosting/server issues.</li>
              <li>Issues arising from modifications beyond the provided code or from outdated dependencies not specified in the docs.</li>
            </ul>

            <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium">
              <strong className="text-[#222629]">How to get support:</strong> Please open a ticket or contact us via ThemeForest comments with your Envato username and purchase code. We may ask for temporary access or additional details to diagnose issues.
            </p>
          </motion.div>

          {/* 5. Updates & Compatibility */}
          <motion.div id="updates" variants={fadeUp} className="mb-4 scroll-mt-24">
            <h3 className="text-[1.8rem] font-extrabold text-[#222629] leading-tight mb-6">
              5. Updates & Compatibility
            </h3>
            <p className="text-[#6B6E70] text-[16px] leading-[1.85] font-medium mb-6">
              We may release updates to improve features, fix bugs, or maintain compatibility. You'll have access to updates via your ThemeForest downloads during the support/maintenance period.
            </p>
            <ul className="space-y-3 text-[#6B6E70] text-[16px] leading-[1.85] font-medium list-disc pl-5 marker:text-[#86C232] mb-8">
              <li>The Template is built as a static HTML/CSS/JS item. It does not include server-side code.</li>
              <li>Browser support targets versions listed in the documentation. Older/legacy browsers may require polyfills or are not supported.</li>
            </ul>
            <div className="bg-[#eef0ee] border-l-[4px] border-[#86C232] p-6 rounded-r-[12px]">
              <p className="text-[#6B6E70] text-[15px] font-medium leading-[1.85]">
                This Terms & Conditions page is provided for general guidance only and does not constitute legal advice. Please consult your legal advisor to adapt it to your specific needs and local laws.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
}