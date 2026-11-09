"use client";
import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/config";
const A = { "Cara konsultasi": ["Isi form Konsultasi atau chat WhatsApp. Sebutkan budget dan perangkat yang sudah ada.", "/konsultasi"], "Cek stok": ["Buka Produk. Label hijau tersedia, kuning menipis, merah habis.", "/katalog"], "Jasa pasang": ["Teknisi datang ke tempatmu, atau kamu datang ke toko. Biaya disepakati lewat chat.", "/layanan"], "Tutorial gratis": ["Semua video tutorial gratis, walau beli di tempat lain.", "/layanan"] };
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([{ w: "bot", t: "Butuh bantuan setup? Pilih topik di bawah." }]);
  const ask = (k) => setLog((l) => [...l, { w: "me", t: k }, { w: "bot", t: A[k][0], href: A[k][1] }]);
  return (<div className="fab">
    <div className={"cbox" + (open ? " open" : "")} role="dialog" aria-label="Chat Tech Care">
      <div className="cbh">Tanya Tech Care</div>
      <div className="log">{log.map((m, i) => <div key={i} className={"m " + m.w}>{m.t}{m.href && <><br /><Link href={m.href} onClick={() => setOpen(false)}>Buka halaman →</Link></>}</div>)}</div>
      <div className="qr">{Object.keys(A).map((k) => <button key={k} className="chip" onClick={() => ask(k)}>{k}</button>)}</div>
    </div>
    <a className="wafab" href={waLink()} target="_blank" rel="noopener">CS WA</a>
    <button className="help" onClick={() => setOpen(!open)} aria-label="Bantuan">?</button>
  </div>);
}
