import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  const description = strCategoryDescription.split(".")[0] + ".";
  return (
    <li className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory + " photo."} />
      </div>
      <div className="card-content">
        <h2>
          <span className="card-title">{strCategory}</span>
        </h2>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn grey darken-4">
          Go
        </Link>
      </div>
    </li>
  );
}
