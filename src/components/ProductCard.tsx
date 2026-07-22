"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating ${rating} dari 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
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
  );
}

const badgeConfig = {
  new: { label: "Baru", className: "bg-emerald-500" },
  sale: { label: "Diskon", className: "bg-red-500" },
  bestseller: { label: "Terlaris", className: "bg-amber-500" },
};

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const discount =
    product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-white text-xs font-semibold ${badgeConfig[product.badge].className}`}
          >
            {badgeConfig[product.badge].label}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-semibold">
            -{discount}%
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-1.5">
        <p className="text-xs text-indigo-600 font-medium">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-indigo-700 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mt-auto pt-1">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-base font-bold text-gray-900">
            {formatRupiah(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="mt-2 w-full rounded-full bg-indigo-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          + Keranjang
        </button>
      </div>
    </Link>
  );
}
