import { useState, useMemo } from "react";
import "./App.css";
import useProducts from "./hooks/useProducts";
import Header from "./components/Header";
import StatsRibbon from "./components/StatsRibbon";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import EmptyState from "./components/EmptyState";
import ErrorState from "./components/ErrorState";
import Footer from "./components/Footer";

/**
 * App — Main entry point.
 * Now fully modularized with sub-components for each state.
 */
function App() {
  const {
    products,
    page,
    totalPages,
    totalItems,
    loading,
    error,
    nextPage,
    prevPage,
    goToPage,
  } = useProducts();

  const [searchQuery, setSearchQuery] = useState("");

  // Client-side search filtering
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }, [products, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfcff]">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {!error && (
          <StatsRibbon
            page={page}
            totalPages={totalPages}
            totalItems={totalItems}
            products={products}
          />
        )}

        {error ? (
          <ErrorState error={error} onRetry={() => window.location.reload()} />
        ) : (
          <section id="product-grid" className="space-y-8">
            <ProductGrid products={filteredProducts} loading={loading} />

            {!loading && filteredProducts.length === 0 && (
              <EmptyState
                searchQuery={searchQuery}
                onClear={() => setSearchQuery("")}
              />
            )}
          </section>
        )}

        {!loading && !error && filteredProducts.length > 0 && !searchQuery && (
          <Pagination
            page={page}
            totalPages={totalPages}
            goToPage={goToPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
