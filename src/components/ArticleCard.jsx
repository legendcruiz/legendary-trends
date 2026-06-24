import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className="card">
      <img src={article.image} alt={article.title} />

      <div className="card-content">
        <h3>{article.title}</h3>

        <p>{article.excerpt}</p>

        <Link
          to={`/article/${article.id}`}
          state={{ article }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;