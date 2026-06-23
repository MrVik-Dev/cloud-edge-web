"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container mx-auto  px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-primary/10 bg-gradient-to-br from-primary to-[#7350e8] px-8 py-16 text-center shadow-[0_20px_60px_rgba(134,94,245,.18)] md:px-16">
          {/* Blur Effects */}
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready to transform your career?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-white/80">
              Browse all 10 SAP and Salesforce courses, book a free demo
              session, or message us on WhatsApp for personalised guidance.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-white
                  px-7 py-4
                  text-sm font-bold text-primary
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Browse All Courses
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[#25D366]
                  px-7 py-4
                  text-sm font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}