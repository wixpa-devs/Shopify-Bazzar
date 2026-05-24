const DEFAULT_LOCAL_BACKEND_URL = "http://localhost:4000";

function normalizeBackendUrl(raw) {
  const trimmed = raw?.trim();
  if (!trimmed) return import.meta.env.DEV ? DEFAULT_LOCAL_BACKEND_URL : "";

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed.replace(/\/$/, "");
  }

  const protocol =
    trimmed.startsWith("localhost") || trimmed.startsWith("127.0.0.1")
      ? "http"
      : "https";

  return `${protocol}://${trimmed}`.replace(/\/$/, "");
}

/**
 * VITE_BACKEND_URL points the frontend at the Express API.
 * Local default: http://localhost:4000
 */
export function apiUrl(path) {
  const base = normalizeBackendUrl(import.meta.env.VITE_BACKEND_URL);
  if (!base) {
    throw new Error(
      "VITE_BACKEND_URL is required in production. Set it in frontend/.env or your hosting env.",
    );
  }

  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
