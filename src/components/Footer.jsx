import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <h2>Legendary Trends</h2>

      <p className="footer-desc">
        Your source for gaming news,
        movie updates, celebrity stories,
        football headlines and trending entertainment.
      </p>

      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
      </div>

      <p className="copyright">
        © 2026 Legendary Trends.
        All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;