import fs from "fs";
import { createClient } from "@supabase/supabase-js";

// 🔥 USE YOUR ENV VALUES DIRECTLY
const SUPABASE_URL =
  "https://nltlyrootwmtyywendrh.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdGx5cm9vdHdtdHl5d2VuZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMDk1NDQsImV4cCI6MjA5Nzg4NTU0NH0.KfP2VNuLh1eDOEXpMFUlkTtd3untOWgzBEtmwWbRQsM";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const BASE_URL =
  "https://legendary-trends.vercel.app";

async function generateSitemap() {
  console.log("🚀 Generating sitemap...");

  // ✅ STATIC PAGES
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

  // ✅ FETCH ARTICLES FROM SUPABASE
  const { data: articles, error } =
    await supabase
      .from("articles")
      .select("id");

  if (error) {
    console.error(
      "❌ Supabase error:",
      error.message
    );
    return;
  }

  console.log(
    `📄 Found ${articles?.length || 0} articles`
  );

  // ✅ CREATE ARTICLE URLS
  const articlePages =
    articles?.map(
      (a) => `/article/${a.id}`
    ) || [];

  // ✅ COMBINE ALL URLS
  const allPages = [
    ...staticPages,
    ...articlePages,
  ];

  // ✅ GENERATE XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((path) => {
    return `
  <url>
    <loc>${BASE_URL}${path}</loc>
  </url>`;
  })
  .join("")}
</urlset>`;

  // ✅ SAVE FILE
  fs.writeFileSync(
    "public/sitemap.xml",
    sitemap
  );

  console.log(
    "✅ Sitemap generated successfully!"
  );
}

generateSitemap();