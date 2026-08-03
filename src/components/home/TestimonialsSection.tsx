"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    location: "Dubai, UAE",
    trip: "Kashmir — Gulmarg Snow Trek",
    rating: 5,
    headline: "A journey beyond words",
    subheading: "Travelscape made every moment effortless",
    text: "From the Dal Lake houseboat to the Gulmarg snow trek, every detail was perfectly planned. We didn't worry about a single thing. Truly the best travel experience of our lives.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Rohan Menon",
    location: "Bangalore, India",
    trip: "Meghalaya — Living Root Bridge Camp",
    rating: 5,
    headline: "The northeast stole our hearts",
    subheading: "Seamless planning, zero stress",
    text: "Meghalaya was on my bucket list for years. Travelscape made it happen effortlessly — the root bridge trek, the waterfall camps, the misty mornings. I've already referred three friends!",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Fatima Nair",
    location: "Calicut, India",
    trip: "Kashmir — Pahalgam Valley Tour",
    rating: 5,
    headline: "Kashmir felt like paradise",
    subheading: "24/7 support that truly cares",
    text: "As a solo traveller, I was nervous. Travelscape's support team checked in on me daily throughout Kashmir and resolved every issue instantly. The service felt deeply personal.",
    image: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "James & Priya Thomas",
    location: "Kochi, India",
    trip: "Meghalaya — Cherrapunji Honeymoon",
    rating: 5,
    headline: "Our love story began here",
    subheading: "A honeymoon like no other",
    text: "The Meghalaya mist, the living root bridges, the waterfalls — every scene felt like a dream. Travelscape turned our honeymoon into the most beautiful beginning imaginable.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Sarah Al Mansoori",
    location: "Abu Dhabi, UAE",
    trip: "Kashmir — Sonmarg Glacier Camp",
    rating: 5,
    headline: "Into the wild with confidence",
    subheading: "First camping trip, never forgotten",
    text: "I had never camped before and was hesitant. The Sonmarg glacier camp Travelscape arranged was breathtaking. I came back with memories I'll carry for a lifetime — and a deep love for Kashmir.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((newDir: number) => {
    setDirection(newDir);
    setActive((prev) => (prev + newDir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[active];

  const imageVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.96, transition: { duration: 0.4 } }),
  };

  const textVariants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 30 : -30 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.1 } },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -30 : 30, transition: { duration: 0.3 } }),
  };

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen bg-[#0D1710] flex flex-col justify-center pt-24 pb-36 md:pt-32 md:pb-44 overflow-hidden"
    >
      {/* Ambient glowing orb overlapping from Destination section */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#34A853]/12 blur-[140px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: "8s" }} />

      {/* Full-bleed very faint background texture */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src={t.image}
          alt="background"
          fill
          className="object-cover blur-xl scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#0D1710]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <span className="text-[#9FC3B2] text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase">
            Happy Clients, Real Stories
          </span>
        </motion.div>

        {/* Main Content: Image Left + Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Framed Image */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id + "-img"}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                {/* Decorative offset thin-border frame */}
                <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-white/15 rounded-sm pointer-events-none z-10" />

                {/* Photo */}
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                  <Image
                    src={t.image}
                    alt={t.trip}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Inner gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* FEATURED badge */}
                  <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm">
                    FEATURED
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls (below image, left-aligned) */}
            <div className="flex items-center gap-5 mt-10">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    className={`rounded-full transition-all duration-300 ${i === active
                      ? "w-6 h-[5px] bg-white"
                      : "w-[5px] h-[5px] bg-white/30 hover:bg-white/60"
                      }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2 ml-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-9 h-9 rounded-full border border-white/20 text-white/60 hover:border-white/60 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-9 h-9 rounded-full border border-white/20 text-white/60 hover:border-white/60 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id + "-text"}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Big Serif Headline */}
                <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic text-white leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
                  {t.headline}
                </h2>

                {/* Subheading with line separator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#9FC3B2]" />
                  <p className="text-[#9FC3B2] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                    {t.subheading}
                  </p>
                </div>

                {/* Body text */}
                <p className="text-white/65 text-sm sm:text-base font-light leading-[1.85] max-w-xl mb-10">
                  {t.text}
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-[#34A853]/30 border border-[#34A853]/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#9FC3B2] text-xs font-bold">
                      {t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs tracking-wide mt-0.5">{t.location} · {t.trip}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Seamless Deep Gradient into Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B1810] via-[#0B1810]/80 to-transparent z-10 pointer-events-none" />

      {/* Organic Curved Transition into Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 sm:h-24 text-[#0B1810] fill-current">
          <path d="M0,40 C400,110 800,-10 1200,50 L1200,120 L0,120 Z" opacity="0.45" fill="currentColor" />
          <path d="M0,70 C350,120 750,20 1200,70 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
