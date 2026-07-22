"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import { testimonialGallery } from "@/data/testimonialGalleryData";

export default function TestimonialGallery() {
  return (
    <section className="w-full bg-[#C8102E]">
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
              <Link
                href="/galeri"
                className="mt-6 inline-flex items-center rounded-full bg-[#C8102E] px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Lihat Semua
              </Link>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  aria-label="Sebelumnya"
                  className="testimonial-btn-prev flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:border-red-400 hover:text-red-600 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Berikutnya"
                  className="testimonial-btn-next flex h-10 w-10 items-center justify-center rounded-lg border border-red-500 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              navigation={{
                nextEl: ".testimonial-btn-next",
                prevEl: ".testimonial-btn-prev",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                768: { slidesPerView: 1.5, spaceBetween: 16 },
                1024: { slidesPerView: 2.5, spaceBetween: 20 },
              }}
              a11y={{ enabled: true }}
              className="w-full"
            >
              {testimonialGallery.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <div className="h-full rounded-xl overflow-hidden shadow-md bg-white">
                    <div className="p-5 pb-4">
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
                      <h3 className="mt-3 font-bold text-gray-900 text-sm">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-400">
                        dari {item.city}
                      </p>
                    </div>
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={item.handoverPhoto}
                        alt={`Serah terima ${item.name}`}
                        fill
                        sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 35vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
