export type Destination = {
  id: number;
  name: string;
  title: string;
  country: string;
  details: string;
  image: string;
  category: "india" | "international";
};

export const destinations: Destination[] = [
  // ─── India Packages ────────────────────────────────────────
  {
    id: 1,
    name: "Kashmir",
    title: "Paradise on Earth",
    country: "India",
    details: "5 Days, 4 Nights • Dal Lake & Gulmarg",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=2000",
    category: "india",
  },
  {
    id: 2,
    name: "Meghalaya",
    title: "Abode of Clouds",
    country: "India",
    details: "5 Days, 4 Nights • Root Bridges & Waterfalls",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
    category: "india",
  },
  {
    id: 3,
    name: "Manali",
    title: "Valley of the Gods",
    country: "India",
    details: "5 Days, 4 Nights • Solang Valley & Rohtang",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&q=80&w=2000",
    category: "india",
  },
  {
    id: 4,
    name: "Rajasthan",
    title: "The Land of Kings",
    country: "India",
    details: "6 Days, 5 Nights • Jaipur, Jodhpur & Udaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=2000",
    category: "india",
  },
  {
    id: 5,
    name: "Kerala",
    title: "God's Own Country",
    country: "India",
    details: "6 Days, 5 Nights • Backwaters & Munnar",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2000",
    category: "india",
  },
  {
    id: 6,
    name: "Uttarakhand",
    title: "Devbhoomi — Land of Gods",
    country: "India",
    details: "5 Days, 4 Nights • Rishikesh & Nainital",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000",
    category: "india",
  },

  // ─── International Packages ─────────────────────────────────
  {
    id: 7,
    name: "Thailand",
    title: "Beyond Borders, Beyond Imagination",
    country: "International",
    details: "6 Days, 5 Nights • Bangkok & Phuket",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=2000",
    category: "international",
  },
  {
    id: 8,
    name: "Malaysia",
    title: "Beyond Borders, Beyond Imagination",
    country: "International",
    details: "5 Days, 4 Nights • Kuala Lumpur & Langkawi",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=2000",
    category: "international",
  },
  {
    id: 9,
    name: "Vietnam",
    title: "Beyond Borders, Beyond Imagination",
    country: "International",
    details: "6 Days, 5 Nights • Hanoi & Ha Long Bay",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=2000",
    category: "international",
  },
];
