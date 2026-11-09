"use client";
import { useState } from "react";
import { waLink } from "@/lib/config";
export default function Konsultasi() {
  const [f, setF] = useState({ nama: "", tujuan: "Streaming", budget: "", punya: "", lokasi: "Belum tahu", catatan: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const go = (e) => { e.preventDefault(); window.open(waLink(`Halo Tech Care, saya mau konsultasi.\nNama: ${f.nama}\nTujuan: ${f.tujuan}\nBudget: ${f.budget}\nPerangkat yang sudah ada: ${f.punya || "-"}\nJasa pasang: ${f.lokasi}\nCatatan: ${f.catatan || "-"}`), "_blank"); };
  return (<div className="wrap"><h1 className="h2">Konsultasi Gratis</h1><p className="mut">Isi form ini, pesannya terkirim rapi ke WhatsApp kami.</p>
    <form className="form card" onSubmit={go}>
      <label>Nama<input required value={f.nama} onChange={set("nama")} /></label>
      <label>Untuk apa?<select value={f.tujuan} onChange={set("tujuan")}><option>Streaming</option><option>Gaming</option><option>Streaming dan gaming</option></select></label>
      <label>Budget<input required placeholder="Contoh: Rp2.000.000" value={f.budget} onChange={set("budget")} /></label>
      <label>Perangkat yang sudah dimiliki<input placeholder="Contoh: PC Ryzen 5, headset" value={f.punya} onChange={set("punya")} /></label>
      <label>Jasa pemasangan<select value={f.lokasi} onChange={set("lokasi")}><option>Belum tahu</option><option>Teknisi datang ke tempat saya</option><option>Saya datang ke toko</option><option>Tidak perlu, pasang sendiri</option></select></label>
      <label>Catatan<textarea rows={3} value={f.catatan} onChange={set("catatan")} /></label>
      <button className="btn wa" type="submit">Kirim lewat WhatsApp</button></form></div>);
}
