export default function StatsRibbon({ totalItems, totalPages, currentItems }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/60 backdrop-blur-sm rounded-full py-3 sm:py-4 px-6 sm:px-10 shadow-sm border border-white mx-auto w-fit mb-8">
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-800 text-lg">{totalItems}</span>
        <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider hidden sm:inline">
          Total Jokes
        </span>
      </div>

      <div className="w-px h-6 bg-gray-300/60"></div>

      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-800 text-lg">{totalPages}</span>
        <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider hidden sm:inline">
          Pages
        </span>
      </div>

      <div className="w-px h-6 bg-gray-300/60"></div>

      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-800 text-lg">{currentItems}</span>
        <span className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider hidden sm:inline">
          On Page
        </span>
      </div>
    </div>
  );
}
