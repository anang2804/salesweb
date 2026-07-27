export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  ctaLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/pamflet/carry.png",
    alt: "Promo New Suzuki Carry PU",
    ctaLink: "/produk/carry-pu",
  },
  {
    id: 2,
    image: "/images/pamflet/ertiga.png",
    alt: "Promo All New Ertiga",
    ctaLink: "/produk/ertiga",
  },
  {
    id: 3,
    image: "/images/pamflet/fronx.png",
    alt: "Promo Suzuki Fronx",
    ctaLink: "/produk/fronx",
  },
  {
    id: 4,
    image: "/images/pamflet/xl7.png",
    alt: "Promo New Suzuki XL7",
    ctaLink: "/produk/xl7",
  },
];
