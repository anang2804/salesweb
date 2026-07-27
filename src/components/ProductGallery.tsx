"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { GaleriFotoItem } from "@/data/produkData";

interface ProductGalleryProps {
  items: GaleriFotoItem[];
  namaProduk: string;
}

export default function ProductGallery({
  items,
  namaProduk,
}: ProductGalleryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  function goPrev() {
    const track = trackRef.current;

    if (!track) return;

    track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
  }

  function goNext() {
    const track = trackRef.current;

    if (!track) return;

    track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
  }

  if (items.length === 0) return null;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Galeri Foto
        </h2>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex w-full gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={`Galeri foto ${namaProduk}`}
          >
            {items.map((item) => (
              <div
                key={item.nomor}
                className="relative aspect-[4/3] shrink-0 snap-start overflow-hidden rounded-lg bg-gray-100 shadow-sm ring-1 ring-black/5 min-w-full sm:min-w-[calc((100%-14px)/2)] lg:min-w-[calc((100%-32px)/3)]"
              >
                <span className="absolute bottom-2 right-3 z-10 select-none text-xl font-bold leading-none text-white/40 pointer-events-none">
                  {item.nomor}
                </span>
                <Image
                  src={item.gambar}
                  alt={item.deskripsi}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={item.nomor === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
