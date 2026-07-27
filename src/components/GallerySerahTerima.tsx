"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

import { galleryItems } from "@/data/galleryData";

function GalleryCard({ item }: { item: (typeof galleryItems)[number] }) {
  return (
    <article className="w-[85vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md sm:w-[420px] lg:w-[480px]">
      <div className="relative p-5 pb-4 md:p-6">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < item.rating
                  ? "fill-red-500 text-red-500"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <h3 className="mt-6 font-bold text-gray-900 text-sm md:text-base">
          {item.customerName}
        </h3>
        <p className="text-xs text-gray-400 md:text-sm">{item.city}</p>
        <div className="absolute top-5 right-5 h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow">
          <Image
            src={item.avatar}
            alt={item.customerName}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.documentationPhoto}
          alt={`Dokumentasi ${item.customerName}`}
          fill
          sizes="(max-width: 639px) 85vw, (max-width: 1023px) 420px, 480px"
          className="object-cover"
        />
      </div>
    </article>
  );
}

export default function GallerySerahTerima() {
  return (
    <section className="w-full bg-red-600">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="rounded-2xl bg-white p-6 md:p-8">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                Gallery Serah
                <br />
                Terima
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Dokumentasi serah terima kendaraan antara pihak Dealer dan
                Pelanggan
              </p>
              <Link
                href="/galeri"
                className="mt-6 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Lihat Semua
              </Link>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory touch-pan-x sm:mx-0 sm:px-0 sm:pb-0">
              {galleryItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
