# PRD: Banner Animasi Homepage

**Project:** Website Dealer Resmi Mobil (1 Merek)
**Fitur:** Hero Banner Animasi — Homepage
**Versi:** 1.0
**Tanggal:** 21 Juli 2026
**Dibuat oleh:** Aak

---

## 1. Latar Belakang

Homepage adalah halaman pertama yang dilihat calon pembeli saat membuka website dealer. Bagian paling atas (hero section) perlu menampilkan visual yang menarik perhatian sekaligus menyampaikan pesan utama — promo terkini, model unggulan, atau identitas brand — dalam beberapa detik pertama.

Banner statis cenderung kurang dinamis dan membatasi jumlah informasi yang bisa ditampilkan di satu ruang yang sama. Banner animasi berbasis gambar (bukan video) dipilih karena lebih ringan secara performa, mudah diupdate oleh tim non-teknis, dan tetap terasa hidup lewat efek transisi.

## 2. Tujuan

- Menampilkan beberapa pesan/promo secara bergantian di satu area tanpa membebani halaman
- Meningkatkan engagement pengunjung di detik-detik pertama membuka homepage
- Mengarahkan pengunjung ke aksi spesifik (CTA) — cek stok mobil, hubungi sales, atau lihat promo
- Mudah dikelola/diupdate kontennya tanpa perlu deploy ulang aplikasi (idealnya lewat CMS atau data terstruktur)

## 3. Target User

- Calon pembeli mobil yang mengunjungi homepage (mayoritas dari perangkat mobile)
- Tim marketing dealer yang akan mengelola konten banner (update promo berkala)

## 4. Ruang Lingkup (Scope)

### In Scope

- Hero banner di posisi paling atas homepage
- Menampilkan 3–5 slide gambar yang bergantian otomatis
- Efek transisi antar slide (fade, slide, atau zoom/Ken Burns)
- Navigasi manual (dot indicator dan/atau arrow kiri-kanan)
- Autoplay dengan jeda waktu tertentu, berhenti saat user hover/interaksi
- CTA button per slide (misal: "Lihat Promo", "Hubungi Sales")
- Responsive — tampilan berbeda untuk mobile vs desktop (rasio gambar menyesuaikan)

### Out of Scope (untuk versi ini)

- Video sebagai konten banner
- Banner personalisasi berdasarkan user behavior
- A/B testing otomatis antar slide

## 5. User Flow

1. User membuka homepage
2. Banner menampilkan slide pertama, autoplay berjalan
3. User bisa membiarkan slide berganti otomatis, atau klik dot/arrow untuk pindah manual
4. User klik CTA pada slide → diarahkan ke halaman terkait (misal halaman promo atau katalog mobil)

## 6. Functional Requirements

| No  | Requirement                                                                                         | Prioritas |
| --- | --------------------------------------------------------------------------------------------------- | --------- |
| 1   | Slide berganti otomatis tiap 4–6 detik                                                              | Must      |
| 2   | Transisi antar slide smooth, tidak patah-patah                                                      | Must      |
| 3   | Autoplay berhenti sementara saat gambar di-hover (desktop)                                          | Should    |
| 4   | Dot indicator menunjukkan posisi slide aktif                                                        | Must      |
| 5   | Arrow navigasi kiri-kanan untuk pindah slide manual                                                 | Should    |
| 6   | Setiap slide punya CTA button dengan link berbeda                                                   | Must      |
| 7   | Gambar banner di-lazy load kecuali slide pertama                                                    | Should    |
| 8   | Data slide (gambar, teks, link) dikelola dari satu sumber data terpusat, bukan hardcode di komponen | Must      |
| 9   | Ukuran gambar otomatis menyesuaikan device (mobile/tablet/desktop)                                  | Must      |
| 10  | Swipe kiri-kanan untuk ganti slide di mobile                                                        | Should    |

## 7. Non-Functional Requirements

- **Performa:** Gambar banner harus dioptimasi (format WebP/AVIF, kompresi) agar tidak memperlambat First Contentful Paint
- **Responsive:** Wajib tampil baik di layar mobile (≥360px) sampai desktop lebar
- **Aksesibilitas:** Gambar punya alt text, kontrol navigasi bisa diakses via keyboard
- **Kompatibilitas:** Berjalan baik di Chrome, Safari, dan browser default Android (mayoritas user Indonesia akses via HP)

## 8. Tech Stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS (menyesuaikan project skripsi sebelumnya)
- **Library slider:** Swiper.js (dipakai untuk mekanisme slide, autoplay, dot indicator, arrow navigasi, dan swipe di mobile)
- **Animasi tambahan (opsional):** Framer Motion, kalau butuh efek transisi di luar kemampuan bawaan Swiper
- **Sumber data slide:** bisa berupa array statis di awal, nanti diarahkan ke CMS (misal Sanity/Supabase table) agar tim marketing bisa update sendiri

## 9. Aset yang Dibutuhkan

- Gambar banner resolusi tinggi (minimal 1920×800px untuk desktop, crop terpisah untuk mobile 1080×1350px atau sesuai kebutuhan)
- Teks headline & subheadline per slide
- Label dan link tujuan untuk tiap CTA button

## 10. Metrik Keberhasilan

- Click-through rate (CTR) ke CTA banner
- Waktu tunggu (loading time) hero section < 2 detik
- Tidak ada penurunan performa (Core Web Vitals) akibat banner

## 11. Open Questions

- Apakah slide dikelola manual oleh developer di awal, atau langsung butuh CMS sejak versi pertama?
- Berapa jumlah slide maksimal yang realistis (menyangkut effort desain aset)?
- Apakah perlu preload semua gambar slide sejak awal, atau cukup slide pertama saja?

~~Library slider: Embla vs Swiper.js~~ → **Selesai, dipilih Swiper.js**

---

_Dokumen ini akan diperbarui seiring detail desain dan teknis lebih jelas._
