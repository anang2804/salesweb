export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80",
    alt: "Koleksi fashion terbaru musim ini dengan diskon spesial",
    headline: "Koleksi Terbaru Telah Tiba",
    subheadline: "Temukan gaya terbaik Anda dengan koleksi eksklusif musim ini. Diskon hingga 50% untuk member baru.",
    ctaText: "Belanja Sekarang",
    ctaLink: "/products",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    alt: "Promo flash sale elektronik dengan harga terbaik",
    headline: "Flash Sale Elektronik",
    subheadline: "Dapatkan gadget impian Anda dengan harga terbaik. Penawaran terbatas hanya hari ini!",
    ctaText: "Lihat Promo",
    ctaLink: "/promo",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
    alt: "Gratis ongkos kirim ke seluruh Indonesia untuk pembelian pertama",
    headline: "Gratis Ongkos Kirim",
    subheadline: "Nikmati gratis ongkos kirim ke seluruh Indonesia untuk setiap pembelian di atas Rp 100.000.",
    ctaText: "Mulai Berbelanja",
    ctaLink: "/products?free-shipping=true",
  },
];
