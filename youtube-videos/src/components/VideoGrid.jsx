import React, { useEffect } from "react";
import { useVideos } from "../hooks/useVideos";
import VideoCard from "./VideoCard";
import Skeleton from "./Skeleton";

const VideoGrid = ({ query = "" }) => {
  const { videos, loading, error, page, setPage, totalPages } = useVideos(1, 12, query);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, query]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-10">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
        <p className="text-yt-gray">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 p-4 md:p-6">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)
          : videos.length > 0 
            ? videos.map((video) => <VideoCard key={video.id} video={video} />)
            : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold">No videos found for "{query}"</h3>
                <p className="text-yt-gray mt-2">Try selecting another category.</p>
              </div>
            )
        }
      </div>

      {/* Pagination Controls */}
      {!loading && videos.length > 0 && (
        <div className="flex items-center justify-center gap-4 py-10 mt-auto border-t border-[#303030]">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              page === 1 
                ? 'text-yt-gray cursor-not-allowed bg-transparent' 
                : 'text-white hover:bg-yt-hover bg-[#181818]'
            }`}
          >
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Page {page} of {totalPages}</span>
          </div>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              page === totalPages 
                ? 'text-yt-gray cursor-not-allowed bg-transparent' 
                : 'text-white hover:bg-yt-hover bg-[#181818]'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
