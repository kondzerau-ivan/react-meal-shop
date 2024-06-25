export default function Header() {
  return (
    <header>
      <nav className="grey darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              React Meal Shop
            </a>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
