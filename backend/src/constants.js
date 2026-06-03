import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultEnvPath = path.resolve(__dirname, "..", ".env");

dotenv.config({ path: process.env.DOTENV_PATH || defaultEnvPath });

const isProd = process.env.NODE_ENV === "production";
const mongoDbName =
  process.env.MONGODB_DB_NAME || process.env.MONGO_DB_NAME || "shopify-component-library";

const rawClientUrl =
  process.env.CLIENT_URL || "http://localhost:5173";
const rawAllowedOrigins = process.env.ALLOWED_ORIGINS || "";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const IS_PRODUCTION = isProd;
export const PORT = Number(process.env.PORT || 4000);
export const MONGO_URL =
  process.env.MONGO_URL ||
  process.env.MONGODB_URI ||
  `mongodb://127.0.0.1:27017/${mongoDbName}`;
export const MONGODB_DB_NAME = mongoDbName;
export const JWT_ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET ||
  "dev-shopify-component-library-access-secret";
export const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET ||
  "dev-shopify-component-library-refresh-secret";
export const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || "15m";
export const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "7d";
export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
export const CONTACT_RECEIVER_EMAIL =
  process.env.CONTACT_RECEIVER_EMAIL || EMAIL_USER || "";
export const CLIENT_URL = rawClientUrl.split(",")[0].trim() || "http://localhost:5173";
export const ALLOWED_ORIGINS = [
  ...rawClientUrl.split(","),
  ...rawAllowedOrigins.split(","),
]
  .map((origin) => origin.trim())
  .filter(Boolean);
export const ALLOW_VERCEL_APP_ORIGINS =
  process.env.ALLOW_VERCEL_APP_ORIGINS === "true";
export const DEBUG_API = process.env.DEBUG_API === "true";
export const COOKIE_NAME = process.env.COOKIE_NAME || "clbl_access_session";
export const REFRESH_COOKIE_NAME =
  process.env.REFRESH_COOKIE_NAME || "clbl_refresh_token";
export const SESSION_TTL_DAYS = Number(process.env.SESSION_TTL_DAYS || 30);
export const COOKIE_SAME_SITE = process.env.COOKIE_SAMESITE || (isProd ? "none" : "lax");
export const COOKIE_SECURE =
  COOKIE_SAME_SITE === "none" || process.env.COOKIE_SECURE === "true";
export const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN || "";
export const MAX_FREE_COPIES = 3;

export function isOriginAllowed(origin) {
  if (!origin) return true;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (!ALLOW_VERCEL_APP_ORIGINS) return false;

  try {
    const url = new URL(origin);
    return url.protocol === "https:" && url.hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
}
