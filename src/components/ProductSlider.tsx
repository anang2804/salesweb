"use client";

import { useEffect, useRef, useState } from "react";

import type { Produk } from "@/data/produkData";
import ProductCatalogCard from "./ProductCatalogCard";

interface ProductSliderProps {
  products: Produk[];
  id: string;
}

export default function ProductSlider({ products, id }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const scrollStopTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (products.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % products.length;
        const track = trackRef.current;
        const slide = track?.children[nextIndex] as HTMLElement | undefined;

        if (slide && track) {
          track.scrollTo({
            left: slide.offsetLeft,
            behavior: "smooth",
          });
        }

        activeIndexRef.current = nextIndex;
        return nextIndex;
      });
    }, 3500);

    return () => window.clearInterval(timer);
  }, [products.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const syncFromTrack = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length === 0) return;

      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      children.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(slideCenter - trackCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    const handleScroll = () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = window.requestAnimationFrame(() => {
        syncFromTrack();

        if (scrollStopTimerRef.current !== null) {
          window.clearTimeout(scrollStopTimerRef.current);
        }

        scrollStopTimerRef.current = window.setTimeout(() => {
          syncFromTrack();
        }, 80);

        rafRef.current = null;
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      if (scrollStopTimerRef.current !== null) {
        window.clearTimeout(scrollStopTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-3 sm:space-y-4">
      <div
        ref={trackRef}
        aria-label={`Slider produk ${id}`}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x pb-2 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="shrink-0 snap-center basis-[84%] sm:basis-[48%] lg:basis-[23.5%]"
          >
            <ProductCatalogCard produk={product} showBrand={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
