/**
 * Pagination — numbered page navigation with prev/next text buttons.
 * No SVG icons used.
 */
export default function Pagination({ page, totalPages, goToPage, prevPage, nextPage }) {
  if (totalPages <= 1) return null;

  function getPageNumbers() {
    const pages = [];
    const delta = 1;

    const rangeStart = Math.max(2, page - delta);
    const rangeEnd = Math.min(totalPages - 1, page + delta);

    pages.push(1);
    if (rangeStart > 2) pages.push("...L");
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 1) pages.push("...R");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  }

  const pageNumbers = getPageNumbers();

  return (
    <nav
      id="pagination"
      aria-label="Product pages"
      className="flex items-center justify-center gap-3 pt-6 pb-2 select-none"
    >
      {/* Previous */}
      <button
        id="prev-page"
        onClick={prevPage}
        disabled={page === 1}
        className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 hover:text-violet-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 border border-gray-100 bg-white"
      >
        Prev
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((p) =>
          typeof p === "string" ? (
            <span key={p} className="px-1 text-gray-300 font-bold">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`w-9 h-9 rounded-xl text-xs font-black transition-all duration-200 ${
                p === page
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200 scale-105"
                  : "text-gray-500 hover:bg-gray-50 hover:text-violet-600"
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        id="next-page"
        onClick={nextPage}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 hover:text-violet-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 border border-gray-100 bg-white"
      >
        Next
      </button>
    </nav>
  );
}
