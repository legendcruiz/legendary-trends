import { Link, useLocation, useParams } from "react-router-dom";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Article() {
  const { id } = useParams();
  const location = useLocation();

  const articles = useSupabaseArticles() || [];

  // If user clicked from your site, use router state first
  let article = location.state?.article;

  // If no router state, find article by ID
  if (!article) {
    article = articles.find(
      (a) => String(a.id) === String(id)
    );
  }

  if (!article) {
    return (
      <div className="container article-page">
        <h1>Article Not Found</h1>

        <p>
          The article you're looking for may have been removed or doesn't exist.
        </p>

        <Link to="/" className="back-btn">
          ← Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container article-page">
      <h1>{article.title}</h1>

      <img
        src={article.image}
        alt={article.title}
        className="article-image"
      />

      <p className="article-excerpt">
        {article.excerpt}
      </p>

      <div className="article-content">
        <p>{article.content}</p>

        <h2>Why This Matters</h2>

        <p>
          This development has attracted significant attention from fans and
          industry observers. The story continues to evolve as more information
          becomes available.
        </p>

        <p>
          Analysts believe the topic could have a major impact on the gaming,
          movie, entertainment, technology, or sports landscape depending on
          future announcements.
        </p>

        <h2>Community Reaction</h2>

        <p>
          Social media users have been actively discussing the news, sharing
          opinions, predictions, and reactions across multiple platforms.
        </p>

        <p>
          As additional details emerge, audiences will be watching closely to
          see how the situation develops.
        </p>

        <h2>What's Next?</h2>

        <p>
          More updates are expected in the coming days. Legendary Trends will
          continue monitoring the story and provide coverage of any major
          developments.
        </p>
      </div>

      <Link to="/" className="back-btn">
        ← Back Home
      </Link>
    </div>
  );
}

export default Article;