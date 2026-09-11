"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { CalendarDays, ChevronLeft, ChevronRight, Loader2, Search, ArrowRight, Clock, Tag, MessageCircle, Sparkles } from "lucide-react";
import moment from "moment";
import placeholder from "@/public/images/placeholder.jpg";
import { useRouter } from "next/navigation";
import { IBlogs, IResponse } from "@/types";
import { MotionDiv } from "@/components/ui/MotionElements";
import ResilientImage from "@/components/ui/ResilientImage";
import { getWhatsAppLink } from "@/utils";
import Link from "next/link";

interface IProps {
  blogs: IResponse;
}

const CATEGORIES = [
  "All Articles",
  "Salesforce",
  "SAP FICO",
  "SAP MM",
  "Career Tips",
  "Certifications"
];

const BlogWithSidebar: React.FC<IProps> = ({ blogs: blogData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const blogList = blogData?.data || [];

  // Strip HTML tags for clean card excerpt display
  const truncateHTML = (html: any, limit = 160) => {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  // Client-side search and category filtering
  const filteredBlogs = useMemo(() => {
    return blogList.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Articles" ||
        post.title?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        post.description?.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [blogList, searchQuery, selectedCategory]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage) || 1;
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* LEFT COLUMN: MAIN BLOG POSTS (8 Columns) */}
        <div className="lg:col-span-8 space-y-8">

          {/* SEARCH & CATEGORY FILTER BAR */}
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[24px] p-4 shadow-2xs space-y-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles by topic, course name, or keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-medium"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`text-xs font-extrabold px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* EMPTY STATE */}
          {paginatedBlogs.length === 0 && (
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[32px] p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-xl">
                🔍
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-bricolage-grotesque">
                No Articles Found
              </h3>
              <p className="text-slate-500 text-sm font-medium max-w-sm mx-auto">
                We couldn't find any articles matching "{searchQuery}". Try searching for Salesforce, SAP, or Career guidance.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Articles");
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-4 py-2 rounded-full transition-colors"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

          {/* BLOG CARDS LOOP */}
          {paginatedBlogs.map((post, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={post.id}
              className="group bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 flex flex-col sm:flex-row items-stretch"
            >
              {/* Card Image Banner */}
              <div 
                onClick={() => router.push(`/blogs/${post.url_slug}`)}
                className="cursor-pointer relative sm:w-2/5 min-h-[220px] sm:min-h-[280px] overflow-hidden shrink-0 bg-slate-100"
              >
                <ResilientImage
                  src={
                    post?.cover_image_url && post.cover_image_url.trim() !== ""
                      ? post.cover_image_url
                      : post?.media_url && post.media_url.trim() !== ""
                      ? post.media_url
                      : placeholder
                  }
                  fallbackSrc={placeholder}
                  alt={post.title || "Cloud Edge Article"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                />

                {/* Overlaid Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full shadow-xs">
                    {post.title?.toLowerCase().includes("sap") ? "SAP" : post.title?.toLowerCase().includes("salesforce") ? "Salesforce" : "Career Guide"}
                  </span>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3 text-slate-500 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-indigo-600" />
                      <span>{moment(post.created_at).format("MMM DD, YYYY")}</span>
                    </div>

                    <span>•</span>

                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-indigo-600" />
                      <span>4 min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 
                    onClick={() => router.push(`/blogs/${post.url_slug}`)} 
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 font-bricolage-grotesque leading-tight cursor-pointer group-hover:text-indigo-600 transition-colors"
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p 
                    className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: truncateHTML(post.description, 170),
                    }} 
                  />
                </div>

                {/* Read Article Button */}
                <div className="pt-2">
                  <Link
                    href={`/blogs/${post.url_slug}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 px-4 py-2 rounded-full transition-all duration-200 group-hover:translate-x-1"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 py-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-slate-200/80 bg-white flex items-center justify-center disabled:opacity-40 hover:bg-slate-100 transition cursor-pointer"
              >
                <ChevronLeft size={18} className="text-slate-800" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-bold text-xs transition cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                        : "bg-white border border-slate-200/80 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-slate-200/80 bg-white flex items-center justify-center disabled:opacity-40 hover:bg-slate-100 transition cursor-pointer"
              >
                <ChevronRight size={18} className="text-slate-800" />
              </button>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: SIDEBAR (4 Columns) */}
        <aside className="lg:col-span-4 space-y-6">

          {/* STICKY CAREER ADVISORY CTA CARD */}
          <div className="sticky top-24 space-y-6">
            
            <div className="rounded-[28px] border border-slate-800 bg-slate-950 p-7 text-white relative overflow-hidden shadow-2xl space-y-5">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-indigo-600/30 filter blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-[10px] text-indigo-200 font-extrabold uppercase tracking-wider">Cloud Edge Advisory</span>
                </div>

                <h3 className="font-bricolage-grotesque text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  Start Your Journey with Expert Guidance
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  Connect with our career experts to explore SAP & Salesforce courses, admissions, and global job opportunities.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like course advice.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-emerald-500/25"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Advisor</span>
                  </a>

                  <Link
                    href="/contact-us"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-indigo-500/25"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* POPULAR TOPICS CARD */}
            <div className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold font-bricolage-grotesque text-base">
                <Tag className="w-4 h-4 text-indigo-600" />
                <span>Popular Learning Topics</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["SAP FICO", "Salesforce Admin", "SAP MM", "S/4HANA", "PD1 Developer", "Career Placement", "Certification Prep"].map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSearchQuery(topic);
                      setCurrentPage(1);
                    }}
                    className="text-xs font-bold bg-slate-50 hover:bg-indigo-50 border border-slate-200/80 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    #{topic}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </aside>

      </div>
    </section>
  );
};

export default BlogWithSidebar;