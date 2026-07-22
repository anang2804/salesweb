import Image from "next/image";
import Link from "next/link";

const agent = {
  name: "Andi Firmansyah",
  role: "Sales Executive",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  phone: "081284975517",
  whatsapp: "6281284975517",
  whatsappText: "Halo Andi, info dari website, mau tanya promo produk.",
  instagram: "https://www.instagram.com/",
  instagramName: "Instagram",
  email: "andi@websales.id",
};

export default function AgentSection() {
  return (
    <section aria-labelledby="agent-heading" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2
            id="agent-heading"
            className="text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Sales Kami
          </h2>
          <p className="mt-1 text-gray-500 text-sm">
            Hubungi agent kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="flex w-full sm:w-auto sm:inline-flex rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-44 sm:w-52 shrink-0" style={{ minHeight: "320px" }}>
            <Image
              src={agent.avatar}
              alt={agent.name}
              fill
              sizes="208px"
              loading="lazy"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col bg-[#1a1a2e] divide-y divide-white/10 flex-1 sm:flex-none">
            <a
              href={`tel:${agent.phone}`}
              aria-label="Telepon"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.9 5.9l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/40 leading-none mb-1">Hubungi</p>
                <p className="text-sm font-semibold text-white">{agent.phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${agent.whatsapp}/?text=${encodeURIComponent(agent.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-emerald-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/40 leading-none mb-1">WhatsApp</p>
                <p className="text-sm font-semibold text-white">+{agent.whatsapp}</p>
              </div>
            </a>

            <a
              href={agent.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-pink-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/40 leading-none mb-1">Terhubung</p>
                <p className="text-sm font-semibold text-white">{agent.instagramName}</p>
              </div>
            </a>

            <a
              href={`mailto:${agent.email}`}
              aria-label="Email"
              className="group flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-white/40 leading-none mb-1">Feedback</p>
                <p className="text-sm font-semibold text-white">{agent.email}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/sales"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Profil Sales Kami
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
