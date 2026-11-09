"use client";
export default function ThemeToggle() {
  const go = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme === "light" ? "dark" : "light"; try { localStorage.setItem("theme", r.dataset.theme); } catch {} };
  return <button className="tg" onClick={go} aria-label="Ganti mode terang atau gelap">◐</button>;
}
