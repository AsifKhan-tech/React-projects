import { useState, useCallback } from "react";

export function useJokes() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fetchJokes = useCallback(async (pageNum = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomjokes?page=${pageNum}&limit=10`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jokes");
      }

      const result = await response.json();

      if (result.success && result.data) {
        setJokes(result.data.data);
        setPage(result.data.page);
        setTotalPages(result.data.totalPages);
        setTotalItems(result.data.totalItems);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (page < totalPages) {
      fetchJokes(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, totalPages, fetchJokes]);

  const handlePrev = useCallback(() => {
    if (page > 1) {
      fetchJokes(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, fetchJokes]);

  return {
    jokes,
    error,
    loading,
    page,
    totalPages,
    totalItems,
    fetchJokes,
    handleNext,
    handlePrev,
  };
}
