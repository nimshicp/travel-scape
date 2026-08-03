"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAreSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#0E1F16] text-white pt-24 pb-36 sm:pt-32 sm:pb-44 px-6 sm:px-12 md:px-20 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient floating glow overlapping top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#34A853]/15 blur-[120px] rounded-full pointer-events-none z-10" />

      {/* Background Layer: Dark Tropical/Botanical Foliage & Misty Landscape */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=2000"
          alt="Dark green foliage background"
          fill
          className="object-cover object-right"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F16] via-transparent to-[#0E1F16]" />
      </div>

      {/* Main Container with Architectural Thin Outline Frame */}
      <div className="relative max-w-6xl w-full mx-auto my-8 z-10">

        {/* Offset Thin Green Line Frame (Exactly matching reference picture) */}
        <div className="hidden sm:block absolute -top-6 -left-6 right-8 -bottom-6 border border-[#487857]/50 pointer-events-none z-0" />
        <div className="sm:hidden absolute -top-3 -left-3 right-3 -bottom-3 border border-[#487857]/50 pointer-events-none z-0" />

        {/* Split 2-Column Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-12 w-full shadow-2xl overflow-hidden"
        >

          {/* Left Side: Full-Bleed Green Travel Photograph */}
          <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[420px] lg:h-[580px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1400"
              alt="Lush green travel landscape"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Subtle dark gradient overlay to ensure text stands out */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-black/20 lg:to-transparent" />

            {/* Overlaid Typography on Image (Inspired by 'GREEN BOTANICAL') */}
            <div className="absolute bottom-10 left-8 sm:bottom-16 sm:left-12 z-10">
              <span className="block text-white/90 text-xs sm:text-sm tracking-[0.3em] uppercase font-light mb-2">
                DISCOVER
              </span>
              <h3 className="text-white font-playfair text-3xl sm:text-5xl tracking-widest uppercase font-normal">
                TRAVELSCAPE
              </h3>
            </div>
          </div>

          {/* Right Side: Solid Deep Botanical Green Content Card */}
          <div className="lg:col-span-5 bg-[#173423] p-6 sm:p-12 lg:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
            <h2 className="font-playfair text-xl sm:text-3xl lg:text-3xl font-normal tracking-[0.2em] uppercase text-white mb-6 sm:mb-10">
              WHO WE ARE?
            </h2>

            <p className="text-[#D3DFD7] text-sm sm:text-base font-light leading-[1.9] sm:leading-[2.1] tracking-wide">
              At Travelscape, we believe that travel should be as enjoyable as the destination itself. Founded with a passion for exploration and a commitment to service, we set out to make travel easier for everyone. From planning the perfect getaway to managing every detail along the way, our goal is to turn your journeys into effortless, memorable experiences.
            </p>
          </div>

        </motion.div>
      </div>

      {/* Seamless organic curved transition into Why Us section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1C11] via-[#0F1C11]/75 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-20 text-[#0F1C11] fill-current">
          <path d="M0,40 C350,110 750,-20 1200,50 L1200,120 L0,120 Z" opacity="0.45" fill="currentColor" />
          <path d="M0,70 C400,120 800,20 1200,70 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
