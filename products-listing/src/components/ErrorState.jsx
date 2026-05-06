/**
 * ErrorState — displayed when an API fetch error occurs.
 * No icons used.
 */
export default function ErrorState({ error, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <div className="px-6 py-2 bg-red-50 border border-red-100 rounded-2xl mb-2">
        <span className="text-xs font-black text-red-400 uppercase tracking-[0.2em]">
          Error Occurred
        </span>
      </div>
      <h2 className="text-xl font-black text-gray-900">Unable to Fetch Data</h2>
      <p className="text-gray-500 max-w-xs font-medium">{error}.</p>
      <button
        onClick={onRetry || (() => window.location.reload())}
        className="px-8 py-3 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl"
      >
        Try Again
      </button>
    </div>
  );
}
