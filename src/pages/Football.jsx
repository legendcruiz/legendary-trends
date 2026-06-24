import useArticles from "../data/useArticles";
import ArticleCard from "../components/ArticleCard";

function Football() {
  const articles = useArticles("sports");

  if (!articles) {
    return (
      <div className="container">
        <h1>Loading Football News...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="section-title">
        ⚽ Football News
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

export default Football;