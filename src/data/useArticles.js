import { useEffect, useState } from "react";

export default function useArticles(category = "general") {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=30&apiKey=${API_KEY}`
        );

        const data = await res.json();

        if (!Array.isArray(data?.articles)) {
          setArticles([]);
          return;
        }

        setArticles(
          data.articles.map((item, index) => ({
            id: index,

            title: item.title || "No title",

            image:
              item.urlToImage ||
              "https://images.unsplash.com/photo-1504711434969-e33886168f5c",

            excerpt:
              item.description ||
              "No description available.",

            content:
              item.content ||
              item.description ||
              "No content available.",

            url: item.url || "#",

            author:
              item.author ||
              "Legendary Trends",

            source:
              item.source?.name ||
              "Unknown Source",

            publishedAt:
              item.publishedAt || "",
          }))
        );
      } catch (err) {
        console.log(err);
        setArticles([]);
      }
    }

    fetchNews();
  }, [category]);

  return articles;
}