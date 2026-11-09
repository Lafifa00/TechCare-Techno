"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
export default function Catalog({ products }) {
  const cats = ["Semua", ...new Set(products.map((p) => p.kategori))]; const [c, setC] = useState("Semua");
  return (<><div className="chips pad">{cats.map((x) => <button key={x} className="chip" aria-pressed={x === c} onClick={() => setC(x)}>{x}</button>)}</div>
    <div className="grid">{products.filter((p) => c === "Semua" || p.kategori === c).map((p) => <ProductCard key={p.slug} p={p} />)}</div></>);
}
