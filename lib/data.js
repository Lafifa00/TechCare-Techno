// Data contoh. Semua nama, harga, ulasan di sini HARUS diganti dengan data asli sebelum online.
export const rupiah = (n) => "Rp" + Number(n || 0).toLocaleString("id-ID");
export const PRODUCTS = [
  { slug: "shure-sm7b", nama: "Shure SM7B Dynamic Vocal Studio Microphone", kategori: "Mikrofon", sub: "Streaming Microphones", sku: "SHU-SM7B-PRO",
    harga: 6890000, coret: 7500000, stok: 5, ikon: "🎙️", rating: 4.9, ulasan: 142,
    badges: ["Stok Tersedia", "Garansi Resmi 2 Thn", "100% Original"],
    varian: [
      { n: "Unit Only (Standar Box)", h: 6890000, d: "Mikrofon lengkap dengan dua windscreen bawaan pabrik." },
      { n: "Streaming Ready", h: 8950000, tag: "Populer", d: "+ Cloud Microphones CL-1 Preamp + Kabel Mogami 3m XLR." },
      { n: "Full Broadcast Rig", h: 11200000, d: "+ Elgato Wave Arm LP + Audio Interface Focusrite Solo Gen 4." } ],
    info: { t: "Apakah Anda butuh audio interface?", d: "Shure SM7B adalah mikrofon analog XLR impedansi studio dan tidak dapat langsung dicolok via kabel USB biasa. Dibutuhkan soundcard/audio interface dengan gain sehat (minimal +60dB) atau pairing dengan preamp tambahan." },
    fitur: [["Kapsul Dynamic Cardioid Murni", "Menolak pantulan gema ruangan tak teredam dan menyaring bising ketukan switch keyboard mekanikal gaming."], ["Internal Air-Suspension Shock Isolation", "Meredam getaran pneumatik terintegrasi sehingga hentakan meja gaming tidak terdengar."], ["Electromagnetic Hum Shielding", "Perlindungan anti-interferensi magnetik dari layar monitor high refresh-rate, PSU rig PC, dan lampu."], ["Bass Roll-Off & Mid-Presence Boost", "Dua switch untuk menyesuaikan suara vokal agar siap siaran."]],
    spek: [["Tipe Transduser", "Dynamic (Moving Coil)"], ["Polar Pattern", "Cardioid Seragam"], ["Frekuensi Respon", "50 Hz – 20.000 Hz"], ["Output Impedance", "150 Ω (300 Ω aktual)"], ["Sensitivitas (1 kHz)", "-59,0 dB (1,12 mV)"], ["Konektivitas", "Standard 3-Pin XLR Male"], ["Berat Total", "765 gram (Die-Cast Steel)"]],
    box: ["1x Shure SM7B Vocal Studio Microphone", "1x A7WS Detachable High-Foam Close-Talk Windscreen", "1x RPM602 Switch Cover Protective Metal Plate", "1x 5/8\" to 3/8\" Thread Adapter untuk Boom Arm Meja"],
    paired: [["Elgato Wave Mic Arm LP", 1550000], ["Cloudlifter CL-1 Activator", 2450000], ["Mogami Gold Studio XLR 3m", 580000]],
    ulasanList: [["Contoh Pembeli 1", "Streamer", "Contoh ulasan. Ganti dengan ulasan asli pelangganmu."], ["Contoh Pembeli 2", "Podcaster", "Contoh ulasan. Ganti dengan ulasan asli pelangganmu."]] },
  { slug: "elgato-wave-3", nama: "Elgato Wave:3 USB Condenser Mic", kategori: "Mikrofon", harga: 2450000, stok: 8, ikon: "🎤" },
  { slug: "webcam-1080p", nama: "Webcam 1080p 60fps", kategori: "Kamera", harga: 1250000, stok: 6, ikon: "📷" },
  { slug: "capture-card-4k", nama: "Capture Card 4K", kategori: "Capture card", harga: 1600000, stok: 3, ikon: "🎞️" },
  { slug: "key-light-led", nama: "Key Light LED", kategori: "Lighting", harga: 480000, stok: 3, ikon: "💡" },
  { slug: "headset-71", nama: "Headset Gaming 7.1", kategori: "Headset", harga: 850000, stok: 8, ikon: "🎧" },
  { slug: "keyboard-mekanik", nama: "Keyboard Mekanik 75%", kategori: "Periferal", harga: 750000, stok: 0, ikon: "⌨️" },
  { slug: "pc-streaming", nama: "PC Streaming Ryzen 5", kategori: "PC", harga: 9500000, stok: 2, ikon: "🖥️" },
];
export const SETUPS = [
  { t: "The Stealth Battlestation", s: "Dark Violet Aesthetic · Zero Clutter Workflow", tag: "Minimalist Dark", by: "@ryu_designdesk", items: ["Monitor UltraWide 34\"", "Mic Shure MV7", "Elgato Key Light", "Custom Keyboard 75%"], total: 24500000, ikon: "🖥️" },
  { t: "Pro Esports Streamer Corner", s: "Low Latency Rig · Turnamen & Live Cast", tag: "Esports Ready", by: "@valorant_ace.id", items: ["Zowie 360Hz Display", "G Pro X Superlight", "GOXLR Mini Audio", "Audio Technica AT2020"], total: 32000000, ikon: "🏆" },
  { t: "Budget Compact Streamer Desk", s: "Maksimal di Budget Hemat · Siap Siaran Langsung", tag: "Budget Friendly", by: "@mika_indie", items: ["Fifine K688 USB/XLR", "C922 Pro Stream FHD", "Ring Light 12\" Stand", "XL Hybrid Desk Mat"], total: 8750000, ikon: "💡" },
];
