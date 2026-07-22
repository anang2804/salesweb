import ProductCatalogCard from "@/components/ProductCatalogCard";
import { produkList } from "@/data/produkData";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Katalog Mobil
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            {produkList.length} model tersedia
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {produkList.map((produk, i) => (
            <ProductCatalogCard
              key={produk.id}
              produk={produk}
              priority={i < 4}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
