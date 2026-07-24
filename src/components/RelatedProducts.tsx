"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import type { Produk } from "@/data/produkData";

interface RelatedProductsProps {
  produkList: Produk[];
  currentSlug: string;
}

function formatHarga(amount: number) {
  if (amount >= 1000000000) {
    const miliar = amount / 1000000000;
    return `${miliar
      .toLocaleString("id-ID", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })
      .replace(",", ".")}`;
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function RelatedCard({ produk }: { produk: Produk }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Gambar */}
      <div className="relative w-full bg-white">
        <div className="relative w-full" style={{ paddingBottom: "66.666%" }}>
          {/* Diagonal red accent + skyline */}
          <div className="absolute inset-0 overflow-hidden rounded-t-xl">
            <div
              className="absolute -top-8 -right-8 w-32 h-32 bg-red-600 rotate-45 origin-top-right"
              style={{ opacity: 0.15 }}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent" />

          <Image
            src={produk.heroImage}
            alt={produk.nama}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            className="object-contain p-4"
          />

          {/* Label model pojok kanan atas */}
          <div className="absolute top-3 right-3 bg-red-600 rounded-md px-2 py-1">
            <span className="text-[10px] font-semibold text-white whitespace-nowrap">
              {produk.nama}
            </span>
          </div>
        </div>
      </div>

      {/* Badge harga — overlap */}
      <div className="relative flex justify-center -mt-4 z-10">
        <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-bold text-white shadow-md">
          {formatHarga(produk.hargaMulai)}
        </span>
      </div>

      {/* Info model */}
      <div className="px-4 pt-3 pb-2 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-gray-900 truncate flex-1">
            {produk.nama}
          </span>
          <span className="text-xs font-semibold text-red-600 whitespace-nowrap">
            {produk.jumlahTipe} Tipe
          </span>
        </div>

        <hr className="my-3 border-gray-100" />

        <div className="flex justify-center pb-1">
          <Link
            href={`/produk/${produk.slug}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
            aria-label={`Lihat detail ${produk.nama}`}
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RelatedProducts({
  produkList,
  currentSlug,
}: RelatedProductsProps) {
  const related = produkList.filter((p) => p.slug !== currentSlug).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Model Lainnya
        </h2>

        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "20px",
            pagination: false,
            arrows: false,
            autoplay: true,
            interval: 3500,
            pauseOnHover: true,
            resetProgress: false,
            breakpoints: {
              1024: { perPage: 2, gap: "14px" },
              640: { perPage: 1, gap: "14px" },
            },
          }}
          aria-label="Model lainnya"
        >
          {related.map((item) => (
            <SplideSlide key={item.id}>
              <RelatedCard produk={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
