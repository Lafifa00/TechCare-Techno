import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import { waLink } from "@/lib/config";
export const revalidate = 60;
export default async function Home() {
  const ps = (await getProducts()).slice(0, 4);
  return (<>
    <section className="wrap hero"><div>
      <span className="b pl">STREAMING GEAR & SETUP SOLUTION</span>
      <h1>Setup streaming dan gaming yang pas, tanpa trial and error.</h1>
      <p className="mut lead">Konsultasi gratis, rekomendasi perangkat sesuai budget, barang siap kirim, dan pemasangan oleh teknisi. Mau beli di tempat lain? Tutorial pemasangannya tetap gratis.</p>
      <div className="cta"><Link className="btn" href="/konsultasi">Mulai konsultasi</Link><Link className="btn ghost" href="/inspirasi">Lihat inspirasi setup</Link></div></div>
      <div className="card stats"><div><b>140+</b><span className="mut sm">Setup terverifikasi</span></div><div><b>4.9/5</b><span className="mut sm">Kepuasan setup</span></div><div><b>100%</b><span className="mut sm">Konsultasi gratis</span></div></div></section>
    <section className="wrap"><h2>Dari bingung sampai siap live</h2><div className="grid four">
      {[["1", "Konsultasi", "Isi form singkat atau chat WhatsApp."], ["2", "Rekomendasi", "Daftar perangkat sesuai budget dan PC-mu."], ["3", "Pesan", "Cek stok di katalog, pesan via WhatsApp."], ["4", "Pasang", "Pasang sendiri lewat video, atau kami yang pasang."]].map(([n, t, d]) => <div className="card" key={n}><span className="teal"><b>{n}</b></span><h3>{t}</h3><p className="mut">{d}</p></div>)}</div></section>
    <section className="wrap"><h2>Produk pilihan</h2><div className="grid">{ps.map((p) => <ProductCard key={p.slug} p={p} />)}</div><p><Link className="teal" href="/katalog">Lihat semua produk →</Link></p></section>
    <section className="wrap"><div className="card cta2"><h2>Belum tahu mulai dari mana?</h2><p className="mut">Kirim budget dan perangkat yang sudah kamu punya. Kami balas dengan daftar yang jelas.</p><a className="btn wa" href={waLink()} target="_blank" rel="noopener">Chat CS via WhatsApp</a></div></section></>);
}
