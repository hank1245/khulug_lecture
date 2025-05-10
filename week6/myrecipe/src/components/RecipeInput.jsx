import React from "react";

function RecipeInput(props) {
  return (
    <input
      type="text" // Explicitly set type
      placeholder="Search for a recipe (e.g., Arrabiata)"
      value={props.query}
      style={{
        width: "100%", // Make it responsive
        maxWidth: "500px", // Max width for larger screens
        padding: "15px 20px", // More padding
        fontSize: "1rem", // Readable font size
        borderRadius: "25px", // Rounded corners
        border: "1px solid #555", // Subtle border
        backgroundColor: "#3a3f47", // Darker input background
        color: "#fff", // White text
        outline: "none", // Remove default outline
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)", // Subtle shadow
        marginBottom: "20px",
      }}
      onChange={(e) => props.setQuery(e.target.value)}
    />
  );
}

export default RecipeInput;
