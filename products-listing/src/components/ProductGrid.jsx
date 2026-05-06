import ProductCard from "./ProductCard";

/**
 * ProductGrid — handles the rendering of the product list,
 * including skeleton loaders during the loading state.
 */
export default function ProductGrid({ products, loading }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-6">
      {loading
        ? // Skeleton Loaders
          [...Array(10)].map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="bg-white rounded-2xl border border-gray-100 p-4 space-y-4 shadow-sm animate-pulse"
            >
              <div className="aspect-square bg-gray-100 rounded-xl skeleton" />
              <div className="h-6 bg-gray-100 rounded-md w-2/3 skeleton" />
              <div className="h-4 bg-gray-100 rounded-md w-full skeleton" />
              <div className="flex justify-between items-center pt-2">
                <div className="h-7 bg-gray-100 rounded-md w-1/3 skeleton" />
                <div className="h-5 bg-gray-100 rounded-md w-1/4 skeleton" />
              </div>
            </div>
          ))
        : products.map((product, idx) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
    </div>
  );
}
