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
  phone: "081284975517",
  phoneDisplay: "0812-8497-5517",
  whatsapp: "6281284975517",
  whatsappDisplay: "+62 812-8497-5517",
  whatsappText: "Halo, info dari website, saya mau tanya promo produk.",
  instagram: "https://www.instagram.com/",
  instagramDisplay: "Instagram",
  email: "sales@websales.id",
  pricelistUrl: "#",
};
