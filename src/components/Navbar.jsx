import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Legendary Trends
      </Link>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/">Home</Link>
        <Link to="/gaming">Gaming</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/celebrities">Celebrities</Link>
        <Link to="/football">Football</Link>

        {/* ✅ ADD THIS */}
        <Link to="/technology">Technology</Link>

      </div>

    </nav>
  );
}

export default Navbar;