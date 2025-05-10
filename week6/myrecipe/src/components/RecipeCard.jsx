import React from "react";

function RecipeCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <h1>{props.meal.strMeal}</h1>
      <div style={{ display: "flex" }}>
        <img
          src={props.meal.strMealThumb}
          alt={props.meal.strMeal}
          width="300"
        />
        <p style={{ alignSelf: "center" }}>{props.meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
