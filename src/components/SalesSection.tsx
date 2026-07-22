import Image from "next/image";
import { Phone, MessageCircle, Instagram, Mail } from "lucide-react";

import { salesTeam } from "@/data/salesTeam";

export default function SalesSection() {
  const sales = salesTeam[0];

  const leftCards = [
    {
      icon: Phone,
      label: "Hubungi",
      value: sales.phone,
      href: `tel:${sales.phone}`,
      isExternal: false,
    },
    {
      icon: Instagram,
      label: "Terhubung",
      value: sales.instagramName,
      href: sales.instagram,
      isExternal: true,
    },
  ] as const;

  const rightCards = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: `+${sales.whatsapp}`,
      href: `https://wa.me/${sales.whatsapp}/?text=${encodeURIComponent(sales.whatsappText)}`,
      isExternal: true,
    },
    {
      icon: Mail,
      label: "Feedback",
      value: sales.email,
      href: `mailto:${sales.email}`,
      isExternal: false,
    },
  ] as const;

  function ContactCard({
    icon: Icon,
    label,
    value,
    href,
    isExternal,
  }: {
    icon: typeof Phone;
    label: string;
    value: string;
    href: string;
    isExternal: boolean;
  }) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center gap-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-gray-400">{label}</p>
          <p className="text-sm font-bold text-gray-900">{value}</p>
        </div>
      </a>
    );
  }

  return (
    <section aria-labelledby="dealer-heading" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="dealer-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {sales.dealerName}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-red-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            {leftCards.map((c) => (
              <ContactCard key={c.label} {...c} />
            ))}
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src={sales.brochureImage}
                alt={sales.brochureImageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 order-3">
            {rightCards.map((c) => (
              <ContactCard key={c.label} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
