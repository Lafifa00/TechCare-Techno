
import Link from "next/link";

export const metadata = {
  title: "Layanan & Tutorial – Tech Care",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=TechCare";

const tutorials = [
  {
    category: "AUDIO",
    title: "Cara Memasang Mic XLR dan Audio Interface",
    description:
      "Pelajari cara menghubungkan mikrofon XLR dengan audio interface untuk kebutuhan streaming.",
    search:
      "tutorial memasang mic XLR audio interface Indonesia",
  },
  {
    category: "AUDIO",
    title: "Menghubungkan Audio Interface ke OBS",
    description:
      "Pelajari cara mengatur input mikrofon agar suara terbaca dengan baik di OBS Studio.",
    search:
      "tutorial menghubungkan audio interface ke OBS Indonesia",
  },
  {
    category: "VIDEO",
    title: "Setting Capture Card untuk Konsol",
    description:
      "Panduan menghubungkan PS5, Nintendo Switch, atau konsol lainnya ke PC.",
    search:
      "tutorial setting capture card PS5 OBS Indonesia",
  },
  {
    category: "WEBCAM",
    title: "Menghubungkan Webcam ke OBS",
    description:
      "Pelajari cara menambahkan webcam dan mengatur tampilannya di OBS Studio.",
    search:
      "tutorial setting webcam OBS Studio Indonesia",
  },
  {
    category: "LIGHTING",
    title: "Mengatur Lighting untuk Streaming",
    description:
      "Kenali penempatan lampu agar wajah terlihat lebih jelas saat streaming.",
    search:
      "tutorial lighting setup streaming Indonesia",
  },
  {
    category: "OBS STUDIO",
    title: "Belajar OBS Studio untuk Pemula",
    description:
      "Kenali scene, source, audio mixer, dan pengaturan dasar OBS Studio.",
    search:
      "tutorial OBS Studio lengkap untuk pemula Indonesia",
  },
  {
    category: "VISUAL",
    title: "Menggunakan Green Screen di OBS",
    description:
      "Pelajari cara menggunakan chroma key untuk mengganti latar belakang.",
    search:
      "tutorial green screen chroma key OBS Indonesia",
  },
  {
    category: "AUDIO",
    title: "Mengatur Filter Audio Mikrofon",
    description:
      "Kenali noise suppression, noise gate, dan compressor untuk suara lebih bersih.",
    search:
      "tutorial filter audio mic OBS Indonesia",
  },
  {
    category: "STREAMING",
    title: "Membuat Scene dan Overlay Streaming",
    description:
      "Susun tampilan game, webcam, teks, dan elemen visual untuk streaming.",
    search:
      "tutorial membuat scene overlay OBS Indonesia",
  },
  {
    category: "MULTICAM",
    title: "Setup Dua Kamera untuk Streaming",
    description:
      "Pelajari cara menggunakan lebih dari satu kamera dalam OBS Studio.",
    search:
      "tutorial live streaming multicamera OBS Indonesia",
  },
];

export default function Layanan() {
  return (
    <div className="wrap">
      {/* LAYANAN PEMASANGAN */}
      <section className="installation-section">
        <div className="installation-heading">
          <span className="installation-eyebrow">
            LAYANAN TECHCARE
          </span>

          <h1>Layanan Pemasangan</h1>

          <p>
            Pilih cara pemasangan yang paling nyaman untuk
            kebutuhan setup kamu. Lokasi dan biaya akan
            dikonfirmasi terlebih dahulu melalui chat.
          </p>
        </div>

        <div className="installation-grid">
          {/* TEKNISI DATANG KE RUMAH */}
          <article className="installation-card">
            <div className="installation-icon">
              <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 10 9-7 9 7" />
                <path d="M5 9v12h14V9" />
                <path d="M9 21v-7h6v7" />
              </svg>
            </div>

            <span className="installation-tag">
              Praktis dari rumah
            </span>

            <h2>Teknisi Datang ke Rumah</h2>

            <p>
              Tidak perlu repot membawa perangkat.
              Teknisi TechCare akan datang ke lokasi
              untuk membantu pemasangan dan pengaturan setup.
            </p>

            <ul>
              <li>Pemasangan perangkat</li>
              <li>Pengaturan setup</li>
              <li>Pengecekan setelah pemasangan</li>
            </ul>

            <Link
              href="/layanan/pasang-di-rumah"
              className="installation-button primary"
            >
              Ajukan Pemasangan
              <span>→</span>
            </Link>
          </article>

          {/* DATANG KE TOKO */}
          <article className="installation-card">
            <div className="installation-icon">
              <svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M13 10h6v11" />
                <path d="M8 9h2M8 13h2M8 17h2" />
                <path d="M16 14h1M16 17h1" />
              </svg>
            </div>

            <span className="installation-tag">
              Datang langsung
            </span>

            <h2>Datang ke Toko</h2>

            <p>
              Bawa PC atau perangkat kamu ke toko TechCare.
              Kami akan membantu proses pemasangan dan
              pengaturan secara langsung.
            </p>

            <ul>
              <li>Bawa perangkat ke toko</li>
              <li>Pemasangan dan pengaturan</li>
              <li>Konsultasi langsung dengan tim</li>
            </ul>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="installation-button secondary"
            >
              Lihat Lokasi di Maps
              <span>↗</span>
            </a>
          </article>
        </div>

        {/* KONSULTASI */}
        <div className="installation-help">
          <div className="installation-help-icon">
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.6 9a2.5 2.5 0 1 1 4.3 1.7c-1.2 1.1-1.9 1.4-1.9 3" />
              <path d="M12 17.5h.01" />
            </svg>
          </div>

          <div>
            <h3>Masih bingung memilih?</h3>
            <p>
              Ceritakan kebutuhan setup kamu. Tim TechCare
              siap membantu menentukan layanan yang sesuai.
            </p>
          </div>

          <Link
            href="/konsultasi"
            className="installation-help-link"
          >
            Konsultasi dulu <span>→</span>
          </Link>
        </div>
      </section>

      {/* TUTORIAL PEMASANGAN */}
      <section className="tutorial-section">
        <div className="tutorial-heading">
          <div>
            <span className="installation-eyebrow">
              PANDUAN TECHCARE
            </span>

            <h2>Tutorial Pemasangan</h2>

            <p>
              Pelajari cara memasang dan mengatur berbagai
              perangkat streaming melalui panduan video pilihan.
            </p>
          </div>

          <a
            href="https://www.youtube.com/results?search_query=tutorial+setup+streaming"
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-all-link"
          >
            Jelajahi YouTube ↗
          </a>
        </div>

        <div className="tutorial-grid">
          {tutorials.map((item) => (
            <article
              className="tutorial-card"
              key={item.title}
            >
              <div className="tutorial-category">
                {item.category}
              </div>

              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.search)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tutorial-thumbnail"
                aria-label={`Cari video ${item.title} di YouTube`}
              >
                <span className="tutorial-play-icon">
                  ▶
                </span>
              </a>

              <div className="tutorial-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.search)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tutorial-watch-link"
                >
                  Tonton Tutorial
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
