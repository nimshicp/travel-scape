"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, MessageCircle, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import LogoIcon from "./LogoIcon";

const footerLinks = {
  Explore: ["Home", "Destinations", "Tour Packages", "Camps & Adventures"],
  Services: ["Air Ticket Booking", "Visa Assistance", "Resort Booking", "Travel Insurance"],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1810] text-white overflow-hidden">
      {/* Subtle top border line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#34A853]/40 to-transparent" />

      {/* Top CTA Strip */}
      <div className="relative bg-[#34A853]/10 border-b border-white/5 py-12 px-6 sm:px-12 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#9FC3B2] text-xs tracking-[0.3em] uppercase mb-2">Ready to explore?</p>
            <h3 className="font-cormorant text-3xl sm:text-5xl font-light italic text-white">
              Let's plan your next journey
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <button className="group flex items-center gap-3 px-8 py-4 border border-[#34A853] text-[#34A853] text-xs font-bold tracking-widest rounded-full hover:bg-[#34A853] hover:text-white transition-all duration-300">
              PLAN MY TRIP
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Brand Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4"
        >
          <Link href="/" className="flex items-center gap-2 text-[#34A853] text-xl font-light tracking-wide mb-6">
            <LogoIcon className="w-7 h-7 text-[#34A853]" />
            <span className="font-playfair font-semibold tracking-wider text-white">TRAVEL<span className="text-[#34A853]">SCAPE</span></span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
            Travelscape Tours & Travels, Calicut. We turn your dream journeys into effortless, memorable experiences.
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a href="tel:+919605138434" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
              <Phone className="w-4 h-4 text-[#34A853] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              +91 96051 38434
            </a>
            <a href="mailto:hello.travelscape@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
              <Mail className="w-4 h-4 text-[#34A853] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              hello.travelscape@gmail.com
            </a>
            <span className="flex items-center gap-3 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-[#34A853]" strokeWidth={1.5} />
              Calicut, Kerala, India
            </span>
          </div>
        </motion.div>

        {/* Links Columns */}
        {Object.entries(footerLinks).map(([category, links], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * (i + 1) }}
            className="lg:col-span-2"
          >
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#34A853] mb-6">{category}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-white/55 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Social & Newsletter Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-4"
        >
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#34A853] mb-6">Follow Us</h4>
          <div className="flex gap-4 mb-10">
            {[
              { Icon: Globe, href: "#", label: "Website" },
              { Icon: MessageCircle, href: "https://wa.me/919605138434", label: "WhatsApp" },
              { Icon: Send, href: "#", label: "Telegram" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#34A853] hover:text-[#34A853] hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#34A853] mb-4">Stay Updated</h4>
          <p className="text-white/50 text-xs mb-4 leading-relaxed">Get exclusive travel deals and destination inspiration straight to your inbox.</p>
          <div className="flex gap-0 overflow-hidden rounded-full border border-white/15 focus-within:border-[#34A853] transition-colors">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder-white/30 outline-none"
            />
            <button className="px-5 py-3 bg-[#34A853] hover:bg-[#23823d] transition-colors text-white">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 sm:px-12 md:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Travelscape Tours & Travels. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed with ♥ for explorers
          </p>
        </div>
      </div>
    </footer>
  );
}
