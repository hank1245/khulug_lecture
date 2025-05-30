import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  return (
    <Link
      to={`/recipe/${props.meal.idMeal}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        backgroundColor: "#3a3f47",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
      }}
    >
      <img
        src={props.meal.strMealThumb}
        alt={props.meal.strMeal}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ marginBottom: "10px", fontSize: "1.25rem" }}>
          {props.meal.strMeal}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#ccc",
            maxHeight: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.meal.strInstructions
            ? props.meal.strInstructions.substring(0, 100) + "..."
            : "No instructions available."}
        </p>
      </div>
    </Link>
  );
}

export default RecipeCard;
