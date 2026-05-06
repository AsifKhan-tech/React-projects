/**
 * ProductCard — renders a single product with thumbnail, price,
 * discount badge, numeric rating, brand pill, and stock indicator.
 * No SVG icons used as per the latest design requirement.
 */
export default function ProductCard({ product }) {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;

  // Calculate discounted price
  const discountedPrice = (price - price * (discountPercentage / 100)).toFixed(2);

  // Stock colour logic
  const stockColor =
    stock > 50
      ? "text-emerald-600 bg-emerald-50 border-emerald-100"
      : stock > 20
        ? "text-amber-600 bg-amber-50 border-amber-100"
        : "text-red-600 bg-red-50 border-red-100";

  return (
    <article
      id={`product-${product.id}`}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* ── Discount badge ── */}
      {discountPercentage > 0 && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter bg-violet-600 text-white shadow-lg">
          {Math.round(discountPercentage)}% OFF
        </span>
      )}

      {/* ── Thumbnail ── */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        {/* Category + brand */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-black uppercase tracking-widest text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-100/50">
            {category}
          </span>
          {brand && (
            <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
              {brand}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-black text-gray-800 leading-tight line-clamp-2 group-hover:text-violet-700 transition-colors">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-medium">
          {description}
        </p>

        {/* Rating text */}
        <div className="flex items-center gap-1.5 py-1">
          <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
            Rating
          </span>
          <span className="text-sm font-black text-amber-500 px-2 py-0.5 rounded-lg bg-amber-50 border border-amber-100">
            {rating}
          </span>
        </div>

        {/* Spacer to push price to bottom */}
        <div className="flex-1" />

        {/* Price + stock row */}
        <div className="flex items-end justify-between pt-3 border-t border-gray-50">
          <div>
            <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              ${discountedPrice}
            </span>
            {discountPercentage > 0 && (
              <span className="ml-2 text-sm font-bold line-through text-gray-300">
                ${price}
              </span>
            )}
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg border ${stockColor}`}>
            {stock > 0 ? `${stock} Stock` : "Sold Out"}
          </span>
        </div>
      </div>
    </article>
  );
}
