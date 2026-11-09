import { PRODUCTS } from "./data";
// Google Sheets (publish ke web, format CSV) -> env SHEET_CSV_URL.
// Kolom: slug, nama, kategori, harga, harga_coret, stok, gambar, ikon
function parseCSV(t) {
  const rows = []; let row = [], cur = "", q = false;
  for (let i = 0; i < t.length; i++) { const c = t[i];
    if (q) { if (c === '"' && t[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
    else if (c === '"') q = true; else if (c === ",") { row.push(cur); cur = ""; }
    else if (c === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; } else if (c !== "\r") cur += c; }
  if (cur || row.length) { row.push(cur); rows.push(row); } return rows;
}
export async function getProducts() {
  const url = process.env.SHEET_CSV_URL; if (!url) return PRODUCTS;
  try {
    const [head, ...rows] = parseCSV(await (await fetch(url, { next: { revalidate: 60 } })).text());
    const H = head.map((h) => h.trim().toLowerCase()), g = (r, n) => (r[H.indexOf(n)] || "").trim();
    const list = rows.filter((r) => g(r, "nama")).map((r) => {
      const slug = g(r, "slug") || g(r, "nama").toLowerCase().replace(/[^a-z0-9]+/g, "-"), base = PRODUCTS.find((p) => p.slug === slug) || {};
      return { ...base, slug, nama: g(r, "nama"), kategori: g(r, "kategori") || base.kategori || "Lainnya", harga: Number(g(r, "harga")) || base.harga || 0,
        coret: Number(g(r, "harga_coret")) || base.coret, stok: Number(g(r, "stok")) || 0, gambar: g(r, "gambar") || base.gambar, ikon: g(r, "ikon") || base.ikon || "📦" };
    });
    return list.length ? list : PRODUCTS;
  } catch { return PRODUCTS; }
}
