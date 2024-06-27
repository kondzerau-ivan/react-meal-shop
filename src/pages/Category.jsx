import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getFilteredCategories } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

export default function Category() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const {goBack} = useHistory();

  useEffect(() => {
    getFilteredCategories(category).then(data => setMeals(data.meals));
  }, [category]);

  return (
    <>
      <button className="btn btn-goback grey darken-4" onClick={goBack}>Go Back</button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
