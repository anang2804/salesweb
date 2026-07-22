"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import { galleryItems } from "@/data/galleryData";

function GalleryCard({
  item,
}: {
  item: (typeof galleryItems)[number];
}) {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative p-5 pb-4">
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
        <h3 className="mt-2 font-bold text-gray-900 text-sm">
          {item.customerName}
        </h3>
        <p className="text-xs text-gray-400">{item.city}</p>
        <div className="absolute top-5 right-5 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow">
          <Image
            src={item.avatar}
            alt={item.customerName}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={item.documentationPhoto}
          alt={`Dokumentasi ${item.customerName}`}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 35vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function GallerySerahTerima() {
  return (
    <section className="w-full bg-red-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 xl:w-80 shrink-0">
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Gallery Serah
                <br />
                Terima
              </h2>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Dokumentasi serah terima kendaraan antara pihak Dealer dan
                Pelanggan
              </p>
              <Link
                href="/galeri"
                className="mt-6 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Lihat Semua
              </Link>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  aria-label="Sebelumnya"
                  className="gallery-btn-prev flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:border-red-400 hover:text-red-600 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Berikutnya"
                  className="gallery-btn-next flex h-10 w-10 items-center justify-center rounded-lg border border-red-500 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Navigation, A11y]}
              navigation={{
                nextEl: ".gallery-btn-next",
                prevEl: ".gallery-btn-prev",
              }}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                768: { slidesPerView: 1.5, spaceBetween: 16 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
              }}
              a11y={{ enabled: true }}
              className="w-full"
            >
              {galleryItems.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <GalleryCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
