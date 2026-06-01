"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, Home, Search } from "lucide-react";

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
  pageRoute: string;
}

interface Category {
  name: string;
  count: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const POSTS_PER_PAGE = 3;

// ─── All 9 Posts ──────────────────────────────────────────────────────────────

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
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage1",
    pageRoute: "/blogpage1",
  },
  {
    id: 2,
    title: "Harnessing Digital Transform a Roadmap Businesses",
    excerpt: "Digital transformation is no longer a buzzword—it's a critical component of survival. We guide businesses through the complex process of modernizing their tech stacks and operational workflows, ensuring a seamless transition into the digital-first economy.",
    category: "Business",
    author: "Ellinien Loma",
    date: "06 NOV 2025",
    day: "06",
    month: "NOV",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage2",
    pageRoute: "/blogpage2",
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
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage3",
    pageRoute: "/blogpage3",
  },
  {
    id: 4,
    title: "Innovation in Action: Examples of Consulting Success",
    excerpt: "Explore real-world case studies where innovative consulting strategies transformed struggling enterprises into market leaders. These stories reveal the frameworks and thinking patterns that separate successful transformations from failed ones.",
    category: "Business",
    author: "Ellinien Loma",
    date: "28 AUG 2025",
    day: "28",
    month: "AUG",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage4",
    pageRoute: "/blogpage4",
  },
  {
    id: 5,
    title: "Strategic Leadership in a Rapidly Changing World",
    excerpt: "Navigating corporate transitions requires a delicate balance of decisive action and empathetic leadership. We explore proven methodologies that ease organizational shifts and ensure your workforce remains aligned with long-term strategic goals.",
    category: "Corporate",
    author: "Ellinien Loma",
    date: "15 SEP 2025",
    day: "15",
    month: "SEP",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage5",
    pageRoute: "/blogpage5",
  },
  {
    id: 6,
    title: "Building Resilient Teams for Long-Term Growth",
    excerpt: "A resilient team is the foundation of sustainable business growth. Discover the talent frameworks, communication strategies, and leadership habits that help organizations build teams capable of thriving through disruption and uncertainty.",
    category: "Managements",
    author: "Ellinien Loma",
    date: "28 AUG 2025",
    day: "28",
    month: "AUG",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage6",
    pageRoute: "/blogpage6",
  },
  {
    id: 7,
    title: "Digital Marketing Strategies That Actually Drive Revenue",
    excerpt: "In a saturated digital landscape, not all marketing strategies are created equal. We dissect the data-backed approaches that separate high-performing campaigns from wasted ad spend, helping you connect with customers at every stage of the funnel.",
    category: "Marketing",
    author: "Ellinien Loma",
    date: "12 JUL 2025",
    day: "12",
    month: "JUL",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage7",
    pageRoute: "/blogpage7",
  },
  {
    id: 8,
    title: "The Future of Consulting in an AI-Driven Economy",
    excerpt: "Artificial intelligence is reshaping the consulting industry at an unprecedented pace. Explore how forward-thinking firms are integrating AI tools to deliver faster insights, more accurate forecasts, and higher-value outcomes for their clients.",
    category: "Consulting",
    author: "Ellinien Loma",
    date: "03 JUN 2025",
    day: "03",
    month: "JUN",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage8",
    pageRoute: "/blogpage8",
  },
  {
    id: 9,
    title: "Corporate Strategy: Navigating Global Market Shifts",
    excerpt: "Global markets are evolving faster than ever before. From geopolitical disruptions to emerging-market opportunities, we provide the strategic roadmap businesses need to position themselves for profitable growth in an increasingly complex world.",
    category: "Corporate",
    author: "Ellinien Loma",
    date: "14 APR 2025",
    day: "14",
    month: "APR",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    slug: "blogpage9",
    pageRoute: "/blogpage9",
  },
];

const relatedPosts = [
  {
    id: 1,
    title: "Innovative Solutions for ever..",
    date: "28 DEC 2025",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=150&q=80",
    slug: "blogpage1",
  },
  {
    id: 2,
    title: "Harnessing Digital Transform ..",
    date: "06 NOV 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80",
    slug: "blogpage2",
  },
  {
    id: 3,
    title: "Mastering Change Management L..",
    date: "24 OCT 2025",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=150&q=80",
    slug: "blogpage3",
  },
];

const categories: Category[] = [
  { name: "Corporate",   count: 3 },
  { name: "Business",    count: 2 },
  { name: "Consulting",  count: 2 },
  { name: "Innovations", count: 1 },
  { name: "Managements", count: 1 },
  { name: "Marketing",   count: 1 },
];

const tags = ["Corporate", "Business", "Design", "Marketing", "Strategy"];

// ─── Blog Post Card ───────────────────────────────────────────────────────────
// Every hover is INDIVIDUAL — each element reacts only when YOU hover THAT element

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  // Separate hover state per interactive element
  const [imgH,  setImgH]  = useState(false);
  const [catH,  setCatH]  = useState(false);
  const [titH,  setTitH]  = useState(false);
  const [rmH,   setRmH]   = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="mb-14 flex flex-col"
    >
      {/* ── Image — own hover (zoom only) ── */}
      <Link
        href={post.pageRoute}
        onMouseEnter={() => setImgH(true)}
        onMouseLeave={() => setImgH(false)}
        className="block relative w-full rounded-[24px] overflow-hidden mb-7 shadow-sm"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          style={{
            transform: imgH ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.7s ease",
            filter: "brightness(0.72) saturate(0.55)",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(97,137,47,0.25) 0%, rgba(34,38,41,0.32) 100%)" }} />
        {/* Date badge */}
        <div
          className="absolute top-5 left-5 rounded-[12px] flex flex-col items-center justify-center shadow-lg"
          style={{ background: "rgba(34,38,41,0.90)", backdropFilter: "blur(8px)", padding: "0.5rem 0.9rem", minWidth: "60px" }}
        >
          <span className="font-black text-white leading-none" style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)" }}>{post.day}</span>
          <span className="font-extrabold text-[#86C232] uppercase tracking-widest mt-0.5" style={{ fontSize: "0.6rem", letterSpacing: "0.14em" }}>{post.month}</span>
        </div>
      </Link>

      {/* ── Meta row ── */}
      <div className="flex items-center gap-3 flex-wrap mb-3">
        {/* Category pill — own hover */}
        <span
          onMouseEnter={() => setCatH(true)}
          onMouseLeave={() => setCatH(false)}
          className="rounded-full border font-extrabold cursor-pointer transition-all duration-300"
          style={{
            fontSize: "0.75rem",
            padding: "0.28rem 0.9rem",
            borderColor:  catH ? "#86C232" : "#474B4F",
            color:        catH ? "#ffffff" : "#474B4F",
            background:   catH ? "#86C232" : "transparent",
            letterSpacing: "0.03em",
          }}
        >
          {post.category}
        </span>

        {/* Author — always static, no hover */}
        <span className="font-medium text-[#6B6E70]" style={{ fontSize: "0.82rem" }}>
          By <span className="font-extrabold text-[#222629]">{post.author}</span>
        </span>

        {/* Date — pushed right */}
        <span className="font-medium text-[#6B6E70] ml-auto" style={{ fontSize: "0.75rem" }}>
          {post.date}
        </span>
      </div>

      {/* ── Title — own hover: green + underline ── */}
      <h2 className="font-black leading-tight mb-5" style={{ fontSize: "clamp(1.2rem,2.8vw,1.6rem)" }}>
        <Link
          href={post.pageRoute}
          onMouseEnter={() => setTitH(true)}
          onMouseLeave={() => setTitH(false)}
          style={{
            color:          titH ? "#86C232" : "#222629",
            textDecoration: titH ? "underline" : "none",
            textDecorationColor: "#86C232",
            textUnderlineOffset: "4px",
            transition: "color 0.25s",
          }}
        >
          {post.title}
        </Link>
      </h2>

      {/* ── Excerpt — static ── */}
      <p className="font-medium leading-relaxed mb-7 text-[#6B6E70] line-clamp-3" style={{ fontSize: "0.95rem" }}>
        {post.excerpt}
      </p>

      {/* ── Read More — own hover: text turns green + arrow diagonal→horizontal ── */}
      <Link
        href={post.pageRoute}
        onMouseEnter={() => setRmH(true)}
        onMouseLeave={() => setRmH(false)}
        className="inline-flex items-center gap-3 w-fit"
        style={{ textDecoration: "none" }}
      >
        <span
          className="font-extrabold transition-colors duration-300"
          style={{ fontSize: "0.875rem", color: rmH ? "#86C232" : "#222629" }}
        >
          Read More
        </span>
        <span
          className="rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
          style={{
            width: "2.4rem",
            height: "2.4rem",
            background: rmH ? "#86C232" : "#222629",
          }}
        >
          {/* Default: diagonal ↗ arrow. On hover: horizontal → arrow */}
          <ArrowRight
            size={15}
            strokeWidth={2.6}
            color="#ffffff"
            style={{
              transform: rmH ? "rotate(0deg)" : "rotate(-45deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </span>
      </Link>

      {/* Divider */}
      <div className="mt-12" style={{ borderBottom: "1.5px solid #EEF2EC" }} />
    </motion.article>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────
// Every button has its OWN hover state

function PageNumberBtn({ page, isActive, onClick }: { page: number; isActive: boolean; onClick: () => void }) {
  const [h, setH] = useState(false);
  const lit = isActive || h;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold transition-all duration-300 shadow-sm border"
      style={{
        fontSize: "0.85rem",
        background:   lit ? (isActive ? "#222629" : "#86C232") : "#ffffff",
        color:        lit ? "#ffffff" : "#6B6E70",
        borderColor:  lit ? (isActive ? "#222629" : "#86C232") : "#e0e3e0",
        cursor: "pointer",
      }}
    >
      {String(page).padStart(2, "0")}
    </button>
  );
}

function ArrowNavBtn({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      disabled={disabled}
      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border"
      style={{
        background:  h && !disabled ? "#86C232" : "#ffffff",
        borderColor: h && !disabled ? "#86C232" : "#e0e3e0",
        color:       h && !disabled ? "#ffffff"  : "#222629",
        opacity:  disabled ? 0 : 1,
        pointerEvents: disabled ? "none" : "auto",
        cursor: "pointer",
      }}
    >
      {dir === "prev"
        ? <ArrowLeft  size={20} strokeWidth={2.5} />
        : <ArrowRight size={20} strokeWidth={2.5} />}
    </button>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number; totalPages: number; onPageChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center gap-3 mt-4 mb-16 flex-wrap">
      <ArrowNavBtn dir="prev" disabled={currentPage === 1} onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} />
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <PageNumberBtn key={p} page={p} isActive={p === currentPage} onClick={() => onPageChange(p)} />
      ))}
      <ArrowNavBtn dir="next" disabled={currentPage === totalPages} onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} />
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  searchQuery, setSearchQuery, onCategoryFilter, activeCategory,
}: {
  searchQuery: string; setSearchQuery: (v: string) => void;
  onCategoryFilter: (cat: string) => void; activeCategory: string;
}) {
  return (
    <aside className="w-full space-y-6 lg:sticky lg:top-8">

      {/* ── Search ── */}
      <div className="rounded-[20px] p-6 shadow-sm" style={{ background: "#eef0ee" }}>
        <h3 className="font-black text-[#222629] mb-5" style={{ fontSize: "1.1rem" }}>Search here</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white font-semibold px-5 py-3.5 rounded-[12px] outline-none pr-14 shadow-sm border border-transparent focus:border-[#86C232] transition-all text-[#222629]"
            style={{ fontSize: "0.85rem" }}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-[8px] flex items-center justify-center text-[#222629] hover:bg-[#86C232] hover:text-white transition-colors border border-gray-100">
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── Related Posts ── */}
      <div className="rounded-[20px] p-6 shadow-sm" style={{ background: "#eef0ee" }}>
        <h3 className="font-black text-[#222629] mb-5" style={{ fontSize: "1.1rem" }}>Related post</h3>
        <div className="flex flex-col gap-4">
          {relatedPosts.map(rp => (
            <Link key={rp.id} href={`/${rp.slug}`} className="flex items-center gap-4 group">
              <div className="rounded-[10px] overflow-hidden flex-shrink-0 shadow-sm" style={{ width: "76px", height: "68px" }}>
                <img
                  src={rp.image} alt={rp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-[#222629] leading-snug group-hover:text-[#86C232] transition-colors duration-300" style={{ fontSize: "0.82rem" }}>
                  {rp.title}
                </h4>
                <span className="font-bold text-[#6B6E70] uppercase tracking-wider" style={{ fontSize: "0.68rem" }}>
                  {rp.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Categories ── */}
      <div className="rounded-[20px] p-6 shadow-sm" style={{ background: "#eef0ee" }}>
        <h3 className="font-black text-[#222629] mb-5" style={{ fontSize: "1.1rem" }}>Categories</h3>
        <ul className="flex flex-col gap-2.5">
          {categories.map(cat => {
            const isActive = activeCategory === cat.name;
            return (
              <li key={cat.name}>
                <button
                  onClick={() => onCategoryFilter(isActive ? "" : cat.name)}
                  className="w-full flex items-center justify-between px-5 py-3 rounded-[12px] font-extrabold transition-all duration-300 shadow-sm border border-transparent group"
                  style={{
                    fontSize: "0.85rem",
                    background: isActive ? "#86C232" : "#ffffff",
                    color:      isActive ? "#ffffff" : "#222629",
                  }}
                  onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = "#86C232"; (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; } }}
                  onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = "#ffffff"; (e.currentTarget as HTMLButtonElement).style.color = "#222629"; } }}
                >
                  <span>{cat.name}</span>
                  <span className="font-bold opacity-70" style={{ fontSize: "0.72rem" }}>
                    ({String(cat.count).padStart(2, "0")})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Tags ── */}
      <div className="rounded-[20px] p-6 shadow-sm" style={{ background: "#eef0ee" }}>
        <h3 className="font-black text-[#222629] mb-5" style={{ fontSize: "1.1rem" }}>Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              className="font-extrabold rounded-[8px] transition-all duration-300 shadow-sm border border-transparent bg-white text-[#6B6E70] hover:bg-[#86C232] hover:text-white"
              style={{ fontSize: "0.78rem", padding: "0.35rem 0.85rem" }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Blogread() {
  const [currentPage,    setCurrentPage]    = useState(1);
  const [searchQuery,    setSearchQuery]    = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allPosts.filter(p => {
      const ms = !q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.author.toLowerCase().includes(q);
      const mc = !activeCategory || p.category === activeCategory;
      return ms && mc;
    });
  }, [searchQuery, activeCategory]);

  const totalPages   = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage     = Math.min(currentPage, totalPages);
  const paginated    = useMemo(() => filtered.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE), [safePage, filtered]);

  const handlePageChange    = (p: number) => { setCurrentPage(p); window.scrollTo({ top: 400, behavior: "smooth" }); };
  const handleSearch        = (v: string) => { setSearchQuery(v);    setCurrentPage(1); };
  const handleCategoryFilter = (c: string) => { setActiveCategory(c); setCurrentPage(1); };

  return (
    <main className="w-full bg-[#f8f9f8] font-['Manrope',_sans-serif] min-h-screen pb-20 md:pb-28">

      {/* ════════ HERO ════════ */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        <div className="relative w-full max-w-[1400px] mx-auto h-[280px] md:h-[380px] lg:h-[440px] rounded-[28px] flex items-center justify-center overflow-hidden shadow-sm">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(120deg, rgba(34,38,41,0.92) 0%, rgba(34,38,41,0.80) 50%, rgba(97,137,47,0.65) 100%)" }} />
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-black text-white mb-5 tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              Read Blog
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex items-center gap-2 text-[14px] font-medium text-white/80 px-5 py-2.5 rounded-full border border-white/10 w-fit"
              style={{ background: "rgba(34,38,41,0.5)", backdropFilter: "blur(12px)" }}
            >
              <Link href="/" className="flex items-center gap-1.5 hover:text-[#86C232] transition-colors duration-300 font-bold text-white/80">
                <Home size={14} className="text-[#86C232]" /> Home
              </Link>
              <ChevronRight size={14} className="text-[#6B6E70]" />
              <span className="text-white font-extrabold">Blogs</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ CONTENT ════════ */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* ── Posts column ── */}
          <div className="lg:col-span-8 min-w-0">
            <AnimatePresence mode="wait">
              {paginated.length > 0 ? (
                <motion.div key={`page-${safePage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                  {paginated.map((post, i) => (
                    <BlogPostCard key={post.id} post={post} index={i} />
                  ))}
                  <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={handlePageChange} />
                </motion.div>
              ) : (
                <motion.div key="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="py-24 px-6 text-center bg-white rounded-[24px] shadow-sm flex flex-col items-center">
                  <p className="text-2xl font-black text-[#222629] mb-3">No posts found</p>
                  <p className="text-[#6B6E70] font-medium max-w-md mx-auto" style={{ fontSize: "0.95rem" }}>
                    We couldn't find posts matching{" "}
                    {searchQuery && <span className="text-[#86C232] font-bold">"{searchQuery}"</span>}
                    {activeCategory && <span className="text-[#86C232] font-bold"> in {activeCategory}</span>}.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(""); setActiveCategory(""); }}
                    className="mt-8 px-8 py-3.5 bg-[#222629] text-white rounded-full font-extrabold hover:bg-[#86C232] transition-colors shadow-md"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Sidebar column ── */}
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