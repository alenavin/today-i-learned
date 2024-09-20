import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qqhcmquaghrptpwzpeea.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaGNtcXVhZ2hycHRwd3pwZWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0OTcwNjksImV4cCI6MjA0MjA3MzA2OX0.Rguw9Ch5zQklyl5Ug23cruCWavsrv2QV58vM9w36hQw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
