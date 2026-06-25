import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function useSupabaseArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setArticles(data || []);
      }
    }

    fetchArticles();
  }, []);

  return articles;
}

export default useSupabaseArticles;