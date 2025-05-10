import React, { useEffect, useState } from "react";
import { getRecipeByName } from "../api";
import RecipeInput from "../components/RecipeInput";
import RecipeCard from "../components/RecipeCard";

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
      <RecipeInput query={query} setQuery={setQuery} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {recipe &&
          recipe.map((meal, idx) => <RecipeCard meal={meal} key={idx} />)}
      </div>
    </div>
  );
}

export default Home;
