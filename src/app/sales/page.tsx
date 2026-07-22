import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, ClipboardList, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { salesProfile } from "@/data/salesProfile";

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | typeof InstagramIcon;
  hoverBg: string;
  hoverBorder: string;
  iconColor: string;
};

const contacts: ContactItem[] = [
  {
    label: "Hubungi",
    value: salesProfile.phoneDisplay,
    href: `tel:${salesProfile.phone}`,
    icon: Phone,
    hoverBg: "group-hover:bg-red-500",
    hoverBorder: "group-hover:border-red-500",
    iconColor: "text-red-500",
  },
  {
    label: "Instagram",
    value: salesProfile.instagramDisplay,
    href: salesProfile.instagram,
    icon: InstagramIcon,
    hoverBg: "group-hover:bg-pink-500",
    hoverBorder: "group-hover:border-pink-500",
    iconColor: "text-pink-500",
  },
  {
    label: "WhatsApp",
    value: salesProfile.whatsappDisplay,
    href: `https://wa.me/${salesProfile.whatsapp}/?text=${encodeURIComponent(salesProfile.whatsappText)}`,
    icon: MessageCircle,
    hoverBg: "group-hover:bg-emerald-500",
    hoverBorder: "group-hover:border-emerald-500",
    iconColor: "text-emerald-500",
  },
  {
    label: "Feedback",
    value: salesProfile.email,
    href: `mailto:${salesProfile.email}`,
    icon: Mail,
    hoverBg: "group-hover:bg-orange-500",
    hoverBorder: "group-hover:border-orange-500",
    iconColor: "text-orange-500",
  },
];

export default function SalesProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 lg:py-16 lg:px-6">

        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            {salesProfile.name}
          </h1>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#E30613]" />
          <p className="mt-4 text-sm text-gray-500">{salesProfile.title}</p>
        </header>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
          <div className="hidden lg:flex flex-col gap-3 w-full lg:w-56 xl:w-64">
            {contacts.slice(0, 2).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md ${c.hoverBorder}`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 ${c.iconColor} ${c.hoverBg} transition-colors group-hover:text-white`}
                >
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 leading-none mb-1">{c.label}</p>
                  <p className="text-sm font-bold text-gray-800 truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-md shrink-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 opacity-60 blur-sm" aria-hidden="true" />
            <Image
              src={salesProfile.brochureImage}
              alt={salesProfile.brochureImageAlt}
              width={500}
              height={650}
              loading="lazy"
              className="relative w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="hidden lg:flex flex-col gap-3 w-full lg:w-56 xl:w-64">
            {contacts.slice(2, 4).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md ${c.hoverBorder}`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 ${c.iconColor} ${c.hoverBg} transition-colors group-hover:text-white`}
                >
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 leading-none mb-1">{c.label}</p>
                  <p className="text-sm font-bold text-gray-800 truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex lg:hidden flex-col gap-3 w-full">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md ${c.hoverBorder}`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 ${c.iconColor} ${c.hoverBg} transition-colors group-hover:text-white`}
                >
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 leading-none mb-1">{c.label}</p>
                  <p className="text-sm font-bold text-gray-800 truncate">{c.value}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={salesProfile.pricelistUrl}
        className="fixed left-4 bottom-20 lg:left-6 lg:bottom-24 z-40 flex items-center gap-2 rounded-full bg-[#E30613] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <ClipboardList size={18} />
        Pricelist
      </Link>

      <div className="sticky bottom-0 z-30 w-full bg-teal-700">
        <a
          href={`tel:${salesProfile.phone}`}
          className="flex h-14 w-full items-center justify-center gap-2 text-sm font-bold text-white hover:bg-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <Phone size={16} />
          tel:{salesProfile.phoneDisplay}
        </a>
      </div>
    </main>
  );
}
