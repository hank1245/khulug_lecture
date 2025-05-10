import axios from "axios";

const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php";
const LOOKUP_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php";

export const getRecipeByName = async (name) => {
  const res = await axios.get(`${SEARCH_URL}?s=${name}`);
  return res.data.meals;
};

export const getRecipeById = async (id) => {
  const res = await axios.get(`${LOOKUP_URL}?i=${id}`);
  return res.data.meals ? res.data.meals[0] : null;
};
