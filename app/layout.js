import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import Chatbot from "@/components/Chatbot";
export const metadata = { title: "Tech Care – Streaming Gear & Setup Solution", description: "Perangkat streaming dan gaming, konsultasi, serta layanan dan tutorial pemasangan." };
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }) {
  return (<html lang="id" suppressHydrationWarning><head>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}" }} /></head>
    <body><header><div className="wrap hd">
      <Link href="/" className="brand"><img src="/logo.png" alt="" /><span><b>TECH CARE</b><small>STREAMING GEAR & SETUP SOLUTION</small></span></Link>
      <Nav /><ThemeToggle /></div></header>
      <main>{children}</main>
      <footer><div className="wrap">© 2026 Tech Care. Streaming gear, konsultasi, dan solusi pemasangan.</div></footer>
      <Nav bottom /><Chatbot /></body></html>);
}
