import useArticles from "../data/useArticles";
import ArticleCard from "../components/ArticleCard";

function Gaming() {
  const articles = useArticles("technology");

  if (!articles) {
    return (
      <div className="container">
        <h1>Loading Gaming News...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="section-title">
        🎮 Gaming News
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

export default Gaming;