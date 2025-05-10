import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../api/recipeAPI";

function RecipeDetailPage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (recipeId) {
      setLoading(true);
      getRecipeById(recipeId)
        .then((data) => {
          setRecipe(data);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [recipeId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "1.2rem" }}>Loading recipe details...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "1.2rem" }}>Recipe not found.</p>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#3a3f47",
        borderRadius: "10px",
        maxWidth: "900px",
        margin: "30px auto",
        boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "2.8rem",
          color: "#61dafb",
        }}
      >
        {recipe.strMeal}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
        <div style={{ width: "100%" }}>
          {recipe.strCategory && (
            <p style={{ marginBottom: "10px", fontSize: "1.1rem" }}>
              <strong>Category:</strong> {recipe.strCategory}
            </p>
          )}
          {recipe.strArea && (
            <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
              <strong>Area:</strong> {recipe.strArea}
            </p>
          )}

          {ingredients.length > 0 && (
            <div style={{ marginBottom: "25px" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "15px",
                  borderBottom: "2px solid #61dafb",
                  paddingBottom: "5px",
                }}
              >
                Ingredients
              </h2>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: "8px", fontSize: "1rem" }}
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "15px",
              borderBottom: "2px solid #61dafb",
              paddingBottom: "5px",
            }}
          >
            Instructions
          </h2>
          <p
            style={{
              whiteSpace: "pre-wrap",
              fontSize: "1rem",
              lineHeight: "1.8",
            }}
          >
            {recipe.strInstructions}
          </p>

          {recipe.strYoutube && (
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <h3 style={{ marginBottom: "15px" }}>Watch Video</h3>
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#c4302b",
                  color: "white",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                View on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
