/** Backend API base URL — set VITE_API_URL on Vercel (e.g. https://your-api.onrender.com). */
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/** Must match Render SUPABASE_URL — login and data both use this Supabase project. */
export const SUPABASE_HOST = (() => {
  try {
    return new URL(import.meta.env.VITE_SUPABASE_URL || '').hostname;
  } catch {
    return '';
  }
})();
