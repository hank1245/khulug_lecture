import { create } from "zustand";
const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (data) => set({ recipes: data }),
}));
export default useRecipeStore;
