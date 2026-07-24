export interface GaleriFotoItem {
  nomor: number;
  gambar: string;
  deskripsi: string;
}

export interface ProdukVarianHarga {
  nama: string;
  harga: number;
}

export interface ColorVariant {
  colorName: string;
  colorHex: string;
  image: string;
}

export interface Produk {
  id: number;
  slug: string;
  nama: string;
  hargaMulai: number;
  hargaJuta: number;
  transmisi: string;
  isPromo: boolean;
  heroImage: string;
  tagline: string;
  colorVariants: ColorVariant[];
  jumlahTipe: number;
  deskripsi: string;
  kategori: string;
  galeriFoto: GaleriFotoItem[];
  varianHarga: ProdukVarianHarga[];
}

export const produkList: Produk[] = [
  {
    id: 1,
    slug: "apv",
    nama: "Suzuki APV",
    hargaMulai: 178400000,
    hargaJuta: 178,
    transmisi: "MT",
    isPromo: false,
    heroImage: "/images/products/APV/silvermetalic.png",
    tagline: "Partner Bisnis dan Keluarga Terbaik",
    colorVariants: [
      {
        colorName: "Silver Metallic",
        colorHex: "#C0C0C0",
        image: "/images/products/APV/silvermetalic.png",
      },
      {
        colorName: "Grey Metallic",
        colorHex: "#808080",
        image: "/images/products/APV/greymetalic.png",
      },
      {
        colorName: "Hitam Metallic",
        colorHex: "#1C1C1C",
        image: "/images/products/APV/hitammetalic.png",
      },
      {
        colorName: "Burgundy Red",
        colorHex: "#8B1A1A",
        image: "/images/products/APV/burgundyred.png",
      },
    ],
    jumlahTipe: 3,
    deskripsi:
      "Suzuki APV menghadirkan ruang kabin yang lapang, kenyamanan berkendara, serta efisiensi bahan bakar yang tinggi. Sangat cocok untuk kebutuhan keluarga besar maupun operasional bisnis Anda.",
    kategori: "MPV",
    galeriFoto: [
      { nomor: 1, gambar: "/images/products/APV/silvermetalic.png", deskripsi: "Tampak depan Suzuki APV Silver Metallic" },
      { nomor: 2, gambar: "/images/products/APV/greymetalic.png", deskripsi: "Tampak depan Suzuki APV Grey Metallic" },
      { nomor: 3, gambar: "/images/products/APV/hitammetalic.png", deskripsi: "Tampak depan Suzuki APV Hitam Metallic" },
      { nomor: 4, gambar: "/images/products/APV/burgundyred.png", deskripsi: "Tampak depan Suzuki APV Burgundy Red" },
    ],
    varianHarga: [
      { nama: "APV GL MT", harga: 197500000 },
      { nama: "APV GX MT", harga: 215800000 },
      { nama: "APV Blind Van MT", harga: 178400000 },
    ],
  },
];
