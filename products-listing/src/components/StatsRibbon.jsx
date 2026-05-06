/**
 * StatsRibbon — a compact row of key stats (total items, current page,
 * categories, average rating) rendered with clean text cards.
 */
export default function StatsRibbon({ page, totalPages, totalItems, products }) {
  const categories = [...new Set(products.map((p) => p.category))];
  const avgRating =
    products.length > 0
      ? (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)
      : "—";

  const stats = [
    { label: "Products", value: totalItems, color: "violet" },
    { label: "Page", value: `${page}/${totalPages}`, color: "fuchsia" },
    { label: "Categories", value: categories.length, color: "amber" },
    { label: "Rating", value: avgRating, color: "emerald" },
  ];

  const colorMap = {
    violet: { bg: "bg-violet-50", text: "text-violet-600" },
    fuchsia: { bg: "bg-fuchsia-50", text: "text-fuchsia-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  };

  return (
    <section id="stats-ribbon" className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => {
        const c = colorMap[s.color];
        return (
          <div
            key={s.label}
            className={`${c.bg} rounded-2xl p-5 border border-white/60 shadow-sm flex flex-col gap-1`}
          >
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">
              {s.label}
            </p>
            <p className={`text-xl font-black ${c.text} leading-none`}>
              {s.value}
            </p>
          </div>
        );
      })}
    </section>
  );
}
