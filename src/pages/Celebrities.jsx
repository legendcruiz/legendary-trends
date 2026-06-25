import ArticleCard from "../components/ArticleCard";
import useArticles from "../data/useArticles";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Celebrities() {
  const newsApiArticles =
    useArticles("entertainment") || [];

  const supabaseArticles =
    useSupabaseArticles() || [];

  const celebrityArticles = [
    ...supabaseArticles.filter(
      (article) =>
        article.category === "celebrities"
    ),
    ...newsApiArticles,
  ];

  return (
    <div className="container">
      <h1 className="section-title">
        ⭐ Celebrity News
      </h1>

      <div className="article-grid">
        {celebrityArticles.map(
          (article, index) => (
            <ArticleCard
              key={`${article.id}-${index}`}
              article={article}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Celebrities;