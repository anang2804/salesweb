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
    hargaMulai: 253000000,
    hargaJuta: 253,
    transmisi: "MT",
    isPromo: false,
    heroImage: "/images/products/APV/bgapv.png",
    tagline: "Temukan APV yang paling tepat untuk Anda",
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
      "Apapun bisa anda lakukan, mulai dari menyenangkan istri berbelanja, memanjakan anak-anak ke tempat rekreasi, berlibur bersama keluarga besar, hingga mengembangkan bisnis dan usaha. Berkendara terasa lebih aman dan nyaman.",
    kategori: "MPV",
    galeriFoto: [
      {
        nomor: 1,
        gambar: "/images/products/APV/dalam.png",
        deskripsi: "Tampak dalam Suzuki APV",
      },
      {
        nomor: 2,
        gambar: "/images/products/APV/body.png",
        deskripsi: "Tampak body Suzuki APV",
      },
      {
        nomor: 3,
        gambar: "/images/products/APV/peforma.png",
        deskripsi: "Tampak performa Suzuki APV",
      },
    ],
    varianHarga: [
      { nama: "APV GL", harga: 253500000 },
      { nama: "APV GX", harga: 267500000 },
      { nama: "APV SGX", harga: 272500000 },
    ],
  },
];
