import { Link } from "react-router-dom";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Sidebar() {
  const articles = useSupabaseArticles() || [];

  // Latest articles (newest first)
  const latestArticles = [...articles]
    .slice(0, 5);

  // Most viewed (temporary fallback = latest for now)
  const mostViewed = [...articles]
    .slice(0, 5);

  // Category filters
  const footballArticles = articles
    .filter(
      (a) =>
        a.category?.toLowerCase() === "football"
    )
    .slice(0, 5);

  const gamingArticles = articles
    .filter(
      (a) =>
        a.category?.toLowerCase() === "gaming"
    )
    .slice(0, 5);

  return (
    <aside className="sidebar">

      {/* Latest Articles */}
      <div className="sidebar-card">
        <h3>📰 Latest Articles</h3>

        <ul>
          {latestArticles.length > 0 ? (
            latestArticles.map((article) => (
              <li key={article.id}>
                <Link
                  to={`/article/${article.id}`}
                  state={{ article }}
                >
                  {article.title}
                </Link>
              </li>
            ))
          ) : (
            <li>No articles yet.</li>
          )}
        </ul>
      </div>

      {/* Most Viewed */}
      <div className="sidebar-card">
        <h3>🔥 Most Viewed Articles</h3>

        <ul>
          {mostViewed.length > 0 ? (
            mostViewed.map((article) => (
              <li key={`view-${article.id}`}>
                <Link
                  to={`/article/${article.id}`}
                  state={{ article }}
                >
                  {article.title}
                </Link>
              </li>
            ))
          ) : (
            <li>No articles yet.</li>
          )}
        </ul>
      </div>

      {/* Football */}
      <div className="sidebar-card">
        <h3>⚽ Latest Football News</h3>

        <ul>
          {footballArticles.length > 0 ? (
            footballArticles.map((article) => (
              <li key={`football-${article.id}`}>
                <Link
                  to={`/article/${article.id}`}
                  state={{ article }}
                >
                  {article.title}
                </Link>
              </li>
            ))
          ) : (
            <li>No football news.</li>
          )}
        </ul>
      </div>

      {/* Gaming */}
      <div className="sidebar-card">
        <h3>🎮 Latest Gaming News</h3>

        <ul>
          {gamingArticles.length > 0 ? (
            gamingArticles.map((article) => (
              <li key={`gaming-${article.id}`}>
                <Link
                  to={`/article/${article.id}`}
                  state={{ article }}
                >
                  {article.title}
                </Link>
              </li>
            ))
          ) : (
            <li>No gaming news.</li>
          )}
        </ul>
      </div>

      {/* AdSense Placeholder (KEEP AS YOU WANTED) */}
      <div className="sidebar-card">
        <h3>Advertisement</h3>
        <p>
          Google AdSense Ads will appear here.
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;