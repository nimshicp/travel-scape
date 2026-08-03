"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Tour Packages",
    subtitle: "Customized itineraries • Heritage tours • All inclusive",
    bgColor: "bg-[#022E24]",
    textColor: "text-white",
    subColor: "text-white/50",
    numColor: "text-white/10",
  },
  {
    num: "02",
    title: "Air Ticket Booking",
    subtitle: "Instant confirmation • 24/7 support • Global routing",
    bgColor: "bg-[#1F4D3A]",
    textColor: "text-white",
    subColor: "text-white/50",
    numColor: "text-white/10",
  },
  {
    num: "03",
    title: "Camps & Adventures",
    subtitle: "Wilderness treks • River camping • Guided expeditions",
    bgColor: "bg-[#4F8F75]",
    textColor: "text-white",
    subColor: "text-white/60",
    numColor: "text-white/10",
  },
  {
    num: "04",
    title: "Visa Assistance",
    subtitle: "Hassle-free documentation • Fast processing • Expert consultation",
    bgColor: "bg-[#9FC3B2]",
    textColor: "text-[#022E24]",
    subColor: "text-[#022E24]/60",
    numColor: "text-[#022E24]/10",
  },
  {
    num: "05",
    title: "Resort Booking",
    subtitle: "Luxury stays • Exclusive discounts • Premium hospitality",
    bgColor: "bg-[#E7F1EC]",
    textColor: "text-[#022E24]",
    subColor: "text-[#022E24]/55",
    numColor: "text-[#022E24]/10",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#09160E] pt-20 pb-32 md:pt-28 md:pb-40 px-5 sm:px-10 md:px-16 overflow-hidden"
    >
      {/* Seamless top gradient transition from WhyUs Section (#0F1C11) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0F1C11] via-[#0F1C11]/70 to-transparent z-10 pointer-events-none" />

      {/* Faint forest background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=2000"
          alt="Forest background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09160E]/80 via-transparent to-[#09160E]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header row: label left, heading center, tagline right */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12 pb-8 border-b border-white/10"
        >
          <div>
            <span className="text-[#9FC3B2] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
              What We Offer
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-light italic text-white leading-tight">
              Our Services
            </h2>
          </div>
          <p className="text-white/45 text-xs sm:text-sm font-light leading-relaxed max-w-xs text-left sm:text-right">
            Whether you're dreaming of a peaceful getaway or an adventurous escape — we make it seamless.
          </p>
        </motion.div>

        {/* Service rows — compact table-like list */}
        <div className="flex flex-col divide-y divide-white/8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`group relative flex items-center gap-3 sm:gap-6 ${service.bgColor} px-4 sm:px-8 py-4 sm:py-6 cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-[0.99] ${index === 0 ? "rounded-t-2xl" : ""} ${index === services.length - 1 ? "rounded-b-2xl" : ""}`}
            >
              {/* Number */}
              <span className={`font-cormorant text-2xl sm:text-4xl font-light select-none flex-shrink-0 w-7 sm:w-9 text-center ${service.numColor} group-hover:opacity-30 transition-opacity`}>
                {service.num}
              </span>

              {/* Vertical divider */}
              <div className="w-px h-8 bg-current opacity-10 flex-shrink-0 hidden sm:block" />

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className={`font-cormorant text-xl sm:text-2xl lg:text-3xl tracking-wide font-normal ${service.textColor} leading-none`}>
                  {service.title}
                </h3>
                <p className={`text-[9px] sm:text-xs tracking-[0.15em] uppercase mt-1 sm:mt-1.5 ${service.subColor} font-medium truncate`}>
                  {service.subtitle}
                </p>
              </div>

              {/* Arrow icon */}
              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-current opacity-40 sm:opacity-0 group-hover:opacity-70 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${service.textColor}`}>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom add-on strip: quick trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden"
        >
          {[
            { value: "2000+", label: "Happy Clients" },
            { value: "50+", label: "Destinations" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#09160E] text-center py-5 px-2 sm:py-6 sm:px-4">
              <p className="font-cormorant text-2xl sm:text-4xl font-light text-white mb-1">{stat.value}</p>
              <p className="text-[#9FC3B2] text-[8px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase truncate">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Seamless organic curved transition into Destination section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-20 text-[#09160E] fill-current">
          <path d="M0,50 C350,110 750,-10 1200,60 L1200,120 L0,120 Z" opacity="0.4" fill="currentColor" />
          <path d="M0,70 C300,120 800,20 1200,70 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
