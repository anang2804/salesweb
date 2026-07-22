export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  productCount: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Fashion",
    slug: "fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
    productCount: 128,
    color: "from-pink-500 to-rose-400",
  },
  {
    id: 2,
    name: "Elektronik",
    slug: "elektronik",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&q=80",
    productCount: 95,
    color: "from-blue-500 to-indigo-400",
  },
  {
    id: 3,
    name: "Rumah & Living",
    slug: "rumah-living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    productCount: 74,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    name: "Kecantikan",
    slug: "kecantikan",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    productCount: 62,
    color: "from-purple-500 to-violet-400",
  },
  {
    id: 5,
    name: "Olahraga",
    slug: "olahraga",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    productCount: 51,
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 6,
    name: "Buku & Edukasi",
    slug: "buku-edukasi",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    productCount: 38,
    color: "from-cyan-500 to-sky-400",
  },
];
