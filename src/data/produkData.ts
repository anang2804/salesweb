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
      {
        nomor: 4,
        gambar: "/images/products/APV/airbag.png",
        deskripsi: "Tampak airbag Suzuki APV",
      },
    ],
    varianHarga: [
      { nama: "APV GL", harga: 253500000 },
      { nama: "APV GX", harga: 267500000 },
      { nama: "APV SGX", harga: 272500000 },
    ],
  },
  {
    id: 2,
    slug: "ertiga",
    nama: "All New Ertiga",
    hargaMulai: 279000000,
    hargaJuta: 279,
    transmisi: "MT/AT",
    isPromo: false,
    heroImage: "/images/products/ertiga/ertiga.png",
    tagline: "Temukan All New Ertiga yang paling tepat untuk Anda",
    colorVariants: [
      {
        colorName: "MELLOW DEEP RED",
        colorHex: "#7d0d00",
        image: "/images/products/ertiga/MELLOW DEEP RED.png",
      },
      {
        colorName: "MARBLE BLACK",
        colorHex: "#08140c",
        image: "/images/products/ertiga/MARBLE BLACK.png",
      },
    ],
    jumlahTipe: 2,
    deskripsi:
      "All New Ertiga hadir dengan kenyamanan maksimal untuk perjalanan keluarga Anda.",
    kategori: "MPV",
    galeriFoto: [
      {
        nomor: 1,
        gambar: "/images/products/ertiga/dalam.png",
        deskripsi: "Tampak dalam All New Ertiga",
      },
      {
        nomor: 2,
        gambar: "/images/products/ertiga/mesin.png",
        deskripsi: "Tampak mesin All New Ertiga",
      },
      {
        nomor: 3,
        gambar: "/images/products/ertiga/esp.png",
        deskripsi: "Tampak ESP All New Ertiga",
      },
    ],
    varianHarga: [
      { nama: "ALL NEW ERTIGA MC GL MT", harga: 279000000 },
      { nama: "ALL NEW ERTIGA MC GL AT", harga: 290000000 },
    ],
  },
  {
    id: 3,
    slug: "s-presso",
    nama: "Suzuki S-presso",
    hargaMulai: 190500000,
    hargaJuta: 190.5,
    transmisi: "MT/AGS",
    isPromo: false,
    heroImage: "/images/products/s-presso/1.png",
    tagline: "Temukan Suzuki S-presso yang paling tepat untuk Anda",
    colorVariants: [
      {
        colorName: "Warna Standar",
        colorHex: "#D1D5DB",
        image: "/images/products/s-presso/2.png",
      },
    ],
    jumlahTipe: 2,
    deskripsi:
      "Suzuki S-presso hadir dengan gaya compact dan lincah untuk perkotaan.",
    kategori: "Hatchback",
    galeriFoto: [
      {
        nomor: 1,
        gambar: "/images/products/s-presso/3.png",
        deskripsi: "Tampak dalam Suzuki S-presso",
      },
      {
        nomor: 2,
        gambar: "/images/products/s-presso/4.png",
        deskripsi: "Tampak mesin Suzuki S-presso",
      },
      {
        nomor: 3,
        gambar: "/images/products/s-presso/5.png",
        deskripsi: "Tampak apar Suzuki S-presso",
      },
    ],
    varianHarga: [
      { nama: "S-presso GL MT", harga: 190500000 },
      { nama: "S-presso AGS", harga: 202000000 },
    ],
  },
  {
    id: 4,
    slug: "fronx",
    nama: "Suzuki Fronx",
    hargaMulai: 274500000,
    hargaJuta: 274.5,
    transmisi: "MT/AT",
    isPromo: false,
    heroImage: "/images/products/FRONX/1.png",
    tagline: "Temukan Suzuki Fronx yang paling tepat untuk Anda",
    colorVariants: [
      {
        colorName: "Warna Standar",
        colorHex: "#D1D5DB",
        image: "/images/products/FRONX/2.png",
      },
    ],
    jumlahTipe: 2,
    deskripsi:
      "Suzuki Fronx menawarkan kenyamanan crossover modern yang tangguh dan bergaya.",
    kategori: "Hatchback",
    galeriFoto: [
      {
        nomor: 1,
        gambar: "/images/products/FRONX/3.png",
        deskripsi: "Tampak dalam Suzuki Fronx",
      },
      {
        nomor: 2,
        gambar: "/images/products/FRONX/4.png",
        deskripsi: "Tampak sinyal Suzuki Fronx",
      },
      {
        nomor: 3,
        gambar: "/images/products/FRONX/5.png",
        deskripsi: "Tampak airbag Suzuki Fronx",
      },
      {
        nomor: 4,
        gambar: "/images/products/FRONX/6.png",
        deskripsi: "Tampak mesin Suzuki Fronx",
      },
    ],
    varianHarga: [
      { nama: "FRONX GL MT", harga: 274500000 },
      { nama: "FRONX GL AT", harga: 285500000 },
    ],
  },
  {
    id: 5,
    slug: "xl7",
    nama: "New Suzuki XL7",
    hargaMulai: 281750000,
    hargaJuta: 281.75,
    transmisi: "MT/AT",
    isPromo: false,
    heroImage: "/images/products/XL7/xl71.png",
    tagline: "Temukan New Suzuki XL7 yang paling tepat untuk Anda",
    colorVariants: [
      {
        colorName: "Warna Standar",
        colorHex: "#D1D5DB",
        image: "/images/products/XL7/color-standard.png",
      },
    ],
    jumlahTipe: 10,
    deskripsi:
      "New Suzuki XL7 tangguh dan andal untuk petualangan keluarga Anda.",
    kategori: "SUV",
    galeriFoto: [
      {
        nomor: 1,
        gambar: "/images/products/XL7/dalam.png",
        deskripsi: "Tampak dalam New Suzuki XL7",
      },
      {
        nomor: 2,
        gambar: "/images/products/XL7/tanjakan.png",
        deskripsi: "Tampak tanjakan New Suzuki XL7",
      },
      {
        nomor: 3,
        gambar: "/images/products/XL7/ruang.png",
        deskripsi: "Tampak ruang New Suzuki XL7",
      },
      {
        nomor: 4,
        gambar: "/images/products/XL7/mesin.png",
        deskripsi: "Tampak mesin New Suzuki XL7",
      },
    ],
    varianHarga: [
      { nama: "NEW XL7 ZETA MT", harga: 281750000 },
      { nama: "NEW XL7 ZETA AT", harga: 292750000 },
      { nama: "NEW XL7 BETA HYBRID MT", harga: 311000000 },
      { nama: "NEW XL7 BETA HYBRID AT", harga: 322250000 },
      { nama: "NEW XL7 ALPHA HYBRID MT", harga: 323750000 },
      { nama: "NEW XL7 ALPHA HYBRID AT", harga: 333750000 },
      { nama: "NEW XL7 ALPHA HYBRID 2 TONE MT", harga: 325750000 },
      { nama: "NEW XL7 ALPHA HYBRID 2 TONE AT", harga: 335750000 },
      { nama: "NEW XL7 ALPHA HYBRID KURO AT", harga: 337500000 },
      { nama: "NEW XL7 ALPHA HYBRID KURO 2 TONE AT", harga: 339500000 },
    ],
  },
  {
    id: 6,
    slug: "carry-pu",
    nama: "New Suzuki Carry PU",
    hargaMulai: 194500000,
    hargaJuta: 194.5,
    transmisi: "MT",
    isPromo: false,
    heroImage: "/images/products/CARRY-PU/1.png",
    tagline: "Temukan New Suzuki Carry PU yang paling tepat untuk Anda",
    colorVariants: [
      {
        colorName: "Warna Standar",
        colorHex: "#D1D5DB",
        image: "/images/products/CARRY-PU/2.png",
      },
    ],
    jumlahTipe: 4,
    deskripsi:
      "New Suzuki Carry PU adalah partner bisnis terpercaya Anda yang tangguh dan muat banyak.",
    kategori: "Commercial",
    galeriFoto: [
      {
        nomor: 1,
        gambar: "/images/products/CARRY-PU/3.png",
        deskripsi: "Tampak dalam New Suzuki Carry PU",
      },
      {
        nomor: 2,
        gambar: "/images/products/CARRY-PU/4.png",
        deskripsi: "Tampak body New Suzuki Carry PU",
      },
      {
        nomor: 3,
        gambar: "/images/products/CARRY-PU/5.png",
        deskripsi: "Tampak performa New Suzuki Carry PU",
      },
      {
        nomor: 4,
        gambar: "/images/products/CARRY-PU/6.png",
        deskripsi: "Tampak fitur New Suzuki Carry PU",
      },
      {
        nomor: 5,
        gambar: "/images/products/CARRY-PU/7.png",
        deskripsi: "Tampak interior New Suzuki Carry PU",
      },
      {
        nomor: 6,
        gambar: "/images/products/CARRY-PU/8.png",
        deskripsi: "Tampak mesin New Suzuki Carry PU",
      },
    ],
    varianHarga: [
      { nama: "NEW CARRY PU FD", harga: 194500000 },
      { nama: "NEW CARRY PU FD AC PS", harga: 202500000 },
      { nama: "NEW CARRY PU WD", harga: 196500000 },
      { nama: "NEW CARRY PU WD AC PS", harga: 204000000 },
    ],
  },
];
