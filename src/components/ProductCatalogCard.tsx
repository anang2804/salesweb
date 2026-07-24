import Link from "next/link";
import Image from "next/image";
import type { Produk } from "@/data/produkData";

interface ProductCatalogCardProps {
  produk: Produk;
  priority?: boolean;
  showBrand?: boolean;
}

export default function ProductCatalogCard({
  produk,
  priority = false,
  showBrand = true,
}: ProductCatalogCardProps) {
  return (
    <Link
      href={`/produk/${produk.slug}`}
      className="group block bg-white rounded-2xl overflow-visible shadow-sm hover:shadow-lg transition-shadow duration-200"
    >
      {/* Wrapper gambar + badge — posisi relative supaya badge bisa overflow */}
      <div className="relative">
        {/* Area gambar */}
        <div className="relative w-full bg-white rounded-t-2xl overflow-hidden">
          {/* Aksen merah diagonal */}
          <div className="absolute inset-0 overflow-hidden rounded-t-2xl pointer-events-none">
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rotate-45 origin-top-right"
              style={{ opacity: 0.12 }}
            />
          </div>

          {/* Siluet skyline bawah */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/70 to-transparent pointer-events-none z-10" />

          {/* Foto mobil */}
          <div className="relative w-full" style={{ paddingBottom: "66.666%" }}>
            <Image
              src={produk.heroImage}
              alt={produk.nama}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4"
            />
          </div>

          {/* Logo pojok kiri atas */}
          {showBrand && (
            <div className="absolute top-3 left-3 z-20 bg-white/90 rounded-md px-2 py-1 shadow-sm">
              <span className="text-[10px] font-bold text-gray-800">SUZUKI</span>
            </div>
          )}

          {/* Label nama model pojok kanan atas */}
          <div className="absolute top-3 right-3 z-20 bg-red-600 rounded-md px-2 py-1">
            <span className="text-[10px] font-semibold text-white whitespace-nowrap">
              {produk.nama}
            </span>
          </div>

          {/* Badge PROMO pojok kiri atas (di bawah logo) */}
          {produk.isPromo && (
            <div className={`absolute ${showBrand ? "top-10" : "top-3"} left-3 z-20`}>
              <span className="inline-block rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-bold text-white">
                PROMO
              </span>
            </div>
          )}
        </div>

        {/* Badge harga lingkaran — di luar div overflow-hidden, menumpuk di pojok kanan bawah */}
        <div className="absolute -bottom-10 right-4 z-20">
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-red-600 shadow-md">
            <span className="text-xl font-bold text-white leading-none">
              {produk.hargaJuta}
            </span>
            <span className="text-[11px] font-semibold text-white/80 leading-none mt-1">
              Jt
            </span>
          </div>
        </div>
      </div>

      {/* Info bawah */}
      <div className="px-4 pt-14 pb-4">
        <p className="text-sm font-bold text-gray-900 leading-snug">
          {produk.nama}
        </p>
        <p className="mt-1 text-xs font-semibold text-red-600">
          Transmisi : {produk.transmisi} / {produk.jumlahTipe} Type
        </p>
      </div>
    </Link>
  );
}
