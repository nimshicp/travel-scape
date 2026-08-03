"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import DestinationCarousel from "./DestinationCarousel";
import { destinations } from "@/data/destinations";

const tabs = [
  { key: "india",         label: "India",                sub: "We cover all corners of India" },
  { key: "international", label: "International",        sub: "Beyond Borders, Beyond Imagination" },
] as const;

type Tab = typeof tabs[number]["key"];

export default function DestinationSection() {
  const [activeTab, setActiveTab] = useState<Tab>("india");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = destinations.filter((d) => d.category === activeTab);
  const activeDest = filtered[activeIndex] ?? filtered[0];

  const handleTabChange = (key: Tab) => {
    setActiveTab(key);
    setActiveIndex(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section id="destinations" className="relative w-full min-h-screen flex items-center pt-24 pb-32 sm:pt-28 sm:pb-36 md:pb-44 overflow-hidden bg-[#09160E]">

      {/* Dynamic Background Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeDest?.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeDest?.image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09160E]/95 via-[#09160E]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1710]/90 via-transparent to-[#09160E]/70 z-10" />

        {/* Seamless Top Blend from Services Section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#09160E] via-[#09160E]/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Ambient glowing orb overlapping with Services */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#34A853]/10 blur-[130px] rounded-full pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-12 my-8">

        {/* Left Content */}
        <motion.div
          key={activeDest?.id}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full xl:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-left pt-10 xl:pt-0"
        >
          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8 p-1.5 rounded-full glass w-full sm:w-auto max-w-[320px] sm:max-w-none justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`flex-1 sm:flex-initial text-center px-4 sm:px-6 py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-[#34A853] text-white shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Sub-label */}
          <motion.p variants={itemVariants} className="text-[#9FC3B2] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 px-2">
            {tabs.find((t) => t.key === activeTab)?.sub}
          </motion.p>

          {/* Location badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-4 sm:mb-5 w-max">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white uppercase">
              {activeDest?.country}
            </span>
          </motion.div>

          {/* Destination name */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 text-white uppercase tracking-tighter sm:tracking-normal">
            {activeDest?.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-5 text-white/85">
            {activeDest?.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-sm sm:text-base text-white/70 max-w-md mb-8 sm:mb-10 leading-relaxed font-light px-2 sm:px-0">
            {activeDest?.details} — Let us craft every detail of this journey, so you only need to show up and experience it.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0A1810] font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-lg text-xs sm:text-sm active:scale-[0.98]">
              Explore Package
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`https://wa.me/919605138434?text=Hi! I'm interested in the ${activeDest?.name ?? ""} package.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-xs sm:text-sm font-semibold rounded-full hover:border-white/70 hover:bg-white/5 transition-all duration-300 active:scale-[0.98]"
            >
              Enquire on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full xl:w-1/2 mt-12 xl:mt-0 relative"
        >
          <DestinationCarousel
            key={activeTab}
            destinations={filtered}
            onIndexChange={setActiveIndex}
          />
        </motion.div>

      </div>

      {/* Seamless Deep Gradient Fading into Testimonials Section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0D1710] via-[#0D1710]/85 to-transparent z-10 pointer-events-none" />

      {/* Organic Layered Curve Emerging into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 sm:h-24 md:h-32 text-[#0D1710] fill-current">
          <path d="M0,0 C300,90 600,-30 900,50 C1050,90 1150,40 1200,20 L1200,120 L0,120 Z" opacity="0.35" fill="currentColor" />
          <path d="M0,30 C250,110 550,10 850,70 C1000,100 1100,50 1200,40 L1200,120 L0,120 Z" opacity="0.65" fill="currentColor" />
          <path d="M0,60 C200,120 500,40 800,90 C1000,120 1120,70 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
