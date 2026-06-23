"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Star,
} from "lucide-react";

export default function Hero() {
  const services = [
    {
      title: "Live Online Training",
      color: "bg-primary",
      href: "#live-training",
    },
    {
      title: "Job Support Programme",
      color: "bg-teal-500",
      href: "#job-support",
    },
    {
      title: "Career Placement",
      color: "bg-green-500",
      href: "#placement",
    },
    {
      title: "Corporate L&D",
      color: "bg-purple-500",
      href: "#corporate",
    },
    {
      title: "1-to-1 Mentoring",
      color: "bg-amber-500",
      href: "#mentoring",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#efeefc] py-14 lg:py-20">
      {/* Background Blur */}
      <div className="absolute -left-32 -top-40 h-[640px] w-[640px] rounded-full bg-primary opacity-10 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 h-[520px] w-[520px] rounded-full bg-[#5856d6] opacity-10 blur-[110px]" />
      <div className="absolute right-[28%] top-1/2 h-[380px] w-[380px] rounded-full bg-green-500 opacity-10 blur-[100px]" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(134,94,245,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto container mx-auto  px-6">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs mb-4 lg:mb-0 md:mt-16 lg:mt-10 text-[#86868b]">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>

          <ChevronRight size={12} />

          <span>Services</span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_390px]">
          {/* Left Side */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-primary">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Now Enrolling — Next Batch Starting Soon
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#1d1d1f] md:text-7xl">
              Training that
              <br />
              builds <span className="text-[#86868b]">real</span>
              <br />
              careers.
            </h1>

            <p className="mb-8 max-w-xl text-[15px] leading-8 text-[#6e6e73]">
              Expert-led SAP and Salesforce training, job support, and
              placement — everything you need to break into or advance in ERP.
              One provider, end to end.
            </p>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-3">
              {[
                "Est. 2019 — London & Ahmedabad",
                "CPD Accredited",
                "SAP & Salesforce Aligned",
                "0% EMI Available",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-[#6e6e73]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="rounded-full bg-primary px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Browse All Courses →
              </Link>

              <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <MessageCircle size={16} />
                Talk to an Advisor
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_10px_40px_rgba(134,94,245,.08)]">
            <h3 className="mb-1 text-lg font-bold text-[#1d1d1f]">
              Our Service Areas
            </h3>

            <p className="mb-6 text-sm text-[#6e6e73]">
              From your first course to your first job — and beyond
            </p>

            <a
              href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
              target="_blank"
              className="mb-5 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:opacity-90"
            >
              <MessageCircle size={15} />
              Chat with an Advisor
            </a>

            <div className="mb-4 text-center text-[11px] uppercase tracking-widest text-[#86868b]">
              or jump to a service
            </div>

            {/* Services */}
            <div className="space-y-2">
              {services.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#fafafa] px-4 py-3 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                  />

                  <span className="flex-1 text-sm font-semibold text-[#1d1d1f]">
                    {item.title}
                  </span>

                  <ArrowUpRight
                    className="text-primary/50"
                    size={16}
                  />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-black/10 pt-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#1d1d1f]">
                  5,800<span className="text-[#86868b]">+</span>
                </h4>

                <p className="mt-1 text-xs text-[#86868b]">
                  Trained
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#1d1d1f]">
                  94<span className="text-[#86868b]">%</span>
                </h4>

                <p className="mt-1 text-xs text-[#86868b]">
                  Placed
                </p>
              </div>

              <div className="text-center">
                <h4 className="flex items-center justify-center gap-1 text-2xl font-bold text-[#1d1d1f]">
                  4.8
                  <Star
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                </h4>

                <p className="mt-1 text-xs text-[#86868b]">
                  Rated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}