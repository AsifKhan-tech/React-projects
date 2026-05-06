export default function CatImage({ loading, error, image, name }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[320px] lg:max-w-none lg:h-full bg-zinc-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden relative group border-4 border-white/10">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 animate-pulse">
            <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800 p-6 text-center">
            <span className="text-5xl mb-4">😿</span>
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-[9px]">
              Image Unavailable
            </span>
          </div>
        ) : (
          <>
            <img
              src={image || "https://via.placeholder.com/600x800?text=No+Image"}
              alt={name || "Random Cat"}
              className="object-cover w-full h-full transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </>
        )}

        {/* Subtle glass effect on top */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
