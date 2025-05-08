import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (search) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals(query);
  }, [query]);

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      <div className="meals-container">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strMeal}</h2>
            </div>
          ))
        ) : (
          <p>No meals found. Try another search!</p>
        )}
      </div>
    </div>
  );
}

export default App;
