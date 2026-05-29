"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ChevronRight, 
  CheckCircle2, 
  Phone 
} from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaLinkedinIn 
} from "react-icons/fa6";

/* ──────────────────────────────────────────────────────────
   TEAM MEMBER DATA
────────────────────────────────────────────────────────── */
const TEAM_MEMBER = {
  name: "Eade Marren",
  role: "Chief Executive",
  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  bio: "Our mission is to empowers businesses sizes thrive businesses ever changing marketplace We are committed to the delivering exceptional value in the our strategic inset innovative approaches. Our consulting of our mission is to",
  contact: {
    email: "eade.marren@wexoraa.com",
    phone: "+1 (009) 544-7818"
  },
  social: [
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ],
  experience: {
    text: "Our mission is to empowers businesses size to thrive in ses ever changing marketplace We are committed to the delivering exceptionals the value in the strategic ins innovative approaches. Our consulting of our mission is to empowers businesses of all sizes Committed to the delivering exceptional in the\n\nOur mission is to empowers businesses size to thrive in ses ever changing marketplace We are committed to the delivering exceptionals the value in the strategic ins innovative approaches. Our consulting of our missi",
    bullets: [
      "We believe that the human essential start any successful project.",
      "We believe that the human essential start any successful project.",
      "We believe that the human essential start any successful project.",
      "We believe that the human essential start any successful project."
    ]
  },
  skills: [
    { name: "Business Consultants", percentage: 85 },
    { name: "Client Communication", percentage: 95 }
  ]
};

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function TeamDetails(): React.ReactElement {
  return (
    <main className="w-full bg-[#f8f9fa] font-['Manrope',_sans-serif] min-h-screen">
      
      {/* ════════════════════════════════════════════════════
          1. HERO SECTION (BOXY DESIGN)
      ════════════════════════════════════════════════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] lg:h-[500px] rounded-[32px] md:rounded-[10px] flex items-center justify-center overflow-hidden shadow-sm">
          
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
              Team details
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
              <span className="text-white font-bold">Team details</span>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. PROFILE CONTENT SECTION
      ════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* ── LEFT: IMAGE (STICKY SCROLLING) ── */}
            {/* By applying sticky and top-32, the image follows the scroll until the bottom of the parent container is reached */}
            <div className="w-full lg:w-[40%] flex-shrink-0 lg:sticky lg:top-32 self-start z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full bg-[#e8eceb] rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(34,38,41,0.06)] h-[500px] md:h-[600px] lg:max-h-[calc(100vh-10rem)]">
                  <img 
                    src={TEAM_MEMBER.img} 
                    alt={TEAM_MEMBER.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: DETAILS ── */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[60%] flex flex-col"
            >
              
              {/* Header */}
              <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-[#222629] leading-[1.15] tracking-tight mb-2">
                Hello, I am {TEAM_MEMBER.name}
              </h2>
              <p className="text-[#6B6E70] text-[17px] font-semibold mb-6">
                {TEAM_MEMBER.role}
              </p>
              
              {/* Bio */}
              <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-10 border-b border-[#474B4F]/10 pb-10">
                {TEAM_MEMBER.bio}
              </p>

              {/* Contact Cards */}
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex-1 bg-white p-6 rounded-2xl border border-[#474B4F]/10 shadow-[0_5px_20px_rgba(34,38,41,0.02)]">
                  <p className="text-[13px] font-semibold text-[#6B6E70] mb-1">Email address</p>
                  <a href={`mailto:${TEAM_MEMBER.contact.email}`} className="text-lg font-bold text-[#222629] hover:text-[#86C232] transition-colors break-all sm:break-normal">
                    {TEAM_MEMBER.contact.email}
                  </a>
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl border border-[#474B4F]/10 shadow-[0_5px_20px_rgba(34,38,41,0.02)]">
                  <p className="text-[13px] font-semibold text-[#6B6E70] mb-1">Phone number</p>
                  <a href={`tel:${TEAM_MEMBER.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-[#222629] hover:text-[#86C232] transition-colors flex items-center gap-2">
                    <Phone size={18} className="text-[#86C232] flex-shrink-0" />
                    {TEAM_MEMBER.contact.phone}
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-12">
                {TEAM_MEMBER.social.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={idx} 
                      href={item.href}
                      className="w-11 h-11 rounded-full bg-white border border-[#474B4F]/10 flex items-center justify-center text-[#474B4F] shadow-sm hover:bg-[#86C232] hover:text-white hover:border-[#86C232] hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>

              {/* Work Experience */}
              <div className="mb-14">
                <h3 className="text-3xl font-extrabold text-[#222629] mb-5">Work experience</h3>
                <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-8 whitespace-pre-line">
                  {TEAM_MEMBER.experience.text}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {TEAM_MEMBER.experience.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#86C232] flex-shrink-0 mt-0.5" />
                      <p className="text-[#222629] text-[15px] font-semibold leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Skills */}
              <div>
                <h3 className="text-3xl font-extrabold text-[#222629] mb-5">Professional skills</h3>
                <p className="text-[#6B6E70] text-[15px] leading-[1.8] font-medium mb-8">
                  Our mission is to empowers businesses size to thrive in ses ever changing marketplace We are committed to the delivering exceptionals the strategic ins innovative approaches. Our consulting of our missing
                </p>
                
                <div className="flex flex-col gap-6">
                  {TEAM_MEMBER.skills.map((skill, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-[#222629] text-[17px] font-bold">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#474B4F]/10 rounded-full overflow-hidden relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          className="absolute top-0 left-0 h-full bg-[#86C232] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}