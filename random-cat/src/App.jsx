import { useState, useEffect } from "react";
import CatImage from "./components/CatImage";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorState from "./components/ErrorState";
import CatDetails from "./components/CatDetails";
import "./App.css";

function App() {
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCat = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cat data");
      }
      const json = await response.json();
      if (json.success && json.data) {
        setCatData(json.data);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
      <div className="mesh-bg"></div>

      <div className="w-full max-w-6xl relative">
        {/* Main Action Bar */}
        <div className="absolute -top-12 right-6 flex items-center gap-4 z-20">
          <button
            onClick={fetchCat}
            className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 group border border-zinc-100"
          >
            <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center text-white group-hover:rotate-180 transition-transform duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-700">
              Next Feline
            </span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row overflow-visible border border-zinc-100 relative">
          {/* Image Section: Floating & Compact */}
          <div className="lg:w-[35%] relative min-h-[400px] lg:min-h-0">
            <div className="absolute inset-0 lg:-left-12 lg:-top-8 lg:-bottom-8 lg:right-6 z-10 p-4 lg:p-0">
              <CatImage
                loading={loading}
                error={error}
                image={catData?.image}
                name={catData?.name}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1 p-8 md:p-16 lg:pl-12">
            {loading ? (
              <LoadingSkeleton />
            ) : error ? (
              <div className="h-full flex items-center justify-center">
                <ErrorState error={error} onRetry={fetchCat} />
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <CatDetails catData={catData} />

                <div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-8">
                  {catData?.wikipedia_url && (
                    <a
                      href={catData.wikipedia_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-indigo-600 font-bold"
                    >
                      <span className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </span>
                      <span className="text-sm underline-offset-4 group-hover:underline tracking-tight">
                        Explore History
                      </span>
                    </a>
                  )}

                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                    Breed ID: {catData?.id || "00"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
