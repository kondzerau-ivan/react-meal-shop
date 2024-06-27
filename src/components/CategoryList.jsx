import CategoryItem from "./CategoryItem";

export default function CategoryList({ catalog = [] }) {
  return (
    <ul className="category-list">
      {catalog.map(category => <CategoryItem key={category.idCategory} {...category} />)}
    </ul>
  );
}
