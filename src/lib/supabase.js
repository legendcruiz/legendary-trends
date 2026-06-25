import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://nltlyrootwmtyywendrh.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sdGx5cm9vdHdtdHl5d2VuZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMDk1NDQsImV4cCI6MjA5Nzg4NTU0NH0.KfP2VNuLh1eDOEXpMFUlkTtd3untOWgzBEtmwWbRQsM";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );