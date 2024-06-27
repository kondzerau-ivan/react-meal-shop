import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getFilteredCategories } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

export default function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategories(name).then(data => setMeals(data.meals));
  }, [name]);

  return (
    <>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
