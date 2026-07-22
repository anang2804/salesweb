"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { heroSlides } from "@/data/heroSlides";

export default function HeroBanner() {
  const swiperRef = useRef<SwiperClass | null>(null);

  function handleMouseEnter() {
    swiperRef.current?.autoplay?.stop();
  }

  function handleMouseLeave() {
    swiperRef.current?.autoplay?.start();
  }

  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y, Keyboard]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        effect="slide"
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }}
        navigation={{
          nextEl: ".hero-btn-next",
          prevEl: ".hero-btn-prev",
        }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        className="w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} lazy={index !== 0}>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:items-start md:text-left md:px-16 lg:px-24">
                <h2 className="text-white text-2xl font-bold leading-tight drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl">
                  {slide.headline}
                </h2>
                <p className="mt-3 text-white/90 text-sm leading-relaxed drop-shadow sm:text-base md:text-lg max-w-xl">
                  {slide.subheadline}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 sm:text-base"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        aria-label="Slide sebelumnya"
        className="hero-btn-prev absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white md:left-5 md:h-12 md:w-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        aria-label="Slide berikutnya"
        className="hero-btn-next absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white md:right-5 md:h-12 md:w-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hero-pagination absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Pilih slide" />

      <style>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.6);
          opacity: 1;
          border-radius: 9999px;
          transition: background 0.3s, transform 0.3s;
          cursor: pointer;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: #fff;
          transform: scale(1.3);
        }
        .hero-btn-prev.swiper-button-disabled,
        .hero-btn-next.swiper-button-disabled {
          opacity: 0.4;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
