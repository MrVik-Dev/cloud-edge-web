"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import PrimaryButton from "./PrimaryButton";
import MobileNavbar from "./MobileNavbar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", hasDropdown: true },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Blogs", href: "/blogs", hasDropdown: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavContent = () => (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="Cloud Edge" priority className="h-8 w-auto" />
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-2 transition-colors duration-200 ${isActive
                ? "font-semibold text-primary"
                : "font-normal text-[#1D1F20] hover:text-primary"
                }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition-all duration-200 ${isActive
                  ? "bg-[#FFC224] opacity-100"
                  : "bg-[#FFC224] opacity-0"
                  }`}
              />
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDown size={16} className="text-[#1D1F20]/60" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Button */}
      <div>
        <PrimaryButton label="Contact Us" />
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 hidden md:block">

        <div
          className={`absolute inset-x-0 top-0 transition-opacity duration-300 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="my-3 rounded-full border border-[#8B7DFF2E] bg-white px-8 py-3">
              <NavContent />
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 top-0 transition-all duration-500 ${isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
        >
          <div className="w-full bg-white/80 backdrop-blur-sm ">
            <div className=" container mx-auto w-full px-8 py-3 border border-white/20">
              <NavContent />
            </div>
          </div>
        </div>

      </header>
      <header className=" block md:hidden">
        <MobileNavbar navItems={navItems}/>
      </header>
    </>
  );
};

export default Navbar;