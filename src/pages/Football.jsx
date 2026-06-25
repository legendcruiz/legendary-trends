import ArticleCard from "../components/ArticleCard";
import useArticles from "../data/useArticles";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Football() {
  const newsApiArticles =
    useArticles("sports") || [];

  const supabaseArticles =
    useSupabaseArticles() || [];

  const footballArticles = [
    ...supabaseArticles.filter(
      (article) =>
        article.category === "football"
    ),
    ...newsApiArticles,
  ];

  return (
    <div className="container">
      <h1 className="section-title">
        ⚽ Football News
      </h1>

      <div className="article-grid">
        {footballArticles.map(
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

export default Football;