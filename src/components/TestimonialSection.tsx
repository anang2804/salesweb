import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FBBF24" : "none"}
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

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section aria-labelledby="testimonial-heading" className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="testimonial-heading"
            className="text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Ribuan pelanggan puas berbelanja bersama kami
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex flex-col gap-4 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={`Foto profil ${t.name}`}
                    fill
                    sizes="40px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>

              <StarRating rating={t.rating} />

              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs text-gray-400">
                  Produk:{" "}
                  <span className="font-medium text-gray-600">{t.product}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{t.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center items-center gap-6 flex-wrap">
          {[
            { value: "10.000+", label: "Pelanggan Puas" },
            { value: "50.000+", label: "Produk Terjual" },
            { value: "4.8/5", label: "Rating Rata-rata" },
            { value: "99%", label: "Tepat Waktu" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
