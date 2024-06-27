import MealItem from "./MealItem";

export default function MealList({ meals }) {
  return (
    <ul className="category-list">
      {meals.map(meal => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </ul>
  );
}
