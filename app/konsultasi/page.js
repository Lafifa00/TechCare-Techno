
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
            <span>01</span>
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
              <input
                required
                placeholder="Contoh: Rp2.000.000"
                value={f.budget}
                onChange={set("budget")}
              />
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
                <span className="benefit-icon">✦</span>
                <div>
                  <h3>Konsultasi Gratis</h3>
                  <p>Diskusikan kebutuhan setup tanpa biaya konsultasi.</p>
                </div>
              </div>

              <div className="consultation-benefit">
                <span className="benefit-icon">◈</span>
                <div>
                  <h3>Sesuai Budget</h3>
                  <p>Rekomendasi perangkat berdasarkan anggaranmu.</p>
                </div>
              </div>

              <div className="consultation-benefit">
                <span className="benefit-icon">⌘</span>
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
              <span>01</span>
              <p>Isi kebutuhan konsultasi</p>
            </div>

            <div className="consultation-flow">
              <span>02</span>
              <p>Kirim formulir ke WhatsApp</p>
            </div>

            <div className="consultation-flow">
              <span>03</span>
              <p>Diskusikan rekomendasi bersama TechCare</p>
            </div>

            <div className="consultation-contact-divider" />

            <h3>Hubungi Kami</h3>

            <a
              className="consultation-contact-link"
              href="mailto:techcare.contact@gmail.com"
            >
              <span className="contact-icon">✉</span>
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
              <span className="contact-icon">⌕</span>
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
