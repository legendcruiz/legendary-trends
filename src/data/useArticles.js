import { useEffect, useState } from "react";

const categoryMap = {
  general: "general",
  technology: "technology",
  sports: "sports",
  entertainment: "entertainment",
};

export default function useArticles(category = "general") {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const API_KEY =
          import.meta.env.VITE_CURRENTS_API_KEY;

        const apiCategory =
          categoryMap[category] || "general";

        const res = await fetch(
          `https://api.currentsapi.services/v1/latest-news?language=en&category=${apiCategory}&page_size=30&apiKey=${API_KEY}`
        );

        const data = await res.json();

        if (
          data.status !== "ok" ||
          !Array.isArray(data.news)
        ) {
          console.log(data);
          setArticles([]);
          return;
        }

        setArticles(
          data.news.map((item, index) => ({
            id: item.id || index,

            title:
              item.title || "No title",

            image:
              item.image ||
              "https://images.unsplash.com/photo-1504711434969-e33886168f5c",

            excerpt:
              item.description ||
              "No description available.",

            content:
              item.description ||
              "No content available.",

            url:
              item.url || "#",

            author:
              item.author ||
              "Legendary Trends",

            source:
              "Currents",

            publishedAt:
              item.published || "",
          }))
        );
      } catch (err) {
        console.error(err);
        setArticles([]);
      }
    }

    fetchNews();
  }, [category]);

  return articles;
}