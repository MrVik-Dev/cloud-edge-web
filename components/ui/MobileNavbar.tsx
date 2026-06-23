// components/ui/MobileNavbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import logo from "@/public/logo.svg";
import PrimaryButton from "./PrimaryButton";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface MobileNavbarProps {
  navItems: NavItem[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between  bg-white px-5 py-3">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src={logo}
            alt="Cloud Edge"
            priority
            className="h-8 w-auto"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center bg-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "mt-3 max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-3xl border border-[#8B7DFF2E] bg-white p-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 transition-all ${
                    isActive
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-[#1D1F20]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-[#FFC224]" : "bg-[#FFC224]/40"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.hasDropdown && (
                    <ChevronDown
                      size={18}
                      className="text-[#1D1F20]/60"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5">
            <PrimaryButton href="/contact-us" label="Contact Us" className="w-full!" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
