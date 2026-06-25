import { useState } from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import ArticleCard from "../components/ArticleCard";

import useArticles from "../data/useArticles";
import useSupabaseArticles from "../data/useSupabaseArticles";

function Home() {
  const newsApiArticles =
    useArticles("general") || [];

  const supabaseArticles =
    useSupabaseArticles() || [];

  const articles = [
    ...supabaseArticles,
    ...newsApiArticles,
  ];

  const [search, setSearch] =
    useState("");

  const filtered = articles.filter(
    (article) =>
      article.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  const featured = filtered[0];

  return (
    <>
      <Hero />

      <div className="container">

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search"
        />

        {featured && (
          <div className="featured-article">

            <img
              src={featured.image}
              alt={featured.title}
            />

            <div className="featured-content">
              <span>
                FEATURED STORY
              </span>

              <h2>
                {featured.title}
              </h2>

              <p>
                {featured.excerpt}
              </p>
            </div>

          </div>
        )}

        <div className="main-layout">

          <div>

            <h2 className="section-title">
              Latest Articles
            </h2>

            <div className="article-grid">

              {filtered.map(
                (article) => (
                  <ArticleCard
                    key={
                      article.id
                    }
                    article={
                      article
                    }
                  />
                )
              )}

            </div>

          </div>

          <Sidebar />

        </div>

      </div>
    </>
  );
}

export default Home;