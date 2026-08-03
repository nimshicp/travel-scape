"use client";

import { Star, MapPin, HeartHandshake, Clock, BadgeCheck, Globe } from "lucide-react";

const items = [
  { icon: HeartHandshake, text: "Personalized Travel Planning" },
  { icon: Clock,          text: "24/7 Support" },
  { icon: BadgeCheck,     text: "Affordable & Transparent Pricing" },
  { icon: Star,           text: "Happy Clients, Real Stories" },
  { icon: Globe,          text: "Wide Range of Destinations" },
  { icon: MapPin,         text: "Calicut, Kerala — India" },
];

// Duplicate for seamless infinite loop
const ticker = [...items, ...items, ...items];

export default function MarqueeStrip() {
  return (
    <div className="w-full overflow-hidden bg-[#34A853] py-3.5 border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {ticker.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 mx-8 text-white text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase flex-shrink-0"
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0 opacity-80" strokeWidth={2} />
              {item.text}
              <span className="ml-6 text-white/40 font-normal tracking-normal text-base leading-none">✦</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
