export interface SalesPerson {
  id: string;
  dealerName: string;
  name: string;
  photo: string;
  brochureImage: string;
  brochureImageAlt: string;
  phone: string;
  whatsapp: string;
  whatsappText: string;
  instagram: string;
  instagramName: string;
  email: string;
}

export const salesTeam: SalesPerson[] = [
  {
    id: "andi",
    dealerName: "ANANG SUZUKI",
    name: "Andi Firmansyah",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    brochureImage:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    brochureImageAlt: "Promo ANANG SUZUKI",
    phone: "081284975517",
    whatsapp: "6281284975517",
    whatsappText: "Halo Andi, info dari website, mau tanya promo produk.",
    instagram: "https://www.instagram.com/",
    instagramName: "Instagram",
    email: "andi@websales.id",
  },
];
