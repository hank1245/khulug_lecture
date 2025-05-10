import React, { useEffect, useState } from "react";
import { getRecipeByName } from "../api/recipeAPI";
import RecipeInput from "../components/RecipeInput";
import RecipeCard from "../components/RecipeCard";
import useRecipeStore from "../store/useRecipeStore";

function Home() {
  const [query, setQuery] = useState("");
  const { recipes, setRecipes } = useRecipeStore();
  useEffect(() => {
    getRecipeByName(query).then((data) => setRecipes(data));
  }, [query, setRecipes]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "2.5rem" }}>
        Recipe Finder
      </h1>
      <RecipeInput query={query} setQuery={setQuery} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          width: "100%",
          marginTop: "30px",
        }}
      >
        {recipes && recipes.length > 0 ? (
          recipes.map((meal) => <RecipeCard meal={meal} key={meal.idMeal} />)
        ) : (
          <p
            style={{ textAlign: "center", width: "100%", gridColumn: "1 / -1" }}
          >
            {query
              ? "No recipes found. Try a different search!"
              : "Type a dish name to search for recipes!"}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
