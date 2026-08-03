"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import DestinationCard from "./DestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Destination } from "@/data/destinations";
import { motion } from "framer-motion";

const INTERVAL_MS = 5000;

interface DestinationCarouselProps {
  destinations: Destination[];
  onIndexChange: (index: number) => void;
}

export default function DestinationCarousel({ destinations, onIndexChange }: DestinationCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    startIndex: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  // Sync state when embla moves
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    const bgIndex = (index - 1 + destinations.length) % destinations.length;
    onIndexChange(bgIndex);
  }, [emblaApi, onIndexChange, destinations.length]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // Reliable setInterval auto-advance — works even when all slides are visible
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      scrollNext();
      setProgressKey((k) => k + 1);
    }, INTERVAL_MS);
  }, [scrollNext]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer, destinations]);

  // Manual nav resets timer
  const handlePrev = () => { scrollPrev(); setProgressKey((k) => k + 1); startTimer(); };
  const handleNext = () => { scrollNext(); setProgressKey((k) => k + 1); startTimer(); };

  const activeBgIndex = (selectedIndex - 1 + destinations.length) % destinations.length;

  return (
    <div className="relative w-full max-w-3xl mx-auto xl:mx-0 xl:ml-auto">
      <div className="overflow-hidden py-8" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="flex-[0_0_160px] md:flex-[0_0_180px] xl:flex-[0_0_210px] min-w-0 pl-4 md:pl-6"
            >
              <DestinationCard
                name={dest.name}
                country={dest.country}
                details={dest.details}
                image={dest.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation & Progress */}
      <div className="flex items-center justify-between mt-2 xl:pr-12 px-2 sm:px-4 xl:px-0 gap-3 sm:gap-6">
        <div className="flex gap-2 sm:gap-4">
          <button onClick={handlePrev} className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#0A1810] transition-all duration-300 shadow-lg active:scale-95" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={handleNext} className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#0A1810] transition-all duration-300 shadow-lg active:scale-95" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex items-center gap-3 sm:gap-4">
          <div className="relative flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <motion.div
              key={progressKey}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
              className="absolute top-0 left-0 h-full bg-gold"
            />
          </div>
          <div className="text-white font-mono text-xl sm:text-2xl font-light whitespace-nowrap">
            {(activeBgIndex + 1).toString().padStart(2, "0")}
            <span className="text-white/30 text-xs sm:text-sm"> / {destinations.length.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
