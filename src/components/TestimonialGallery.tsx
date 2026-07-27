"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { testimonialGallery } from "@/data/testimonialGalleryData";

function TestimonialCard({
  item,
}: {
  item: (typeof testimonialGallery)[number];
}) {
  return (
    <article className="w-[85vw] shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-md sm:w-[420px] lg:w-[460px]">
      <div className="px-5 pt-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-0.5 shrink-0">
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
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow shrink-0">
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        </div>
        <h3 className="mt-3 font-bold text-gray-900 text-sm">{item.name}</h3>
        <p className="mt-0.5 text-xs text-gray-400">dari {item.city}</p>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-xl">
        <Image
          src={item.handoverPhoto}
          alt={`Serah terima ${item.name}`}
          fill
          sizes="(max-width: 639px) 85vw, (max-width: 1023px) 420px, 460px"
          className="object-cover"
        />
      </div>
    </article>
  );
}

export default function TestimonialGallery() {
  return (
    <section id="testimoni" className="w-full bg-[#C8102E]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          {/* Left Panel */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Gallery Serah
                <br />
                Terima
              </h2>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Dokumentasi serah terima kendaraan antara pihak Dealer dan
                Pelanggan
              </p>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="flex-1 min-w-0">
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory touch-pan-x sm:mx-0 sm:px-0 sm:pb-0">
              {testimonialGallery.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
