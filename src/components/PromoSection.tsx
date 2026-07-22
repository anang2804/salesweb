import Link from "next/link";

export default function PromoSection() {
  return (
    <section aria-labelledby="promo-heading" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-10">
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm mb-3">
                Flash Sale
              </span>
              <h2 id="promo-heading" className="text-2xl font-bold text-white sm:text-3xl">
                Diskon Hingga 50%
              </h2>
              <p className="mt-2 text-indigo-100 text-sm leading-relaxed">
                Penawaran terbatas untuk produk pilihan. Jangan sampai kehabisan!
              </p>
              <Link
                href="/products"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Lihat Produk Diskon
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
            <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-white/10" aria-hidden="true" />
            <div className="absolute -right-4 top-4 h-24 w-24 rounded-full bg-white/10" aria-hidden="true" />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-8 md:p-10">
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm mb-3">
                Member Baru
              </span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Gratis Ongkos Kirim
              </h2>
              <p className="mt-2 text-amber-50 text-sm leading-relaxed">
                Untuk pembelian pertama min. Rp 100.000. Daftar sekarang dan nikmati promonya!
              </p>
              <Link
                href="/products"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Mulai Belanja
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
            <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-white/10" aria-hidden="true" />
            <div className="absolute left-20 -top-4 h-20 w-20 rounded-full bg-white/10" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: "🚚", title: "Gratis Ongkir", desc: "Min. pembelian Rp 100rb" },
            { icon: "🔄", title: "Retur 30 Hari", desc: "Garansi uang kembali" },
            { icon: "🔒", title: "Pembayaran Aman", desc: "Transaksi terenkripsi" },
            { icon: "🎧", title: "CS 24/7", desc: "Siap membantu Anda" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
