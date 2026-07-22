"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { use } from "react";

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={star <= Math.round(rating) ? "#FBBF24" : "none"}
            stroke="#FBBF24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating} ({count} ulasan)
      </span>
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-indigo-600">Beranda</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:text-indigo-600">Produk</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="hover:text-indigo-600"
              >
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[180px]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <Image
                src={product.images[activeImage]}
                alt={`${product.name} – gambar ${activeImage + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Lihat gambar ${i + 1}`}
                    aria-pressed={activeImage === i}
                    className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      activeImage === i ? "border-indigo-600" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="64px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                {product.category}
              </Link>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl leading-snug">
                {product.name}
              </h1>
              <div className="mt-3">
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                {formatRupiah(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    {formatRupiah(product.originalPrice)}
                  </span>
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-sm font-semibold text-red-600">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Keunggulan Produk:</p>
              <ul className="space-y-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Stok:</span>
              <span
                className={`text-sm font-semibold ${
                  product.stock > 10 ? "text-emerald-600" : "text-amber-600"
                }`}
              >
                {product.stock > 10 ? "Tersedia" : `Sisa ${product.stock}`}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div className="flex items-center rounded-xl border border-gray-200">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Kurangi jumlah"
                  className="flex h-10 w-10 items-center justify-center text-gray-600 hover:bg-gray-50 rounded-l-xl transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <span className="w-10 text-center text-sm font-semibold text-gray-900" aria-live="polite" aria-atomic>
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                  aria-label="Tambah jumlah"
                  className="flex h-10 w-10 items-center justify-center text-gray-600 hover:bg-gray-50 rounded-r-xl transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>

              <button className="flex-1 rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                + Tambah ke Keranjang
              </button>
            </div>

            <button className="w-full rounded-full border-2 border-indigo-600 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Beli Sekarang
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="mt-16">
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900 sm:text-2xl mb-6"
            >
              Produk Serupa
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
