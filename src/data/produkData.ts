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
    slug: "new-alphard-xe-hev",
    nama: "New Alphard XE HEV",
    hargaMulai: 1650000000,
    hargaJuta: 1652,
    transmisi: "HYBRID CVT",
    isPromo: false,
    heroImage: "https://picsum.photos/seed/alphard-hero/1200/600",
    tagline: "Mewah, Nyaman, dan Efisien dalam Satu Kesatuan",
    colorVariants: [
      {
        colorName: "Platinum White Pearl",
        colorHex: "#F5F5F0",
        image: "https://picsum.photos/seed/alphard-white/600/400",
      },
      {
        colorName: "Attitude Black Mica",
        colorHex: "#1C1C1C",
        image: "https://picsum.photos/seed/alphard-black/600/400",
      },
      {
        colorName: "Silver Metallic",
        colorHex: "#C0C0C0",
        image: "https://picsum.photos/seed/alphard-silver/600/400",
      },
      {
        colorName: "Red Mica Metallic",
        colorHex: "#8B1A1A",
        image: "https://picsum.photos/seed/alphard-red/600/400",
      },
    ],
    jumlahTipe: 4,
    deskripsi:
      "New Alphard XE HEV menghadirkan kemewahan dan kenyamanan tingkat tinggi dengan teknologi hybrid terkini. Kabin luas dengan kursi kapten di baris kedua memberikan pengalaman perjalanan terbaik untuk keluarga maupun bisnis.",
    kategori: "MPV",
    galeriFoto: [
      { nomor: 1, gambar: "https://picsum.photos/seed/alphard-gal1/600/400", deskripsi: "Tampak depan New Alphard XE HEV" },
      { nomor: 2, gambar: "https://picsum.photos/seed/alphard-gal2/600/400", deskripsi: "Dashboard dan layar infotainment" },
      { nomor: 3, gambar: "https://picsum.photos/seed/alphard-gal3/600/400", deskripsi: "Kabin baris kedua kursi kapten" },
      { nomor: 4, gambar: "https://picsum.photos/seed/alphard-gal4/600/400", deskripsi: "Panel kontrol dan sistem hiburan" },
      { nomor: 5, gambar: "https://picsum.photos/seed/alphard-gal5/600/400", deskripsi: "Interior kabin luas dan mewah" },
      { nomor: 6, gambar: "https://picsum.photos/seed/alphard-gal6/600/400", deskripsi: "Jendela panoramic dan atap kaca" },
      { nomor: 7, gambar: "https://picsum.photos/seed/alphard-gal7/600/400", deskripsi: "Logo dan gril depan" },
      { nomor: 8, gambar: "https://picsum.photos/seed/alphard-gal8/600/400", deskripsi: "Lampu utama LED dan DRL" },
      { nomor: 9, gambar: "https://picsum.photos/seed/alphard-gal9/600/400", deskripsi: "Setir kemudi dan panel instrumen" },
      { nomor: 10, gambar: "https://picsum.photos/seed/alphard-gal10/600/400", deskripsi: "Bagasi luas untuk perjalanan" },
      { nomor: 11, gambar: "https://picsum.photos/seed/alphard-gal11/600/400", deskripsi: "Tampak samping dan pelek" },
    ],
    varianHarga: [
      { nama: "2.5 G Bensin CVT", harga: 1652100000 },
      { nama: "2.5 G Hybrid CVT", harga: 1758000000 },
      { nama: "2.5 X Bensin CVT", harga: 1529000000 },
      { nama: "2.5 X Hybrid CVT", harga: 1635000000 },
    ],
  },
  {
    id: 2,
    slug: "new-camry-hev",
    nama: "New Camry HEV",
    hargaMulai: 895000000,
    hargaJuta: 895,
    transmisi: "HYBRID CVT",
    isPromo: true,
    heroImage: "https://picsum.photos/seed/camry-hero/1200/600",
    tagline: "Eksekutif Mewah dengan Performa Hybrid Terdepan",
    colorVariants: [
      {
        colorName: "Platinum White Pearl",
        colorHex: "#F5F5F0",
        image: "https://picsum.photos/seed/camry-white/600/400",
      },
      {
        colorName: "Attitude Black Mica",
        colorHex: "#1C1C1C",
        image: "https://picsum.photos/seed/camry-black/600/400",
      },
      {
        colorName: "Silver Metallic",
        colorHex: "#C0C0C0",
        image: "https://picsum.photos/seed/camry-silver/600/400",
      },
      {
        colorName: "Red Mica Metallic",
        colorHex: "#8B1A1A",
        image: "https://picsum.photos/seed/camry-red/600/400",
      },
    ],
    jumlahTipe: 3,
    deskripsi:
      "New Camry HEV menggabungkan elegansi eksekutif dengan efisiensi hybrid. Desain premium, fitur keselamatan terkini, dan kenyamanan berkendara yang tak tertandingi.",
    kategori: "Sedan",
    galeriFoto: [
      { nomor: 1, gambar: "https://picsum.photos/seed/camry-gal1/600/400", deskripsi: "Tampak depan New Camry HEV" },
      { nomor: 2, gambar: "https://picsum.photos/seed/camry-gal2/600/400", deskripsi: "Dashboard dan layar sentuh" },
      { nomor: 3, gambar: "https://picsum.photos/seed/camry-gal3/600/400", deskripsi: "Kabin interior mewah" },
      { nomor: 4, gambar: "https://picsum.photos/seed/camry-gal4/600/400", deskripsi: "Panel kontrol AC dan audio" },
      { nomor: 5, gambar: "https://picsum.photos/seed/camry-gal5/600/400", deskripsi: "Jok kulit premium" },
      { nomor: 6, gambar: "https://picsum.photos/seed/camry-gal6/600/400", deskripsi: "Setir kemudi multifungsi" },
      { nomor: 7, gambar: "https://picsum.photos/seed/camry-gal7/600/400", deskripsi: "Lampu belakang LED" },
      { nomor: 8, gambar: "https://picsum.photos/seed/camry-gal8/600/400", deskripsi: "Pelek alloy dan ban" },
      { nomor: 9, gambar: "https://picsum.photos/seed/camry-gal9/600/400", deskripsi: "Mesin hybrid dan kompartemen" },
      { nomor: 10, gambar: "https://picsum.photos/seed/camry-gal10/600/400", deskripsi: "Bagasi belakang luas" },
    ],
    varianHarga: [
      { nama: "2.5 G Bensin CVT", harga: 895000000 },
      { nama: "2.5 V Bensin CVT", harga: 965000000 },
      { nama: "2.5 Hybrid CVT", harga: 1055000000 },
    ],
  },
  {
    id: 3,
    slug: "new-yaris-gr-sport",
    nama: "New Yaris GR Sport",
    hargaMulai: 345000000,
    hargaJuta: 345,
    transmisi: "CVT MT",
    isPromo: false,
    heroImage: "https://picsum.photos/id/111/600/400",
    tagline: "Sporty, Agresif, dan Penuh Gaya",
    colorVariants: [
      {
        colorName: "Ignite Red",
        colorHex: "#C8102E",
        image: "https://picsum.photos/id/111/600/400",
      },
      {
        colorName: "Platinum White Pearl",
        colorHex: "#F5F5F0",
        image: "https://picsum.photos/seed/yaris-white/600/400",
      },
      {
        colorName: "Attitude Black Mica",
        colorHex: "#1C1C1C",
        image: "https://picsum.photos/seed/yaris-black/600/400",
      },
      {
        colorName: "Silver Metallic",
        colorHex: "#C0C0C0",
        image: "https://picsum.photos/seed/yaris-silver/600/400",
      },
    ],
    jumlahTipe: 4,
    deskripsi:
      "New Yaris GR Sport hadir dengan desain sporty yang agresif dan performa lincah. Dilengkapi dengan fitur keselamatan terkini dan kabin yang futuristik.",
    kategori: "Hatchback",
    galeriFoto: [
      { nomor: 1, gambar: "https://picsum.photos/id/111/600/400", deskripsi: "Tampak depan New Yaris GR Sport" },
    ],
    varianHarga: [
      { nama: "1.5 GR Sport M/T 3 S/B", harga: 345000000 },
      { nama: "1.5 GR Sport CVT 3 S/B", harga: 356000000 },
    ],
  },
  {
    id: 4,
    slug: "all-new-yaris-cross-hev",
    nama: "All New Yaris Cross HEV",
    hargaMulai: 449000000,
    hargaJuta: 449,
    transmisi: "CVT HYBRID CVT",
    isPromo: true,
    heroImage: "https://picsum.photos/id/183/600/400",
    tagline: "SUV Hybrid Siap Temani Petualangan Anda",
    colorVariants: [
      {
        colorName: "Platinum White Pearl",
        colorHex: "#F5F5F0",
        image: "https://picsum.photos/id/183/600/400",
      },
      {
        colorName: "Attitude Black Mica",
        colorHex: "#1C1C1C",
        image: "https://picsum.photos/seed/yaris-cross-black/600/400",
      },
      {
        colorName: "Silver Metallic",
        colorHex: "#C0C0C0",
        image: "https://picsum.photos/seed/yaris-cross-silver/600/400",
      },
      {
        colorName: "Red Mica Metallic",
        colorHex: "#8B1A1A",
        image: "https://picsum.photos/seed/yaris-cross-red/600/400",
      },
    ],
    jumlahTipe: 3,
    deskripsi:
      "All New Yaris Cross HEV adalah SUV hybrid yang menggabungkan ketangguhan, kenyamanan, dan efisiensi bahan bakar.",
    kategori: "SUV",
    galeriFoto: [
      { nomor: 1, gambar: "https://picsum.photos/id/183/600/400", deskripsi: "Tampak depan All New Yaris Cross HEV" },
    ],
    varianHarga: [
      { nama: "1.5 S HEV CVT", harga: 449000000 },
    ],
  },
  {
    id: 5,
    slug: "new-agya-gr-sport",
    nama: "New Agya GR Sport",
    hargaMulai: 167000000,
    hargaJuta: 167,
    transmisi: "CVT MT",
    isPromo: false,
    heroImage: "https://picsum.photos/id/183/600/400",
    tagline: "Mobil Perkotaan yang Gesit dan Irit",
    colorVariants: [
      {
        colorName: "Taffeta White",
        colorHex: "#FFFFFF",
        image: "https://picsum.photos/id/183/600/400",
      },
      {
        colorName: "Attitude Black Mica",
        colorHex: "#1C1C1C",
        image: "https://picsum.photos/seed/agya-black/600/400",
      },
      {
        colorName: "Silver Metallic",
        colorHex: "#C0C0C0",
        image: "https://picsum.photos/seed/agya-silver/600/400",
      },
      {
        colorName: "Red Mica Metallic",
        colorHex: "#8B1A1A",
        image: "https://picsum.photos/seed/agya-red/600/400",
      },
    ],
    jumlahTipe: 3,
    deskripsi:
      "New Agya GR Sport adalah hatchback perkotaan yang gesit, irit bahan bakar, dan mudah diparkir.",
    kategori: "Hatchback",
    galeriFoto: [
      { nomor: 1, gambar: "https://picsum.photos/id/183/600/400", deskripsi: "Tampak depan New Agya GR Sport" },
    ],
    varianHarga: [
      { nama: "1.2 G M/T", harga: 167000000 },
    ],
  },
];
