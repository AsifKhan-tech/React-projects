import { useState, useEffect } from "react";

/**
 * useProducts — fetches paginated product data from the FreeAPI.
 * Exposes products array, pagination helpers, loading & error state,
 * and page metadata so the UI can stay declarative.
 */
const API_BASE = "https://api.freeapi.app/api/v1/public/randomproducts";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE}?page=${page}&limit=10`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        setProducts(json.data?.data ?? []);
        setTotalPages(json.data?.totalPages ?? 1);
        setTotalItems(json.data?.totalItems ?? 0);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
    return () => controller.abort();
  }, [page]);

  // Navigation helpers
  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const goToPage = (n) => setPage(n);

  return {
    products,
    page,
    totalPages,
    totalItems,
    loading,
    error,
    nextPage,
    prevPage,
    goToPage,
  };
}
