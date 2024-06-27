import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MealItem({ strMeal, strMealThumb, idMeal }) {
  return (
    <li className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal + " photo."} />
      </div>
      <div className="card-content">
        <h2>
          <span className="card-title">{strMeal}</span>
        </h2>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn grey darken-4">
          Details
        </Link>
      </div>
    </li>
  );
}
