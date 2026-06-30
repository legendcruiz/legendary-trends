import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#2563eb",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p
        style={{
          margin: "20px 0",
          color: "#666",
        }}
      >
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="hero-btn"
        style={{
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        🏠 Return Home
      </Link>
    </div>
  );
}

export default NotFound;