import React, { useEffect, useState } from "react";
import { getRecipeByName } from "../api";

function Home() {
  const [recipe, setRecipe] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipeByName(query).then((data) => setRecipe(data));
  }, [query]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <input
        placeholder="요리를 입력하세요"
        value={query}
        style={{
          width: "300px",
          height: "30px",
          alignSelf: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {recipe &&
          recipe.map((meal, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "50px",
              }}
            >
              <h1>{meal.strMeal}</h1>
              <div style={{ display: "flex" }}>
                <img src={meal.strMealThumb} alt={recipe.strMeal} width="300" />
                <p style={{ alignSelf: "center" }}>{meal.strInstructions}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
