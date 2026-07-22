"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import type { GaleriFotoItem } from "@/data/produkData";

interface ProductGalleryProps {
  items: GaleriFotoItem[];
  namaProduk: string;
}

export default function ProductGallery({ items, namaProduk }: ProductGalleryProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Galeri Foto
        </h2>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            gap: "14px",
            pagination: false,
            arrows: false,
            breakpoints: {
              768: { perPage: 2, gap: "12px" },
              480: { perPage: 1, gap: "10px" },
            },
          }}
          aria-label={`Galeri foto ${namaProduk}`}
        >
          {items.map((item) => (
            <SplideSlide key={item.nomor}>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <span className="absolute bottom-2 right-3 text-xl font-bold text-white/40 select-none pointer-events-none z-10 leading-none">
                  {item.nomor}
                </span>
                <img
                  src={item.gambar}
                  alt={item.deskripsi}
                  className="w-full h-full object-cover"
                  loading={item.nomor <= 3 ? "eager" : "lazy"}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
