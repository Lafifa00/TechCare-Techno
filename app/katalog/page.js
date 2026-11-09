import Catalog from "@/components/Catalog";
import { getProducts } from "@/lib/products";
export const metadata = { title: "Produk – Tech Care" };
export const revalidate = 60;
export default async function Katalog() {
  return (<div className="wrap"><h1 className="h2">Katalog & Stok</h1><p className="mut">Stok diperbarui dari spreadsheet kami. Klik produk untuk detail, lalu pesan via WhatsApp (bisa sekalian jasa pasang).</p><Catalog products={await getProducts()} /></div>);
}
