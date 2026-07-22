export interface SalesProfile {
  name: string;
  title: string;
  brochureImage: string;
  brochureImageAlt: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappText: string;
  instagram: string;
  instagramDisplay: string;
  email: string;
  pricelistUrl: string;
}

export const salesProfile: SalesProfile = {
  name: "WEBSALES",
  title: "Sales Executive",
  brochureImage:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  brochureImageAlt: "Brosur Promo WebSales",
  phone: "081252826098",
  phoneDisplay: "0812-5282-6098",
  whatsapp: "6281252826098",
  whatsappDisplay: "+62 812-5282-6098",
  whatsappText: "Halo, info dari website, saya mau tanya promo produk.",
  instagram: "https://www.instagram.com/",
  instagramDisplay: "Instagram",
  email: "sales@websales.id",
  pricelistUrl: "#",
};
