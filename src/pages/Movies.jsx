import ArticleCard from "../components/ArticleCard";
import useArticles from "../data/useArticles";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Movies() {
  const newsApiArticles =
    useArticles("entertainment") || [];

  const supabaseArticles =
    useSupabaseArticles() || [];

  const movieArticles = [
    ...supabaseArticles.filter(
      (article) =>
        article.category === "movies"
    ),
    ...newsApiArticles,
  ];

  return (
    <div className="container">
      <h1 className="section-title">
        🎬 Movies
      </h1>

      <div className="article-grid">
        {movieArticles.map(
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

export default Movies;