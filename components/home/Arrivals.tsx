import ProductCard from "@/components/collection/ProductCard";
import type { Product } from "@/lib/types"
import Link from "next/link";


export default function NewArrivals({
  products,
}: {
  products: Product[];
}) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="w-full pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <p className="text-sm tracking-[0.18em] uppercase text-neutral-500 mb-2">
              Catalog
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Just listed
            </h2>
          </div>
          <Link
            href="/collections/all"
            className="text-sm font-semibold text-neutral-900 underline underline-offset-4"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
