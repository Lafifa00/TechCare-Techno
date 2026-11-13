import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";
import { waLink } from "@/lib/config";
export const revalidate = 60;
export default async function Home() {
  const ps = (await getProducts()).slice(0, 4);
  return (<>
    
<section className="wrap tech-hero">
  {/* BACKGROUND EFFECT */}
  <div className="hero-glow" aria-hidden="true" />
  <div className="hero-grid" aria-hidden="true" />

  {/* HERO CONTENT */}
  <div className="hero-content">
    <span className="hero-badge">
      <span className="pulse-dot" />
      STREAMING GEAR & SETUP SOLUTION
    </span>

    <h1>
      Build Your
      <span> Ultimate Setup.</span>
      <br />
      Stream Without Limits.
    </h1>

    <p>
      Wujudkan setup gaming dan streaming impianmu.
      Temukan perangkat terbaik, konsultasi sesuai budget,
      dan dapatkan solusi setup tanpa ribet bersama TechCare.
    </p>

    <div className="hero-actions">
      <Link href="/konsultasi" className="hero-btn primary">
        Mulai Konsultasi
        <span>↗</span>
      </Link>

      <Link href="/inspirasi" className="hero-btn secondary">
        Jelajahi Inspirasi
        <span>→</span>
      </Link>
    </div>

    <div className="hero-trust">
      <div className="trust-item">
        <strong>Free</strong>
        <span>Konsultasi</span>
      </div>

      <div className="trust-line" />

      <div className="trust-item">
        <strong>Custom</strong>
        <span>Sesuai Budget</span>
      </div>

      <div className="trust-line" />

      <div className="trust-item">
        <strong>Expert</strong>
        <span>Setup Support</span>
      </div>
    </div>
  </div>


{/* DASHBOARD ANALYTICS */}
<div className="hero-visual">

  <div className="stats-dashboard">

    {/* DASHBOARD HEADER */}
    <div className="stats-dashboard-header">
      <div>
        <span className="dashboard-label">
          TECHCARE PERFORMANCE
        </span>
        <h3>Our Achievement</h3>
        <p>Built around your streaming experience.</p>
      </div>

      <span className="stats-live">
        <i />
        TECHCARE
      </span>
    </div>

    {/* MAIN PERCENTAGE */}
    <div className="main-percentage">
      <div>
        <span className="dashboard-label">
          FREE CONSULTATION
        </span>

        <h2>100<span>%</span></h2>

        <p>
          Konsultasi gratis untuk membantu
          mewujudkan setup impianmu.
        </p>
      </div>

      <div className="consultation-ring">
        <strong>100%</strong>
      </div>
    </div>

    {/* ANALYTICS CARDS */}
    <div className="analytics-grid">

      {/* VERIFIED SETUP */}
      <div className="analytics-card">
        <div className="analytics-card-top">
          <span>VERIFIED SETUP</span>
          <span className="analytics-icon">✦</span>
        </div>

        <div className="analytics-value">140+</div>
        <p>Setup Terverifikasi</p>

        <div className="mini-chart">
          {[35,48,40,65,52,78,60,90,75,100].map((height, i) => (
            <span
              key={i}
              style={{ "--bar-height": `${height}%` }}
            />
          ))}
        </div>

        <small>TechCare Setup Experience</small>
      </div>

      {/* CUSTOMER RATING */}
      <div className="analytics-card">
        <div className="analytics-card-top">
          <span>CUSTOMER RATING</span>
          <span className="analytics-icon">★</span>
        </div>

        <div className="analytics-value">
          4.9<span>/5</span>
        </div>

        <p>Kepuasan Setup</p>

        <div className="rating-visual">
          <div className="rating-stars">★★★★★</div>

          <div className="rating-track">
            <span />
          </div>
        </div>

        <small>Customer Satisfaction</small>
      </div>

      {/* SETUP SUPPORT */}
      <div className="analytics-card">
        <div className="analytics-card-top">
          <span>SETUP SUPPORT</span>
          <span className="analytics-icon">✓</span>
        </div>

        <div className="analytics-value">FREE</div>

        <p>Setup Consultation</p>

        <div className="support-visual">
          <div className="support-line">
            <span />
          </div>
          <div className="support-points">
            <i />
            <i />
            <i />
          </div>
        </div>

        <small>Support For Your Setup</small>
      </div>

    </div>

    {/* FOOTER */}
    <div className="stats-dashboard-footer">
      <span>✦</span>
      YOUR SETUP. YOUR STYLE. YOUR EXPERIENCE.
    </div>

  </div>

</div>
</section>

   


<section className="wrap process-section">
  <div className="process-heading">
    <span className="process-eyebrow">HOW IT WORKS</span>

    <h2>Dari bingung sampai siap live</h2>

    <p>
      Empat langkah sederhana untuk mewujudkan setup gaming
      dan streaming impianmu bersama TechCare.
    </p>
  </div>

  <div className="process-track">
    {[
      {
        n: "01",
        title: "Konsultasi",
        desc: "Isi form singkat atau chat WhatsApp untuk ceritakan kebutuhan setup-mu."
      },
      {
        n: "02",
        title: "Rekomendasi",
        desc: "Dapatkan daftar perangkat yang sesuai budget dan kebutuhan PC-mu."
      },
      {
        n: "03",
        title: "Pesan",
        desc: "Cek ketersediaan produk di katalog, lalu pesan melalui WhatsApp."
      },
      {
        n: "04",
        title: "Pasang",
        desc: "Rakit setup sendiri dengan panduan video atau gunakan bantuan tim kami."
      }
    ].map((step) => (
      <div className="process-step" key={step.n}>

        <div className="process-marker">
          <span>{step.n}</span>
        </div>

        <div className="process-card">
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>

      </div>
    ))}
  </div>
</section>
    
<section className="wrap products-section">
  <div className="products-heading">
    <div>
      <span className="products-eyebrow">TECHCARE CATALOG</span>
      <h2>Produk pilihan</h2>
      <p>Temukan perangkat terbaik untuk melengkapi setup impianmu.</p>
    </div>

    <Link className="products-view-all" href="/katalog">
      Lihat semua produk <span>↗</span>
    </Link>
  </div>

  <div className="products-grid">
    {ps.map((p) => (
      <ProductCard key={p.slug} p={p} />
    ))}
  </div>
</section>

    <section className="wrap"><div className="card cta2"><h2>Belum tahu mulai dari mana?</h2><p className="mut">Kirim budget dan perangkat yang sudah kamu punya. Kami balas dengan daftar yang jelas.</p><a className="btn wa" href={waLink()} target="_blank" rel="noopener">Chat CS via WhatsApp</a></div></section></>);
}
