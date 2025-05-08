import React from "react";

function RecipeInput(props) {
  return (
    <input
      placeholder="요리를 입력하세요"
      value={props.query}
      style={{
        width: "300px",
        height: "30px",
        alignSelf: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
      onChange={(e) => props.setQuery(e.target.value)}
    />
  );
}

export default RecipeInput;
