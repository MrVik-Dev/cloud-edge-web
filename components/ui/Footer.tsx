"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import mailImg from "@/public/icons/mail.svg"
import logo from "@/public/logo-white.svg"
import calendar from "@/public/icons/calendar-white.svg"
import clock from "@/public/icons/clock.svg"
import insta from "@/public/icons/insta.svg"
import linkedin from "@/public/icons/linkedin.svg"
import facebook from "@/public/icons/facebook.svg"
import whatsapp from "@/public/icons/whatsapp.svg"
import { usePathname } from "next/navigation";
import heartIcon from "@/public/icons/heart.svg"
import { getWhatsAppLink } from "@/utils";

import {
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  return (
    <footer className="bg-[#07042F] py-10 sm:py-14 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
          <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* LEFT */}
              <div className="max-w-[420px]">
                {/* Toggle Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={() => setEnabled(!enabled)}
                      className="peer sr-only"
                    />

                    <div className="h-5 w-9 rounded-full bg-white/20 transition-colors duration-300 peer-checked:bg-[#5E4AE3]" />

                    <div className="absolute left-[2px] top-[2px] h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-4" />
                  </label>

                  <span className="text-xs font-medium text-white">
                    Stay Updated
                  </span>
                </div>

                <h2 className="mt-6 text-[36px] leading-[110%] sm:text-[52px] font-medium tracking-[-1.5px]">
                  Subscribe To
                  <br />
                  Our Newsletter
                </h2>
              </div>

              {/* RIGHT */}
              <div className="w-full max-w-[470px]">
                <p className="text-sm leading-6 text-white/70 mb-5">
                  Subscribe to get the latest courses, learning tips, and updates delivered to your inbox.
                </p>

                <div
                  className="flex items-center gap-2 rounded-full border border-white/10 px-2 py-2"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
                    boxShadow:
                      "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
                  }}
                >
                  {/* Mail Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    <Image src={mailImg} alt="mail" className=" w-5 h-5" />
                  </div>

                  {/* Input */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />

                  {/* Button */}
                  <button className="flex items-center gap-2 rounded-full bg-[#6C5CFF] hover:bg-[#5b4df2] transition-all px-5 py-3 text-sm font-medium whitespace-nowrap">
                    Subscribe Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 h-px w-full bg-white/10" />

            {/* FOOTER LINKS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* LOGO + SOCIAL */}
              <div>
                {/* Replace with your logo */}
                <div>
                  <Image src={logo} alt="Cloud Edge" className=" w-56 h-10" />
                </div>

                <p className="mt-5 text-sm leading-6 text-white max-w-[260px]">
                  Your journey to smarter learning starts here.
                </p>

                <div className="mt-8">
                  <h4 className="text-sm font-medium mb-4">Social Media</h4>

                  <div className="flex items-center gap-3">
                    {[
                      { label: "Instagram", href: "/contact-us", icon: <Image src={insta} alt="Instagram" className=" w-6 h-6" /> },
                      { label: "Linkedin", href: "/contact-us", icon: <Image src={linkedin} alt="Linkedin" className=" w-6 h-6" /> },
                      { label: "Facebook", href: "/contact-us", icon: <Image src={facebook} alt="Facebook" className=" w-6 h-6" /> },
                      { label: "Whatsapp", href: getWhatsAppLink(), icon: <Image src={whatsapp} alt="Whatsapp" className=" w-6 h-6" />, external: true },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        aria-label={item.label}
                        className="h-12 w-12 rounded-[14px] border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/90 hover:bg-white/10 transition-all"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* MAIN PAGES */}
              <div>
                <h4 className="text-lg font-semibold mb-5">Main Pages</h4>

                <ul className="space-y-4 text-sm">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Courses", href: "/courses" },
                    { label: "Services", href: "/services" },
                    { label: "Blog", href: "/blogs" },
                    { label: "Contact", href: "/contact-us" },
                  ].map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-1 transition-all ${isActive
                            ? "text-[#FFC224]"
                            : "text-white hover:text-white"
                            }`}
                        >
                          {isActive && (
                            <div className="h-[2px] w-2 rounded-full bg-[#FFC224]" />
                          )}

                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h4 className="text-lg font-semibold mb-5">Quick Links</h4>

                <ul className="space-y-4 text-sm text-white">
                  <li>
                    <Link href="/about-us" className="hover:text-white">
                      Customers
                    </Link>
                  </li>

                  <li>
                    <Link href="/services" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>

                  <li>
                    <Link href="/blogs" className="hover:text-white">
                      Learning Center
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact-us" className="hover:text-white">
                      Help desk
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact-us" className="hover:text-white">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* OPENING HOURS */}
              <div>
                <h4 className="text-lg font-semibold mb-5">
                  Opening Hours
                </h4>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Image src={calendar} alt="calendar" className=" w-5 h-5" />
                    </div>

                    <p className="text-sm text-white">
                      Monday - Saturday
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Image src={clock} alt="calendar" className=" w-5 h-5" />
                    </div>

                    <p className="text-sm text-white">
                      7.00 AM - 8.00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-white/10" />

            {/* BOTTOM */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white text-center sm:text-left">
                CloudEdge © Copyright 2026 - All Rights Reserved
              </p>

              <p className="text-sm text-white text-center sm:text-right flex items-center gap-1">
                Made with <span><Image src={heartIcon} alt="heart" className=" w-4 h-4" /></span> by{" "}
                <Link href={"https://ascendtis.com/"} target="_blank" className="font-bold text-white underline">
                  Ascendtis.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
