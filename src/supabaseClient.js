import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ypkoxzjycltwzhfsmnrv.supabase.co"; // Replace with your actual Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwa294emp5Y2x0d3poZnNtbnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3OTQ5MjMsImV4cCI6MjA1NjM3MDkyM30.HKZha-A6k_Ix5_GfTM-kLlbRKC_o3p8pX3Y6JKwWnz0"; // Replace with your actual anon key

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
