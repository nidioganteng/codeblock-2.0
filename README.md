# Codeblock 2.0 (versi Tailwind CSS)

Website landing page Codeblock, dibangun dari desain Figma "codeblock 2.0" dengan React 19, Vite, dan Tailwind CSS v4.
Tampilan dan perilakunya sama dengan versi CSS biasa, hanya cara penulisan gayanya yang berbeda:
seluruh styling memakai utility class Tailwind langsung di JSX, tanpa file `.css` per komponen.

## Menjalankan

```bash
npm install
npm run dev      # development di http://localhost:5173
npm run build    # hasil produksi ada di folder dist/
npm run preview  # coba hasil build secara lokal
```

## Yang perlu kamu lengkapi

1. **Gambar.** Ekspor dari Figma dan taruh di `public/assets/` sesuai daftar di `public/assets/README.txt`
   (logo, gambar hero, tiga screenshot project, foto section contact).
2. **Link sosial.** Isi `githubLink` dan `linkedinLink` di `src/data/content.js` (sekarang masih `#`).
3. **Versi bahasa.** Language switcher baru berupa tampilan. Konten masih Bahasa Indonesia.
   Kalau mau versi Inggris, hubungkan dengan i18n (mis. react-i18next). Tandanya ada di `Navbar.jsx`.

## Struktur

```
src/
  index.css              satu-satunya file CSS: import Tailwind dan design tokens (@theme)
  lib/styles.js          helper: cn() untuk menggabung class, container, sectionY
  data/content.js        semua teks, link, dan nama ikon (edit konten di sini)
  components/            Navbar, Hero, About, Services, Process, Portfolio, Contact, Footer,
                         plus Badge, SectionHead, SmartImage, ArrowRight
  icons.generated.json   ikon yang dibundel (dibuat oleh scripts/build-icons.mjs)
scripts/build-icons.mjs  membundel ikon Iconify ke dalam aplikasi
public/assets/           gambar
```

## Design tokens (src/index.css)

Token dari Figma didaftarkan di blok `@theme` dan otomatis menjadi utility class:

| Token | Nilai | Dipakai sebagai |
|---|---|---|
| `--color-brand` | `#0434fe` | `bg-brand`, `text-brand`, `border-brand` |
| `--color-brand-ink` | `#0435fe` | `text-brand-ink` |
| `--color-navy-950 / 900 / 800` | `#000c23` / `#010d24` / `#010d2b` | `bg-navy-950` dst. |
| `--color-pill` | `#d9d9d9` | `bg-pill` |
| `--spacing-gutter` | `clamp(20px, 4.5vw, 65px)` | `px-gutter` |
| `--text-hero`, `--text-h2`, `--text-lead`, dst. | ukuran fluid, maksimum sesuai Figma | `text-hero`, `text-h2`, `text-lead` |
| `--shadow-card / soft / lift` | bayangan kartu | `shadow-card`, `shadow-soft`, `shadow-lift` |
| `--font-sans` | Inter | `font-sans` (default body) |

Mengganti warna utama cukup dengan mengubah `--color-brand` sekali di sana.

**Breakpoint** (mobile first) disesuaikan dengan tata letak desain: `xs` 480px, `sm` 640px, `md` 720px,
`lg` 900px (tata letak desktop), `xl` 1000px. Contoh: `grid-cols-1 lg:grid-cols-3`.

Font Inter dimuat dari paket `@fontsource/inter` (bundel lokal, bukan CDN).

## Ikon

Ikon memakai ID Iconify (nama layer ikon di Figma, contoh `bx:world`) dan dibundel ke aplikasi,
jadi situs tidak memanggil API pihak ketiga. Menambah ikon baru:

- Saat development cukup tulis ID-nya, ikon akan diambil dari API Iconify otomatis.
- Sebelum deploy, bundel ikonnya: `npm install --no-save @iconify-json/<nama-set>` lalu `npm run icons`.
  Skrip hanya membaca ID yang ditulis sebagai `icon: 'set:nama'` atau `icon="set:nama"`.

## Catatan perubahan dari desain Figma

- Typo diperbaiki: "Costumer" jadi "Customer", "Costumen" jadi "Customer", "Maintanance" jadi "Maintenance",
  "mereke" jadi "mereka", "ditail" jadi "detail".
- Footer memakai "Website Maintenance" (di Figma tertulis "Website Improvement") agar sama dengan section Services.
- Tahun copyright diambil otomatis dari tahun berjalan.
- Link "Pricing" di footer diarahkan ke section Contact karena belum ada section Pricing.
- Filter portfolio (All Project, Website Development, AI Customer Service) berfungsi.
- Judul project diseragamkan ukurannya (di Figma "Mijn Amor" 30px, lainnya 40px).
- Warna angka "03" di section Process diseragamkan dengan angka lainnya.
- Ikon "Basis Pengetahuan" memakai `mdi:book-open-page-variant` dan ikon pesawat memakai `mdi:airplane`.
- Desain Figma hanya versi desktop 1440px. Tampilan tablet dan mobile dibuat sendiri: menu hamburger,
  kartu bertumpuk, dan grid menyesuaikan lebar layar.
- Efek glow biru memakai `radial-gradient` sebagai pendekatan, bukan blur layer seperti di Figma.
- Nomor WhatsApp di kartu contact dijadikan link `wa.me/6285604061730` dari nomor yang ada di desain.

## Aksesibilitas

Fokus keyboard terlihat, struktur heading berurutan, tombol dan link punya label, dan animasi
dimatikan untuk pengguna dengan pengaturan "reduce motion".
