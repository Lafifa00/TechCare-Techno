# Tech Care (v2, desain baru)

## Jalankan di komputer
`npm install` lalu `npm run dev`, buka http://localhost:3000 (perlu Node.js LTS).

## Yang wajib diganti
- `lib/config.js`: nomor WhatsApp, jam operasional, ID video YouTube tutorial.
- `lib/data.js`: nama, harga, spesifikasi, dan ULASAN produk adalah CONTOH. Ganti dengan data dan ulasan asli sebelum online (jangan pakai ulasan palsu).
- Foto produk: isi kolom `gambar` di Google Sheets dengan link foto resmi brand (sesuai ketentuan reseller).

## Produk dari Google Sheets
Baris pertama persis: `slug, nama, kategori, harga, harga_coret, stok, gambar, ikon`
(stok 0 = habis, 1-3 = menipis). `slug` yang sama dengan di `lib/data.js` (mis. `shure-sm7b`) akan memakai halaman detail lengkapnya; slug lain tampil sebagai halaman detail sederhana.
File > Bagikan > Publikasikan ke web > CSV. Lalu di Vercel tambahkan Environment Variable `SHEET_CSV_URL` berisi link itu.

## Deploy
Upload isi folder ini (package.json harus di paling luar) ke GitHub, lalu di vercel.com: Add New Project > Import > Deploy.
