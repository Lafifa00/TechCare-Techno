// Ganti nomor WhatsApp (format 62..., tanpa + dan tanpa 0 di depan)
export const WA_NUMBER = "6281234567890";
export const waLink = (t = "Halo Tech Care, saya butuh bantuan setup.") => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
export const JAM = "Senin – Minggu: 09.00 – 22.00 WIB";
// Tutorial: isi id video YouTube (bagian setelah v= di link). Kosongkan untuk placeholder.
export const TUTORIALS = [
  { id: "", title: "Pasang mic XLR dan audio interface", tag: "Mikrofon · 8 menit" },
  { id: "", title: "Setting capture card untuk konsol dan PC", tag: "Capture card · 12 menit" },
  { id: "", title: "Atur lighting supaya wajah tidak flat", tag: "Lighting · 6 menit" },
  { id: "", title: "Setup OBS pertama kali", tag: "Software · 15 menit" },
];
