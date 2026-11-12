
import Link from "next/link";
import { rupiah } from "@/lib/data";

export function stokLabel(s) {
  return s <= 0
    ? ["out", "Habis"]
    : s <= 3
      ? ["low", "Stok menipis"]
      : ["ok", "Stok tersedia"];
}

export default function ProductCard({ p }) {
  const [c, l] = stokLabel(p.stok);

  return (
    <Link href={`/produk/${p.slug}`} className="product-card">
      <div className="product-image">
        {p.gambar ? (
          <img
            src={p.gambar}
            alt={p.nama}
            loading="lazy"
          />
        ) : (
          <div className="product-image-placeholder">
            <svg
              viewBox="0 0 48 48"
              width="42"
              height="42"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="5"
                y="9"
                width="38"
                height="30"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="24"
                cy="24"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 9L19 5H29L32 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M36 15V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M33 18H39"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <strong>Foto produk belum tersedia</strong>
            <span>Tambahkan gambar produk</span>
          </div>
        )}

        <span className={`product-stock ${c}`}>
          {l}
        </span>
      </div>

      <div className="product-info">
        <span className="product-category">
          {p.kategori}
        </span>

        <h3>{p.nama}</h3>

        <div className="product-price">
          <strong>{rupiah(p.harga)}</strong>

          {p.coret && (
            <s>{rupiah(p.coret)}</s>
          )}
        </div>

        <div className="product-card-footer">
          <span>Lihat detail produk</span>
          <span className="product-arrow">↗</span>
        </div>
      </div>
    </Link>
  );
}
