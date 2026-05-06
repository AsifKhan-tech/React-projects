import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchInput);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-yt-bg flex items-center justify-between px-4 z-50">
      {/* Left section: Logo */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-yt-hover rounded-full transition-colors">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
        </button>
        <div 
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => {
            setSearchInput("");
            onSearch("");
          }}
        >
          <div className="bg-red-600 p-0.5 rounded-lg">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M10 15l5.19-3L10 9v6z"></path></svg>
          </div>
          <span className="text-xl font-bold tracking-tighter">NovaTube</span>
        </div>
      </div>

      {/* Center section: Search */}
      <div className="flex-grow max-w-[600px] flex items-center gap-4 mx-4">
        <form onSubmit={handleSubmit} className="flex-grow flex items-center">
          <div className="flex-grow flex items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-2 focus-within:border-blue-500">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-transparent w-full outline-none text-white placeholder-[#888888]"
            />
          </div>
          <button 
            type="submit"
            className="bg-yt-hover border border-l-0 border-[#303030] rounded-r-full px-5 py-2 hover:bg-[#3f3f3f] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
          </button>
        </form>
        <button className="p-2 bg-[#181818] hover:bg-yt-hover rounded-full transition-colors hidden sm:block">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .66-.54 1.2-1.2 1.2-.33 0-.64-.14-.86-.36-.21-.22-.34-.52-.34-.84 0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2c.32 0 .62-.13.84-.34.22-.22.36-.53.36-.86 0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6z"></path></svg>
        </button>
      </div>

      {/* Right section: User Icons */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-yt-hover rounded-full transition-colors hidden md:block">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-9h4v11H1v-15h16v3z"></path></svg>
        </button>
        <button className="p-2 hover:bg-yt-hover rounded-full transition-colors hidden md:block">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.34c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.34c2.44.76 4 3.06 4 5.98v5.15l2 1.88z"></path></svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold text-sm ml-2 cursor-pointer">
          B
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
