"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#collection" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Reference Style */}
      <div className="bg-[#F6F8FA] border-b border-[#0B1C2D]/5 py-2.5 hidden md:block">
        <div className="container max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-[#0B1C2D]/60 font-[var(--font-inter)]">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <Phone className="size-3 text-[#0D9488]" />
              (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-3 text-[#0D9488]" />
              Mon-Fri: 9AM-7PM | Sat: 10AM-5PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail className="size-3 text-[#0D9488]" />
              occuveraoptical@gmail.com
            </span>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "top-0 bg-white border-b border-[#0B1C2D]/5 py-3 shadow-md"
            : "top-0 md:top-[38px] bg-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/Occuvera_logo_update.jpeg"
              alt="Occuvera logo"
              width={200}
              height={60}
              className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-bold uppercase tracking-wider transition-all duration-300 relative group font-[var(--font-montserrat)] text-[#0B1C2D]/70 hover:text-[#0B1C2D]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-[#0B1C2D] text-white hover:bg-[#0D9488] rounded-md px-6 h-10 text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded bg-[#0B1C2D] text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-6 py-8 space-y-5 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-[var(--font-montserrat)] font-bold text-[#0B1C2D] border-b border-[#0B1C2D]/5 pb-3"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                className="w-full h-14 bg-[#0D9488] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#0B1C2D] transition-all duration-500"
              >
                Book Your Eye Test
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}