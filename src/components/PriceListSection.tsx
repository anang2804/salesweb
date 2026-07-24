"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Share2, MessageCircle } from "lucide-react";

import type { Produk } from "@/data/produkData";

interface PriceListSectionProps {
  produk: Produk;
}

const NO_WHATSAPP = "6281234567890";

function formatHargaRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function waUrl(text: string) {
  return `https://wa.me/${NO_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function shareUrl(platform: string, url: string, title: string) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer.php?u=${encoded}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`;
    case "telegram":
      return `https://t.me/share/url?url=${encoded}&text=${encodedTitle}`;
    case "whatsapp":
      return `https://wa.me/?text=${encodedTitle}%20${encoded}`;
    default:
      return url;
  }
}

export default function PriceListSection({ produk }: PriceListSectionProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareItems = [
    {
      label: "SHARE",
      icon: Share2,
      href: "#",
      onClick: async () => {
        if (navigator.share) {
          await navigator.share({
            title: produk.nama,
            url: currentUrl,
          });
        }
      },
      bg: "bg-indigo-600",
    },
    {
      label: "Facebook",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: shareUrl("facebook", currentUrl, produk.nama),
      bg: "bg-[#1877F2]",
    },
    {
      label: "X",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: shareUrl("twitter", currentUrl, produk.nama),
      bg: "bg-black",
    },
    {
      label: "WhatsApp",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      href: shareUrl("whatsapp", currentUrl, produk.nama),
      bg: "bg-[#25D366]",
    },
    {
      label: "Telegram",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      href: shareUrl("telegram", currentUrl, produk.nama),
      bg: "bg-[#0088cc]",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Kolom Kiri — Gambar Promo */}
          <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm">
              <Image
                src={produk.heroImage}
                alt={produk.nama}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />

              <div className="absolute top-3 right-3 bg-black/60 rounded-lg px-3 py-1.5">
                <span className="text-xs font-semibold text-white">
                  {produk.nama}
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan — Daftar Harga Varian */}
          <div className="flex-1 min-w-0">
            {/* Baris Atas: Badge + Tombol Test Drive */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center rounded-md bg-gray-900 px-4 py-1.5 text-sm font-bold text-white">
                {produk.jumlahTipe} TIPE
              </span>
              <a
                href={waUrl(
                  `Halo, saya tertarik dengan ${produk.nama}, boleh info lebih lanjut?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                JADWALKAN TEST DRIVE
              </a>
            </div>

            {/* Card List Harga — scrollable */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="max-h-[320px] overflow-y-auto scrollbar-thin">
                {produk.varianHarga.map((v, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between gap-3 px-4 py-3 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <span className="text-sm font-bold text-gray-900 flex-1 min-w-0 truncate">
                      {v.nama}
                    </span>
                    <span className="text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap shrink-0">
                      {formatHargaRupiah(v.harga)}
                    </span>
                    <a
                      href={waUrl(
                        `Halo, saya tertarik dengan ${produk.nama} ${v.nama}, boleh info lebih lanjut?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Tanya ${v.nama} via WhatsApp`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shrink-0"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Paling Kanan — Ikon Share (desktop: sticky vertikal) */}
          <div className="hidden lg:flex flex-col gap-3 shrink-0 sticky top-24 self-start">
            {shareItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                onClick={
                  item.onClick
                    ? (e) => {
                        e.preventDefault();
                        item.onClick();
                      }
                    : undefined
                }
                className="flex flex-col items-center gap-0.5 bg-white rounded-lg shadow-sm px-2 py-2 hover:shadow-md transition-shadow w-16"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${item.bg}`}
                >
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-semibold text-gray-500 text-center leading-tight">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: Ikon Share Horizontal */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
          {shareItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel={item.href !== "#" ? "noopener noreferrer" : undefined}
              onClick={
                item.onClick
                  ? (e) => {
                      e.preventDefault();
                      item.onClick();
                    }
                  : undefined
              }
              className="flex flex-col items-center gap-0.5"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm ${item.bg}`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-semibold text-gray-500">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
