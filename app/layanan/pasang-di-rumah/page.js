
"use client";

import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/config";

export default function PasangDiRumah() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
    perangkat: "",
    tanggal: "",
    waktu: "Fleksibel",
    catatan: "",
  });

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const pesan = `Halo TechCare, saya ingin mengajukan layanan pemasangan ke rumah.

Nama: ${form.nama}
Nomor WhatsApp: ${form.whatsapp}
Alamat pemasangan: ${form.alamat}
Perangkat yang ingin dipasang: ${form.perangkat}
Tanggal yang diinginkan: ${form.tanggal || "Belum ditentukan"}
Waktu: ${form.waktu}
Catatan: ${form.catatan || "-"}

Mohon informasi mengenai ketersediaan teknisi dan estimasi biaya. Terima kasih.`;

    window.open(
      waLink(pesan),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="home-install-page">
      <div className="home-install-container">
        <Link
          href="/layanan"
          className="home-install-back"
        >
          ← Kembali ke Layanan
        </Link>

        <div className="home-install-heading">
          <span>LAYANAN PEMASANGAN</span>
          <h1>Teknisi Datang ke Rumah</h1>
          <p>
            Isi informasi berikut agar tim TechCare
            dapat memahami kebutuhan pemasangan kamu.
            Lokasi, jadwal, dan biaya akan dikonfirmasi
            melalui WhatsApp.
          </p>
        </div>

        <div className="home-install-layout">
          <form
            className="home-install-form"
            onSubmit={submitForm}
          >
            <div className="home-install-form-heading">
              <h2>Formulir Pemasangan</h2>
              <p>
                Lengkapi data berikut dengan benar.
              </p>
            </div>

            <div className="home-install-fields">
              <label>
                Nama lengkap
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama kamu"
                  value={form.nama}
                  onChange={update("nama")}
                />
              </label>

              <label>
                Nomor WhatsApp
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 08xxxxxxxxxx"
                  value={form.whatsapp}
                  onChange={update("whatsapp")}
                />
              </label>

              <label className="full">
                Alamat pemasangan
                <textarea
                  required
                  rows={3}
                  placeholder="Masukkan alamat lengkap pemasangan"
                  value={form.alamat}
                  onChange={update("alamat")}
                />
              </label>

              <label className="full">
                Perangkat yang ingin dipasang
                <textarea
                  required
                  rows={3}
                  placeholder="Contoh: Mic XLR, audio interface, capture card, lighting..."
                  value={form.perangkat}
                  onChange={update("perangkat")}
                />
              </label>

              <label>
                Tanggal yang diinginkan
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.tanggal}
                  onChange={update("tanggal")}
                />
              </label>

              <label>
                Waktu pemasangan
                <select
                  value={form.waktu}
                  onChange={update("waktu")}
                >
                  <option>Fleksibel</option>
                  <option>Pagi</option>
                  <option>Siang</option>
                  <option>Sore</option>
                </select>
              </label>

              <label className="full">
                Catatan tambahan (opsional)
                <textarea
                  rows={3}
                  placeholder="Tambahkan informasi lain jika diperlukan..."
                  value={form.catatan}
                  onChange={update("catatan")}
                />
              </label>
            </div>

            <button
              type="submit"
              className="home-install-submit"
            >
              Ajukan Pemasangan
              <span>↗</span>
            </button>

            <p className="home-install-note">
              Pengajuan ini belum menjadi jadwal pemasangan
              yang terkonfirmasi. Tim kami akan menghubungi
              kamu untuk membahas detailnya.
            </p>
          </form>

          <aside className="home-install-info">
            <div className="home-install-info-icon">
              <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 10 9-7 9 7" />
                <path d="M5 9v12h14V9" />
                <path d="M9 21v-7h6v7" />
              </svg>
            </div>

            <h3>Bagaimana prosesnya?</h3>

            <ol>
              <li>
                <strong>Isi formulir</strong>
                <p>Berikan informasi kebutuhan dan alamat pemasangan.</p>
              </li>
              <li>
                <strong>Kirim ke WhatsApp</strong>
                <p>Data akan tersusun otomatis agar mudah dibaca tim kami.</p>
              </li>
              <li>
                <strong>Konfirmasi layanan</strong>
                <p>Diskusikan jadwal, lokasi, dan estimasi biaya dengan TechCare.</p>
              </li>
              <li>
                <strong>Pemasangan</strong>
                <p>Teknisi datang setelah detail layanan disepakati.</p>
              </li>
            </ol>

            <div className="home-install-reminder">
              <strong>Perlu diketahui</strong>
              <p>
                Biaya dan ketersediaan teknisi bergantung
                pada lokasi serta kebutuhan pemasangan.
                Semuanya akan dibicarakan terlebih dahulu.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
