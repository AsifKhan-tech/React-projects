import { useState, useEffect } from "react";

const API_URL = "https://api.freeapi.app/api/v1/public/youtube/videos";

export const useVideos = (initialPage = 1, initialLimit = 12, query = "") => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Reset page when query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        let url = `${API_URL}?page=${page}&limit=${initialLimit}`;
        if (query && query !== "All") {
          url += `&query=${encodeURIComponent(query)}`;
        }
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const result = await response.json();
        
        // Map to a flatter structure
        const formattedVideos = result.data.data.map((item) => ({
          id: item.items.id,
          ...item.items.snippet,
          ...item.items.statistics,
          ...item.items.contentDetails,
        }));
        
        setVideos(formattedVideos);
        setTotalPages(result.data.totalPages || 0);
        setTotalItems(result.data.totalItems || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [page, initialLimit, query]);

  return { videos, loading, error, page, setPage, totalPages, totalItems };
};
