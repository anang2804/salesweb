"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, ChevronDown } from "lucide-react";
import { useState } from "react";

const menuKategori = [
  { label: "MPV", href: "/produk?kategori=mpv" },
  { label: "SUV", href: "/produk?kategori=suv" },
  { label: "Hatchback", href: "/produk?kategori=hatchback" },
  { label: "Sedan", href: "/produk?kategori=sedan" },
  { label: "Commercial", href: "/produk?kategori=commercial" },
  { label: "Testimoni", href: "/testimoni" },
  { label: "Promo", href: "/promo" },
];

export default function ProductNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top bar — contact info */}
      <div className="bg-[#1a1a2e] text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-indigo-400" />
                <span className="hidden sm:inline">Jl. Sudirman No. 123, Jakarta</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3 text-indigo-400" />
                <span>(021) 1234-5678</span>
              </span>
              <span className="hidden md:flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-400"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>0812-3456-7890</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-indigo-400" />
                <span className="hidden sm:inline">08:00 – 17:00</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                BUKA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-sm">
                AD
              </span>
              <span className="text-lg font-bold text-gray-900">
                Auto<span className="text-indigo-600">Dealer</span>
              </span>
            </Link>

            {/* Desktop menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuKategori.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                </Link>
              ))}
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>

              <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-indigo-200">
                <div className="h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                  A
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {menuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="flex flex-col px-4 py-3 gap-1">
              {menuKategori.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="relative flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
