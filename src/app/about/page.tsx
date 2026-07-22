import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami – WebSales",
  description: "Kenali lebih dekat WebSales, toko online terpercaya dengan produk berkualitas untuk Anda.",
};

const team = [
  {
    name: "Andi Firmansyah",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Siti Rahayu",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Reza Pratama",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  },
  {
    name: "Maya Indahsari",
    role: "Head of Customer Experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
];

const values = [
  {
    icon: "💎",
    title: "Kualitas Terjamin",
    desc: "Setiap produk kami dikurasi dengan ketat untuk memastikan standar kualitas tertinggi.",
  },
  {
    icon: "🤝",
    title: "Kepercayaan",
    desc: "Transparansi dan kejujuran adalah fondasi hubungan kami dengan pelanggan.",
  },
  {
    icon: "⚡",
    title: "Pengiriman Cepat",
    desc: "Kami berkomitmen mengirimkan pesanan Anda secepat dan seaman mungkin.",
  },
  {
    icon: "💬",
    title: "Layanan Prima",
    desc: "Tim kami siap membantu Anda 24/7 untuk pengalaman belanja yang menyenangkan.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Tentang WebSales
          </h1>
          <p className="mt-4 text-indigo-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Kami hadir untuk memudahkan hidup Anda dengan menghadirkan produk berkualitas terbaik langsung ke tangan Anda.
          </p>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-40 w-[120%] rounded-[50%] bg-white" aria-hidden="true" />
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Cerita Kami
              </h2>
              <div className="mt-4 space-y-4 text-gray-600 text-sm leading-relaxed sm:text-base">
                <p>
                  WebSales lahir pada tahun 2020 dari sebuah mimpi sederhana: membuat belanja online menjadi pengalaman yang menyenangkan, mudah, dan terpercaya untuk semua orang Indonesia.
                </p>
                <p>
                  Dimulai dari sebuah kamar kecil dengan hanya 20 produk, kini WebSales telah berkembang menjadi platform e-commerce dengan lebih dari 500 produk berkualitas dan melayani lebih dari 10.000 pelanggan di seluruh Indonesia.
                </p>
                <p>
                  Kami percaya bahwa setiap pelanggan berhak mendapatkan pengalaman berbelanja terbaik — dari pilihan produk yang berkualitas, harga yang fair, hingga layanan pelanggan yang ramah dan responsif.
                </p>
              </div>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Mulai Berbelanja
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Tim WebSales bekerja bersama"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="text-2xl font-bold text-center text-gray-900 sm:text-3xl mb-10"
          >
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center gap-4 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <span className="text-4xl" aria-hidden="true">{v.icon}</span>
                <h3 className="text-base font-semibold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="team-heading"
            className="text-2xl font-bold text-center text-gray-900 sm:text-3xl mb-10"
          >
            Tim Kami
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center gap-3">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-indigo-100">
                  <Image
                    src={member.image}
                    alt={`Foto ${member.name}`}
                    fill
                    sizes="96px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Siap Berbelanja Bersama Kami?
          </h2>
          <p className="mt-3 text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
            Ribuan produk berkualitas menunggu Anda. Nikmati pengalaman belanja yang mudah dan menyenangkan.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/products"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Lihat Produk
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
