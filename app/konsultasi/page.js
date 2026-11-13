
"use client";

import { useState } from "react";
import { waLink } from "@/lib/config";

export default function Konsultasi() {
  const [f, setF] = useState({
    nama: "",
    tujuan: "Streaming",
    budget: "",
    punya: "",
    lokasi: "Belum tahu",
    catatan: ""
  });

  const set = (k) => (e) =>
    setF({ ...f, [k]: e.target.value });

  const go = (e) => {
    e.preventDefault();

    window.open(
      waLink(
        `Halo TechCare, saya mau konsultasi.

Nama: ${f.nama}
Tujuan: ${f.tujuan}
Budget: ${f.budget}
Perangkat yang sudah ada: ${f.punya || "-"}
Jasa pasang: ${f.lokasi}
Catatan: ${f.catatan || "-"}`
      ),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="wrap consultation-page">

      {/* HEADER */}
      <div className="consultation-heading">
        <span className="consultation-eyebrow">
          TECHCARE SUPPORT
        </span>

        <h1 className="h2">Konsultasi Gratis</h1>

        <p className="mut">
          Ceritakan kebutuhan setup-mu dan temukan solusi
          yang sesuai dengan budget bersama TechCare.
        </p>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="consultation-layout">

        {/* LEFT: FORM */}
        <form
          className="consultation-form card"
          onSubmit={go}
        >
          <div className="consultation-form-heading">
          <div>
            <h2>Form Konsultasi</h2>
            <p>Lengkapi informasi berikut.</p>
          </div>
        </div>

          <div className="consultation-fields">

            <label>
              Nama
              <input
                required
                value={f.nama}
                onChange={set("nama")}
                placeholder="Masukkan nama kamu"
              />
            </label>

            <label>
              Untuk apa?
              <select
                value={f.tujuan}
                onChange={set("tujuan")}
              >
                <option>Streaming</option>
                <option>Gaming</option>
                <option>Streaming dan gaming</option>
              </select>
            </label>

            <label>
              Budget
              <select
                required
                value={f.budget}
                onChange={set("budget")}
              >
                <option value="">Pilih budget</option>
                <option>Di bawah Rp1.000.000</option>
                <option>Rp1.000.000 – Rp2.500.000</option>
                <option>Rp2.500.000 – Rp5.000.000</option>
                <option>Rp5.000.000 – Rp10.000.000</option>
                <option>Di atas Rp10.000.000</option>
              </select>
            </label>

            <label>
              Perangkat yang sudah dimiliki
              <input
                placeholder="Contoh: PC Ryzen 5, headset"
                value={f.punya}
                onChange={set("punya")}
              />
            </label>

            <label>
              Jasa pemasangan
              <select
                value={f.lokasi}
                onChange={set("lokasi")}
              >
                <option>Belum tahu</option>
                <option>Teknisi datang ke tempat saya</option>
                <option>Saya datang ke toko</option>
                <option>Tidak perlu, pasang sendiri</option>
              </select>
            </label>

            <label className="consultation-notes">
              Catatan
              <textarea
                rows={4}
                placeholder="Ceritakan kebutuhan atau pertanyaan lainnya..."
                value={f.catatan}
                onChange={set("catatan")}
              />
            </label>

          </div>

          <div className="consultation-submit-area">
            <p>
              Pastikan informasi yang kamu isi sudah benar.
            </p>

            <button
              className="btn consultation-submit"
              type="submit"
            >
              Kirim Konsultasi <span>↗</span>
            </button>
          </div>
        </form>

        {/* RIGHT: INFORMATION */}
        <aside className="consultation-sidebar">

          <div className="consultation-info-card">
            <span className="consultation-eyebrow">
              WHY TECHCARE?
            </span>

            <h2>
              Siap Bangun
              <span> Setup Impianmu?</span>
            </h2>

            <p className="consultation-info-desc">
              Tidak perlu bingung memilih perangkat.
              Kami siap membantu menemukan setup yang
              sesuai kebutuhan dan budget-mu.
            </p>

            <div className="consultation-benefits">

              <div className="consultation-benefit">
              <div>
                <h3>Konsultasi Gratis</h3>
                <p>Diskusikan kebutuhan setup tanpa biaya konsultasi.</p>
              </div>
            </div>

              <div className="consultation-benefit">
              <div>
                <h3>Sesuai Budget</h3>
                <p>Rekomendasi perangkat berdasarkan anggaranmu.</p>
              </div>
            </div>

              <div className="consultation-benefit">
              <div>
                <h3>Setup Support</h3>
                <p>Bantuan untuk mewujudkan setup yang kamu inginkan.</p>
              </div>
            </div>

            </div>
          </div>

          <div className="consultation-contact-card">
            

<h3>Alur Konsultasi</h3>

<div className="consultation-flow">
  <div className="flow-symbol">
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  </div>
  <p>Isi kebutuhan konsultasi</p>
</div>

<div className="consultation-flow">
  <div className="flow-symbol">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M21 3L10.5 13.5M21 3l-6.7 18-3.8-7.5L3 9.7 21 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  </div>
  <p>Kirim formulir ke WhatsApp</p>
</div>

<div className="consultation-flow">
  <div className="flow-symbol">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-5 4v-4.2A2.5 2.5 0 0 1 4 13.5v-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M8 8h8M8 11.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  </div>
  <p>Diskusikan rekomendasi bersama TechCare</p>
</div>
            <div className="consultation-contact-divider" />

            <h3>Hubungi Kami</h3>

            <a
              className="consultation-contact-link"
              href="mailto:techcare.contact@gmail.com"
            >
              <span className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2"
                  stroke="currentColor" strokeWidth="1.7"/>
                <path d="m4 7 8 6 8-6"
                  stroke="currentColor" strokeWidth="1.7"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
              <span>
                <small>Email</small>
                <strong>techcare.contact@gmail.com</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="consultation-contact-link"
              href={waLink("Halo TechCare, saya ingin bertanya.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z"
      stroke="currentColor" strokeWidth="1.7"
      strokeLinejoin="round"/>
    <path d="M8 8.5c.5 3 2.5 5 5.5 6"
      stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round"/>
  </svg>
</span>
              <span>
                <small>WhatsApp</small>
                <strong>Hubungi Customer Service</strong>
              </span>
              <span className="contact-arrow">↗</span>
            </a>

          </div>
        </aside>

      </div>
    </main>
  );
}
