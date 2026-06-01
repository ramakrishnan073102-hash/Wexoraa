"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Home,
  Search,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  day: string;
  month: string;
  image: string;
  slug: string;
}

interface Category {
  name: string;
  count: number;
}

// ─── Constants & Mock Data ────────────────────────────────────────────────────

const POSTS_PER_PAGE = 4;

const allPosts: BlogPost[] = [
  {
    id: 1,
    title: "Innovative Solutions for every Business Success",
    excerpt: "In today's fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. At Wexoraa, we specialize in unlocking your business's full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
    category: "Corporate",
    author: "Ellinien Loma",
    date: "28 DEC 2025",
    day: "28",
    month: "DEC",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80",
    slug: "innovative-solutions-business-success",
  },
  {
    id: 2,
    title: "Harnessing Digital Transformation for Modern Businesses",
    excerpt: "Digital transformation is no longer a buzzword—it's a critical component of survival. We guide businesses through the complex process of modernizing their tech stacks and operational workflows, ensuring a seamless transition into the digital-first economy.",
    category: "Business",
    author: "Ellinien Loma",
    date: "06 NOV 2025",
    day: "06",
    month: "NOV",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    slug: "harnessing-digital-transform-roadmap",
  },
  {
    id: 3,
    title: "Mastering Change Management Lessons for Businesses",
    excerpt: "Change is inevitable, but managing it effectively is a choice. Learn how top-performing organizations navigate structural shifts, overcome employee resistance, and implement lasting operational changes without sacrificing short-term productivity.",
    category: "Consulting",
    author: "Ellinien Loma",
    date: "24 OCT 2025",
    day: "24",
    month: "OCT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80",
    slug: "mastering-change-management",
  },
  {
    id: 4,
    title: "Innovation in action examples of consulting success",
    excerpt: "A strong brand identity is your company's most valuable asset. Discover the psychological principles behind successful modern branding, and how cohesive design strategies translate directly into increased customer loyalty and higher conversion rates.",
    category: "Business",
    author: "Ellinien Loma",
    date: "28 AUG 2025",
    day: "28",
    month: "AUG",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1400&q=80",
    slug: "innovation-consulting-success",
  },
  {
    id: 5,
    title: "Strategic Leadership in a Rapidly Changing World",
    excerpt: "In today's fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. At Wexoraa, we specialize in unlocking your business's full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
    category: "Corporate",
    author: "Ellinien Loma",
    date: "15 SEP 2025",
    day: "15",
    month: "SEP",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80",
    slug: "strategic-leadership-changing-world",
  },
  {
    id: 6,
    title: "Building Resilient Teams for Long-Term Growth",
    excerpt: "In today's fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. At Wexoraa, we specialize in unlocking your business's full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
    category: "Managements",
    author: "Ellinien Loma",
    date: "28 AUG 2025",
    day: "28",
    month: "AUG",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80",
    slug: "building-resilient-teams",
  },
  {
    id: 7,
    title: "Digital Marketing Strategies That Actually Drive Revenue",
    excerpt: "In today's fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. At Wexoraa, we specialize in unlocking your business's full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
    category: "Marketing",
    author: "Ellinien Loma",
    date: "12 JUL 2025",
    day: "12",
    month: "JUL",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    slug: "digital-marketing-strategies",
  },
  {
    id: 8,
    title: "The Future of Consulting in an AI-Driven Economy",
    excerpt: "In today's fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. At Wexoraa, we specialize in unlocking your business's full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
    category: "Consulting",
    author: "Ellinien Loma",
    date: "03 JUN 2025",
    day: "03",
    month: "JUN",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80",
    slug: "future-consulting-ai-economy",
  },
];

const relatedPosts = [
  {
    id: 1,
    title: "Innovative Solutions for ever...",
    date: "28 DEC 2025",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    slug: "innovative-solutions-business-success",
  },
  {
    id: 2,
    title: "Harnessing Digital Transform ...",
    date: "06 NOV 2025",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80",
    slug: "harnessing-digital-transform-roadmap",
  },
  {
    id: 3,
    title: "Mastering Change Management L...",
    date: "24 OCT 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    slug: "mastering-change-management",
  },
];

const categories: Category[] = [
  { name: "Corporate", count: 2 },
  { name: "Business", count: 2 },
  { name: "Consulting", count: 2 },
  { name: "Innovations", count: 1 },
  { name: "Managements", count: 1 },
  { name: "Marketing", count: 1 },
];

const tags = ["Corporate", "Business", "Design", "Marketing", "Strategy"];

// ─── Blog Post Card Component ─────────────────────────────────────────────────

function BlogPostCard({ post }: { post: BlogPost }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="mb-14"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <Link href={`/blogs/${post.slug}`} className="block relative w-full h-[380px] rounded-[24px] overflow-hidden group cursor-pointer mb-6 shadow-sm">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "brightness(0.7) saturate(0.55)" }}
        />
        {/* Teal-green overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(97,137,47,0.30) 0%, rgba(34,38,41,0.38) 100%)",
          }}
        />
        {/* Date badge */}
        <div className="absolute top-6 left-6 rounded-[14px] px-4 py-3 flex flex-col items-center justify-center min-w-[70px] shadow-lg bg-[#222629]/85 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
          <span className="font-black text-3xl leading-none text-white">
            {post.day}
          </span>
          <span className="text-[12px] tracking-widest mt-1 uppercase font-extrabold text-[#86C232]">
            {post.month}
          </span>
        </div>
      </Link>

      {/* Meta row: category pill + author */}
      <div className="flex items-center gap-4 mb-4">
        <Link
          href={`/category/${post.category.toLowerCase()}`}
          className="rounded-full px-5 py-1.5 text-[14px] font-extrabold border transition-all duration-300"
          style={{
            borderColor: hovered ? "#86C232" : "#474B4F",
            color: hovered ? "#ffffff" : "#222629",
            background: hovered ? "#86C232" : "transparent",
          }}
        >
          {post.category}
        </Link>
        <span className="text-[15px] font-bold text-[#6B6E70]">
          By{" "}
          <Link href={`/author/${post.author.toLowerCase().replace(" ", "-")}`} className={`transition-colors duration-300 ${hovered ? "text-[#86C232]" : "text-[#222629]"}`}>
            {post.author}
          </Link>
        </span>
      </div>

      {/* Title */}
      <h2 className={`text-[1.8rem] md:text-[2.2rem] font-extrabold leading-[1.25] tracking-tight mb-4 transition-colors duration-300 ${hovered ? "text-[#86C232]" : "text-[#222629]"}`}>
        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
      </h2>

      {/* Excerpt */}
      <p className="text-[16px] font-medium leading-[1.85] text-[#6B6E70] mb-6">
        {post.excerpt}
      </p>

      {/* Read More Button with Horizontal Hover Animation */}
      <Link
        href={`/blogs/${post.slug}`}
        className="inline-flex items-center gap-3 font-extrabold text-[15px] group/btn transition-colors duration-300"
      >
        <span className={`transition-colors duration-300 ${hovered ? "text-[#86C232]" : "text-[#222629]"}`}>
          Read More
        </span>
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
          style={{ background: hovered ? "#86C232" : "#222629" }}
        >
          <ArrowRight 
            size={18} 
            strokeWidth={2.5} 
            className="text-white transform -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300 ease-out" 
          />
        </span>
      </Link>
    </article>
  );
}

// ─── Pagination Component ─────────────────────────────────────────────────────

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center gap-3 mt-8 mb-16 pt-8 border-t border-[#474B4F]/10">
      <button
        onClick={() => {
          if (currentPage > 1) onPageChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group border-[1.5px] border-[#474B4F]/30 bg-transparent hover:bg-[#86C232] hover:border-[#86C232]"
        aria-label="Previous"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222629" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-extrabold transition-all duration-300 shadow-sm ${
              isActive
                ? "bg-[#86C232] text-white border-[1.5px] border-[#86C232]"
                : "bg-white text-[#222629] border-[1.5px] border-[#474B4F]/30 hover:bg-[#86C232] hover:text-white hover:border-[#86C232]"
            }`}
          >
            {String(page).padStart(2, "0")}
          </button>
        );
      })}

      <button
        onClick={() => {
          if (currentPage < totalPages) onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group border-[1.5px] border-[#474B4F]/30 bg-transparent hover:bg-[#86C232] hover:border-[#86C232]"
        aria-label="Next"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222629" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

// ─── Sidebar Component ────────────────────────────────────────────────────────

function Sidebar({
  searchQuery,
  setSearchQuery,
  onCategoryFilter,
  activeCategory,
}: {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  onCategoryFilter: (cat: string) => void;
  activeCategory: string;
}) {
  return (
    <aside className="w-full space-y-8 lg:sticky lg:top-8">
      {/* Search Widget */}
      <div className="bg-[#eef0ee] rounded-[24px] p-8 shadow-sm">
        <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-6">
          Search here
        </h3>
        <div className="flex items-center rounded-[12px] overflow-hidden border border-transparent bg-white focus-within:border-[#86C232] transition-colors shadow-sm">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-5 py-4 text-[15px] outline-none bg-transparent text-[#222629] placeholder-[#6B6E70] font-medium"
          />
          <button className="px-5 py-4 transition-colors text-white bg-[#222629] hover:bg-[#86C232]">
            <Search size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Related Posts Widget */}
      <div className="bg-[#eef0ee] rounded-[24px] p-8 shadow-sm">
        <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-8">
          Related post
        </h3>
        <div className="space-y-6">
          {relatedPosts.map((rp) => (
            <Link
              key={rp.id}
              href={`/blogs/${rp.slug}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-[85px] h-[85px] rounded-[14px] overflow-hidden flex-shrink-0 shadow-sm border border-white/50">
                <img
                  src={rp.image}
                  alt={rp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: "saturate(0.6) brightness(0.85)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[16px] font-extrabold leading-snug text-[#222629] transition-colors duration-300 group-hover:text-[#86C232] line-clamp-2">
                  {rp.title}
                </p>
                <p className="text-[12px] font-bold tracking-wider uppercase text-[#6B6E70]">
                  {rp.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-[#eef0ee] rounded-[24px] p-8 shadow-sm">
        <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-6">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onCategoryFilter(isActive ? "" : cat.name)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-[12px] text-[15px] font-extrabold transition-all duration-300 shadow-sm border border-transparent group ${
                  isActive ? "bg-[#86C232] text-white" : "bg-white text-[#222629] hover:bg-[#86C232] hover:text-white"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[13px] font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-[#6B6E70] group-hover:text-white"}`}>
                  ({String(cat.count).padStart(2, "0")})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-[#eef0ee] rounded-[24px] p-8 shadow-sm">
        <h3 className="text-[1.5rem] font-extrabold text-[#222629] mb-6">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-5 py-2.5 rounded-[10px] bg-white border border-transparent text-[14px] font-extrabold text-[#6B6E70] transition-all duration-300 hover:bg-[#86C232] hover:text-white shadow-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function Readblog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    return allPosts.filter((p) => {
      const matchSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.author.toLowerCase().includes(query);
      const matchCategory = !activeCategory || p.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));

  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    return filtered.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);
  }, [safePage, filtered]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (v: string) => {
    setSearchQuery(v);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen pb-20 font-['Manrope',_sans-serif] bg-[#f8f9f8]">
      
      {/* ── Hero Banner ── */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="relative w-full max-w-[1400px] mx-auto h-[320px] md:h-[420px] lg:h-[480px] rounded-[32px] md:rounded-[24px] overflow-hidden flex items-center justify-center shadow-sm">
          {/* BG image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')",
              filter: "brightness(0.6) saturate(0.5)" 
            }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ 
              background: "linear-gradient(120deg, rgba(34,38,41,0.95) 0%, rgba(34,38,41,0.85) 55%, rgba(97,137,47,0.70) 100%)" 
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight leading-tight text-white mb-6"
            >
              Read Blog
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-1.5 sm:gap-2 px-6 py-3 rounded-full text-[14px] sm:text-[15px] font-medium"
              style={{ background: "rgba(34,38,41,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Link href="/" className="flex items-center gap-1.5 text-white/80 hover:text-[#86C232] transition-colors duration-300">
                <Home size={15} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={15} className="text-[#6B6E70]" />
              <span className="text-white font-bold">Blogs</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Grid ── */}
      <section className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column: Posts List */}
          <div className="lg:col-span-8 min-w-0">
            {paginatedPosts.length > 0 ? (
              <>
                <div className="flex flex-col">
                  {paginatedPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
                <Pagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="py-24 px-6 text-center bg-white rounded-[24px] shadow-sm border border-[#eef0ee]">
                <p className="text-[1.25rem] font-extrabold text-[#6B6E70]">
                  No posts found{searchQuery ? ` for "` : ""}<span className="text-[#86C232]">{searchQuery}</span>{searchQuery ? `"` : ""}.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("");
                  }}
                  className="mt-8 px-8 py-3.5 bg-[#222629] text-white rounded-full font-extrabold text-[15px] hover:bg-[#86C232] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar
              searchQuery={searchQuery}
              setSearchQuery={handleSearch}
              onCategoryFilter={handleCategoryFilter}
              activeCategory={activeCategory}
            />
          </div>

        </div>
      </section>
    </main>
  );
}