import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="grey darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              React Meal Shop
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
