import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import VideoGrid from "./components/VideoGrid.jsx";

const CATEGORIES = [
  "All", "Music", "Mixes", "Gaming", "Live", "Programming", 
  "News", "Podcasts", "Lessons", "Recently uploaded", 
  "Watched", "New to you"
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory("All"); // Reset category when searching
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSearchQuery(""); // Reset search when selecting category
  };

  return (
    <div className="min-h-screen bg-yt-bg text-white">
      <Navbar onSearch={handleSearch} />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow lg:ml-60 pt-14">
          {/* Categories bar */}
          <div className="sticky top-14 bg-yt-bg z-40 px-4 py-3 flex gap-3 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat && !searchQuery
                    ? 'bg-white text-black' 
                    : 'bg-yt-hover hover:bg-[#3f3f3f] text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <VideoGrid query={searchQuery || selectedCategory} />
        </main>
      </div>
    </div>
  );
}

export default App;
