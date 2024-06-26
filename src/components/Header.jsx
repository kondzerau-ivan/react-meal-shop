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
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
