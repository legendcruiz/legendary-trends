import useSupabaseArticles from "../data/useSupabaseArticles";

export default function generateSitemap() {
  const baseUrl = "https://legendary-trends.vercel.app";

  // static pages
  const staticPages = [
    "",
    "/gaming",
    "/movies",
    "/football",
    "/celebrities",
    "/technology",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const articlePages =
    useSupabaseArticles?.()?.map(
      (article) => `/article/${article.id}`
    ) || [];

  const allPages = [...staticPages, ...articlePages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
  </url>
`
  )
  .join("")}
</urlset>`;
}