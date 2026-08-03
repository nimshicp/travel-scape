import Image from "next/image";

interface DestinationCardProps {
  name: string;
  country: string;
  details: string;
  image: string;
}

export default function DestinationCard({ name, country, details, image }: DestinationCardProps) {
  return (
    <div
      className="relative w-full h-[240px] md:h-[280px] xl:h-[320px] rounded-[20px] overflow-hidden transition-all duration-500 cursor-pointer shadow-black/40 shadow-xl hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      
      {/* Gradient Overlay for Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
        <span className="text-[10px] font-semibold tracking-widest text-gold uppercase mb-1">
          {country}
        </span>
        <h3 className="text-xl font-bold text-white mb-1 leading-tight">{name}</h3>
        <p className="text-white/70 text-[11px] font-medium leading-tight">{details}</p>
      </div>
    </div>
  );
}
