import ArticleCard from "../components/ArticleCard";
import useArticles from "../data/useArticles";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Technology() {
  const newsApiArticles =
    useArticles("technology") || [];

  const supabaseArticles =
    useSupabaseArticles() || [];

  const techArticles = [
    ...supabaseArticles.filter(
      (article) =>
        article.category === "technology"
    ),
    ...newsApiArticles,
  ];

  return (
    <div className="container">
      <h1 className="section-title">
        💻 Technology
      </h1>

      <div className="article-grid">
        {techArticles.map(
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

export default Technology;