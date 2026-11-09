import Link from "next/link";
import { rupiah } from "@/lib/data";
export function stokLabel(s) { return s <= 0 ? ["out", "Habis"] : s <= 3 ? ["low", "Stok menipis"] : ["ok", "Stok tersedia"]; }
export default function ProductCard({ p }) {
  const [c, l] = stokLabel(p.stok);
  return (<Link href={`/produk/${p.slug}`} className="card prod">
    <div className="ph">{p.gambar ? <img src={p.gambar} alt={p.nama} loading="lazy" /> : p.ikon}</div>
    <span className="mut sm">{p.kategori}</span><h3>{p.nama}</h3>
    <div className="price">{rupiah(p.harga)} {p.coret && <s className="mut sm">{rupiah(p.coret)}</s>}</div>
    <span className={"b " + c}>{l}</span></Link>);
}
