import useArticles from "../data/useArticles";
import ArticleCard from "../components/ArticleCard";

function Movies() {
  const articles = useArticles("entertainment");

  if (!articles) {
    return (
      <div className="container">
        <h1>Loading Movies...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="section-title">
        🎬 Movies
      </h1>

      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;