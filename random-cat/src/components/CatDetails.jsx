const StatBar = ({ label, value }) => {
  return (
    <div className="group cursor-default">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-indigo-500 transition-colors">
          {label}
        </span>
        <span className="text-xs font-bold text-zinc-300">{value}/5</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full transition-all duration-500 ${i <= value ? "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]" : "bg-zinc-100"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function CatDetails({ catData }) {
  if (!catData) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-indigo-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
          <span className="w-8 h-[1px] bg-indigo-500"></span>
          <span>Featured Breed</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-heading tracking-tighter mb-6 text-zinc-900 leading-[0.85] italic">
          {catData.name || "Mysterious Feline"}
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 bg-zinc-900 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-xl shadow-zinc-900/20">
            {catData.origin || "Unknown"}
          </span>
          <span className="px-4 py-1.5 bg-white border border-zinc-200 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest shadow-sm">
            {catData.life_span ? `${catData.life_span} Yrs` : "Unknown"}
          </span>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-zinc-500 leading-relaxed text-lg font-medium opacity-80">
          {catData.description ||
            "No description available for this beautiful creature."}
        </p>
      </div>

      {/* Temperament Section */}
      <div className="mb-12">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 mb-4">
          Personality Traits
        </div>
        <div className="flex flex-wrap gap-2">
          {catData.temperament
            ? catData.temperament.split(", ").map((temp) => (
                <span
                  key={temp}
                  className="px-4 py-2 bg-zinc-50 rounded-xl text-xs font-bold text-zinc-600 hover:bg-white hover:shadow-lg hover:text-indigo-600 transition-all cursor-default border border-transparent hover:border-zinc-100"
                >
                  {temp}
                </span>
              ))
            : null}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-auto grid grid-cols-2 gap-x-8 gap-y-6">
        <StatBar label="Shedding" value={catData.shedding_level || 1} />
        <StatBar label="Social Needs" value={catData.social_needs || 3} />
        <StatBar
          label="Stranger Friendly"
          value={catData.stranger_friendly || 3}
        />
        <StatBar label="Affection" value={catData.affection_level || 5} />
      </div>
    </div>
  );
}
