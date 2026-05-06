/**
 * EmptyState — displayed when a search returns no results.
 * No icons used.
 */
export default function EmptyState({ searchQuery, onClear }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="px-6 py-2 bg-gray-50 border border-gray-100 rounded-2xl mb-6">
        <span className="text-xs font-black text-gray-300 uppercase tracking-[0.2em]">
          No Results
        </span>
      </div>
      <h3 className="text-lg font-black text-gray-800">Products Not Found</h3>
      <p className="text-sm text-gray-500 mt-1 font-medium">
        We couldn't find anything matching "{searchQuery}"
      </p>
      <button
        onClick={onClear}
        className="mt-8 px-6 py-2 rounded-xl bg-violet-600 text-white text-xs font-black uppercase tracking-widest hover:bg-violet-700 transition-all shadow-lg shadow-violet-100"
      >
        Clear Filter
      </button>
    </div>
  );
}
