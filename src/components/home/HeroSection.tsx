"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.38] origin-[20%_20%] pointer-events-none"
        >
          <source src="/Clouds_drift_across_sky_202607311612.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays to darken video for text readability */}
        <div className="absolute inset-0 bg-[#0B1810]/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1810] via-[#0B1810]/25 to-[#0B1810]/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,17,11,0.65)_100%)] z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="font-playfair text-6xl sm:text-7xl md:text-[105px] lg:text-[124px] font-normal tracking-tight leading-[0.94] mb-8 sm:mb-10 text-white"
          >
            The World <br />
            <span className="font-cormorant italic font-normal text-[#E4C390]">Awaits You</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-14 font-light tracking-wide leading-[1.8] text-center"
          >
            Effortless journeys, handcrafted for you. From Kerala's backwaters to Kashmir's peaks — we take care of every detail.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-9 sm:px-11 py-3.5 sm:py-4 bg-[#2C7A4B] text-white font-bold tracking-[0.2em] text-xs rounded-full hover:bg-[#23633C] transition-all shadow-xl active:scale-95 uppercase"
            >
              EXPLORE DESTINATIONS
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-9 sm:px-11 py-3.5 sm:py-4 bg-black/30 backdrop-blur-md border border-white/30 text-white font-bold tracking-[0.2em] text-xs rounded-full hover:bg-white/10 hover:border-white/60 transition-all active:scale-95 uppercase"
            >
              WHO WE ARE
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL Indicator — hidden on desktop view */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none md:hidden"
      >
        <span className="text-[9px] tracking-[0.35em] text-white/45 font-semibold uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 via-[#DFBA6B]/70 to-transparent" />
      </motion.div>
    </section>
  );
}
