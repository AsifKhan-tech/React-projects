import { useState, useEffect } from "react";
import "./App.css";
import { useJokes } from "./hooks/useJokes.js";
import Header from "./components/Header.jsx";
import ActionBar from "./components/ActionBar.jsx";
import StatsRibbon from "./components/StatsRibbon.jsx";
import JokeCard from "./components/JokeCard.jsx";
import Pagination from "./components/Pagination.jsx";

export default function App() {
  const {
    jokes,
    error,
    loading,
    page,
    totalPages,
    totalItems,
    fetchJokes,
    handleNext,
    handlePrev,
  } = useJokes();

  const [toastMessage, setToastMessage] = useState(null);

  // We need an initial fetch if it's not handled perfectly in the hook's mount,
  // but let's just let the App trigger it.
  useEffect(() => {
    fetchJokes(1);
  }, [fetchJokes]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage("Joke Copied! 🎉");
      setTimeout(() => setToastMessage(null), 2000);
    });
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-rose-200 selection:text-rose-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-8 py-3 rounded-full shadow-lg z-50 animate-bounce font-bold">
          {toastMessage}
        </div>
      )}

      <Header />

      <ActionBar onRefresh={() => fetchJokes(1)} />

      <StatsRibbon
        totalItems={totalItems}
        totalPages={totalPages}
        currentItems={jokes.length}
      />

      <main>
        {loading && (
          <div className="flex flex-col justify-center items-center py-20 gap-4">
            <div className="w-16 h-16 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="text-gray-500 font-bold animate-pulse">
              Loading laughs...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-white rounded-3xl p-10 text-center shadow-sm max-w-xl mx-auto border border-red-100">
            <div className="text-red-400 text-5xl mb-4">😵</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Failed to load
            </h2>
            <p className="text-gray-500 mb-6">{error}</p>
            <button
              onClick={() => fetchJokes(page)}
              className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && jokes.length === 0 && (
          <div className="bg-white rounded-3xl p-10 text-center shadow-sm max-w-xl mx-auto">
            <p className="text-gray-500 text-lg">No jokes found here.</p>
          </div>
        )}

        {!loading && !error && jokes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jokes.map((joke) => (
              <JokeCard key={joke.id} joke={joke} onCopy={handleCopy} />
            ))}
          </div>
        )}
      </main>

      <Pagination
        page={page}
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}
