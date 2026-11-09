"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const LINKS = [["/", "Home", "⌂"], ["/katalog", "Produk", "▦"], ["/konsultasi", "Konsultasi", "✎"], ["/layanan", "Layanan", "⚙"], ["/inspirasi", "Inspirasi", "★"]];
export default function Nav({ bottom }) {
  const p = usePathname();
  return (<nav className={bottom ? "bnav" : "tnav"} aria-label="Menu utama">
    {LINKS.map(([h, l, i]) => <Link key={h} href={h} className={(h === "/" ? p === "/" : p.startsWith(h)) ? "on" : ""}>{bottom && <span aria-hidden>{i}</span>}{l}</Link>)}
  </nav>);
}
