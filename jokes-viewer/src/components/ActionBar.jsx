export default function ActionBar({ onRefresh }) {
  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={onRefresh}
        className="bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white font-bold py-3.5 px-10 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center"
      >
        Refresh Jokes Feed
      </button>
    </div>
  );
}
