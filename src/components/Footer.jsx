export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {currentDate} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/kondzerau-ivan/react-meal-shop" target="_blank" rel="noreferrer">
            REPO
          </a>
        </div>
      </div>
    </footer>
  );
}
