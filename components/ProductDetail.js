"use client";
import { useState } from "react";
import Link from "next/link";
import { rupiah } from "@/lib/data";
import { waLink } from "@/lib/config";
import { stokLabel } from "./ProductCard";
export default function ProductDetail({ p }) {
  const [v, setV] = useState(0); const [add, setAdd] = useState([]);
  const varian = p.varian?.[v]; const harga = varian ? varian.h : p.harga; const [c, l] = stokLabel(p.stok);
  const msg = `Halo Tech Care, saya mau pesan ${p.nama}${varian ? ` (${varian.n})` : ""}${add.length ? ` + ${add.join(", ")}` : ""}. Apakah stok tersedia?`;
  const toggle = (n) => setAdd((a) => a.includes(n) ? a.filter((x) => x !== n) : [...a, n]);
  const diskon = p.coret && !p.varian ? 0 : p.coret ? Math.round((1 - p.harga / p.coret) * 100) : 0;
  return (<div className="wrap detail">
    <Link href="/katalog" className="back">← Kembali ke Katalog</Link>
    <div className="dgrid">
      <div>
        <p className="mut sm">{p.kategori}{p.sub && <> / <span className="teal">{p.sub}</span></>}</p>
        <div className="chips">{(p.badges || [l]).map((b) => <span key={b} className={"b " + (b === l ? c : "pl")}>{b}</span>)}</div>
        <div className="ph big">{p.gambar ? <img src={p.gambar} alt={p.nama} /> : p.ikon}</div>
        <h1>{p.nama}</h1>
        {p.rating && <p className="mut">★ <b className="amber">{p.rating}</b> · {p.ulasan} ulasan streamer & podcaster</p>}
      </div>
      <div>
        <div className="card"><span className="mut sm">HARGA RESMI SPESIAL</span>
          <div className="price lg">{rupiah(harga)} {p.coret && <s className="mut sm">{rupiah(p.coret)}</s>} {diskon > 0 && <span className="b out">HEMAT {diskon}%</span>}</div>
          <p className="mut sm">Cicilan 0% via bank partner (syarat dan ketentuan berlaku). Hubungi CS untuk detail.</p></div>
        {p.varian && <><h2>Pilihan Varian & Paket Rig</h2>{p.varian.map((x, i) => (
          <label key={x.n} className={"card vr" + (i === v ? " sel" : "")}><input type="radio" name="v" checked={i === v} onChange={() => setV(i)} />
            <span><b>{x.n}</b> {x.tag && <span className="b pl">{x.tag}</span>}<br /><span className="mut sm">{x.d}</span></span><b>{rupiah(x.h)}</b></label>))}</>}
        {p.info && <div className="card"><h3>{p.info.t}</h3><p className="mut">{p.info.d}</p>
          <a className="btn" href={waLink(`Halo, saya butuh konsultasi audio interface untuk ${p.nama}`)} target="_blank" rel="noopener">Konsultasikan Rig Saya ke Audio Engineer</a></div>}
      </div>
    </div>
    {p.fitur && <><h2>Fitur Unggulan Studio</h2><div className="grid">{p.fitur.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p className="mut">{d}</p></div>)}</div></>}
    <div className="dgrid">
      {p.spek && <div><h2>Spesifikasi Laboratorium</h2><div className="card">{p.spek.map(([k, x]) => <div key={k} className="srow"><span className="mut">{k}</span><b>{x}</b></div>)}</div></div>}
      {p.box && <div><h2>Isi dalam kemasan</h2><div className="card"><ul className="chk">{p.box.map((x) => <li key={x}>{x}</li>)}</ul></div></div>}
    </div>
    {p.paired && <><h2>Pelengkap Setup Rekomendasi</h2><div className="grid">{p.paired.map(([n, h]) => <div key={n} className="card row"><span><b>{n}</b><br /><span className="teal">{rupiah(h)}</span></span><button className="chip" aria-pressed={add.includes(n)} onClick={() => toggle(n)}>{add.includes(n) ? "✓ Ditambah" : "+ Tambah"}</button></div>)}</div></>}
    {p.ulasanList && <><h2>Ulasan Creator Terverifikasi</h2><div className="grid">{p.ulasanList.map(([n, r, t]) => <div key={n} className="card"><b>{n}</b> <span className="mut sm">{r}</span><p className="mut">{t}</p></div>)}</div></>}
    <div className="sticky"><div><span className={"b " + c}>{l}</span><br /><b className="price">{rupiah(harga)}</b></div>
      {p.stok > 0 ? <a className="btn wa" href={waLink(msg)} target="_blank" rel="noopener">Pesan Sekarang</a> : <a className="btn" href={waLink(`Halo, kapan ${p.nama} restock?`)} target="_blank" rel="noopener">Tanya restock</a>}</div>
  </div>);
}
