import Link from "next/link";
import { SETUPS, rupiah } from "@/lib/data";
import { waLink, JAM } from "@/lib/config";
export const metadata = { title: "Inspirasi Setup – Tech Care" };
const FAQ = [["Apakah bisa beli 1 paket utuh sesuai foto showcase?", "Bisa. Pilih setup yang kamu suka, lalu chat CS. Kami cek stok semua perangkatnya dan susun penawaran."], ["Bagaimana jika bingung antara mic Dynamic atau Condenser?", "Dynamic menolak bising ruangan, cocok untuk ruangan tanpa peredam. Condenser lebih detail, cocok untuk ruangan tenang. Konsultasikan ke kami untuk rekomendasi pasti."], ["Berapa lama pengiriman dan apakah ada garansi?", "Disesuaikan dengan lokasi dan stok. Garansi mengikuti ketentuan resmi masing-masing produk."]];
export default function Inspirasi() {
  return (<div className="wrap">
    <span className="b pl">INSPIRASI KOMUNITAS & LAB</span><h1>Kurasi Setup & Komparasi Gear</h1>
    <p className="mut lead">Jelajahi setup ruang kerja dan arena gaming impian, lalu adu spesifikasi hardware sebelum checkout.</p>
    <div className="grid">{SETUPS.map((s) => (<article key={s.t} className="card">
      <div className="ph big">{s.ikon}</div><span className="b pl">{s.tag}</span><p className="teal sm">Kreator: {s.by}</p>
      <h3>{s.t}</h3><p className="mut sm">{s.s}</p><p className="sm"><b>PERANGKAT UTAMA TERPASANG</b></p>
      <ul className="chk">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
      <div className="row"><span><span className="mut sm">ESTIMASI TOTAL BIAYA</span><br /><b className="price">{rupiah(s.total)}</b></span><Link className="btn sm" href="/katalog">Lihat Produk →</Link></div></article>))}</div>
    <h2>Bandingkan 2–3 Perangkat Sebelum Membeli</h2>
    <div className="card cmp"><div className="srow head"><span /><b>Shure SM7B</b><b>Elgato Wave 3</b></div>
      {[["Tipe kapsul", "Dynamic (kebal noise bising ruangan)", "Condenser (sangat detail)"], ["Polar pattern", "Cardioid", "Cardioid"], ["Konektivitas", "XLR Only (butuh audio interface)", "USB-C (plug and play)"], ["Harga", rupiah(6890000), rupiah(2450000)]].map((r) => <div className="srow" key={r[0]}><span className="mut">{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span></div>)}
      <div className="row"><a className="btn wa" href={waLink("Halo, saya mau pesan Shure SM7B")} target="_blank" rel="noopener">Pesan Shure Sekarang</a><a className="btn wa" href={waLink("Halo, saya mau pesan Elgato Wave 3")} target="_blank" rel="noopener">Pesan Wave 3 Sekarang</a></div></div>
    <div className="card"><h3>Layanan Tech Support TECH CARE</h3><p className="mut">Konsultasi setup, audio routing, dan kompatibilitas.</p><p className="sm"><b>JAM OPERASIONAL CS WHATSAPP</b><br />{JAM}</p><a className="btn wa" href={waLink()} target="_blank" rel="noopener">Bantuan cepat via WhatsApp CS</a></div>
    <h2>FAQ</h2>{FAQ.map(([q, a]) => <details key={q} className="card"><summary>{q}</summary><p className="mut">{a}</p></details>)}</div>);
}
