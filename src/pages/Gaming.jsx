import ArticleCard from "../components/ArticleCard";
import useArticles from "../data/useArticles";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Gaming() {
  const newsApiArticles =
    useArticles("technology") || [];

  const supabaseArticles =
    useSupabaseArticles() || [];

  const gamingArticles = [
    ...supabaseArticles.filter(
      (article) => article.category === "gaming"
    ),
    ...newsApiArticles,
  ];

  return (
    <div className="container">
      <h1 className="section-title">
        🎮 Gaming News
      </h1>

      <div className="article-grid">
        {gamingArticles.map((article, index) => (
          <ArticleCard
            key={`${article.id}-${index}`}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}

export default Gaming;