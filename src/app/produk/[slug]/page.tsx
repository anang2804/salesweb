"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { Tag, FileText } from "lucide-react";
import { produkList } from "@/data/produkData";
import ProductGallery from "@/components/ProductGallery";
import PriceListSection from "@/components/PriceListSection";
import RelatedProducts from "@/components/RelatedProducts";

function formatHarga(amount: number) {
  if (amount >= 1000000000) {
    const miliar = amount / 1000000000;
    return `${miliar.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Milyar`;
  }
  if (amount >= 1000000) {
    const juta = amount / 1000000;
    return `${juta.toLocaleString("id-ID", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Juta`;
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function ProdukDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const produk = produkList.find((p) => p.slug === slug);

  if (!produk) notFound();

  const [warnaAktif, setWarnaAktif] = useState(0);
  const fotoAktif = produk.varianWarna[warnaAktif]?.foto ?? produk.heroImage;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[320px] overflow-hidden bg-gray-900">
        <Image
          src={produk.heroImage}
          alt={produk.nama}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            {produk.nama}
          </h1>
          <p className="mt-2 text-base md:text-lg text-white/80 max-w-2xl drop-shadow">
            {produk.tagline}
          </p>
        </div>
      </section>

      {/* Detail Produk — 2 Kolom */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Kolom Kiri: Info Harga */}
          <div className="flex flex-col justify-center">
            {/* Badge Harga */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white rounded-xl px-5 py-3 w-fit">
              <Tag className="h-5 w-5" />
              <div>
                <p className="text-xs font-medium text-white/80 leading-tight">
                  Harga Mulai
                </p>
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  {formatHarga(produk.hargaMulai)}
                </p>
              </div>
            </div>

            {/* Nama Model */}
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {produk.nama}
            </h2>

            {/* Jumlah Varian */}
            <p className="mt-2 text-base text-gray-500">
              Varian: {produk.jumlahTipe} Tipe
            </p>

            {/* Deskripsi */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {produk.deskripsi}
            </p>
          </div>

          {/* Kolom Kanan: Foto + Pemilih Warna */}
          <div>
            {/* Foto close-up */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={fotoAktif}
                alt={`${produk.nama} - ${produk.varianWarna[warnaAktif]?.warna}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Label warna aktif */}
            <p className="mt-3 text-sm font-medium text-gray-700 text-center">
              {produk.varianWarna[warnaAktif]?.warna}
            </p>

            {/* Dot indicator warna */}
            <div className="mt-3 flex items-center justify-center gap-3">
              {produk.varianWarna.map((v, i) => (
                <button
                  key={v.kodeWarna}
                  onClick={() => setWarnaAktif(i)}
                  aria-label={`Pilih warna ${v.warna}`}
                  aria-pressed={warnaAktif === i}
                  className={`h-7 w-7 rounded-full border-2 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    warnaAktif === i
                      ? "border-indigo-600 scale-110"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: v.kodeWarna }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Foto */}
      <ProductGallery items={produk.galeriFoto} namaProduk={produk.nama} />

      {/* Price List Section */}
      <PriceListSection produk={produk} />

      {/* Related Products */}
      <RelatedProducts produkList={produkList} currentSlug={slug} />

      {/* Floating Pricelist */}
      <Link
        href="/pricelist"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <FileText className="h-4 w-4" />
        Pricelist
      </Link>
    </main>
  );
}
