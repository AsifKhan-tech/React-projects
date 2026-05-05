import { useEffect, useState } from "react";

import "./styles/card.css";

function App() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // This sets <html data-theme="dark"> or <html data-theme="light">
    document.documentElement.setAttribute("data-theme", theme); // select the HTML tag
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    async function getUserData() {
      const url = "https://api.freeapi.app/api/v1/public/randomusers";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const response = await fetch(url, options);
        const fetchData = await response.json();

        if (!response.ok) {
          throw new Error("API failed");
        }
        console.log("Recieved Data:", fetchData.data.data);

        setApiData(fetchData.data.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getUserData();
  }, []);

  if (isLoading) return "user is loading...";
  if (isError) return "Network error. Check your connection";

  return (
    <>
      <div className="header">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
      <div className="user-container">
        {apiData.map((user) => (
          <div key={user?.login?.uuid} className="user-card">
            <img
              src={user?.picture?.large}
              alt={user?.name?.first}
              className="user-avatar"
            />

            <h3 className="user-name">
              {user?.name?.first} {user?.name?.last}
            </h3>

            <span className="user-gender-tag">{user?.gender}</span>

            <div className="user-details">
              <div className="detail-item">
                <span>📧</span>
                <span>{user?.email}</span>
              </div>

              <div className="detail-item">
                <span>📞</span>
                <span>{user?.phone}</span>
              </div>

              <div className="detail-item">
                <span>📍</span>
                <span>
                  {user?.location?.city}, {user?.location?.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
