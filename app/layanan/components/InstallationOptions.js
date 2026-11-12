
import Link from "next/link";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=TechCare";

export default function InstallationOptions() {
  return (
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

        <Link href="/konsultasi" className="installation-help-link">
          Konsultasi dulu <span>→</span>
        </Link>
      </div>
    </section>
  );
}
