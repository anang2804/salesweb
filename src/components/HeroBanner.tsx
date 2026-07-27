"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { heroSlides } from "@/data/heroSlides";

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const scrollStopTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % heroSlides.length;
        const track = trackRef.current;

        if (track) {
          track.scrollTo({
            left: track.clientWidth * nextIndex,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const syncFromTrack = () => {
      const nextIndex = Math.round(track.scrollLeft / track.clientWidth);

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

  function goPrev() {
    setActiveIndex((current) => {
      const nextIndex = current === 0 ? heroSlides.length - 1 : current - 1;
      const track = trackRef.current;

      if (track) {
        track.scrollTo({
          left: track.clientWidth * nextIndex,
          behavior: "smooth",
        });
      }

      activeIndexRef.current = nextIndex;
      return nextIndex;
    });
  }

  function goNext() {
    setActiveIndex((current) => {
      const nextIndex = (current + 1) % heroSlides.length;
      const track = trackRef.current;

      if (track) {
        track.scrollTo({
          left: track.clientWidth * nextIndex,
          behavior: "smooth",
        });
      }

      activeIndexRef.current = nextIndex;
      return nextIndex;
    });
  }

  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex w-full aspect-video overflow-x-auto overflow-y-hidden bg-black snap-x snap-mandatory scroll-smooth touch-pan-x select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {heroSlides.map((slide, index) => (
          <Link
            key={slide.id}
            href={slide.ctaLink}
            className="relative block h-full w-full shrink-0 snap-center basis-full"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover object-center"
            />
          </Link>
        ))}
      </div>

      <div
        className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2"
        aria-label="Pilih slide"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Buka slide ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => {
              activeIndexRef.current = index;
              setActiveIndex(index);
              const track = trackRef.current;

              if (track) {
                track.scrollTo({
                  left: track.clientWidth * index,
                  behavior: "smooth",
                });
              }
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-white" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
