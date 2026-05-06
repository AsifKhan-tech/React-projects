/**
 * Header — top navigation bar with the ShopVista brand logo,
 * a search input, and a cart text indicator.
 */
export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* ── Brand ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent select-none uppercase">
            ShopVista
          </span>
        </div>

        {/* ── Search ── */}
        <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <input
              id="search-input"
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-5 py-2 rounded-full bg-gray-100 text-sm text-gray-700 placeholder-gray-400 outline-none border border-transparent focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-200 transition-all duration-200"
            />
          </div>
        </div>

        {/* ── Cart text ── */}
        <button
          id="cart-button"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gray-100 transition-colors"
          aria-label="Cart"
        >
          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
            Cart
          </span>
          <span className="w-5 h-5 rounded-full bg-violet-600 text-[10px] font-black text-white flex items-center justify-center">
            0
          </span>
        </button>
      </div>

      {/* ── Mobile search ── */}
      <div className="sm:hidden px-4 pb-3">
        <input
          id="search-input-mobile"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-2 rounded-full bg-gray-100 text-sm text-gray-700 placeholder-gray-400 outline-none border border-transparent focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-200 transition-all duration-200"
        />
      </div>
    </header>
  );
}
