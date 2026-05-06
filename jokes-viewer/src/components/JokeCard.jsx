export default function JokeCard({ joke, onCopy }) {
  return (
    <div className="bg-white rounded-[28px] p-8 shadow-sm hover:shadow-lg transition-all flex flex-col border border-white group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-orange-100 rounded-bl-[100px] -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <span className="bg-gray-800 text-white font-bold text-sm px-4 py-1.5 rounded-xl">
          #{joke.id}
        </span>

        {joke.categories && joke.categories.length > 0 ? (
          <span className="bg-rose-100 text-rose-600 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
            {joke.categories[0]}
          </span>
        ) : (
          <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
            General
          </span>
        )}
      </div>

      <p className="text-gray-700 text-[1.1rem] leading-relaxed font-medium mb-8 flex-grow relative z-10">
        {joke.content}
      </p>

      <button
        onClick={() => onCopy(joke.content)}
        className="w-full bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-3 px-6 rounded-xl transition-colors text-sm tracking-wide relative z-10 flex items-center justify-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Copy Joke
      </button>
    </div>
  );
}
