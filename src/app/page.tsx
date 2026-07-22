import HeroBanner from "@/components/HeroBanner";
import ProductSlider from "@/components/ProductSlider";
import SalesSection from "@/components/SalesSection";
import TestimonialGallery from "@/components/TestimonialGallery";
import Link from "next/link";

import { produkList } from "@/data/produkData";

function SectionHeader({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 id={id} className="text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-1 text-gray-500 text-sm">{subtitle}</p>
      </div>
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        Lihat Semua
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <section
        aria-labelledby="featured-heading"
        className="py-12 bg-white overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="featured-heading"
            title="Produk"
            subtitle="Pilihan terbaik dari kami untuk Anda"
          />
          <ProductSlider products={produkList.slice(0, 4)} id="featured" />
        </div>
      </section>

      <SalesSection />

      <TestimonialGallery />
    </main>
  );
}
