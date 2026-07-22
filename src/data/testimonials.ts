export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rina Maharani",
    location: "Jakarta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    comment:
      "Produknya beneran bagus banget! Kualitas sesuai dengan foto, pengiriman cepat, dan packagingnya rapi. Udah belanja 3x di sini dan selalu puas. Highly recommended!",
    product: "Sneakers Casual Putih",
    date: "15 Juli 2025",
  },
  {
    id: 2,
    name: "Budi Santoso",
    location: "Surabaya",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    comment:
      "Wireless earbuds-nya luar biasa! ANC-nya beneran works, suara jernih, dan baterai awet banget. Worth every penny. Pengiriman juga cepet, sampe dalam 2 hari.",
    product: "Wireless Earbuds Pro",
    date: "8 Juli 2025",
  },
  {
    id: 3,
    name: "Sari Dewi",
    location: "Bandung",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 4,
    comment:
      "Smartwatch-nya keren dan fiturnya lengkap. GPS akurat, heart rate monitor-nya juga reliable. Satu-satunya minus tampilan agak besar di tangan saya yang kecil, tapi overall oke!",
    product: "Smartwatch Sport Series",
    date: "2 Juli 2025",
  },
  {
    id: 4,
    name: "Dimas Prayoga",
    location: "Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    comment:
      "Tas ranselnya mantap! Bahan tebal, jahitan rapi, dan muat banyak. Laptop 15 inch muat sempurna dengan kompartemennya. Warna juga persis seperti di foto. Puas!",
    product: "Tas Ransel Laptop Premium",
    date: "28 Juni 2025",
  },
];
