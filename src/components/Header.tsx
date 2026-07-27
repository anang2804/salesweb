"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

interface HeaderProps {
  showContactBar?: boolean;
}

export default function Header({ showContactBar }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const displayContactBar = showContactBar ?? pathname.startsWith("/produk");
  const isTransparent =
    (pathname === "/" ||
      pathname === "/products" ||
      pathname.startsWith("/produk/")) &&
    !menuOpen;
  const isFixed =
    pathname === "/" ||
    pathname === "/products" ||
    pathname.startsWith("/produk/");

  return (
    <header
      className={`z-50 w-full transition-all duration-300 ${
        isFixed ? "fixed top-0 left-0" : "sticky top-0"
      } ${
        isTransparent
          ? "bg-transparent bg-gradient-to-b from-black/30 to-transparent shadow-none"
          : "bg-white shadow-sm"
      }`}
    >
      {displayContactBar && (
        <div
          className={`text-xs transition-all duration-300 ${
            isTransparent
              ? "bg-black/20 text-white/90 border-b border-white/10"
              : "bg-[#1a1a2e] text-white"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                  <span className="hidden sm:inline">
                    Jl. Sudirman No. 123, Jakarta
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-indigo-400" />
                  <span>(021) 1234-5678</span>
                </span>
                <span className="hidden md:flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-indigo-400" />
                  <span>0812-3456-7890</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-indigo-400" />
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
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo/logosuzuki1.png"
              alt="Logo Suzuki"
              width={180}
              height={48}
              className="h-12 w-auto object-contain transition-all duration-300 drop-shadow-md"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              let linkClass = "";
              if (isTransparent) {
                linkClass = isActive
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10";
              } else {
                linkClass = isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50";
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${linkClass}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {menuOpen ? (
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
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
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
