import {
  ALLOWED_ORIGINS,
  ALLOW_VERCEL_APP_ORIGINS,
  CLIENT_URL,
  CONTACT_RECEIVER_EMAIL,
  COOKIE_NAME,
  COOKIE_SAME_SITE,
  COOKIE_SECURE,
  DEBUG_API,
  EMAIL_PASSWORD,
  EMAIL_USER,
  IS_PRODUCTION,
  JWT_ACCESS_EXPIRES_IN,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_EXPIRES_IN,
  JWT_REFRESH_SECRET,
  MAX_FREE_COPIES,
  MONGODB_DB_NAME,
  MONGO_URL,
  NODE_ENV,
  PORT,
  REFRESH_COOKIE_NAME,
  SESSION_TTL_DAYS,
  SHOPIFY_STOREFRONT_TOKEN,
} from "./constants.js";

function maskMongoUri(uri) {
  if (!uri) return "(empty)";
  return uri.replace(/\/\/([^:]+):([^@]+)@/, "//$1:***@");
}

function maskSecret(value) {
  if (!value) return "(empty)";
  if (value.length <= 8) return `*** (${value.length} chars)`;

  return `${value.slice(0, 3)}***${value.slice(-3)} (${value.length} chars)`;
}

export function logStartupEnv() {
  console.log("[backend][env] loaded configuration snapshot");
  console.log("[backend][env] NODE_ENV:", NODE_ENV);
  console.log("[backend][env] IS_PRODUCTION:", IS_PRODUCTION);
  console.log("[backend][env] PORT:", PORT);
  console.log("[backend][env] MONGODB_URI/MONGO_URL:", maskMongoUri(MONGO_URL));
  console.log("[backend][env] MONGODB_DB_NAME:", MONGODB_DB_NAME);
  console.log("[backend][env] CLIENT_URL:", CLIENT_URL);
  console.log("[backend][env] ALLOWED_ORIGINS:", ALLOWED_ORIGINS);
  console.log("[backend][env] ALLOW_VERCEL_APP_ORIGINS:", ALLOW_VERCEL_APP_ORIGINS);
  console.log("[backend][env] DEBUG_API:", DEBUG_API);
  console.log("[backend][env] JWT_ACCESS_SECRET:", maskSecret(JWT_ACCESS_SECRET));
  console.log("[backend][env] JWT_REFRESH_SECRET:", maskSecret(JWT_REFRESH_SECRET));
  console.log("[backend][env] JWT_ACCESS_EXPIRES_IN:", JWT_ACCESS_EXPIRES_IN);
  console.log("[backend][env] JWT_REFRESH_EXPIRES_IN:", JWT_REFRESH_EXPIRES_IN);
  console.log("[backend][env] COOKIE_NAME:", COOKIE_NAME);
  console.log("[backend][env] REFRESH_COOKIE_NAME:", REFRESH_COOKIE_NAME);
  console.log("[backend][env] COOKIE_SAMESITE:", COOKIE_SAME_SITE);
  console.log("[backend][env] COOKIE_SECURE:", COOKIE_SECURE);
  console.log("[backend][env] SESSION_TTL_DAYS:", SESSION_TTL_DAYS);
  console.log("[backend][env] CONTACT_RECEIVER_EMAIL:", CONTACT_RECEIVER_EMAIL || "(empty)");
  console.log("[backend][env] EMAIL_USER:", EMAIL_USER || "(empty)");
  console.log("[backend][env] EMAIL_PASSWORD:", maskSecret(EMAIL_PASSWORD));
  console.log(
    "[backend][env] SHOPIFY_STOREFRONT_TOKEN:",
    maskSecret(SHOPIFY_STOREFRONT_TOKEN),
  );
  console.log("[backend][env] MAX_FREE_COPIES:", MAX_FREE_COPIES);

  if (ALLOWED_ORIGINS.length === 0 && !ALLOW_VERCEL_APP_ORIGINS) {
    console.warn(
      "[backend][env] WARNING: no CLIENT_URL/ALLOWED_ORIGINS entries configured.",
    );
  }
}

export function logCorsDecision(origin, allowed) {
  if (allowed) {
    if (DEBUG_API) {
      console.log("[backend][cors] allowed origin:", origin ?? "(no Origin header)");
    }
    return;
  }

  console.warn(
    "[backend][cors] blocked origin:",
    origin ?? "(missing)",
    "| allowlist:",
    ALLOWED_ORIGINS,
    "| allow vercel:",
    ALLOW_VERCEL_APP_ORIGINS,
  );
}
