"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "./LogoIcon";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "DESTINATIONS", href: "#destinations" },
  { name: "CONTACT", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4 md:py-6 ${
        scrolled || mobileMenuOpen ? "bg-[#0E1F16]/90 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
          <LogoIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 text-[#2D8049]" />
          <span className="font-sans font-semibold tracking-[0.08em] text-lg sm:text-xl md:text-[22px] text-[#2D8049]">TRAVELSCAPE</span>
        </Link>

        {/* Navigation Links — Desktop */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-12 xl:space-x-16">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-xs font-semibold tracking-[0.24em] text-[#E0E6E2] hover:text-[#DCB048] transition-colors uppercase"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Call to Action + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/919605138434?text=Hi!%20I%20want%20to%20plan%20a%20trip%20with%20Travelscape."
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex px-6 py-2 md:px-8 md:py-2.5 bg-[#0A1610]/40 backdrop-blur-md border border-[#DCB048]/85 text-[#DCB048] hover:bg-[#DCB048] hover:text-[#0A1610] text-[11px] md:text-xs font-semibold tracking-[0.24em] rounded-full transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap uppercase"
          >
            PLAN MY TRIP
          </a>

          {/* Hamburger Button — Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Glassmorphic Dropdown — Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="md:hidden overflow-hidden w-full pt-5 pb-4 border-t border-white/10 mt-4 flex flex-col gap-3"
          >
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left py-2 px-3 text-xs sm:text-sm font-semibold tracking-[0.24em] text-white/90 hover:text-[#DCB048] hover:bg-white/5 rounded-lg transition-colors uppercase flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs text-white/40">→</span>
              </button>
            ))}

            {/* PLAN MY TRIP button visible inside mobile menu on small screens */}
            <div className="pt-2 sm:hidden">
              <a
                href="https://wa.me/919605138434?text=Hi!%20I%20want%20to%20plan%20a%20trip%20with%20Travelscape."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#0A1610]/70 backdrop-blur-md border border-[#DCB048]/85 text-[#DCB048] hover:bg-[#DCB048] hover:text-[#0A1610] text-xs font-semibold tracking-[0.24em] rounded-full transition-all duration-300 shadow-md flex items-center justify-center uppercase active:scale-95"
              >
                PLAN MY TRIP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
