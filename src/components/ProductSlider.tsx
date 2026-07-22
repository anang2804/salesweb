"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";

import type { Produk } from "@/data/produkData";
import ProductCatalogCard from "./ProductCatalogCard";

interface ProductSliderProps {
  products: Produk[];
  id: string;
}

export default function ProductSlider({ products, id }: ProductSliderProps) {
  return (
    <Swiper
      key={products.length}
      modules={[Autoplay, A11y]}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      slidesPerView={1.2}
      spaceBetween={15}
      allowTouchMove
      breakpoints={{
        768:  { slidesPerView: 2.2,   spaceBetween: 15 },
        1024: { slidesPerView: 4,   spaceBetween: 15 },
      }}
      a11y={{ enabled: true }}
      aria-label={`Slider produk ${id}`}
      className="w-full !overflow-visible"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!h-auto !overflow-visible">
          <ProductCatalogCard produk={product} showBrand={false} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
