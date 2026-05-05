import { useEffect, useState } from "react";
import "./styles/card.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.freeapi.app/api/v1/public/meals")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data.data.data);

        setMeals(data.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="logo">
            🍳 <h1>Meal Hub</h1>
          </div>
          <p className="tagline">
            Discover delicious recipes from around the world
          </p>
        </div>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </header>

      <main className="container">
        {meals.map((meal) => (
          <article key={meal.idMeal} className="card">
            <div className="image-wrapper">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <span className="badge">{meal.strCategory}</span>
            </div>

            <div className="content">
              <p className="origin">📍 {meal.strArea}</p>
              <h2>{meal.strMeal}</h2>
              <p className="desc">{meal.strInstructions.slice(0, 100)}...</p>

              <div className="footer">
                <span className="ingredients">🥘 {meal.strIngredient1}</span>

                <button
                  className="recipe-link"
                  onClick={() => setSelectedMeal(meal)}
                >
                  Recipe →
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/*  MODAL */}
      {selectedMeal && (
        <div className="modal-overlay" onClick={() => setSelectedMeal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedMeal.strMeal}</h2>
              <button onClick={() => setSelectedMeal(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedMeal.strMealThumb}
                  alt={selectedMeal.strMeal}
                />
              </div>

              <div className="modal-content">
                <div className="tags">
                  <span>{selectedMeal.strCategory}</span>
                  <span>{selectedMeal.strArea}</span>
                </div>

                <h3>Instructions</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
