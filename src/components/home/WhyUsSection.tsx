"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    tag: "Personalized Planning",
    title: "Journeys Crafted\nJust for You",
    body: "At Travelscape, no two trips are alike. We sit with you, understand your dreams, and build a fully custom itinerary — from the snowfields of Gulmarg to the mist of Meghalaya.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Kashmir snow mountains at Gulmarg",
    reverse: false,
  },
  {
    id: "02",
    tag: "24/7 Support",
    title: "We're With You\nEvery Step",
    body: "Whether you're trekking through Sohra's waterfalls or cruising Dal Lake, our team is always a message away. Flight change? Weather delay? We handle it instantly.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Meghalaya misty green forest",
    reverse: true,
  },
  {
    id: "03",
    tag: "Transparent Pricing",
    title: "No Hidden Costs,\nJust Pure Travel",
    body: "Every Kashmir or Meghalaya package we offer is priced clearly — no surprise fees. Maximum value for every rupee, whether you're booking a solo trek or a family retreat.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Serene Kashmir valley lake",
    reverse: false,
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-[#0F1C11] pt-16 pb-32 md:pt-24 md:pb-40 px-5 sm:px-10 md:px-16 overflow-hidden"
    >
      {/* Seamless gradient transition from WhoWeAre Section */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0E1F16] via-[#0E1F16]/60 to-transparent z-0 pointer-events-none" />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-14 md:mb-20"
      >
        <span className="text-[#9FC3B2] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
          What Sets Us Apart
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light italic text-white">
          Why Travelscape?
        </h2>
      </motion.div>

      {/* Feature rows with vertical dotted connector */}
      <div className="max-w-4xl mx-auto relative">

        {/* Vertical dotted centre line — only on md+ */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#34A853]/20 z-0" />

        <div className="flex flex-col gap-12 md:gap-16 relative z-10">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 * i }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${f.reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={f.image}
                  alt={f.tag}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Number tag */}
                <span className="absolute top-4 left-4 font-cormorant text-3xl font-light text-white/25 leading-none select-none">
                  {f.id}
                </span>
              </div>

              {/* Text */}
              <div className={`flex flex-col ${f.reverse ? "md:items-end md:text-right" : "md:items-start"} items-start`}>
                <span className="text-[#34A853] text-[9px] font-bold tracking-[0.35em] uppercase mb-3">
                  {f.tag}
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl text-white font-normal leading-snug mb-4">
                  {f.title}
                </h3>
                <div className={`w-8 h-px bg-[#9FC3B2]/40 mb-4 ${f.reverse ? "md:self-end" : ""}`} />
                <p className="text-white/50 text-sm font-light leading-[1.8] max-w-xs">
                  {f.body}
                </p>
              </div>

              {/* Centre dot on the connector line — only on md */}
              {i < features.length - 1 && (
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center"
                  style={{ top: `calc(${(i + 1) * 33.33}% - 6px)` }}>
                  <div className="w-3 h-3 rounded-full bg-[#34A853]/40 border border-[#34A853]/60" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Seamless organic curved transition into Services Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09160E] via-[#09160E]/70 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-20 text-[#09160E] fill-current">
          <path d="M0,30 C300,100 700,-10 1200,50 L1200,120 L0,120 Z" opacity="0.4" fill="currentColor" />
          <path d="M0,60 C400,120 800,20 1200,70 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
