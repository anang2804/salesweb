import Link from "next/link";
import ProductCatalogCard from "./ProductCatalogCard";
import { produkList } from "@/data/produkData";

export default function AllProductsSection() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Katalog Kami
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
            Temukan mobil Toyota impian Anda
          </p>
        </div>

        {/* Grid menampilkan SEMUA produk */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {produkList.map((produk, i) => (
            <ProductCatalogCard
              key={produk.id}
              produk={produk}
              priority={i < 4}
            />
          ))}
        </div>

        {/* Link Lihat Semua Produk di bagian bawah */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
