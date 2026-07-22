export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount: number;
  typeCount: number;
  badge?: "new" | "sale" | "bestseller";
  description: string;
  features: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "new-alphard-xe-hev",
    name: "New Alphard XE HEV",
    price: 1650000000,
    image: "https://picsum.photos/seed/alphard-slider/600/400",
    images: [
      "https://picsum.photos/seed/alphard-white/800/600",
      "https://picsum.photos/seed/alphard-black/800/600",
      "https://picsum.photos/seed/alphard-silver/800/600",
    ],
    category: "MPV",
    categorySlug: "mpv",
    rating: 4.9,
    reviewCount: 128,
    typeCount: 4,
    badge: "new",
    description:
      "New Alphard XE HEV menghadirkan kemewahan dan kenyamanan tingkat tinggi dengan teknologi hybrid terkini.",
    features: [
      "Mesin Hybrid 2.5L bertenaga dan efisien",
      "Kabin mewah dengan kursi kapten",
      "Honda Sensing – fitur keselamatan aktif",
      "Sistem hiburan layar lebar",
    ],
    stock: 10,
  },
  {
    id: 2,
    slug: "new-camry-hev",
    name: "New Camry HEV",
    price: 895000000,
    image: "https://picsum.photos/seed/camry-slider/600/400",
    images: [
      "https://picsum.photos/seed/camry-white/800/600",
      "https://picsum.photos/seed/camry-black/800/600",
    ],
    category: "Sedan",
    categorySlug: "sedan",
    rating: 4.8,
    reviewCount: 95,
    typeCount: 3,
    badge: "bestseller",
    description:
      "New Camry HEV menggabungkan elegansi eksekutif dengan efisiensi hybrid.",
    features: [
      "Mesin Hybrid 2.5L",
      "Desain eksterior premium",
      "Kabin mewah berbahan kulit",
      "Fitur keselamatan Toyota Safety Sense",
    ],
    stock: 8,
  },
  {
    id: 3,
    slug: "all-new-civic-rs",
    name: "All New Civic RS",
    price: 595000000,
    image: "https://picsum.photos/seed/civic-slider/600/400",
    images: [
      "https://picsum.photos/seed/civic-red/800/600",
      "https://picsum.photos/seed/civic-white/800/600",
      "https://picsum.photos/seed/civic-blue/800/600",
    ],
    category: "Sedan",
    categorySlug: "sedan",
    rating: 4.7,
    reviewCount: 156,
    typeCount: 4,
    badge: "new",
    description:
      "All New Civic RS hadir dengan desain sporty yang agresif dan mesin turbo bertenaga.",
    features: [
      "Mesin Turbo 1.5L VTEC",
      "Desain RS sporty",
      "Honda Sensing aktif",
      "Layar TFT 10.2 inci",
    ],
    stock: 15,
  },
  {
    id: 4,
    slug: "new-cr-v-hev",
    name: "New CR-V HEV",
    price: 789000000,
    image: "https://picsum.photos/seed/crv-slider/600/400",
    images: [
      "https://picsum.photos/seed/crv-white/800/600",
      "https://picsum.photos/seed/crv-steel/800/600",
    ],
    category: "SUV",
    categorySlug: "suv",
    rating: 4.8,
    reviewCount: 87,
    typeCount: 3,
    badge: "bestseller",
    description:
      "New CR-V HEV adalah SUV hybrid yang menggabungkan ketangguhan, kenyamanan, dan efisiensi bahan bakar.",
    features: [
      "Mesin Hybrid 2.0L",
      "Konfigurasi 7 tempat duduk",
      "Honda Sensing",
      "Bagasi luas",
    ],
    stock: 12,
  },
  {
    id: 5,
    slug: "new-brio-satya",
    name: "New Brio Satya",
    price: 165000000,
    originalPrice: 179000000,
    image: "https://picsum.photos/seed/brio-slider/600/400",
    images: [
      "https://picsum.photos/seed/brio-white/800/600",
      "https://picsum.photos/seed/brio-blue/800/600",
      "https://picsum.photos/seed/brio-orange/800/600",
    ],
    category: "Hatchback",
    categorySlug: "hatchback",
    rating: 4.6,
    reviewCount: 203,
    typeCount: 3,
    badge: "sale",
    description:
      "New Brio Satya adalah hatchback perkotaan yang gesit, irit bahan bakar, dan mudah diparkir.",
    features: [
      "Mesin 1.2L i-VTEC",
      "Irit bahan bakar",
      "Desain kompak",
      "Ground clearance tinggi",
    ],
    stock: 25,
  },
];
