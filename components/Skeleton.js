
export function Skeleton({ className = "" }) {
  return (
    <div
      className={`skeleton ${className}`}
      aria-hidden="true"
    />
  );
}

export function ProductSkeleton() {
  return (
    <div className="card">
      <Skeleton className="sk-image" />
      <Skeleton className="sk-text short" />
      <Skeleton className="sk-text" />
      <Skeleton className="sk-price" />
    </div>
  );
}

export function CatalogSkeleton() {
  return (
    <div className="grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}


