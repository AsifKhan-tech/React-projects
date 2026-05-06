export default function Pagination({
  page,
  totalPages,
  handlePrev,
  handleNext,
}) {
  if (totalPages <= 1) return null;

  return (
    <footer className="mt-12 mb-6 flex justify-center">
      <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-full p-2 border border-white shadow-sm">
        <button
          onClick={handlePrev}
          disabled={page <= 1}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-50 shadow-sm text-gray-500 hover:text-rose-500 hover:shadow disabled:opacity-40 disabled:cursor-not-allowed transition-all font-bold text-xl"
        >
          ←
        </button>
        <span className="font-bold text-gray-700 px-6 tracking-wide">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page >= totalPages}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-50 shadow-sm text-gray-500 hover:text-rose-500 hover:shadow disabled:opacity-40 disabled:cursor-not-allowed transition-all font-bold text-xl"
        >
          →
        </button>
      </div>
    </footer>
  );
}
