import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultEnvPath = path.resolve(__dirname, "..", ".env");

dotenv.config({ path: process.env.DOTENV_PATH || defaultEnvPath });

const isProd = process.env.NODE_ENV === "production";
const defaultLocalOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

function parseFrontendOrigins() {
  const a = process.env.FRONTEND_ORIGIN || "";
  const b = process.env.ALLOWED_ORIGINS || "";
  const fromEnv = [...a.split(","), ...b.split(",")]
    .map((s) => s.trim())
    .filter(Boolean);
  const origins = fromEnv.length > 0 || isProd ? fromEnv : defaultLocalOrigins;
  return [...new Set(origins)];
}

const cookieSameSite = process.env.COOKIE_SAMESITE || (isProd ? "none" : "lax");
const cookieSecure =
  cookieSameSite === "none" || process.env.COOKIE_SECURE === "true";
const mongodbDbName =
  process.env.MONGODB_DB_NAME || "shopify-component-library";

export const config = {
  port: Number(process.env.PORT || 4000),
  mongodbUri:
    process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${mongodbDbName}`,
  mongodbDbName,
  cookieName: process.env.COOKIE_NAME || "clbl_access_session",
  sessionTtlDays: Number(process.env.SESSION_TTL_DAYS || 30),
  frontendOrigins: parseFrontendOrigins(),
  cookieSameSite,
  cookieSecure,
};

/** Used by CORS: explicit list plus optional *.vercel.app when ALLOW_VERCEL_APP_ORIGINS=true */
export function isOriginAllowed(origin) {
  if (!origin) return false;
  if (config.frontendOrigins.includes(origin)) return true;
  if (process.env.ALLOW_VERCEL_APP_ORIGINS === "true") {
    try {
      const u = new URL(origin);
      return u.protocol === "https:" && u.hostname.endsWith(".vercel.app");
    } catch {
      return false;
    }
  }
  return false;
}
