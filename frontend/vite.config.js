/* global process */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

function normalizeProxyTarget(rawTarget) {
  const target = rawTarget?.trim() || "http://localhost:4000";

  if (target.startsWith("http://") || target.startsWith("https://")) {
    return target;
  }

  if (target.startsWith("localhost") || target.startsWith("127.0.0.1")) {
    return `http://${target}`;
  }

  return `https://${target}`;
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  if (mode === "production" && !env.VITE_BACKEND_URL?.trim()) {
    console.warn(
      "[vite] VITE_BACKEND_URL is not set - production API calls will fail.",
    );
  }

  const target = normalizeProxyTarget(env.VITE_BACKEND_URL);

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target,
          changeOrigin: true,
        },
      },
    },
  };
});
