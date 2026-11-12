import { CatalogSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="wrap">
      <h1>Memuat katalog...</h1>
      <CatalogSkeleton />
    </div>
  );
}