import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProducts } from "@/lib/products";
export const revalidate = 60;
export default async function Page({ params }) {
  const { slug } = await params; const p = (await getProducts()).find((x) => x.slug === slug);
  if (!p) notFound(); return <ProductDetail p={p} />;
}
