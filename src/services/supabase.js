import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

const supabaseUrl = "https://zjbhbrxqschzlotbjtek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqYmhicnhxc2NoemxvdGJqdGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMjI3OTksImV4cCI6MjAzNDg5ODc5OX0.tNEMZ8pbSQgiJt8kbP3JH40G34c41hn6DyYqDkdvMdk";
// const SUPABASE_URL = "https://zjbhbrxqschzlotbjtek.supabase.co";

export const supabase = createClient(
  // process.env.SUPABASE_URL,
  // process.env.SUPABASE_KEY

  supabaseUrl,
  supabaseKey
);
