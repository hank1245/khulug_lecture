import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export const getRecipeByName = async (name) => {
  const res = await axios.get(`${BASE_URL}?s=${name}`);
  return res.data.meals;
};
