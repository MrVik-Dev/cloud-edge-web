"use client";

import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container mx-auto  px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-black/10 bg-white px-8 py-16 shadow-[0_20px_60px_rgba(134,94,245,.08)] md:px-16">
          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#5856d6]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10">
              <Mail className="text-primary" size={28} />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
              Subscribe To Our Newsletter
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#6e6e73]">
              Get the latest courses, learning tips, and updates delivered
              straight to your inbox.
            </p>

            {/* Form */}
            <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  h-14 flex-1
                  rounded-full
                  border border-black/10
                  bg-[#fafafa]
                  px-6
                  text-sm text-[#1d1d1f]
                  outline-none
                  transition-all duration-300
                  placeholder:text-[#86868b]
                  focus:border-primary/30
                  focus:bg-white
                  focus:shadow-[0_0_0_5px_rgba(134,94,245,.08)]
                "
              />

              <button
                type="submit"
                className="
                  h-14
                  rounded-full
                  bg-primary
                  px-8
                  text-sm font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(134,94,245,.2)]
                "
              >
                Subscribe Now
              </button>
            </form>

            {/* Bottom Text */}
            <p className="mt-5 text-xs text-[#86868b]">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}