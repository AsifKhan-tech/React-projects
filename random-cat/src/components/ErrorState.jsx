export default function ErrorState({ error, onRetry }) {
  return (
    <div className="text-center py-10 px-6">
      <div className="text-6xl mb-6">😿</div>
      <h3 className="text-2xl font-serif-bold text-zinc-900 mb-3">
        Something went wrong
      </h3>
      <p className="text-zinc-500 mb-8 max-w-xs mx-auto leading-relaxed">
        {error || "We couldn't load the cat profile. Please try again."}
      </p>
      <button
        onClick={onRetry}
        className="px-10 py-3.5 bg-zinc-900 hover:bg-black text-white font-bold rounded-full transition-all active:scale-95 shadow-xl shadow-zinc-900/20"
      >
        Try Again
      </button>
    </div>
  );
}
