import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  const data = await response.json();
  return data;
}

const getAllCategories = async () => {
  const response = await fetch(`${API_URL}categories.php`);
  const data = await response.json();
  return data;
}

export { getMealById, getAllCategories };